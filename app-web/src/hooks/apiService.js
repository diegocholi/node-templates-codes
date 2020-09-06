import axios, { CancelToken } from 'axios'
import { useState, useEffect, useRef } from 'react'

import { API_BASE_URL } from '../constants/api'

/**
 * API Request Hook used for all requests between client and server
 * @param {*} initialData
 * @param {*} requestOptions
 * @param {*} transform
 * @param {*} events
 */
export const useRequest = (
  initialData,
  requestOptions,
  transform = null,
  events = {}
) => {
  const cancelRequestRef = useRef()
  const [requestState, setRequestState] = useState({
    data: initialData,
    statusRequest: {
      done: false,
      isLoading: false,
      success: false,
      error: false,
    },
  })

  const { jwt } = window.localStorage.getItem('@TRANS:token')
    ? JSON.parse(window.localStorage.getItem('@TRANS:token'))
    : ''

  const buildRequest = (options) => {
    if (typeof options === 'string') {
      return {
        url: API_BASE_URL + options,
        method: 'get',
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
        data: '',
      }
    }
    return {
      url: !options.external ? API_BASE_URL + options.url : options.url,
      method: options.method,
      headers: !options.external
        ? {
            Authorization: `Bearer ${jwt}`,
            ...options.headers,
          }
        : options.headers,
      data: options.data,
      params: options.params,
    }
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const buildFetch = async (force = false) => {
    if (!requestState.statusRequest.isLoading || force) {
      setRequestState({
        data: requestState.data,
        statusRequest: {
          done: false,
          isLoading: true,
          success: false,
          error: false,
          url: requestOptions.url,
        },
      })
      const { method, url, headers, data, params } = buildRequest(
        requestOptions
      )
      try {
        const result = await axios({
          method,
          url,
          headers,
          data,
          params,
          cancelToken: new CancelToken(function executor(c) {
            cancelRequestRef.current = c
          }),
        })

        setRequestState({
          data: transform ? transform(result.data) : result.data,
          statusRequest: {
            done: true,
            isLoading: false,
            success: true,
            error: false,
            url: requestOptions.url,
          },
        })

        if (events.onComplete) {
          events.onComplete(transform ? transform(result.data) : result.data)
        }
      } catch (error) {
        if (!axios.isCancel(error)) {
          setRequestState({
            data: requestState.data,
            statusRequest: {
              done: true,
              isLoading: false,
              success: false,
              error: true,
              url: requestOptions.url,
            },
          })
          if (events.onError) {
            events.onError(error)
          }
        }
      }
    }
  }

  const fetchRef = useRef()

  useEffect(() => {
    fetchRef.current = buildFetch
  }, [buildFetch])

  const fetch = () => {
    if (requestOptions.cancelRequest) {
      if (cancelRequestRef.current) {
        cancelRequestRef.current()
      }
      fetchRef.current(true)
    } else {
      fetchRef.current()
    }
  }

  const clearData = () => {
    if (requestOptions.cancelRequest && cancelRequestRef.current) {
      cancelRequestRef.current()
    }

    setRequestState({
      data: initialData,
      statusRequest: {
        done: false,
        isLoading: false,
        success: false,
        error: false,
        url: requestOptions.url,
      },
    })
  }

  return [requestState.data, requestState.statusRequest, fetch, clearData]
}

export default {
  useRequest,
}

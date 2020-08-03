import React, { useEffect, useRef, useState } from 'react'
import mapboxgl from 'mapbox-gl'

import socketIOClient from 'socket.io-client'
const ENDPOINT = 'http://127.0.0.1:4040'

const styles = {
  width: '100vw',
  height: 'calc(100vh - 80px)',
  position: 'absolute',
}

mapboxgl.accessToken =
  'pk.eyJ1IjoiZGllZ29jaG9saSIsImEiOiJja2FyY3dxbzUwaXdiMzRuMDRpMHlkNmY1In0.HU7BRHun3uPl2KkLDPWZPA'

const Mapa = () => {
  const mapContainer = useRef(null)
  const [mapa, setMapa] = useState(null)
  const [coords, setCoords] = useState({
    latitude: 35.431582013221295,
    longitude: -97.5311279296875,
  })

  /**
   * Posições de rastreamento
   */
  const [features] = useState([
    // Aqui vai o array com todos os markers
    {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'Point',
        coordinates: [coords.longitude, coords.latitude],
      },
    },
  ])

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT)
    // Cadastrando client
    var username = 'Web'
    socket.emit('register', username)

    /*Enviando mensagem direcionada*/
    username = 'Mobile'
    var message = 'Enviando mensagem para a Mobile teste2'
    socket.emit('private_chat', {
      to: username,
      message: message,
    })

    /*Recebendo mensagem direcionada*/
    socket.on('private_chat', function (data) {
      var username = data.username
      var message = data.message
      console.log(username + ': ' + message)
    })

    socket.on('tracking', (request) => {
      setCoords(JSON.parse(request))
    })
  }, [])

  useEffect(() => {
    const mapFly = (mapa) => {
      mapa.flyTo({
        center: [coords.longitude, coords.latitude],
        speed: 0.5,
        zoom: 20,
      })
    }

    /**
     * Se o mapa não estiver instanciado o instanciamos
     */
    if (!mapa) {
      const mapa = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
        center: [coords.longitude, coords.latitude],
        zoom: 20,
      })

      mapa.on('load', () => {
        setMapa(mapa)
        mapa.resize()
      })

      mapa.loadImage(
        'https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png',
        (error, image) => {
          if (error) throw error
          mapa.addImage(
            `custom-marker-${coords.latitude ? coords.latitude : 'default'}`,
            image
          )
          // Add a GeoJSON source with 3 points.
          mapa.addSource('points', {
            type: 'geojson',
            data: {
              type: 'FeatureCollection',
              features: features,
            },
          })

          // Add a symbol layer
          mapa.addLayer({
            id: 'symbols',
            type: 'symbol',
            source: 'points',
            layout: {
              'icon-image': `custom-marker-${
                coords.latitude ? coords.latitude : 'default'
              }`,
            },
          })
        }
      )
      mapFly(mapa)
    }

    /**
     * Se o mapa estiver instanciado Atualizamos os pontos de coordenadas
     */
    if (mapa) {
      features.push(
        // Aqui vai o array com todos os markers
        {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'Point',
            coordinates: [coords.longitude, coords.latitude],
          },
        }
      )

      mapa.getSource('points').setData({
        type: 'FeatureCollection',
        features: features,
      })
      mapFly(mapa)
      console.log(features)
    }
  }, [mapa, coords, features])

  return <div ref={(el) => (mapContainer.current = el)} style={styles} />
}

export default Mapa

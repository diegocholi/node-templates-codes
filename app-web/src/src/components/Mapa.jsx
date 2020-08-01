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
  const socket = socketIOClient(ENDPOINT)
  const [map, setMap] = useState(null)
  const mapContainer = useRef(null)
  const [coords, setCoords] = useState({
    latitude: 35.431582013221295,
    longitude: -97.5311279296875,
  })

  useEffect(() => {
    if (!map) initializeMap({ setMap, mapContainer })
    // Cadastrando client
    var username = 'Web'
    socket.emit('register', username)

    /*Enviando mensagem direcionada*/
    var username = 'Mobile'
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

  /**
   * Verificação de mudança de coordenadas
   */
  useEffect(() => {
    console.log(coords.latitude, coords.longitude)
    if (map) {
      map.flyTo({
        center: renderCoords(),
        speed: 0.5,
        zoom: 20,
      })
      getMarkers(map)
    }
  }, [coords])

  const renderCoords = () => {
    return [coords.longitude, coords.latitude]
  }

  const getMarkers = (map) => {
    return map.loadImage(
      'https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png',
      (error, image) => {
        if (error) throw error
        map.addImage('custom-marker', image)
        // Add a GeoJSON source with 3 points.
        map.addSource('points', {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: [
              // Aqui vai o array com todos os markers
              {
                type: 'Feature',
                properties: {},
                geometry: {
                  type: 'Point',
                  coordinates: renderCoords(),
                },
              },
              {
                type: 'Feature',
                properties: {},
                geometry: {
                  type: 'Point',
                  coordinates: renderCoords(),
                },
              },
              {
                type: 'Feature',
                properties: {},
                geometry: {
                  type: 'Point',
                  coordinates: renderCoords(),
                },
              },
            ],
          },
        })

        // Add a symbol layer
        map.addLayer({
          id: 'symbols',
          type: 'symbol',
          source: 'points',
          layout: {
            'icon-image': 'custom-marker',
          },
        })
      }
    )
  }

  const initializeMap = ({ setMap, mapContainer }) => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
      center: renderCoords(),
      zoom: 20,
    })

    map.on('load', () => {
      setMap(map)
      map.resize()
    })
  }

  return <div ref={(el) => (mapContainer.current = el)} style={styles} />
}

export default Mapa

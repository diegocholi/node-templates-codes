import React, { useEffect, useRef, useState } from 'react'
import mapboxgl from 'mapbox-gl'

import socketIOClient from 'socket.io-client'
const ENDPOINT = 'http://192.168.100.38:4040'

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

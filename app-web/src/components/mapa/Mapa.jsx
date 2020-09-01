import React, { useEffect, useRef, useState, memo } from 'react'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import mapboxgl from 'mapbox-gl'
import webSocket from '../../services/webSocket'
import MapaComponent from './components/MapaComponent'
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css'
import { useTheme } from '@material-ui/core/styles'

const token_api_mapa =
  'pk.eyJ1IjoiZGllZ29jaG9saSIsImEiOiJja2FyY3dxbzUwaXdiMzRuMDRpMHlkNmY1In0.HU7BRHun3uPl2KkLDPWZPA'

mapboxgl.accessToken = token_api_mapa

const Mapa = (props) => {
  const {
    tracking = false,
    zoom = 10,
    directions = false,
    height = 400,
    width = 400,
    position,
  } = props
  const mapContainer = useRef(null)
  const [mapaState, setMapaState] = useState(null)
  const theme = useTheme()

  const [feature, setFeature] = useState([
    // Aqui vai o array com todos os markers
    {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'Point',
        coordinates: [-49.2218399, -25.29995835],
      },
    },
  ])

  useEffect(() => {
    let mountComponent = true
    if (mountComponent) {
      let mapa = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
        center: [-49.2218399, -25.29995835],
        zoom: zoom,
      })

      // Verificação de Mapa modo rotas
      if (directions) {
        mapa.addControl(
          new MapboxDirections({
            accessToken: token_api_mapa,
            unit: 'metric',
            profile: 'mapbox/driving-traffic',
            alternatives: true,
            language: 'pt-BR',
            geocoder: {
              language: 'pt-BR',
            },
            placeholderOrigin: 'Escolha um ponto de partida',
            placeholderDestination: 'Escolha o destino',
          }),
          'top-left'
        )
      }
      setMapaState(mapa)

      // Verificação de Mapa modo rastreamento
      if (tracking) {
        webSocket(feature, setFeature)
      }
    }

    return () => {
      mountComponent = false
    }
  }, [directions, zoom, feature, tracking])

  useEffect(() => {
    let mounteComponent = true
    /**
     * Se o mapa não estiver instanciado o instanciamos
     */
    if (tracking && mapaState) {
      mapaState.loadImage(
        'https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png',
        (error, image) => {
          if (error) throw error
          const idImageChecker = Number(String(Math.random()).split('.')[1])
          mapaState.addImage(`custom-marker-${idImageChecker}`, image)

          try {
            if (mounteComponent)
              mapaState.getSource('points').setData({
                type: 'FeatureCollection',
                features: feature,
              })
          } catch (err) {
            if (mounteComponent)
              // Add a GeoJSON source with 3 points.
              mapaState.addSource('points', {
                type: 'geojson',
                data: {
                  type: 'FeatureCollection',
                  features: feature,
                },
              })
          }

          // Add a symbol layer
          mapaState.addLayer({
            id: `symbols-${idImageChecker}`,
            type: 'symbol',
            source: 'points',
            layout: {
              'icon-image': `custom-marker-${idImageChecker}`,
            },
          })
        }
      )
      mapaState.flyTo({
        center: [
          feature[feature.length - 1].geometry.coordinates[0],
          feature[feature.length - 1].geometry.coordinates[1],
        ],
        speed: 0.5,
        zoom: zoom,
      })
    }

    return () => {
      mounteComponent = false
    }
  }, [feature, mapaState, zoom, tracking])

  return (
    <div
      style={{
        height: useMediaQuery(theme.breakpoints.down('sm')) ? '100%' : '100vh',
      }}
    >
      <MapaComponent
        position={position}
        height={height}
        width={width}
        mapContainer={mapContainer}
      />
    </div>
  )
}

export default memo(Mapa)

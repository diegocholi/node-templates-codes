import React, { useEffect, useRef, useState } from 'react'
import mapboxgl from 'mapbox-gl'

const styles = {
  width: '100vw',
  height: 'calc(100vh - 80px)',
  position: 'absolute',
}

mapboxgl.accessToken =
  'pk.eyJ1IjoiZGllZ29jaG9saSIsImEiOiJja2FyY3dxbzUwaXdiMzRuMDRpMHlkNmY1In0.HU7BRHun3uPl2KkLDPWZPA'

const Mapa = () => {
  const [map, setMap] = useState(null)
  const mapContainer = useRef(null)
  useEffect(() => {
    if (!map) initializeMap({ setMap, mapContainer })
  }, [map])

  const initializeMap = ({ setMap, mapContainer }) => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
      center: [-49.3449382, -25.4226188],
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

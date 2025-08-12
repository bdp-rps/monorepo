import { MapContainer, TileLayer, Circle } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

export default function MapView({ position, zoom = 7, radius = 10000 }) {
  return (
    <MapContainer
      center={position}
      zoom={zoom}
      scrollWheelZoom={false}
      style={{ height: '100%', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Circle
        center={position}
        radius={Math.max(radius, 10000)} // radius in meters
        pathOptions={{
          color: 'blue',
          fillColor: 'lightblue',
          fillOpacity: 0.5,
        }}
      />
    </MapContainer>
  )
}

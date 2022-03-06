import { useCallback, useMemo, useRef, useState } from 'react'
import { Marker, Popup } from 'react-leaflet'
import { icon } from 'leaflet'
import { Box } from '@bdp-rps/ui'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import stammesheim from '../../public/images/stammesheim.svg'
import stammeslager from '../../public/images/stammeslager.svg'
import heim from '../../public/images/heim.svg'
import lager from '../../public/images/lager.svg'

const placeIcon = (type) => {
  let iconSvg = stammesheim
  switch (type) {
    case 'heim':
      iconSvg = heim
      break
    case 'lager':
      iconSvg = lager
      break
    case 'stammeslager':
      iconSvg = stammeslager
      break

    default:
      iconSvg = stammesheim
      break
  }
  return icon({
    iconUrl: iconSvg.src,
    iconSize: new L.Point(36, 36),
  })
}

const PlaceMarker = ({ lat, lng, name, mail, size, phone, type }) => {
  const markerRef = useRef(null)

  return (
    <Marker icon={placeIcon(type)} position={[lat, lng]} ref={markerRef}>
      <Popup minWidth={90}>
        <span>
          Latitude: {lat}
          <br />
          Longitude: {lng}
          <br />
          Name: {name}
          <br />
          Größe: {size}
          <br />
          Mail: {mail}
          <br />
          Type: {type}
        </span>
      </Popup>
    </Marker>
  )
}

export default PlaceMarker

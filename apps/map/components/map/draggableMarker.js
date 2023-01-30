import { useCallback, useMemo, useRef, useState, useEffect } from 'react'
import { Marker, Popup, Tooltip, useMap } from 'react-leaflet'
import { icon } from 'leaflet'
import { Box } from '@bdp-rps/ui'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import placeMarker from '../../public/images/placeMarker.svg'

const iconPerson = icon({
  iconUrl: placeMarker.src,
  iconSize: new L.Point(36, 36),
})

const DraggableMarker = ({ setPosition, position, visible }) => {
  const [draggable, setDraggable] = useState(false)
  const map = useMap()
  const markerRef = useRef(null)
  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current
        if (marker != null) {
          setPosition(marker.getLatLng())
        }
      },
    }),
    []
  )
  const toggleDraggable = useCallback(() => {
    setDraggable((d) => !d)
  }, [])
  useEffect(() => {
    if (visible) {
      setPosition(map.getCenter())
    } else {
      setPosition(null)
    }
  }, [visible])
  return (
    <>
      {visible && position !== null && (
        <Marker
          icon={iconPerson}
          draggable={true}
          eventHandlers={eventHandlers}
          position={position}
          ref={markerRef}>
          <Tooltip minWidth={90} permanent>
            <span>
              Latitude: {position.lat}
              <br />
              Longitude: {position.lng}
            </span>
          </Tooltip>
        </Marker>
      )}
    </>
  )
}

export default DraggableMarker

import { useCallback, useMemo, useRef, useState } from 'react'
import { Marker, Popup } from 'react-leaflet'
import { icon } from 'leaflet'
import { Box, Link, Text, Button, Spacer } from '@bdp-rps/ui'
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

const PlaceMarker = ({
  lat,
  lng,
  name,
  mail,
  size,
  phone,
  type,
  description,
  place,
  street,
  postcode,
}) => {
  const markerRef = useRef(null)
  const [moreVisible, setMoreVisible] = useState(false)
  if (!lat || !lng) {
    return null
  }
  return (
    <Marker icon={placeIcon(type)} position={[lat, lng]} ref={markerRef}>
      <Popup minWidth={90}>
        <Box>
          <Text>Name: {name}</Text>
          <Text>Größe: {size}</Text>
          <Text>Typ: {type}</Text>
          <Spacer size={2} />
          {moreVisible && (
            <>
              <Text>
                Mail: <a href={`mailTo:${mail}`}>{mail}</a>
              </Text>
              <Text>
                Telefonnummer: <a href={`phone:${phone}`}>{phone}</a>
              </Text>
              <Spacer size={2} />
              <Text>Adresse</Text>
              <Text>
                {postcode} {place}
              </Text>
              <Text>{street}</Text>
              <Spacer size={2} />
              <Text>Beschreibung</Text>
              <Text>{description}</Text>
            </>
          )}
          <Spacer size={4} />
          <Button
            size="small"
            variant="secondary"
            onClick={() => setMoreVisible((prev) => !prev)}>
            {moreVisible ? 'weniger' : 'mehr'}
          </Button>
        </Box>
      </Popup>
    </Marker>
  )
}

export default PlaceMarker

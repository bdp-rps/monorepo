import { useCallback, useMemo, useRef, useState } from 'react'
import { Box, Link, Text, Button, Spacer } from '@bdp-rps/ui'

import { Marker, Popup, useMap } from 'react-leaflet'
import { icon } from 'leaflet'
import markerIcon from 'leaflet/dist/images/marker-icon.png'

import stammesheim from '../../public/images/stammesheim.svg'
import stammeslager from '../../public/images/stammeslager.svg'
import heim from '../../public/images/heim.svg'
import lager from '../../public/images/lager.svg'

import PopupTile from './popupTile'
import { sizeToString, typeToString } from '../../utils'

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
  features,
  url,
  setPosition,
}) => {
  const markerRef = useRef(null)
  const [moreVisible, setMoreVisible] = useState(false)
  if (!lat || !lng) {
    return null
  }

  return (
    <Marker
      eventHandlers={{
        click: (e) => setPosition(e.latlng),
      }}
      icon={placeIcon(type)}
      position={[lat, lng]}
      ref={markerRef}>
      <Popup minWidth={90} className="request-popup">
        <PopupTile title={name}>
          <Box>
            <Text variant="category">Allgemeine Infos</Text>
            <Text variant="note">Größe: {sizeToString(size)}</Text>
            <Text variant="note">Typ: {typeToString(type)}</Text>
            <Spacer size={2} />
            {moreVisible && (
              <>
                <Text variant="category">Kontaktdaten</Text>
                <Text variant="note">
                  Mail: <a href={`mailTo:${mail}`}>{mail}</a>
                </Text>
                <Text variant="note">
                  Telefonnummer: <a href={`phone:${phone}`}>{phone}</a>
                </Text>
                <Text variant="note">
                  Webseite:{' '}
                  {url ? (
                    <a
                      target="_blank"
                      href={
                        url.includes('https://www.')
                          ? url
                          : `https://www.${url}`
                      }>
                      {url}
                    </a>
                  ) : (
                    <Text variant="note">Keine Angaben</Text>
                  )}
                </Text>
                <Spacer size={2} />
                <Text variant="category">Adresse</Text>
                <Text variant="note">
                  {postcode} {place}
                </Text>
                <Text variant="note">{street}</Text>
                <Spacer size={2} />
                <Text variant="category">Beschreibung</Text>
                <Text variant="note">
                  {description === null || description.isEmpty
                    ? 'Keine Angaben'
                    : description}
                </Text>
                {features?.filter((feature) => feature.val).length > 0 && (
                  <>
                    {' '}
                    <Text variant="category">Ausstattung</Text>
                    <Box>
                      {features
                        ?.filter((feature) => feature.val)
                        .map((feature) => (
                          <Text variant="note">{feature.label}</Text>
                        ))}
                    </Box>
                  </>
                )}
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
        </PopupTile>
      </Popup>
    </Marker>
  )
}

export default PlaceMarker

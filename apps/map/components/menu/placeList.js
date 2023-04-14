import React, { useState } from 'react'
import { Box, Text, Spacer, Tile, Button } from '@bdp-rps/ui'
import PopupTile from '../map/popupTile'

const PlaceCard = ({
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
  onMoveTo,
}) => {
  const [showMore, setShowMore] = useState(false)
  return (
    <Tile title={name}>
      <Box>
        <Text variant="category">Allgemeine Infos</Text>
        <Text variant="note">Größe: {size}</Text>
        <Text variant="note">Typ: {type}</Text>
        <Spacer size={2} />
        {showMore && (
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
                    url.includes('https://www.') ? url : `https://www.${url}`
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
        <Box direction="row" space={2}>
          <Button size="small" onClick={() => setShowMore((prev) => !prev)}>
            {showMore ? 'weniger' : 'mehr'}
          </Button>
          <Button
            size="small"
            variant="secondary"
            onClick={() => onMoveTo({ lat, lng })}>
            gehe zu
          </Button>
        </Box>
      </Box>
    </Tile>
  )
}

const PlaceList = ({ places, onMoveTo }) => {
  return (
    <Box space={2}>
      {places.map((place) => (
        <PlaceCard {...place.attributes} onMoveTo={onMoveTo} />
      ))}
    </Box>
  )
}

export default PlaceList

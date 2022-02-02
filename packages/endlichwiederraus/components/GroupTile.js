import { useState } from 'react'
import {
  Box,
  Text,
  Spacer,
  Link,
  IconLeftOpenBig,
  IconRightOpenBig,
  IconMail,
  IconPhone,
  IconFacebookSquared,
  IconInstagrem,
  IconGlobe,
  useTheme,
} from '@bdp-rps/ui'
// import Image from 'next/image'

import images from '../data/images.json'

function getIdFromGroup(group) {
  return group
    .replace(/ /gi, '-')
    .replace(/ö/gi, 'oe')
    .replace(/ä/gi, 'ae')
    .replace(/ü/gi, 'ue')
    .toLowerCase()
}

export default function Tile({
  group,
  lv,
  location,
  foundedAt,
  members,
  contact,
}) {
  const theme = useTheme()
  const [imageIndex, setImageIndex] = useState(0)

  const id = getIdFromGroup(group)
  const availableImages = images[id]

  const { mail, website, phone, name, instagram, facebook } = contact

  return (
    <Box
      grow={1}
      extend={{
        backgroundColor: 'white',
        boxShadow: '0 5px 5px rgba(0,0,0,.1)',

        '& img': {
          transition: 'filter 300ms ease-in-out',
          filter: 'saturate(0.5) grayscale(0.2)',
        },
        ':hover': {
          '& img': {
            filter: 'unset',
          },
        },
      }}>
      <Box>
        <Box
          paddingLeft={4}
          paddingRight={4}
          height={0}
          width="100%"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          extend={{
            transform: 'translateY(150px)',
            zIndex: 1,
            [theme.breakpoints.small]: {
              transform: 'translateY(180px)',
            },
            [theme.breakpoints.medium]: {
              transform: 'translateY(150px)',
            },
            [theme.breakpoints.large]: {
              transform: 'translateY(180px)',
            },
          }}>
          <Box>
            {imageIndex > 0 && (
              <Box
                as="button"
                width={50}
                height={50}
                paddingRight={1}
                alignItems="center"
                justifyContent="center"
                extend={{
                  border: 0,
                  cursor: 'pointer',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.6)',
                }}
                onClick={() => setImageIndex(imageIndex - 1)}>
                <IconLeftOpenBig size={26} />
              </Box>
            )}
          </Box>
          <Box>
            {imageIndex < availableImages.length - 1 && (
              <Box
                as="button"
                width={50}
                height={50}
                paddingLeft={1}
                alignItems="center"
                justifyContent="center"
                extend={{
                  border: 0,
                  cursor: 'pointer',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.6)',
                }}
                onClick={() => setImageIndex(imageIndex + 1)}>
                <IconRightOpenBig size={26} />
              </Box>
            )}
          </Box>
        </Box>
        <Box
          as="img"
          width="100%"
          height={[300, 360, 300, 360]}
          src={
            '/groups/' + getIdFromGroup(id) + '/' + availableImages[imageIndex]
          }
          extend={{
            objectFit: 'cover',
          }}
        />
      </Box>
      <Box padding={4}>
        <Text variant="subtitle">Stamm {group}</Text>
        <Text variant="category">{location}</Text>
        <Spacer size={1} />
        <Text>
          LV {lv} • {foundedAt} gegründet • {members} Mitglieder
        </Text>
      </Box>
      <Box
        padding={4}
        direction="row"
        space={5}
        wrap="wrap"
        extend={{
          backgroundColor: 'rgba(255, 203, 4, 0.8)',
        }}>
        {mail && (
          <Link href={'mailto:' + mail}>
            <IconMail size={26} />
          </Link>
        )}
        {website && (
          <Link href={website}>
            <IconGlobe size={26} />
          </Link>
        )}
        {phone && (
          <Link href={'tel:' + phone}>
            <IconPhone size={26} />
          </Link>
        )}
        {instagram && (
          <Link href={'https://instagram.com/' + instagram}>
            <IconInstagrem size={26} />
          </Link>
        )}
        {facebook && (
          <Link href={'https://facebook.com/' + facebook}>
            <IconFacebookSquared size={26} />
          </Link>
        )}
      </Box>
    </Box>
  )
}

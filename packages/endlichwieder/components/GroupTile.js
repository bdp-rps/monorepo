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
import Image from 'next/image'

import images from '../data/images.json'

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
  const availableImages = images[group]

  const { mail, website, phone, name, instagram, facebook } = contact

  return (
    <Box
      grow={1}
      extend={{
        backgroundColor: 'white',
        boxShadow: '0 5px 5px rgba(0,0,0,.1)',
      }}>
      <Box>
        <Box
          paddingLeft={4}
          paddingRight={4}
          height={300}
          width="calc(100% - 16px)"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          extend={{ position: 'absolute' }}>
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
                  backgroundColor: 'rgba(255, 255, 255, 0.7)',
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
                  backgroundColor: 'rgba(255, 255, 255, 0.7)',
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
          height={300}
          src={'/groups/' + group + '/' + availableImages[imageIndex]}
          extend={{ objectFit: 'cover' }}
        />
      </Box>
      <Box padding={4}>
        <Text intent="subtitle">Stamm {group}</Text>
        <Text intent="category">{location}</Text>
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
        extend={{ backgroundColor: 'rgba(255, 203, 4, 0.8)' }}>
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

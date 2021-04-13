import { Box, Text, Spacer, Link, useTheme } from '@bdp-rps/ui'
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
  const availableImages = images[group]

  const { mail, website, phone, name, instagram, facebook } = contact

  return (
    <Box
      grow={1}
      extend={{
        backgroundColor: 'white',
        boxShadow: '0 5px 5px rgba(0,0,0,.1)',
      }}>
      <Box width="100%" height={300} extend={{ position: 'relative' }}>
        <Image
          src={'/groups/' + group + '/' + availableImages[0]}
          layout="fill"
          objectFit="cover"
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
        {mail && <Link href={'mailto:' + mail}>E-Mail</Link>}
        {website && <Link href={website}>Website</Link>}
        {phone && <Link href={'tel:' + phone}>Telefon</Link>}
        {instagram && (
          <Link href={'https://instagram.com/' + instagram}>Instagram</Link>
        )}
        {facebook && (
          <Link href={'https://facebook.com/' + facebook}>Facebook</Link>
        )}
      </Box>
    </Box>
  )
}

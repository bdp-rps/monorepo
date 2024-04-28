import * as React from 'react'
import { Box, Text, useTheme, Link } from '@bdp-rps/ui'

export default () => (
  <React.Fragment>
    <Box space={2}>
      <Text variant="subtitle">Liedgut</Text>
      <Text>
        Wir sind der AK Liedgut des LV RPS. Wir möchten die musische Arbeit in
        unserem Landesverband stärken, neue Lieder in den LV bringen und
        Gitarrenspieler fördern. Als Arbeitskreis stehen wir euch zu allen
        Fragen und Anliegen zum Thema Liedgut als Ansprechpartner zur Seite. Wir
        sind erreichbar unter{' '}
        <Link href="mailto:liedgut@bdp-rps.de">liedgut@bdp-rps.de</Link>.
      </Text>
    </Box>
  </React.Fragment>
)

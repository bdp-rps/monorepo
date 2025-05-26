import * as React from 'react'

import { Box, Text, Spacer } from '@bdp-rps/ui'

export default () => (
  <Box>
    <Text variant="subtitle">Die Versprechen</Text>
    <Spacer size={4} />
    <Box space={6}>
      <Box space={2}>
        <Text variant="category">
          Die Versprechen, Aufnahmefeier und Versprechensregeln
        </Text>
        <Text>
          Alle Pfadfinder*innen legen bei der Aufnahme bei einer
          Versprechensfeier ihr Pfadiversprechen ab. Danach erhalten sie ihr
          Pfadfinder- bzw. Wölflingsabzeichen. In den verschiedenen Bünden gibt
          es viele verschieden ausformulierte Versprechen, vom Sinn her sind
          alle gleich.
        </Text>
      </Box>
      <Box space={2}>
        <Text variant="category">
          Das Originalversprechen von Robert Baden-Powell
        </Text>
        <Text>
          “On my honour I promise that I will do my best – To do my duty to God
          and the King (or to God and my Country) To help other people at all
          times To obey the Scout Law.”
        </Text>
      </Box>
      <Box space={2}>
        <Text variant="category">
          Im BdP ist das Versprechen und die Regeln wie folgt ausformuliert
        </Text>
        <Text>
          Ich will nach den Regeln der Pfadfinderinnen und Pfadfinder mit euch
          leben.
          <br />
          Ich will hilfsbereit und rücksichtsvoll sein. <br />
          Ich will den anderen achten. <br />
          Ich will zur Freundschaft aller Pfadfinderinnen und Pfadfinder
          beitragen.
          <br />
          Ich will aufrichtig und zuverlässig sein. <br />
          Ich will kritisch sein und Verantwortung übernehmen. <br />
          Ich will Schwierigkeiten nicht ausweichen. (Ich will Problemen nicht
          aus dem Weg gehen)
          <br />
          Ich will die Natur kennen lernen und helfen, sie zu erhalten. <br />
          Ich will mich beherrschen. <br />
          Ich will dem Frieden dienen und mich für die Gemeinschaft einsetzen,
          in der ich lebe.
        </Text>
      </Box>
      <Box space={2}>
        <Text variant="category">Für Wölflinge gilt folgendes Versprechen</Text>
        <Text>
          Ein Wölfling nimmt Rücksicht auf andere.
          <br />
          Ein Wölfling hilft, wo er kann.
          <br />
          Ich will ein guter Freund sein und unsere Regeln achten.
        </Text>
      </Box>
    </Box>
  </Box>
)

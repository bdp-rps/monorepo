import { Box, Link, Text, Spacer } from '@bdp-rps/ui'

import postPlaces from '../../api/postPlaces'

const PlaceFilter = ({ setFilters, filters }) => {
  return (
    <Box>
      <Text>
        Der Platzfinder soll Stämmen im Landesverband Rheinland-Pfalz Saar
        helfen geignete Plätze für ihre Lager zu finden.
      </Text>
      <Text>Fügt gerne alle möglichen Plätze ein die ihr so kennt!</Text>
      <br />
      <Text>
        Bei Fragen oder Anregungen meldet euch gerne über:{' '}
        <Link href="mailTo:medien@bdp-rps.de">medien@bdp-rps.de</Link>
      </Text>
      <Spacer size={12} />
      <Text variant="note">made with love by your Lb Medien</Text>
    </Box>
  )
}
export default PlaceFilter

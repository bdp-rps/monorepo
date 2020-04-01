import { useRouter } from 'next/router'

import {
  Card,
  Box,
  NavBar,
  NavBarItem,
  Text,
  useTheme,
  Spacer,
  Tile,
  Link,
} from '@bdp-rps/ui'

import Layout from '../../components/Layout'
import Template from '../../components/Template'

const subNav = {
  '/landesleitung': 'Landesleitung',
  '/staemme': 'Stämme',
  '/leitsaetze': 'Leitsätze',
  '/club-29': 'Club 29',
  '/watato-kabisa': 'Watato Kabisa',
  '/geschichte': 'Geschichte',
}

export default () => {
  const router = useRouter()

  return (
    <Template>
      <NavBar intent="secondary">
        <Layout>
          <Box direction={['column', , 'row']} paddingLeft={5}>
            {Object.keys(subNav).map(path => (
              <NavBarItem
                href={'/landesverband' + path}
                active={router.pathname.indexOf(path) !== -1}>
                {subNav[path]}
              </NavBarItem>
            ))}
          </Box>
        </Layout>
      </NavBar>
      <Layout paddingTop={10} paddingBottom={10}>
        <Box>
          <Text>
            <Text intent="category">Willkommen bei den Pfadfindern.</Text>
            <br />
            Wie sich Seeleute an den Sternen orientierten, so braucht auch eine Gemeinschaft feste Richtwerte, die von dauerhafter Gültigkeit sind.
            Wir, die Stämme im Landesverband Rheinland-Pfalz / Saar im Bund der Pfadfinderinnen und Pfadfinder, haben uns die folgenden Leitsätze gegeben,
            um die Freundschaft und Verbundenheit zwischen unseren Stämme zu fördern. Sie halten fest, was das Wesen unseres Landesverbandes ausmacht.
            Sie sind Ziel und Anspruch zugleich.
            <br />
          </Text></Box>
      </Layout>
      <Layout
        grow={1}
        paddingTop={5}
        paddingBottom={10}
        alignSelf="stretch"
        extend={{ backgroundColor: 'rgb(235, 235, 235)' }}>
        <Text intent="subtitle">Wir wollen...</Text>
        <Box paddingTop={2} direction={['column', , , 'row']} space={4}>
          <Box grow={10}>
            <Tile title="1. einen Beitrag zur Persönlichkeitsbildung junger Menschen leisten" image="/images/bg.jpg" highlight>
            Unser Ziel ist es, junge Menschen in der Entwicklung zu eigenverantwortlichen, kritischen und engagierten Persönlichkeiten zu unterstützen.
            <br />
            Unsere Mitglieder sollen in der Lage sein, Verantwortung für sich selbst und für andere zu übernehmen. Die Fähigkeiten und Werte,
            <br />
            die sie im Stamm und Landesverband erwerben, sollen sie auch außerhalb unserer Gemeinschaft positiv in die Gesellschaft einbringen.
            <br />
            Um dieses Ziel zu erreichen, müssen junge Leute in unserem Landesverband ein stimmiges Umfeld finden, in dem ihre Persönlichkeit wachsen kann.
            </Tile>
            <Tile title="Aktueller Post" image="/images/bg.jpg" highlight>
              Das ist der aktuelle Post, der wird gehighlighted.
            </Tile>
          </Box>
        </Box>
      </Layout>
    </Template>
  )
}

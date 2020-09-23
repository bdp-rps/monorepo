import { useRouter } from 'next/router'

import {
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

export default () => (
  <Template>
    <Layout paddingTop={10} paddingBottom={15}>
      <Text intent="subtitle">Der BdP - unser Bund!</Text>
      <Spacer size={2} />
      <Text>
        Der BdP ist Teil der Weltpfadfinderinnen- und -pfadfinderbewegung und
        steht in der Tradition der deutschen Jugendbewegung.
        <br />
        Wir wollen durch eine zeitgemäße Kinder- und Jugendarbeit zur
        Persönlichkeitsentwicklung junger Menschen beizutragen.
        <br />
        Wir sind ist ein interkonfessioneller Jugendverband, der frei von
        politischen Weltanschauungen arbeitet. Der BdP will mit seinen
        Mitgliedern als verantwortliche Bürgerinnen und Bürger eine
        demokratische, weltoffene Gesellschaft mitgestalten und mittragen.
        <br />
        Als Mitglied des Ringes deutscher Pfadfinder ist der BdP im Deutschen
        Bundesjugendring und in den Weltorganisationen der Pfadfinderinnen und
        der Pfadfinder vertreten.
      </Text>
    </Layout>
  </Template>
)

import {
  Box,
  NavBar,
  NavBarItem,
  Text,
  useTheme,
  Spacer,
  Tile,
  Link,
  Button,
  ScrollView,
} from '@bdp-rps/ui'
import NextLink from 'next/link'

import Layout from '../components/Layout'
import Template from '../components/Template'

export default () => {
  const theme = useTheme()

  return (
    <Template
      navImg='url("/images/spendenBg.jpg")'
      title="Spenden"
      subTitle="ein förderverein lebt von seinen spenden">
      <Layout paddingTop={5} paddingBottom={5}>
        <Box space={2}>
          <Text intent="heading" color={theme.tokens.primary}>
            Wer sind wir?
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et
            ex et urna ullamcorper consequat nec sed nisi. Aliquam auctor sem
            dignissim leo imperdiet, in interdum ante fermentum. Mauris et metus
            ut lacus congue iaculis a a lacus. Curabitur fringilla malesuada
            pretium. Quisque eget facilisis odio. Praesent tellus quam,
            vestibulum ac sem non, faucibus convallis erat. Sed vel lorem
            tincidunt, sodales tortor auctor, accumsan diam. Aliquam placerat
            aliquet purus, quis volutpat enim tincidunt vel. Nunc nec maximus
            libero. Nulla eget odio volutpat, dictum quam at, placerat sapien.
            Duis suscipit eu nisl pretium scelerisque. Phasellus aliquam, mi
            quis suscipit sodales, mi nisl rutrum lectus.
          </Text>
        </Box>
      </Layout>
    </Template>
  )
}

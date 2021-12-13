import { useRouter } from 'next/router'
import React, { useState } from 'react'
import {
  Box,
  El,
  Text,
  useTheme,
  Spacer,
  Tile,
  IconMenu,
  IconButton,
  useScrollBlockingOverlay,
} from '@bdp-rps/ui'
import Image from 'next/image'

import NavBarItem from './NavBarItem'
import NavBar from './NavBar'
import Logo from './Logo'
import Menu from './Menu'
import Layout from './Layout'
import Footer from './Footer'

import defaultImage from '../public/images/bg.jpg'

const nav = {
  '/': 'Startseite',
  '/projekte': 'Projekte',
  '/ueberuns': 'Über Uns',
  '/blog': 'Chronik',
  '/spenden': 'Spenden',
  '/mitglied': 'Mitglied Werden',
  '/geschenkkarten': 'Geschenkkarten',
}

export default function Template({
  children,
  image,
  title,
  subTitle,
  heroHeight = '100vh',
}) {
  const router = useRouter()
  const theme = useTheme()
  const [menuVisible, setMenuVisible] = useScrollBlockingOverlay(false, 1024)

  const hideMenu = () => {
    setMenuVisible(false)
  }

  const navBarItems = Object.keys(nav).map(path => (
    <NavBarItem
      href={path}
      active={
        path === '/'
          ? router.pathname === '/'
          : router.pathname.indexOf(path) !== -1
      }>
      {nav[path]}
    </NavBarItem>
  ))

  return (
    <Box grow={1}>
      <Menu menuVisible={menuVisible} hideMenu={hideMenu}>
        {navBarItems}
      </Menu>

      <Box height={heroHeight} width="100%" bg="rgba(0,0,0,0.3)">
        <Box
          extend={{
            zIndex: -1,
            pointerEvents: 'none',
            position: 'fixed',
            width: '100%',
            height: '100%',
            filter: 'contrast(0.9)',
          }}>
          <El
            as={Image}
            src={image || defaultImage}
            placeholder={typeof image !== 'string' && 'blur'}
            layout="fill"
            objectFit="cover"
          />
        </Box>
        <Box
          padding={2}
          direction="row"
          justifyContent="space-between"
          display={['flex', , , 'none']}>
          <Logo />
          <IconButton
            icon={props => <IconMenu fill="white" {...props} />}
            iconSize={40}
            onClick={() => setMenuVisible(true)}
          />
        </Box>
        <Box
          display={['none', , , 'flex']}
          direction="row"
          justifyContent="space-between"
          paddingLeft={15}
          paddingRight={10}
          paddingTop={5}>
          <Logo />
          <NavBar>
            <Layout>
              <Box direction="row">{navBarItems}</Box>
            </Layout>
          </NavBar>
        </Box>
        <Layout paddingTop="10vh">
          <Text
            variant="title"
            align="center"
            color="white"
            extend={{
              fontSize: 60.0,
              medium: { fontSize: 84.0 },
              textShadow: theme.tokens.textOnImageShadow,
            }}>
            {title}
          </Text>
          <Text
            variant="subtitle"
            color="white"
            align="center"
            extend={{
              textShadow: theme.tokens.textOnImageShadow,
            }}>
            {subTitle}
          </Text>
        </Layout>
      </Box>

      <Box grow={1}>{children}</Box>
      <Footer />
    </Box>
  )
}

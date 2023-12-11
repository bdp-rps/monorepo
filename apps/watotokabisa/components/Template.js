import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import {
  Box,
  El,
  Text,
  useTheme,
  Spacer,
  Tile,
  IconMenu,
  IconButton,
} from '@bdp-rps/ui'
import Image from 'next/image'
import { useLayerWithSizeConstraints } from 'react-scroll-blocking-layers'

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
  const [menuVisible, setMenuVisible] = useLayerWithSizeConstraints(1024)

  useEffect(() => {
    function handleRouteChange() {
      setMenuVisible(false)
    }

    router.events.on('beforeHistoryChange', handleRouteChange)

    return () => {
      router.events.off('beforeHistoryChange', handleRouteChange)
    }
  }, [])

  const navBarItems = Object.keys(nav).map((path) => (
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
      <Menu menuVisible={menuVisible} hideMenu={() => setMenuVisible(false)}>
        {navBarItems}
      </Menu>

      <Box height={heroHeight} width="100%" bg="rgba(0,0,0,0.3)">
        <Box
          extend={{
            zIndex: -1,
            pointerEvents: 'none',
            position: 'fixed',
            width: '100vw',
            height: '100vh',
            filter: 'contrast(0.9)',
          }}>
          <El
            as={Image}
            src={image || defaultImage}
            priority
            layout="fill"
            objectFit="cover"
            placeholder="blur"
          />
        </Box>
        <Box
          padding={2}
          direction="row"
          justifyContent="space-between"
          display={['flex', , , 'none']}>
          <Logo />
          <IconButton
            icon={(props) => <IconMenu fill="white" {...props} />}
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

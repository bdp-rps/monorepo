import { useState, useEffect, createContext, useContext } from 'react'
import { useFela } from 'react-fela'

const getConstraints = (id, offset = 0, order, cache) => {
  const previous = order.slice(0, order.indexOf(id) + offset)

  return previous.reduce(
    (constraints, id) => {
      const entry = cache[id]

      constraints[entry.align] += entry.size
      return constraints
    },
    {
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
    }
  )
}

function Fixed({
  as: Component = 'div',
  style: customStyle = {},
  id,
  size,
  align,
  children,
  body = 'body',
  ...props
}) {
  const { renderer } = useFela()

  if (!renderer.fixCache) {
    renderer.fixCache = {}
    renderer.order = []
  }

  const isHorizontal = align === 'left' || align === 'right'

  if (!renderer.order[id]) {
    renderer.order.push(id)
  }

  if (!renderer.fixCache[id]) {
    renderer.fixCache[id] = {
      size,
      align,
    }

    const { top, bottom, left, right } = getConstraints(
      id,
      1,
      renderer.order,
      renderer.fixCache
    )
    renderer.renderStatic(
      {
        paddingTop: top,
        paddingBottom: bottom,
        paddingRight: right,
        paddingLeft: left,
      },
      body
    )
  }

  const constraints = getConstraints(id, 0, renderer.order, renderer.fixCache)

  const style = {
    ...customStyle,
    position: 'fixed',
    [align]: constraints[align],
  }

  if (isHorizontal) {
    style.top = constraints.top
    style.bottom = constraints.bottom
    style.width = size
    style.maxWidth = size
  } else {
    style.left = constraints.left
    style.right = constraints.right
    style.height = size
    style.maxHeight = size
  }

  return (
    <Component {...props} style={style}>
      {children}
    </Component>
  )
}

export default () => (
  <>
    <Fixed
      style={{ backgroundColor: 'green' }}
      id="nav"
      as="nav"
      size={50}
      body="#container"
      align="top">
      Fox
    </Fixed>
    <Fixed
      style={{ backgroundColor: 'red' }}
      id="footer"
      size={30}
      body="#container"
      align="bottom">
      Baz
    </Fixed>

    <Fixed
      style={{ backgroundColor: 'blue' }}
      id="search"
      size={40}
      body="#container"
      align="top">
      <div style={{ padding: 10 }}>
        <input />
      </div>
    </Fixed>
    <Fixed
      style={{ backgroundColor: 'purple' }}
      id="sidebar"
      as="nav"
      size={100}
      body="#container"
      align="left">
      Sidebar
    </Fixed>
    <Fixed
      style={{ backgroundColor: 'yellow' }}
      id="rightbar"
      as="span"
      size={100}
      body="#container"
      align="right">
      Sidebar
    </Fixed>
    <div id="container">
      Start
      <br />
      Hello
      <br />
      Hello
      <br />
      Hello
      <br />
      Hello
      <br />
      Hello
      <br />
      Hello
      <br />
      Hello
      <br />
      Hello
      <br />
      Hello
      <br />
      Hello
      <br />
      Hello
      <br />
      Hello
      <br />
      Hello
      <br />
      Hello
      <br />
      Hello
      <br />
      Hello
      <br />
      Hello
      <br />
      Hello
      <br />
      Hello
      <br />
      Hello
      <br />
      Hello
      <br />
      Hello
      <br />
      Hello
      <br />
      Hello
      <br />
      Hello
      <br />
      Hello
      <br />
      Hello
      <br />
      Hello
      <br />
      Hello
      <br />
      Hello
      <br />
      Hello
      <br />
      Hello
      <br />
      Hello
      <br />
      Hello
      <br />
      Hello
      <br />
      Hello
      <br />
      Hello
      <br />
      Hello
      <br />
      Hello
      <br />
      Hello
      <br />
      Hello
      <br />
      Hello
      <br />
      Hello
      <br />
      Hello
      <br />
      Hello
      <br />
      Hello
      <br />
      Hello
      <br />
      Hello
      <br />
      Hello
      <br />
      Hello
      <br />
      Hello
      <br />
      Hello
      <br />
      Hello
      <br />
      Hello
      <br />
      Hello
      <br />
      Hello
      <br />
      Hello
      <br />
      Hello
      <br />
      Hello
      <br />
      Hello
      <br />
      Hello
      <br />
      Hello
      <br />
      Hello
      <br />
      Hello
      <br />
      Hello
      <br />
      Hello
      <br />
      Hello
      <br />
      Hello
      <br />
      Hello
      <br />
      Hello
      <br />
      Hello
      <br />
      Hello
      <br />
      Hello
      <br />
      Hello
      <br />
      Hello
      <br />
      Hello
      <br />
      Hello
      <br />
      Hello
      <br />
      Hello
      <br />
      Hello
      <br />
      Hello
      <br />
      Hello
      <br />
      Hello
      <br />
      Hello
      <br />
      Hello
      <br />
      Hello
      <br />
      Hello
      <br />
      Hello
      <br />
      Hello
      <br />
      End
      <br />
    </div>
  </>
)

import { style } from '@vanilla-extract/css'

import { sprinkles } from '../../nft/css/sprinkles.css'

const baseNavDropdown = style([
  sprinkles({
    background: 'backgroundSurface',
    borderStyle: 'solid',
    borderColor: 'backgroundInteractive',
    borderWidth: '1px',
    paddingBottom: '8',
    paddingTop: '8',
  }),
  {
    boxShadow: '0px 4px 12px 0px #00000026',
  },
])

export const NavDropdown = style([
  baseNavDropdown,
  sprinkles({
    position: 'absolute',
    borderRadius: '0',
  }),
  {},
])

export const mobileNavDropdown = style([
  baseNavDropdown,
  sprinkles({
    position: 'fixed',
    borderTopRightRadius: '0',
    borderTopLeftRadius: '0',
    top: 'unset',
    bottom: '56',
    left: '0',
    right: '0',
    width: 'full',
  }),
  {
    borderRightWidth: '0px',
    borderLeftWidth: '0px',
  },
])

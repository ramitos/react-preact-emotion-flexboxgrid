# preact-emotion-flexboxgrid

[![Greenkeeper badge](https://badges.greenkeeper.io/LoicMahieu/preact-emotion-flexboxgrid.svg)](https://greenkeeper.io/)
[![npm version](https://badge.fury.io/js/preact-emotion-flexboxgrid.svg)](https://badge.fury.io/js/preact-emotion-flexboxgrid)
[![Build Status](https://travis-ci.org/LoicMahieu/preact-emotion-flexboxgrid.svg?branch=master)](https://travis-ci.org/LoicMahieu/preact-emotion-flexboxgrid)
[![NPM Status](http://img.shields.io/npm/dm/preact-emotion-flexboxgrid.svg?style=flat-square)](https://www.npmjs.org/package/preact-emotion-flexboxgrid)
[![js-standard-style](https://img.shields.io/badge/lint-standard-green.svg)](http://standardjs.com)


Set of React components that implement [`flexboxgrid.css`](https://github.com/kristoferjoseph/flexboxgrid) but with [`preact-emotion`](https://github.com/preact-emotion/preact-emotion). Furthermore, it allows to customize grid configuration like gutter width...

Highly inspired by the excellent [`react-flexbox-grid`](https://github.com/roylee0704/react-flexbox-grid) which the API is nearly the same than this module.

[**Demo**](https://loicmahieu.github.io/preact-emotion-flexboxgrid/demo/index.html)

## Usage

### Installation

```
npm i -S preact-emotion-flexboxgrid
```

`preact-emotion-flexboxgrid` depends on 2 **peer** dependencies:
- `react@^0.14.0 || ^15.0.0-0 || ^16.0.0-0`
- `prop-types@^15.0.0-0`
- `preact-emotion@2`

You should install them in your project.

### Basic

```JSX
import React from 'react'

import {Grid, Col, Row} from 'preact-emotion-flexboxgrid'

const App = props =>
  <Grid>
    <Row>
      <Col xs={6} md={3}>Hello, world!</Col>
    </Row>
  </Grid>
```

### Grid

The `<Grid>` component is optional and can help to wrap children in a fixed/fluid container. Use the configuration `container` for fixed width value.

##### Props

- `fluid` _(Boolean)_: Create a responsive fixed width container or a full width container, spanning the entire width of your viewport. Default: false


### Row

##### Props

- `reverse` _(Boolean)_: Use `flex-direction: row-reverse`. Default: false
- `start`
- `center`
- `end`
- `top`
- `middle`
- `bottom`
- `around`
- `between`
- `first`
- `last` _(String(xs|sm|md|lg)_: Align elements to the start or end of row as well as the top, bottom, or center of a column.


### Col

##### Props

- `reverse` _(Boolean)_: Use `flex-direction: column-reverse`. Default: false
- `xs`
- `sm`
- `md`
- `lg` _(Boolean|Integer)_:
  * When `true`, enable auto sizing column.
  * When `false`, hide colomn for the breakpoint.
  * When `interger` value, it specify the column size on the grid. (1 to 12)
- `xsOffset`
- `smOffset`
- `mdOffset`
- `lgOffset` _(Integer)_: Offset the column.


### Configuration

The grid use same defaults than [`flexboxgrid.css`](https://github.com/kristoferjoseph/flexboxgrid).

You can customize values using [`<ThemeProvider>`](https://github.com/preact-emotion/preact-emotion#theming) component from preact-emotion.
`preact-emotion-flexboxgrid` will looks at the `flexboxgrid` property in the theme.

```JSX
import React from 'react'

import {ThemeProvider} from 'preact-emotion'
import {Grid, Col, Row} from 'preact-emotion-flexboxgrid'

const theme = {
  flexboxgrid: {
    // Defaults
    gridSize: 12, // rem
    gutterWidth: 1, // rem
    outerMargin: 2, // rem
    mediaQuery: 'only screen',
    container: {
      sm: 46, // rem
      md: 61, // rem
      lg: 76  // rem
    },
    breakpoints: {
      xs: 0,  // em
      sm: 48, // em
      md: 64, // em
      lg: 75  // em
    }
  }
}

const App = props =>
  <ThemeProvider theme={theme}>
    <Grid>
      <Row>
        <Col xs={6} md={3}>Hello, world!</Col>
      </Row>
    </Grid>
  </ThemeProvider>
```

## Related projects

- [preact-emotion](https://github.com/preact-emotion/preact-emotion)
- [hedron](https://github.com/JSBros/hedron)

## License

MIT

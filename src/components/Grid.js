
import PropTypes from 'prop-types'
import emotion, { css } from 'preact-emotion'

import config, { DIMENSION_NAMES } from '../config'

const Grid = emotion('div')`
  margin-right: auto;
  margin-left: auto;

  ${p => p.fluid && css`
    padding-right: ${p => config(p).outerMargin + 'rem'};
    padding-left: ${p => config(p).outerMargin + 'rem'};
  `}

  ${p => !p.fluid && css`
    ${DIMENSION_NAMES.map(t =>
    config(p).container[t] && config(p).media[t]`
        width: ${p => config(p).container[t]}rem;
      `
  )}
  `}
`

Grid.displayName = 'Grid'

Grid.propTypes = {
  fluid: PropTypes.bool,
  children: PropTypes.node
}

export default Grid

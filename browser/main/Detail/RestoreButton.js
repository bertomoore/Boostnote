import PropTypes from 'prop-types'
import React from 'react'
import CSSModules from 'browser/lib/CSSModules'
import styles from './RestoreButton.styl'

const RestoreButton = ({
  onClick
}) => (
  <button styleName='control-restoreButton'
    onClick={(e) => onClick(e)}
  >
    <i className='fa fa-undo fa-fw' styleName='iconRestore' />
    <span styleName='tooltip'>Restore</span>
  </button>
)

RestoreButton.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default CSSModules(RestoreButton, styles)

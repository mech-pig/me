import React from "react"
import PropTypes from "prop-types"


const Emoji = ({ ariaLabel, text }) => (
  <span role="img" ariaLabel={ariaLabel}>{text}</span>
)

Emoji.propTypes = {
  ariaLabel: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default Emoji

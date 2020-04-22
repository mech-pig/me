import React from "react"
import PropTypes from "prop-types"

import { Icon } from "rbx"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'


export const SocialIcon = ({ faIcon, href }) => (
  <a href={href}>
    <Icon color="black">
      <FontAwesomeIcon icon={faIcon} size="large" />
    </Icon>
  </a>
)

export const Github = ({ githubName }) => (
  <SocialIcon
    faIcon={fab.faGithub}
    href={`https://github.com/${githubName}`}
  />
)

Github.propTypes = {
  githubName: PropTypes.string.isRequired,
}

export const Linkedin = ({ linkedinName }) => (
  <SocialIcon
    faIcon={fab.faLinkedin}
    href={`https://www.linkedin.com/in/${linkedinName}`}
  />
)

Linkedin.propTypes = {
  linkedinName: PropTypes.string.isRequired,
}

const SocialNavbar = ({ githubName, linkedinName }) => (
  <>
    { githubName ? <Github githubName={githubName} /> : <></> }
    { linkedinName ? <Linkedin linkedinName={linkedinName} /> : <></> }
  </>
)

SocialNavbar.propTypes = {
  githubName: PropTypes.string,
  linkedinName: PropTypes.string,
}

export default SocialNavbar

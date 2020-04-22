import React from "react"

import SocialNavbar from "./socials"

import { Content } from "rbx"

const Footer = ({ author, socials }) => (
  <Content style={{ paddingBottom: '1rem' }} textAlign="centered">
    <SocialNavbar
      githubName={socials.githubName}
      linkedinName={socials.linkedinName}
    />
    <p>© {new Date().getFullYear()} {author}</p>
  </Content>
)

export default Footer

import React from "react"
import { Content } from "rbx"

const Footer = ({ author }) => (
  <Content style={{ paddingBottom: '1rem' }} textAlign="centered">
    <p>© {new Date().getFullYear()} {author}</p>
  </Content>
)

export default Footer

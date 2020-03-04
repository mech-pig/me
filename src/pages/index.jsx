import React from "react"

import Emoji from "../components/emoji"
import Layout from "../components/layout"

import { Content, Title } from "rbx";

const IndexPage = () => (
  <Layout title="Home">
    <Title size={1}>
      Hello! <Emoji text="👋" ariaLabel="waving-hand-sign" />
    </Title>
    <Title size={3} subtitle>
      My name is mechpig.
    </Title>
    <Content>
      <p>I'm a software developer living in Milan, Italy.</p>
      <p>A large part of my job consists of designing and building web APIs and helping others to do the same.
      I work mainly in Python and Node.js, but I have an interest in programming languages and software development at large.
      I always try to write clean, modular and concise code.</p>
      <p>
        I value{' '}
        <a href="https://www.python.org/dev/peps/pep-0020/">pragmatic minimalism</a>,{' '}
        <a href="https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html">clean architecture</a>,{' '}
        <a href="https://www.michaelnygard.com/blog/2017/11/keep-em-separated/">microservices</a>,{' '}
        <a href="https://global.toyota/en/company/vision-and-philosophy/production-system/">automation</a>{' '}
        and <a href="https://www.fpcomplete.com/blog/2017/02/immutability-docker-haskells-st-type">immutability</a>,{' '}
        and try to pursue them whenever possible.
      </p>
      <p>I have a MSc in Computer Science from Politecnico di Milano.</p>
    </Content>
  </Layout>
)

export default IndexPage

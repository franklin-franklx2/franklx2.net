import type { NextPage } from 'next';
import HTMLHead from '../components/head';
import Header from '../components/header';
import Menu from '../components/menu';
import Body from '../components/about/body';
import Footer from '../components/footer';
import React from 'react';

const About: NextPage = () => {
  return (
    <React.Fragment>
      <HTMLHead />
      <Header pageTitle={'About'} />
      <Menu />
      <Body />
      <Footer />
    </React.Fragment>
  );
};

export default About;

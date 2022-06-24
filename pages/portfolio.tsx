import type { NextPage } from 'next';
import HTMLHead from '../components/head';
import Header from '../components/header';
import Menu from '../components/menu';
import Body from '../components/portfolio/body';
import Footer from '../components/footer';
import React from 'react';

const Portfolio: NextPage = () => {
  return (
    <React.Fragment>
      <HTMLHead />
      <Header pageTitle={'Portfolio'} />
      <Menu />
      <Body />
      <Footer />
    </React.Fragment>
  );
};

export default Portfolio;

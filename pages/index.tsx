import type { NextPage } from 'next';
import HTMLHead from '../components/head';
import Header from '../components/header';
import Menu from '../components/menu';
import Body from '../components/home/Body';
// import Footer from '../components/footer';
import React from 'react';

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <HTMLHead />
      <Header />
      <Menu />
      <Body />
      {/* <Footer /> */}
    </React.Fragment>
  );
};

export default Home;

import type { NextPage } from 'next';
import HTMLHead from '../components/head';
import Header from '../components/header';
// import Body from '../components/home/body';
// import Footer from '../components/footer';
import React from 'react';
import '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <HTMLHead />
      <Header />
      {/* <Body />
      <Footer /> */}
    </React.Fragment>
  );
};

export default Home;

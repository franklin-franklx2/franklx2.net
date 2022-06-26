import type { NextPage } from 'next';
import { Grid } from '@mui/material';
import HTMLHead from '../components/head';
import Header from '../components/header';
import Menu from '../components/menu';
import Body from '../components/home/body';
import Footer from '../components/footer';
import React from 'react';

const Home: NextPage = () => {
  return (
    <>
      <HTMLHead />
      <Header pageTitle={'Frank Lin'} />
      <Menu />
      <Body />
      <Footer />
    </>
  );
};

export default Home;

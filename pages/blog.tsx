import type { NextPage } from 'next';
import HTMLHead from '../components/head';
import Header from '../components/header';
import Menu from '../components/menu';
import Body from '../components/blog/body';
import Footer from '../components/footer';
import React from 'react';

const Blog: NextPage = () => {
  return (
    <React.Fragment>
      <HTMLHead />
      <Header pageTitle={'Blog'} />
      <Menu />
      <Body />
      <Footer />
    </React.Fragment>
  );
};

export default Blog;

import type { NextPage } from 'next';
import HTMLHead from '../components/head';
import Header from '../components/header';
import Menu from '../components/menu';
import Body from '../components/blog/body';
import Footer from '../components/footer';
import React, { Suspense, useEffect } from 'react';
import { getContentBlog } from '../utils/common';

// jotai
import { useAtom } from 'jotai';
import { blogPostsAtom } from '../atoms/store';

const Blog: NextPage = () => {
  const [, setJotaiBlogPosts] = useAtom(blogPostsAtom);

  useEffect(() => {
    (async () => {
      const blogPosts = await getContentBlog();
      setJotaiBlogPosts(blogPosts);
    })();
  }, []);

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

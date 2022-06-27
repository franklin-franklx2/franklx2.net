import type { NextPage } from 'next';
import HTMLHead from '../components/head';
import Header from '../components/header';
import Menu from '../components/menu';
import Body from '../components/blog/body';
import Footer from '../components/footer';
import React, { useEffect } from 'react';
import { get } from 'lodash';

// jotai
import { useAtom } from 'jotai';
import { blogPostsAtom } from '../atoms/atoms';

// contentful
import { getClient } from '../utils/contentfulClient';

const CONTENT_TYPE = 'blogPost';

const Blog: NextPage = () => {
  const [, setJotaiBlogPosts] = useAtom(blogPostsAtom);

  const getBlogPosts = (content: any) => {
    const ret: any[] = [];
    content.forEach((contentItem: any) => {
      console.log('blog, contentItem: ', contentItem);
      ret.push({
        title: contentItem.title,
        description: contentItem.description,
        date: contentItem.date,
        body: contentItem.body
      });
    });

    return ret;
  };

  const getContent = async () => {
    const client = getClient();
    const data = await client.getEntries({
      content_type: CONTENT_TYPE,
      include: 5 // The number of nested CMS entries to include
    });
    const blogPosts = get(data, 'items');
    const formattedBlogPosts: string[] = getBlogPosts(blogPosts);
    setJotaiBlogPosts(formattedBlogPosts);
  };

  useEffect(() => {
    (async () => {
      await getContent();
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

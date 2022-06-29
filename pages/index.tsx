import type { NextPage } from 'next';
import HTMLHead from '../components/head';
import Header from '../components/header';
import Menu from '../components/menu';
import Body from '../components/home/body';
import Footer from '../components/footer';
import React from 'react';
import { useEffect } from 'react';
import { get } from 'lodash';

// jotai
import { useAtom } from 'jotai';
import { homeBodyAtom } from '../atoms/store';

// contentful
import { getClient } from '../utils/contentfulClient';
const INTRO_ENTRY_ID = '4Wx6Wy6m7uxp6NpKIf4LEB';

const Home: NextPage = () => {
  const [, setJotaiHomeBody] = useAtom(homeBodyAtom);

  const getParagraphs = (content: any) => {
    const ret: any[] = [];
    content.forEach((contentItem: { content: any }) => {
      console.log(contentItem);
      const contentItemContens = contentItem.content;
      contentItemContens.forEach((contentItemContent: { value: any }) => {
        ret.push(contentItemContent.value);
      });
    });

    return ret;
  };

  const getContent = async () => {
    const client = getClient();
    const data = await client.getEntry(INTRO_ENTRY_ID);
    const body = get(data, 'fields.body.content', undefined);
    const formattedBody: string[] = getParagraphs(body);
    setJotaiHomeBody(formattedBody);
  };

  useEffect(() => {
    (async () => {
      await getContent();
    })();
  }, []);

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

/* eslint-disable react-hooks/rules-of-hooks */
import { atom } from 'jotai';
import * as _ from 'lodash';
// contentful
import { getClient } from '../utils/contentfulClient';

const CONTENT_TYPE = 'blogPost';

export const homeBodyAtom = atom(['']);

export const blogPostsAtom = atom<{ [key: string]: any }[]>([{}]);

export const blogPostsAtom2 = atom(async (get) => {
  const client = getClient();
  const data = await client.getEntries({
    content_type: CONTENT_TYPE,
    include: 5 // The number of nested CMS entries to include
  });
  console.log('blog.tsx, getContent, data: ', data);
  return data;
});

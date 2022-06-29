/* eslint-disable react-hooks/rules-of-hooks */
import { atom } from 'jotai';
import * as _ from 'lodash';

export const homeBodyAtom = atom(['']);

export const blogPostsAtom = atom<{ [key: string]: any }[]>([{}]);

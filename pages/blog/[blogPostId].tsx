import { useRouter } from 'next/router';
import { NextPage } from 'next';
import * as React from 'react';
import { useEffect, useState } from 'react';
import HTMLHead from '../../components/head';
import Header from '../../components/header';
import Menu from '../../components/menu';
import Body from '../../components/blog/blogDetails/body';
import Footer from '../../components/footer';
import { get } from 'lodash';

//jotai
import { useAtom } from 'jotai';
import { blogPostsAtom, currentBlogPostAtom } from '../../atoms/store';

// contentful
import { getClient } from '../../utils/contentfulClient';

const CONTENT_TYPE = 'blogPost';

const BlogDetails: NextPage = () => {
  const router = useRouter();
  const { blogPostId } = router.query;
  const [foundBlogPost, setFoundBlogPost] = useState(false);
  const [, setJotaiCurrentBlogPost] = useAtom(currentBlogPostAtom);

  const getBlogPost = (
    blogPostId: string | string[] | undefined,
    blogPosts: any[]
  ) => {
    let ret: any = undefined;
    blogPosts.forEach((blogPost) => {
      if (blogPost.id === blogPostId) {
        ret = blogPost;
        setFoundBlogPost(true);
      }
    });

    return ret;
  };

  const getcontent = (content: any) => {
    let ret: any[] = [];

    console.log('blog.tsx, getcontent, content: ', content);
    content.forEach(
      (contentItemOuterArray: {
        content: any[];
        data: { target: { fields: { title: any; file: { url: any } } } };
      }) => {
        console.log(
          'blog.tsx. getcontent, contentItemOuterArray: ',
          contentItemOuterArray
        );

        // if it is an image, the content array is empty, requires different processing
        if (contentItemOuterArray.content.length == 0) {
          const imageTitle = contentItemOuterArray.data.target.fields.title;
          const imageUrl = contentItemOuterArray.data.target.fields.file.url;
          ret.push({
            nodeType: 'image',
            imageTitle: imageTitle,
            imageUrl: imageUrl
          });
        } else {
          contentItemOuterArray.content.forEach((contentItemInnerItem) => {
            console.log(
              'blog.tsx. getcontent, contentItemInnerArray: ',
              contentItemInnerItem
            );
            ret.push({
              nodeType: contentItemInnerItem.nodeType,
              value: contentItemInnerItem.value
            });
          });
        }
      }
    );

    return ret;
  };

  const getBlogPosts = (content: any) => {
    const ret: any[] = [];
    content.forEach((contentItem: any) => {
      const content = getcontent(contentItem.fields.body.content);
      ret.push({
        id: contentItem.sys.id,
        title: contentItem.fields.title,
        description: contentItem.fields.description,
        date: contentItem.fields.date,
        body: {
          content: content
        },
        tag: contentItem.metadata.tags[0].sys.id
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
    const formattedBlogPosts: { [key: string]: any }[] =
      getBlogPosts(blogPosts);
    return formattedBlogPosts;
  };

  useEffect(() => {
    (async () => {
      const blogPosts = await getContent();
      const currentBlogPost = getBlogPost(blogPostId, blogPosts);
      setJotaiCurrentBlogPost(currentBlogPost);
    })();
  }, [blogPostId]);

  return (
    <React.Fragment>
      <HTMLHead />
      <Header pageTitle={'Blog'} />
      <Menu />
      <Body foundBlogPost={foundBlogPost} />
      <Footer />
    </React.Fragment>
  );
};

export default BlogDetails;

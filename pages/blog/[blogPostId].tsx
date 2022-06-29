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

// contentful
import { getClient } from '../../utils/contentfulClient';

const CONTENT_TYPE = 'blogPost';

const getcontent = (content: any) => {
  let ret: any[] = [];

  console.log('blog.tsx, getcontent, content: ', content);
  content.forEach((contentItemOuterArray: { content: any[] }) => {
    console.log(
      'blog.tsx. getcontent, contentItemOuterArray: ',
      contentItemOuterArray
    );
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
  });

  return ret;
};

const BlogDetails: NextPage = () => {
  const router = useRouter();
  const { blogPostId } = router.query;
  const [currentBlogPost, setCurrentBlogPost] = useState({});
  const [foundBlogPost, setFoundBlogPost] = useState(false);
  const getBlogPost = (
    blogPostId: string | string[] | undefined,
    blogPosts: any[]
  ) => {
    console.log('[blogPostId], getBlogPost, blogPostId: ', blogPostId);
    console.log('[blogPostId], getBlogPost, blogPosts: ', blogPosts);
    console.log('[blogPostId], getBlogPost, router.query: ', router.query);
    let ret: any = undefined;
    blogPosts.forEach((blogPost) => {
      if (blogPost.id === blogPostId) {
        ret = blogPost;
        setFoundBlogPost(true);
      }
    });

    return ret;
  };

  const getBlogPosts = (content: any) => {
    const ret: any[] = [];
    content.forEach((contentItem: any) => {
      console.log('blog, contentItem: ', contentItem);
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
    console.log('blog.tsx, getContent, data: ', data);
    const blogPosts = get(data, 'items');
    // const formattedBlogPosts: { [key: string]: string }[] =
    const formattedBlogPosts: { [key: string]: any }[] =
      getBlogPosts(blogPosts);
    console.log('formattedBlogPosts: ', formattedBlogPosts);
    return formattedBlogPosts;
  };

  useEffect(() => {
    (async () => {
      const blogPosts = await getContent();
      const currentBlogPost = getBlogPost(blogPostId, blogPosts);
      console.log(
        '[blogPostId], useEffect, currentBlogPost: ',
        currentBlogPost
      );
      console.log('[blogPostId], useEffect, foundBlogPost: ', foundBlogPost);
      setCurrentBlogPost(currentBlogPost);
    })();
  }, [blogPostId]);

  return (
    <React.Fragment>
      <HTMLHead />
      <Header pageTitle={'Blog'} />
      <Menu />
      <Body
        blogPostId={blogPostId}
        currentBlogPost={currentBlogPost}
        foundBlogPost={foundBlogPost}
      />
      <Footer />
    </React.Fragment>
  );
};

export default BlogDetails;

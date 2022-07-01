import { useRouter } from 'next/router';
import { NextPage } from 'next';
import * as React from 'react';
import { useEffect, useState } from 'react';
import HTMLHead from '../../components/head';
import Header from '../../components/header';
import Menu from '../../components/menu';
import Body from '../../components/blog/blogDetails/body';
import Footer from '../../components/footer';
import { getContentBlog } from '../../utils/common';

//jotai
import { useAtom } from 'jotai';
import { currentBlogPostAtom } from '../../atoms/store';

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

  useEffect(() => {
    (async () => {
      const blogPosts = await getContentBlog();
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

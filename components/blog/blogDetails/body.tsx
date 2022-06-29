import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';
// jotai
import { useAtom, atom } from 'jotai';
import { blogPostsAtom } from '../../../atoms/store';

const getBlogPost = (blogPostId: string, blogPosts: any[]) => {
  let ret: any = undefined;
  blogPosts.forEach((blogPost) => {
    if (blogPost.id === blogPostId) {
      ret = blogPost;
    }
  });

  return ret;
};

const Body: any = (props: any) => {
  //   const [blogPosts] = useAtom(blogPostsAtom);
  //   const [currentBlogPost, setCurrentBlogPost] = useState(undefined);

  //   useEffect(() => {
  //     setCurrentBlogPost(getBlogPost(props.blogPostId, blogPosts));
  //   }, [blogPosts]);

  //   const currentBlogPostAtom = atom(blogPost);
  //   const [currentBlogPost] = useAtom(currentBlogPostAtom);

  //   console.log('blogDetails, currentBlogPostAtom: ', currentBlogPost);
  //   console.log('blogDetails, blogPosts: ', blogPosts);
  //   console.log('blogDetails, currentBlogPost: ', currentBlogPost);
  console.log(
    'blogDetails, body, props.currentBlogPost: ',
    props.currentBlogPost
  );
  return (
    <Grid container>
      <Grid item xs={2} p={1} />
      <Grid item xs={8} p={1}>
        <div className="body-content-wrapper">
          <div className="blog-post-title">
            <h3>{props.currentBlogPost.title}</h3>
          </div>
          {/* <div className="blog-post-date">{blogPost.date}</div>
          <div className="blog-post-body">{blogPost.body}</div> */}
        </div>
      </Grid>
      <Grid item xs={2} p={1} />
    </Grid>
  );
};

export default Body;

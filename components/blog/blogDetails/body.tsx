import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';
// jotai
import { useAtom, atom } from 'jotai';
import { currentBlogPostAtom } from '../../../atoms/store';

const getBlogPost = (blogPostId: string, blogPosts: any[]) => {
  let ret: any = undefined;
  blogPosts.forEach((blogPost) => {
    if (blogPost.id === blogPostId) {
      ret = blogPost;
    }
  });

  return ret;
};

const Body: any = ({
  currentBlogPost,
  foundBlogPost
}: {
  currentBlogPost: string;
  foundBlogPost: string;
}) => {
  //   const [blogPosts] = useAtom(blogPostsAtom);
  //   const [currentBlogPost, setCurrentBlogPost] = useState(undefined);

  //   useEffect(() => {
  //     setCurrentBlogPost(getBlogPost(props.blogPostId, blogPosts));
  //   }, [blogPosts]);

  //   const currentBlogPostAtom = atom(blogPost);
  const [jotaiCurrentBlogPost] = useAtom(currentBlogPostAtom);

  //   console.log('blogDetails, currentBlogPostAtom: ', currentBlogPost);
  //   console.log('blogDetails, blogPosts: ', blogPosts);
  console.log('blogDetails, currentBlogPost: ', currentBlogPost);
  console.log('blogDetails, jotaiCurrentBlogPost: ', jotaiCurrentBlogPost);
  //   console.log(
  //     'blogDetails, body, props.currentBlogPost: ',
  //     props.currentBlogPost
  //   );
  //   const [currentBlogPost, setCurrentBlogPost] = useState(undefined);
  //   useEffect(() => {
  //     setCurrentBlogPost(props.currentBlogPost);
  //   }, []);

  return (
    <Grid container>
      <Grid item xs={2} p={1} />
      <Grid item xs={8} p={1}>
        <div className="body-content-wrapper">
          <div className="blog-post-title">
            <h3>{jotaiCurrentBlogPost ? jotaiCurrentBlogPost.title : ''}</h3>
          </div>
          <div className="blog-post-date">
            <span>{jotaiCurrentBlogPost ? jotaiCurrentBlogPost.date : ''}</span>
          </div>
          <div className="blog-post-body">
            {(() => {
              if (jotaiCurrentBlogPost) {
                const contentItems = jotaiCurrentBlogPost.body.content;
                contentItems.map(() => {
                  return <div>hello world</div>;
                });
              }
            })()}
          </div>
        </div>
      </Grid>
      <Grid item xs={2} p={1} />
    </Grid>
  );
};

export default Body;

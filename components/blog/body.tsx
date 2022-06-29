import { Grid } from '@mui/material';

// jotai
import { useAtom } from 'jotai';
import { Suspense } from 'react';
import { blogPostsAtom, blogPostsAtom2 } from '../../atoms/store';

const Tags: any = (props: { tags: any }) => {
  const tags = props.tags;
  console.log('tags: ', tags);
  return (
    <>
      <Suspense>
        {tags.map((tag: string) => {
          <span>{tag}</span>;
        })}
      </Suspense>
      ;
    </>
  );
};

const Body: any = () => {
  const [blogPosts] = useAtom(blogPostsAtom);
  console.log('blog, body, blogPosts: ', blogPosts);
  return (
    <Grid container>
      <Grid item xs={2} p={1} />
      <Grid item xs={8} p={1}>
        <div className="body-content-wrapper">
          {blogPosts.map((blogPost) => {
            console.log('blogPost: ', blogPost);
            console.log('blogPost.tags: ', blogPost.tags);
            return (
              <Grid key={Math.random()} container className="blog-post-wrapper">
                <Grid item xs={12} className="blog-post-title">
                  <h3>{blogPost.title}</h3>
                </Grid>
                <Grid item xs={12} className="blog-post-description">
                  <p>{blogPost.description}</p>
                </Grid>
                <Grid item xs={2} className="blog-post-date">
                  <span>{blogPost.date}</span>
                </Grid>
                <Grid item xs={6} />
                <Grid
                  key={Math.random()}
                  item
                  xs={4}
                  className="blog-post-tags"
                ></Grid>
              </Grid>
            );
          })}
        </div>
      </Grid>
      <Grid item xs={2} p={1} />
    </Grid>
  );
};

export default Body;

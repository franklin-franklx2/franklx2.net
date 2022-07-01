import { Grid } from '@mui/material';
import Link from 'next/link';

// jotai
import { useAtom } from 'jotai';
import { blogPostsAtom } from '../../atoms/store';

const BlogPostSummary: any = ({ blogPost }: { blogPost: any }) => {
  return (
    <Grid key={Math.random()} container className="blog-post-wrapper">
      <Grid item xs={12} className="blog-post-title">
        <h3>
          {/* <Link href={`/blog/${blogPost.id}`}>{blogPost.title}</Link> */}
          <Link href={`/blog/${blogPost.id}`}>
            <a>{blogPost.title}</a>
          </Link>
        </h3>
      </Grid>
      <Grid item xs={12} className="blog-post-description">
        <p>{blogPost.description}</p>
      </Grid>
      <Grid item xs={4} className="blog-post-date">
        <span>{blogPost.date}</span>
      </Grid>
      <Grid item xs={7} />
      <Grid key={Math.random()} item xs={1} className="blog-post-read-more">
        <Link href={`/blog/${blogPost.id}`}>
          <a>read more</a>
        </Link>
      </Grid>
      {/* <Grid key={Math.random()} item xs={2}></Grid> */}
    </Grid>
  );
};

const Body: any = () => {
  const [blogPosts] = useAtom(blogPostsAtom);
  console.log('blog, body, blogPosts: ', blogPosts);
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid item xs={12} md={8} p={1}>
        <div className="body-content-wrapper">
          {blogPosts.map((blogPost) => {
            return <BlogPostSummary key={Math.random()} blogPost={blogPost} />;
          })}
        </div>
      </Grid>
    </Grid>
  );
};

export default Body;

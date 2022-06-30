import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';
// jotai
import { useAtom, atom } from 'jotai';
import { currentBlogPostAtom } from '../../../atoms/store';
import { isNil, get } from 'lodash';
const ContentItems = ({
  jotaiCurrentBlogPost
}: {
  jotaiCurrentBlogPost: any;
}) => {
  const contentItems = get(jotaiCurrentBlogPost, 'body.content', [{}]);
  return (
    <>
      {contentItems.map((contentItem: any) => {
        return <span key={Math.random()}>{contentItem.value}</span>;
      })}
    </>
  );
};
const Body: any = ({
  currentBlogPost,
  foundBlogPost
}: {
  currentBlogPost: string;
  foundBlogPost: string;
}) => {
  const [jotaiCurrentBlogPost] = useAtom(currentBlogPostAtom);

  console.log('blogDetails, currentBlogPost: ', currentBlogPost);
  console.log('blogDetails, jotaiCurrentBlogPost: ', jotaiCurrentBlogPost);

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
            <ContentItems jotaiCurrentBlogPost={jotaiCurrentBlogPost} />
            {/* {!isNil(jotaiCurrentBlogPost) ? (
              <ContentItems jotaiCurrentBlogPost={jotaiCurrentBlogPost} />
            ) : (
              ''
            )} */}
            {/* {(() => {
              if (!isNil(jotaiCurrentBlogPost)) {
                console.log(
                  'blogDetails, body, return, jotaiCurrentBlogPost: ',
                  jotaiCurrentBlogPost
                  const contentItems = jotaiCurrentBlogPost.body.content;
                  return <ContentItems contentItems={contentItems} />
                );
              }
            })()} */}
          </div>
        </div>
      </Grid>
      <Grid item xs={2} p={1} />
    </Grid>
  );
};

export default Body;

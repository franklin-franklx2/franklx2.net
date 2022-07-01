import { Grid } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
// jotai
import { useAtom, atom } from 'jotai';
import { currentBlogPostAtom } from '../../../atoms/store';
import { isNil, get } from 'lodash';

/**
 *
 * @todo
 * NEED TO REFACTOR BLOG DETAILS BODY AND BLOG.TSX SO THEY SHARE THE SAME CODE
 */

const NotFound = () => {
  return (
    <>
      <h3>404 Not Found</h3>
    </>
  );
};

const ParagraphContent = ({ value }: { value: string }) => {
  return <p>{value}</p>;
};

const ImageContent = ({ url, title }: { url: string; title: string }) => {
  console.log('imageContent, url: ', url);
  console.log('imageContent, title: ', title);
  return (
    <>
      {/* <Image src={`${url}`} alt="" layout="fill" /> */}
      <Grid container className="blog-post-image-content-wrapper">
        <Grid item xs={12}>
          <Image
            className="blog-post-image-content"
            src={`${url}`}
            alt=""
            layout="fill"
            objectFit="contain"
          />
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className="blog-post-image-caption"
      >
        <span>{title}</span>
      </Grid>
    </>
  );
};

const ContentItems = ({
  jotaiCurrentBlogPost
}: {
  jotaiCurrentBlogPost: any;
}) => {
  const contentItems = get(jotaiCurrentBlogPost, 'body.content', [{}]);
  console.log('blogDetails, jotaiCurrentBlogPost: ', jotaiCurrentBlogPost);
  return (
    <>
      {contentItems.map((contentItem: any) => {
        // return <p key={Math.random()}>{contentItem.value}</p>;
        console.log(
          'blogDetails, return, contentItem.nodeType: ',
          contentItem.nodeType
        );

        if (contentItem.nodeType !== 'image') {
          return (
            <ParagraphContent key={Math.random()} value={contentItem.value} />
          );
        } else {
          console.log(
            'blogDetails, return, contentItem.imageUrl: ',
            contentItem.imageUrl
          );
          return (
            <ImageContent
              key={Math.random()}
              url={`https:${contentItem.imageUrl}`}
              title={contentItem.imageTitle}
            />
          );
        }
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
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid item xs={12} md={8} p={1}>
        <div className="body-content-wrapper">
          <div className="blog-post-title">
            <h3>{jotaiCurrentBlogPost ? jotaiCurrentBlogPost.title : ''}</h3>
          </div>
          <div className="blog-post-date">
            <span>{jotaiCurrentBlogPost ? jotaiCurrentBlogPost.date : ''}</span>
          </div>
          <div className="blog-post-body">
            {foundBlogPost ? (
              <ContentItems jotaiCurrentBlogPost={jotaiCurrentBlogPost} />
            ) : (
              <NotFound />
            )}
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default Body;

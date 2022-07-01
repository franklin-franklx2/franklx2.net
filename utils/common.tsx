import { get } from 'lodash';

// contentful
import { getClient } from '../utils/contentfulClient';

const CONTENT_TYPE = 'blogPost';

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
      }
      // tag: contentItem.metadata.tags[0].sys.id
    });
  });

  return ret;
};

export const getContentBlog = async () => {
  const client = getClient();
  const data = await client.getEntries({
    content_type: CONTENT_TYPE,
    include: 5 // The number of nested CMS entries to include
  });
  console.log('blog.tsx, getContent, data: ', data);
  const blogPosts = get(data, 'items');
  const formattedBlogPosts: { [key: string]: any }[] = getBlogPosts(blogPosts);
  console.log('formattedBlogPosts: ', formattedBlogPosts);
  return formattedBlogPosts;
};

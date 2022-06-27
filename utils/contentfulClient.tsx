import * as contentful from 'contentful';

export const getClient = () => {
  const params = {
    space: `${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`,
    accessToken: `${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`
  };

  return contentful.createClient(params);
};

import { Grid } from '@mui/material';
import * as contentful from 'contentful';
import { get } from 'lodash';
import { useEffect, useState } from 'react';
// jotai
import { atom, useAtom } from 'jotai';
import { homeBodyAtom } from '../../atoms/atoms';

const INTRO_ENTRY_ID = '4Wx6Wy6m7uxp6NpKIf4LEB';

const getParagraphs = (content: any) => {
  const ret: any[] = [];
  content.forEach((contentItem: { content: any }) => {
    console.log(contentItem);
    const contentItemContens = contentItem.content;
    contentItemContens.forEach((contentItemContent: { value: any }) => {
      ret.push(contentItemContent.value);
    });
  });

  console.log(ret);
  return ret;
};

const Body: any = (props: any) => {
  const [homeBody, setHomeBody] = useState(['']);
  const [jotaiHomeBody, setJotaiHomeBody] = useAtom(homeBodyAtom);

  const getContent = async () => {
    const params = {
      space: `${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`,
      accessToken: `${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`
    };
    const client = contentful.createClient(params);
    console.log('params: ', params);
    const data = await client.getEntry(INTRO_ENTRY_ID);
    const body = get(data, 'fields.body.content', undefined);
    const formattedBody: string[] = getParagraphs(body);
    setHomeBody(formattedBody);
    setJotaiHomeBody(formattedBody);
  };

  useEffect(() => {
    (async () => {
      await getContent();
    })();
  }, []);

  return (
    <Grid container>
      <Grid item xs={2} p={1} />
      <Grid item xs={8} p={1}>
        <div className="body-content-wrapper">
          {homeBody.map((paragraph: string) => {
            return <p key={Math.random()}>{paragraph}</p>;
          })}
          <hr />
          {jotaiHomeBody.map((paragraph: string) => {
            return <p key={Math.random()}>{paragraph}</p>;
          })}
        </div>
      </Grid>
      <Grid item xs={2} p={1} />
    </Grid>
  );
};

export default Body;

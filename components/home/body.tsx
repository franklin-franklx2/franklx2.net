import { Grid } from '@mui/material';
import * as contentful from 'contentful';

const INTRO_ENTRY_ID = '4Wx6Wy6m7uxp6NpKIf4LEB';

const Body: any = (props: any) => {
  const params = {
    space: `${process.env.CONTENTFUL_SPACE_ID}`,
    accessToken: `${process.env.CONTENTFUL_ACCESS_TOKEN}`
  };
  const client = contentful.createClient(params);
  console.log('params: ', params);
  client.getEntry(INTRO_ENTRY_ID).then(function (entry) {
    // logs the entry metadata
    console.log(entry.sys);

    // logs the field with ID title
    console.dir(entry, { depth: null });
  });
  return (
    <Grid container>
      <Grid item xs={2} p={1} />
      <Grid item xs={8} p={1}>
        <div className="body-content-wrapper">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </Grid>
      <Grid item xs={2} p={1} />
    </Grid>
  );
};

export default Body;

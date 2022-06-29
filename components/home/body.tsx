import { Grid } from '@mui/material';
// jotai
import { useAtom } from 'jotai';
import { homeBodyAtom } from '../../atoms/store';

const Body: any = () => {
  const [jotaiHomeBody] = useAtom(homeBodyAtom);
  return (
    <Grid container>
      <Grid item xs={2} p={1} />
      <Grid item xs={8} p={1}>
        <div className="body-content-wrapper">
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

import { Grid } from '@mui/material';
// jotai
import { useAtom } from 'jotai';
import { homeBodyAtom } from '../../atoms/store';

const Body: any = () => {
  const [jotaiHomeBody] = useAtom(homeBodyAtom);
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid item xs={8} p={1}>
        <div className="body-content-wrapper">
          {jotaiHomeBody.map((paragraph: string) => {
            return <p key={Math.random()}>{paragraph}</p>;
          })}
        </div>
      </Grid>
    </Grid>
  );
};

export default Body;

import { Grid } from '@mui/material';

const Header: any = (props: any) => {
  return (
    <Grid container spacing={1} className="header-wrapper">
      <Grid item xs={12}>
        <div className="header-content-wrapper">
          <h1>TEST</h1>
        </div>
      </Grid>
    </Grid>
  );
};

export default Header;

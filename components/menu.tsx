import { Grid } from '@mui/material';

const Menu: any = (props: any) => {
  return (
    <Grid container className="menu-wrapper">
      <Grid item md={2} p={1} />
      <Grid item md={2} p={1}>
        <div className="menu-content-wrapper">
          <h1>TEST</h1>
        </div>
      </Grid>
      <Grid item md={2} p={1}>
        <div className="menu-content-wrapper">
          <h1>TEST</h1>
        </div>
      </Grid>
      <Grid item md={2} p={1}>
        <div className="menu-content-wrapper">
          <h1>TEST</h1>
        </div>
      </Grid>
      <Grid item md={2} p={1}>
        <div className="menu-content-wrapper">
          <h1>TEST</h1>
        </div>
      </Grid>
      <Grid item md={2} p={1} />
    </Grid>
  );
};

export default Menu;

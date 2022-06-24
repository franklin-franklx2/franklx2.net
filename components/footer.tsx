import { Grid } from '@mui/material';
const Footer: any = (props: any) => {
  return (
    <Grid container spacing={0} className="footer-wrapper">
      <Grid item xs={12}>
        <div className="footer-content-wrapper">
          <h5>&copy; 2022 all rights reserved</h5>
        </div>
      </Grid>
    </Grid>
  );
};

export default Footer;

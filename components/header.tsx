import { Grid } from '@mui/material';
import Image from 'next/image';
import logo from '../public/images/Logo.png';
import headerBg from '../public/images/header-bg.png';

const Header: any = (props: any) => {
  const pageTitle: string = props.pageTitle;

  return (
    <Grid container spacing={0} className="header-wrapper">
      <Grid item xs={2} className="header-logo-wrapper">
        <Image src={logo} alt="logo" />
      </Grid>
      <Grid item xs={8}>
        <div className="header-content-wrapper">
          <h1>{pageTitle}</h1>
        </div>
      </Grid>
      <Grid item xs={1} />
    </Grid>
  );
};

export default Header;

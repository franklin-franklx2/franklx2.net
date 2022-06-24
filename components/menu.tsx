import { Grid } from '@mui/material';
import Link from 'next/link';

const Menu: any = (props: any) => {
  return (
    <Grid container className="menu-wrapper">
      <Grid item md={2} p={1} className="menu-content-wrapper-wrapper" />
      <Grid item md={2} p={1} className="menu-content-wrapper-wrapper">
        <div className="menu-content-wrapper">
          <Link href="/about">
            <a>About</a>
          </Link>
        </div>
      </Grid>
      <Grid item md={2} p={1} className="menu-content-wrapper-wrapper">
        <div className="menu-content-wrapper">
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </div>
      </Grid>
      <Grid item md={2} p={1} className="menu-content-wrapper-wrapper">
        <div className="menu-content-wrapper">
          <Link href="/resume">
            <a>Resume</a>
          </Link>
        </div>
      </Grid>
      <Grid item md={2} p={1} className="menu-content-wrapper-wrapper">
        <div className="menu-content-wrapper">
          <Link href="/portfolio">
            <a>Portfolio</a>
          </Link>
        </div>
      </Grid>
      <Grid item md={2} p={1} className="menu-content-wrapper-wrapper" />
    </Grid>
  );
};

export default Menu;

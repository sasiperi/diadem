import React from 'react';
import { makeStyles } from '@material-ui/core';
//import MyCustomLogoFull from './logo/diadem-solid01-trans.png';
import MyCustomLogoFull from './logo/diadem06.png';


const useStyles = makeStyles({
  svg: {
    top: 0,
    width: 'auto',
    height: 30,
  },
  path: {
    fill: '#7df3e1',
  },
});
const LogoFull = () => {
  return <img src={MyCustomLogoFull} width="190" height="75"/>;
};

export default LogoFull;

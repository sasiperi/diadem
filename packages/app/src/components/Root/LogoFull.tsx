import React from 'react';
import { makeStyles } from '@material-ui/core';
//import MyCustomLogoFull from './logo/diadem-solid01-trans.png';
import MyCustomLogoFull from './logo/diadem05.png';


const useStyles = makeStyles({
  svg: {
    width: 'auto',
    height: 30,
  },
  path: {
    fill: '#7df3e1',
  },
});
const LogoFull = () => {
  return <img src={MyCustomLogoFull} width="280" height="200"/>;
};

export default LogoFull;

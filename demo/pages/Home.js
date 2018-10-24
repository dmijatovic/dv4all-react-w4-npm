import React from 'react';

import { MuiThemeProvider, Typography } from '@material-ui/core';

//import nlx material theme
import { nlxTheme } from '../../lib';

import Button from '@material-ui/core/Button';

const Home = () => {
  return (
    <MuiThemeProvider theme = {nlxTheme}>
      <div>
        <h1>This is homepage</h1>
        <p>From here you can explore all components available in this lib.
          The navigation on the left show avaliable components.
        </p>

        <Typography variant="h4" className="py-1">
          Example using material ui NLX theme with material-ui components
        </Typography>

        <p>
          <Button color="primary">Primary theme color</Button>
          <Button color="secondary">Secondary theme color</Button>
        </p>

      </div>
    </MuiThemeProvider>
  );
};

export default Home;

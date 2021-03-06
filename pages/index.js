import React from 'react';

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Layout from '../components/Layout';
import Link from '../components/Link';
import { useStyles } from '../components/Styles';

import getConfig from 'next/config'
const { publicRuntimeConfig, serverRuntimeConfig } = getConfig();
const standalone = publicRuntimeConfig.STANDALONE;
const var_server = serverRuntimeConfig.VAR_SERVER;

console.log("index page - var", var_server);


export default function App() {
  const classes = useStyles();

  console.log("index page - standalone", standalone);
  console.log("index page - var", var_server);

  const mode_message = standalone == 'yes' ? 'STANDALONE' : 'API';
    
  /* var mode_message;
  if (publicRuntimeConfig.STANDALONE == 'yes') {
    mode_message = "STANDALONE";
  } else {
    mode_message = "API";
  }*/

  return (
    <React.Fragment>
      <Layout>
      {/* Hero unit */}
      <div className={classes.heroContent}>
      <Container maxWidth="sm">
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Reverse App 
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Gather round to see the amazing text reversing application. 
          </Typography>
          <Typography variant="h6" align="center" color="textSecondary" paragraph>
          Running in {mode_message} mode.
          </Typography>
          <div className={classes.heroButtons}>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <Button variant="contained" color="primary" component={Link} naked href="/reverse">
                  Reverse Call To Action
                </Button>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
      {/* End hero unit */}
      </Layout>
    </React.Fragment>
  );
}

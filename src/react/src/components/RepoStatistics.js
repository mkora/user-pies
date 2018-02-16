import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';

import ChartPie from './ChartPie';
import { repoPiedData } from '../utils/chartDataFilters';

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
    height: '100%',
  },
});

const RepoStatistics = (props) => {
  const { classes, data } = props;
  return (
    <Grid container spacing={16}>
      <Grid item xs={12} sm={6}>
        <Paper className={classes.paper}>
          <ChartPie
            title="Commits per Repo"
            data={repoPiedData(data, 'commit')}
          />
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper className={classes.paper}>
          <ChartPie
            title="Stars per Repo"
            data={repoPiedData(data, 'star')}
          />
        </Paper>
      </Grid>
    </Grid>
  );
};

RepoStatistics.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export default withStyles(styles)(RepoStatistics);

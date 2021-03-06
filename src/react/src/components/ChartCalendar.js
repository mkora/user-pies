import React from 'react';
import PropTypes from 'prop-types';
import { ResponsiveCalendar } from '@nivo/calendar';
import { withStyles } from '@material-ui/core/styles';
import NotFoundError from './NotFoundError';

const colors = [
  '#BBDEFB',
  '#90CAF9',
  '#64B5F6',
  '#42A5F5',
  '#2196F3',
];

const styles = () => ({
  chart: {
    height: 340,
  },
});

const ChartCalendar = ({
  data,
  title,
  classes,
  onRefreshClick
}) => {
  if (data.length === 0) {
    return (
      <NotFoundError
        title={title}
        onRefreshClick={onRefreshClick}
      />
    );
  }

  const fromDate = data[0].day;
  const toDate = data[data.length - 1].day;
  return (
    <div className={classes.chart}>
      <ResponsiveCalendar
        data={data}
        from={fromDate}
        to={toDate}
        emptyColor="#F5F5F5"
        colors={colors}
        margin={{
          top: 40,
          right: 10,
          bottom: 60,
          left: 25
        }}
        yearSpacing={30}
        monthBorderColor="#FFFFFF"
        monthLegendOffset={10}
        dayBorderWidth={2}
        dayBorderColor="#FFFFFF"
        legends={[{
          anchor: 'bottom-right',
          direction: 'row',
          translateY: 36,
          itemCount: 5,
          itemWidth: 40,
          itemHeight: 30,
          itemDirection: 'top-to-bottom'
        }]}
      />
    </div>
  );
};

ChartCalendar.propTypes = {
  classes: PropTypes.shape({
    chart: PropTypes.string,
  }).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
  onRefreshClick: PropTypes.func.isRequired,
};

export default withStyles(styles)(ChartCalendar);

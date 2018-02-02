import moment from 'moment';

const slitedWeeks = (timestamp, vals) => {
  const current = moment.unix(timestamp);
  const next = current.clone().add(7, 'days');
  if (current.format('MM') !== next.format('MM')) {
    let week1 = 0;
    let week2 = 0;
    vals.forEach((v, k) => {
      if (current.format('MM') === current.clone().add(k, 'days').format('MM')) {
        week1 += v;
      } else {
        week2 += v;
      }
    });
    return [week1, week2];
  }
  return [vals.reduce((soFar, v) => soFar + v, 0), 0];
};

const formattedMonth = timestamp => moment.unix(timestamp).format('MMM');

const formattedNextMonth = fromTimestamp => moment.unix(fromTimestamp).clone().add(7, 'days').format('MMM');

export {
  slitedWeeks,
  formattedMonth,
  formattedNextMonth
};
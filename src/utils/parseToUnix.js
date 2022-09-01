import { getUnixTime } from 'date-fns';

const parseToUnix = (value, originalValue) => {
  return getUnixTime(originalValue);
};

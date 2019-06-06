function stringToNumber(val) {
  if (val.props && val.props.children) {
    return val.props.children;
  }
  return 0;
}

function dateToNumber(val) {
  const num = /[0-9]/g;
  const seconds = /(วินาที)/g;
  const minutes = /(นาที)/g;
  const hours = /(ชั่วโมง)/g;
  const days = /(วัน)/g;
  const months = /(เดือน)/g;
  const years = /(ปี)/g;
  if (seconds.test(val)) {
    return(val.match(num).join('') * 1);
  } else if (minutes.test(val)) {
    return(val.match(num).join('') * 1 * 60);
  } else if (hours.test(val)) {
    return(val.match(num).join('') * 1 * 60 * 60);
  } else if (days.test(val)) {
    return(val.match(num).join('') * 1 * 60 * 60 * 24);
  } else if (months.test(val)) {
    return(val.match(num).join('') * 1 * 60 * 60 * 24 * 30);
  } else if (years.test(val)) {
    return(val.match(num).join('') * 1 * 60 * 60 * 24 * 30 * 12);
  }
  return null;
}

function tranfromToDate(val) {
  if (val) {
    let date = new Date();
    if (val.indexOf('/') === -1) {
      const splitVal = val.split(':');
      date.setHours(splitVal[0]);
      date.setMinutes(splitVal[1]);
      return date;
    } else {
      const splitVal = val.split('/');
      date.setDate(splitVal[0]);
      date.setMonth(splitVal[1]);
      date.setFullYear(splitVal[2]);
      return date;
    }
  }
  return 0;
}

function findAttr(val) {
  if (val.props && val.props.datasort) {
    return val.props.datasort;
  }
  return -1;
}

export function sortNumber(a, b) {
  if (stringToNumber(a) > stringToNumber(b)) {
    return 1;
  } else if (stringToNumber(a) < stringToNumber(b)) {
    return -1;
  }
  return 0;
}

export function sortTimeLeft(a, b) {
  if (dateToNumber(a) > dateToNumber(b)) {
    return 1;
  } else if (dateToNumber(a) < dateToNumber(b)) {
    return -1;
  }
  return 0;
}

export function sortTime(a, b) {
  if (tranfromToDate(a) > tranfromToDate(b)) {
    return 1;
  } else if (tranfromToDate(a) < tranfromToDate(b)) {
    return -1;
  }
  return 0;
}

export function sortAttr(a, b) {
  if (findAttr(a) > findAttr(b)) {
    return 1;
  } else if (findAttr(a) < findAttr(b)) {
    return -1;
  }
  return 0;
}

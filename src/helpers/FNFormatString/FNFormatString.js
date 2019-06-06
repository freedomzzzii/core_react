const MONTHS = [
  'มกราคม',
  'กุมภาพันธ์',
  'มีนาคม',
  'เมษายน',
  'พฤษภาคม',
  'มิถุนายน',
  'กรกฎาคม',
  'สิงหาคม',
  'กันยายน',
  'ตุลาคม',
  'พฤศจิกายน',
  'ธันวาคม',
];

export function formatIDCard(id) {
  if (id) {
    const arr = Array.from(id);
    arr.splice(1, 0, '-');
    arr.splice(6, 0, '-');
    arr.splice(12, 0, '-');
    arr.splice(15, 0, '-');
    return (arr.join(''));
  }
  return (id);
}

export function validatePhoneNumber(phoneNumber) {
  if (phoneNumber){
    const pattern = /^(\+\d{1,3}[- ]?)?\d{10}$/;
    return pattern.test(phoneNumber);
  } else {
    return false;
  }
}

export function formatPhoneNumber(phoneNumber) {
  if (phoneNumber) {
    const arr = Array.from(phoneNumber);
    arr.splice(3, 0, '-');
    arr.splice(7, 0, '-');
    return (arr.join(''));
  }
  return (phoneNumber);
}

export function checkIDCard(id) {
  let sum = 0;
  for (let i = 0; i < 12; i++) {
    sum += parseFloat(id.charAt(i)) * (13 - i);
  }
  if (((11 - sum % 11) % 10) === parseFloat(id.charAt(12))) {
    return true;
  } else {
    return false;
  }
}

export function deleteDash(string) {
  return string.replace(/-/g, '');
}

export function checkLengthNumber(number,length){
  if (number && length){
    const pattern = new RegExp(`^[0-9]{1,${length}}$`);
    if (pattern.test(number)){
      return pattern.test(number);
    }
  }
}

export function validPatternPhone(phone){
  if (phone){
    if (phone.substr(0,1) === '0') {
      return true;
    } else {
      return false;
    }
  }
}

export function formatPhone(phone) {
  let newPhone = phone.split('+66');
  newPhone = newPhone.length > 1 ? `0${newPhone[1]}` : phone;
  const arr = Array.from(newPhone);
  arr.splice(3, 0, '-');
  arr.splice(7, 0, '-');
  return (arr.join(''));
}

export function changePhoneToThaiPattern(phone) {
  let phoneNoZero = '+66' + phone.substring(1, 10);
  return phoneNoZero;
}

export function validateFormat(txt) {
  if (txt === '' || txt === ' ' || txt === '-' || !txt) {
    return ('-');
  }
  return (txt);
}

export function validateEmail(email) {
  if (email){
    const pattern = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,5})$/;
    return pattern.test(email);
  } else {
    return false;
  }
}

export function formatDate(date) {
  if (date) {
    const newDate = new Date(date);
    return (
      `${newDate.getDate() < 10 ? `0${newDate.getDate()}` : newDate.getDate()}/${newDate.getMonth() + 1 < 10 ? `0${newDate.getMonth() + 1}` : newDate.getMonth() + 1}/${newDate.getFullYear() + 543}`
    );
  }
  return '-';
}

export function formatDate2(date) {
  if (date) {
    const newDate = new Date(date);
    return `${newDate.getDate()} ${MONTHS[newDate.getMonth()]} ${newDate.getFullYear() + 543} `;
  }
  return '-';
}

export function formatDate3(date) {
  if (date) {
    const newDate = new Date(date);
    return `${newDate.getDate()}/${newDate.getMonth() + 1}/${newDate.getFullYear()}`;
  }
  return '-';
}

export function formatDate4(date) {
  if (date) {
    const newDate = new Date(date);
    return `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()}`;
  }
  return '-';
}

export function formatDateTime(date) {
  if (date) {
    const newDate = new Date(date);
    let data = '';

    data += `${newDate.getDate()} ${MONTHS[newDate.getMonth()]} ${newDate.getFullYear() + 543} `;
    data += `เวลา ${newDate.getHours() < 10 ? `0${newDate.getHours()}` : newDate.getHours()}:${newDate.getMinutes() < 10 ? `0${newDate.getMinutes()}` : newDate.getMinutes()}`;
    data += ' - ';
    data += `${newDate.getHours() + 2 < 10 ? `0${newDate.getHours() + 2}` : newDate.getHours() + 2}:${newDate.getMinutes() < 10 ? `0${newDate.getMinutes()}` : newDate.getMinutes()} น.`;
    return (data);
  }
  return '-';
}

export function formatDateTimeLog(data) {
  const newDate = new Date(data);
  let result = '';
  result += `${newDate.getDate() < 10 ? `0${newDate.getDate()}` : newDate.getDate()}/${newDate.getMonth() + 1 < 10 ? `0${newDate.getMonth() + 1}` : newDate.getMonth() + 1}/${newDate.getFullYear()}, `;
  result += `${newDate.getHours() < 10 ? `0${newDate.getHours()}` : newDate.getHours()}:${newDate.getMinutes() < 10 ? `0${newDate.getMinutes()}` : newDate.getMinutes()}`;

  return result;
}

export function formatReceiveTime(data) {
  const newDate = new Date(data);
  return `${newDate.getHours() < 10 ? `0${newDate.getHours()}` : newDate.getHours()}:${newDate.getMinutes() < 10 ? `0${newDate.getMinutes()}` : newDate.getMinutes()}`;
}

export function formatTimeToGMT7(data) {
  if(data) {
    const newDate = new Date(data);
    newDate.setHours( newDate.getHours() + 7 );
    return newDate;
  }
  return null;
}

export function formatTimeOrDate(data) {
  if (data) {
    const newDate = new Date(data);
    const today = new Date();
    if (today.toDateString() === newDate.toDateString()) {
      return `${newDate.getHours() < 10 ? `0${newDate.getHours()}` : newDate.getHours()}:${newDate.getMinutes() < 10 ? `0${newDate.getMinutes()}` : newDate.getMinutes()}`;
    }
    return `${newDate.getDate()}/${newDate.getMonth() + 1}/${newDate.getFullYear()} `;
  }
  return '-';
}

export function formatAddress(addr, district, sub_district, province, zipcode) {
  let data = '';
  if (!addr && !district && !sub_district && !province && !zipcode) {
    return '-';
  }
  if (addr) {
    data += `${addr} `;
  }
  if (sub_district) {
    if (province) {
      data += province === 'กรุงเทพมหานคร' ? `แขวง${sub_district} ` : `ตำบล${sub_district} `;
    } else {
      data += `${sub_district} `;
    }
  }
  if (district) {
    if (province) {
      data += province === 'กรุงเทพมหานคร' ? `เขต${district} ` : `อำเภอ${district} `;
    } else {
      data += `${district} `;
    }
  }
  if (province) {
    data += `จังหวัด${province} `;
  }
  if (zipcode) {
    data += zipcode;
  }
  return data;
}

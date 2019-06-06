
export default function FNTimeLeft(time) {
  const total = Date.parse(new Date()) - Date.parse(time);
  const seconds = Math.floor((total/1000) % 60);
  const minutes = Math.floor((total/1000/60) % 60);
  const hours = Math.floor((total/(1000*60*60)) % 24);
  const days = Math.floor((total/(1000*60*60*24)) % 30);
  const months = Math.floor((total/(1000*60*60*24*30)) % 12);
  const years = Math.floor(total/(1000*60*60*24*30*12));
  
  if (years > 0) {
    return `${years} ปีที่แล้ว`;
  } else if (months > 0) {
    return `${months} เดือนที่แล้ว`;
  } else if (days > 0) {
    return `${days} วันที่แล้ว`;
  } else if (hours > 0) {
    return `${hours} ชั่วโมงที่แล้ว`;
  } else if (minutes > 0) {
    return `${minutes} นาทีที่แล้ว`;
  }
  return `${seconds} วินาทีที่แล้ว`;
}

const convertTime = ms => {
	const timeStr = new Date(ms).toISOString().slice(11,-5);
  const hours = parseInt(timeStr.slice(0,2));
  const mins = timeStr.slice(3,5);
  const secs = timeStr.slice(6,8);
  if (hours > 0) {
  	return `${hours}:${mins}:${secs}`;
  } else {
  	return `${parseInt(mins)}:${secs}`;
  }
};

export default convertTime;

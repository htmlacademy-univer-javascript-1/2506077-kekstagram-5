const defineStringLength = (string = '', length = 1) => (string.length <= length);

const findPalindrome = (string = '') => {
  string = string.replaceAll(' ', '').toLowerCase();
  let hitCounter = 0;

  for (let i = 0; i < Math.ceil(string.length / 2); i++) {
    if (string[i] === string[string.length - 1 - i]) {
      hitCounter += 1;
    }
  }
  return (hitCounter === Math.ceil(string.length / 2));
};

const findNumbers = (string = '') => {
  string = string.toString().replaceAll(' ', '');
  let numberString = '';

  for (let i = 0; i < string.length; i++) {
    if (!isNaN(string[i])) {
      numberString += string[i];
    }
  }
  return (numberString === '') ? NaN : Number(numberString);
};

const isMeetingDuringWorkHours = (dayStart = '', dayEnd = '', meetingStart = '', meetingDuration = 0) => {
  const timeData = [...dayStart.split(':'), ...dayEnd.split(':'), ...meetingStart.split(':')].map((item) => parseInt(item, 10));
  const convertToMinutes = (hoursIndex) => timeData[hoursIndex] * 60 + timeData[hoursIndex + 1];
  const dayStartHoursIndex = 0;
  const dayEndHoursIndex = 2;
  const meetingStartHoursIndex = 4;

  const timeInMinutes = {
    startTime: convertToMinutes(dayStartHoursIndex),
    endTime: convertToMinutes(dayEndHoursIndex),
    meetingStartTime: convertToMinutes(meetingStartHoursIndex),
    meetingEndTime: convertToMinutes(meetingStartHoursIndex) + meetingDuration
  };

  return (timeInMinutes.startTime <= timeInMinutes.meetingStartTime && timeInMinutes.endTime >= timeInMinutes.meetingEndTime);
};

defineStringLength();
findPalindrome();
findNumbers();
isMeetingDuringWorkHours();


const checkBooking = (arrivalTime, departureTime, countOfRooms) => {
  let roomsRequired = 0;
  let i = 0;
  let j = 0;

  while(i < arrivalTime.length  && j < arrivalTime.length && roomsRequired <= countOfRooms ) {
    if(arrivalTime[i] < departureTime[j] ){
        i++;
        roomsRequired++;
    } else {
        j++;
        roomsRequired--;
    }
  }

  if (roomsRequired <= countOfRooms) {
    return true;
  }
  return false;
};

module.exports = {
  checkBooking
};

const { checkBooking } = require('../baiSo4');

describe('TEST - check booking', () => {
  test('Should be return true when have 1 room', async () => {
    const arrivalTime = [1, 3, 5];
    const departureTime = [2, 6, 8];
    const countOfRooms = 2;

    const result = checkBooking(arrivalTime, departureTime, countOfRooms);
    expect(result).toBeTruthy();
  });
  test('Should be return true when have 2 room', async () => {
    const arrivalTime = [1, 3, 5];
    const departureTime = [2, 6, 8];
    const countOfRooms = 2;

    const result = checkBooking(arrivalTime, departureTime, countOfRooms);
    expect(result).toBeTruthy();
  });
  test('Should be return false when have 1 room', async () => {
    const arrivalTime = [1, 3, 5];
    const departureTime = [2, 6, 8];
    const countOfRooms = 1;

    const result = checkBooking(arrivalTime, departureTime, countOfRooms);
    expect(result).toBeFalsy();
  });
  test('Should be return false when have 2 room', async () => {
    const arrivalTime = [1, 3, 5];
    const departureTime = [7, 4, 6];
    const countOfRooms = 2;

    const result = checkBooking(arrivalTime, departureTime, countOfRooms);
    expect(result).toBeFalsy();
  });
});

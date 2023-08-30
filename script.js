'use strict';

const bookings = [];

const createBooking = function (
  flightNumber,
  numOfPassengers = 1,
  price = 19.99 * numOfPassengers
)   /*Setting up default values in the arguments above when isntantiating the function above*/ {

  /*normally it would be  es5 way => numOfPassengers = numOfPassengers || 1; but we shorthand it
    we do the same for price we can also set these default values above
    es6 way =>
    numOfPassengers||= 1;
    price||= 19.99;
*/
  const booking = {
    flightNumber,
    numOfPassengers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking('AS321');
console.log('*______________________*');
createBooking('SHE123',2);
console.log('*______________________*');
createBooking('GUE912',3,18.99);
console.log('*______________________*');
createBooking('LSKE210',9,38.99);
console.log('*______________________*');
for (const booked of bookings )
console.log(booked);

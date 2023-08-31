'use strict';

const flight = 'SLA241';
const Abbas = {
  name :'Abbas',
  passport:null
    
}






const checkIn = function (flightNumber, passenger) {
  flightNumber = 'LH12312',
  passenger.name = 'Mr.' + passenger.name;

  if(passenger.passport === 234324234){
    // alert('Checked in')
    console.log(passenger.passport);
  } else{
    // alert('Wrong Passport')
    console.log(passenger.passport);
  }
};



const newPassport = (person) =>{

  person.passport = Math.trunc(Math.random()*1000000);
}

newPassport(Abbas);
checkIn(flight, Abbas)
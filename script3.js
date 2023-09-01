'use strict'

/*Function that returns string of words all lower case with no spaces removed */
// const oneWord = function (str) {
//     return str.replace(/ /g, '').toLowerCase();
// }


/*Function that makes first word of a string of words into uppercase */
// const upperFirstWord = function (str) {
//     const [first, ...otherWords] = str.split(' ')
//     return [first.toUpperCase(),...otherWords].join(' ');
// }


/*Higher order function */
// const transformer = (str,fn) =>{
//     console.log(`Original String: ${str}` );
//     console.log(`Transformed String: ${fn(str)} `);
//     console.log(`Transformed By: ${fn.name} `);
// }

// transformer('JavaScript is a weird Language!', upperFirstWord);
// transformer('JavaScript is the best language',oneWord);



/*
const greet =  (greeting) => {
    return ((name) => {
        console.log(`${greeting} ${name}`);
    })

} 

const greetArr = greeting => name => console.log(`${greeting} ${name}`);

const greeter = greet('Hey there');

greeter('Ji')
greeter('Sam')

greet('Hi')('Ho');
*/


/*Creating a lufthansa object for booking */
const lufthansa = {
    airline:'Lufthansa Airlines',
    iataCode:'LH',
    bookings:[],
    /*booking function was created here, but since it works so well we want to use it for different airlines
    so we make a firstclass function that points to this booking function external to the lufthansa object */
    book(flightNum, passengerName){
        console.log(`${passengerName} booked a seat on ${this.airline} flight code ${this.iataCode}${flightNum} `);
        this.bookings.push({flight: `${this.airline}` , iataCode: `${this.iataCode}`, Booking_No: `${flightNum}`,passenger:`${passengerName}`});
    },
    readBookings(){
        return console.log(...this.bookings);
    },
}


// lufthansa.book(241,'Abbas Gure')
// lufthansa.book(242,'Hawa Gure')
// lufthansa.readBookings();

/*Creating a Swiss object for booking */
const swiss = {
    airline:'Swiss Airlines',
    iataCode:'SWI',
    bookings:[],

}

/*Creating a Somali object for booking */
const somali = {
    airline:'Somali Airways',
    iataCode:'SOM',
    bookings:[],

}


/*despite us assigning the function to this const, 
    this booking function will not work since the 'this' pointers in the method will point to undefined
    
    this is where call/apply/ and bind methods exist 
    
    in this instance we will use the call function which will set the object/value for our 'this' functions to point to*/

    const book = lufthansa.book;
    // book.call(swiss,123,'James Hewitt')



/* For the next one we will use apply method,
apply function is not used anymore as much in JS because theres a better way of doing the exact same thing

keep in mind apply is used for array information*/

// const flightData = [123, "Lamuel Cooper"]
// book.apply(somali,flightData)

/* instead people use call instead of apply but then add the information from the array like apply except. . .  we use the SPREAD OPERATOR! */

// book.call(somali,...flightData)

/* The Bind Method - just like the call method, bind method allows us to manually set the 'this' keyword in our functions
in the following example we bind the this keyword for the bookSOM object to somali */
// const bookSOM = book.bind(somali);
/* now we just can do call */
// bookSOM(12,'Abdi Johnson')
/* To make sense of it think of bind function creating a new object with copied content but the this keyword pointing to the object created. */

/* in tems of the booking lets take it a step further, booking by default takes two values, one of them was the flight number
    lets make an object that books only to specific flight number
    this is called partial application - a part of the arg of the original function is already set/applied */
    // const bookSwiss200 = book.bind(swiss,200);
    // bookSwiss200('Samuel L Wackson')
    

    /*  Now lets create an event listener for the button to buy a plane for a company   
    
    First lets create a plane attribute to store how many planes lufthansa owns*/
    lufthansa.planes = 20;
    /* now we buy a plane */
    lufthansa.buyPlane = function(){
        console.log(this);

        this.planes ++;
        console.log(this.planes);
    }
    
    /*
    Now we could buy a plane method and call it, but we want to call it when we click the button 'buy plane'
    
    
    however when we do the following code below without the bind, it just calls back the object button and thats not a number so it wont increase the number of planes, how do fix that??*/
    

    // document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane)

    /* by using the bind method since we need to pass in a function, and we do not want to call it.
    so call function is off the plate, we want to return a new function, and want the this keyword to point to the lufthansa object its called from, so we use bind
    
    quick note: in Bind method, the first value is the 'this' pointer so if there is no 'this' for the method we use bind for normally, we simply use null a good example is the VAT Method below*/

    document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa))


    const addtax = (rate, value)=>
        value + value * rate

    /* set the rate to 13%  */
    const addVAT = addtax.bind(null,0.13)
    console.log(addVAT(123));
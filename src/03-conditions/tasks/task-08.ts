/**
 * An airline automatically determines a passenger's check-in status.
 * Business Rules
 * Step 1
 * If the passenger has not checked in online, display:
 * "Please complete online check-in first.""
 * 
 * Otherwise, continue.
 * Step 2
 * If baggage weight exceeds 20 kg:
 * - Business Class → Extra baggage allowed.
 * - Economy Class → Additional baggage fee required.
 * 
 * Otherwise:
 * Proceed to boarding pass printing.
 * 
 * Passenger Information
 * | Information     | Value         |
 * | --------------- | ------------- |
 * | Passenger       | Fajar Nugroho |
 * | Online Check-in | Yes           |
 * | Cabin Class     | Economy       |
 * | Baggage Weight  | 24 kg         |
 * 
 * Student Tasks
 * 1. Declare all variables.
 * 2. Implement the airline decision process.
 * 3. Display the correct message.
 */

type PassangerInformation = {
    passangerName : string
    isOnlineCheckIn : boolean
    cabinClass : string
    baggageWeight : number
}

let passanger1 : PassangerInformation = {
    passangerName : `Fajar Nugroho`,
    isOnlineCheckIn : true,
    cabinClass : `Economy`,
    baggageWeight : 19
}

let message : string;
if(!passanger1.isOnlineCheckIn){
    if(passanger1.baggageWeight > 20){
    message = passanger1.cabinClass === `Economy` ? ` Additional baggage fee required` : `Extra baggage allowed`
    }
    else{
    message = ``
    console.log(`Passanger Name : ${passanger1.passangerName}`)
    console.log(`Online Check-in : ${passanger1.isOnlineCheckIn}`)
    console.log(`Cabin Class : ${passanger1.cabinClass}`)
    console.log(`Baggage Weight : ${passanger1.baggageWeight}`)
    console.log(`Message : ${message}`)
    }
}
else{
    message = `Please complete online check-in first`
}


/**
 * A hotel determines room availability using the following rules.
 * First, the system checks whether rooms are still available.
 * If rooms are available:
 * - Premium members receive a free room upgrade.
 * - Regular customers receive the reserved room only.
 * 
 * If no rooms are available:
 * - Premium members are placed on the priority waiting list.
 * - Regular customers are informed that no rooms are available.
 * 
 * Today's reservation:
 * | Information    | Value       |
 * | -------------- | ----------- |
 * | Customer Name  | Nadia Putri |
 * | Premium Member | Yes         |
 * | Room Available | No          |
 * 
 * The system should display the appropriate message.
 * Student Tasks: 
 * 1. Declare all variables.
 * 2. Implement the logic using nested if statements.
 * 3. Display the reservation result.
 */

type ReservationInformation = {
    customerName : string
    ispremiumMember : boolean
    isRoomAvailable : boolean
}

const reservation1 : ReservationInformation = {
    customerName : `Nadia Putri`,
    ispremiumMember : true,
    isRoomAvailable : false
}

/*if(reservation1.isRoomAvailable){
   const message : string = reservation1.ispremiumMember ? `receive a free room upgrade` : `receive the reserved room only`
}
else{
    const message : string = reservation1.ispremiumMember ? `placed on the priority waiting list` : `no rooms are available`
}
*/

if (reservation1.isRoomAvailable) {
    if (reservation1.ispremiumMember) {
        console.log("Receive a free room upgrade.");
    } else {
        console.log("Receive the reserved room only.");
    }
} else {
    if (reservation1.ispremiumMember) {
        console.log("You are placed on the priority waiting list.");
    } else {
        console.log("No rooms are available.");
    }
}

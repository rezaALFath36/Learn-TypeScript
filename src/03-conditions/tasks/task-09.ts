/**
 * A manufacturing company monitors production machines continuously.

Business Rules

If the machine is powered off:

Display Machine Offline.

Otherwise, check its operating condition.

If the machine temperature exceeds 90°C:

If vibration level is High, display:
Emergency Shutdown
Otherwise:
Cooling Required

If the temperature is 90°C or below:

If production speed is below 80%, display:
Performance Warning
Otherwise:
Machine Operating Normally

Today's machine status:
| Information      | Value |
| ---------------- | ----- |
| Powered On       | Yes   |
| Temperature      | 95    |
| High Vibration   | No    |
| Production Speed | 92    |

Student Tasks
- Declare all variables.
- Translate every business rule into conditional statements.
- Display the final machine status.
 */

type MachineStatus = {
    isOn : boolean
    temperature : number
    isHighVibration : boolean
    productionSpeed : number
}

let machine1 : MachineStatus = {
    isOn : true,
    temperature : 95,
    isHighVibration : false,
    productionSpeed : 92
}

let message : string;

if(!machine1.isOn){
    message = `Machine Offline`
}
else{
    if(machine1.temperature > 90){
        if(!machine1.isHighVibration){
            message = `Emergency Shutdown`
        }
        else{
            message = `Cooling Required`
        }
    }
    else{
        if(machine1.productionSpeed < 80){
            message = `Performance Warning`
        }
        else {
            message = `Machine Operating Normally`
        }
    }
}

console.log(`Powered ON : ${machine1.isOn}`)
console.log(`Temperature : ${machine1.temperature}`)
console.log(`High Vibration : ${machine1.isHighVibration}`)
console.log(`Production Speed : ${machine1.productionSpeed}`)
console.log(`Message : ${message}`)
// Code your solution in this file!
function distanceFromHqInBlocks(dLocation){
    if (dLocation > 42)
        return dLocation - 42
    else (dLocation < 42)
        return 42 - dLocation 
}

function distanceFromHqInFeet(fLocation) {
    if (fLocation > 42)
        return (fLocation - 42)*264
    else (fLocation < 42)
        return (42 - fLocation)*264
}

function distanceTravelledInFeet(dLocation, fLocation) {
    if (fLocation > dLocation)
        return (fLocation - dLocation)*264
    else (dLocation > fLocation)
        return (dLocation - fLocation)*264 
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination) 
    if (distance <= 400) {
        return 0
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400)*.02
    } else if (distance > 2000 && distance <= 2500) {
        return 25
    } else {
        return "cannot travel that far"
    }

    // let blockDistance = math.abs(start - destination);
    // let distanceTraveled = blockDistance * 264;
    // if (distanceTraveled <= 400) {
    //     console.log('give customers a free sample');
    //     return 0}
}
//     else if (distanceTraveled >= 2500)
//         return 'cannot travel that far'
//     else if (2000 <= distanceTraveled < 2500)
//         return 25
//     else if (400 < distanceTraveled < 2000)
//         return (distanceTraveled * .02)
// }
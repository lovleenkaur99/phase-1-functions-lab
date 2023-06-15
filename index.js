// Code your solution in this file!

function distanceFromHqInBlocks(pickupLocation) {
    let hqlocation = 42;
    return Math.abs (pickupLocation - hqlocation)
}

function distanceFromHqInFeet(blocks) { 
    const feetPerBlock = 264;
    const hqlocation = 42;
    return Math.abs (blocks - hqlocation) * feetPerBlock
}

function distanceTravelledInFeet(startBlock, endBlock){ 
    const feetPerBlock = 264;
    return Math.abs (startBlock - endBlock) * feetPerBlock
}

function calculatesFarePrice(start, destination) { 
    const feetPerBlock = 264;
    const distance = Math.abs (start - destination) * feetPerBlock
    if (distance <= 400){ 
        return 0;
    } else if (distance > 400 && distance <= 2000) { 
        return (distance -400) * 0.02;
    } else if (distance >= 2000 && distance <= 2500) { 
        return 25;
    } else { 
        return 'cannot travel that far'
    }
}

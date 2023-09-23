function demeritPointsCalculator(kms) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    const maximumDemeritPoints = 12;

// Prompt for car speed
    const input = prompt('Enter speed (in km/h):');
    const carSpeed = parseInt(input);

// checks  
    if (kms <= speedLimit) {
        console.log('Ok');
    } else {
        let demeritPoints = ((kms - speedLimit) / kmPerDemeritPoint);
      
        if (demeritPoints > maximumDemeritPoints) {
            console.log('License suspended');
        } else {
            console.log('Points: ' + demeritPoints);
        }
    }
  }
  
//function call
demeritPointsCalculator(carSpeed);

//console.log(demeritPointsCalculator(90));
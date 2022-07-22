const fs = require('fs');
// The floor santa ends up on
// ( -- up one floor
// ) -- down one floor

const santaFunction = () => {
    fs.readFile('santa.txt', (err, data) => {
        const santaDirections = data.toString();
        const santaDirectionsArray = santaDirections.split('');
        const floor = santaDirectionsArray.reduce((acc, bracket) => {
            if (bracket === '('){
                return acc +=1;
            } else if(bracket === ')'){
                return acc -=1;
            }
            }, 0);
            
        console.log('floor:', floor);
    });
}

santaFunction();

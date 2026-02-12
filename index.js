
function taxable(state, taxExempt){
    if (state == 'IA' && taxExempt == false){
        return "is taxable";
    }
}

function isVehicle(hasWheels, canFly, canSwim){
    if (hasWheels == false && canFly == false && canSwim == false){
        return;
    } else {
        return "is vehicle";
    }
}



//should create a function named isVehicle that takes three parameters 
// hasWheels, canFly, canSwim and returns the string "is vehicle" if 
// at least one of the three parameters evaluates to true

//should return the string "is vehicle" when hasWheels is true and 
// canFly and canSwim are both false

//should return the string "is vehicle" when canFly is true and hasWheels
//  and canSwim are both false

//should return the string "is vehicle" when canSwim is true and canFly 
// and hasWheels are both false

//should return the string "is vehicle" when canSwim and canFly are both 
// true and hasWheels is false

//should not return the string "is vehicle" when hasWheels, canFly, and 
// canSwim are all false

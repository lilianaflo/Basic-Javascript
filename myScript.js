function tickUp(){
    // Get the HTML element by its unique ID
    const counterElement = document.getElementById("counter");
    
    // Get the current value from the element's content
    // convert it to a number
    let currentCount = Number(counterElement.textContent);

    // Increment the number
    currentCount++;

    // Update the HTML element with the new number
    counterElement.textContent = currentCount;
}

function tickDown(){
    // Get the HTML element by its unique ID
    const counterElement = document.getElementById("counter");
    
    // Get the current value from the element's content
    // convert it to a number
    let currentCount = Number(counterElement.textContent);

    // Increment the number
    currentCount--;

    // Update the HTML element with the new number
    counterElement.textContent = currentCount;
}

function runForLoop(){
    // Get the HTML element by its unique ID
    const counterElement = document.getElementById("counter");
    // Get the current value from the element's content
    // convert to a number
    const count = Number(counterElement.textContent);
    // Variable that will hold numbers
    let result = "";

    // For loop to run through numbers
    for(let i = 0; i <= count; i++){
        result += i + " ";
    }

    // Displaying result
    document.getElementById("forLoopResult").textContent = result;
}

function showOddNumbers(){
    // Get the HTML element by its unique ID
    const counterElement = document.getElementById("counter");
    // Get the current value from the element's content
    // convert to a number
    const count = Number(counterElement.textContent);
    // Variable that will hold numbers
    let result = "";

    // For loop to run through numbers
    for(let i = 0; i <= count; i++){
        if(i % 2 == 1){
            result += i + " ";
        }
    }
    document.getElementById("oddNumberResult").textContent = result;
}

function addMultiplesToArray(){
    // Get the HTML element by its unique ID
    const counterElement = document.getElementById("counter");
    // Get the current value from the element's content
    // convert to a number
    const count = Number(counterElement.textContent);
    // Array that will hold numbers
    let result = [];

    for(let i = 0; i < count; i++){
        if( i % 5 == 0 && i != 0){
            result.push(i);
        }
    }
    result.reverse();
    console.log(result);
}

function printCarObject(){
    const type = document.getElementById("carType");
    const Type = String(type.value);

    const mpg = document.getElementById("carMPG");
    const MPG = Number(mpg.value);

    const color = document.getElementById("carColor");
    const Color = String(color.value);

    const car = {
        carType: Type,
        carMPG: MPG,
        carColor: Color,
    }
    console.log(car);
}

function loadCar(data){
    const carT = document.getElementById("carType");
    const carM = document.getElementById("carMPG");
    const carC = document.getElementById("carColor");

    let car;

    if(data == 1){
        car = carObject1;
    }else if(data == 2){
        car = carObject2;
    }else if(data == 3){
        car = carObject3
    }
    carT.value = car.cType;
    carM.value = car.cMPG;
    carC.value = car.cColor;
}

function changeColor(data){
    if(data == 1){
        document.getElementById("styleParagraph").style.color = "red";
    }else if(data ==  2){
        document.getElementById("styleParagraph").style.color = "green";
    }else if(data == 3){
        document.getElementById("styleParagraph").style.color = "blue";
    }

}


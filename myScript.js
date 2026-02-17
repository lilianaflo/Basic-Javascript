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


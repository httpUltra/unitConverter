function convert(){

    const inputValue = document.getElementById('userInput').value;
    const unit = document.getElementById('unit').value;
    let result = 0;
    let unitText = '';
    
    if (unit === "milesToKm") {
     result = inputValue * 1.60934;
     unitText = ' miles are ';
    } else {
     result = inputValue / 1.60934;
     unitText = ' kilometers are ';
    }
    
    const resultString = inputValue + unitText + result + (unit === "milesToKm" ? ' km' : ' miles');
    console.log(resultString);
    // if (unit === "milesToKm") {
    //     return " km";
    // } else {
    //     return " miles";
    // }
    
    const resultElement = document.getElementById('resultElement');
    resultElement.innerHTML = resultString;
  }
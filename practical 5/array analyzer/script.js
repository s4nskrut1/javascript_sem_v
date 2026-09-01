function findValues() {

    let input = document.getElementById("numbers").value.trim();

    if (input == "") {
        alert("Please enter array elements.");
        return;
    }

    let numbers = input.split(",").map(Number);

    let arr = [];

    numbers.forEach(function(number, index) {
        arr.push({
            index: index + 1, 
            value: number 
        });
    }); 

    let values = arr.map(function(item) {
        return item.value; 
    });

    let max = values.reduce(function(a, b) {
        return a > b ? a : b; 
    }); 

    let min = values.reduce(function(a, b) {
        return a < b ? a : b; 
    });

    let sum = values.reduce(function(total, number) {
        return total + number;
    }, 0); 

    let average = sum / values.length;

    let aboveAverage = arr.filter(function(item) {
        return item.value > average; 
    });

    let result = document.getElementById("result");

    result.style.display = "block";

    result.innerHTML = `
        <div class="result-title">
            📋 Analysis Result
        </div>

        <div class="row">
            <span class="label">Array</span>
            <span class="value">${values.join(", ")}</span>
        </div>

        <div class="row">
            <span class="label">Maximum Value</span>
            <span class="value max">🟢 ${max}</span>
        </div>

        <div class="row">
            <span class="label">Minimum Value</span>
            <span class="value min">🔴 ${min}</span>
        </div>

        <div class="row">
            <span class="label">Average</span>
            <span class="value">${average.toFixed(2)}</span>
        </div>

        <div class="row">
            <span class="label">Above Average</span>
            <span class="value">
                ${aboveAverage.map(item => item.value).join(", ") || "None"}
            </span>
        </div>
    `;
}
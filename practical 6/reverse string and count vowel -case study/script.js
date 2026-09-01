function processString() {

    let paragraph = document.getElementById("mainInput").value;

    if (paragraph.trim() == "") {

        alert("Please enter a string or paragraph.");

        return;
    }

    let reversedParagraph =
        paragraph.split("").reverse().join("");

    let vowels =
        paragraph.match(/[aeiou]/gi);

    let vowelCount =
        vowels ? vowels.length : 0;

    document.getElementById("reverseOutput").innerHTML =
        reversedParagraph;

    document.getElementById("vowelOutput").innerHTML =
        vowelCount;

    document.getElementById("totalOutput").innerHTML =
        paragraph.length;

    document.getElementById("operationCount").innerHTML =
        "2 / 2";
} 
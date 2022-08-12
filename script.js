// setting image in interests-hobbies as variable
let bigImg = document.getElementById("bigImg");
let scrollImg = document.getElementById("scrollImg");

// setting image caption as variable
let caption = document.getElementById("caption");

// setting buttons as variable
let nextButton = document.getElementById("next");
let previousButton = document.getElementById("previous");

let i = 0;

nextButton.onclick = function() {
    i++;

    if (i == imgArray.length) { // once i reaches value of length of img.array, restart from beginning
        i = 0;
        bigImg.src = imgArray[i];
        caption.innerHTML = infoArray[i];
    }
    else {
        bigImg.src = imgArray[i]; // else, continue using next element in imgArray and infoArray
        caption.innerHTML = infoArray[i];
    }
}

previousButton.onclick = function() {
    i--;

    if (i == -1) { // similar process as nextButton, but instead works in reverse
        i = 3;
        bigImg.src = imgArray[i];
        caption.innerHTML = infoArray[i];
    }
    else {
        bigImg.src = imgArray[i];
        caption.innerHTML = infoArray[i];
    }    
}
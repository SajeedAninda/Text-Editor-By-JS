let textarea = document.querySelector("textarea");
let leftAlign = document.querySelector("#left-align");
let rightAlign = document.querySelector("#right-align");
let centerAlign = document.querySelector("#center-align");
let justified = document.querySelector("#justified");
let upperCase = document.querySelector("#uppercase");

//BOLD
document.querySelector("#bold").addEventListener("click", function () {
    textarea.classList.toggle("font-bold");
    let boldBtn = document.querySelector("#bold");
    boldBtn.classList.toggle("text-orange-700");
    boldBtn.classList.toggle("text-2xl");
})

// ITALIC 
document.querySelector("#italic").addEventListener("click", function () {
    textarea.classList.toggle("italic");
    let italicBtn = document.querySelector("#italic");
    italicBtn.classList.toggle("text-orange-700");
    italicBtn.classList.toggle("text-2xl");
})

// // UNDERLINE 
document.querySelector("#underline").addEventListener("click", function () {
    textarea.classList.toggle("underline");
    let underBtn = document.querySelector("#underline");
    underBtn.classList.toggle("text-orange-700");
    underBtn.classList.toggle("text-2xl");
})


// LEFT ALIGN
document.querySelector("#left-align").addEventListener("click", function () {
    textarea.classList.remove("text-right");
    rightAlign.classList.remove("text-orange-700");
    rightAlign.classList.remove("text-2xl");
    textarea.classList.remove("text-center");
    centerAlign.classList.remove("text-orange-700");
    centerAlign.classList.remove("text-2xl");
    textarea.classList.remove("text-justify");
    justified.classList.remove("text-orange-700");
    justified.classList.remove("text-2xl");
    textarea.classList.toggle("text-left");
    leftAlign.classList.toggle("text-orange-700");
    leftAlign.classList.toggle("text-2xl");
})

// RIGHT ALIGN
document.querySelector("#right-align").addEventListener("click", function () {
    textarea.classList.remove("text-left");
    leftAlign.classList.remove("text-orange-700");
    leftAlign.classList.remove("text-2xl");
    textarea.classList.remove("text-center");
    centerAlign.classList.remove("text-orange-700");
    centerAlign.classList.remove("text-2xl");
    textarea.classList.remove("text-justify");
    justified.classList.remove("text-orange-700");
    justified.classList.remove("text-2xl");
    textarea.classList.toggle("text-right");
    rightAlign.classList.toggle("text-orange-700");
    rightAlign.classList.toggle("text-2xl");
})

// CENTER ALIGN
document.querySelector("#center-align").addEventListener("click", function () {
    textarea.classList.remove("text-right");
    rightAlign.classList.remove("text-orange-700");
    rightAlign.classList.remove("text-2xl");
    textarea.classList.remove("text-left");
    leftAlign.classList.remove("text-orange-700");
    leftAlign.classList.remove("text-2xl");
    textarea.classList.remove("text-justify");
    justified.classList.remove("text-orange-700");
    justified.classList.remove("text-2xl");
    textarea.classList.toggle("text-center");
    centerAlign.classList.toggle("text-orange-700");
    centerAlign.classList.toggle("text-2xl");
})

// JUSTIFY ALIGN
document.querySelector("#justified").addEventListener("click", function () {
    textarea.classList.remove("text-left");
    leftAlign.classList.remove("text-orange-700");
    leftAlign.classList.remove("text-2xl");
    textarea.classList.remove("text-center");
    centerAlign.classList.remove("text-orange-700");
    centerAlign.classList.remove("text-2xl");
    textarea.classList.remove("text-right");
    rightAlign.classList.remove("text-orange-700");
    rightAlign.classList.remove("text-2xl");
    textarea.classList.toggle("text-justify");
    justified.classList.toggle("text-orange-700");
    justified.classList.toggle("text-2xl");
})

// FONT SIZE 
document.querySelector("#size").addEventListener("click", function () {
    inputValue = parseFloat(document.querySelector("#size").value);
    console.log(inputValue);
    textarea.style.fontSize = inputValue + "px";
})
document.querySelector("#size").addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        inputValue = parseFloat(document.querySelector("#size").value);
        console.log(inputValue);
        textarea.style.fontSize = inputValue + "px";
    }
})

// UPPERCASE 
document.querySelector("#uppercase").addEventListener("click", function () {
    textarea.classList.toggle("uppercase");
    upperCase.classList.toggle("text-orange-700");
    upperCase.classList.toggle("text-2xl");
})

// FONT COLOR CHANGE 
document.querySelector("#color").addEventListener("change", function () {
    let color = document.querySelector("#color").value;
    textarea.style.color = color;
})
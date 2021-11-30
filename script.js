/*
function functionName(parameter) {
    parameter === "Argumentum as a string";
} 
functionName("Argumentum as a string");


const argument = "argument as a string";

const functionName = function (parameter) {
    parameter === "argumentum as a string";
}
functionName(argument);

const functionName = () => {

}
functionName();
*/

const inputElement = (type, name, label) => {
    return `
        <div>
        <label>${label}</label>
        <input type="${type}" name="${name}">
        </div>
    `
}
const formElement = `
    <form id="form">
        ${inputElement("text", "firstName", "Keresztneved")}
        ${inputElement("file", "profilePicture", "Profilképed")}
        ${inputElement("email", "personalEmail", "E-mail címed")}
        ${inputElement("radio", "newsletter", "Szeretnél-e hírlevelet kapni?")}
        ${inputElement("checkbox", "terms", "Elfogadod-e a felhasználási feltételeket?")}
        <button>OK</button>
    </form>
`;

const formSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    e.target.classList.add("submitted");
}

const inputEvent = (event) => {
    console.log(event.target.value);
    document.getElementById("inputValueContent").innerHTML = event.target.value;
}

function loadEvent() {
    const root = document.querySelector("#root");
    root.insertAdjacentHTML("beforeend", formElement);
    root.insertAdjacentHTML("beforeend", `
    <div id="inputValueContent"></div>
    `);

    const form = document.getElementById("form");
    form.addEventListener("submit", formSubmit);

    const inputList = form.querySelectorAll("input");
    for (const input of inputList) {
        input.addEventListener("input", inputEvent);
    }
}

window.addEventListener("load", loadEvent)
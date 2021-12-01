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

const selectElement = (type, name, label, selectOptions) => {
    let optionElements = "";
    for (const option of selectOptions) {
        optionElements += `
            <option>${option}</option>
        `;
    }

    return `
        <div>
        <label>${label}</label>
            <${type} name="${name}">
                ${optionElements}
            </${type}>
        </div>
    `
}

/* 
const formElement = '<form id="form">' + inputElement("text", "firstName", "Keresztneved") + inputElement("file", "profilePicture", "Profilképed") + inputElement("email", "personalEmail", "E-mail címed") + inputElement("checkbox", "newsletter", "Szeretnél-e hírlevelet kapni?") + {inputElement("checkbox", "terms", "Elfogadod-e a felhasználási feltételeket?" + selectElement("select", "where", "Hol hallottál rólunk?", ["internetről", "ismerőstől", "egyéb"]) + '<button>OK</button>' +
'</form>'
*/


const formElement = `
    <form id="form">
        ${inputElement("text", "firstName", "Keresztneved")}
        ${inputElement("file", "profilePicture", "Profilképed")}
        ${inputElement("email", "personalEmail", "E-mail címed")}
        ${inputElement("checkbox", "newsletter", "Szeretnél-e hírlevelet kapni?")}
        ${inputElement("checkbox", "terms", "Elfogadod-e a felhasználási feltételeket?")}
        ${selectElement("select", "where", "Hol hallottál rólunk?", ["internetről", "ismerőstől", "egyéb"])}
        <button>OK</button>
    </form>
`;

const formSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    const et = e.target;
    et.classList.add("submitted");
    let etValue = et.querySelector(`select[name="where"]`).value;
    console.log(etValue);
}

const inputEvent = (event) => {
    const fName = document.querySelector('input[name="firstName"]');
    let tryForm = fName.closest("#form");
    console.log(tryForm);
    if (event.target.getAttribute("name") === "firstName") {
    console.log(event.target.value);
    document.getElementById("inputValueContent").innerHTML = event.target.value;
    }
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
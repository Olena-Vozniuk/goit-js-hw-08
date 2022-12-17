import throttle from "lodash.throttle";


const form = document.querySelector(".feedback-form");
const STOTAGE_KEY = 'feedback-form-state';
let formData = {};

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onMessageInput, 500));

populateMessage();

// Зупиняємо поведінку за замовчуванням
// Забираємо повідомлення зі сховища
// Очищаємо форму


function onFormSubmit(evt) {
    evt.preventDefault();
    evt.currentTarget.reset();
    console.log(JSON.parse(localStorage.getItem(STOTAGE_KEY)));
    localStorage.removeItem(STOTAGE_KEY);
}


// Отримуємо значення полів
// Зберігаємо його у сховище

function onMessageInput(evt) {
    if (evt.target.nodeName !== 'INPUT' && evt.target.nodeName !== 'TEXTAREA') {
    return
    };
    
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(STOTAGE_KEY, JSON.stringify(formData));

// for (const [STOTAGE_KEY] of formData) {
//   localStorage.setItem(STOTAGE_KEY, formData) += `evt.target.name : evt.target.value\n`;
// }

}

// Отримуємо значення зі сховища
// Якщо там щось було - обновляємо DOM

function populateMessage() {
    let savedData = localStorage.getItem(STOTAGE_KEY);
    
    if (savedData) {
        savedData = JSON.parse(savedData);
        Object.entries(savedData).forEach(([name, value]) => {
            formData[name] = value;
            form.elements[name].value = value;
        });
    };
};

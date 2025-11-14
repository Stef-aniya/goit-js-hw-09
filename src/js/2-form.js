
const formData ={
    email: "",
    message: ""
}
const form = document.querySelector('.feedback-form');

// form.addEventListener('input',onInput);

const STORAGE_KEY = "feedback-form-state";

const savedData = localStorage.getItem(STORAGE_KEY);

if (savedData) {
    const parsed = JSON.parse(savedData);

    formData.email = parsed.email || "";

    formData.message = parsed.message || "";

    form.elements.email.value = formData.email;

    form.elements.message.value = formData.message;
}

form.addEventListener('input',(event) => {
    if (!event.target.name) return;

    formData[event.target.name] = event.target.value;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
});
form.addEventListener('submit', event => {

    event.preventDefault();

    localStorage.removeItem(STORAGE_KEY);

    form.reset();

    formData.email = "";
    formData.message = "";
})





// function saveToLs(key,value){
//     const zip = JSON.stringify(value)
//     localStorage.setItem(key,zip)
// }
// function loadFromLS(key){
//     try{
//         const value = JSON.parse(zip);
//         return value 
//     }catch{
//         return zip
//     }
// }


// form and buton
const formSignIn = document.querySelector('.form-sign-in');
const validateBtn = formSignIn.querySelector('.validateBtn');
const link2Content = document.querySelector('.link2Content');
//username
const divUserName = document.querySelector('.divUserName');
const userName = divUserName.querySelector('.userName');
//surname
const divUserSurName = document.querySelector('.divUserSurName');
const userSurName = divUserSurName.querySelector('.userSurName');
//age
const divUserAge = document.querySelector('.divUserAge');
const userAge = divUserAge.querySelector('.userAge');
//save
const savebtn = document.getElementById("savebtn");
//showBlock
const resultBlock = document.getElementById("resultBlock");
const yearsOldBox = document.getElementById("yearsOldBox");
const divWithImage = document.getElementById("divWithImage");
//showname and showsurname
let showName = document.getElementById("showName");
let showSurname = document.getElementById("showSurname");
//status massage
const message = {
    loading: 'img/spinner.svg',
};

//inputs
let firstname, surname, age;


//functions
function showDisplayBlock() {
    if (!userName.value || !userName.value.match(/\D/g) || !userSurName.value || !userSurName.value.match(/\D/g) || !userAge.value || userAge.value.match(/\D/g)) {
        resultBlock.style.display="none";
        userName.style.border = "1px solid #red";
        userSurName.style.border = "1px solid #red";
        userAge.style.border = "1px solid #red";
        savebtn.style.backgroundColor="#dc3545";
        savebtn.style.borderColor="#dc3545";
        return;
    } else {
        showName.textContent= userName.value;
        showSurname.textContent= userSurName.value;
        resultBlock.style.display="";
        resultBlock.style.backgroundColor="#28a745";
        resultBlock.style.borderColor="#28a745";
        savebtn.style.backgroundColor="#28a745";
        savebtn.style.borderColor="#28a745";
    }
}

function inputValidation() {
    if (!userName.value.match(/\D/g)) {
        userName.style.border = "1px solid red";
        
    } else {
        userName.style.border = "1px solid #ced4da";
        userName.style.border= "radius: 0.25rem";
    }
    if (!userSurName.value.match(/\D/g)) {
        userSurName.style.border = "1px solid red";
        
    } else {
        userSurName.style.border = "1px solid #ced4da";
        userSurName.style.border= "radius: 0.25rem";
    }

    if (userAge.value.match(/\D/g)) {
        userAge.style.border = "1px solid red";
        
    } else {
        userAge.style.border = "1px solid #ced4da";
        userAge.style.border= "radius: 0.25rem";
    }
}

let statusMessage = document.createElement('img');
function postData(formSignIn) {
    formSignIn.addEventListener('submit', (e) => {
        e.preventDefault();

        let statusMessage = document.createElement('img');
        statusMessage.src = message.loading;
        statusMessage.style.cssText = `
            display: block;
            margin: 0 auto;
        `;
        formSignIn.insertAdjacentElement('afterend', statusMessage);
    });
}
statusMessage.src = message.loading;
statusMessage.style.cssText = `
    display: block;
    margin: 0 auto;
`;
//formSignIn.insertAdjacentElement('afterend', statusMessage);
//code
showDisplayBlock();

function getDynamicInformation (selector) {
    const input = document.querySelector(selector);
    input.addEventListener('input', () => {

        inputValidation();

        switch(input.getAttribute('id')) {
            case 'firstname':
                firstname = +input.value;
                break;

            case 'surname':
                surname = +input.value;
                break;

            case'age':
                age = +input.value;
                break;
        }
        
        showDisplayBlock();
    });
    
}

getDynamicInformation('#firstname');
getDynamicInformation('#surname');
getDynamicInformation('#age');


formSignIn.addEventListener('submit', function (event){
    event.preventDefault ();
    
    if (!userName.value || !userName.value.match(/\D/g) || !userSurName.value || !userSurName.value.match(/\D/g) || !userAge.value || userAge.value.match(/\D/g)) {
        
        return;
    } else {
        formSignIn.insertAdjacentElement('afterend', statusMessage);
    }

    if (!userName.value || !userName.value.match(/\D/g)) {
        userName.style.border = "1px solid red";
    } else {
        userName.style.border = "1px solid green";
        userName.style.border= "radius: 0.25rem";
    }
    if (!userSurName.value || !userSurName.value.match(/\D/g)) {
        userSurName.style.border = "1px solid red";
    } else {
        userSurName.style.border = "1px solid green";
        userSurName.style.border= "radius: 0.25rem";
    }

    if (!userAge.value || userAge.value.match(/\D/g)) {
        userAge.style.border = "1px solid red";
    } else {
        userAge.style.border = "1px solid green";
        userAge.style.border= "radius: 0.25rem";
    }
    if (!userName.value || !userName.value.match(/\D/g) || !userSurName.value || !userSurName.value.match(/\D/g)) {
        return;
    } else {
        let showNameLink2 = document.getElementById("showNameLink2");
        let showSurnameLink2 = document.getElementById("showSurnameLink2"); 
        showNameLink2.textContent= userName.value;
        showSurnameLink2.textContent= userSurName.value;
    }
});

link2Content.addEventListener('submit', function (event){
    event.preventDefault ();
    
    yearsOldBox.style.display = "none";
    divWithImage.style.display = "none";

    if (userAge.value < 18) {
        yearsOldBox.style.display = "";
        return;
    } else {
        divWithImage.style.display = "";
    }
});
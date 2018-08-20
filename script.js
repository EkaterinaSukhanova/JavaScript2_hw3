
'use strict';

//1. У вас есть большой текст, в котором для обозначения диалогов используются одинарные кавычки. Придумать шаблон, который меняет одинарные кавычки на двойные.
//2. Улучшить шаблон таким образом, чтобы конструкции типа aren’t не меняли одинарную кавычку на двойную.

let text = " She said: 'What do you think about Edgar Poe's 'The Black Cat'?' ";
let reg = /\B'|'\B/g;
console.log( text.replace(reg, '\"'));

//3. Создать форму обратной связи с полями: Имя, Телефон, e-mail, текст, кнопка «Отправить».
function valid(form) {
    let fail = false;
    let name = form.name.value;
    let email = form.email.value;
    let number = form.number.value;
    let text = form.text.value;

    let nameReg = /^[a-zа-яё]+$/i;
    let emailReg = /([a-z_\-\.]+@[a-z_]+?\.[a-z]{2,6})/i;
    let phoneReg = /\+7\(\d+\d+\d\)+\d+\d+\d+\-+\d+\d+\d+\d/;

    if (nameReg.test(name) === false){
        fail = "Неправильно введено имя. Имя должно содержать только буквы";
        form.name.style.border="1px solid red";
        alert(fail);
    } else {
        form.name.style.border="1px solid darkgray";
    }
    if (emailReg.test(email) === false){
        fail = "Неправильно введен email. E-mail выглядит как mymail@mail.ru, или my.mail@mail.ru, или my-mail@mail.ru";
        form.email.style.border="1px solid red";
        alert(fail);

    } else {
        form.email.style.border="1px solid darkgray";
    }
    if (phoneReg.test(number) === false){
        fail = "Неправильно введен номер. Телефон подчиняется шаблону +7(000)000-0000";
        form.number.style.border="1px solid red";
        alert(fail);
    } else {
        form.number.style.border="1px solid darkgray";
    }

    if (fail) {
        console.log(fail);
        return false;
    } else {
        location.reload();
    }

}

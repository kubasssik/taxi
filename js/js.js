
import { funcСonstructorBlock } from './funcBlock.js';
import { rateRadioFunc } from './funcTariffs.js';
import {funcListSityOne,funcListSityTwo} from './funcSityList.js';
import {funcFocus} from './funcFocus.js';


/********************СКЕЛЕТ**********************/

/*****************Основные блоки*************************/
//бургер меню 
const toggle = document.querySelector('.toggle');
toggle.addEventListener('click', ()=>{
  toggle.classList.toggle('active')
  if(document.querySelector('.active')){
    let menuBurger = document.createElement('div');
    menuBurger.classList.add('menu__burger');
    document.querySelector('.main__items').before(menuBurger);
  }if(!document.querySelector('.active')){
    document.querySelector('.menu__burger').remove();
  }
})
//Header

// ul
funcСonstructorBlock(document.querySelector('.header'), 1, 'ul', 'header__ul',)

// li
funcСonstructorBlock(
  document.querySelector('.header__ul'),//a
  7,//b
  'li',//c
  'header__li-style',//d
  undefined, undefined, undefined, undefined, undefined, undefined,//e1-6 
  'img__ul-li',//e7
  undefined, undefined,//e8-9
  'О нас',//f1
  'Новости',//f2
  'Акции',//f3
  'Контакты',//f4
  'Заработай',//f5
  'Отзывы',//f6
)
document.querySelector('.img__ul-li').classList.remove('header__li-style');

//main
funcСonstructorBlock(document.querySelector('.main'), 1, 'div', 'main__items',)

funcСonstructorBlock(
  document.querySelector('.main__items'),//a
  5,//b
  'div',//c
  'main__item',//d
  'item__form',//e1
  'item__info-order',//e2
  'item__payment',//e3
  'item__social',//e4
  'item__side',//e5
);

/*****************Форма заказа******************************/

//Заголовок формы
funcСonstructorBlock(document.querySelector('.item__form'), 1, 'p', 'item__p-form',
  undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,//e1-9
  'Форма заказа',//f1
)

//Кнопки

funcСonstructorBlock(
  document.querySelector('.item__form'),//a
  4,//b
  'button',//c
  undefined,//d
  'previously',//e1
  'twenty',//e2
  'clear',//e3
  'submit',//e4
  undefined, undefined, undefined, undefined, undefined,//e5-9
  'Предварительно',//f1
  'Сейчас',//f2
  'Очистить',//f3
  'сумма',//f4
);

//Блоки формы
funcСonstructorBlock(
  document.querySelector('.item__form'), //a
  4, //b
  'div', //c
  'item__input-div', //d
  'input__div',//e1
  'radio__div', //e2
  'checkbox__div', //e3
  'data__processing',//e4
);

/******************Обработка данных*************************************/

// label for обработка данных
funcСonstructorBlock(document.querySelector('.data__processing'), 1, 'label',);

// checkbox for обработка данных
const dataProcessingxLaber = document.querySelector('.data__processing>label');
funcСonstructorBlock(
  dataProcessingxLaber,//a
  1,//b
  'input',//c
  'data__processing-style',//d
  undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,//e1-9
  undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,  //f1-9
  undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,//g1-9
  'checkbox',//h
  'processing-name',//j
)
document.querySelector('.data__processing-style').checked = true;
//SPAN  - fake & fake text
funcСonstructorBlock( dataProcessingxLaber, 1, 'span', 'fake__processing',)
funcСonstructorBlock( dataProcessingxLaber, 1, 'span', 'text__processing',)
document.querySelector('.text__processing').textContent = 'Даю согласие на обработку введеных мной данных';

/****************INPUT **********************/

funcСonstructorBlock(
  document.querySelector('.item__input-div'),//a
  8,//b
  'input',//c
  'item__input-style',//d
  'address__sity-one',//e1
  'address__sity-two',//e2
  'address__street-one',//e3
  'address__street-two',//e4
  undefined, undefined, undefined, undefined, undefined,//e5-9
  undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,//f1-9
  'От куда:',//g1
  'Куда:',//g2
  'Поселок',//g3
  'Поселок',//g4
  'улица или место', 'улица или место', 'номер телефона',  'Имя',//g5-9
  'text'  
);


/*************Инпут адрес 1 список********************/
const addressSityOne  = document.querySelector('.address__sity-one');//a
const olBlockOne = document.createElement('ol');
olBlockOne.classList.add('ol__one');
addressSityOne.after(olBlockOne)
funcListSityOne ()
//Фокус
funcFocus(addressSityOne,'От куда:',olBlockOne)

/*************Инпут адрес 2********************/
const addressSityTwo  = document.querySelector('.address__sity-two');//a
const olBlockTwo = document.createElement('ol');
olBlockTwo.classList.add('ol__two');
addressSityTwo.after(olBlockTwo)
funcListSityTwo (addressSityOne )
//Фокус
funcFocus(addressSityTwo,'Куда:',olBlockTwo)

/************************************************/

/**********************ТАРИФЫ radio *************************/

//Лейблы
funcСonstructorBlock(document.querySelector('.radio__div'), 8, 'label',)

//радио-кнопки
document.querySelectorAll('.radio__div>label').forEach(e => {
  funcСonstructorBlock(
    e,//a 
    1,//b 
    'input',//c 
    'item__radio-style',//d
    undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,//e1-9
    undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, //f1-9
    undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,//g1-8
    'radio',//h
    'tariffs-name',//j
  )
});
//SPAN for radio-button
document.querySelectorAll('.radio__div>label').forEach(e => {
  funcСonstructorBlock(e, 1, 'span', 'fake',)
});
//Class & Tetx for radio-button<span>
const rateRadioSpan = document.querySelectorAll('.fake');
rateRadioSpan[0].textContent = 'Эконом';
rateRadioSpan[0].classList.add('economy')
rateRadioSpan[1].textContent = 'Комфорт';
rateRadioSpan[1].classList.add('comfort')
rateRadioSpan[2].textContent = 'Комфорт +';
rateRadioSpan[2].classList.add('comfort-plus')
rateRadioSpan[3].textContent = 'Минивэн';
rateRadioSpan[3].classList.add('minivan')
rateRadioSpan[4].textContent = 'МиниБус';
rateRadioSpan[4].classList.add('minibus')
rateRadioSpan[5].textContent = 'Бизнес';
rateRadioSpan[5].classList.add('business')
rateRadioSpan[6].textContent = 'V.I.P.';
rateRadioSpan[6].classList.add('vip')
rateRadioSpan[7].textContent = 'Особый';
rateRadioSpan[7].classList.add('individually')

//ФУнкция: выбор тарифа
rateRadioFunc(document.getElementsByName('tariffs-name'));

/******************************Checkbox Menu*************************************/

//Лейблы
funcСonstructorBlock(document.querySelector('.checkbox__div'), 9, 'label')

//Checkbox Button
document.querySelectorAll('.checkbox__div>label').forEach(e => {
  funcСonstructorBlock(
    e,//a
    1,//b
    'input',//c
    'item__checkbox-style',//d
    undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,//e1-9
    undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,//f1-9
    undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,//g1-9
    'checkbox',//h
    'checkbox-name',//j
  )
});

//SPAN - fake for checkbox
document.querySelectorAll('.checkbox__div>label').forEach(e => {
  funcСonstructorBlock(e, 1, 'span', 'fake__checkbox',)
});
//Class for fake for checkbox
const rateCheckboxSpan = document.querySelectorAll('.fake__checkbox');
rateCheckboxSpan[0].classList.add('checkbox__receipt');
rateCheckboxSpan[1].classList.add('checkbox__whatsapp');
rateCheckboxSpan[2].classList.add('checkbox__viber');
rateCheckboxSpan[3].classList.add('checkbox__telegram');
rateCheckboxSpan[4].classList.add('checkbox__children');
rateCheckboxSpan[5].classList.add('checkbox__comment');
rateCheckboxSpan[6].classList.add('checkbox__baggage');
rateCheckboxSpan[7].classList.add('checkbox__animals');

//SPAN - text for checkbox
document.querySelectorAll('.checkbox__div>label').forEach(e => {
  funcСonstructorBlock(e, 1, 'span', 'text__checkbox',)
});
//Class for tetx for checkbox
const textCheckbox = document.querySelectorAll('.text__checkbox');
textCheckbox[0].textContent = 'WhatsApp';
textCheckbox[1].textContent = 'Квитанция';
textCheckbox[2].textContent = 'Багаж';
textCheckbox[3].textContent = 'Telegram';
textCheckbox[4].textContent = 'Дети до 7 лет';
textCheckbox[5].textContent = 'Комментарий';
textCheckbox[6].textContent = 'Viber';
textCheckbox[7].textContent = 'Животные';
textCheckbox[8].textContent = 'Табличка';

/**************Социальные сети****************************/

funcСonstructorBlock(
  document.querySelector('.item__social'),//a
  8,//b
  'div',//c
  'item__social-style',//d
  'whatsapp',//e1
  'viber',//e2
  'telegram',//e3
  'vk',//e4
  'tariffs',//e5
  'services',//e6
  'excursions',//e7
  'partners',//e8
  undefined,//e9
  'WhatsApp',//f1
  'Viber',//f2
  'Telegram',//f3
  'Vk',//f4
  'Тарифы',//f5
  'Помощь',//f6
  'Экскурсии',//f7
  'Партнеры',//f8
);

//SPAN for social

document.querySelectorAll('.item__social-style').forEach(e => {
  funcСonstructorBlock(e, 1, 'div', 'img__messenger',)
});
const imgMessenger = document.querySelectorAll('.img__messenger')
imgMessenger[0].classList.add('img__whatsapp');
imgMessenger[1].classList.add('img__viber');
imgMessenger[2].classList.add('img__telegram');
imgMessenger[3].classList.add('img__vk');
imgMessenger[4].classList.add('img__tariffs');
imgMessenger[5].classList.add('img__services');
imgMessenger[6].classList.add('img__excursions');
imgMessenger[7].classList.add('img__partners');







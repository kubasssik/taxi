import { locality } from './locality.js'

const funcListSityOne = function(){
//чтоб поменять список:
let registry = locality.sity;
/********************************/

let addressSityOne = document.querySelector('.address__sity-one');
let itemUl = document.querySelector('.ol__one');


let numLi= [];
//создаем список длинной locality
const fragment = document.createDocumentFragment();

for( let i = 0; i < registry.length; i++){
    numLi.push(registry[i].sity)  
}
for( let i = 0; i < numLi.length; i++){
    const newLi = document.createElement('li');
    newLi.classList.add('li__one')
    newLi.textContent =  numLi[i];

//Клик по списку 
    newLi.addEventListener('click', ()=>{ 
        addressSityOne.value = newLi.textContent; 
        itemUl.classList.add('hide')    
    }); 

    fragment.appendChild(newLi) 
}
itemUl.appendChild(fragment)

//Скрываем список
itemUl.classList.add('hide')
let itemLi = document.querySelectorAll('.li__one');
itemLi.forEach(e => {
    e.classList.add('hide')
});

//живой поиск
addressSityOne.addEventListener('input', ()=>{
    //value из input без пробелов
    let val = addressSityOne.value.trim()
   
    if (val == '') {
         //если value пусто, скрываем список 
        itemUl.classList.add('hide')

        itemLi.forEach(e => {
            e.classList.add('hide');
        });
    }
    if (val != '') {
         //если value пусто, открываем список
        itemUl.classList.remove('hide')

        itemLi.forEach(e => {
        //если список равен введенному значению
            if (e.textContent.search(RegExp(val, "gi")) == -1) {
                e.classList.add('hide');
                e.textContent = e.textContent;
            }
            else {
                e.classList.remove('hide');
                let str = e.textContent;
                e.innerHTML = insertMark(str, e.textContent.search(RegExp(val, "gi")), val.length)
            }
        })
    }
})
function insertMark(string, pos, len) {
    return `${string.slice(0, pos)}<mark>${string.slice(pos, pos + len)}</mark>${string.slice(pos + len)}`;
}
}


const funcListSityTwo = function(){
    //чтоб поменять список:
    let registry = locality.sity;
    /********************************/
    
    let addressSityTwo = document.querySelector('.address__sity-two');
    let itemUl = document.querySelector('.ol__two');
    
    
    let numLi= [];
    //создаем список длинной locality
    const fragment = document.createDocumentFragment();
    
    for( let i = 0; i < registry.length; i++){
        numLi.push(registry[i].sity)  
    }
    for( let i = 0; i < numLi.length; i++){
        const newLi = document.createElement('li');
        newLi.classList.add('li__two')
        newLi.textContent =  numLi[i];
    
    //Клик по списку 
        newLi.addEventListener('click', ()=>{ 
            addressSityTwo.value = newLi.textContent; 
            itemUl.classList.add('hide')    
        }); 
    
        fragment.appendChild(newLi) 
    }
    itemUl.appendChild(fragment)
    
    //Скрываем список
    itemUl.classList.add('hide')
    let itemLi = document.querySelectorAll('.li__two');
    itemLi.forEach(e => {
        e.classList.add('hide')
    });
    
    //живой поиск
    addressSityTwo.addEventListener('input', ()=>{
        //value из input без пробелов
        let val = addressSityTwo.value.trim()
       
        if (val == '') {
             //если value пусто, скрываем список 
            itemUl.classList.add('hide')
    
            itemLi.forEach(e => {
                e.classList.add('hide');
            });
        }
        if (val != '') {
             //если value пусто, открываем список
            itemUl.classList.remove('hide')
    
            itemLi.forEach(e => {
            //если список равен введенному значению
                if (e.textContent.search(RegExp(val, "gi")) == -1) {
                    e.classList.add('hide');
                    e.textContent = e.textContent;
                }
                else {
                    e.classList.remove('hide');
                    let str = e.textContent;
                    e.innerHTML = insertMark(str, e.textContent.search(RegExp(val, "gi")), val.length)
                }
            })
        }
    })
    function insertMark(string, pos, len) {
        return `${string.slice(0, pos)}<mark>${string.slice(pos, pos + len)}</mark>${string.slice(pos + len)}`;
    }
    }

export{ funcListSityOne,funcListSityTwo }
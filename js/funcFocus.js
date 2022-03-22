//фоку
const funcFocus = function(newInput,placeholder,olBlock){
    newInput.addEventListener('focus',()=>{
        newInput.placeholder = '';  
        olBlock.classList.remove('visibility');
    })
    newInput.addEventListener('blur',()=>{
        newInput.placeholder = placeholder;  
        olBlock.classList.add('visibility');
    })
}



export {funcFocus}
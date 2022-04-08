export function getElement(el){
    return document.getElementById(el);
};

// Change the class
export function changeClass(el,className,className2){
    if(el.className === className){
        el.classList.remove(className);
        el.classList.add(className2);
    }else if(el.className === className2){
        el.classList.remove(className2);
        el.classList.add(className);
    }else{
        console.log('error on change class');
    }
};
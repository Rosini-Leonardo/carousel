import { getElement } from '../custom/elementDOM';

let fade_on = 'cards-fade-on';
let fade_off = 'cards-fade-off';

export function active(el,el2,el3,el4,){
    if( getElement(el).className === fade_on ){
        // Turn off the first container
        getElement(el).classList.remove(fade_on);
        getElement(el).classList.add(fade_off);
        // Turn on the second container
        getElement(el2).classList.add(fade_on);
    }else if(getElement(el2).className === fade_on){
        // Turn off the second container
        getElement(el2).classList.remove(fade_on);
        getElement(el2).classList.add(fade_off);
        // Turn on the third container
        getElement(el3).classList.add(fade_on);
    }else if(getElement(el3).className === fade_on){
        // Turn off the third container
        getElement(el3).classList.remove(fade_on);
        getElement(el3).classList.add(fade_off);
        // Turn on the fourth container
        getElement(el4).classList.add(fade_on);
        // Remove first container
        getElement(el).classList.remove(fade_off);
    }else if(getElement(el4).className === fade_on){
        // Load the first el
        getElement(el).classList.add(fade_on);
        // Turn off the fourth container
        getElement(el4).classList.remove(fade_on);
        getElement(el4).classList.add(fade_off);
        // Turn on the fourh container 
        getElement(el2).classList.remove(fade_off);
        getElement(el3).classList.remove(fade_off);
        getElement(el4).classList.remove(fade_off);

    }else{
        console.warn('error on active');
    }
};
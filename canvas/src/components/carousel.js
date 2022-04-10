import { getElement } from "./custom/elementDOM";
import { SingleCard } from "./singleCard";
import { 
    active,
} from './utils/active';

// Container IDs
const first_container  = 'container-1';
const second_container = 'container-2';
const third_container = 'container-3';
const fourth_container = 'container-4';

// Inner the cards in the DOM
getElement('carousel').innerHTML = SingleCard();

// Click function that switch card
getElement('card__prev').addEventListener('click',()=>{
    active(
        first_container,
        second_container,
        third_container,
        fourth_container,
    );
});

getElement('card__next').addEventListener('click',()=>{
    active(
        first_container,
        second_container,
        third_container,
        fourth_container,
    );
});
import {getElement} from "./custom/elementDOM";
import {changeClass} from './custom/elementDOM';

let canvas = getElement('canvas');
let canvas_disabled = 'canvas-disabled';

getElement('canvas__btn-open').addEventListener('click',()=>{
    // Remove the class, that hide the canvas
    if(canvas.className === canvas_disabled){
        getElement('canvas').classList.remove(canvas_disabled);
        getElement('canvas').classList.add('canvas-off');
    }
    // Turn on the canvas
    changeClass(canvas,'canvas-off','canvas-on');
});

// Close the canvas 
getElement('canvas__btn-close').addEventListener('click',()=>{
    changeClass(canvas,'canvas-on','canvas-off');
});
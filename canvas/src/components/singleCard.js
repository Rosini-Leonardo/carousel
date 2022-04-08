// Static files
import image1 from  '../../static/image/nikita.jpg';
import image2 from '../../static/image/sara.jpg';
import image3 from '../../static/image/mae.jpg';
import image4 from  '../../static/image/emily.jpg';

// General Classes
const cards = 'carousel-card';
const container = 'cards-fade-on';
// Cards IDs
const first_card  = 'card-1';
const second_card = 'card-2';
const third_card  = 'card-3';
const fourth_card = 'card-4';
// Container IDs
const first_container  = 'container-1';
const second_container = 'container-2';
const third_container = 'container-3';
const fourth_container = 'container-4';
// Button value
const left_icon ='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"/></svg>';
const right_icon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z"/></svg>';

export function SingleCard(){
    return`
    <button 
    id='card__prev'
    class="button"
    >${left_icon}
    </button>
    
    <button 
    id="card__next"
    class="button"
    >${right_icon}
    </button>

    <!-- first card -->
    <div 
    id=${first_container}
    class=${container}
    >
        <img
        id=${first_card}
        class=${cards}
        src=${image1}
        alt='img'
        ></img>
    </div>
    
    <!-- second card -->
    <div 
    id=${second_container}
    >   
        <img
        id=${second_card}
        class=${cards}
        src=${image2}
        alt='img'
        ></img>
    </div>
    
    <!-- third card -->
    <div 
    id=${third_container}
    >
        <img
        id=${third_card}
        class=${cards}
        src=${image3}
        alt='img'
        ></img>
    </div>
    
    <!-- fourth card-->
    <div 
    id=${fourth_container}
    >
        <img
        id=${fourth_card}
        class=${cards}
        src=${image4}
        alt='img'
        ></img>
    </div>
    `;
};

export{
    cards,
    first_card,
    second_card,
    third_card,
    fourth_card
};
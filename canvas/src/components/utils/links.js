import {getElement} from '../custom/elementDOM';

const links = [
    {
        id:'link-1',
        name:'Home',
        path:'/',
    },
    {
        id:'link-2',
        name:'About',
        path:'/',
    },
    {
        id:'link-3',
        name:'Contact',
        path:'/',
    }
];

function linkComponent(el) {
    return `<a
    id=${el.id}
    href=${el.path}
    class="link-light"
    >${el.name}
    </a>
    `;
}

getElement('link-container').innerHTML = links.map((el)=>
linkComponent(el)
).join('');
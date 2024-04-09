// import axios from 'axios';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';
import { BASE_URL, options } from './discovery-api.js';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { throttle } from "lodash";

console.log(BASE_URL)

///////////////////////////////////////////////////////////////


const eventGallery = document.querySelector('.row');
const selectCountry = document.querySelector('.selectCountry');
const searchCountry = document.querySelector('searchCountry');

///////////////////////////////////////////////////////////////



async function fetchData() {
    try {
        const res = await axios.get(BASE_URL, options);
        console.log(res.data)
        const { events } = res.data._embedded;
        console.log(events);
        renderEvent(events)
  
    }
    
    catch (err) {
        console.log(err)
        Notify.failure(`Sorry! No event found!`);
    }
}

///////////////////////////////////////////////////////////////



function renderEvent(events) {
    const markup = evets.map(({ name, images, dates, _embedded: { venues } }) => {
        return `
        <div class="col-3">
            <div style="border: 1px solid red" class="backBorder"></div>
            image src="${image(0).url}" class="w=100 eventImage mt-2 mr-2"/>
            <p>${name}</p>
            <p>${dates.start.localData}</p>
            <p>${venues[0].country.countryCode}</p>
            </div>
            `;
        
    }).join("")

    eventGallery.insertAdjacentHTML("beforeend", markup)
}
async function countryEvent(e) {
    eventGallery.innerHTML = "";
    let selectedCountry = e.target.value;
    console.log(e.target.value);
    options.params.countryCode = selectedCountry
    console.log(selectedCountry)
    try {
        const res = await axios.ret(BASE_URL, options);
        const { events } = res.data._embedded;
        console.log(events)
        renderEvent(events)
    } catch (err) {
        console.log(err)
        Notify.failure(`Sorry! No event found!');
        
    }

    }

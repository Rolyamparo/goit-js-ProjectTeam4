export const
  // BASE_URL = "https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey=71YE9oAJEA4qZlqXbW37iGIiChRCAVD4&classificationName=music";
  BASE_URL = "https://app.ticketmaster.com/discovery/v2/events.json?";
const API_KEY = '71YE9oAJEA4qZlqXbW37iGIiChRCAVD4';

export const options = {
  params: {
    apikey: API_KEY,
    classificationName: 'music',
    countryCode: "",
    keyword:'',
    safesearch: true,
    page: 0,
    per_page: 40,
  },
};
console.log('main.js loaded');

const BASE_URL = "http://api.reactprototypes.com";
const API_KEY = '?key=testuser1234';

axios.get(BASE_URL + '/todos' + API_KEY).then((resp) => { //.catch; in case something went wrong
    console.log('Resp', resp);
}).catch((err) => {
    console.log('ERROR:', err);
});

const newItem = {
    title: 'New Items Have Arrived',
    details: 'Here are the details for my todo item'
};

axios.post(BASE_URL + '/todos' + API_KEY, newItem).then(resp => {
    console.log("ADD Resp:", resp);
}).catch(err => {
    console.log('ERROR:', err);
});
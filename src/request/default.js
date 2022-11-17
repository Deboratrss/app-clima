import { Axios } from 'axios';

export const weather = new Axios({
    baseURL: 'https://api.openweathermap.org/data/3.0/onecall'
});

export const geocode = new Axios({
    baseURL: 'http://api.openweathermap.org/geo/1.0/direct'
});

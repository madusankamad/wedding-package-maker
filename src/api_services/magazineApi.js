import axios from 'axios';

export const getMagazineInfo = ()=>{
    return axios.get('/api/magazine/sizes').then(response =>{console.log('magazine',response.data)});
};

export const getEnlargementInfo = ()=>{
    return axios.get('/api/enlargements').then(response =>{console.log('enlargements',response.data)});
};
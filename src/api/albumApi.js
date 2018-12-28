import axios from 'axios';

export const getMagazineInfo = ()=>{
    return axios.get('/api/album').then(response =>{console.log('magazine',response.data)});
};


export const getPricingInformation = (sizeId='all')=>{
    let id = 'all';
    typeof sizeId === "string"? id=sizeId : id='all';
    console.log( typeof sizeId, id);
    return axios.get('/api/album/'+id+'/priceInfo').then(response =>{console.log('magazine',response.data)});
};

export const getEnlargementInfo = ()=>{
    return axios.get('/api/enlargements').then(response =>{console.log('enlargements',response.data)});
};


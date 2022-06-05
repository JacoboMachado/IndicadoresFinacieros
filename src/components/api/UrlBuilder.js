import { API_KEY } from '../../const/const';

const now = new Date();
const final_day = now.getDate();
const final_month = now.getMonth();
const final_year = now.getFullYear();
const initial = new Date(now - 20 * 24 * 60 * 60 * 1000);
const initial_day = initial.getDate();
const initial_month = initial.getMonth();
const initial_year = initial.getFullYear();

const BASE_URL = 'https://api.sbif.cl/api-sbifv3/recursos_api';


const endpoints = {
    Dolares: `${ BASE_URL }/dolar/periodo/${initial_year}/${initial_month}/dias_i/${initial_day}/${final_year}/${final_month}/dias_f/${final_day}?apikey=${ API_KEY }&formato=json`,
    Euros: `${ BASE_URL }/euro/posteriores/${initial_year}/${initial_month}/dias/${initial_day}/?apikey=${ API_KEY }&formato=json`,
    ipc: `${ BASE_URL }/ipc/anteriores/${initial_year}/${initial_month}/${final_year}/${final_month}?apikey=${ API_KEY }&formato=json`,
    tmc: `${ BASE_URL }/tmc/periodo/${initial_year}/${initial_month}/${final_year}/${final_month}?apikey=${ API_KEY }&formato=json`,
    utm: `${ BASE_URL }/utm/anteriores/${initial_year}/${initial_month}/${final_year}/${final_month}?apikey=${ API_KEY }&formato=json`,
    UFs: `${ BASE_URL }/uf/posteriores/${initial_year}/${initial_month}/dias/${initial_day}?apikey=${ API_KEY }&formato=json`,

}

const getUrl = (iden) => endpoints[iden];


export default getUrl;

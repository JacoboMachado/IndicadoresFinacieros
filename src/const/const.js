/**
 * API KEY de endpoint
 */

const API_KEY = '';
/**
 * List de Indicadores disponibles
 */
const INDICATORS_LIST = [
    {
        id: 1,
        title: 'Dólar',
        icon: 'currency-usd',
        iden: 'Dolares',
        unit: 'Pesos',
    },
    {
        id: 2,
        title: 'Euro',
        icon: 'currency-eur',
        iden: 'Euros',
        unit: 'Pesos',
    },

    // IPC y UTM devuelve code 200 pero error en la consulta :/
    // TMC devuelve un json con una estructura diferente por lo que se tendria que desarrollar otro controler para el


    // {
    //     id: 3,
    //     title: 'Indice de Precios al Consumidor',
    //     icon: 'cash-lock-open',
    //     iden: 'ipc',
    //     unit: 'Pesos',
    // },
    // {
    //     id: 4,
    //     title: 'Tasa de Interés Máxima',
    //     icon: 'percent',
    //     iden: 'tmc',
    //     unit: 'Pesos',
    // },
    // {
    //     id: 5,
    //     title: 'Unidad Tributaria Mensual',
    //     icon: 'cash-fast',
    //     iden: 'utm',
    //     unit: 'Pesos',
    // },
    {
        id: 6,
        title: 'Unidad de Fomento',
        icon: 'cash-100',
        iden: 'UFs',
        unit: 'Pesos',

    },
];

exports.INDICATORS_LIST = INDICATORS_LIST
exports.API_KEY = API_KEY
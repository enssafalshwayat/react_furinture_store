import data from './Data.json';

export function getAll(){
    return Promise.resolve(data)
}

export default {
    getAll,
}
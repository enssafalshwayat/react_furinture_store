import data from './Api.json'

export function getAllArrivals(){
    return Promise.resolve(data)
}


export default {
    getAllArrivals
}
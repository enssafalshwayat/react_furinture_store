import data from './Api.json'

export function getAllFeatureProduct(){
    return Promise.resolve(data)
}


export default {
    getAllFeatureProduct,
}
import data from './Api.json'

export function getAllBlog(){
    return Promise.resolve(data)
}

export default {
    getAllBlog,
}
import axios from "axios";
export const perPage = 15;


axios.defaults.baseURL = 'https://api.unsplash.com';
const END_POINT = '/search/photos';
const KEY = 'ZcNkC7J8pCNL8K0huBRk-FlBKPqopwDUvwg64iegJuE';

async function getPictureWithValue(value, page){
    const result = await axios.get(`${END_POINT}`, {params: {
    client_id: KEY,
    query: value,
    orientation: 'landscape',
    asset_type: "photo",
    per_page: perPage,
    page
    }})
    return result
}

export default getPictureWithValue;
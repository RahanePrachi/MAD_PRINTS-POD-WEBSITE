import axios from 'axios'
const base_url = process.env.REACT_APP_API_BASE_URL = "http://localhost:5000/api/v1";

export const getProductById = async (id) => {
    console.log("base url", base_url);
    try {
        const res = await axios.get(`${base_url}/product/products/${id}`)
        return res.data
    } catch (e) {
        console.log("error:", e);

    }
}
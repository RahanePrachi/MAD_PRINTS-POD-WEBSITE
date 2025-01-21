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

export const getAllCategories = async () => {
    console.log("base url", base_url);
    try {
        const response = await axios.get(`${base_url}/category/showAllCategories`);
        console.log("Printing response of showAllCategories: ", response);
        return response.data.data; 
    } catch (error) {
        console.error("Error fetching categories:", error.message);
        throw error; 
    }
};

export const getCategoryAndSubcategoryById = async ({category_id="6777b3822a18951bf8e93799",subcategory_id}) => {
    console.log("base url", base_url);
    try {
        const category = await axios.get(`${base_url}/category/categorydetails/${category_id}`)
        // const subcategory = await axios.get(`${base_url}/category/categorydetails/${category_id}`)
        return category.data
    } catch (e) {
        console.log("category error:", e);

    }
}

export const getProducts = async (id, isSubcategory = false) => {
    console.log("Base URL:", base_url);
  
    const endpoint = isSubcategory 
      ? `${base_url}/product/getproducts?subcategoryId=${id}` 
      : `${base_url}/product/getproducts?categoryId=${id}`;
  
    try {
      const response = await axios.get(endpoint);
      console.log("Response from getProducts:", response);
      return response.data.data; 
    } catch (error) {
      console.error("Error fetching products:", error.message);
      throw error; 
    }
  };
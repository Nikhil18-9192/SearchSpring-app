import { productActions } from "./product-slice";

export const fetchProducts = () => {
    return async (dispatch) => {
        try{
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();
            dispatch(productActions.setProducts(data));
            dispatch(productActions.setCategories([...new Set(data.map((product) => product.category))]))
        }catch(error){
            console.error(error);
        }
        
    };
}
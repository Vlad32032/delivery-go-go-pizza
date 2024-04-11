import { hideLoader, showLoader } from "./loader.js";

export const getData = async (url) => {
    showLoader();

    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error('Failed yo fetch pizza products');
        };

        const data = await response.json();
        console.log(data);
        return data;

    } catch (error) {
        console.error(`Error fetching pizzas products: ${error}`);
        return [];
    } finally {
        hideLoader();
    };
};
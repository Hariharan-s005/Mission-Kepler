import  {urlConstants} from'../constants/urlConstants';

export const fetchCategories = async() => {
  try {
    const response = await fetch(`${urlConstants.BASE_URL}`);
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchProducts = async(categories) => {
  try {
    const response = await fetch(`${urlConstants.PRODUCTS_URL}${categories}`);
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

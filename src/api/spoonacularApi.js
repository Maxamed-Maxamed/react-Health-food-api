const API_KEY = process.env.REACT_APP_SPOONACULAR_API_KEY;
const BASE_URL = process.env.REACT_APP_SPOONACULAR_API_URL;

export const searchRecipes = async (query, filters) => {
  const response = await fetch(`${BASE_URL}/recipes/complexSearch?apiKey=${API_KEY}&query=${query}&${filters}`);
  const data = await response.json();
  return data.results;
};

export const getRecipeById = async (id) => {
  const response = await fetch(`${BASE_URL}/recipes/${id}/information?apiKey=${API_KEY}`);
  const data = await response.json();
  return data;
}

export const getRecipes = async (query,) => {
  const response = await fetch(`${BASE_URL}/recipes/complexSearch?apiKey=${API_KEY}&query=${query}`);
  const data = await response.json();
  return data.results;
};


export const getRecipeDetails = async (id) => {
  const response = await fetch(`${BASE_URL}/recipes/${id}/information?apiKey=${API_KEY}`);
  const data = await response.json();
  return data;
};


// pagination


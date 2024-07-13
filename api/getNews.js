import api from "./client";

const API_KEY = "8694270663f849698c2d5766c116343d"; // Replace with your actual API key

const getNews = () => {
  return api.get(`/top-headlines?country=in&apiKey=${API_KEY}`);
};

const searchedNews = (str) => {
  return api.get(`everything?q=${str}&apiKey=${API_KEY}`);
};

export default {
  getNews,
  searchedNews,
};
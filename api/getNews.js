import api from "./client";
const getNews = () => {
  return api.get(
    "/top-headlines?country=in&apiKey=${Y8694270663f849698c2d5766c116343d}"
  );
};
const searchedNews = (str) => {
  return api.get(`everything?q=${str}&apiKey=${Your_apikey}`);
};
export default {
  getNews,
  searchedNews,
};

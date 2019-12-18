import axios from "axios";

const xhrHeader = {
  headers: {
    xhrFields: {
      withCredentials: true
    }
  }
};

export default {
  // Gets all articles
  getArticles: function () {
    return axios.get("/api/article");
  },
  // Gets the book with the given id
  getArticle: function (id) {
    return axios.get("/api/article/" + id);
  },
  // Deletes the book with the given id
  deleteArticle: function (id) {
    return axios.delete("/api/article/" + id);
  },
  // Saves a book to the database
  saveArticle: function (bookData) {
    return axios.post("/api/article", bookData);
  },
  loginUser: function (user) {
    return axios.post("/api/user/", user, xhrHeader)
  },
  signup: function (user) {
    return axios.post("/api/user/signup", user, xhrHeader)
  },
  authenticateUser: function () {
    return axios.post("/api/user/authenticate/", xhrHeader)
  },

  news: {
    get: function(query) {
      return axios.get("/api/news/" + query)
    }
  }

};

import axios from "axios";
require("dotenv").config()

const API_KEY = process.env.REACT_APP_API_KEY

export default {
    searchBook: function(inputBook) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + inputBook + 
                "&key=" + API_KEY);
    },
    getBooks: function() {
        return axios.get("/api/books")
    },

    deleteBook: function(id) {
        return axios.delete("/api/books/" + id)
    },

    saveBook: function(bookData) {
        return axios.post("/api/books", bookData)
    }
};
import axios from "axios";


export default {
    login: function(username, password) {
        return axios.post("/api/users/login", {username: username, password: password})
    },

    deleteProfile: function(id) {
        return axios.delete("/api/users/" + id)
    },

    createUser: function(userData) {
        return axios.post("/api/users/create", userData)
    },

    getUserData: function(id) {
        return axios.get("/api/users/" + id)
    },

    addPlant: function(id, plantData) {
        return axios.post("/api/users/" + id, plantData)
    },

    updatePlant: function(id, plantData) {
        return axios.post("/api/plants/" + id, plantData)
    },

    deletePlant: function(id) {
        return axios.delete("/api/plants/" + id)
    }
};
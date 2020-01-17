import axios from "axios";


export default {
    login: function(username, password) {
        return axios.post("/api/users/login", {username: username})
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

    addPlant: function(plantData) {
        return axios.post("/api/plants/create", plantData)
    }
};
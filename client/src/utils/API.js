import axios from "axios";


export default {
    getUser: function(id) {
        return axios.get("/api/users/" + id)
    },

    deleteProfile: function(id) {
        return axios.delete("/api/users/" + id)
    },

    createUser: function(userData) {
        return axios.post("/api/users", userData)
    }
};
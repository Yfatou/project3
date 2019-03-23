import axios from "axios";

export default {
  // Gets all services
  getServices: function() {
    return axios.get("/api/services");
  },
  // Gets the service with the given id
  getTheServices: function(id) {
    return axios.get("/api/services/" + id);
  },
  // Gets the user with the given id
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
  // Deletes the service with the given id
  deleteService: function(id) {
    return axios.delete("/api/services/" + id);
  },
  // Saves a service to the database
  saveService: function(serviceData) {
    return axios.post("/api/services", serviceData);
  },
  // Save a user to the database
  saveUser: function(serviceData) {
    return axios.post("/api/users", serviceData);
  }
};

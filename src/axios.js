import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-22537.cloudfunctions.net/api",
  //baseURL: "http://localhost:5005/clone-22537/us-central1/api",

  // API URL ( Cloud function ) URL,
});

export default instance;

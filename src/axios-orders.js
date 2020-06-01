import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-982dd.firebaseio.com/",
});

export default instance;

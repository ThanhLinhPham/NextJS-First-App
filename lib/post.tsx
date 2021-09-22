import axios from "axios";

export const getPosts = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts?_limit=5"
    );
    const { data } = response;
    return data;
  } catch (error) {
    console.log(error);
  }
};

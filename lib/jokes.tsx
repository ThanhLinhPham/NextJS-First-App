import axios from "axios";

export const getRandomJoke = async () => {
  try {
    const response = await axios.get("https://api.chucknorris.io/jokes/random");
    if (response) {
      const { data } = response;
      return data;
    }
  } catch (error) {
    console.log("error", error);
  }
};

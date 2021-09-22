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

export const getPostIds = async () => {
  const posts = await getPosts();
  return posts.map((post: any) => ({ params: { id: `${post.id}` } }));
};

export const getPostById = async (id: any) => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const { data } = response;
    return data;
  } catch (error) {
    console.log(error);
  }
};

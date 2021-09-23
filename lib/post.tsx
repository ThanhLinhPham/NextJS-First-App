import axios from "axios";

export const getPosts = async (limit: number) => {
  try {
    const response = await axios.get(
      // `http://localhost:3000/api/posts`
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
    );
    const { data } = response;
    // const { items } = data;
    // console.log(items);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getPostIds = async (limit: number) => {
  const posts = await getPosts(limit);
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

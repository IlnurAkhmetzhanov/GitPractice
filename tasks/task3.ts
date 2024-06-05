import axios from "axios";

interface ResponseData {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

const COMMENTS_URL = "https://jsonplaceholder.typicode.com/comments";

const getData = (url: string) => {
  return axios.get<ResponseData[]>(COMMENTS_URL);
};

getData(COMMENTS_URL).then((response) => {
  const data = response.data as ResponseData[];
  data.forEach((e) => {
    console.log(`ID: ${e.id}, Email: ${e.email}`);
  });
});

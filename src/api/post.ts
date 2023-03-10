import { AxiosType } from "../type/axios";
import { PostType } from "../type/post";
import RequestApi from "../utils/requestApi";
class Post {
  create(data: PostType) {
    console.log(data);
    try {
      return RequestApi({
        method: "POST",
        url: "http://localhost:8080/post/create",
        data: data,
      });
    } catch (err) {
      return err;
    }
  }

  getAll(): any {
    try {
      return RequestApi({
        method: "GET",
        url: "http://localhost:8080/post/all",
      });
    } catch (err) {
      return err;
    }
  }

  getById(id: string | string[] | undefined): any {
    try {
      return RequestApi({
        method: "GET",
        url: `http://localhost:8080/post/one/${id}`,
      });
    } catch (err) {
      return err;
    }
  }

  modify(data: PostType) {
    try {
      return RequestApi({
        method: "PUT",
        url: `http://localhost:8080/post/modify/`,
        data: data,
      });
    } catch (err) {
      return err;
    }
  }
}

export default new Post();

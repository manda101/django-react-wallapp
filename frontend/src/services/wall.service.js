import http from "../http-common";

class WallDataService {
  getAll() {
    return http.get("/posts");
  }
  create(data) {
    return http.post("/add", data);
  }
}
export default new WallDataService();
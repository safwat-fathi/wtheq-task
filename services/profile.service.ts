import { User } from "@/types/models";
import HttpService from "./http.service";
import routes from "@/routes";

class ProfileService extends HttpService {
  constructor() {
    super(routes.profile);
  }

  public async update(data: User) {
    try {
      const resData = await this.post<TBaseResponse>("/update", data);

      return resData;
    } catch (err) {
      throw err;
    }
  }
}

export default new ProfileService();

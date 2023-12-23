import routes from "@/routes";
import HttpClient from "@/services/http.service";
import { CreditCard } from "@/types/models";

class PaymentService extends HttpClient {
  constructor() {
    super(routes.payment);
  }

  public async add(data: CreditCard) {
    try {
      const resData = await this.post<TBaseResponse>("/add", data);

      return resData;
    } catch (err) {
      throw err;
    }
  }
}

export default new PaymentService();

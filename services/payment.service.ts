import HttpClient from "@/services/http.service";

class PaymentService extends HttpClient {
  constructor() {
    super("/payment");
  }

  public async test() {
    try {
      const res = await this.get("/visa");

      return res;
    } catch (err) {
      throw err;
    }
  }
}

export default new PaymentService();

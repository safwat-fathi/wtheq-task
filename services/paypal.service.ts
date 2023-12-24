import { configure, payment, PaymentResponse } from "paypal-rest-sdk";

class PayPalService {
  private _client_id: string = process.env.PAYPAL_CLIENT_ID || "";
  private _client_secret: string = process.env.PAYPAL_CLIENT_SECRET || "";
  private _mode: "sandbox" | "live" = process.env.PAYPAL_MODE || "sandbox";

  constructor() {
    configure({
      mode: this._mode,
      client_id: this._client_id,
      client_secret: this._client_secret,
    });
  }

  public async createPay(payment_json: any): Promise<PaymentResponse> {
    return new Promise((resolve, reject) => {
      payment.create(payment_json, (err, payment) =>
        err ? reject(err) : resolve(payment)
      );
    });
  }

  public async executePay(
    payment_json: any,
    payment_id: string
  ): Promise<PaymentResponse> {
    return new Promise((resolve, reject) => {
      payment.execute(payment_id, payment_json, (err, payment) =>
        err ? reject(err) : resolve(payment)
      );
    });
  }
}

export default new PayPalService();

import paypal from "paypal-rest-sdk";

export const _createPay = (payment_json: any) =>
  new Promise((resolve, reject) => {
    paypal.payment.create(payment_json, (err, payment) =>
      err ? reject(err) : resolve(payment)
    );
  });

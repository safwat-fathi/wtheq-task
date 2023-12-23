import { getTokenAction, onLogoutAction } from "@/actions/auth";
import { HttpError } from "@/lib/classes/http-error";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_DEV_API || "";

class HttpService {
  private _url: string;
  private _token: string | null = null;

  constructor(url: string) {
    this._url = url;
  }

  private async _appFetch(route: string, options: RequestInit = {}) {
    try {
      this._token = await getTokenAction();
      console.log("🚀 ~ _appFetch ~ this._token:", this._token);

      const fullURL = BASE_URL + this._url + route;

      if (this._token) {
        options.headers = {
          ...options.headers,
          Accept: "application/json",
          // "Content-Type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${this._token}`,
        };
      }

      const response = await fetch(fullURL, options);

      // if (!response.ok) {
      //   throw new HttpError(response.status, response.statusText);
      // }

      if (response.status === 401) {
        await onLogoutAction();
      }

      return response;
    } catch (err) {
      throw new HttpError(500, "Something went wrong");
    }
  }

  protected async get<T>(route: string, options?: RequestInit): Promise<T> {
    const response = await this._appFetch(route, { ...options, method: "GET" });

    const data = await response.json();

    return data;
  }

  protected async post<T>(
    route: string,
    body: any,
    options?: RequestInit
  ): Promise<T> {
    const response = await this._appFetch(route, {
      ...options,
      body: JSON.stringify(body),
      method: "POST",
    });

    const data = await response.json();

    return data;
  }

  protected async put<T>(
    body: any,
    route: string,
    options?: RequestInit
  ): Promise<T> {
    const response = await this._appFetch(route, {
      ...options,
      body,
      method: "PUT",
    });

    const data = await response.json();

    return data;
  }

  protected async delete(route: string, options?: RequestInit) {
    const response = await this._appFetch(route, {
      ...options,
      method: "DELETE",
    });

    const data = await response.json();

    return data;
  }
}

export default HttpService;

// example:
// const httpService = new HttpService("/v1")
// const data = await httpService.get("/products")
// const data = await httpService.post({ price: 'XX', name: "XXXXXXXXXXXXXX" }, "/products")

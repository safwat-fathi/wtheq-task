import { getSessionAction } from "@/actions";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL_API || "";

class HttpService {
  private _url: string;
  private _session: Session | null = null;

  constructor(url: string) {
    this._url = url;
  }

  private async _appFetch(route: string, options: RequestInit = {}) {
    try {
      this._session = await getSessionAction();

      const fullURL = BASE_URL + this._url + route;

      if (this._session) {
        options.headers = {
          ...options.headers,
          Authorization: `Bearer ${this._session.access_token}`,
        };
      }

      const response = await fetch(fullURL, options);

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      if (response.status === 401) {
        authApi.logout();
      }

      return response;
    } catch (err) {
      throw err;
    }
  }

  protected async get<T>(
    route: string,
    params?: IParams,
    options?: RequestInit
  ): Promise<T> {
    const response = await this._appFetch(
      route,
      { ...options, method: "GET" },
      params
    );

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
      body,
      method: "POST",
    });

    const data = await response.json();

    return data;
  }

  protected async put<T>(
    body: any,
    route: string,
    params?: IParams,
    options?: RequestInit
  ): Promise<T> {
    const response = await this._appFetch(
      route,
      {
        ...options,
        body,
        method: "PUT",
      },
      params
    );

    const data = await response.json();

    return data;
  }

  protected async delete(
    route: string,
    params?: IParams,
    options?: RequestInit
  ) {
    const response = await this._appFetch(
      route,
      {
        ...options,
        method: "DELETE",
      },
      params
    );

    const data = await response.json();

    return data;
  }
}

export default HttpService;

// example:
// const httpService = new HttpService("/api/v1")
// const data = await httpService.get("/users")
// const data = await httpService.post({ email: "XXXXXXXXXXXXXX" }, "/users")

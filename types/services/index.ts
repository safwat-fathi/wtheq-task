type TMethod = "GET" | "POST" | "PUT" | "DELETE";

type TBaseResponse = {
  success: boolean;
  message: string;
};

type TResponse<T> = TBaseResponse & {
  data: T;
};

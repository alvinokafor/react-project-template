import { apiInstance } from "@/config";

type Method = "POST" | "PUT" | "PATCH" | "DELETE";
type ContentType = "JSON" | "FormData";

class ApiService {
  public url: string;

  constructor(url: string) {
    this.url = url;
  }

  //getter method to fetch the auth token dynamically
  private get token(): string | null {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      return token;
    }
    return null;
  }

  //fetches all data
  async getAll<T>(params: string): Promise<T> {
    const res = await apiInstance.get(`${this.url}${params}`, {
      headers: { Authorization: `Bearer ${this.token}` },
    });
    return res.data as T;
  }

  //fetches a single data entry
  async getByID<R>(id: string): Promise<R> {
    const res = await apiInstance.get(this.url + "/" + id, {
      headers: { Authorization: `Bearer ${this.token}` },
    });

    return res.data as R;
  }

  // handles mutation requests => POST, PATCH, PUT, DELETE
  /* "slug" can be an id or an extra path to be added to the base url, 
  pass in an empty string if you have no need for a slug(POST methods only) */
  async mutate<B>(slug: string, payload: B, type: ContentType, method: Method) {
    const contentType =
      type === "FormData" ? "multipart/form-data" : "application/json";
    const url = `${this.url}${slug ? "/" + slug : ""}`;
    const headers = {
      Authorization: this.token ? `Bearer ${this.token}` : "",
      "Content-Type": contentType,
    };

    const config = {
      method,
      url,
      [method === "DELETE" ? "data" : "data"]: payload,
      headers,
    };

    return await apiInstance(config);
  }
}

export default ApiService;

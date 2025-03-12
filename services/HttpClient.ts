import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export const baseURL = process.env.API_URL ?? 'http://localhost:5000';

export class HttpClient {
  private axiosInstance?: AxiosInstance;

  constructor() {
    this.setupAxios();
    this.setupInterceptors();
  }

  private static instance: HttpClient;

  public static getInstance(): HttpClient {
    if (!HttpClient.instance) {
      HttpClient.instance = new HttpClient();
    }
    return HttpClient.instance;
  }

  private setupAxios() {
    this.axiosInstance = axios.create({
      baseURL,
      timeout: 60000,
    });
  }

  private setupInterceptors(): void {
    this.setupResponseInterceptor();
  }

  private setupResponseInterceptor(): void {
    this.axiosInstance?.interceptors.response.use(
      (response: AxiosResponse) => {
        return response;
      },
      (error) => {
        this.handleErrorResponse(error);
        return Promise.reject(error);
      },
    );
  }

  private handleErrorResponse(error: any): void {
    const message = Array.isArray(error.response.data.message)
      ? error.response.data.message.join(', ')
      : error.response.data.message;

    alert(message);
  }

  public get(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    return this.axiosInstance!.get(url, config);
  }

  public post(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    return this.axiosInstance!.post(url, data, config);
  }

  public patch(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    return this.axiosInstance!.patch(url, data, config);
  }

  public form(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    return this.axiosInstance!.postForm(url, data, config);
  }

  public put(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    return this.axiosInstance!.put(url, data, config);
  }

  public delete(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    return this.axiosInstance!.delete(url, config);
  }
}

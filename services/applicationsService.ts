import type { Application } from "@/types/models";
import type { HttpClient as HttpClientType } from "./HttpClient";
import { HttpClient } from "./HttpClient";

class ApplicationService {
    private httpClient: HttpClientType;
    private static instance: ApplicationService;

    private constructor() {
        this.httpClient = HttpClient.getInstance();
    }

    public static getInstance(): ApplicationService {
      if (!ApplicationService.instance) {
        ApplicationService.instance = new ApplicationService();
      }
      return ApplicationService.instance;
    }

    public getApplication = async (limit: number = 10): Promise<Application[] | undefined> => {
        try {
            const response = await this.httpClient.get(`/applications?limit=${limit}`);
            if (response?.status === 200) {
                return response.data;
            } else {
                throw new Error(response?.data.message ?? 'an error occurred');
            }
        } catch (e) {
            throw e;
        }
    };

    public getSingleApplication = async (id: number): Promise<Application | undefined> => {
        try {
            const response = await this.httpClient.get(`/applications/${id}`);
            if (response?.status === 200) {
                return response.data;
            } else {
                throw new Error(response?.data.message ?? 'an error occurred');
            }
        } catch (e) {
            throw e;
        }
    };
}

const applicationService = ApplicationService.getInstance();

export default applicationService;
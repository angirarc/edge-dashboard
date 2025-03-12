import type { Job } from "@/types/models";
import type { HttpClient as HttpClientType } from "./HttpClient";
import { HttpClient } from "./HttpClient";

class JobsService {
    private httpClient: HttpClientType;
    private static instance: JobsService;

    private constructor() {
        this.httpClient = HttpClient.getInstance();
    }

    public static getInstance(): JobsService {
      if (!JobsService.instance) {
        JobsService.instance = new JobsService();
      }
      return JobsService.instance;
    }

    public getJobs = async (): Promise<Job[] | undefined> => {
        try {
            const response = await this.httpClient.get('/jobs');
            if (response?.status === 200) {
                return response.data;
            } else {
                throw new Error(response?.data.message ?? 'an error occurred');
            }
        } catch (e) {
            throw e;
        }
    };

    public getSingleJob = async (id: number): Promise<Job | undefined> => {
        try {
            const response = await this.httpClient.get(`/jobs/${id}`);
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

const jobsService = JobsService.getInstance();

export default jobsService;
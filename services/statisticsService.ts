import type { HttpClient as HttpClientType } from "./HttpClient";
import { HttpClient } from "./HttpClient";

class StatisticsService {
    private httpClient: HttpClientType;
    private static instance: StatisticsService;

    private constructor() {
        this.httpClient = HttpClient.getInstance();
    }

    public static getInstance(): StatisticsService {
      if (!StatisticsService.instance) {
        StatisticsService.instance = new StatisticsService();
      }
      return StatisticsService.instance;
    }

    public applicationStatistics = async (period: string): Promise<any | undefined> => {
        try {
            const response = await this.httpClient.get(`/statistics?period=${period}`);
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

const statisticsService = StatisticsService.getInstance();

export default statisticsService;
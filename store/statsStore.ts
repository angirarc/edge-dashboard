import { createStore } from "zustand/vanilla";

import statisticsService from '@/services/statisticsService';

interface StatsState {
    stats: {
        labels: any[],
        datasets: any[]
    };
    period: string,
    setPeriod: (selected: string) => void;
    getStatistics: (period: string) => Promise<any>;
}

const useStatsStore = createStore<StatsState>((set, get) => ({
    stats: {
        labels: [],
        datasets: []
    },
    period: 'week',
    setPeriod: (period) => {
        const { getStatistics } = get();
        set({ period });
        console.log({period})
        getStatistics(period);
    },
    getStatistics: async (period) => {
        try {
            const response = await statisticsService.applicationStatistics(period);
            if (response) set({ stats: response });
        } catch (e) {
            alert('Problem encountered fetching statistics');
        }
    },
}));

export const { getState, setState, subscribe } = useStatsStore;

export default useStatsStore;
<script lang="ts">
    import { onMounted, ref, defineProps } from 'vue';
    import { Bar } from 'vue-chartjs';
    import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

    import statisticsService from '@/services/statisticsService';
    
    const props = defineProps({
        period: Object as PropType<string>,
    });

    ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

    const stats = ref({
        labels: [],
        datasets: []
    });

    onMounted(() => {
        console.log
        const getStats = async () => {
            try {
                const result = await statisticsService.applicationStatistics(props.period);
                console.log({result})
                if (result) stats.value = result
            } catch (e) {
                alert(`An error occurred when fetching this data`)
            }
        }
        getStats();
    })

    export default {
        name: 'BarChart',
        components: { Bar },
        data() {
            return {
                chartData: stats.value,
                chartOptions: {
                    responsive: true
                }
            }
        }
    }
</script>

<template>
    <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>
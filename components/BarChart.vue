<script setup lang="ts">
    import { onMounted, ref } from 'vue';
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

    // onMounted(() => {
    //     const getStats = async () => {
    //         try {
    //             const result = await statisticsService.applicationStatistics(props.period);
    //             console.log(result)
    //             if (result) stats.value = result
    //         } catch (e) {
    //             alert(`An error occurred when fetching this data`)
    //         }
    //     }
    //     getStats();
    // })

    let chartData = {
        name: 'BarChart',
        components: { Bar },
        data() {
            return {
                chartData: {
                    labels: ['January', 'February', 'March'],
                    datasets: [{ data: [40, 20, 12] }]
                },
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
<script setup lang="ts">
    import { Bar } from 'vue-chartjs';
    import { onMounted, ref, computed, type PropType } from 'vue';
    import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

    import type { SwitchOption } from '@/types';
    
    import { getState, subscribe } from "@/store/statsStore"

    const stats = ref(getState().stats);

    // Subscribe to store updates
    subscribe((state) => {
        stats.value = state.stats;
    });

    ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

    const chartOptions = {
        responsive: true,
        animation: {
            duration: 750,
            easing: 'easeInOutQuart'
        }
    };

    const chartData = computed(() => stats.value);

    onMounted(() => getState().getStatistics('week'));
</script>

<template>
    <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>
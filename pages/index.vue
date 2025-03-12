<script setup lang="ts">
    import VueDatePicker from '@vuepic/vue-datepicker';

    import { Search, Bell, Download } from 'lucide-vue-next';
    
    import type { SwitchOption } from '@/types';

    const options: SwitchOption[] = [
        { label: 'week', value: 'Weekly' },
        { label: 'month', value: 'Monthly' },
        { label: 'year', value: 'Yearly' },
    ];
    const active = ref(0);
    const selectOption = async (index: number) => {
        active.value = index;
        await nextTick()
    };
    console.log({active})
</script>

<template>
    <div class="w-full">
        <div class="flex justify-between items-center w-full mb-3">
            <div>
                <p class="text-gray-200">Overview</p>
                <h2 class="text-3xl">Welcome to Edge</h2>
            </div>
            <div class="flex ">
                <div class="flex border border-gray-400 rounded-md items-center px-3 py-2 mr-3">
                    <Search size="18" />
                    <input class="ml-2" />
                </div>
                <button class="border bg-white rounded-md border-gray-400 py-2 px-3">
                    <Bell size="18" />
                </button>
            </div>
        </div>
        <div class="w-full flex justify-between items-center">
            <Switch :options="options" :active="active" :selectOption="selectOption" />
            <div class="flex items-center">
                <button class="border mr-3 bg-black rounded-md flex justify-between items-center py-2 px-4">
                    <span class="text-white mr-2">Download</span>
                    <Download color="white" size="18" />
                </button>
                <VueDatePicker class="py-2" range />
            </div>
        </div>
        <BarChart />
        <div class="flex justify-between mt-3">

        </div>
    </div>
</template>
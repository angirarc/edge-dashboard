<script setup lang="ts">
    import VueDatePicker from '@vuepic/vue-datepicker';

    import { Download } from 'lucide-vue-next';
    
    import type { SwitchOption } from '@/types';

    import Title from '@/components/Title'

    const options: SwitchOption[] = [
        { label: 'Weekly', value: 'week' },
        { label: 'Monthly', value: 'month' },
        { label: 'Yearly', value: 'year' },
    ];
    const active = ref(0);
    const option = options[active.value].label;

    const selectOption = async (index: number) => {
        active.value = index;
        await nextTick()
    };
</script>

<template>
    <div class="w-full">
        <Title title="Overview" subtitle="Welcome to Edge" />
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
        <!-- <BarChart :period="option" /> -->
        <div class="flex justify-between mt-3">
            <div class="w-2/3 pr-4">
                <ApplicationsTable limit="10" />
            </div>
            <div class="pl-4 w-1/3">
                <JobsTable limit="10" />
            </div>
        </div>
    </div>
</template>
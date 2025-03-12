<script setup lang="ts">
    import type { SwitchOption } from '@/types';

    const props = defineProps({
        options: Object as PropType<SwitchOption[]>,
        active: Object as PropType<number>,
        selectOption: Function as PropType<(index: number) => void>
    });
    const { options, active, selectOption }: any = props;
</script>

<template>
    <div class="flex justify-between bg-blue-50 rounded-md w-64 gap-x-1 py-2 px-2">
        <div @click="selectOption(index)" class="hover:bg-slate-100 rounded-md px-6 py-1 cursor-pointer w-1/3 flex justify-center items-center" :class="{ 'bg-white': index === active }" v-for="(option, index) in options" :key="index">
            <span>{{ option.label }}</span>
        </div>
    </div>
</template>
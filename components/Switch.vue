<script setup lang="ts">
    import { ref } from "vue";
    import { getState } from "@/store/statsStore"
    import type { SwitchOption } from '@/types';

    const period = ref(getState().period);
    const active = ref(0);

    const props = defineProps({
        options: Object as PropType<SwitchOption[]>
    });
    const { options }: any = props;

    const selectOption = val => {
        active.value = val;
        let option: SwitchOption = options[val];
        getState().setPeriod(option.value);
    }
</script>

<template>
    <div class="flex justify-between bg-blue-50 rounded-md w-72 py-2 px-2">
        <div @click="selectOption(index)" class="rounded-md px-6 py-1 cursor-pointer w-1/3 flex justify-center items-center" :class="{ 'bg-white': active === index, 'hover:bg-slate-100': active !== index }" v-for="(option, index) in options" :key="index">
            <span>{{ option.label }}</span>
        </div>
    </div>
</template>
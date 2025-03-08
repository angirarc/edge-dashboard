<script setup lang="ts">
import type { Link } from '@/types';

const route = useRoute();

const props = defineProps({
    link: Object as PropType<Link>,
    active: Object as PropType<string>,
    setActive: Function as PropType<(link: string) => void>
});

const { link } = props.link;
const isActive = link.path === route.path;
</script>

<template>
    <NuxtLink :to="link.path">
        <div class="flex flex-col items-center px-6">
            <div @click="" class="flex cursor-pointer hover:bg-blue-200 hover:text-white items-center rounded-lg w-full py-3 px-3"
                :class="{ 'bg-blue-200': isActive }">
                <div class="p-2 border hover:border-white rounded-md hover:text-white"
                    :class="{ 'border-white text-white': isActive, 'border-gray-800': !isActive }">
                    <component :is="link.Icon" :size="20" />
                </div>
                <h1 class="text-xl ml-3 font-medium" :class="{ 'text-white': isActive }">{{ link.title }}</h1>
            </div>
        </div>
    </NuxtLink>
</template>
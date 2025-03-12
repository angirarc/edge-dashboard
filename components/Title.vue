<script setup lang="ts">
    import { Search, Bell } from 'lucide-vue-next';

    const props = defineProps({
        title: String,
        subtitle: String
    });
</script>

<template>
    <div class="flex justify-between items-center w-full mb-3">
        <div>
            <p class="text-gray-200">{{ props.title }}</p>
            <h2 class="text-3xl">{{ $props.subtitle }}</h2>
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
</template>
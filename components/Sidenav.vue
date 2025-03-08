<script setup>
    import { LayoutGrid } from 'lucide-vue-next';
    
    import links from '@/fixtures/navlinks.ts';
</script> 

<template>
    <div class="bg-blue-50 w-1/6 h-full overflow-y-scroll rounded-md">
        <div class="flex flex-col items-center mt-16 mb-10 px-3">
            <div class="flex items-center w-full px-3">
                <div class="p-1.5 border border-gray-800 rounded-md">
                    <LayoutGrid />
                </div>
                <h1 class="text-2xl ml-3 font-semibold ">Edge Dashboard</h1>
            </div>
        </div>
        <div class="py-3" v-for="(link, index) in links" :key="index">
            <SidenavLink :link={link} />
        </div>
    </div>
</template>
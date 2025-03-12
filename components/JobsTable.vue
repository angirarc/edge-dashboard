<script setup lang="ts">
    import { Ellipsis } from 'lucide-vue-next';

    import { onMounted, ref, computed, type PropType } from 'vue';
    import type { Job } from '@/types/models'

    import jobsService from '@/services/jobsService';

    const props = defineProps({
        limit: Object as PropType<number>
    });

    const jobs = ref<Job[]>([]);

    onMounted(() => {
        const getJobs = async () => {
            try {
                const result = await jobsService.getJobs(props.limit);
                console.log(result)
                if (result) jobs.value = result.data
            } catch (e) {
                console.log(e)
                alert(`An error occurred when fetching jobs`)
            }
        }
        getJobs();
    })

    const hasData = computed(() => jobs.value.length > 0);
</script>

<template>
    <div v-if="hasData" class="overflow-x-auto px-6 py-3 rounded-md border border-gray-200">
        <div class="flex w-full py-1 mb-2 justify-between items-center">
            <h3>Jobs</h3>
            <button class="border bg-white rounded-md border-gray-400 py-2 px-3">
                <Ellipsis size="18" />
            </button>
        </div>
        <table class="table-auto w-full">
            <thead class="text-xs uppercase text-gray-400 bg-gray-50 rounded-sm">
                <tr>
                    <th class="p-2">
                        <div class="font-semibold text-left">Title</div>
                    </th>
                    <th class="p-2">
                        <div class="font-semibold text-left">Category</div>
                    </th>
                    <th class="p-2">
                        <div class="font-semibold text-left">Industry</div>
                    </th>
                    <th class="p-2">
                        <div class="font-semibold text-center"></div>
                    </th>
                </tr>
            </thead>
            <tbody class="text-sm font-medium divide-y divide-gray-100">
                <tr v-for="(job, index) in jobs" :key="index">
                    <td class="p-2">
                        <div class="text-left">
                            {{  job.title }}
                        </div>
                    </td>
                    <td class="p-2">
                        {{  job.category }}
                    </td>
                    <td class="p-2">
                        {{  job.industry }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <div v-else class="w-full h-16 flex items-center justify-center">
        <p class="font-semibold text-base">No jobs were found</p>
    </div>
</template>
<script setup lang="ts">
    import { Ellipsis } from 'lucide-vue-next';

    import { onMounted, ref, computed, type PropType } from 'vue';
    import type { Application } from '@/types/models'

    import applicationsService from '@/services/applicationsService';

    const props = defineProps({
        limit: Object as PropType<number>
    });

    const applications = ref<Application[]>([]);

    onMounted(() => {
        const getApplications = async () => {
            try {
                const result = await applicationsService.getApplication(props.limit);
                console.log(result)
                if (result) applications.value = result.data
            } catch (e) {
                console.log(e)
                alert(`An error occurred when fetching applications`)
            }
        }
        getApplications();
    })

    const hasData = computed(() => applications.value.length > 0);
</script>

<template>
    <div v-if="hasData" class="overflow-x-auto px-6 py-3 rounded-md border border-gray-200">
        <div class="flex w-full py-1 mb-2 justify-between items-center">
            <h3>Applicants</h3>
            <button class="border bg-white rounded-md border-gray-400 py-2 px-3">
                <Ellipsis :size="18" />
            </button>
        </div>
        <table class="table-auto w-full">
            <thead class="text-xs uppercase text-gray-400 bg-gray-50 rounded-sm">
                <tr>
                    <th class="p-2">
                        <div class="font-semibold text-left">Applicant</div>
                    </th>
                    <th class="p-2">
                        <div class="font-semibold text-left">Email</div>
                    </th>
                    <th class="p-2">
                        <div class="font-semibold text-left">Job</div>
                    </th>
                    <th class="p-2">
                        <div class="font-semibold text-center"></div>
                    </th>
                </tr>
            </thead>
            <tbody class="text-sm font-medium divide-y divide-gray-100">
                <tr v-for="(application, index) in applications" :key="index">
                    <td class="p-2">
                        <div class="text-left">
                            {{  application.applicantName }}
                        </div>
                    </td>
                    <td class="p-2">
                        {{  application.applicantEmail }}
                    </td>
                    <td class="p-2">
                        {{  application.jobId }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <div v-else class="w-full h-16 flex items-center justify-center">
        <p class="font-semibold text-base">No records were found</p>
    </div>
</template>
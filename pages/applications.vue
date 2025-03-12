<script setup lang="ts">
  import Title from '@/components/Title';
  import ApplicationsTable from '@/components/ApplicationsTable'
</script>

<template>
    <div class="w-full">
      <Title title="Job Applications" subtitle="Applications" />
      <ApplicationsTable limit="20" />
    </div>
</template>
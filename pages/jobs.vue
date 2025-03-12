<script setup lang="ts">
  import Title from '@/components/Title';
  import JobsTable from '@/components/JobsTable'
</script>

<template>
  <div class="w-full">
    <Title title="Career Opportunites" subtitle="Posted Jobs" />
    <JobsTable limit="20" />
  </div>
</template>
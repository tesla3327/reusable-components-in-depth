<script setup>
import Card from '@/components/Card.vue';
</script>

<template>
  <Card>
    <template #header>
      <div class="flex flex-col items-center p-4">
        <h2 class="subheader-2">With Header Slot</h2>
        <img
          class="rounded-2xl w-64 m-4 border-slate-500 border-2"
          src="https://source.unsplash.com/random/400x300?car"
        />
      </div>
    </template>
    <p>
      We can also replace the entire header with content
      from a slot if that's what we need.
    </p>
  </Card>
</template>

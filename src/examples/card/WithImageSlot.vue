<script setup>
import Card from '@/components/Card.vue';
</script>

<template>
  <Card title="With an Image Slot">
    <template #header-image>
      <img
        class="rounded-2xl w-64 mt-4 border-slate-500 border-2"
        src="https://source.unsplash.com/random/400x300?car"
      />
    </template>
    <p>
      Here, we use a slot to pass in the image instead of
      the prop.
    </p>
    <p>
      By using this extension point, we have more control
      over how the image is displayed.
    </p>
  </Card>
</template>

<script setup>
import Card from '@/components/Card.vue';
</script>

<template>
  <Card
    title="With an Image Prop"
    img="https://source.unsplash.com/random/400x300?food"
  >
    <p>You can also put an image into the header.</p>
    <p>All it requires is passing the URL to the image.</p>
  </Card>
</template>

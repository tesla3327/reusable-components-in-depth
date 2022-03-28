<script setup>
import Card from '@/components/Card.vue';
const addItem = () => console.log('Add new item');
</script>

<template>
  <Card
    title="With a Header CTA"
    img="https://source.unsplash.com/random/400x300?office"
    header-cta="Add +"
    @header-cta-clicked="addItem"
  >
    <p>
      In this example we add in a header call to action
      (CTA).
    </p>
  </Card>
</template>

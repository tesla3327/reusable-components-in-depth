<script setup>
import Card from '@/components/Card.vue';
</script>

<template>
  <Card
    title="With a Header CTA Slot"
    img="https://source.unsplash.com/random/400x300?office"
  >
    <template #header-call-to-action>
      <a
        class="text-mt-blue underline"
        href="https://michaelnthiessen.com"
      >
        Follow the link!
      </a>
    </template>
    <p>
      The header CTA also has an extension point, so we can
      replace that entirely with our own content.
    </p>
    <p>In this example, we replace it with a link.</p>
  </Card>
</template>

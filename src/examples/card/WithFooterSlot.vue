<script setup>
import Card from '@/components/Card.vue';
</script>

<template>
  <Card title="With a Footer Slot">
    <template #footer-call-to-action>
      <a
        class="text-mt-blue underline"
        href="https://michaelnthiessen.com"
      >
        Follow the link!
      </a>
    </template>
    <p>
      In this Card example, the footer works nearly the same
      as the header.
    </p>
    <p>
      We can override the content at various levels with
      slots, but it has no defaults. Instead, if no content
      is displayed, it will hide itself.
    </p>
  </Card>
</template>

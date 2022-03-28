<script setup>
import Card from '@/components/Card.vue';
import Button from '@/components/Button.vue';
</script>

<template>
  <Card
    title="Full Example"
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

    <template #footer-text>This is the footer</template>

    <template #footer-call-to-action>
      <Button> Dismiss the Card </Button>
    </template>

    <p>
      Here we see how we can use multiple extension points
      together in order to selectively override different
      parts of the component.
    </p>

    <p>
      First, we override the header call to action with a
      link.
    </p>

    <p>
      Then we add some text to the footer, and then add a
      button into the footer call to action slot.
    </p>

    <p>We also use the default slot to add in this text!</p>
  </Card>
</template>

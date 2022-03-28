<script setup>
/**
 * header, header CTA, description, icon, header img
 * Level 5
 * Card button component that goes into slot
 */
import Button from './Button.vue';

defineProps({
  title: {
    type: String,
    default: 'Card Title',
    required: true,
  },
  img: {
    type: String,
    default: undefined,
  },
  footerCta: {
    type: String,
    // default: 'Dismiss',
  },
  headerCta: {
    type: String,
    // default: 'Add +',
  },
});
</script>

<template>
  <div
    class="bg-white max-w-[500px] w-full rounded-md shadow-xl flex flex-col"
  >
    <div class="bg-slate-100 rounded-t-md">
      <slot name="header">
        <slot name="header-image">
          <div
            v-if="img"
            class="rounded-t-md h-64 overflow-hidden"
          >
            <img class="w-full" :src="img" />
          </div>
        </slot>
        <div
          class="py-4 px-6 flex flex-row justify-between items-center"
        >
          <h2 class="subheader-2">
            {{ title }}
          </h2>
          <slot name="header-call-to-action">
            <Button
              v-if="headerCta"
              @click="$emit('header-cta-clicked')"
            >
              {{ headerCta }}
            </Button>
          </slot>
        </div>
      </slot>
    </div>
    <div class="p-6 flex-grow">
      <slot />
    </div>
    <div
      v-if="
        footerCta ||
        $slots.footer ||
        $slots['footer-text'] ||
        $slots['footer-call-to-action']
      "
      class="py-4 px-6 bg-slate-100 rounded-b-md flex flex-row align-center justify-between font-sans text-type-dark"
    >
      <slot name="footer">
        <slot name="footer-text">
          <div class="flex-grow"></div>
        </slot>
        <slot name="footer-call-to-action">
          <Button
            v-if="footerCta"
            @click="$emit('footer-cta-clicked')"
          >
            {{ footerCta }}
          </Button>
        </slot>
      </slot>
    </div>
  </div>
</template>

<style scoped>
:deep(p:first-child) {
  margin-top: 0;
}

:deep(p:last-child) {
  margin-bottom: 0;
}
</style>

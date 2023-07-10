<template>
  <div class="q-pa-md">
    <div class="q-video">
      <iframe
        src="https://www.youtube.com/embed/fuhE6PYnRMc"
        frameborder="0"
        allowfullscreen
      />
    </div>
  </div>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
});
</script>

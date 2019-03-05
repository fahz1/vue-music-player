<template>
  <div class="home">
    <AppButton />
  </div>
</template>

<script>
// @ is an alias to /src
import AppButton from '@/components/AppButton.vue'
export default {
  name: 'home',
  components: {
    AppButton
  }
}
</script>

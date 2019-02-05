<template>
    <option v-bind:value="crop.id">
      {{ crop.name }}
    </option>
</template>

<script>
export default {
  name: 'CropSelection',
  props: {
    crop: { required: true }
  }
}
</script>

<style scoped>

</style>

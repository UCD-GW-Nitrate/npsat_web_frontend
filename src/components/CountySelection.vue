<template>
    <option v-bind:value="county.ab_code">
      {{ county.name }}
    </option>
</template>

<script>
export default {
  name: 'CountySelection',
  props: {
    county: { required: true }
  }
}
</script>

<style scoped>

</style>

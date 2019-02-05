<template>
    <option v-bind:value="county.ab_code">
      {{ county.name }} County
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

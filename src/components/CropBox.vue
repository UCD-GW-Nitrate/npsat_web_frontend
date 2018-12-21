<template>
  <li class="crop_selection_box">{{ crop.name }}</li>
</template>

<script>

export default {
  name: 'CropBox',
  props: {
    crop: { required: true }
  }
}

</script>

<style scoped>
  li{
    list-style-type: none;
    display: block;
    width: 100%;

    border: 1px solid black;
  }
</style>

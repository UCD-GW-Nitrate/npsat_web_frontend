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
  ul, ol{
    margin: 0;
    padding: 0;
  }

  li{
    list-style-type: none;
    display: block;
    width: 100%;

    margin:0;
    padding:0;
  }
</style>

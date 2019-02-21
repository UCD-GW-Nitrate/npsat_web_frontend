<template>
  <li class="crop_selection_box">
    <h3>{{ crop.name }}</h3>
    <vue-slider v-model="application_proportion" value=100 formatter="{value}%"></vue-slider>
  </li>
</template>

<script>
import vueSlider from 'vue-slider-component';

export default {
  name: 'CropBox',
  props: {
    crop: { required: true }
  },
  data: function () {
    return {
      application_proportion: 100
    };
  },
  components: {
    vueSlider
  }
};

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

<template>
<div id="npsat_crops">
  <ol id="crop_parameters">
    <CropBox v-for="crop in SelectedCrops"
             v-bind:crop="crop"
             v-bind:key="crop.id"></CropBox>
  </ol>
</div>
</template>

<script>
import CropBox from '@/components/CropBox'

var SelectedCrops = [
  {id: 0, name: 'All other crops'},
  {id: 1, name: 'Corn'},
  {id: 2, name: 'Grapes'}
]

export default {
  components: {CropBox},
  data () {
    return {SelectedCrops: SelectedCrops}
  }
}
</script>

<style lang="sass">
  @import 'styles/npsat.sass'
</style>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
<div id="npsat_crops">
  <ol id="crop_parameters">
    <CropBox v-for="crop in AvailableCrops"
             v-bind:crop="crop"
             v-bind:key="crop.id"></CropBox>
  </ol>
</div>
</template>

<script>
import CropBox from '@/components/CropBox'
import CropAPI from '@/services/api/crops'

export default {
  components: {CropBox},
  data () {
    return {
      loading: true,
      AvailableCrops: []
    }
  },
  created () {
    CropAPI.getCrops()
      .then(crops => {
        this.AvailableCrops = crops
      })
      .catch(error => console.log(error))
      .finally(this.loading = false)
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

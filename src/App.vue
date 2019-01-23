<template>

  <div id="npsat_web" class="pure-g">
    <div id="header" class="pure-u-1-1">
      <h1>NPSAT Web</h1>
    </div>
    <div id="npsat_area" class="npsat_column pure-u-sm-1 pure-u-md-1-3">
      <h2>Area to Estimate</h2>
      <select v-model="selected_county">
        <option disabled value="">Please select a county</option>
        <CountySelection v-for="county in Counties"
                         v-bind:county="county"
                         v-bind:key="county.id"></CountySelection>

      </select>
      <p>Selected: {{ selected_county }}</p>
    </div>
    <div id="npsat_crops" class="npsat_column pure-u-sm-1 pure-u-md-1-3">
      <h2>Adjust Crop Loadings</h2>
      <p style="font-style:italic;text-align:right;margin-top:0">All values below relative to 2020</p>
      <ol id="crop_parameters">
        <CropBox v-for="crop in AvailableCrops"
                 v-bind:crop="crop"
                 v-bind:key="crop.id"></CropBox>
      </ol>
    </div>
    <div id="npsat_outputs" class="npsat_column pure-u-sm-1 pure-u-md-1-3">
      <h2>View Outputs</h2>
    </div>
  </div>
</template>

<script>
import CropBox from '@/components/CropBox'
import CountySelection from '@/components/CountySelection'
import CropAPI from '@/services/api/crops'
import CountyAPI from '@/services/api/counties'

export default {
  components: {CropBox, CountySelection},
  data () {
    return {
      loading: true,
      AvailableCrops: [],
      Counties: [],
      selected_county: null
    }
  },
  created () {
    CropAPI.getCrops()
      .then(crops => {
        this.AvailableCrops = crops
      })
      .catch(error => console.log(error))
      .finally(this.loading = false)
    CountyAPI.getCounties()
      .then(counties => {
        this.Counties = counties
      })
      .catch(error => {
        console.log(error)
        console.log('Failed to retrieve counties from API')
      })
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

<template>

  <div id="npsat_web" class="pure-u-1-1">
    <div id="npsat_area" class="npsat_column pure-u-lg-1-3 pure-u-md-1-3 pure-u-sm-1-1">
      <h2>Area to Estimate</h2>
      <select v-model="selected_county">
        <option disabled value="">Please select a county</option>
        <CountySelection v-for="county in Counties"
                         v-bind:county="county"
                         v-bind:key="county.id"></CountySelection>

      </select>
      <p>Selected: {{ selected_county }}</p>
    </div>
    <div id="npsat_crops" class="npsat_column pure-u-lg-1-3 pure-u-md-1-3 pure-u-sm-1-1">
      <h2>Adjust Crop Loadings</h2>
      <p style="font-style:italic;text-align:right;margin-top:0">All values below relative to 2020</p>
      <ol id="crop_parameters" ref="crop_parameters">
        <CropBox v-for="crop in modified_crops"
                         v-bind:crop="crop"
                         v-bind:key="crop.id"></CropBox>
      </ol>
      <v-select label="name" :options="AvailableCrops" v-model="selected_crop" ></v-select>
    </div>
    <div id="npsat_outputs" class="npsat_column pure-u-lg-1-3 pure-u-md-1-3 pure-u-sm-1-1">
      <h2>View Outputs</h2>
      <button v-on:click="run_npsat">Run Model</button>
    </div>
  </div>
</template>

<script>
import vSelect from 'vue-select';
import CropBox from '@/components/CropBox';
import CropSelection from '@/components/CropSelection';
import CountySelection from '@/components/CountySelection';
import Plot from '@/components/Plot';
import CropAPI from '@/services/api/crops';
import CountyAPI from '@/services/api/counties';

import axios from 'axios';

export default {
  components: {CropBox, CropSelection, CountySelection, Plot, vSelect},
  data () {
    return {
      loading: true,
      AvailableCrops: [],
      Counties: [],
      selected_county: null,
      selected_crop: null,
      modified_crops: [] // crops actually being adjusted
    };
  },
  created () {
    CropAPI.getCrops()
      .then(crops => {
        this.AvailableCrops = crops;
      })
      .catch(error => console.log(error))
      .finally(this.loading = false);
    CountyAPI.getCounties()
      .then(counties => {
        this.Counties = counties;
      })
      .catch(error => {
        console.log(error);
        console.log('Failed to retrieve counties from API');
      })
      .finally(this.loading = false);
  },
  methods: {
    // I think we're going to need to send the modifications individually
    // after we've created the model run - we'll send the model run with
    // the county and at some point the user, then create the modifications
    // and attach them to the model run by id
    run_npsat: function () {
      var json = {county: {ab_code: 'c054'}};
      var modifications = [
        {name: 'Corn',
          proportion: 0.50},
        {name: 'Grapes',
          proportion: 0.75}
      ];
      console.log(modifications);

      console.log(this.modified_crops);

      var result = axios.post('http://127.0.0.1:8080/api/model_run/', json);
      console.log(result);
    }
  },
  watch: {
    selected_crop: function (crop) {
      this.modified_crops.push(crop);
    }
  }
};
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

button {
  background-color: #f0f6ff;
  padding: 0.75em;
  border: 1px solid #666;
  border-radius: 3px;
}
</style>

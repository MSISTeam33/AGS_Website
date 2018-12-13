var generatorListApp = new Vue({
  el: '#generatorListPage',
  data: {
      generatorList: [{
        'gd_Id' : '',
        'gd_cust_Id' : '',
        'gen_model' : '',
        'gd_status': '',
        'gen_freq':'',
        'gen_standby':'',
        'gen_prime':'',
        'gen_industry':'',
        'gen_description':''
      }]
  },
  methods: {
    loadGeneratorDetails(event /*,sid*/)
    {
      var el = event.currentTarget;

      // get the clicked element
      $(el).toggleClass('row-active');

  		$(el).parents('.row').find('.expandable').toggleClass('row-open');
  		$(el).parents('.row').find('.row-toggle').toggleClass('row-toggle-twist');
    }, //end of load turbine

    gotoKPI(gid) {
      window.location = 't_sensorTimeSeriesDashboard.html?sensorDeployedId=' + gid;
    }, //end of go to KPI
  }, //end of methods

  created () {
    // Do data fetch
   const url = new URL(window.location.href);
   // TODO: Fetch client-specific site
   fetch('/api/generatorList.php')
   .then( response => response.json() )
   .then( json => {generatorListApp.generatorList = json} )
   .catch( err => {
     console.error('GENERATOR LIST FETCH ERROR:');
     console.error(err);
   })
  }
});

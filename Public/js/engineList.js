var engineListApp = new Vue({
  el: '#engineListPage',
  data: {
      engineList: [{
        'ed_Id' : '',
        'ed_cust_Id' : '',
        'en_model' : '',
        'ed_status': '',
        'en_power':'',
        'en_torque':'',
        'en_certif':'',
        'en_industry':'',
        'en_desc':''
      }]
  },
  methods: {
    loadEngineDetails(event /*,sid*/)
    {
      var el = event.currentTarget;

      // get the clicked element
      $(el).toggleClass('row-active');

  		$(el).parents('.row').find('.expandable').toggleClass('row-open');
  		$(el).parents('.row').find('.row-toggle').toggleClass('row-toggle-twist');
    }, //end of load turbine

    gotoKPI(eid) {
      window.location = 'sensorTimeSeriesDashboard.html?sensorDeployedId=' + eid;
    }, //end of go to KPI
  }, //end of methods

  created () {
    // Do data fetch
   const url = new URL(window.location.href);
   // const ed_Id = url.searchParams.get('clientId');
   // console.log('Client: '+ clientId);

   // TODO: Fetch client-specific site
   fetch('/api/engineList.php')
   .then( response => response.json() )
   .then( json => {engineListApp.engineList = json} )
   .catch( err => {
     console.error('ENGINE LIST FETCH ERROR:');
     console.error(err);
   })
  }
});

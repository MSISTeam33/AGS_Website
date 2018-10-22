var clientApp = new Vue({
  el: '#sitePage',
  data: {
    site: [], // All the teams
},

methods: {
      fetch('api/site.php', {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: s
    })
    .then( response => response.json())
    .then( json => {this.site.push(json)})
    .catch( err => {
      console.error('WORK POST ERROR:');
      console.error(err);
    })

  created () {
    fetch('api/site.php')
    .then(response => response.json())
    .then(json => {this.site = json; console.log(json);})
    .catch(err=> {
      console.log('COMMENT FETCH ERROR:');
      console.log(err);
    }
  )}
})

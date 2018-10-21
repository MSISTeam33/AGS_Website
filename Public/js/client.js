var clientApp = new Vue({
  el: '#clientPage',
  data: {
    clientList: []
},

  created () {
    fetch('api/client.php')
    .then(response => response.json())
    .then(json => {this.clientList = json})
    .catch(err=> {
      console.log('CLIENT FETCH ERROR:');
      console.log(err);
    });
}
})

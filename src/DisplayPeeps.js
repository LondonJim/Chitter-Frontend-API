(function (exports) {
  function DisplayPeeps() {
    this.peeps = {};
  };

  DisplayPeeps.prototype.fetchPeeps = function(
    url = 'https://chitter-backend-api.herokuapp.com/peeps') {
    return fetch(url)
      .then(function(response) {
      return response.json();
    }).then(function(data) {
      return this.peeps = data;
    })
  };

  exports.DisplayPeeps = DisplayPeeps;

})(this);

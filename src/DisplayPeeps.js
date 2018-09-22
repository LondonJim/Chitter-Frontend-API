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

  DisplayPeeps.prototype.eachPeepHTML = function(peeps = this.peeps) {
    returnedHTML = "<ul><div";
    peeps.forEach(function(peep) {
      returnedHTML += ` id=${peep.id}><li>${peep.body}</li>`
    });
    returnedHTML += "</div></ul>";
    return returnedHTML;
  }

  exports.DisplayPeeps = DisplayPeeps;

})(this);

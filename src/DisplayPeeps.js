(function (exports) {
  function DisplayPeeps() {
    this.peeps = {};
  };

  DisplayPeeps.prototype.fetchPeeps = function(
    url = 'https://chitter-backend-api.herokuapp.com/peeps') {
    return fetch(url)
      .then((response) => response.json())
      .then((data) => this.peeps = data)
      .then(() => (document.getElementById("peeps").innerHTML = this.eachPeepHTML()))
  };

  DisplayPeeps.prototype.eachPeepHTML = function(peeps = this.peeps) {
    returnedHTML = "<ul>";
    peeps.forEach(function(peep) {
      returnedHTML += `<div class="well" id=${(peep.id)}><li>${(peep.body)}<br><i>- ${(peep.user.handle)}</i></li></div>`
    });
    returnedHTML += "</ul>";
    return returnedHTML;
  }

  exports.DisplayPeeps = DisplayPeeps;

})(this);

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
    returnedHTML = "<h3>All Peeps</h3><br><ul>";
    peeps.forEach(function(peep) {
      returnedHTML += `<a href="#user/${peep.user.handle}" id=${(peep.id)}><div class="well"><li>${(peep.body)}<br><i>- ${(peep.user.handle)}</i></li></div></a>`
    });
    returnedHTML += "</ul>";
    return returnedHTML;
  }

  exports.DisplayPeeps = DisplayPeeps;

})(this);

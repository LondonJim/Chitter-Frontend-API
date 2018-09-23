(function (exports) {

  function ChitterController(displayPeeps = new DisplayPeeps, singleUserPeeps = new SingleUserPeeps) {
    this.displayPeeps = displayPeeps;
    this.singleUserPeeps = singleUserPeeps;
  };

  ChitterController.prototype.updatePeepView = function() {
    this.eventListener()
    window.location.hash=""
    return this.displayPeeps.fetchPeeps();
  };

  ChitterController.prototype.eventListener = function() {
    addEventListener("hashchange", this.hashHandler.bind(this))
    document.getElementById("Main Page").onclick = function() {
      this.updatePeepView();
    }.bind(this);
  };

  ChitterController.prototype.hashHandler = function() {
    hash = window.location.hash;
    if (hash.slice(0,6) === "#user/") {
      user = hash.slice(6);
      document.getElementById("peeps").innerHTML = this.singleUserPeeps.userPeepHTML(this.displayPeeps.peeps, user);
    } else {
      this.updatePeepView();
    };
  };

  exports.ChitterController = ChitterController;

})(this);

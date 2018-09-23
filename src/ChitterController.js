(function (exports) {

  function ChitterController(displayPeeps = new DisplayPeeps()) {
    this.displayPeeps = displayPeeps;
  };

  ChitterController.prototype.updatePeepView = function() {
    return this.displayPeeps.fetchPeeps();
  };

  exports.ChitterController = ChitterController;

})(this);

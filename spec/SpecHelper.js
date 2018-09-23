(function (exports) {

  function MockDisplayPeeps() {
  };

  MockDisplayPeeps.prototype.fetchPeeps = function() {
    return "fetched Peeps"
  };

  exports.MockDisplayPeeps = MockDisplayPeeps;

})(this);

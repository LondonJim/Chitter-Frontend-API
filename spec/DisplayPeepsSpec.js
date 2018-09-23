describe("DisplayPeeps", function() {

  var promiseHelper;

  beforeEach(function() {

    var fetchPromise = new Promise(function(resolve) {
      promiseHelper = {
        resolve: resolve
      };
    });

    spyOn(window, 'fetch').and.returnValue(fetchPromise);

    displayPeeps = new DisplayPeeps();

  });

  it("should instantiate with an empty object", function() {
    expect(displayPeeps.peeps).toEqual({});
  });

  describe("fetchpeeps", function() {

    it("fetch has been called with the chitter API URL", function() {
      displayPeeps.fetchPeeps();
      expect(window.fetch).toHaveBeenCalledWith('https://chitter-backend-api.herokuapp.com/peeps')
    });

    it("returns a promise", function() {
      expect(displayPeeps.fetchPeeps()).toEqual(jasmine.any(Promise));
    });

    describe("gets a response on a successfull fetch", function() {

      beforeEach(function() {

        var response = new Response(JSON.stringify({}));
        promiseHelper.resolve(response);

        spyOn(displayPeeps, 'eachPeepHTML').and.returnValue("test data");

      });

      it('resolves the promise with the test data', function(done) {
        displayPeeps.fetchPeeps().then(function(data) {
          expect(data).toEqual("test data");
          done();
        });
      });
    });
  });

  describe("eachPeepHTML", function() {
    it('returns the peeps in a HTML ready format', function() {
      var peepData = [{"id":1,"body":"1st Peep","user": {"handle": "Chitter User"}}];

      expect(displayPeeps.eachPeepHTML(peepData)).toEqual(`<h3>All Peeps</h3><br><ul><a href="#user/Chitter User" id=1><div class="well"><li>1st Peep<br><i>- Chitter User</i></li></div></a></ul>`);

    });
  });

});

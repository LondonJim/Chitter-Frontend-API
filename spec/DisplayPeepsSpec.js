describe("DisplayPeeps", function() {

  var promiseHelper;

  beforeEach(function() {

    var fetchPromise = new Promise(function(resolve, reject) {
      promiseHelper = {
        resolve: resolve,
        reject: reject
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
        var response = new Response(JSON.stringify({
          id: 1
        }));
        console.log(response)
        promiseHelper.resolve(response);
      });

      it('resolves the promise with the id', function(done) {
        displayPeeps.fetchPeeps().then(function(id) {
          expect(id).toEqual({id: 1});
          done();
        });
      });
    });

  });
});

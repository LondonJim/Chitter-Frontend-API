describe("DisplayPeeps", function() {
  beforeEach(function() {
    displayPeeps = new DisplayPeeps();
  })

  it("should instantiate with an empty object", function() {
    expect(displayPeeps.peeps).toEqual({});
  })


})

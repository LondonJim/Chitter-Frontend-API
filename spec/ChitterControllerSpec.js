describe("ChitterController", function() {


  mockDisplayPeeps = new MockDisplayPeeps

  chitterController = new ChitterController(mockDisplayPeeps)

  it("instantiates with a display controller", function() {
    expect(chitterController.displayPeeps).toEqual(mockDisplayPeeps)
  });

  describe(".updatePeepView", function() {
    it("can call the fetchpeeps function", function() {
      expect(chitterController.updatePeepView()).toEqual("fetched Peeps")
    })
  })

})

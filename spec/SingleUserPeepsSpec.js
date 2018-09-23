describe("SingleUserPeeps", function() {

  beforeEach(function() {
    singleUserPeeps = new SingleUserPeeps();

  });

  describe(".userPeepHTML", function() {
    var peeps = [{"id":1,"body":"1st Peep","created_at": "2018-09-23T17:38:32.343Z","user": {"handle": "Chitter User"}}];
    var user = "Chitter User";
    var convertedTime = "September 23, 2018, 6:36 PM";

    it("returns an HTML string which includes the peep user handle, peep id, peep body, created peep time", function () {
      spyOn(singleUserPeeps, 'convertTime').and.returnValue(convertedTime);
      expect(singleUserPeeps.userPeepHTML(peeps, user)).toEqual(`<h3>Chitter User Peeps</h3><br><ul><div class="well" id=1><li>1st Peep<br>- September 23, 2018, 6:36 PM</li></div></ul>`);
    });
  });

  // spyOn does not apply here for time conversion
  describe(".convertTime", function() {
    it("take a standard ISOString date and time and converts to readable english", function() {
      expect(singleUserPeeps.convertTime("2018-09-23T17:38:32.343Z")).toEqual("September 23, 2018, 6:38 PM");
    });
  });
});

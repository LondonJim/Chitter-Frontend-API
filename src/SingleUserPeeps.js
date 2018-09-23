(function (exports) {

  function SingleUserPeeps() {
  }

  SingleUserPeeps.prototype.userPeepHTML = function (peeps, user) {
    convertTime = this.convertTime()
    formatUser = user.replace(/%20/g, " ");
    returnedHTML = `<h3>${formatUser} Peeps</h3><br><ul>`;
    peeps.forEach(function(peep) {
      if (peep.user.handle === user) {
        returnedHTML += `<div class="well" id=${(peep.id)}><li>${(peep.body)}<br>- ${this.convertTime(peep.created_at)}</li></div>`
      };
    }.bind(this));
    returnedHTML += "</ul>"
    return returnedHTML
  };

  SingleUserPeeps.prototype.convertTime = function (dateTime) {
    time = dateTime
    options = { year: 'numeric', month: 'long', day: 'numeric', hour: "2-digit", minute: "2-digit" };
    localstring = new Date(time).toLocaleString('en-US', options)
    return localstring
  };

  exports.SingleUserPeeps = SingleUserPeeps;

})(this);

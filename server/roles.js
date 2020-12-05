const AccessControl = require("accesscontrol");
const ac = new AccessControl();
 
exports.roles = (function() {
ac.grant("visitor")
 .readAny("book")
 
ac.grant("librarian")
 .extend("visitor")
 .updateAny("book")
 
ac.grant("admin")
 .extend("visitor")
 .extend("librarian")
 .deleteAny("book")
 
return ac;
})();
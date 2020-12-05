const bcrypt = require('bcrypt');
const { roles } = require('../server/roles')
const users = require('../models/userModel')
 
// async function hashPassword(password) {
//  return await bcrypt.hash(password, 10);
// }
 
// async function validatePassword(plainPassword, hashedPassword) {
//  return await bcrypt.compare(plainPassword, hashedPassword);
// }
exports.authenticate = async function(username, password) {
    try {
      var user = users.getUser(username);
      if (user.password === password) {
        user.password = 'XXXXX';
        return user;
      } else {
        return false;
      }
    } catch (error) {
    console.log(error)
    }
  
}

exports.grantAccess = function(action, resource) {
 return async (req, res, next) => {
  try {
   const permission = roles.can(req.user.role)[action](resource);
   if (!permission.granted) {
    return res.status(401).json({
     error: "You don't have enough permission to perform this action"
    });
   }
   next()
  } catch (error) {
    console.log(error)
    next(error)
  }
 }
}


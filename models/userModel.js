var users = new Map()

users.set('moaze', {
	password: 'password123', 
	firstName: 'moaz', 
	lastName: 'elsayed', 
	role: 'admin'
});

users.set('moazv', {
	password: 'password123', 
	firstName: 'moaz', 
	lastName: 'elsayed', 
	role: 'visitor'
});

users.set('moazl', {
	password: 'password123', 
	firstName: 'moaz', 
	lastName: 'elsayed', 
	role: 'librarian'
});

exports.getUser = function(username) {
	return users.get(username)
};

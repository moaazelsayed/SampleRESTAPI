var books = new Map()
var crypto = require("crypto");
var { getDateFormated, getTimeFormatted, timeZones } = require('../config/tools');
var id = crypto.randomBytes(8).toString("hex");
books.set(id, { 
	title: 'Harry Potter', 
	description: 'Some magical dude with a wand.', 
	added: getTimeFormatted(Date.now()),
	updated: getTimeFormatted(Date.now())
});

id = crypto.randomBytes(8).toString("hex");
books.set(id, { 
	title: 'Lord of the ring', 
	description: 'Some magical dude with a staff.', 
	added: getTimeFormatted(Date.now()),
	updated: getTimeFormatted(Date.now())
});

id = crypto.randomBytes(8).toString("hex");
books.set(id, { 
	title: 'Star wars', 
	description: 'Some magical dude with the force.', 
	added: getTimeFormatted(Date.now()),
	updated: getTimeFormatted(Date.now())
});

exports.updateTitle = function(id, title) {
	var book = books.get(id);
	books.set(id, {
		title,
		description: book.description,
		added: book.added,
		updated: getTimeFormatted(Date.now())
	})
	return books.get(id);
};

exports.updateDescription = function(id, description) {
	var book = books.get(id);
	books.set(id, {
		title: book.title,
		description,
		added: book.added,
		updated: getTimeFormatted(Date.now())
	})
	return books.get(id);
};

exports.addBook = function(title, description) {
	var id = crypto.randomBytes(8).toString("hex");
	books.set(id, {
		title,
		description,
		added: getTimeFormatted(Date.now()),
		updated: getTimeFormatted(Date.now())
	})
	return books.get(id);
};

exports.getBook = function(id) {
	return books.get(id);
};

exports.getAllBooks = function() {
	return books;
};

exports.deleteBook = function(id) {
	return books.delete(id);
};

const users = [];

const addUser = ({ id, username, room }) => {
	// Clean the data
	username = username.trim().toLowerCase();
	room = room.trim().toLowerCase();

	// Validate the data
	if (!username || !room)
		return {
			error: 'Username and room are required.',
		};

	// Check for existing user
	const exisitingUser = users.find(
		(user) => user.room === room && user.username === username
	);

	//Validate username
	if (exisitingUser)
		return {
			error: 'Username is in use!',
		};

	//Store user
	const user = { id, username, room };
	users.push(user);
	return { user };
};

const removeUser = (id) => {
	const index = users.findIndex((user) => user.id === id);

	if (index !== -1) return users.splice(index, 1)[0];
};

const getUser = (id) => {
	return users.find((user) => user.id === id);
};

const getUsersInRoom = (room) => {
	return users.reduce((arr, user) => {
		if (user.room === room) arr.push(user);
		return arr;
	}, []);
};

module.exports = {
	addUser,
	removeUser,
	getUser,
	getUsersInRoom,
};

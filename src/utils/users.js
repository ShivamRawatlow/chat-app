const users = []

const addUser = ({id, username, room}) => {

    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    //validate the data
    if(!username || !room){
        return{
            error: 'Username and room are required!'
        }
    }

    //Check for existing user
    const existingUser = users.find((user) =>{
        return user.room === room && user.username === username
    })

    if(existingUser){
        return {
            error: 'Username is already used!'
        }
    }

    //Store user
    const user = {id, username, room}
    users.push(user)
    return {user}
}

const removeUser = (id) =>{
    const index = users.findIndex((user) => user.id === id)
    if(index !== -1){ //no user found
        return users.splice(index,1)[0] //1 is the number of items we want to remove
        //this will return an array therefore [0] to access the first item
    }
}

const getUser = (id) => {
    return users.find((user) => user.id === id)
} 

const getUsersInRoom = (room) =>{
    room = room.trim().toLowerCase()
    return users.filter((user) => user.room === room) //filter returns an array of user
}

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}


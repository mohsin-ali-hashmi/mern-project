import { v4 as uuidv4 } from "uuid";
let users = [];

export const getUsers = (req, res) => {
    res.send(users);
  }

  export const createUser = (req, res) => {
    const user = req.body;
    const userId = uuidv4();
    const userWithId = { ...user, id: userId };
    users.push(userWithId);
    res.send(`User with the name ${user.firstName} added to the database!`);
  }

  export const getById = (req, res) => {
    const { id } = req.params;
    const fUser = users.find((user) => user.id === id);
    res.send(fUser);
  }

  export const deleteById = (req, res) => {
    const { id } = req.params;
  
    users = users.filter((user) => user.id != id);
    res.send(`user with id deleted`);
  }

  export const updateById = (req, res) => {
    const { id } = req.params;
  
    const { firstName, lastName, age } = req.body;
  
    const user = users.find((user) => user.id === id);
  
    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (age) user.age = age;
    res.send("user has been updated")
  }
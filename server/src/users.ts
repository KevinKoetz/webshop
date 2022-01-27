import {v4 as uuid} from "uuid";

export interface IUser {
    id: string;
    username: string;
    password: string; //storing plain password here, do not ever Ever do this at home!!!
}


const users: Express.User[] = [{
    id: uuid(),
    username: "Kevin",
    password: "password",
    profile: {aboutMe: "Super Special Guy..."},
    invoice: {fullName: "Kevin Kötz", streetWithNumber:"Anywhere 10", postCode: "06114", country: "Germany"},
    payment: {fullName: "Kevin Kötz", bic:"INGEFXX", iban:"DE0640987946349", bank:"ING"},
    art: []
}]

export const getUserByNameAndPassword = (username: string, password: string) => {
    const user = users.find(user => user.username === username)
    if(!user) return null
    if(user.password !== password) return null
    return user;
}

export const getUserById = (id: string) => {
    return users.find(user => user.id === id)
}

export const createUser = (username: string, password: string) => {
    if(users.find(user => user.username === username)) return null
    const newUser = {id: uuid(), username, password}
    users.push(newUser)
    return newUser;
}

export const updateUserDetails = (detail: keyof Express.UserDetails, payload: Express.UserDetails[typeof detail]) => {

}
"use strict";
const verifyUser = (user, setValue) => {
    return (user.userName === setValue.userName &&
        user.passWord === setValue.passWord);
};
const bdUser = { userName: "joao", passWord: "12345" };
const setUser = { userName: "joao", passWord: "12345" };
const loggedIn = verifyUser(bdUser, setUser);
console.log(loggedIn);
//# sourceMappingURL=stricturalType.js.map
type VerifyUserFn = (user: User, sentValue: User) => boolean;
type User = { userName: string; passWord: string };

const verifyUser: VerifyUserFn = (user, setValue) => {
    return (
        user.userName === setValue.userName &&
        user.passWord === setValue.passWord
    );
};

const bdUser: User = { userName: "joao", passWord: "12345" };
const setUser = { userName: "joao", passWord: "12345" };
const loggedIn = verifyUser(bdUser, setUser);
console.log(loggedIn);

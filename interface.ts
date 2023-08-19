// type User = {
//     name: string,
//     age: number,
//     isVerified: boolean
// }

interface User {
    name: string,
    age: number,
    isVerified: boolean,
  readonly  googleId: string,
    startTrial(): string,
}
interface User{
    githubId:string
}

let users: admin = {
    name: "string",
    age: 8,
    isVerified: true,
    googleId: "test",
    githubId:"github",
    startTrial(): string {
        return "Hello World!!!";
    }
}

interface admin extends User{

}
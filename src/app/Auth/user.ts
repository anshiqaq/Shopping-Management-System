import { Role } from "./role";

export interface User {
    id : number;
    name : string;
    email : string;
    pssword : string;
    dateOfBirth : Date;
    role : Role;
}

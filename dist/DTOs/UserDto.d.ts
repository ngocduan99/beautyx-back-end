import { GenderEnum } from "src/TypeOrms/Profile";
export declare class createUserDto {
    fisrtname: string;
    lastname: string;
    email: string;
    phone: string;
    dateOfBirth: Date;
    city: string;
    address: string;
    gender: GenderEnum;
}
export declare class updateUserDto {
    fisrtname: string;
    lastname: string;
    email: string;
    phone: string;
    DateOfBirth: Date;
    city: string;
    address: string;
    gender: GenderEnum;
}

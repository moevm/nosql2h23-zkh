import { Role, Status } from "./enumerations";

export interface Appeal {
    id: number;
    title: string;
    date: Date;
    description: string;
    status: Status;
    manager: Human;
    geotag: Geotag;
    address: string;
    messages: Message[];
    feedback: string;
    tenant: Human;
    workers: Human[];
}

export interface Geotag {
    latitude: number;
    longitude: number;
}

export interface GeoMarker {
    id: number;
    geotag: Geotag;
    title: string;
}

export interface UnassembledAppeal {
    id: number;
    title: string;
    date: Date;
    description: string;
    address: string;
    geotag: Geotag;
}

export interface Activity {
    id: number;
    title: string;
    dateStart: Date;
    dateEnd?: Date;
    manager: Human;
    description: string;
    address: string;
    geotag: Geotag;
}

export interface UserData {
    id: number;
    phoneNumber: string;
    role: Role;
    name: string;
    address?: string;
}

export interface Human {
    id: number;
    name: string;
}

export interface ActivityCreate {
    title: string;
    dateStart: Date;
    dateEnd?: Date;
    manager: Human;
    description: string;
    address: string;
    geotag: Geotag;
}

export interface Message {
    message: string;
    date: Date;
    owner: Human;
}
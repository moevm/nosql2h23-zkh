import { Role, Status } from "./enumerations";

export interface WorkerTask {
    id: number;
    title: string;
    date: Date;
    description: string;
    status: Status;
    manager: Manager;
    geotag: Geotag;
    address: string;
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

export interface ManagerAppeal {
    id: number;
    title: string;
    date: Date;
    description: string;
    status: Status;
    manager: Manager;
    geotag: Geotag;
    address: string;
}

export interface UnassembledAppeal {
    id: number;
    title: string;
    date: Date;
    description: string;
    address: string;
    geotag: Geotag;
}

export interface ScheduleWork {
    id: number;
    title: string;
    dateStart: Date;
    dateEnd?: Date;
    manager: Manager;
    description: string;
    address: string;
    geotag: Geotag;
}

export interface UserData {
    id: number;
    phoneNumber: string;
    role: Role;
    name: string;
}

export interface Manager {
    id: number;
    name: string;
}

export interface ScheduleWorkCreate {
    title: string;
    dateStart: Date;
    dateEnd?: Date;
    manager: Manager;
    description: string;
    address: string;
    geotag: Geotag;
}
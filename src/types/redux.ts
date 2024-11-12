import { Icandidate } from "./candidate";
import { IUser } from "./user";
import { Ivote } from "./vote";

export enum DataStatus {
    LOADING = "LOADING",
    SUCCESS = "SUCCESS",
    FAILED = "FAILED",
    IDLE = "IDLE"
}

export interface userState {
    error: string | null,
    status: DataStatus,
    user: null | IUser
}

export interface voteState {
    error: string | null,
    status: DataStatus,
    vote: null | Ivote
}

export interface candidateState {
    error: string | null,
    status: DataStatus,
    candidate: Icandidate[]
}
import {USER_SAVE} from "../constants";

export interface IUserState {
  nickName: string;
  realName: string;
  id: string;
  avatarUrl: string;
  gender: number;
  country: string;
  province: string;
  language: string;
  studentNumber: string;

  openid: string;
  sessionKey: string;
  binded: boolean;

  login: boolean;
  receivedData: boolean;
}

const INITIAL_STATE: IUserState = {
  binded: false,
  openid: "",
  sessionKey: "",

  studentNumber: "",
  avatarUrl: "",
  country: "",
  gender: 0,
  language: "",
  province: "",
  realName: "",
  id: "",

  login: false,
  receivedData: false,
  nickName: "",
}

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case USER_SAVE:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}

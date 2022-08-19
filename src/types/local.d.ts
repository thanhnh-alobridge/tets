import { AxiosResponse } from 'axios';
import { ThunkDispatch } from 'redux-thunk';

export type TFunction = (key: string, args?: Record<string, string>) => string;

/**
 * Can be empty
 */
export type EmptiableString = string;

export namespace Redux {
  export interface Action<Payload = any> {
    type: string;
    payload?: Payload;
  }

  export interface ApiActionSet {
    REQUEST: string;
    SUCCESS: string;
    FAILED: string;
  }

  export interface State {
    user: UserState;
    global: GlobalState;
  }

  export interface UserState {
    login: {
      isLoading: boolean;
    };
  }

  export type GetState = () => State;

  export type Dispatch<T = any> = ThunkDispatch<State, any, Action<T>>;

  export interface GlobalState {}
}

export namespace Entity {}

export namespace FormData {}

export type Table<T> = { [key: string]: Required<T> };

export interface AppError<T = any> extends Error {
  message: string;
  response?: AxiosResponse<T>;
}

/* eslint-disable camelcase */

/**
 * format: ...
 */
export type ApiDate = string;
// #region =================================>API_ENTITY
export namespace ApiEntity {
  export interface Error {
    status: number;
    message: string;
    error: Record<string, string[]>;
    message_id: string;
  }
}
// #endregion =================================>API_ENTITY

// #region =================================>API_RESPONSE_DATA
export namespace ApiResponseData {
  export interface RecordInvalidError {
    message_id: ApiEntity.Error['message_id'];
    status: 422;
    message: ApiEntity.Error['message'];
    error: ApiEntity.Error['error'] | null;
  }

  export interface CommonError {
    message_id: ApiEntity.Error['message_id'];
    message: ApiEntity.Error['message'];
  }

  export type RawError = RecordInvalidError | CommonError;

  export interface Standard<Data, Metadata = {}> extends Metadata {
    data: Data;
    metadata: Metadata;
  }

  export interface PaginationResponse<T> {
    data: Array<T>;
    pagination: Pagination;
  }

  export interface Pagination {
    total: number;
    currentPage: number;
    totalPage: number;
  }

  export interface NotificationList<T> {
    unreadQuantity: number;
    data: Array<T>;
    pagination: Pagination;
  }

  export interface ChatRoom {
    id: number;
    fbRoomId: string;
    shopName: string;
    title: string;
    attendanceSchedule: string;
  }
}
// #endregion =================================>API_RESPONSE_DATA

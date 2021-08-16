import { AxiosResponse } from "axios"
import { POSTFIXES } from "../../constants/actionPostfixes"
import { SendRequestAction } from "../../types"

const { REQUEST_POSTFIX } = POSTFIXES

export interface CustomPayload {
  response: any
  actionPayload: any
}

export interface CustomAction {
  type: string
  payload: CustomPayload
}

const createActionWithPostfix = (
  initialAction: SendRequestAction,
  response: AxiosResponse,
  postfix: POSTFIXES
): CustomAction => {
  const newActionType: string =
    initialAction.type.slice(0, initialAction.type.length - REQUEST_POSTFIX.length) + postfix

  return {
    type: newActionType,
    payload: {
      response: response.data,
      actionPayload: initialAction.payload,
    },
  }
}

export default createActionWithPostfix

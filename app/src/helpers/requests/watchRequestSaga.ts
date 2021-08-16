import { call, takeEvery, put } from "redux-saga/effects"

import { AnyAction } from "deox"
import { SendRequestAction } from "../../types"
import { AxiosResponse } from "axios"
import apiCallsMapping from "../../http/apiCallsMapping"
import createActionWithPostfix from "./actionPostfixCreator"
import { POSTFIXES } from "../../constants/actionPostfixes"

function* sendRequest(action: SendRequestAction) {
  try {
    const foundApiCall = apiCallsMapping(action.type)

    const response: AxiosResponse = yield call(foundApiCall, action.payload)

    const generatedSuccessAction = createActionWithPostfix(
      action,
      response,
      POSTFIXES.SUCCESS_POSTFIX
    )

    yield put(generatedSuccessAction)
  } catch (error) {
    yield put(createActionWithPostfix(action, error.message, POSTFIXES.FAIL_POSTFIX))
  }
}

const isApiCallAction = (action: AnyAction): boolean => {
  return action.type.endsWith(POSTFIXES.REQUEST_POSTFIX)
}

function* watchRequest() {
  yield takeEvery(isApiCallAction, sendRequest)
}

export default watchRequest

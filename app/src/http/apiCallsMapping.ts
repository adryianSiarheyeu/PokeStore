import * as testActions from "../pages/LoginPage/actions";
import * as testAPi from "../pages/LoginPage/api";
import {AxiosResponse} from "axios";

type RequestFunctionType = (body: any) => Promise<AxiosResponse>;

type ActionRequestMapping = {
  [key: string]: RequestFunctionType;
};

const apiCallsMapping = (actionType: string): RequestFunctionType => {
  const mapping: ActionRequestMapping = {
    [testActions.LOGIN_REQUEST.type]: testAPi.signIn,
  };

  if (!mapping[actionType]) {
    throw new Error("Not mapped action!");
  }

  return mapping[actionType];
};

export default apiCallsMapping;

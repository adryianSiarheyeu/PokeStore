import * as testActions from "../pages/LoginPage/actions";
import * as testAPi from "../pages/LoginPage/api";
import { AxiosResponse } from "axios";

type ActionRequestMapping = {
  [key: string]: (body: any) => Promise<AxiosResponse>;
};

const apiCallsMapping = (actionType: string) => {
  const mapping: ActionRequestMapping = {
    [testActions.LOGIN_REQUEST.type]: testAPi.signIn,
  };

  if (!mapping[actionType]) {
    throw new Error("Not mapped action!");
  }

  return mapping[actionType];
};

export default apiCallsMapping;

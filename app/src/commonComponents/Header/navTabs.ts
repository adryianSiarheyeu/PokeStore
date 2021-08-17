import {ROUTES} from "../../router/routeNames";

export interface INavItem {
  title: string;
  path: string;
}

export const navTabs: INavItem[] = [
  { title: "Home", path: ROUTES.HOME },
  { title: "Login", path: ROUTES.LOGIN },
];

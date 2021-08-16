type LocalStorageResult = string | null;

export class LocalStorageService {
  public static readonly USER_TOKEN_KEY: string = "token";

  public static getUserToken(): LocalStorageResult {
    return localStorage.getItem(LocalStorageService.USER_TOKEN_KEY);
  }

  public static saveUserToken(token: string): void {
    localStorage.setItem(LocalStorageService.USER_TOKEN_KEY, token);
  }
}

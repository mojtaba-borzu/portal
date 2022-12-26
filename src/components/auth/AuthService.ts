import { Log, User, UserManager } from "oidc-client";
// import { Constants } from '../helpers/Constants'

export class AuthService {
  public userManager: UserManager;

  constructor() {
    const settings = {
      authority: "https://oauth.dgland.tech",
      client_id: "DglandBranchPortal_Production",
      redirect_uri: "http://localhost:3000",
      silent_redirect_uri: "http://localhost:3000",
      post_logout_redirect_uri: "http://localhost:3000",
      response_type: "code",
      scope:
        "Dgland_IdentityAccess_api backoffice openid profile roles email Shopping_Prod",
      // AllowAccessTokensViaBrowser: true
    };

    this.userManager = new UserManager(settings);

    Log.logger = console;
    Log.level = Log.INFO;
  }

  public getUser(): Promise<User | null> {
    return this.userManager.getUser();
  }

  public login(): Promise<void> {
    return this.userManager.signinRedirect();
  }

  public renewToken(): Promise<User> {
    return this.userManager.signinSilent();
  }

  public logout(): Promise<void> {
    return this.userManager.signoutRedirect();
  }
}

export class AccountOptionsModel {
  constructor(
      public verifyEmail: boolean,
      public verifyProviderEmail: boolean,
      public allowUnverifiedLogin: boolean,
      public loginIdentifiers: string,
  ) {  }
}
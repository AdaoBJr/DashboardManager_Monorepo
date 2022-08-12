export interface SignInDomain {
  email: string;
  password: string;
}

export interface CreateAccountDomain {
  firstname: string;
  lastname: string;
  email: string;
  dateOfBirth: string;
  gender: number | string[];
  cpf: string;
  country: string[];
  telephone: string;
  subscribe: boolean;
  password: string;
  password_confirm: string;
}

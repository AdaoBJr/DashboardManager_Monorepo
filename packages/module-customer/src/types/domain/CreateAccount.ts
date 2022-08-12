export interface CreateAccountDomain {
  firstname: string;
  lastname: string;
  email: string;
  dateOfBirth: string;
  gender: string[];
  cpf: string;
  country: string;
  telephone: string;
  subscribe: boolean;
  password: string;
  password_confirm: string;
}

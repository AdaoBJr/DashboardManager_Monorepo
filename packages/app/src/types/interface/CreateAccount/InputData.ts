export interface InputDataCreateAccount {
  firstname: string;
  lastname: string;
  email: string;
  gender: number;
  dateOfBirth: string;
  country: string;
  cpf: string;
  telephone: string;
  subscribe: boolean;
  password: string;
  password_confirm?: string;
}

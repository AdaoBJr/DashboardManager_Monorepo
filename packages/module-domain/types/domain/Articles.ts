export interface InputArticles {
  xs: number | undefined;
  sm: number | undefined;
  id: string;
  name: string;
  label: string;
  mask?: (e: React.ChangeEvent<HTMLInputElement>) => string;
  legend?: string;
  type: 'text' | 'checkbox' | 'select' | 'date' | 'dropdown';
  options?: string[];
}

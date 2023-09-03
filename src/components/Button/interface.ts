export interface IButton {
  type?: 'submit' | 'button';
  dataCy?:string;
  title: string;
  backgroundColor: string;
  hoverColor: string;
  isValid: boolean;
  callBack?: () => void;
}

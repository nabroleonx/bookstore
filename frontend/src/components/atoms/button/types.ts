export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'icon' | 'custom';
  onClick?: () => void;
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  classname?: string;
}

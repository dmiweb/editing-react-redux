import './Input.css'

type InputProps = {
  type: string, 
  name: string, 
  className?: string,
  placeholder?: string, 
  value?: string
  handler?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({ type, name, className, placeholder, value, handler }: InputProps): JSX.Element => {
  return (
    <input
      type={type}
      className={`input ${className}`}
      name={name}
      placeholder={placeholder}
      required
      defaultValue={value}
      onChange={handler}
    />
  );
};

export default Input;
import { ChangeEvent } from "react";

interface FormInputControlProps {
  label: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  ariaDescribedBy: string;
  type: string;
  description?: string;
}

const FormInputControl = (props: FormInputControlProps): JSX.Element => {
  return (
    <div className="form-control">
      <label htmlFor={props.label}>{props.label}</label>
      <input
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        required
        aria-describedby={props.ariaDescribedBy}
      />
      <span>{props.description}</span>
    </div>
  );
};

export { FormInputControl };

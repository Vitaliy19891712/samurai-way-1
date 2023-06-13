import { Field } from "redux-form";
import s from "./FormsControls.module.css";

export const TextArea: React.FC<any> = (props) => {
  const { input, meta, children, ...restProps } = props;
  return (
    <FormsControl {...props}>
      <textarea {...restProps} {...input}></textarea>
    </FormsControl>
  );
};

export const Input: React.FC<any> = (props) => {
  const { input, meta, children, ...restProps } = props;
  return (
    <FormsControl {...props}>
      <input {...restProps} {...input} />
    </FormsControl>
  );
};

export const FormsControl: React.FC<any> = ({ meta: { touched, error }, children }) => {
  const hasError = touched && error;
  return (
    <div className={s.formControl + " " + (hasError ? s.error : "")}>
      <div>{children}</div>
      {hasError && <span>{error}</span>}
    </div>
  );
};

export const createField = (
  name: string,
  component: React.FC<any>,
  placeholder: string | null,
  validate: ((value: string) => "Required" | undefined)[],
  props = {},
  text = ""
) => (
  <div>
    <Field name={name} component={component} placeholder={placeholder} validate={validate} {...props} /> {text}
  </div>
);

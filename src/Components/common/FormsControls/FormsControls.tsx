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

export const FormsControl: React.FC<any> = ({ input, meta, child, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={s.formControl + " " + (hasError ? s.error : "")}>
      <div>{props.children}</div>
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};

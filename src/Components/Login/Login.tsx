import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { Input, createField } from "../common/FormsControls/FormsControls";
import { required } from "../../utils/validators/validators";
import { connect } from "react-redux";
import { login } from "../../Redux/auth-reducer";
import { Redirect } from "react-router-dom";
import { AppStateType } from "../../Redux/redux-store";
import s from "./../common/FormsControls/FormsControls.module.css";

type LoginFormDataType = {
  email: string;
  password: string;
  rememberMe: boolean;
};

type LoginPropsType = {
  login: (email: string, password: string, rememberMe: boolean) => void;
  isAuth: boolean;
};

const Login = (props: LoginPropsType) => {
  const onSibmit = (formData: LoginFormDataType) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };
  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSibmit} />
    </div>
  );
};

const LoginForm = ({ handleSubmit, error, ...restProps }: InjectedFormProps<LoginFormDataType>) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField("email", Input, "Login", [required], null)}
      {createField("password", Input, "Password", [required], { type: "password" })}
      {createField("rememberMe", Input, null, [], { type: "checkbox" }, "Remember me")}
      {error && <div className={s.formSummaryError}>{error}</div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm<LoginFormDataType>({ form: "login" })(LoginForm);

const mapStateToProps = (state: AppStateType) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);

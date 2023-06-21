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
  captcha: string | null;
};

type LoginPropsType = {
  login: (email: string, password: string, rememberMe: boolean, captcha: string | null) => void;
  isAuth: boolean;
  captchaUrl: string | null;
};

const Login = (props: LoginPropsType) => {
  const onSibmit = (formData: LoginFormDataType) => {
    props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
  };
  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSibmit} captchaUrl={props.captchaUrl} />
    </div>
  );
};

const LoginForm = ({
  handleSubmit,
  error,
  captchaUrl,
  ...restProps
}: InjectedFormProps<LoginFormDataType, { captchaUrl: null | string }> & { captchaUrl: null | string }) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField("email", Input, "Login", [required])}
      {createField("password", Input, "Password", [required], { type: "password" })}
      {createField("rememberMe", Input, null, [], { type: "checkbox" }, "Remember me")}
      {captchaUrl && <img src={captchaUrl} />}
      {captchaUrl && createField("captcha", Input, "Sumbol from image", [])}
      {error && <div className={s.formSummaryError}>{error}</div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm<LoginFormDataType, { captchaUrl: null | string }>({ form: "login" })(LoginForm);

const mapStateToProps = (state: AppStateType) => ({
  isAuth: state.auth.isAuth,
  captchaUrl: state.auth.captchaUrl,
});

export default connect(mapStateToProps, { login })(Login);

import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { Input } from "../common/FormsControls/FormsControls";
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

const LoginForm = (props: InjectedFormProps<LoginFormDataType>) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name={"email"} component={Input} placeholder={"Login"} validate={[required]} />
      </div>
      <div>
        <Field name={"password"} component={Input} placeholder={"Password"} validate={[required]} type={"password"} />
      </div>
      <div>
        <Field name={"rememberMe"} component={"input"} type="checkbox" /> Remember me
      </div>
      {props.error && <div className={s.formSummaryError}>{props.error}</div>}
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

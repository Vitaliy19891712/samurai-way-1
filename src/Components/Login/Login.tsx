import { Field, InjectedFormProps, reduxForm } from "redux-form";

type LoginFormDataType = {
  login: string;
  password: string;
  rememberMe: boolean;
};

const Login = () => {
  const onSibmit = (formData: LoginFormDataType) => {
    console.log(formData);
  };
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
        <Field name={"login"} component={"input"} placeholder={"Login"} />
      </div>
      <div>
        <Field name={"password"} component={"input"} placeholder={"Password"} />
      </div>
      <div>
        <Field name={"rememberMe"} component={"input"} type="checkbox" /> Remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm<LoginFormDataType>({ form: "login" })(LoginForm);

export default Login;

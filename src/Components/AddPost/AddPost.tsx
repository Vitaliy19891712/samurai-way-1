import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { maxLength30, required } from "../../utils/validators/validators";
import { TextArea } from "../common/FormsControls/FormsControls";

type AddPostFormDataType = {
  text: string;
};

type AddPostPropsType = {
  addPost: (message: string) => void;
};

const AddPost = (props: AddPostPropsType) => {
  const addPost = (formData: AddPostFormDataType) => {
    props.addPost(formData.text);
  };
  return (
    <div>
      <h1>My post</h1>
      <AddPostReduxForm onSubmit={addPost} />
    </div>
  );
};

const AddPostForm = (props: InjectedFormProps<AddPostFormDataType>) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name={"text"} component={TextArea} placeholder={"Inter text"} validate={[required, maxLength30]} />
      </div>
      <div>
        <button>Add</button>
      </div>
    </form>
  );
};

const AddPostReduxForm = reduxForm<AddPostFormDataType>({ form: "addpost" })(AddPostForm);

export default AddPost;

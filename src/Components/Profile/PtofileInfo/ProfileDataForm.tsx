import { ProfileType } from "../../../Redux/profile-reducer";
import { Input, TextArea, createField } from "../../common/FormsControls/FormsControls";
import { Contacts, ProfileDataPropsType } from "./ProfileInfo";
import { Field, InjectedFormProps, reduxForm } from "redux-form";

export type EditProfileFormDataType = {
  fullName: string;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  aboutMe: string;
};

const ProfileDataForm = (props: InjectedFormProps<EditProfileFormDataType>) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <button>save</button>
      </div>

      <div>
        <b>My full name: </b> {createField("fullName", Input, "Full name", [])}
      </div>
      <div>
        <b>Looking for a job: </b>
        {createField("lookingForAJob", Input, "", [], { type: "checkbox" })}
      </div>
      <div>
        <b>My professional skills:</b> {createField("lookingForAJobDescription", TextArea, "My professional skills", [])}
      </div>
      <div>
        <b>Contacts: </b>
        {/* {props.profile &&
          Object.keys(props.profile.contacts).map((key) => {
            <Contacts contactTitle={key} contactValue={props.profile?.contacts[key]} />;
          })} */}
      </div>
      <div>
        <b>About me: </b>
        {createField("aboutMe", TextArea, "About me", [])}
      </div>
    </form>
  );
};

export const ProfileDataFormReduxForm = reduxForm<EditProfileFormDataType>({ form: "editProfile" })(ProfileDataForm);

import React from "react";
import { ProfileType } from "../../../Redux/profile-reducer";
import { Input, TextArea, createField } from "../../common/FormsControls/FormsControls";
import { InjectedFormProps, reduxForm } from "redux-form";

export type EditProfileFormDataType = {
  fullName: string;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  aboutMe: string;
  contacts: ContactsType;
};
type ContactsType = {
  [facebook: string]: string | null;
  website: string | null;
  vk: string | null;
  twitter: string | null;
  instagram: string | null;
  youtube: string | null;
  github: string | null;
  mainLink: string | null;
};
const ProfileDataForm: React.FC<InjectedFormProps<EditProfileFormDataType, { profile: ProfileType }> & { profile: ProfileType }> = ({
  error,
  handleSubmit,
  profile,
}) => {
  console.log(profile?.contacts);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <button>save</button>
      </div>
      {error && <div>{error}</div>}
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

        {profile?.contacts &&
          Object.keys(profile.contacts).map((key) => {
            <div key={key}>
              <b>{key}:</b> {createField("contacts." + key, Input, key, [])}
            </div>;
          })}
      </div>
      <div>
        <b>About me: </b>
        {createField("aboutMe", TextArea, "About me", [])}
      </div>
    </form>
  );
};

export const ProfileDataFormReduxForm = reduxForm<EditProfileFormDataType, { profile: ProfileType }>({ form: "editProfile" })(ProfileDataForm);

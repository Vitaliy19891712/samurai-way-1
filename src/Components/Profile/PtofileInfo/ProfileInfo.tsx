import { ChangeEvent, useState } from "react";
import { ProfileType } from "../../../Redux/profile-reducer";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import { EditProfileFormDataType, ProfileDataFormReduxForm } from "./ProfileDataForm";
type ProfileInfoType = {
  profile: ProfileType;
  status: string;
  updateStatus: (status: string) => void;
  isOwner: boolean;
  savePhoto: (photo: File) => void;
  saveProfile: (profile: EditProfileFormDataType) => void;
};

export function ProfileInfo(props: ProfileInfoType) {
  const [editMode, setEditMode] = useState(false);

  if (!props.profile) {
    return <Preloader />;
  }
  let photo =
    props.profile.photos?.large !== null ? (
      <div>
        <img src={props.profile.photos?.large} alt="avatar" />
      </div>
    ) : (
      <div>{<img src="https://avatars.mds.yandex.net/i?id=150e3ccfcc5d7d099bfe9a3b0c3ccf0a0536312d-8253063-images-thumbs&n=13" alt="" />}</div>
    );

  const onMainFotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      props.savePhoto(e.target.files[0]);
    }
  };
  const onSibmit = (formData: EditProfileFormDataType) => {
    // debugger;
    props.saveProfile({ ...formData });
  };
  return (
    <div>
      {photo}
      {props.isOwner && <input type={"file"} onChange={onMainFotoSelected} />}

      <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
      {editMode ? (
        <ProfileDataFormReduxForm initialValues={props.profile} onSubmit={onSibmit} />
      ) : (
        <ProfileData goToEditMide={() => setEditMode(true)} profile={props.profile} isOwner={props.isOwner} />
      )}
    </div>
  );
}

type ContactsPropsType = {
  contactTitle: string;
  contactValue: string | null | undefined;
};
export const Contacts = (props: ContactsPropsType) => {
  return (
    <>
      <b>{props.contactTitle}:</b>
      {props.contactValue}
    </>
  );
};

export type ProfileDataPropsType = {
  profile: ProfileType;
  isOwner: boolean;
  goToEditMide: () => void;
};

const ProfileData = (props: ProfileDataPropsType) => {
  return (
    <>
      {props.isOwner && (
        <div>
          <button onClick={props.goToEditMide}>edit</button>
        </div>
      )}
      <div>
        <b>My full name: </b> {props.profile?.fullName}
      </div>
      <div>
        <b>Looking for a job: </b>
        {props.profile?.lookingForAJob ? "yes" : "no"}
      </div>
      {props.profile?.lookingForAJob && (
        <div>
          <b>My professional skills:</b> {props.profile.lookingForAJobDescription}
        </div>
      )}
      <div>
        <b>Contacts: </b>
        {props.profile?.contacts &&
          Object.keys(props.profile.contacts).map((key) => {
            <Contacts contactTitle={key} contactValue={props.profile?.contacts?.[key]} />;
          })}
      </div>
      {props.profile?.aboutMe && (
        <div>
          <b>About me: </b>
          {props.profile.aboutMe}
        </div>
      )}
    </>
  );
};

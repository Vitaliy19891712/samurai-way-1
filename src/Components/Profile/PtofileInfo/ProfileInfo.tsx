import { ProfileType } from "../../../Redux/profile-reducer";
import Preloader from "../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
type ProfileInfoType = {
  profile: ProfileType;
  status: string;
  updateStatus: (status: string) => void;
};

export function ProfileInfo(props: ProfileInfoType) {
  if (!props.profile) {
    return <Preloader />;
  }
  let photo =
    props.profile.photos.large !== null ? (
      <div>
        <img src={props.profile.photos.large} alt="" />
      </div>
    ) : (
      <div>{<img src="https://avatars.mds.yandex.net/i?id=150e3ccfcc5d7d099bfe9a3b0c3ccf0a0536312d-8253063-images-thumbs&n=13" alt="" />}</div>
    );

  let contactsList = [];
  for (let key in props.profile.contacts) {
    if (props.profile.contacts[key]) {
      contactsList.push(props.profile.contacts[key]);
    }
  }

  return (
    <div>
      {photo}
      <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
      <div>My full name: {props.profile.fullName}</div>
      <div>Work: {props.profile.lookingForAJobDescription}</div>
      <div>List contacts:</div>
      <ul>
        {contactsList.map((c, index) => (
          <li key={index}>
            <a href="">{c}</a>
          </li>
        ))}
      </ul>
      <div>Описание</div>
    </div>
  );
}

import { ProfileType } from "../../../Redux/profile-reducer";
import Preloader from "../../Preloader/Preloader";
import s from "./ProfileInfo.module.css";

type ProfileInfoType = {
  profile: ProfileType;
};

export function ProfileInfo(props: ProfileInfoType) {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div>
      <img
        className={s.long}
        src="https://thumbs.dreamstime.com/b/%D1%88%D0%B8%D1%80%D0%BE%D0%BA%D0%B0%D1%8F-%D0%BF%D0%B0%D0%BD%D0%BE%D1%80%D0%B0%D0%BC%D0%B0-%D0%B4%D0%BE%D1%80%D0%BE%D0%B3%D0%B8-%D0%B0%D1%81%D1%84%D0%B0%D0%BB%D1%8C%D1%82%D0%B0-%D0%B2-%D1%81%D0%B5%D0%BB%D1%8C%D1%81%D0%BA%D0%BE%D0%B9-%D0%BC%D0%B5%D1%81%D1%82%D0%BD%D0%BE%D1%81%D1%82%D0%B8-%D0%BB%D0%B5%D1%82%D0%BD%D0%B8%D0%B9-%D0%B4%D0%B5%D0%BD%D1%8C-%D0%BD%D0%B0-214241529.jpg"
        alt="Logo"
      />
      <div>
        <img src={props.profile.photos.large} alt="" />
      </div>
      <div>My full name: {props.profile.fullName}</div>
      <div>Work: {props.profile.lookingForAJobDescription}</div>
      <div>List contacts:</div>
      <ul>
        {props.profile.contacts.facebook && <li>{props.profile.contacts.facebook}</li>}
        {props.profile.contacts.facebook && <li>{props.profile.contacts.github}</li>}
        {props.profile.contacts.facebook && <li>{props.profile.contacts.instagram}</li>}
        {props.profile.contacts.facebook && <li>{props.profile.contacts.mainLink}</li>}
        {props.profile.contacts.facebook && <li>{props.profile.contacts.twitter}</li>}
        {props.profile.contacts.facebook && <li>{props.profile.contacts.vk}</li>}
        {props.profile.contacts.facebook && <li>{props.profile.contacts.website}</li>}
        {props.profile.contacts.facebook && <li>{props.profile.contacts.youtube}</li>}
      </ul>
      <div>Описание</div>
    </div>
  );
}

import { ProfileType } from "../../../Redux/profile-reducer";
import Preloader from "../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";
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

  return (
    <div>
      {/* <img
        className={s.long}
        src="https://thumbs.dreamstime.com/b/%D1%88%D0%B8%D1%80%D0%BE%D0%BA%D0%B0%D1%8F-%D0%BF%D0%B0%D0%BD%D0%BE%D1%80%D0%B0%D0%BC%D0%B0-%D0%B4%D0%BE%D1%80%D0%BE%D0%B3%D0%B8-%D0%B0%D1%81%D1%84%D0%B0%D0%BB%D1%8C%D1%82%D0%B0-%D0%B2-%D1%81%D0%B5%D0%BB%D1%8C%D1%81%D0%BA%D0%BE%D0%B9-%D0%BC%D0%B5%D1%81%D1%82%D0%BD%D0%BE%D1%81%D1%82%D0%B8-%D0%BB%D0%B5%D1%82%D0%BD%D0%B8%D0%B9-%D0%B4%D0%B5%D0%BD%D1%8C-%D0%BD%D0%B0-214241529.jpg"
        alt="Logo"
      /> */}
      {photo}
      <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
      <div>My full name: {props.profile.fullName}</div>
      <div>Work: {props.profile.lookingForAJobDescription}</div>
      <div>List contacts:</div>
      <ul>
        {props.profile.contacts.facebook && (
          <li>
            <a href="">{props.profile.contacts.facebook}</a>
          </li>
        )}
        {props.profile.contacts.github && (
          <li>
            <a href="">{props.profile.contacts.github}</a>
          </li>
        )}
        {props.profile.contacts.instagram && (
          <li>
            <a href="">{props.profile.contacts.instagram}</a>
          </li>
        )}
        {props.profile.contacts.mainLink && (
          <li>
            <a href="">{props.profile.contacts.mainLink}</a>
          </li>
        )}
        {props.profile.contacts.twitter && (
          <li>
            <a href="">{props.profile.contacts.twitter}</a>
          </li>
        )}
        {props.profile.contacts.vk && (
          <li>
            <a href="">{props.profile.contacts.vk}</a>
          </li>
        )}
        {props.profile.contacts.website && (
          <li>
            <a href="">{props.profile.contacts.website}</a>
          </li>
        )}
        {props.profile.contacts.youtube && (
          <li>
            <a href="">{props.profile.contacts.youtube}</a>
          </li>
        )}
      </ul>
      <div>Описание</div>
    </div>
  );
}

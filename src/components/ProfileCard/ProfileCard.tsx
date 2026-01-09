import style from "./ProfileCard.module.css"
interface Profile {
  avatar: string;
  name: string;
  description: string;
}

function ProfileCard({ avatar, name, description }: Profile) {
  return (
    <div className={style.container}>
      <img className={style.image} src={avatar} alt="User avatar" />
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
}
export default ProfileCard;

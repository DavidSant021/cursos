import style from "./style.module.css"

export default function Profile({avatar, name, bio, phone, email, githubUrl, linkedinUrl, twitterUrl}) {
    return (
        <div className={style.container}>
            <img className={style.avatarImg} src={avatar} alt="Foto" />
            <h1 className={style.titleContent}>{name}</h1>
            <p className={style.informations}>{bio}</p>
            <p className={style.informations}>{phone}</p>
            <p className={style.informations}>{email}</p>
            <a className={style.socialMedia} href={githubUrl} >GitHub</a>
            <a className={style.socialMedia} href={linkedinUrl} >LinkedIn</a>
            <a className={style.socialMedia} href={twitterUrl} >Twitter</a>
        </div>
    )
}
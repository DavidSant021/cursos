import style from "./style.module.css"

export default function Profile({avatar, name, bio, phone, email, githubUrl, linkedinUrl, twitterUrl}) {
    return (
        <div className={style.container}>
            <img className={style.avatarImg} src={avatar} alt="Foto" />
            <div className={style.div}>
                <h1 className={style.titleContent}>{name}</h1>
            </div>
            <div className={style.div}>
                <p className={style.informations}>{bio}</p>
            </div>
            <div className={style.div}>
            <p className={style.informations}>{phone}</p>
            </div>
            <div className={style.div}>
            <p className={style.informations}>{email}</p>
            </div>
            <a style={{marginTop: "10px"}} className={style.socialMedia} href={githubUrl} target="_blank" >GitHub</a>
            <a className={style.socialMedia} href={linkedinUrl} target="_blank" >LinkedIn</a>
            <a className={style.socialMedia} href={twitterUrl} target="_blank" >Twitter</a>
        </div>
    )
}
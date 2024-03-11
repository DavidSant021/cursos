import LinkButton from "../LinkButton"
import ProfileSection from "../ProfileSection"
import Title from "../Title"
import styles from "./style.module.css"

export default function Profile({avatar, name, bio, phone, email, githubUrl, linkedinUrl, twitterUrl}) {
    return (
        <div className={styles.container}>
            <img className={styles.avatar} src={avatar} alt={name} />
            <Title>
                {name}
            </Title>
            <ProfileSection>
                {bio}
            </ProfileSection>
            <ProfileSection>
                {phone}
            </ProfileSection>
            <ProfileSection>
                {email}
            </ProfileSection>
            <ProfileSection>
                <div className={styles.links}>
                    <LinkButton href={githubUrl}>
                        GitHub
                    </LinkButton>
                    <LinkButton href={linkedinUrl}>
                        LinkedIn
                    </LinkButton>
                    <LinkButton href={twitterUrl}>
                        Twitter
                    </LinkButton>
                </div>
            </ProfileSection>
        </div>
    )
}
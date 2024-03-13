import { useState } from "react"
import LinkButton from "../LinkButton"
import ProfileSection from "../ProfileSection"
import Title from "../Title"
import styles from "./style.module.css"


export default function Profile({ avatar, name, bio, phone, email, githubUrl, linkedinUrl, twitterUrl }) {

    // [valor, funçãoModificadora]
    const [followText, setFollowText] = useState("Follow")

    function handleClick() {
        setFollowText("Following")
    }

    return (
        <div className={styles.container}>
            <img className={styles.avatar} src={avatar} alt={name} />
            <Title>
                <span>{name}</span>
                <button
                    className={styles.followButton}
                    onClick={handleClick}
                >
                    {followText}
                </button>
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
            <ProfileSection
                className={styles.links}
                id="links-section"
                data-test="some value"
                aria-label="social links"
            >
                <LinkButton href={githubUrl}>
                    GitHub
                </LinkButton>
                <LinkButton href={linkedinUrl}>
                    LinkedIn
                </LinkButton>
                <LinkButton href={twitterUrl}>
                    Twitter
                </LinkButton>
            </ProfileSection>
        </div>
    )
}
import Title from "./Title"
import styles from "./styles.module.css"
import ProfileSection from "./ProfileSection"
import LinkButton from "../Linkbutton"
import { useState } from "react"



export default function Profile(props) {
    // [valorVariavel, funcaoModificadora]
    const [followText, setFollowText] = useState("Follow")
   
    function handleClick(ev) {
       alert("Você agora está seguindo!")
       setFollowText("Following")
    }

    return(
        <div className={styles.container}>
            <img className={styles.avatar}src={props.avatar} alt={props.name}/>
            <Title>
                <span>{props.name}</span>
                <button
                className={styles.followButton}
                onClick={handleClick}
                >
                    {followText}
                </button>
            </Title>
           
            <ProfileSection>{props.bio}</ProfileSection>
            <ProfileSection>{props.email}</ProfileSection>
            <ProfileSection>{props.phone}</ProfileSection> 
            <ProfileSection
             className={styles.links}
             id="links-section"
             data-text="some value"
             aria-label="social links">
            
            <LinkButton href={props.githubUrl}>Github</LinkButton>
            <LinkButton href={props.LinkedinUrl}>Linkedin</LinkButton>
            <LinkButton href={props.Twiter}>TwitTer</LinkButton>
           
            </ProfileSection>  
            </div>  
    )
}
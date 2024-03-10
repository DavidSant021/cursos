import avatar from "./assets/AvatarMaker.png"
import Profile from "./components/Profile"


export default function App() {
  return (
    <>
      <Profile avatar={avatar} name="David Santiago" bio="Full-stack javascript developer at Acme Inc." phone="+55 11987654321" email="devdavidsant21@gmail.com" githubUrl="https://github.com/DavidSant021" linkedinUrl="https://www.linkedin.com/in/david-santiago-251728292/" twitterUrl="https://twitter.com/?lang=pt-br" />
    </>
  )
}
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ExternalLink } from "../../../../components/externalLinks";
import { ProfileContainer, ProfileDetails, ProfilePicture } from "./styles";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";

export function Profile() {
  return (
    <ProfileContainer>
      <ProfilePicture src="http://github.com/NatalyeCavalieri.png" />
      <ProfileDetails>
        <header>
          <h1>Natalye Cavalieri</h1>
          <ExternalLink text="Github" href="#" />
        </header>
        <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>
        <ul>
          <li>
            <FontAwesomeIcon icon={faGithub}/>
            Natalye Cavalieri
          </li>
          <li>
            <FontAwesomeIcon icon={faBuilding}/>
            Rocketseat
          </li>
          <li>
            <FontAwesomeIcon icon={faUserGroup}/>
            123 seguidores
          </li>
        </ul>
      </ProfileDetails>
    </ProfileContainer>
  );
}

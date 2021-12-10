import React from 'react';

import { ProfileContainer, Container, Content, Header } from './styles';
import { ProfileProps } from './types';

const Profile: React.FC = () => {
  const [profileData, setProfileData] = React.useState<ProfileProps>();

  React.useEffect(() => {
    fetch('https://api.github.com/users/pedrohenrque')
      .then(res => res.json())
      .then(data => setProfileData(data));
  }, []);

  if (!profileData) return <h1>loading...</h1>;

  return (
    <Container>
      <Content>
        <ProfileContainer>
          <Header>
            <div>
              <h1>{profileData.name}</h1>
              <p>{profileData.login}</p>
            </div>
          </Header>
        </ProfileContainer>
      </Content>
    </Container>
  );
};

export default Profile;

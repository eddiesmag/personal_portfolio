import React, { lazy, Suspense, useEffect, useState } from 'react';
import Loading from '../../components/loading/loading';
import { gitHubData } from '../../portfolio';

const UserProfileCard = lazy(() =>
  import('../../components/profile/userProfileCard')
);

const FailedLoading = () => null;
const renderLoading = () => <Loading />;

const Profile = () => {
  const [userProfile, setUserProfile] = useState([]);

  useEffect(() => {
    const getProfileData = () => {
      fetch('/githubProfile.json')
        .then((result) => {
          if (result.ok) {
            return result.json();
          }
        })
        .then((response) => {
          const userData = response.data.user;
          setGitHubProfile(userData);
        })
        .catch((error) => console.error({ error }));
    };

    getProfileData();
  }, []);

  const setGitHubProfile = (user) => {
    setUserProfile(user);
  };
  if (
    !(
      typeof userProfile === 'string' &&
      userProfile instanceof String &&
      gitHubData.showGitHubProfile
    )
  ) {
    return (
      <Suspense fallback={renderLoading()}>
        <UserProfileCard data={userProfile} />
      </Suspense>
    );
  }
  return <FailedLoading />;
};

export default Profile;

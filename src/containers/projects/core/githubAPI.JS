import axios from 'axios';

const {
  REACT_APP_GITHUB_API_BASE_URL,
  REACT_APP_GITHUB_USERNAME,
  REACT_APP_GITHUB_TOKEN,
} = process.env;

async function getGithubPinnedRepos() {
  try {
    const reponse = await axios.get(
      `${REACT_APP_GITHUB_API_BASE_URL}/users/${REACT_APP_GITHUB_USERNAME}/pinned`,
      {
        headers: {
          Authorization: `token ${REACT_APP_GITHUB_TOKEN}`,
        },
      }
    );

    return reponse.data;
  } catch (error) {
    throw error;
  }
}
export { getGithubPinnedRepos };

const fs = require('fs');
const https = require('https');
const process = require('process');
require('dotenv').config();

const { GITHUB_TOKEN, GITHUB_USERNAME, USE_GITHUB_DATA, GITHUB_API_BASE_URL } =
  process.env;

const ERROR = {
  noUserName:
    'Github Username was not defined. Please set all relavant environment variables.',
  requestFailed:
    "The request to Github didn't suceed. Check if Github token in your .env file is correct.",
};

if (USE_GITHUB_DATA === 'true') {
  if (GITHUB_USERNAME === undefined) {
    throw new Error(ERROR.noUserName);
  }
  console.log(`Fetching profile data for ${GITHUB_USERNAME}`);

  const data = JSON.stringify({
    query: `
{
  user(login:"${GITHUB_USERNAME}") { 
    name
    bio
    avatarUrl
    location
    pinnedItems(first: 6, types: [REPOSITORY]) {
      totalCount
      edges {
          node {
            ... on Repository {
              name
              description
              forkCount
              stargazers {
                totalCount
              }
              url
              id
              diskUsage
              primaryLanguage {
                name
                color
              }
            }
          }
        }
      }
    }
}
`,
  });

  const default_options = {
    hostname: `${GITHUB_API_BASE_URL}`,
    port: 443,
    path: '/graphql',
    method: 'POST',
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      'User-Agent': 'Node',
    },
  };

  const req = https.request(default_options, (res) => {
    let data = '';

    console.log(`statusCode: ${res.statusCode}`);

    if (res.statusCode !== 200) {
      throw new Error(ERROR.requestFailed);
    }

    res.on('data', (dt) => {
      data += dt;
    });

    res.on('end', () => {
      fs.writeFile('./public/githubProfile.json', data, (err) => {
        if (err) return console.log(err);
        console.log('saved data to public/githubProfile.json');
      });
    });

    res.on('error', (err) => {
      throw err;
    });
  });

  req.write(data);
  req.end();
}

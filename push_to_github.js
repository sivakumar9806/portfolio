const git = require('isomorphic-git');
const http = require('isomorphic-git/http/node');
const fs = require('fs');

const dir = __dirname;
const token = process.argv[2] || process.env.GITHUB_TOKEN;

if (!token) {
  console.log('\nUsage: node push_to_github.js <YOUR_GITHUB_PERSONAL_ACCESS_TOKEN>');
  console.log('Or set the GITHUB_TOKEN environment variable.\n');
  process.exit(1);
}

async function pushRepo() {
  try {
    console.log('Pushing main branch to https://github.com/sivakumar9806/portfolio.git ...');
    const pushResult = await git.push({
      fs,
      http,
      dir,
      remote: 'origin',
      ref: 'main',
      force: true,
      onAuth: () => ({ username: token })
    });
    console.log('Push successful!', pushResult);
  } catch (err) {
    console.error('Push error:', err.message || err);
    if (err.data) console.error('Details:', err.data);
  }
}

pushRepo();

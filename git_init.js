const git = require('isomorphic-git');
const http = require('isomorphic-git/http/node');
const fs = require('fs');
const path = require('path');

const dir = __dirname;

async function setupGitRepo() {
  try {
    console.log('1. Initializing Git repository in:', dir);
    await git.init({ fs, dir, defaultBranch: 'main' });

    console.log('2. Staging files...');
    const filesToStage = [
      'index.html',
      'styles.css',
      'data.js',
      'app.js',
      'server.js',
      'package.json',
      'README.md',
      '.gitignore'
    ];

    for (const file of filesToStage) {
      if (fs.existsSync(path.join(dir, file))) {
        await git.add({ fs, dir, filepath: file });
        console.log(`   + Added ${file}`);
      }
    }

    console.log('3. Committing initial portfolio code...');
    const sha = await git.commit({
      fs,
      dir,
      author: {
        name: 'Siva Kumar Vanjunathan',
        email: 'vsivakumar6198@gmail.com'
      },
      message: 'feat: initial release of Siva Kumar Vanjunathan UI/UX & Product Design portfolio (SignalIQ aesthetic)'
    });
    console.log('   Commit created:', sha);

    console.log('4. Setting remote origin to https://github.com/sivakumar9806/portfolio.git...');
    await git.addRemote({
      fs,
      dir,
      remote: 'origin',
      url: 'https://github.com/sivakumar9806/portfolio.git',
      force: true
    });

    console.log('Git repository initialized and committed successfully on main branch!');
  } catch (err) {
    console.error('Error setting up git:', err);
  }
}

setupGitRepo();

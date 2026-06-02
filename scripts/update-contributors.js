import fs from 'fs';
import path from 'path';

const README_PATH = path.join(process.cwd(), 'README.md');
const REPO = 'Remind-Karo/RemindKaro';

async function updateContributors() {
  console.log('🔄 Fetching contributors from GitHub API...');

  try {
    const response = await fetch(
      `https://api.github.com/repos/${REPO}/contributors`,
      {
        headers: {
          'User-Agent': 'RemindKaro-Contributor-Updater',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`GitHub API returned status ${response.status}`);
    }

    const contributors = await response.json();
    console.log(`✅ Found ${contributors.length} contributors.`);

    // Build the dynamic contributor HTML grid
    let gridHtml = '\n<table align="center">\n  <tr>\n';
    const cols = 5; // number of contributors per row

    contributors.forEach((contributor, index) => {
      if (index > 0 && index % cols === 0) {
        gridHtml += '  </tr>\n  <tr>\n';
      }

      gridHtml += `    <td align="center" valign="top" width="14%">
      <a href="${contributor.html_url}">
        <img src="${contributor.avatar_url}&s=100" width="80px" style="border-radius: 50%;" alt="${contributor.login}"/>
        <br />
        <sub><b>${contributor.login}</b></sub>
      </a>
      <br />
      <sub>Contributions: ${contributor.contributions}</sub>
    </td>\n`;
    });

    // Close table
    gridHtml += '  </tr>\n</table>\n';

    // Read current README
    if (!fs.existsSync(README_PATH)) {
      console.error('❌ README.md not found!');
      return;
    }

    let readmeContent = fs.readFileSync(README_PATH, 'utf8');

    // Regex to locate the start and end comments
    const regex =
      /(<!-- START_CONTRIBUTORS -->)([\s\S]*?)(<!-- END_CONTRIBUTORS -->)/g;

    if (!readmeContent.includes('<!-- START_CONTRIBUTORS -->')) {
      console.warn('⚠️ Contributor comments not found. Adding placeholders...');
      // Insert placeholders if not exist
      readmeContent = readmeContent.replace(
        '## ❤️ Contributors\n\nThanks to all contributors who helped build RemindKaro!\n',
        '## ❤️ Contributors\n\nThanks to all contributors who helped build RemindKaro!\n\n<!-- START_CONTRIBUTORS -->\n<!-- END_CONTRIBUTORS -->\n'
      );
    }

    const updatedReadme = readmeContent.replace(regex, `$1\n${gridHtml}\n$3`);
    fs.writeFileSync(README_PATH, updatedReadme, 'utf8');

    console.log(
      '🎉 README.md successfully updated with dynamic contributors list!'
    );
  } catch (error) {
    console.error('❌ Failed to update contributors:', error);
  }
}

updateContributors();

/**
 * RemindKaro — Automatic GitHub Issues Importer
 *
 * This script parses ISSUES.md and automatically imports all structured
 * contributor tasks directly into your GitHub Repository's Issues tab
 * using the GitHub CLI (`gh`).
 *
 * Requirements:
 * 1. Install GitHub CLI: `brew install gh`
 * 2. Authenticate: `gh auth login`
 * 3. Run script: `node scripts/import-issues.js`
 */

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const ISSUES_FILE = path.join(process.cwd(), 'ISSUES.md');

function run() {
  if (!fs.existsSync(ISSUES_FILE)) {
    console.error('❌ ISSUES.md file not found at the root!');
    process.exit(1);
  }

  // Check if GitHub CLI is installed
  try {
    execSync('gh --version', { stdio: 'ignore' });
  } catch (error) {
    console.warn('⚠️ GitHub CLI (`gh`) is not installed or not in PATH.');
    console.warn(
      '👉 Please install it (`brew install gh` or download it) and authenticate (`gh auth login`).'
    );
    console.warn(
      '👉 I will print the commands instead so you can review them!\n'
    );
  }

  const content = fs.readFileSync(ISSUES_FILE, 'utf8');

  // Regex to match markdown issues
  // Example: ### 1. ssoc-e1: Word Count & Character Limit on Task Descriptions
  const issueRegex =
    /###\s+\d+\.\s+(ssoc-[emh]\d+:\s+.*?)(?=\n###\s+\d+\.\s+|\n##\s+|\n*$)/gs;
  const issues = [];
  let match;

  while ((match = issueRegex.exec(content)) !== null) {
    const rawIssue = match[1];
    const lines = rawIssue.split('\n');
    const title = lines[0].trim();

    // Parse tags
    const tagsLine = lines.find((l) => l.includes('**Tags:**'));
    let labels = ['ssoc2026'];
    if (tagsLine) {
      const extractedTags = tagsLine
        .replace(/-?\s*\*\*Tags:\*\*/, '')
        .split(',')
        .map((t) => t.replace(/[`*_\s]/g, '').trim())
        .filter((t) => t.length > 0);

      // Map labels
      extractedTags.forEach((tag) => {
        if (tag === 'easy') labels.push('easy', 'good first issue');
        else if (tag === 'medium') labels.push('medium');
        else if (tag === 'hard') labels.push('hard');
        else if (tag !== 'ssoc2026') labels.push(tag);
      });
    }

    // Keep unique labels
    labels = [...new Set(labels)];

    // Body
    const bodyContent = lines.slice(1).join('\n').trim();

    issues.push({ title, body: bodyContent, labels });
  }

  console.log(`🚀 Found ${issues.length} structured issues in ISSUES.md.\n`);

  // Ensure all unique labels exist on GitHub before creating issues
  const allLabels = new Set();
  issues.forEach((issue) => issue.labels.forEach((l) => allLabels.add(l)));
  console.log(
    `🏷️  Ensuring GitHub labels exist: ${Array.from(allLabels).join(', ')}`
  );

  for (const label of allLabels) {
    try {
      let color = '5e6ad2'; // Default lavender
      if (label === 'easy' || label === 'good first issue')
        color = '0e8a16'; // Green
      else if (label === 'medium')
        color = 'fbca04'; // Yellow
      else if (label === 'hard')
        color = 'd93f0b'; // Red
      else if (label === 'ssoc2026') color = 'ffd700'; // Gold

      execSync(
        `gh label create "${label}" --color "${color}" --description "Label for SSOC 2026 / Contributor task" 2>/dev/null`,
        { stdio: 'ignore' }
      );
    } catch (e) {
      // Already exists, ignore
    }
  }
  console.log('✅ GitHub labels ensured!\n');

  for (const issue of issues) {
    const labelString = issue.labels.join(',');
    console.log(`📦 Preparing: "${issue.title}" [Labels: ${labelString}]`);

    // Write body to a temp file to avoid bash command length or escaping issues
    const tempFile = path.join(process.cwd(), 'temp-issue-body.md');
    fs.writeFileSync(tempFile, issue.body, 'utf8');

    const command = `gh issue create --title "${issue.title.replace(/"/g, '\\"')}" --body-file "${tempFile}" --label "${labelString}"`;

    try {
      // Execute command
      const output = execSync(command, { encoding: 'utf8' });
      console.log(`   ✅ Created: ${output.trim()}`);
    } catch (e) {
      console.log(`   ❌ Command would be: ${command}\n`);
    } finally {
      if (fs.existsSync(tempFile)) {
        fs.unlinkSync(tempFile);
      }
    }
  }

  console.log('\n🏁 Importer complete!');
}

run();

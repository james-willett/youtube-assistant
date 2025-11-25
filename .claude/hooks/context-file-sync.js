#!/usr/bin/env node

/**
 * Context File Sync Hook
 *
 * Keeps CLAUDE.md, GEMINI, and AGENTS files synchronized across your project.
 * This ensures you can switch between Claude Code, Gemini, and Codex seamlessly
 * while maintaining consistent project context.
 *
 * Triggers: When any of the three files (CLAUDE.md, GEMINI, AGENTS) are modified
 */

const fs = require("fs");
const path = require("path");

// File paths
const FILES = {
  claude: "CLAUDE.md",
  gemini: "GEMINI.md",
  agents: "AGENTS.md",
};

// Get the project root directory
const projectRoot = process.cwd();

/**
 * Read a file safely, return null if it doesn't exist
 */
function readFileSafe(filePath) {
  try {
    return fs.readFileSync(filePath, "utf8");
  } catch (error) {
    return null;
  }
}

/**
 * Write file with content
 */
function writeFile(filePath, content) {
  fs.writeFileSync(filePath, content, "utf8");
}

/**
 * Get the most recently modified file among the three
 */
function getMostRecentFile() {
  let mostRecent = { file: null, mtime: 0 };

  for (const [key, filename] of Object.entries(FILES)) {
    const filePath = path.join(projectRoot, filename);
    try {
      const stats = fs.statSync(filePath);
      if (stats.mtime > mostRecent.mtime) {
        mostRecent = { file: filename, mtime: stats.mtime };
      }
    } catch (error) {
      // File doesn't exist, skip
    }
  }

  return mostRecent.file;
}

/**
 * Main sync function
 */
function syncFiles() {
  console.log("🔄 Context File Sync Hook triggered...");

  // Find which file was most recently modified
  const sourceFile = getMostRecentFile();

  if (!sourceFile) {
    console.log("⚠️  No context files found to sync");
    return;
  }

  console.log(`📄 Source: ${sourceFile}`);

  const sourcePath = path.join(projectRoot, sourceFile);
  const sourceContent = readFileSafe(sourcePath);

  if (!sourceContent) {
    console.log("❌ Could not read source file");
    return;
  }

  // Sync to other files
  let syncedCount = 0;
  for (const [key, filename] of Object.entries(FILES)) {
    if (filename === sourceFile) continue; // Skip the source file

    const targetPath = path.join(projectRoot, filename);
    const targetContent = readFileSafe(targetPath);

    // Only write if content is different (or file doesn't exist)
    if (targetContent !== sourceContent) {
      writeFile(targetPath, sourceContent);
      console.log(`  ✅ Synced to ${filename}`);
      syncedCount++;
    } else {
      console.log(`  ⏭️  ${filename} already up to date`);
    }
  }

  if (syncedCount > 0) {
    console.log(`\n✨ Sync complete! ${syncedCount} file(s) updated.`);
  } else {
    console.log("\n✨ All files already in sync!");
  }
}

// Run the sync
try {
  syncFiles();
} catch (error) {
  console.error("❌ Sync failed:", error.message);
  process.exit(1);
}

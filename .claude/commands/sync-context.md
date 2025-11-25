# Sync Context Files

Synchronizes CLAUDE.md, GEMINI.md, and AGENTS.md to keep them in sync across different AI coding assistants.

## Usage

```
/sync-context
```

## What It Does

1. Detects which context file was most recently modified
2. Uses that file as the "source of truth"
3. Copies its content to the other two files
4. Reports what was synced

## Why You Need This

You use multiple AI coding tools (Claude Code, Gemini, Codex). Each reads a different context file. This command ensures when you update one, you can quickly sync the others, allowing seamless tool switching.

## Implementation

This command runs the sync script located at `.claude/hooks/context-file-sync.js`

## Example Output

```
🔄 Syncing context files...
📄 Source: CLAUDE.md
  ✅ Synced to GEMINI.md
  ✅ Synced to AGENTS.md

✨ Sync complete! 2 file(s) updated.
```

## Tips

- Run this after making significant updates to any context file
- Useful before switching from Claude Code to Gemini or Codex
- Can be called as part of your end-of-day routine (coming soon!)

## Script Path

`.claude/hooks/context-file-sync.js`
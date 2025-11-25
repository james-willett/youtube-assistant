# YouTube Assistant Framework

A comprehensive [Claude Code](https://claude.com/claude-code) framework that streamlines the entire YouTube video production workflow—from script writing to publishing.

## Overview

This framework provides specialized AI agents, commands, and hooks to help YouTube content creators manage their video production process efficiently. Whether you're creating coding tutorials, tool reviews, opinion pieces, or course content, these tools help you work faster and produce better content.

## Features

### Script Writing & Refinement
- **@script-start** - Methodical, step-by-step script creation with guided questions
- **@script-interview** - Generate scripts through conversational interviews (15-25 questions)
- **@script-help** - Get unstuck on specific script sections
- **@script-critic** - Brutally honest, constructive script critiques with ratings

### Production & Publishing
- **@thumbnail-ideas** - Generate 3-5 thumbnail concepts based on your script
- **@script-to-markdown** - Convert filming scripts to viewer-facing companion guides
- **@pre-upload** - Generate YouTube descriptions, tags, pinned comments, and LinkedIn posts

### Project Management
- **@time-tracker** - Track hours spent on video projects
- **/sync-context** - Sync context files across multiple AI tools (Claude Code, Gemini, Codex)

## Quick Start

### Prerequisites
- [Claude Code](https://claude.com/claude-code) installed and configured
- Node.js (for sync functionality)

### Installation

1. Clone this repository:
```bash
git clone <your-repo-url>
cd YouTubeAssistant_251125
```

2. Copy the `.claude/` directory to your video project folder

3. Copy `CLAUDE.md` to your project folder for full framework documentation

4. Start using agents in Claude Code:
```bash
@script-interview  # Start creating a script
```

## Example Workflow

Here's a typical workflow for creating a video:

```bash
# 1. Create your script
@script-interview
# Answer 15-25 questions about your video
# Result: SCRIPT.md created

# 2. Get feedback
@script-critic
# Get honest critique with ratings
# Fix issues with @script-help if needed

# 3. Generate thumbnail ideas
@thumbnail-ideas
# Get 3-5 thumbnail concepts

# 4. Film your video (using SCRIPT.md)

# 5. Create viewer resources
@script-to-markdown
# Result: VIEWER_GUIDE.md for viewers

# 6. Generate publishing metadata
@pre-upload
# Result: All YouTube metadata ready to copy-paste

# 7. Track your time
@time-tracker
# Log hours worked on the project
```

## Project Structure

```
your-video-project/
├── .claude/
│   ├── agents/          # AI agents
│   │   ├── script/      # Script writing agents
│   │   ├── youtube/     # Publishing agents
│   │   └── misc/        # Utility agents
│   ├── commands/        # Slash commands
│   └── hooks/           # Event hooks
├── CLAUDE.md            # Full documentation
├── SCRIPT.md            # Your video script (generated)
├── VIEWER_GUIDE.md      # Companion guide (generated)
├── PUBLISH_METADATA.md  # YouTube metadata (generated)
└── TIME_LOG.md          # Time tracking log (generated)
```

## Content Types Supported

The framework adapts to different content types:

- **Coding Tutorials** - Step-by-step learning with prerequisites and examples
- **Tool/Framework Reviews** - Balanced analysis with pros, cons, and comparisons
- **Opinion Pieces** - Clear thesis with supporting evidence
- **Course Creation Content** - Strategic value with actionable techniques

## Available Agents

### Script Writing
| Agent | Purpose | When to Use |
|-------|---------|-------------|
| `@script-start` | Guided script creation | Starting from scratch with structure |
| `@script-interview` | Conversational script generation | You think better by talking |
| `@script-help` | Fix specific sections | Stuck on intro, transitions, etc. |
| `@script-critic` | Honest critique with ratings | Need feedback before filming |

### Publishing
| Agent | Purpose | When to Use |
|-------|---------|-------------|
| `@thumbnail-ideas` | Generate thumbnail concepts | Script is ready, need thumbnail ideas |
| `@script-to-markdown` | Create viewer guide | Convert script to shareable resource |
| `@pre-upload` | Generate metadata | Video is edited and ready to publish |

### Utilities
| Agent | Purpose | When to Use |
|-------|---------|-------------|
| `@time-tracker` | Track project hours | End of work session |

## Commands

- **/sync-context** - Sync context files across AI tools (Claude Code, Gemini, Codex)

## Tips & Best Practices

### Script Writing
- Start with `@script-interview` if you prefer talking through ideas
- Use `@script-start` for methodical, structured approach
- Always run `@script-critic` before filming to catch issues
- Aim for 7+/10 rating from the critic before filming

### Publishing
- Run `@pre-upload` even if you don't use everything—it saves time
- Pin your comment immediately after publishing
- Share on LinkedIn within 1-2 hours for best reach

### Project Management
- Use `@time-tracker` at the end of every session
- Keep SCRIPT.md and VIEWER_GUIDE.md in version control
- Use `/sync-context` when switching between AI tools

## Documentation

Full documentation is available in `CLAUDE.md`, including:
- Detailed agent descriptions
- Complete workflow examples
- Content type strategies
- Technical implementation details
- Future enhancement roadmap

## Examples

### Generate a Script Through Interview
```
@script-interview

> What's the topic you want to cover?
Gatling stress testing tool

> Why did you choose this topic?
It's underutilized and I want to show how easy it is

[Continue answering 15-25 questions]
[Script automatically generated]
```

### Get Script Feedback
```
@script-critic

Well, well, well... let's see what we have here.

**Hook/Opening: 7/10**
Actually solid. You've got a specific promise and a timeline.

**The Verdict: 6/10**
Has potential. Fix your middle section and you're good to go.
```

## Contributing

This framework is designed to be iterative:
- Agents can be refined based on usage
- New agents can be added as needs arise
- Features can be enhanced incrementally

Feel free to fork and customize for your workflow.

## License

MIT License - See LICENSE file for details

## Author

**James Willett**
Software Engineer and Tech Educator

## Support

For issues or questions:
- Open an issue on GitHub
- Check the full documentation in `CLAUDE.md`
- Explore agent files in `.claude/agents/` for implementation details

---

**Note:** This framework requires [Claude Code](https://claude.com/claude-code) to function. It's designed specifically for the Claude Code environment and makes use of its agent system.

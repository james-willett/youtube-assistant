# YouTube Assistant Framework

A comprehensive Claude Code framework for YouTube content creators, designed to streamline the entire video production workflow from script writing to publishing.

## Project Overview

This framework consists of specialized AI agents, commands, and hooks that help manage the complete YouTube video creation process. Built for content creators who produce coding tutorials, tool reviews, opinion pieces, and course creation content.

**Creator:** James Willett, Software Engineer and Tech Educator
**Focus:** Technical content, tutorials, reviews, and educational videos
**Tools Used:** Claude Code, Gemini, Codex (context files synced across all)

---

## Project Structure

```
youtube-video-project/
├── .claude/
│   ├── agents/
│   │   ├── misc/
│   │   │   ├── time-tracker.md
│   │   │   └── update-docs.md
│   │   ├── notion/
│   │   │   └── notion-assistant.md
│   │   ├── script/
│   │   │   ├── script-critic.md
│   │   │   ├── script-help.md
│   │   │   ├── script-interview.md
│   │   │   ├── script-start.md
│   │   │   └── script-to-markdown.md
│   │   └── youtube/
│   │       ├── pre-upload.md
│   │       └── thumbnail-ideas.md
│   ├── commands/
│   │   └── sync-context.md
│   └── hooks/
│       ├── context-file-sync.js
│       └── context-file-sync.md
├── context/
│   ├── 01-universal-principles.md (framework: 8 laws of YouTube success)
│   └── 02-james-willett-framework.md (framework: content-type patterns)
├── CLAUDE.md (this file)
├── GEMINI.md (synced with CLAUDE.md)
├── AGENTS.md (synced with CLAUDE.md)
├── SCRIPT.md (created by script agents)
├── VIEWER_GUIDE.md (created by script-to-markdown)
├── PUBLISH_METADATA.md (created by pre-upload)
└── TIME_LOG.md (created by time-tracker)
```

---

## Framework Documents

The framework provides the foundation for all content critique and quality assessment. All agents (especially @script-critic) reference these documents to enforce proven YouTube success patterns.

### 📘 Universal Principles (`context/01-universal-principles.md`)

The 8 non-negotiable laws of YouTube success that apply to ALL content types:

1. **Hook Law** - 30 seconds or less to answer "Why should I care?"
2. **Clarity Mandate** - If a 14-year-old with Google can't understand it, you've failed
3. **Focus Doctrine** - Every second must serve the core purpose
4. **Pacing Protocol** - Match speed to complexity and attention span
5. **Engagement Imperative** - Educate AND entertain
6. **Completeness Covenant** - Deliver 100% of the promise
7. **Specificity Standard** - Vague = Valueless, every claim needs proof
8. **Respect Protocol** - Respect viewer intelligence and time

Each principle includes:
- The Law (core requirement)
- Requirements (what must be present)
- Violations (what kills retention)
- The Standard (how to test compliance)

### 📗 James Willett Framework (`context/02-james-willett-framework.md`)

Content-type-specific patterns with required structures:

**Pattern 1: Tutorial Structure**
- Hook → Prerequisites → End Result Teaser → Step-by-Step Build → Testing → Next Steps
- 8-item quality checklist
- Tutorial-specific violations to avoid

**Pattern 2: Review Structure**
- Hook → Context → The Good → The Bad → Comparison → Verdict
- 8-item quality checklist
- Review-specific violations to avoid

**Pattern 3: Opinion Piece Structure**
- Hook → Context Setting → Your Argument → Counterarguments → Implications → Conclusion
- 8-item quality checklist
- Opinion-specific violations to avoid

**Pattern 4: Course Creation Content Structure**
- Hook → The Problem → Solution Framework → Tactical Implementation → Before/After → Action Steps
- 8-item quality checklist
- Course content-specific violations to avoid

**Each pattern includes:**
- Required structure (exact sections needed)
- Specific violations for that content type
- Signature elements expected
- Quality checklist for validation

### 🎯 How Framework Enforcement Works

1. **@script-critic loads both framework documents** before any review
2. **Identifies content type** (Tutorial/Review/Opinion/Course)
3. **Selects appropriate pattern** to enforce
4. **Chooses critic personality** based on primary weaknesses
5. **References specific framework violations** in every critique
6. **Scores framework compliance** (Universal Principles + Pattern Structure + Quality Checklist)

**The framework is law.** Following it = YouTube success. Violating it = algorithm burial.

---

## Available Agents

### 🕒 @time-tracker
**Purpose:** Track time spent on video projects  
**Use when:** Finishing a work session  
**What it does:**
- Prompts for hours worked in current session
- Logs session to TIME_LOG.md with date
- Maintains running total of project hours
- Simple, manual time tracking

**Example usage:**
```
@time-tracker
> How many hours did you work in this session?
3.5 hours
> Notes? (optional)
Completed script and ran through critique
✅ Logged 3.5 hours. Total project time: 12 hours
```

---

### ✍️ @script-start
**Purpose:** Full guided walkthrough for writing complete scripts from scratch  
**Use when:** Starting a brand new video with no script yet  
**What it does:**
- Walks through each section step-by-step
- Asks probing questions about audience, hook, content structure
- Adapts based on content type (tutorial/review/opinion/course)
- Creates SCRIPT.md progressively as you answer
- Challenges vague responses and pushes for specificity

**Example usage:**
```
@script-start
> Let's build your script step-by-step...
> What type of video is this? (Tutorial/Review/Opinion/Course)
Tutorial
> What's the main topic?
Gatling stress testing tool
[Continues with detailed questions...]
```

---

### 🆘 @script-help
**Purpose:** Targeted assistance when stuck on a specific script section  
**Use when:** You have a draft but need help with a particular part  
**What it does:**
- Diagnoses specific issues (weak intro, rambling section, unclear explanation)
- Provides 2-3 concrete solution options
- Updates SCRIPT.md with chosen fix
- Quick, focused problem-solving

**Example usage:**
```
@script-help
> What part of your script needs help?
My intro feels really weak and boring
> Can you share that section?
[You share intro]
> Here are 3 alternative hooks to consider...
```

---

### 🎤 @script-interview
**Purpose:** Generate scripts through conversational interview  
**Use when:** You know your material but struggle to write it down  
**What it does:**
- Interviews you with 15-25 strategic questions
- Extracts your knowledge conversationally
- Synthesizes answers into complete SCRIPT.md draft
- Great for people who think better through talking

**Example usage:**
```
@script-interview
> Let's talk through your video idea...
> What's the topic you want to cover?
Gatling stress testing
> Why did you choose this topic?
[You answer naturally, agent keeps asking questions]
[After interview: creates complete script draft]
```

---

### 😈 @script-critic
**Purpose:** Framework-driven brutally honest script critique with three distinct personalities
**Use when:** You have a draft and need tough-love feedback
**What it does:**
- Loads and enforces the James Willett framework documents
- References SPECIFIC framework violations in every critique
- Uses one of three distinct critic personalities based on script weaknesses
- Rates scripts 1-10 with framework compliance metrics
- Points to exact violations with framework references
- CAN be pleased if framework compliance is high
- Roasts the work, not you personally

**The Three Critics:**
1. **👑 Pattern Enforcer** - Obsessed with content-type pattern structures (Tutorial/Review/Opinion/Course)
2. **🔮 Principle Purist** - Obsessed with the 8 Universal Principles (Hook Law, Clarity Mandate, etc.)
3. **🎯 Specificity Sniper** - Obsessed with hunting vague language, fluff, and padding

**Framework Requirements:**
- Requires `context/01-universal-principles.md` (8 laws of YouTube success)
- Requires `context/02-james-willett-framework.md` (content-type patterns)
- Automatically selects appropriate critic personality
- All criticism references specific framework violations

**Example critique:**
```
@script-critic
🔄 Loading framework documents...
✅ Framework loaded. Initiating review.

Content Type: Tutorial
Pattern to enforce: Pattern 1 - Tutorial Structure
Active Personality: Pattern Enforcer

Well, well, well... let's see what we have here.

**Hook/Opening: 3/10**
Principle 1, Hook Law VIOLATION: "You have 30 seconds or less to answer
Why should I care?" You took 47 seconds. Framework says: immediate value
proposition within 5 seconds. You failed.

**Prerequisites Section: MISSING**
Tutorial Pattern requires "Prerequisites (30s-2m)" as Section 2.
You have ZERO prerequisites listed. Tutorial-Specific Violation:
"No prerequisites listed" ❌

**THE VERDICT: 4/10**
Framework Compliance:
- Universal Principles: 2/8 passed
- Pattern Structure: 3/6 required elements present
- Quality Checklist: 1/8 items met

Fix the hook (Principle 1) and add Prerequisites (Pattern 1, Section 2) FIRST.
```

---

### 🖼️ @thumbnail-ideas
**Purpose:** Generate thumbnail concept ideas based on script  
**Use when:** Script is ready/mostly ready and you need thumbnail inspiration  
**What it does:**
- Reads SCRIPT.md to understand content
- Generates 3-5 specific thumbnail concepts
- Includes: visual elements, text overlay (3-6 words), colors, facial expressions
- Explains psychology behind each concept
- Provides production notes
- Adapts based on content type

**Example output:**
```
@thumbnail-ideas

**Concept 1: Performance Shock**
Main Visual: Your face with impressed expression
Text Overlay: "10K Requests/Sec"
Color Scheme: Dark background, bright green terminal aesthetic
Why This Works: Numbers grab attention, emotion adds personality

**Concept 2: Tool Showcase**
[...continues with more concepts]
```

---

### 📄 @script-to-markdown
**Purpose:** Convert filming script into viewer-facing companion document  
**Use when:** Script is finalized and you want to create the viewer resource  
**What it does:**
- Reads SCRIPT.md
- Removes all production notes, timestamps, performance cues
- Transforms spoken tone to clear written explanations
- Formats code blocks for copy-paste
- Adds table of contents, prerequisites, resources section
- Creates VIEWER_GUIDE.md for sharing with viewers

**Output:** Polished markdown document viewers can reference alongside the video

**Example usage:**
```
@script-to-markdown
> Converting your script to viewer-facing guide...
✅ Created VIEWER_GUIDE.md
Includes: 5 main sections, 8 code examples, resources section
```

---

### 🚀 @pre-upload
**Purpose:** Generate all publishing metadata for YouTube upload  
**Use when:** Video is edited and ready to upload  
**What it does:**
- Creates complete publishing package in PUBLISH_METADATA.md
- Generates: YouTube description (with timestamps), tags (15-25), pinned comment, LinkedIn promotional post
- Reviews title (optional, since you use VidIQ)
- All content is copy-paste ready
- Adapts based on content type

**Generates:**
1. **YouTube Description:** Hook, overview, timestamps, resources, about me, connect links
2. **YouTube Tags:** Strategic mix of broad/medium/specific keywords
3. **Pinned Comment:** Engaging question + key takeaway + resources
4. **LinkedIn Post:** Professional promotional post with industry context
5. **Publishing Checklist:** All steps before going live

**Example usage:**
```
@pre-upload
> Generating publishing metadata...
> What's your current working title?
"Gatling Tutorial: Load Testing Made Simple"
> Any GitHub repos or resources to link?
[You provide links]
✅ Created PUBLISH_METADATA.md with all content ready to copy-paste
```

---

### 📓 @notion-assistant
**Purpose:** Search, retrieve, and update pages in your Notion workspace
**Use when:** You need to find a page, view its contents, or add/update content
**What it does:**
- Searches "All Notes[UB]" database by title (database ID built-in)
- Retrieves and displays page contents in readable format
- Adds content (paragraphs, bullet points, headings, to-dos)
- Updates page properties (title, status, etc.)
- Creates new pages in the database
- Understands your weekly note structure (Goals, Highlights, Lowlights, etc.)

**Built-in Context:**
- Database ID: `07ef0fac7489461498653f918289d835` (All Notes[UB])
- Knows weekly note patterns (Week 48 - W/C 24/11/25 format)
- Understands common sections (Highlights, Lowlights, Lessons Learned, etc.)

**Example usage:**
```
@notion-assistant
> What would you like to do with Notion?

Find my Week 48 page
> [Searches database for "Week 48"]
> Found "Week 48 - W/C 24/11/25". Here's the content:
  - Goals for Coming Week (3 items, 1 completed)
  - Highlights: 2 items
  - Lowlights: placeholder
  [...]

Add a bullet to highlights
> What highlight would you like to add?

Completed the Notion assistant agent!
> [Adds bullet point to Highlights section]
✅ Added "Completed the Notion assistant agent!" to Highlights
```

**Content Types You Can Add:**
- Paragraphs (plain text blocks)
- Bullet points (bulleted_list_item)
- Numbered lists (numbered_list_item)
- Headings (heading_1, heading_2, heading_3)
- To-do items (checkboxes)
- Toggle sections (collapsible)

---

## Available Commands

### /sync-context
**Purpose:** Sync CLAUDE.md, GEMINI.md, and AGENTS.md context files  
**Use when:** You update one context file and need to sync the others  
**What it does:**
- Detects most recently modified file
- Copies content to other two files
- Keeps all three AI tools (Claude Code, Gemini, Codex) in sync
- Allows seamless switching between tools

**Example usage:**
```
/sync-context
🔄 Syncing context files...
📄 Source: CLAUDE.md
  ✅ Synced to GEMINI.md
  ✅ Synced to AGENTS.md
✨ Sync complete!
```

---

## Available Hooks

### context-file-sync
**Purpose:** Automatically sync context files on change (currently disabled - use /sync-context command instead)  
**Location:** `.claude/hooks/context-file-sync.js`  
**Note:** Hooks were determined to be less useful for this use case than manual command. Kept for reference.

---

## Typical Workflows

### 🎬 Complete Video Production Workflow

```
1. SETUP
   - Create project folder
   - Initialize with context files

2. SCRIPT WRITING (Choose one approach)
   Option A: @script-start (methodical, step-by-step)
   Option B: @script-interview (conversational, 15-25 questions)
   Option C: Write manually, then @script-help for stuck sections
   → Result: SCRIPT.md created

3. CRITIQUE & REFINE
   @script-critic
   → Get harsh feedback
   @script-help (fix specific weak sections)
   @script-critic (repeat until satisfied with rating)
   → Result: Polished SCRIPT.md

4. PRE-PRODUCTION
   @thumbnail-ideas
   → Get 3-5 thumbnail concepts
   → Plan what to film

5. FILMING
   [Film your video using SCRIPT.md]

6. POST-PRODUCTION
   @script-to-markdown
   → Result: VIEWER_GUIDE.md for viewers
   
   @pre-upload
   → Result: PUBLISH_METADATA.md with description, tags, pinned comment, LinkedIn post

7. PUBLISHING
   - Upload video to YouTube
   - Copy description from PUBLISH_METADATA.md
   - Copy tags from PUBLISH_METADATA.md
   - Publish video
   - Pin comment immediately
   - Share LinkedIn post (update with video URL)
   - Share VIEWER_GUIDE.md (GitHub, blog, video description)

8. END OF SESSION
   @time-tracker
   → Log hours worked
```

---

### ⚡ Quick Workflows

**Just need a script:**
```
@script-interview → SCRIPT.md created in ~20 minutes
```

**Have draft, need polish:**
```
@script-critic → Get feedback
@script-help → Fix issues
@script-critic → Verify improvements
```

**Ready to upload:**
```
@pre-upload → All metadata ready to copy-paste
```

**Switching AI tools:**
```
[Edit CLAUDE.md]
/sync-context → GEMINI.md and AGENTS.md updated
```

**Managing Notion:**
```
@notion-assistant → Find/update weekly notes and project pages
```

**Quick Notion updates:**
```
# Add a highlight to this week's note
@notion-assistant
> Find Week [current week]
> Add to highlights: [your accomplishment]

# View any page
@notion-assistant
> Find [page name]
> [View contents]

# Create a new page
@notion-assistant
> Create page: [title]
```

---

## Content Types Supported

All agents adapt based on these content types:

### 📚 Coding Tutorials
- Focus: Clear learning objectives, step-by-step, practical examples
- Script agents: Push for prerequisites, what viewers will build
- Critic: Watches for assuming knowledge, skipping steps
- Thumbnails: Code snippets, tool logos, before/after comparisons
- Publishing: Emphasize learning outcomes, include code repos

### 🔍 Tool/Framework Reviews
- Focus: Balanced analysis, real-world use cases, comparisons
- Script agents: Push for pros AND cons, who it's NOT for
- Critic: Watches for fanboy enthusiasm, missing critical perspective
- Thumbnails: Product logos, ratings, "VS" comparisons
- Publishing: Include official docs, alternatives, use cases

### 💭 Opinion Pieces
- Focus: Clear thesis, supporting evidence, counterarguments
- Script agents: Push for specific examples, nuanced thinking
- Critic: Watches for ranting without substance, unsupported claims
- Thumbnails: Bold text, reaction faces, controversial statements
- Publishing: Professional framing, invite discussion

### 🎓 Course Creation Content
- Focus: Strategic value, actionable techniques, teaching methodology
- Script agents: Push for specific techniques, measurable outcomes
- Critic: Watches for vague advice, missing "why"
- Thumbnails: Growth imagery, results-focused, authority indicators
- Publishing: Emphasize actionable value, outcomes

---

## Project Configuration

### Context File Syncing
- **Files:** CLAUDE.md, GEMINI.md, AGENTS.md
- **Purpose:** Use different AI tools (Claude Code, Gemini, Codex) seamlessly
- **Command:** `/sync-context` to manually sync when needed

### Time Tracking
- **File:** TIME_LOG.md
- **Format:** Sessions with date, hours, optional notes, running total
- **Agent:** @time-tracker

### Script Management
- **File:** SCRIPT.md (your filming script)
- **Created by:** @script-start, @script-interview
- **Modified by:** @script-help
- **Critiqued by:** @script-critic

### Viewer Resources
- **File:** VIEWER_GUIDE.md
- **Created by:** @script-to-markdown
- **Purpose:** Companion document for viewers

### Publishing Metadata
- **File:** PUBLISH_METADATA.md
- **Created by:** @pre-upload
- **Contains:** Description, tags, pinned comment, LinkedIn post, checklist

### Notion Integration
- **Agent:** @notion-assistant
- **Database:** All Notes[UB] (ID: 07ef0fac7489461498653f918289d835)
- **Use cases:** Weekly note management, project page tracking, content organization
- **Actions:** Search, retrieve, add content, update properties, create pages
- **MCP Server:** Notion MCP integration required

---

## Future Enhancements

Planned features not yet implemented:

### 🔄 End of Day Routine
**Status:** Planned  
**Purpose:** Meta-agent that orchestrates multiple agents  
**Would include:**
- @time-tracker (log hours)
- Git workflow (commit and push)
- /sync-context (ensure files synced)
- Session summary

### 🔧 Git Workflow Agent
**Status:** Deferred  
**Purpose:** Manage Git operations using GitHub MCP server  
**Features:**
- Push to new branch
- Commit with descriptive messages
- Create repos
- Review changes

### 📝 @update-docs
**Status:** Next to build  
**Purpose:** Auto-update this CLAUDE.md file  
**Features:**
- Scan .claude/ directory
- Read all agents/commands/hooks
- Generate/update documentation
- Keep docs always current

### 🎬 B-roll Suggestions
**Status:** Potential future feature  
**Purpose:** Generate B-roll ideas based on script  
**Similar to:** @thumbnail-ideas but for filming shots

---

## Tips & Best Practices

### Script Writing
- Start with @script-interview if you think better by talking
- Use @script-start for methodical, structured approach
- Always run @script-critic before filming - it will save you from mistakes
- Don't take criticism personally - the harsh feedback improves your work
- Aim for 7+/10 from the critic before filming

### Publishing
- Run @pre-upload even if you don't use everything - saves time
- Always pin a comment immediately after publishing
- Share on LinkedIn within 1-2 hours for best reach
- Update LinkedIn post with actual video URL after publishing

### Project Management
- Call @time-tracker at end of every session - track your investment
- Use /sync-context before switching AI tools
- Keep SCRIPT.md and VIEWER_GUIDE.md in version control

### Agent Usage
- Agents are conversational - don't rush, answer thoughtfully
- Commands are quick - just run them when needed
- Experiment with different agents for different moods/needs

### Notion Management
- Use @notion-assistant to quickly log accomplishments to weekly notes
- Add highlights after completing major tasks
- Review your week by reading the page with @notion-assistant
- The agent knows your database structure - no need to provide IDs each time

---

## Technical Details

### Tools Required
- Claude Code (installed and configured)
- Node.js (for sync script)
- Git (optional, for version control)
- Notion MCP Server (for @notion-assistant integration)

### File Locations
- **Agents:** `.claude/agents/*.md`
- **Commands:** `.claude/commands/*.md`
- **Hooks:** `.claude/hooks/*`
- **Context files:** Project root (CLAUDE.md, GEMINI.md, AGENTS.md)
- **Generated files:** Project root (SCRIPT.md, VIEWER_GUIDE.md, etc.)

### Agent Format
All agents use YAML frontmatter:
```yaml
---
name: agent-name
description: When to use this agent
tools: list, of, tools, needed
model: inherit
---
[Agent instructions]
```

---

## Support & Iteration

This framework is designed to be iterative and improve over time:
- Agents can be refined based on usage
- New agents can be added as needs arise
- Features can be enhanced incrementally
- Documentation stays current (especially with @update-docs)

**Remember:** The goal is to streamline your YouTube workflow, not to add complexity. Use what helps, skip what doesn't, and iterate as you learn what works for you.

---

**Last Updated:** [Auto-update when @update-docs is built]  
**Version:** 1.0 (Initial comprehensive documentation)  
**Framework Status:** Active development
# Blog Maintenance Guide

## Quick Commands (Copy-Paste These)

```bash
# Go to your blog folder
cd /Users/deepuasok/Projects/blog

# Run locally (preview before publishing)
npm run dev
# Then open: http://localhost:3000

# Publish changes
git add .
git commit -m "New post: YOUR TITLE HERE"
git push
```

---

## Important Links

| What | URL |
|------|-----|
| Live site | https://blog-deepuasoks-projects.vercel.app |
| GitHub repo | https://github.com/deepuasok/blog |
| Vercel dashboard | https://vercel.com/deepuasoks-projects/blog |

---

## File Locations

```
/Users/deepuasok/Projects/blog/
├── content/posts/          ← YOUR POSTS GO HERE (.mdx files)
├── components/             ← Interactive widgets
├── app/                    ← Site pages (don't touch unless customizing)
└── BLOG-GUIDE.md          ← This file
```

---

## Creating a New Post

### Step 1: Create the file

Create a new file in: `/Users/deepuasok/Projects/blog/content/posts/`

Name it: `your-post-name.mdx` (use hyphens, no spaces)

### Step 2: Add this template

```mdx
---
title: "Your Post Title"
date: "2026-02-01"
description: "One sentence summary (optional)"
---

Write your content here.
```

### Step 3: Publish

```bash
cd /Users/deepuasok/Projects/blog
git add .
git commit -m "New post: Your Post Title"
git push
```

Site updates in ~30 seconds.

---

## Post Formatting Cheat Sheet

### Text

```markdown
**bold text**
*italic text*
[link text](https://example.com)
```

### Headings

```markdown
# Big heading (don't use - title comes from frontmatter)
## Section heading
### Subsection
```

### Lists

```markdown
- Bullet point
- Another point

1. Numbered
2. List
```

### Blockquotes

```markdown
> This is a quote.
> It can span multiple lines.
```

### Code

Inline: surround with backticks → `code here`

Block:
````markdown
```python
def hello():
    print("Hello world")
```
````

Supported languages: python, javascript, typescript, bash, json, sql, go, rust, and more.

---

## Interactive Components

### YouTube Embed

```mdx
<YouTubeEmbed id="VIDEO_ID_HERE" />
```

The video ID is the part after `v=` in a YouTube URL.
Example: `https://youtube.com/watch?v=dQw4w9WgXcQ` → ID is `dQw4w9WgXcQ`

### Iron Triangle Slider

```mdx
<TriangleSlider />
```

Adds the interactive cost/quality/speed slider.

---

## Common Tasks

### Preview before publishing

```bash
cd /Users/deepuasok/Projects/blog
npm run dev
```

Open http://localhost:3000 in your browser. Changes update live.

Press `Ctrl+C` to stop the server.

### Edit an existing post

1. Open the file in `/Users/deepuasok/Projects/blog/content/posts/`
2. Make changes
3. Publish:

```bash
cd /Users/deepuasok/Projects/blog
git add .
git commit -m "Update: post name"
git push
```

### Delete a post

1. Delete the `.mdx` file from `content/posts/`
2. Publish:

```bash
cd /Users/deepuasok/Projects/blog
git add .
git commit -m "Remove: post name"
git push
```

---

## Troubleshooting

### "npm run dev" doesn't work

```bash
cd /Users/deepuasok/Projects/blog
npm install
npm run dev
```

### Git says "nothing to commit"

You haven't made any changes, or you already committed them.

### Site didn't update after push

1. Check https://vercel.com/deepuasoks-projects/blog for build status
2. Wait 30-60 seconds and refresh
3. Hard refresh your browser: `Cmd+Shift+R`

### Port already in use

The dev server will automatically use the next available port (3001, 3002, etc.)

---

## File Naming Rules

- Use hyphens, not spaces: `my-cool-post.mdx` ✓
- All lowercase: `my-cool-post.mdx` ✓
- Must end in `.mdx`
- The filename becomes the URL: `my-cool-post.mdx` → `/blog/my-cool-post`

---

## Frontmatter Reference

The stuff between `---` at the top of each post:

```yaml
---
title: "Required - shows as the post title"
date: "2026-02-01"          # Required - YYYY-MM-DD format
description: "Optional"      # Shows in search results
---
```

---

## Need Help?

Ask Claude to:
- "Write a blog post about [topic]"
- "Add a new interactive component for [thing]"
- "Fix [problem] with my blog"

---

*Last updated: February 1, 2026*

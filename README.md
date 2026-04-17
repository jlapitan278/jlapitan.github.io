# jlapitan.github.io

Personal portfolio and blog for Josh — Cybersecurity Analyst & Security Engineer.

**Live site:** [jlapitan278.github.io/jlapitan.github.io](https://jlapitan278.github.io/jlapitan.github.io/)

---

## About

A minimal, dark-themed portfolio and blog built with vanilla HTML and CSS — no frameworks, no JavaScript, no build step. I write here about cybersecurity, detection engineering, and the projects I'm building.

## Stack

- HTML5
- CSS3 (flexbox + grid, CSS custom properties)
- Hosted on GitHub Pages

No external dependencies, no tracking scripts, no fonts loaded from a CDN.

## Structure

```
.
├── index.html           # Homepage — bio, featured projects, recent posts
├── projects.html        # Projects showcase
├── blog.html            # Blog post listing
├── post-template.html   # Template for individual blog posts
├── style.css            # Shared stylesheet for all pages
└── README.md
```

## Running locally

Clone the repo and open `index.html` in any browser:

```bash
git clone https://github.com/jlapitan278/jlapitan.github.io.git
cd jlapitan.github.io
start index.html      # Windows
# or: open index.html # macOS
```

No server or dependencies required.

## Adding a new blog post

1. Copy `post-template.html` and rename it (e.g. `post-my-new-article.html`)
2. Update the `<title>`, meta description, category, date, and body content
3. Add a new entry to the post list in `blog.html` — copy any existing `<a class="post-item">` block and point its `href` to your new file

## Customizing the theme

All colors are defined as CSS custom properties at the top of `style.css`. To retheme the site, change the `--accent` value in `:root`:

```css
--accent: #00e5c0;   /* current cyan-green terminal feel */
```

## License

Content © Josh. Code is free to use as a starting point for your own portfolio.

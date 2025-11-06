# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static HTML website about web technologies (HTML, CSS, and JavaScript). It consists of simple HTML pages with no build process, dependencies, or frameworks.

## Project Structure

- `index.html` - Main landing page about the Web
- `1.html` - Page about HTML
- `2.html` - Page about CSS
- `3.html` - Page about JavaScript
- `web.jpg` - Image asset used in the HTML page

## Architecture

**Navigation Pattern**: All pages share an identical navigation structure:
- Header with link back to index.html
- Ordered list with links to all three topic pages (1.html, 2.html, 3.html)
- Main content area with topic-specific information

When adding new pages, maintain this consistent navigation structure across all files.

## Development

**Local Testing**: Open HTML files directly in a browser, or use a simple HTTP server:
```bash
python3 -m http.server 8000
# Then visit http://localhost:8000
```

**Editing**: Directly edit the HTML files. No build step required.

**Adding Pages**: When adding new pages:
1. Create the new HTML file
2. Update the navigation `<ol>` in all existing pages to include the new page
3. Ensure the new page includes the same navigation structure

## File Naming

Pages use a simple numeric naming scheme (1.html, 2.html, 3.html). If adding new topic pages, continue this pattern or consider more descriptive filenames.

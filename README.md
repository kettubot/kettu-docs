# kettu-docs

This repository is used to edit & maintain Kettu's v3 Documentation, which is stored in markdown and rendered server-side [here](https://kettu.cc/docs). For more information on Kettu, head to the [main website](https://kettu.cc).

## Overview

All files and folders in this repository (with the exception of a few, in the table below) are located on the /docs path on Kettu's main site. `.md` extensions for pages are removed, and attempting to directly visit a folder will result in a 404 error.

### Exempt Files

These files are exempt from the typical docs processing, meaning they cannot be accessed in the usual method and are not displayed on the sidebar menu.

file | usage
---- | -----
HOME.md | Displayed at the root `/docs` location.
404.md | 404 file, displayed for all unknown `/docs` requests.
README.md | Intended only for display on GitHub.

## Rendering

Markdown is rendered using [Marked](https://github.com/markedjs/marked), and supports all typical markdown styles. The most common of these can be found in the `markdown stuff.md` file, which I'll make exempt before these docs become the main documentation. Since all markdown styles are custom, let me know if I forgot to style a feature.

Code is rendered using [Highlight.js](https://github.com/highlightjs/highlight.js), in the 'Tomorrow Night Bright' theme.

## Auto-deploy

Commits to the master branch are automatically deployed live.

# Warwick Machine Learning Group
This is the github repo for [wmlg.io](http://www.wmlg.io), the website is directly served from this respository, so changes made here will be reflected on the site. There is a guide below for appending items, please get in contact if you would like to add a new page or have any questions.

***

## Editing content
Content on the WMLG page is written using [markdown](https://en.wikipedia.org/wiki/Markdown) and [JSON](https://en.wikipedia.org/wiki/JSON) on top of [Jekyll](https://jekyllrb.com/). Markdown is simple to write and avoid the need for content to be written using html.

The editing process is summerised below:

1. Navigate to the markdown file you wish to edit.
2. Click the edit button (represented by a marker pen).
3. Make your changes.
4. Once you're done, write a message in the commit changes section at the bottom, then click the *commit changes* button for the changes to go live. Keep in mind GitHub requests up to 20 minutes processing time.

The following pages can be edited with markdown:
  - [WMLG Reading Group](https://github.com/PatrickOHara/wmlg/blob/development/wmlg-reading-group.markdown)

The following pages can be edited with JSON and are all found in `/_data/`:
  - Front page logos
  - People records
  - News Items
  - Research groups
  - Teaching classes

_The only item which cannot be edited by modifying the Markdown or JSON files are the published papers list, this is to maintain strict formatting and thus converted manually from a BibTex file._
<!-- A notification is now sent to the web admin for the page. They will review the changes then notify you once the changes are live. -->

## Creating a new page
To add a page, there are two options, take an existing bit of HTML and display that alone, or add a markdown file with all the default formatting. To add an existing html file, place it in the top-level directory with the following header yaml:
```yaml
---
title: Page Title
layout: blank
permalink: /link-on-page/
---

<!-- (html file contents) -->
```

If you're just adding a markdown file, rename with `.markdown` extension and add the following header yaml:
```yaml
---
title: Page Title
layout: default
permalink: /link-on-page/
---

<!-- (markdown file contents) -->
```

## Testing Locally

You can build the site locally with Jekyll:
```bash
cd WarwickML.github.io    # inside the repo
gem install bundle        # bundler to combine asset files
bundle install            # bundle will install jekyll + other deps (if there are any)
bundle exec jekyll serve  # serve a dev server with live updates
```

***

### How to write markdown
This [markdown cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#lists) is a great overview, and probably tells you everything you need to know. 

In addition to normal markdown, please follow the below rules. Not doing so can result in strange behaviour when converting to html.

 - Leave a trailing space after the hashtag when writing headers, e.g.
 ```markdown
# Leave a space after the hashtag
 ```
  - Leave a blank line before and after vertical lines (e.g. *** or ___)

#### Latex
The website supports basic Latex mathematics. Inline Latex is written inside two $...$ symbols. Display equations can either be written between $$...$$ or \begin{align} ... \end{align}.

The two Latex packages supported are AMSmath and AMSsymbols. Please get in contact if you require more packages. By default, pages with pre-existing latex have had a the YAML tag `markdown: true` included. If creating a new page with LaTeX support, please include this tag in the page file (top-level, not a layout) for MathJax JavaScript to be appended.

#### Images and other media
Images are supported in markdown, but are not always styled properly when there are many images in a document. To add an image, place it within the `assets/imgs` folder and reference it within your page with either markdown or `{{ "/assets/imgs/name.png" | relative_url }}` inside html.

***

## Publications

A Warwick machine learning group bibtex file is kept up to date. The bibtex file is converted to a json file which is then loaded onto the page using JavaScript. The command to convert .bib file to .json is:

```console
pandoc-citeproc -j wmlg.bib > publications.json
```

***

## Google forms & adding news items

We want members of WMLG to be able to add news items. [This article](https://medium.freecodecamp.org/use-google-sheets-and-google-apps-script-to-build-a-blog-cms-c2eab3fb0b2b) gives a possible way to use google forms, sheets and scripts.

### [Deprecated] ~Converting to HTML~ _Now conducted by Jekyll on build_
Converting from markdown to html is done using [pandoc](https://pandoc.org).

```console
pandoc --atx-headers source.md -t html -o target.html --mathjax=https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML
```

Note that a *space is required before every header*.

***

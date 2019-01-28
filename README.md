# Getting Started

## Using Prose.io

You can use [Prose.io](http://prose.io/#opennorth/opennorth.ca/) to edit the website. To **add a blog post**:

1. Click the "Authorize on GitHub" power icon in the bottom-right corner
1. Click on the `collections` folder then the `_posts` folder
1. Click "New File" and write the blog post
1. Click the "Meta Data" icon in the right sidebar
1. Fill in the "Author" field
1. Fill in the "Categories" field
1. Click the "Save" icon in the right sidebar
1. Re-open the blog post
1. Click "Unpublished" at the right end of the toolbar
1. Click the "Save" icon in the right sidebar

## Using GitHub

### One-Time Setup

```
gem install bundler
git clone git@github.com:opennorth/opennorth.ca.git
cd opennorth.ca
git submodule update --init
bundle
cd theme
git checkout master
```

Then, edit `.git/modules/theme/config` in the `opennorth.ca` directory, changing this line:

    url = https://github.com/opennorth/theme.git

to:

    url = git@github.com:opennorth/theme.git

**Note:** If editing files locally, it is necessary to run a jekyll build or serve command to 'build' the site, before pushing changes to Github. Changes to files will not take effect until the site is 'built':
    `bundle exec jekyll build` or
    `bundle exec jekyll serve` to view changes locally, or
    `bundle exec jekyll serve -w` to force the server to 'watch' for changes while serving the site.

### Add Content

Content can be written in [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) or [Markdown](https://daringfireball.net/projects/markdown/).

To add content in HTML, name the new file with the extension `.html`.

To add content in Markdown, name the new file with the extension `.md`. HTML is also interpreted as valid syntax in Markdown.

#### Add a new blog post

To **add a blog post**, create a file in the `_posts` folder with a name following the pattern `YYYY-MM-DD-lowercase-hyphenated-title.html` and with contents of:

```yaml
---
layout: post
title: A descriptive title
author: The author's name
---
```

##### Post Categories

Current categories include:
* newsletter
* press release

```yaml
---
title: A descriptive title
author: The author's name
categories: ['press release', newsletter, 'open data']
---
```

**Note:** Categories that contain more than one word must be wrapped in single quotes.

##### Add a new press release

Create a post and assign the category 'press release':

```yaml
---
title: A descriptive title
author: The author's name
categories: ['press release']
---
```

**Note:** Since this category contains two words it must be wrapped in single quotes.

##### Add a new newsletter

Create a post and assign the category 'newsletter':

```yaml
---
title: A descriptive title
author: The author's name
categories: [newsletter]
---
```

#### Add a new team member

To **edit the staff, advisors or board**, edit the `_data/staff.yml`, `_data/advisors.yml` or `_data/board.yml` files. Escape special characters by using the [ASCI character code](http://htmlarrows.com/) or preceding it with a forward slash.

To **add a photo**:

1. Add the photo file to the `theme/img/people` directory. The filename must be the "slug" version of a person's name. A slug is the lowercase version of a name, with non-`a-z` characters replaced with hyphens `-`, with consecutive hyphens replaced with a single hyphen, and with leading and trailing hyphens removed. For example, the filename for "John Smith" is `john-smith.jpg`. For "John Q. Public Esq.", it's `john-q-public-esq.jpg`. For "Napoléon Bonaparte", it's `napol-on-bonaparte.jpg`. **Note:** You can simply inspect the HTML when [previewing changes](#preview-changes) to see the expected filename.
1. Commit the new file from the `theme` directory
1. Run `git push origin master` from the `theme` directory
1. Run `git commit theme -m "Update theme"` from the `opennorth.ca` directory
1. Run `git push origin gh-pages` from the `opennorth.ca` directory

To **change a photo**:

1. Replace the appropriate file in the `theme/img/people` directory
1. Commit the updated file from the `theme` directory
1. Run `git push origin master` from the `theme` directory
1. Run `git commit theme -m "Update theme"` from the `opennorth.ca` directory
1. Run `git push origin gh-pages` from the `opennorth.ca` directory

#### Add a new job posting


#### Add a new item to the 'Impacts' page


#### Add a new publication to the 'Publications' page


#### Add a new webinar to the 'Webinars' page


#### Add or remove an item to the main navigation menu


### Preview Changes

Before committing your changes, always preview your changes. If not using Prose.io, start a server with:

```
bundle exec jekyll serve -w
```

Then, open [localhost:4000](http://localhost:4000) in a browser. While the server is running, you can make changes to files, then refresh the page in the browser to see your changes immediately! Press `Ctrl+C` to stop the server.

**Note:** This command compiles HTML files into the `_site` directory. Do not edit those files. Your changes to those files will not be saved.

**Note:** If the server is running, you must issue commands in a different Terminal window. Typing commands in the Terminal window in which the server is running will have no effect.

## Theme

These files should be identical in this repository and [nordouvert.ca](https://github.com/opennorth/nordouvert.ca/):

* `.gitignore`
* `.gitmodules`
* `_config.yml`
* `dir.ttl`
* `Gemfile`
* `Gemfile.lock`

In other words, only these directories and files should differ:

* `_data/`
* `_includes`
* `_layouts/`
* `_pages/`
* `collections`
* `archive.html`
* `atom.xml`
* `CNAME`
* `README.md`

# Helpful Links

* [Markdown Syntax](https://daringfireball.net/projects/markdown/syntax)
* [Font Awesome - How to use](https://fontawesome.com/how-to-use/on-the-web/referencing-icons/basic-use)
  * [Font Awesome - Available Icons](https://fontawesome.com/icons?d=gallery&m=free)
* [Jekyll Documentation](https://jekyllrb.com/docs/)
* [Liquid Documentation](https://shopify.github.io/liquid/)
* [Bundler Documentation](https://bundler.io/docs.html)
* [Github Pages Gem](https://github.com/github/pages-gem)
* [Foundation 5 Documentation](https://foundation.zurb.com/sites/docs/v/5.5.3/) - this site uses the Zurb Foundation front-end framework

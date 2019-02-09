# Getting Started

This site is built with [Jekyll](https://jekyllrb.com/) and [Github Pages](https://help.github.com/articles/what-is-github-pages/).

There are three ways that you can edit the site:
1. Using Prose.io
1. Using git to edit and build the site locally on your computer.
1. Directly editing and/or uploading files to GitHub.

## Using Prose.io

You can use [Prose.io](http://prose.io/#opennorth/opennorth.ca/) to edit the website.

To edit the website with Prose:
1. Click the "Authorize on GitHub" power icon in the bottom-right corner
1. Click on the folder containing the content you'd like to edit
1. Click "New File" and add the text.
1. Click the "Meta Data" icon in the right sidebar
1. Fill in the fields - if there is an image field, you can add the image file name and upload the image file to the appropriate folder in the [theme repository](https://github.com/opennorth/theme).
1. Click the "Save" icon in the right sidebar
1. Re-open the file
1. Click "Unpublished" at the right end of the toolbar
1. Click the "Save" icon in the right sidebar


For example, to **add a blog post**:

1. Click the "Authorize on GitHub" power icon in the bottom-right corner
1. Click on the `collections` folder then the `_posts` folder
1. Click "New File" and write the blog post
1. Click the "Meta Data" icon in the right sidebar
1. Fill in the "Author" field
1. Fill in the "Categories" field
1. If you are adding an image, type the name of the image file in the "Image" field and upload the image to the [blog folder in the theme repository](https://github.com/opennorth/theme/tree/master/img/blog). Blog images should use the following naming convention: YYYY-MM-DD-file-name.jpg or YYYY-MM-DD-file-name.png.
1. Click the "Save" icon in the right sidebar
1. Re-open the blog post
1. Click "Unpublished" at the right end of the toolbar
1. Click the "Save" icon in the right sidebar

## Using GitHub

Use the "Create new files" and "Upload files" buttons, or click on a file name to edit an existing file.

Files ending in .html are html and files ending in .md accept [markdown](https://guides.github.com/features/mastering-markdown/).

## Using git

This is the fastest and most versatile way to add and edit content, and has the benefit of error reporting and allowing you to view changes before publishing. You should be familiar with [git](https://en.wikipedia.org/wiki/Git) and the pull / commit / push workflow.

To learn more about git, try [Git Tower's free video tutorial](https://www.git-tower.com/learn/).

### One-Time Setup

Follow these steps to set up the project locally on your computer:

Open a terminal and run the following commands:

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

### Git Workflow

Once the project is set up you will use the following workflow:

```bash
cd opennorth.ca
git pull origin gh-pages  # Sync up your local repository.
# Edit files / add content / etc.
git add path/to/modified/file.md
git add path/to/additional/edit.html # Multiple files may be commited at once
git commit -m "Write commit message under 52 characters" # Excluding the -m extension will open a text editor where you can type a longer message.
git push origin gh-pages # Push your changes back to the repository.
```

#### Git Workflow - Editing the Theme

**The theme is a separate repository (or, '[submodule](https://git-scm.com/book/en/v2/Git-Tools-Submodules)') which is shared between both the French and English versions of the site.**

To edit the theme files locally, using git:

```bash
cd opennorth.ca/theme
git pull origin master # Sync up your local repository.
# Edit theme files, add images, etc.
git commit path/to/modified/file
git push origin master
cd ../ # Go back to opennorth.ca directory.
git commit theme -m "Update theme." # Commit theme from opennorth.ca repo.
git push origin gh-pages # Push to gh-pages for the site to recognize theme changes.
```

# Adding Content

Content can be written in [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) or [Markdown](https://guides.github.com/features/mastering-markdown/).

To add content in HTML, name the new file with the extension `.html`.

To add content in Markdown, name the new file with the extension `.md`. HTML is also interpreted as valid syntax in Markdown.

## Add a new blog post

To **add a blog post**, create a file in the `_posts` folder with a name following the pattern `YYYY-MM-DD-lowercase-hyphenated-title.html`.

A blog post requires, at minimum, the following metadata:

```yaml
---
layout: post
title: A descriptive title
author: The author's name
---
```

**Note:** In Prose.io, this metadata appears as fields.

You can also add:
* an image
* a short description
* categories

### To add an image to a post:

Name the image file using the following conventions:
* begin the file name with the date of the post formatted at YYYY-MM-DD, then
* add a descriptive name using dashes to separate words (no spaces)

Example: ```2018-12-24-data-management-workshop.jpg```

Add the image file to the [blog folder](https://github.com/opennorth/theme/tree/master/img/blog) in the [theme repository](https://github.com/opennorth/theme/).

In Prose, enter the full image name (as in the example above) in the "Image" field.

If editing the file directly, add the image to the front matter at the top of the file.

**Note:** When adding images to any website, it is usually best to use the .jpg format for photographs and the .png format for illustrations, logos, or icons.

**Note:** Please make sure that the image is not too large or too small. No image should be more than 100KB in size. Post images maybe be up to 800px wide but will never be larger.

### To add categories to a post:

Posts use categories to help users find interesting content and to list some types of content on other pages of the site (like press releases or newsletters).

Add post categories if any existing categories are relevant to the content.

Current categories include:
* newsletter
* press release

In Prose, these categories will appear as checkboxes in the meta data.

If you are editing the file directly, add the categories to the front matter as an array:

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

## Add a new team member

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


## Add a new job posting



## Add a new item to the 'Impacts' page


## Add a new publication to the 'Publications' page


## Add a new webinar to the 'Webinars' page


## Add or remove an item to the main navigation menu


# Preview Changes



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
 * [Writing on GitHub Guide](https://help.github.com/categories/writing-on-github/)
* [Font Awesome - How to use](https://fontawesome.com/how-to-use/on-the-web/referencing-icons/basic-use)
  * [Font Awesome - Available Icons](https://fontawesome.com/icons?d=gallery&m=free)
* [Jekyll Documentation](https://jekyllrb.com/docs/)
* [Liquid Documentation](https://shopify.github.io/liquid/)
* [Bundler Documentation](https://bundler.io/docs.html)
* [Github Pages Gem](https://github.com/github/pages-gem)
* [Foundation 5 Documentation](https://foundation.zurb.com/sites/docs/v/5.5.3/) - this site uses the Zurb Foundation front-end framework

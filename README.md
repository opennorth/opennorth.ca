**Contents**
<!-- TOC -->

- [Getting Started](#getting-started)
  - [Using Prose.io](#using-proseio)
  - [Using GitHub](#using-github)
  - [Using git](#using-git)
    - [One-Time Setup](#one-time-setup)
    - [Git Workflow](#git-workflow)
      - [Git Workflow - Editing the Theme](#git-workflow---editing-the-theme)
- [Adding Content](#adding-content)
  - [Add a new blog post](#add-a-new-blog-post)
    - [To add an image to a post:](#to-add-an-image-to-a-post)
    - [To add categories to a post:](#to-add-categories-to-a-post)
      - [Add a new press release](#add-a-new-press-release)
      - [Add a new newsletter](#add-a-new-newsletter)
  - [Add a new team member](#add-a-new-team-member)
  - [Add a new job posting](#add-a-new-job-posting)
  - [Add a new item to the 'Impacts' page](#add-a-new-item-to-the-impacts-page)
  - [Add a new publication to the 'Publications' page](#add-a-new-publication-to-the-publications-page)
  - [Add a new webinar to the 'Webinars' page](#add-a-new-webinar-to-the-webinars-page)
  - [Add a new 'In the News' item to the Newsroom](#add-a-new-in-the-news-item-to-the-newsroom)
  - [Add or remove an item to the main navigation menu](#add-or-remove-an-item-to-the-main-navigation-menu)
  - [Edit static pages](#edit-static-pages)
- [Preview Changes](#preview-changes)
- [Theme](#theme)
- [Helpful Links](#helpful-links)
- [This Documentation](#this-documentation)

<!-- /TOC -->


# Getting Started

This site is built with [Jekyll](https://jekyllrb.com/) and [Github Pages](https://help.github.com/articles/what-is-github-pages/).

There are three ways that you can edit the site:
1. Using [Prose.io](http://prose.io/#opennorth/opennorth.ca/)
1. Directly editing and/or uploading files to [GitHub](https://help.github.com/articles/editing-files-in-your-repository/).
1. Using [git](https://en.wikipedia.org/wiki/Git) to edit and build the site locally on your computer.


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

**Note:** Do not use the "Insert Image" button in the Prose editor. Instead, please upload the image to the appropriate folder in the [theme repository](https://github.com/opennorth/theme/) and reference it a metadata field (where applicable), or add it in the main content area using [html](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Img) or [markdown](https://daringfireball.net/projects/markdown/syntax#img) syntax.


## Using GitHub

Use the "Create new files" and "Upload files" buttons, or click on a file name to edit an existing file.

Files ending in .html are html and files ending in .md accept [markdown](https://guides.github.com/features/mastering-markdown/).


## Using git

This is the fastest and most versatile way to add and edit content, and has the benefit of error reporting and allowing you to view changes before publishing. You should be familiar with [git](https://en.wikipedia.org/wiki/Git) and the pull / commit / push workflow.

To learn more about git, try [Git Tower's free video tutorial](https://www.git-tower.com/learn/).


### One-Time Setup

Follow these steps to set up the project locally on your computer:

Check that your computer meets the [Jekyll installation requirements](https://jekyllrb.com/docs/installation/) and, if not, install the requirements. *It is not necessary to continue the other installation steps listed in the Jekyll documenation, the steps below will install bundler and the other packages needed for this project.*

Open a terminal and run the following commands:

```bash
gem install bundler # Bundler is a dependecy manager.
git clone git@github.com:opennorth/opennorth.ca.git # This copies the files from GitHub to your computer.
cd opennorth.ca # Navigate into the project files.
git submodule update --init # Update the theme submodule.
bundle # Bundler will install everything else.
cd theme # Navigate to the theme directory.
git checkout master # Switch to the master branch of the theme repository (submodule).
```

Then, edit `.git/modules/theme/config` in the `opennorth.ca` directory, changing this line:

    url = https://github.com/opennorth/theme.git

to:

    url = git@github.com:opennorth/theme.git

**Note:** If editing files locally, it is necessary to run a jekyll build or serve command to 'build' the site, before pushing changes to Github. Changes to files will not take effect until the site is 'built':

  ```bash
  bundle exec jekyll build # or
  bundle exec jekyll serve # to view changes locally, or
  bundle exec jekyll serve -w # to force the server to 'watch' for changes while serving the site.
  ```


### Git Workflow

Once the project is set up you will use the following workflow:

Open a terminal

```bash
cd opennorth.ca
git pull origin gh-pages  # Sync up your local repository.
# Edit files / add content / etc.
bundle exec jekyll serve -w # Run the built in jekyll server to view your changes.
# Open a web browser and navigate to http://127.0.0.1:4000
# View your changes.
# Type 'ctrl' and 'c' at the same time to stop the server.
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
bundle exec jekyll serve -w # Run the built in jekyll server to view your changes.
# Open a web browser and navigate to http://127.0.0.1:4000
# Type 'ctrl' and 'c' at the same time to stop the server.
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

**Note:** In Prose.io, this metadata appears as fields. Testimonia fields are interpreted as [Markdown](https://guides.github.com/features/mastering-markdown/).

You can also add:
* an image
* a short description (50 words or less, written in markdown)
* categories

**Note:** Links are note valid in the description field.

**Note:** If a description is not specified, the first 50 words of the post conent will be used.


### To add an image to a post:

Name the image file using the following conventions:
* begin the file name with the date of the post formatted at YYYY-MM-DD, then
* add a descriptive name using dashes to separate words (no spaces)

Example: ```2018-12-24-data-management-workshop.jpg```

Add the image file to the [blog folder](https://github.com/opennorth/theme/tree/master/img/blog) in the [theme repository](https://github.com/opennorth/theme/).

In Prose, enter the full image name (as in the example above) in the "Image" field. *Do not use the image upload in Prose.*

If editing the file directly, add the image to the front matter at the top of the file.

**Note:** When adding images to any website, it is usually best to use the .jpg format for photographs and the .png format for illustrations, logos, or icons.

**Note:** Please make sure that the image is not too large or too small. No image should be more than 100KB in size. Post images maybe be up to 800px wide but will never be larger.


### To add categories to a post:

Posts use categories to help users find interesting content and to list some types of content on other pages of the site (like press releases or newsletters).

Add post categories if any existing categories are relevant to the content.

Current categories include:
* newsletter
* press release
* applied research lab
* one-to-one advisory service

In Prose, these categories will appear as a dropdown list in the meta data. You can select more than one category.

If you are editing the file directly, add the categories to the front matter as an array:

```yaml
---
title: A descriptive title
author: The author's name
categories: ['press release', newsletter, 'applied research lab']
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
image: YYYY-MM-DD-descriptive-lowercase-image-name.jpg
categories: [newsletter]
---
```

The newsletter image should be saved to the [img/blog/](https://github.com/opennorth/theme/tree/master/img/blog) folder of the theme repository.

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

**Note:** Please make sure that the image is not too large or too small. No image should be more than 100KB in size. Post images should be approximately 325 px wide by 325 px tall (edges will be slightly cropped depending on viewport size).


## Add a new job posting

Create a new file in collections/jobs/ or copy and rename an existing file in the collection.

**If using Prose**, add the following metadata:
* title - this should be the job title as well as the page title
* Short Description - this will appear on the "Current Jobs" page
* Location - the location of this position

If editing the file directly, add the metadata to the front matter:

```yaml
---
title: Job Title
layout: job
short_description: "Description will appear on Current Jobs page."
location: Job Location
---
```

## Add a new item to the 'Impacts' page

Create a new file in collections/impacts/ or copy and rename an existing file in the collection.

**Naming convention:** Begin the file name with a number (chronologically, use the ascending next number) with a descriptive title. Markdown is recommended.

Example: If the last impact added was ```10-diy-open-data-tookit.md``` name the file ```11-descriptive-title.md```.

**If using Prose**, the following metadata fields will be available:
* Title
* Featured (select list)

  Make featured if there is a quote for the Testimonial *and* you would like it to be displayed in the 'featured' section at the top of the page.
* Image

  Enter the image file name and upload the image file to the [img/impacts/](https://github.com/opennorth/theme/tree/master/img/impacts) folder of the theme repository.
  Use the same name for the image file as the impact file.
* Testimonial

  Optional field. Enter the body of a quote, if available. This will only be displayed if the impact is *Featured*.
* Testimonial Source

  Enter the quote source. Only displayed if impact is *Featured*.

**Note:** Use markdown syntax to bold a few key words in the testimonial or testimonial source: \**bold text**

**If editing the files directly**, add the metadata to the front matter:

```yaml
---
title: Title of Impact
featured: true
image: "title-impact.png"
link: https://www.example.com/link-to-additional-info
testimonial: “Quote body”
cite: Souce Name, Source title, **Bold text**
---
And add the main content below, just like with a post.
```

## Add a new publication to the 'Publications' page

Create a new file in collections/publications/ or copy and rename an existing file in the collection.

**Naming convention:** Begin the file name with a number (chronologically, use the ascending next number) with a descriptive title. Markdown is recommended.

Example: If the last publication added was ```14-open-smart-cities-guide.md``` name the file ```15-descriptive-publication-title.md```.

**If using Prose**, the following metadata fields will be available:
* Title
* Cover Image

  Take a screenshot of the cover enter the image file name. Upload the image file to the [img/impacts/](https://github.com/opennorth/theme/tree/master/img/impacts) folder of the theme repository.
  Use the same name for the image file as the impact file.

* Link

  If available, enter a link to the full publication.

**If editing the files directly**, add the metadata to the front matter:

```yaml
---
title: Title of the Publication
cover_image: title-publication.png
link: https://docs.google.com/document/d/1528rqTjzKWwk4s2xKuPf7ZJg-tLlRK8WcMZQbicoGTM/
---
And add the main content below, just like with a post.
```

### To add categories to a publication:

Publications use categories to list some types of content on other pages of the site (like on the Applied Research Lab page).

Add publication categories if the publication should appear in the "Related Publications & News" section of the associated page.

Current categories include:
* applied research lab
* one-to-one advisory service

In Prose, these categories will appear as a drop down list in the meta data. You can select more than one category.

If you are editing the file directly, add the categories to the front matter as an array:

```yaml
---
title: A descriptive title
cover_image: publication-title.png
link: http://www.example.com
categories: ['applied research lab']
---
```

**Note:** Categories that contain more than one word must be wrapped in single quotes.

## Add a new webinar to the 'Webinars' page

Create a new file in collections/webinars/ or copy and rename an existing file in the collection.

**Naming convention:** Begin the file name with a number (chronologically, use the ascending next number) with a descriptive title. Markdown is recommended.

Example: If the last webinar added was ```09-open-smart-cities-canada-3.md``` name the file ```10-descriptive-webinar-title.md```.

**If using Prose**, the following metadata fields will be available:
* Title
* Date

  This should be the date that the webinar took place, formatted as YYYY-MM-DD.

* Video embed code

  Generated by the 'share' link on the video platform, the code should begin with <iframe> and end with </iframe>. Remove any extra text added by the platform.

* Title link

  An optional field. Enter a link to other documents, such as the slides.

* Expanded content

  If the webinar description is relatively long, add the last paragraph (or two) here and it will be displayed with the "Show More" button.

**If editing the files directly**, add the metadata to the front matter:

```yaml
---
title: "Title of the Webinar"
date: YYYY-MM-DD
video_embed: '<iframe src="https://player.vimeo.com/video/265436607" width="640" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'
title_link: https://www.example.net/link/to/related/stuff
expanded_content: "More information to be hidden inside the accordion.  
<br />
To add line breaks, use html '<br />' tags."
---
```

## Add a new 'In the News' item to the Newsroom

News items are listed in a YAML data file.

Navigate to the ```_data``` folder and open the ```news.yml``` file.

Create a new line at the **top** of the file and add the data for the new item:

```yaml
- title: "News Article Title"
  link: http://www.example.com/article/featuring-open-north
  source: New Outlet Name
  pub_date: YYYY-MM-DD
```

## Add or remove an item to the main navigation menu

Links in the main navigation menu are listed in a YAML data file.

Navigate to the ```_data``` folder and open the ```navigation.yml``` file.

To add a new page to the top level of the hierarchy add a new entry:

```yaml
- name: New Link
  link: /new-link # Use a relative path.
```

To add a new page to a drop down menu, find the parent ```name``` in the list add add a ```children``` value (if not already present) and add a new ```childname``` entry below it:

```yaml
- name: Existing Parent Link
  link: /existing-parent-link
  children:
    - childname: New Drop Down Link
      childlink: /new-drop-down-link # Use relative path.
```

## Edit static pages

Static pages are found in the ```_pages``` folder, with the exception of the Blog page which is located at ```blog/index.html```.

# Preview Changes

Before committing your changes, always preview your changes. If not using Prose.io, start a server with:

```
bundle exec jekyll serve -w
```

If any errors or warnings are encountered in the build process information about them will be output in the terminal.

Then, open [localhost:4000](http://localhost:4000) in a browser. While the server is running, you can make changes to files, then refresh the page in the browser to see your changes immediately! Press `Ctrl+C` to stop the server.

**Note:** This command compiles files into the `_site` directory. Do not edit those files. Your changes to those files will not be saved.

**Note:** If the server is running, you must issue commands in a different Terminal window. Typing commands in the Terminal window in which the server is running will have no effect.


# Theme

**The theme is a separate repository (or, '[submodule](https://git-scm.com/book/en/v2/Git-Tools-Submodules)') which is shared between both the French and English versions of the site.**

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
* [Font Awesome - How to use](https://fontawesome.com/how-to-use/on-the-web/referencing-icons/basic-use) - Font Awesome 5 is installed and any free icons can be used on the site
  * [Font Awesome - Available Icons](https://fontawesome.com/icons?d=gallery&m=free)
* [Jekyll Documentation](https://jekyllrb.com/docs/) - this site is created using Jekyll
* [Liquid Documentation](https://shopify.github.io/liquid/) - Jekyll uses the Liquid templating language
* [Bundler Documentation](https://bundler.io/docs.html) - we use Bundler to manager dependencies
* [Github Pages Gem](https://github.com/github/pages-gem) - GitHub Pages is used to host the site
* [Foundation 5 Documentation](https://foundation.zurb.com/sites/docs/v/5.5.3/) - this site uses the Zurb Foundation 5 front-end framework


# This Documentation

Please add to this documentation as you see fit!

The Table of Contents was generated using the [markdown-writer](https://atom.io/packages/markdown-writer) package for the Atom text editor.

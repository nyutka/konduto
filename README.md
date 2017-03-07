## Getting Started

* [Install](https://jekyllrb.com/docs/installation/) the gem
* Read up about its [Usage](https://jekyllrb.com/docs/usage/)

##Beginners Guide

All configuration is done via `_config.yml` file which you will find in your main repo folder.

### Basic

- These configuration in `author:` is for our blog author's

```yml
authors:
  tom:
    name: Tom Canabarro
    image: '/img/authors/tc.jpg'
    bio: Co-founder @ Konduto
    link: http://br.linkedin.com/in/tcanabarro/
  milton:
    name: Milton Tavares Neto
    image: '/img/authors/mt.jpg'
    bio: Co-founder @ Konduto
    link: http://br.linkedin.com/in/miltontavares/
  felipe:
    name: Felipe Held
    image: '/img/authors/fh.jpg'
    bio: "Head of Marketing & Communications @ Konduto"
    link: https://br.linkedin.com/in/felipeheld
  daniel:
    name: Daniel Bento
    image: '/img/authors/db.jpg'
    bio: Co-founder @ Konduto
    link: https://br.linkedin.com/in/danielbento
```

- The languages available in our website are in the _config.yml as well

```yml
languages: ["pt", "en", "es"]
```

- The first language in the array will be the default language, they will be added into separate subfolders. 

##To use this template:

* Run `bundle exec jekyll serve` to generate site locally
* View it by going to `http://localhost:4000`
* If all is well, upload contents of `_site` to your server

##Folder structure
* Our main pages are in `_data/language` folder. You just need to add the pages for en and es languages with the same pagename (you can see the pagname in the root of the website).
* The pagename.yml files are written in YAML syntax which caters for a simple grouping of strings
* Our template for post page is in `_layouts/post.html`

### Adding new post

Our posts are in `_i18n` folder with sub-folders for each language. You just need to add the new post in `_i18n/pt/_posts/` and do this for each language

In `_i18n` folder there is also `pt.yml`, `es.yml`, `en.yml`. There is a translation for blog and post pages (month, titles, book downloading links and etc.)

### Adding new page

Let's say you want to create an about page for the  website, you will create an `about.html` page on the root of the website (same place as index.html), with this:

```
---
title: About
pagename: about
---

```

Then, create exactlly the same name file `about.md` under `_data/en` with the English content. Repeat this for the other languages (_data/es/about.md ...). When running the website, visit the address `http://localhost:4000/about` to see the English version, `http://localhost:4000/es/about` for the Spanish one, etc.

You can use alredy existing parts from `_includes/` and `_includes/sections` folder. You can bulid a new page just like a lego

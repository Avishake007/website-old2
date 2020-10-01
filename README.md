# Team 2984's Website 

Source and content for the FRC Team 2984 website.

# Contributing

This site is compiled with [Metalsmith](http://www.metalsmith.io/), a static site generator. To use it, you'll need to install:

- [Git](https://git-scm.com/) for revision control;
- [Node.js](https://nodejs.org/en/) for language support;
- [Atom](https://atom.io/) or another text editor with syntax highlighting

Windows users will need to use [PowerShell](https://docs.microsoft.com/en-us/powershell/scripting/powershell-scripting?view=powershell-5.1), which is built into Windows 7+.

A better option is a Unix-based operating system such as Ubuntu or OSX. You'll have fewer problems with running the console, linefeeds, and installing software.

First, fork the team's [website repo](https://github.com/FRCTeam2984/website). This will create a copy in your own GitHub account.

Next, clone the repo from your github account. This command (use Terminal or PowerShell) will typically look like this:

```bash
git clone git@github.com:{username}/website.git
```

Where `{username}` is your GitHub username.

Change into the project directory:

```bash
cd website
```

Install dependencies:

```bash
npm install
```

Review changes:

```bash
git log
```

Open Atom and begin editing:

```bash
atom .
```

When done with your feature, commit changes:

```bash
git add .
git commit -m {message}
```

where `{message}` describes your changes.

Then, push to your own GitHub repository:

```bash
git push origin master
```

Finally, create a pull request by clicking the "New pull request" button on the [team's GitHub repo](https://github.com/FRCTeam2984/website).

After awhile, the team repo and your own will diverge. Update your local repository as follows.

First, add the team's repo as a remote:

```bash
# be sure you're in the website working directory!
git remote add team https://github.com/FRCTeam2984/website.git
```

Next, merge changes onto a newly-created branch.

```bash
# create a branch and check it out
git checkout -b upstream

# pull changes
git pull team master

# You may need to handle merge conflicts

# checkout master
git checkout master

# merge changes
git merge upstream

# delete branch
git branch -d upstream
```

# Tasks

Metalsmith can compile the site and serve it through `localhost`.

```bash
# clean the build directory
npm run clean

# compile
npm run compile

# start server, which serves content on localhost:3000
npm start
```

# Starting a New Post

1. Create a file called `src/blog/{title}`.md, where `{title}` is a [kebab-case](http://wiki.c2.com/?KebabCase) version of your post's title. For example, for a title of "Hello World," use the file `src/blog/hello-world.md`.
2. Front matter goes at the top of the file. Minimally, it should include: `title`; `date`; and `updated` fields.
3. Compile. The new post should be available at the path `/blog/{title}/`.

You can preview a post directly from Atom without running Metalsmith.

First, install [Atom Markdown Preview](https://github.com/atom/markdown-preview) if it isn't already. To preview, press ctrl-shift-m (or command-shift-m on OSX).

Markdown features available in posts include:

- image: `![Description](/images/posts/{timestamp}/{filename})` where `{timestamp}` is the timestamp for the post in YYYYMMDD format (e.g., 20171126) and `{filename}` is the name of the file including extension (e.g., `awesome.png`)
- link: `[anchor text]({url})` where `url` is the path to the link. `{url}` can be relative or absolute. Relative links direct outside of the site (e.g., google.com) and internal links direct inside the site (e.g., /donors/)
- bold: `**really important**`
- italic: `*emphasize this*`
- list: `- {item}` where `{item}` is the think you're listing. An item can contain other Markdown elements such as images and links
- heading: H1 (`# {heading}`) and H2 (`## {heading}`) are supported, where `{heading}` is the heading text

Here's an example post:

```markdown
---
title: Hello, World!
date: 2018-01-06 08:00:00
updated: 2018-01-06 08:00:00
author: John Smith
---

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Here is a robot image:

![2016 Robot](/images/2016Robot.jpg)

Here is a bulleted list:

- one
- two
- buckle my shoe
- *italic*
- **bold**
- [a link](https://www.firstinspires.org/robotics/frc)
- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ...

# This is an H1 Heading

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## This in an H2 Heading

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

```

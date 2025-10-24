---
title: "Providing a New Home to JSON Feed"
author: FelicianoTech
date: "2025-10-24T18:30:00-04:00"
description: "I'm a huge advocate of RSS feeds but their use is fading into obscurity. When I discovered JSON Feed I was ecstatic but the project has languished. Today I'm finally doing something about it."
categories:
  - "Projects"
tags:
  - jsonfeed
feature: "json-feed-introduction--2000x1250.jpg"
---

I'm a huge advocate of RSS & Atom feeds and it saddens me that their use is fading into obscurity.
This is why when I discovered a project called JSON Feed about 5 years ago, I was ecstatic.
The problem is, the project has languished.
Today I'm finally doing something about it.

<!--more-->

## What exactly is JSON Feed?

This isn't "the pitch".
This isn't the big, energetic article on what it is and why you should use it.
That will come later.
Instead, I'll quickly explain what JSON Feed is and why it is being added as a Linodians project.

JSON Feed is what RSS and Atom are.
It is an open web syndication format. A feed.
The key difference is that the schema is JSON instead of XML.
If that doesn't intrigue you, that's fair.
You can stop reading here.
If you get it, let's continue to the point of this blog post.

## The JSON Feed project has been neglected

The JSON Feed "official" website can be found at [JSONFeed.org](https://www.JSONFeed.org).
The website's code and feed schema can be found on GitHub at [github.com/manton/JSONFeed](https://github.com/manton/JSONFeed).
Years of GitHub Issues and Pull Requests have piled up.
The project doesn't have any momentum.
Like a bad neighborhood, PRs are decaying, people are leaving, links are broken.

In December of 2020, [I volunteered to help](https://github.com/manton/JSONFeed/issues/150) maintain the repository.
There was some hand waving by the maintainer but ultimately no change.
Again in September of 2024 [someone else brought up the notion of adding maintainers](https://github.com/manton/JSONFeed/issues/173) in order to get the project going.
More hand waving, little change.
In that same GH Issue in 2025 I mentioned I would be doing a new JSON Feed website.
The co-creator told me it was not necessary, he has it.
A flurry of PRs finally got merged, some Issues closed, and then again it appears the project is going dormant.

I'm not satisfied.

## Linodians will steward JSON Feed

A section of [Linodians.com](https://www.linodians.com) will be dedicated to educating visitors on JSON Feed and improving discovery of projects that support it.
Maybe we will maintain some of the projects if we need to, but ideally we help foster a community that will incorporate JSON Feed into all sorts of programming languages, frameworks, and end-user applications.

### Beyond JSON Feed
This mission isn't limited to JSON Feed itself.
I mentioned in the intro that an open web is important to me.
Feeds are important; They're cool.
For example, did you know [most URLs on Mastodon can be viewed as RSS feeds](https://mstdn.social/@feditips/108357998963885456)?
Or that on GitHub, [releases, commits, and more have automated Atom feeds](https://www.reddit.com/r/rss/comments/1cqmwsn/github_rss_feeds/)?

Linodians adding JSON Feed as a project is less about replacing RSS and Atom and more about advocating the use of feeds where they currently aren't.

### Fostering vs adoption
Are we fostering JSON Feed?
Getting it active & healthy again until we can pass it back to the founders?
Or are we adopting it? Permanently fueling the project so that it can make a difference on the web?
I honestly don't know.

If we can get interest in JSON Feed growing again and get the founders reinvested in their own project, great!
Maybe we can merge the work we do here back to their website.
If not, that's okay too.

## The preliminary plan

To start, I wanted to transfer over a lot of the existing website (JSONFeed.org) to Linodians.
This is mostly done.
I already have the landing page, [linodians.com/JSONFeed](https://linodians.com/jsonfeed) as well as the [Code](https://www.linodians.com/jsonfeed/code/), [Spec](https://www.linodians.com/jsonfeed/specification/), and [Mapping](https://www.linodians.com/jsonfeed/mapping-to-jsonfeed/) pages.
There's likely a few new pages to be added in the future such as a history page.
It's important to preserve how the project got started and information on the two creators, Manton and Brent.

The Code page, and the projects it lists, is where a lot of time needs to be spent.
I want to make the page itself better.
A better layout with categories.
I also want to audit the projects.
Some of them are dead, might have removed JSON Feed support, etc.

Getting JSON Feed talked about on blogs, podcasts, meetups and conferences will be important as well.
A strategy will need to be developed.

A more detailed plan, and one that we continue to update, can be found [on GitHub](https://github.com/linodians/www.linodians.com/issues/10).

### What's not on the roadmap
I don't have any immediate plans to touch the JSON Feed schema itself.
Manton and Brent have already published JSON Feed v1.0 and v1.1.
I don't believe additions or changes to the schema are what the project needs right now and I'm not confident that I am knowledgeable enough to add them.
I think the creators gave us an excellent starting point to work with and advocacy is what we need right now.

## Let's Get Started!

Now you know what we're doing and why. Interested?
You can participate in various ways including brainstorming, code, reaching out to contacts, etc.
Here are the resources we have so far:

* [JSON Feed on Linodians Discuss](https://discuss.linodians.com/c/projects/json-feed/8) \- where you can start a discussion, ask questions, introduce yourself, etc.  
* [JSON Feed on GitHub](https://github.com/linodians/www.linodians.com/tree/trunk/src/content/jsonfeed) \- in this subdirectory of the GitHub repository is where you can find the webpage files.  
* [JSON Feed Homepage](https://www.linodians.com/jsonfeed/) \- here's where on the website you can find the homepage.

<br>

Until the next one,  
Ricardo (FelicianoTech)

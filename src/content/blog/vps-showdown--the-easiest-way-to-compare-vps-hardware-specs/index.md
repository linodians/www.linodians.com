---
title: "VPS Showdown: The Easiest Way to Compare VPS Hardware Specs"
author: FelicianoTech
date: "2025-10-15T16:00:00-04:00"
categories:
  - "News"
tags:
  - joshtronic
  - hardware
feature: "vps-showdown.jpg"
---



It's been just over two months since I've written on this blog.
I am working on some things for Linodians but nothing to share today.
Instead, I wanted to cover a microsite created by Josh Sherman (joshtronic) that I think our community would enjoy.

<!--more-->

VPS Showdown lets you compare a plan from one VPS provider, such as Linode, up against another, such as DigitalOcean.
What's great is that you're not just comparing marketing specs that you can get yourself from their websites.
Instead, VPS Showdown compares real-world benchmarks that run from real servers on those platforms.

{{< figure src="screenshot-1.png" >}}


## How did the VPS Showdown come about?

I'm a longtime reader of the [Joshtronic blog](https://joshtronic.com/blog/).
Like [my own blog](https://www.Feliciano.Tech), Josh writes about a variety of topics.
His posts are usually tech-leaning and frequently provide learnings from a recent experience or experiment that Josh has had.
One such experiment grew into a long run of blog posts called the VPS Showdown.

These posts were typically once-a-month, compared two or more providers, and narrowed down to a specific plan or price point.
Josh basically wrote some homegrown scripts, used a few APIs, and ran some benchmarks.
The blog post shared the results and we were all the better for it.

Earlier this year Josh decided to further automate this project and move it to a microsite called [VPSShowdown.com](https://VPSShowdown.com).


## Why is this useful?

Comparing the pricing pages between Linode and Vultr doesn't give you the full picture.
The number of CPU cores are the same, amount of RAM is the same, disk storage the same, and maybe the price is within $2 of each other.
Do they actually perform the same when running your software though?
That's what VPS Showdown can help you answer.

**Benchmarks**

{{< figure src="screenshot-2.png" >}}

Two providers might offer the same plans at the same price but the hardware you get may not be the same.
VPS Showdown provides CPU information (brand, clock speed, model, etc) and benchmarks RAM read speeds, write speeds, and disk I/O.
It also runs an instance of the MySQL database on the VPS and benchmarks that as well.

{{< figure src="screenshot-3.png" >}}

**Periodic tests**

Hardware isn't static.
The hardware you get from a provider can vary from one data center to another.
Over time, a VPS provider will turn over their fleet replacing aging hardware with new tech.
This means a benchmark comparison from one period of time may not hold up in the future.
VPS Showdown regularly (I'm not sure the specific time frame) re-runs benchmarks for plans in order to provide fresh data.
That sounds pretty handy to me.

---

[VPS Showdown](https://vpsshowdown.com) is a cool website to learn a bit when you're shopping around and to play with.
I suggest you check it out. You can find Josh's own blog post announcing this project [here](https://joshtronic.com/2025/05/04/vps-showdown-has-moved/).


Until the next one,  
Ricardo (FelicianoTech)

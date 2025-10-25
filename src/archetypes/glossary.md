---
title: "{{ replace .File.ContentBaseName `-` ` ` | title }}"
acronym: ""
related:
- slug1
- slug2
aka:
---

Short description.

<!--more-->

Optional, longer description.

<!-- Delete this line and everything below it before publishing. -->

Every term has a "slug". The slug is determined by the filename, without the extension.

- Title: (required) Should be a human readable version of the term.
- acronym: The acronym or initialism version of the term. This field can be deleted if it doesn't apply.
- related: A list of term slugs that closely relate to this term.
- aka: If this term can also be known by another name, use it here.

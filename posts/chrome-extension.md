---
title: "Building my first chrome extension"
date: "2021-01-19"
---

For five pounds, half an hour of disappointment (the docs aren't that well maintained) and a short wait while it's reviewed, you can create your own chrome extension.

<div class="shoutout">Hi</div>

- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.

Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.
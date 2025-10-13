---
title: My first post
layout: base.njk
---

<aside>
  {% for fact in facts %}
    <p>{{ fact }}</p>
  {% endfor %}
</aside>
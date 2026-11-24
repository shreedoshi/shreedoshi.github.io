---
layout: modern
title: "Research"
summary: "Calibrating wide-field instruments and studying fast transients in the optical and radio sky."
permalink: /research/
redirect_from:
  - /portfolio/
---

{% assign projects = site.portfolio | where: "section", "research" | sort: "order" %}
<ul class="sd-rows">
{% for p in projects %}{% include sd-row.html post=p %}{% endfor %}
</ul>

## Posters and presentations

{% assign talks = site.talks | sort: "date" | reverse %}
{% if talks.size > 0 %}
<ul class="sd-list">
{% for t in talks %}<li><a href="{{ t.url | relative_url }}">{{ t.title }}</a><span>{{ t.type }}, {{ t.venue }}, {{ t.date | date: "%B %Y" }}</span></li>{% endfor %}
</ul>
{% endif %}

Posters, slides and abstracts are collected on the [posters and talks page]({{ '/talks/' | relative_url }}).

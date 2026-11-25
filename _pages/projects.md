---
layout: modern
title: "Projects"
summary: "Rockets I've designed, built and flown, and the optics to track them."
permalink: /projects/
redirect_from:
  - /rocketry/
---

Outside of academics, I am also passionate about engineering projects. This started at the Rocket Propulsion Laboratory (RPL) at UC San Diego, where I'm co-lead of Mission Control. I got my Level 1 high-power rocketry certification and developed my independent research, which brings my interests in optics and rocketry together.

{% assign projects = site.portfolio | where: "section", "projects" | sort: "order" %}
<ul class="sd-rows">
{% for p in projects %}{% include sd-row.html post=p %}{% endfor %}
</ul>

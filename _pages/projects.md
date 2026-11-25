---
layout: modern
title: "Projects"
summary: "Rockets I've designed, built and flown, and the optics to track them."
permalink: /projects/
redirect_from:
  - /rocketry/
---

Outside the lab, most of my building happens with the Rocket Propulsion Laboratory (RPL), UC San Diego's student rocketry organization, where I'm co-lead of Mission Control. My independent research brings my two interests together: using optics to measure how rockets actually fly.

{% assign projects = site.portfolio | where: "section", "projects" | sort: "order" %}
<ul class="sd-rows">
{% for p in projects %}{% include sd-row.html post=p %}{% endfor %}
</ul>

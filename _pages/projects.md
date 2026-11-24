---
layout: modern
title: "Projects"
summary: "Hardware I've designed, built and flown: rocket tracking optics, a spectrograph, and high-power rockets."
permalink: /projects/
redirect_from:
  - /rocketry/
---

Outside the lab, most of my building happens with the [Rocket Propulsion Laboratory](https://rocketproplab.org) (RPL), UC San Diego's student rocketry organization, where I've gone from team member to analysis lead to project lead. My independent research brings my two interests together: using optics to measure how rockets actually fly.

{% assign projects = site.portfolio | where: "section", "projects" | sort: "order" %}
<ul class="sd-rows">
{% for p in projects %}{% include sd-row.html post=p %}{% endfor %}
</ul>

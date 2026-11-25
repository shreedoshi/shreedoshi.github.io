---
layout: modern
title: "Research"
summary: "Astrometric calibration for wide-field transient searches, with the Optical and Infrared Laboratory (OIRLab) at UC San Diego."
permalink: /research/
redirect_from:
  - /portfolio/
---

Since 2024 I've worked with Prof. Shelley Wright and Dr. Jérôme Maire on Panoramic SETI (PANOSETI), an observatory built to catch optical flashes lasting from nanoseconds to seconds. My work makes sure that when PANOSETI sees something, we know where on the sky it came from.

{% assign projects = site.portfolio | where: "section", "research" | sort: "order" %}
<ul class="sd-rows">
{% for p in projects %}{% include sd-row.html post=p %}{% endfor %}
</ul>

## Publications

{% include sd-pubs.html %}

## Presentations

{% include sd-talks.html %}

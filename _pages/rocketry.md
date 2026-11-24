---
layout: modern
title: "Rocketry"
summary: "Designing, building and flying high-power rockets, from my Level 1 certification flight to team propulsion work."
permalink: /rocketry/
---

<!-- TODO: rewrite this paragraph in your own voice: what draws you to rocketry and how it connects to your instrumentation work. -->
Rocketry is where I get my hands on hardware: designing an airframe, choosing a motor, predicting a flight and then seeing how close the real thing comes. It's the same loop of modeling, testing and correcting that drives my calibration research.

{% assign projects = site.portfolio | where: "section", "rocketry" | sort: "order" %}
<ul class="sd-rows">
{% for p in projects %}{% include sd-row.html post=p %}{% endfor %}
</ul>

## Rocket Propulsion Laboratory

I'm a member of the [Rocket Propulsion Laboratory](https://rocketproplab.org) at UC San Diego, a student organization that designs propulsion systems and launch vehicles.
<!-- TODO: add 2–4 sentences on your role in RPL: subteam, what you designed/built/tested, and anything you're proud of. Add photos to /images/ and include them like:
![Caption](/images/rpl-photo.jpg) -->

<!-- TODO: add your rocketry interests here, e.g.

## Interests

* Flight simulation and comparing predicted to measured trajectories
* Avionics and onboard sensing
* Recovery system design

(remove these comment markers once the list is yours) -->

## Documentation

{% assign doc_count = 0 %}
{% for p in projects %}{% if p.docs %}{% assign doc_count = doc_count | plus: p.docs.size %}{% endif %}{% endfor %}
{% if doc_count > 0 %}
<ul class="sd-docs">
{% for p in projects %}{% for d in p.docs %}<li><a href="{{ d.url | relative_url }}"><i class="fa-regular fa-file-lines" aria-hidden="true"></i> {{ d.title }}</a><span>{{ p.title }}</span></li>{% endfor %}{% endfor %}
</ul>
{% else %}
<p class="sd-empty">Build logs, simulation files and flight reports will be posted here.</p>
{% endif %}

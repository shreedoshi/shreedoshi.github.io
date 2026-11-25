---
layout: modern
title: "CV"
permalink: /cv/
redirect_from:
  - /resume
---

<p class="sd-actions sd-actions--top"><a class="sd-button" href="/files/Shree_Doshi_CV.pdf">Download CV (PDF)</a></p>

## Education

<div class="sd-cv">
  <div class="sd-cv__row">
    <div><strong>University of California, San Diego</strong><br>B.S. Physics, specialization in Astrophysics; minor in Mathematics<br><span class="sd-cv__note">GPA 3.794. Coursework includes astrophysics, observational optical research lab, waves and optics, statistical and thermal physics, quantum mechanics.</span></div>
    <div class="sd-cv__date">2023 – 2027</div>
  </div>
  <div class="sd-cv__row">
    <div><strong>Delhi Private School</strong>, Sharjah, UAE<br>High school diploma</div>
    <div class="sd-cv__date">2020 – 2023</div>
  </div>
</div>

## Research experience

<div class="sd-cv">
  <div class="sd-cv__row">
    <div><strong>Undergraduate Research Assistant</strong>, OIRLab, UC San Diego<br>Advisor: Prof. Shelley Wright<br><span class="sd-cv__note">Building a Python pipeline to characterize and correct optical distortion in Panoramic SETI: data reduction, noise removal, centroiding, star identification, detector-to-sky transformation, VizieR catalog matching, and 2D distortion maps across the 10° × 10° field. <a href="/research/panoseti-astrometry/">Project page</a></span></div>
    <div class="sd-cv__date">2024 – present</div>
  </div>
  <div class="sd-cv__row">
    <div><strong>Electronics Lead</strong>, Astrotech, UC Berkeley<br><span class="sd-cv__note">Designed and built a spectrograph to identify aurorae on Jupiter and detect kilonovae; programmed a motorized detector stage and integrated it with the optics, calibration, detector and software subsystems.</span></div>
    <div class="sd-cv__date">Summer 2026</div>
  </div>
  <div class="sd-cv__row">
    <div><strong>Ground-Based Optical Rocket Tracking System</strong>, independent research, RPL<br><span class="sd-cv__note">Prototyping a camera system to reconstruct rocket trajectories and compare them with onboard sensors and simulations; upgrading a Level 1 rocket with an altimeter and onboard camera for validation flights. <a href="/projects/rocket-tracking/">Project page</a></span></div>
    <div class="sd-cv__date">2026 – present</div>
  </div>
</div>

## Publications

{% include sd-pubs.html %}

## Presentations

<div class="sd-cv">
{% assign talks = site.talks | sort: "date" | reverse %}
{% for t in talks %}
  <div class="sd-cv__row">
    <div><a href="{{ t.url | relative_url }}"><strong>{{ t.title }}</strong></a><br>{{ t.type }}, {{ t.venue }}</div>
    <div class="sd-cv__date">{{ t.date | date: "%b %Y" }}</div>
  </div>
{% endfor %}
</div>

## Awards and fellowships

<div class="sd-cv">
  <div class="sd-cv__row">
    <div><strong>Summer Program for Undergraduate Research in Science (SPURS)</strong>, UC San Diego<br><span class="sd-cv__note">$7,500 award for a 10-week project simulating PANOSETI imaging-mode data and developing an automated distortion map pipeline.</span></div>
    <div class="sd-cv__date">Summer 2026</div>
  </div>
</div>

## Leadership and engineering

<div class="sd-cv">
  <div class="sd-cv__row">
    <div><strong>Co-lead, Mission Control</strong>, Rocket Propulsion Laboratory</div>
    <div class="sd-cv__date">Present</div>
  </div>
  <div class="sd-cv__row">
    <div><strong>Daedalus Project Lead</strong>, Rocket Propulsion Laboratory<br><span class="sd-cv__note">Lead about 65 students in teams of 4–5 building G-class rockets; mentor teams across CAD, 3D printing, analysis, avionics and launch operations.</span></div>
    <div class="sd-cv__date">Fall 2026 – present</div>
  </div>
  <div class="sd-cv__row">
    <div><strong>Co-lead Chief Engineer, Analysis team</strong>, Rocket Propulsion Laboratory<br><span class="sd-cv__note">CFD, FEA and thermal simulation in Ansys; design validation with structures, avionics and propulsion. Earned NAR Level 1 certification and supported 11 members in earning theirs.</span></div>
    <div class="sd-cv__date">2025 – 2026</div>
  </div>
  <div class="sd-cv__row">
    <div><strong>Team Member, Daedalus Rocket Project</strong>, Rocket Propulsion Laboratory<br><span class="sd-cv__note">Designed, fabricated and launched a G-class rocket with SolidWorks, OpenRocket and 3D printing.</span></div>
    <div class="sd-cv__date">2023 – 2024</div>
  </div>
  <div class="sd-cv__row">
    <div><strong>Instructional Assistant</strong>, Department of Physics, UC San Diego</div>
    <div class="sd-cv__date">2024 – present</div>
  </div>
</div>

## Outreach

<div class="sd-cv">
  <div class="sd-cv__row">
    <div><strong>ARMS</strong> (Advocating for and Representing Minority Students), Society of Physics Students, UC San Diego</div>
    <div class="sd-cv__date">2025 – present</div>
  </div>
  <div class="sd-cv__row">
    <div><strong>Space Is Calling</strong>, Birch Aquarium, representing RPL</div>
    <div class="sd-cv__date">May 2026</div>
  </div>
  <div class="sd-cv__row">
    <div><strong>Dubai Astronomy Group</strong>, member</div>
    <div class="sd-cv__date">2019 – 2023</div>
  </div>
</div>
<p><a href="/outreach/">More about my outreach work</a></p>

## Skills

<div class="sd-cv">
  <div class="sd-cv__row"><div><strong>Programming:</strong> Python, MATLAB</div></div>
  <div class="sd-cv__row"><div><strong>Engineering software:</strong> Ansys (CFD, FEA, thermal), SolidWorks, Fusion 360, OpenRocket</div></div>
  <div class="sd-cv__row"><div><strong>Research:</strong> astronomical data reduction, astrometry, simulation validation, scientific writing</div></div>
  <div class="sd-cv__row"><div><strong>Certifications:</strong> NAR Level 1 high-power rocketry</div></div>
</div>

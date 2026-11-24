---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

<!-- TODO: upload a PDF of your CV to /files/ as Shree_Doshi_CV.pdf, then uncomment the next line. -->
<!-- [Download PDF version](/files/Shree_Doshi_CV.pdf){: .btn .btn--primary} -->

Education
======
* **B.S. in TODO: major**, University of California San Diego, TODO: expected graduation (e.g. June 2027)
  <!-- TODO: optional: GPA, minors, honors -->

Research Experience
======
* **Undergraduate Researcher, PANOSETI**, UC San Diego / Palomar Observatory, TODO: dates
  * Develop optical distortion correction and astrometric calibration pipelines for the PANOSETI wide-field transient observatory.
  * <!-- TODO: second bullet with a concrete result -->
  * Advisor: <!-- TODO -->

* **TODO: RPL role**, TODO: RPL full name, TODO: dates
  * <!-- TODO: what you did -->

Skills
======
<!-- TODO: edit to match your actual skills -->
* **Programming:** Python (NumPy, SciPy, Astropy, Matplotlib), TODO
* **Methods:** Astrometric calibration, optical distortion modeling, TODO
* **Tools:** Git, Linux, TODO

Awards & Honors
======
<!-- TODO: scholarships, fellowships, dean's list, travel grants. Delete this section if empty. -->
* TODO

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>

Presentations
======
  <ul>{% for post in site.talks reversed %}
    {% include archive-single-talk-cv.html  %}
  {% endfor %}</ul>

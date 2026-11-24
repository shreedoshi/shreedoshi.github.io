---
title: "Distortion correction and astrometry for PANOSETI"
summary: "Mapping every detector pixel of a wide-field Fresnel-lens telescope to an accurate position on the sky."
context: "PANOSETI, Palomar Observatory"
section: research
featured: true
order: 1
permalink: /research/panoseti-astrometry/
role: "Undergraduate researcher"
group: "PANOSETI, UC San Diego"
advisor: ""        # TODO: e.g. "Prof. Shelley Wright"
dates: ""          # TODO: e.g. "2025 – present"
# image: /images/distortion-map.png      # TODO: add your distortion map to /images/ and uncomment
image_alt: "Distortion map across the PANOSETI field of view"
caption: ""        # TODO: one sentence explaining what the figure shows
placeholder: "Distortion map"
# links:
#   - label: "Code on GitHub"
#     url: "https://github.com/..."
in_progress: true
---

[PANOSETI](https://oirlab.ucsd.edu/PANOSETI.html) is a wide-field optical and near-infrared observatory built to search for very short transients, from nanoseconds to seconds. Each telescope focuses light with a Fresnel lens onto a pixelated detector, and that wide-field optical path distorts the image of the sky. Before a flash seen by one telescope can be matched to the same flash seen by another, each pixel needs a reliable position on the sky.

I develop the pipeline that measures this distortion, fits a model for it, and produces a pixel-to-sky mapping with known uncertainties.

## Approach

<!-- TODO: replace with your actual methods. Suggested points:
* the data: star-field observations, calibration frames, which telescopes
* the distortion model (e.g. radial / polynomial terms) and how you fit it
* how you matched detected sources to a reference catalog (e.g. Gaia)
* tools: Python, Astropy, NumPy, SciPy, ...
-->

## Results

<!-- TODO: lead with a number, e.g. "Reduced RMS astrometric residuals from X to Y across the field",
then say what this enables (e.g. localizing coincident events between telescopes).
A before/after residual plot works well here:
![Residuals before and after correction](/images/residuals.png) -->

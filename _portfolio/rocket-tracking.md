---
title: "Ground-based optical rocket tracking"
summary: "Reconstructing rocket trajectories from the ground with cameras, and checking them against onboard sensors and flight simulations."
context: "Independent research, Rocket Propulsion Laboratory, 2026 – present"
section: projects
featured: true
order: 1
permalink: /projects/rocket-tracking/
redirect_from:
  - /independent-research/
role: "Independent researcher"
group: "Rocket Propulsion Laboratory, UC San Diego"
dates: "2026 – present"
image: /images/l1-rocket-launch-crop.jpg
image_alt: "Red and yellow high-power rocket climbing on a smoke trail against a clear sky."
caption: "The kind of flight the system is designed to follow: my Level 1 rocket shortly after liftoff."
---

When a rocket flies, its onboard altimeter tells you one story and the simulation you ran beforehand tells you another. I'm building a prototype ground-based optical tracking system to provide a third, independent measurement: reconstructing the trajectory from cameras on the ground.

It connects directly to my research: turning pixels into accurate positions is the core problem in astrometric calibration for PANOSETI, and it's the same problem here, with a rocket in place of a star.

## What I'm doing

* **Optics:** comparing camera and lens configurations to find a setup that can follow a rocket from the pad to apogee.
* **Software:** writing code to detect the rocket in each frame and reconstruct its trajectory.
* **Flight test vehicle:** upgrading my [Level 1 rocket](/projects/l1-rocket/) with reinforced fins, an altimeter and an onboard camera, so each flight produces data to validate the optical measurements against.

## Goal

Compare optically reconstructed trajectories with onboard sensor data and with OpenRocket simulations, to understand where each method agrees, where it diverges, and why.

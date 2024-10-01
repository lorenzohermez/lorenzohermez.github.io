---
title: "An enhanced characterization of gait deviations in Hemiparesis by combining knee and ankle kinematics"
collection: publications
category: conferences
permalink: /publication/gait-posture-2024
excerpt: 'This study completes the method proposed in [Sensors](https://lorenzohermez.github.io/sensors-2023) by considering sagittal ankle angular kinematics.'
date: 2024-09-20
venue: 'Gait & Posture'
# slidesurl: 'http://lorenzohermez.github.io/files/slides-esmac.pdf'
citation: 'L. Hermez, N. Houmani, S. Garcia-Salicetti, O. Galarraga, and V. Vincent. "An enhanced characterization of gait deviations in Hemiparesis by combining knee and ankle kinematics". <i>Gait & Posture</i>, 113:91–92, 2024. ISSN 0966-6362. https://doi.org/10.1016/j.gaitpost.2024.07.106'
---

Gait quality measures such as GDI [1](https://doi.org/10.1016/j.gaitpost.2008.05.001) and GPS [2](https://doi.org/10.1016/j.gaitpost.2009.05.020) rely on the Euclidian distance between time-normalized kinematic data to an average standard derived from healthy samples. Not accounting for temporal shifts can make these measures difficult to interpret or even unsuitable in some cases. For instance, in adult Hemiparesis, GDI and GPS are paradoxically often closer to the standard for the affected limb than for the unaffected limb [3](https://doi.org/10.1016/j.gaitpost.2018.06.126). We propose a novel method to characterize normal gait by identifying multiple representatives among the control group, and to compute deviations using an elastic metric taking into account temporal shifts.

### Research Question

Can multiple healthy representatives of knee and ankle kinematics characterize normal gait variability and finely quantify deviations in healthy subjects and patients with Hemiparesis?

### Methods

We considered data of Healthy Controls (HC) and patients with Hemiparesis (HP). We extended the method in [4] by identifying Normal Gait Profiles (NGPs) corresponding to knee and ankle cycles of HC, separately, in the sagittal plane. NGPs were real strides obtained from representatives after a K-medoid clustering with a Dynamic Time Warping (DTW) metric [4]. To analyze gait deviations, DTW distances to knee and ankle NGPs were computed and concatenated into a vector, for each stride in both ...

### Results

Three NGPs were required to accurately capture the variability of normal gait for both knee and ankle kinematics. Upon applying Hierarchical Clustering to the 6-dimensional vectors, HC strides were grouped into the two closest clusters to NGPs (green and purple in Figure 1.a). Furthermore, we successfully identified the affected lower limb for 17 out of 21 (81%) HP patients, since the unaffected limb was assigned to the two closest clusters to NGPs, while the affected limb was assigned to the ...

### Discussion

Jointly stratifying deviations from knee and ankle NGPs, after computing such joints’ NGPs separately, leads to a refined characterization of normal gait, and highlights the unilateral aspect of Hemiparesis comparatively to GVS and GDI. This extends our results in [6] obtained on the knee joint. These findings underscore the importance of utilizing DTW to capture temporal and angular differences. In future work, we aim to incorporate kinematics of additional joints and planes.

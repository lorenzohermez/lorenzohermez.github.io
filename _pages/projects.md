---
layout: page
title: projects
permalink: /projects/
description: Research and innovation projects.
nav: true
nav_order: 3
---

## Not involved in project acquisition

- **ANR Bandits Improve Patients follow-UP – [BIP-UP](https://anr.fr/Projet-ANR-22-CE23-0031)** (2023–2027)  
  Postdoctoral researcher under Prof. Philippe Preux. Focus on prediction of personalized patients follow-up after bariatric surgery.

- **IMT Futur, Rupture and Impacts grant – [FR&I](https://www.imt.fr/en/let-s-commit-together/program-futur-ruptures-impacts/)** (2022–2025)  
  Doctoral researcher under Prof. Sonia Garcia and Dr. Nesma Houmani. Focused on characterization of neurological diseases through human gait patterns.



## Involved in project acquisition

coming soon

<!-- pages/projects.md 
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each project 
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display projects without categories 

{% assign sorted_projects = site.projects | sort: "importance" %}

  <!-- Generate cards for each project 

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>-->



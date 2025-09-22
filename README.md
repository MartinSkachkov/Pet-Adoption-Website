# [Pet Adoption Website 🐾](https://martinskachkov.github.io/Pet-Adoption-Website/)

A simple responsive **Pet Adoption Website** built with **HTML, CSS, and JavaScript**.  
The site displays a list of pets fetched from a JSON API and allows users to filter them by species (dogs, cats, rabbits, etc.). Click the link above to see the site.

## 🚀 Features

- Fetches pet data dynamically from [learnwebcode.github.io](https://learnwebcode.github.io/pet-adoption-data/pets.json).
- Displays each pet inside a styled **card component** with:
  - Name
  - Age (calculated from birth year)
  - Species
  - Description
  - Adoption link
- **Filter navigation** to show:
  - All animals
  - Only dogs
  - Only cats
  - Only rabbits
- Responsive design with hover effects and clean UI.

## 🛠️ Tech Stack

- **HTML5** – Structure
- **CSS3** – Styling & responsiveness
- **JavaScript (ES6 Modules)** – Fetching data, DOM manipulation, filtering

## 📂 Project Structure

```
├── index.html # Main HTML page
├── styles.css # Stylesheet
├── main.js # JavaScript logic
└── README.md # Project documentation
```

## ⚙️ How It Works

1. When the page loads, the script fetches `pets.json` from the API.
2. Each pet is rendered inside a card using a `<template>`.
3. Clicking a filter button applies a species filter by hiding/showing the relevant cards.
4. Each pet card has an **"Adopt"** button linking to its dedicated adoption page.

const petPromise = await fetch("https://learnwebcode.github.io/pet-adoption-data/pets.json")
const pets = await petPromise.json()

const template = document.querySelector("#animal-card")
const wrapper = document.createElement("div")

function decideAgeText(age) {
    if (!age) {
        return "Less than a year old"
    }

    return age > 1 ? `${age} years old` : "1 year old"
}

pets.forEach(pet => {
    const clone = template.content.cloneNode(true)

    const pet_name_el = clone.querySelector("h3")
    pet_name_el.textContent = pet.name

    const img_el = clone.querySelector("img")
    img_el.src = pet.photo
    img_el.alt = `A ${pet.species} name ${pet.name}`

    const age = new Date().getFullYear() - pet.birthYear
    const ageText = decideAgeText(age)
    const pet_age_el = clone.querySelector(".age")
    pet_age_el.textContent = ageText

    const species_el = clone.querySelector(".species")
    species_el.textContent = pet.species

    const description_el = clone.querySelector(".description")
    description_el.textContent = pet.description

    const adopt_btn_name = clone.querySelector(".name")
    adopt_btn_name.textContent = pet.name

    const adopt_btn =  clone.querySelector(".primary-btn")
    adopt_btn.href = `https://learnwebcode.github.io/pet-adoption-data/pets/${pet.id}/`

    wrapper.appendChild(clone)
});

const animals_section = document.querySelector(".animals")
animals_section.appendChild(wrapper)

const filterButtons = document.querySelectorAll(".filter-nav a")
filterButtons.forEach(el => {
    el.addEventListener("click", e => handleFilterClick(e))
})

function handleFilterClick(e) {
    let target = e.target

    e.preventDefault()
    filterButtons.forEach(el => {
        el.classList.remove("active")
    })
    target.classList.add("active")

    filterPets(target.dataset.filter)
}

function filterPets(species) {
    const allPets = document.querySelectorAll(".animal-card")

    if (species == "all") {
        allPets.forEach(el => {
                el.style.display = ""
            })
    } else {
        allPets.forEach(el => {
            if (el.querySelector(".species").textContent === species) {
                el.style.display = ""
            }else{
                el.style.display = "none"
            }
        })
    }
}


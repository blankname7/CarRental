const carContainer = document.getElementById('vehicles');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

const scrollStep = 390;

rightArrow.addEventListener('click', () => {
    carContainer.scrollBy({
        left: scrollStep,
        behavior: 'smooth'
    });
});

leftArrow.addEventListener('click', () => {
    carContainer.scrollBy({
        left: -scrollStep,
        behavior: 'smooth'
    });
});

const emailInput = document.getElementById('email-input');
const submitButton = document.getElementById('submit-button');

function updateButtonState() {
    submitButton.disabled = !emailInput.validity.valid
}

emailInput.addEventListener('input', () => {
    updateButtonState();
});

updateButtonState();

submitButton.addEventListener('click', () => {
    emailInput.value = "";
    updateButtonState();
});

const mclarenModal = document.getElementById('mclaren-modal');
const openMclarenModal = document.getElementById('mclaren-block');
const closeXMclaren = document.getElementById('modal-x-mclaren');

openMclarenModal.addEventListener('click', () => {
        mclarenModal.classList.add('show');
});

closeXMclaren.addEventListener('click', () => {
    mclarenModal.classList.remove('show');
});

mclarenModal.addEventListener('click', (event) => {
    if (event.target === mclarenModal) {
        mclarenModal.classList.remove('show');
    }
});

const bentleyModal = document.getElementById('bentley-modal');
const openBentleyModal = document.getElementById('bentley-block');
const closeXBentley = document.getElementById('modal-x-bentley');

openBentleyModal.addEventListener('click', () => {
        bentleyModal.classList.add('show');
});

closeXBentley.addEventListener('click', () => {
    bentleyModal.classList.remove('show');
});

bentleyModal.addEventListener('click', (event) => {
    if (event.target === bentleyModal) {
        bentleyModal.classList.remove('show');
    }
});

const spectreModal = document.getElementById('spectre-modal');
const openSpectreModal = document.getElementById('spectre-block');
const closeXSpectre = document.getElementById('modal-x-spectre');

openSpectreModal.addEventListener('click', () => {
    spectreModal.classList.add('show');
});

closeXSpectre.addEventListener('click', () => {
    spectreModal.classList.remove('show');
});

spectreModal.addEventListener('click', (event) => {
    if (event.target === spectreModal) {
        spectreModal.classList.remove('show');
    }
});

const ferraricillindriModal = document.getElementById('ferrari-cillindri-modal');
const openFerraricillindriModal = document.getElementById('ferrari-cillindri-block');
const closeXFerraricillindri = document.getElementById('modal-x-ferrari-cillindri');

openFerraricillindriModal.addEventListener('click', () => {
    ferraricillindriModal.classList.add('show');
});

closeXFerraricillindri.addEventListener('click', () => {
    ferraricillindriModal.classList.remove('show');
});

ferraricillindriModal.addEventListener('click', (event) => {
    if (event.target === ferraricillindriModal) {
        ferraricillindriModal.classList.remove('show');
    }
});

const huracanModal = document.getElementById('huracan-modal');
const openHuracanModal = document.getElementById('huracan-block');
const closeXHuracan = document.getElementById('modal-x-huracan');

openHuracanModal.addEventListener('click', () => {
    huracanModal.classList.add('show');
});

closeXHuracan.addEventListener('click', () => {
    huracanModal.classList.remove('show');
});

huracanModal.addEventListener('click', (event) => {
    if (event.target === huracanModal) {
        huracanModal.classList.remove('show');
    }
});

const purosangueModal = document.getElementById('purosangue-modal');
const openPurosangueModal = document.getElementById('purosangue-block');
const closeXPurosangue = document.getElementById('modal-x-purosangue');

openPurosangueModal.addEventListener('click', () => {
    purosangueModal.classList.add('show');
});

closeXPurosangue.addEventListener('click', () => {
    purosangueModal.classList.remove('show');
});

purosangueModal.addEventListener('click', (event) => {
    if (event.target === purosangueModal) {
        purosangueModal.classList.remove('show');
    }
});

const vantageModal = document.getElementById('vantage-modal');
const openVantageModal = document.getElementById('vantage-block');
const closeXVantageModal = document.getElementById('modal-x-vantage');

openVantageModal.addEventListener('click', () => {
    vantageModal.classList.add('show');
});

closeXVantageModal.addEventListener('click', () => {
    vantageModal.classList.remove('show');
});

vantageModal.addEventListener('click', (event) => {
    if (event.target === vantageModal) {
        vantageModal.classList.remove('show');
    }
});
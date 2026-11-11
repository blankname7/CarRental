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
        document.body.classList.add('modal-open');
});

closeXMclaren.addEventListener('click', () => {
    mclarenModal.classList.remove('show');
    document.body.classList.remove('modal-open');
});

mclarenModal.addEventListener('click', (event) => {
    if (event.target === mclarenModal) {
        mclarenModal.classList.remove('show');
        document.body.classList.remove('modal-open');
    }
});

const bentleyModal = document.getElementById('bentley-modal');
const openBentleyModal = document.getElementById('bentley-block');
const closeXBentley = document.getElementById('modal-x-bentley');

openBentleyModal.addEventListener('click', () => {
        bentleyModal.classList.add('show');
        document.body.classList.add('modal-open');
});

closeXBentley.addEventListener('click', () => {
    bentleyModal.classList.remove('show');
    document.body.classList.remove('modal-open');
});

bentleyModal.addEventListener('click', (event) => {
    if (event.target === bentleyModal) {
        bentleyModal.classList.remove('show');
        document.body.classList.remove('modal-open');
    }
});

const spectreModal = document.getElementById('spectre-modal');
const openSpectreModal = document.getElementById('spectre-block');
const closeXSpectre = document.getElementById('modal-x-spectre');

openSpectreModal.addEventListener('click', () => {
    spectreModal.classList.add('show');
    document.body.classList.add('modal-open');
});

closeXSpectre.addEventListener('click', () => {
    spectreModal.classList.remove('show');
    document.body.classList.remove('modal-open');
});

spectreModal.addEventListener('click', (event) => {
    if (event.target === spectreModal) {
        spectreModal.classList.remove('show');
        document.body.classList.remove('modal-open');
    }
});

const ferraricillindriModal = document.getElementById('ferrari-cillindri-modal');
const openFerraricillindriModal = document.getElementById('ferrari-cillindri-block');
const closeXFerraricillindri = document.getElementById('modal-x-ferrari-cillindri');

openFerraricillindriModal.addEventListener('click', () => {
    ferraricillindriModal.classList.add('show');
    document.body.classList.add('modal-open');
});

closeXFerraricillindri.addEventListener('click', () => {
    ferraricillindriModal.classList.remove('show');
    document.body.classList.remove('modal-open');
});

ferraricillindriModal.addEventListener('click', (event) => {
    if (event.target === ferraricillindriModal) {
        ferraricillindriModal.classList.remove('show');
        document.body.classList.remove('modal-open');
    }
});

const huracanModal = document.getElementById('huracan-modal');
const openHuracanModal = document.getElementById('huracan-block');
const closeXHuracan = document.getElementById('modal-x-huracan');

openHuracanModal.addEventListener('click', () => {
    huracanModal.classList.add('show');
    document.body.classList.add('modal-open');
});

closeXHuracan.addEventListener('click', () => {
    huracanModal.classList.remove('show');
    document.body.classList.remove('modal-open');
});

huracanModal.addEventListener('click', (event) => {
    if (event.target === huracanModal) {
        huracanModal.classList.remove('show');
        document.body.classList.remove('modal-open');
    }
});

const purosangueModal = document.getElementById('purosangue-modal');
const openPurosangueModal = document.getElementById('purosangue-block');
const closeXPurosangue = document.getElementById('modal-x-purosangue');

openPurosangueModal.addEventListener('click', () => {
    purosangueModal.classList.add('show');
    document.body.classList.add('modal-open');
});

closeXPurosangue.addEventListener('click', () => {
    purosangueModal.classList.remove('show');
    document.body.classList.remove('modal-open');
});

purosangueModal.addEventListener('click', (event) => {
    if (event.target === purosangueModal) {
        purosangueModal.classList.remove('show');
        document.body.classList.remove('modal-open');
    }
});

const vantageModal = document.getElementById('vantage-modal');
const openVantageModal = document.getElementById('vantage-block');
const closeXVantageModal = document.getElementById('modal-x-vantage');

openVantageModal.addEventListener('click', () => {
    vantageModal.classList.add('show');
    document.body.classList.add('modal-open');
});

closeXVantageModal.addEventListener('click', () => {
    vantageModal.classList.remove('show');
    document.body.classList.remove('modal-open');
});

vantageModal.addEventListener('click', (event) => {
    if (event.target === vantageModal) {
        vantageModal.classList.remove('show');
        document.body.classList.remove('modal-open');
    }
});

const tailboatModal = document.getElementById('hero-car-info-modal');
const openTailboatModal = document.getElementById('hero-car-info-block');
const closeXTailboatModal = document.getElementById('close-x-hero-car-info');

openTailboatModal.addEventListener('click', () => {
    tailboatModal.classList.add('show');
    document.body.classList.add('modal-open');
});

closeXTailboatModal.addEventListener('click', () => {
    tailboatModal.classList.remove('show');
    document.body.classList.remove('modal-open');
});

tailboatModal.addEventListener('click', (event) => {
    if (event.target === tailboatModal) {
        tailboatModal.classList.remove('show');
        document.body.classList.remove('modal-open');
    }
});

const rrblogModal = document.getElementById('blog-rr-modal-block-modal');
const openRrModal = document.getElementById('blog-rr-modal-block');
const closeXRrModal = document.getElementById('close-x-blog-rr-modal');

openRrModal.addEventListener('click', () => {
    rrblogModal.classList.add('show');
    document.body.classList.add('modal-open');
});

closeXRrModal.addEventListener('click', () => {
    rrblogModal.classList.remove('show');
    document.body.classList.remove('modal-open');
});

rrblogModal.addEventListener('click', (event) => {
    if (event.target === rrblogModal) {
        rrblogModal.classList.remove('show');
        document.body.classList.remove('modal-open');
    }
});

const vantageBlogModal = document.getElementById('vantage-blog-modal');
const openVantageBlogModal = document.getElementById('vantage-blog-block');
const closeXVantageblogModal = document.getElementById('close-x-vantage-blog');

openVantageBlogModal.addEventListener('click', () => {
    vantageBlogModal.classList.add('show');
    document.body.classList.add('modal-open');
});

closeXVantageblogModal.addEventListener('click', () => {
    vantageBlogModal.classList.remove('show');
    document.body.classList.remove('modal-open');
});

vantageBlogModal.addEventListener('click', (event) => {
    if (event.target === vantageBlogModal) {
        vantageBlogModal.classList.remove('show');
        document.body.classList.remove('modal-open');
    }
});

const yachtModal = document.getElementById('yacht-blog-modal');
const openYachtModal = document.getElementById('yacht-blog-block');
const closeXYachtModal = document.getElementById('close-x-yacht-blog');

openYachtModal.addEventListener('click', () => {
    yachtModal.classList.add('show'); 
    document.body.classList.add('modal-open');
});

closeXYachtModal.addEventListener('click', () => {
    yachtModal.classList.remove('show');
    document.body.classList.remove('modal-open');
});

yachtModal.addEventListener('click', (event) => {
    if (event.target === yachtModal) {
        yachtModal.classList.remove('show');
        document.body.classList.remove('modal-open');
    }
});
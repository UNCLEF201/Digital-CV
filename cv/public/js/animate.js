// ---------------------------- animate loader ----------------------------
load = () => {
    const loader = document.getElementById("loader")
    const cv = document.getElementById("cv")

    loader.classList.add("hidden");
    cv.classList.remove("hidden");
}

const num = Math.floor(Math.random() * 1000);
setTimeout(load, num);
// ---------------------------- animate loader ----------------------------
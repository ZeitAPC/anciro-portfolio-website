const toggleButtonID = document.getElementById("themeToggle");
let isLight = true;

const darkThemePalette = new Map([
    ["--color-text-main", "#ffe9c0"],
    ["--color-text-muted", "#3B2F2F"],
    ["--color-accent-secondary", "#c47a3c"],
    ["--color-bg-surface", "#2b1e1a"],
    ["--color-accent-primary", "#c47a3c"],
]);

const lightThemePalette = new Map([
    ["--color-text-main", "#3B2F2F"],
    ["--color-text-muted", "#ffe9c0"],
    ["--color-accent-secondary", "#6F4E37"],
    ["--color-bg-surface", "#4B3832"],
    ["--color-accent-primary", "#d2691e"],
]);

const setToDarkTheme = () => {
    for (const [varName, color] of darkThemePalette){
        document.documentElement.style.setProperty(varName, color);
    }
}
const setToLightTheme = () => {
    for (const [varName, color] of lightThemePalette){
        document.documentElement.style.setProperty(varName, color);
    }
}
const toggleTheme = () =>{
    isLight = !isLight;
    if (isLight){
        setToLightTheme();
        console.log("Set to light mode");
        toggleButtonID.innerHTML = '<i class="fa-solid fa-sun"></i> Light Mode';
    }
    else{
        setToDarkTheme();
        console.log("Set to dark mode");
        toggleButtonID.innerHTML = '<i class="fa-solid fa-moon"></i> Dark Mode';
    }
}

toggleButtonID.addEventListener("click", toggleTheme);

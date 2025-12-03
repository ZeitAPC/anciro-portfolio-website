const toggleButtonID = document.getElementById("themeToggle");
toggleButtonID.isLight = true;

document.getElementById("themeToggle").addEventListener("click", toggleTheme);

function setToDarkTheme(){
    document.documentElement.style.setProperty("--color-text-main", "#ffe9c0");
    document.documentElement.style.setProperty("--color-text-muted", "#3B2F2F");
    document.documentElement.style.setProperty("--color-accent-secondary", "#c47a3c");
    document.documentElement.style.setProperty("--color-bg-surface", "#2b1e1a");
    document.documentElement.style.setProperty("--color-accent-primary", "#c47a3c");
}
function setToLightTheme(){
    document.documentElement.style.setProperty("--color-text-main", "#3B2F2F");
    document.documentElement.style.setProperty("--color-text-muted", "#ffe9c0");
    document.documentElement.style.setProperty("--color-accent-secondary", "#6F4E37");
    document.documentElement.style.setProperty("--color-bg-surface", "#4B3832");
    document.documentElement.style.setProperty("--color-accent-primary", "#d2691e");
}

function toggleTheme(){
    toggleButtonID.isLight = !toggleButtonID.isLight;
    if (toggleButtonID.isLight){
        setToLightTheme();
        console.log("Set to light mode");
        document.getElementById("themeToggle").innerHTML = '<i class="fa-solid fa-sun"></i> Light Mode';
    }
    else{
        setToDarkTheme();
        console.log("Set to dark mode");
        document.getElementById("themeToggle").innerHTML = '<i class="fa-solid fa-moon"></i> Dark Mode';
    }
}


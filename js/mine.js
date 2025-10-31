const body = document.body;
const userPreference = localStorage.getItem("theme");

// Якщо користувач не обирав — дивимось системну тему
if (!userPreference) {
  const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  body.classList.add(systemDark ? "theme--dark" : "theme--light");
} else {
  body.classList.add(`theme--${userPreference}`);
}

document.getElementById("theme-toggle").onclick = () => {
  body.classList.toggle("theme--dark");
  body.classList.toggle("theme--light");

  const theme = body.classList.contains("theme--dark") ? "dark" : "light";
  localStorage.setItem("theme", theme);
};

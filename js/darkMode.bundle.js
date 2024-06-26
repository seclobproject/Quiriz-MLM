new (class {
  constructor() {
    (this.storageKey = "theme-preference"),
      (this.theme = { value: this.getColorPreference() }),
      this.reflectPreference(),
      this.events();
  }
  events() {
    (window.onload = () => {
      this.reflectPreference(),
        document.querySelectorAll(".js-dark-mode-trigger").forEach((e) => {
          e.addEventListener("click", (e) => this.onClick(e));
        });
    }),
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", (e) => {
          let { matches: t } = e;
          (this.theme.value = t ? "dark" : "light"), this.setPreference();
        });
  }
  getColorPreference() {
    return "dark"; // Always return "dark" to force dark mode
  }
  setPreference() {
    localStorage.setItem(this.storageKey, this.theme.value),
      this.reflectPreference();
  }
  reflectPreference() {
    (document.firstElementChild.className = ""),
      document.firstElementChild.classList.add(this.theme.value),
      document.querySelectorAll(".js-dark-mode-trigger").forEach((e) => {
        null == e || e.setAttribute("aria-label", this.theme.value);
      });
  }
  onClick(e) {
    e.preventDefault(),
      (this.theme.value = "light" === this.theme.value ? "dark" : "light"),
      this.setPreference();
  }
})();

export class Keyboard {
  #switchEl;
  #fontSelectEl;
  #containerEl;
  constructor() {
    this.#assignElement();
    this.#addEvent();
  }

  #assignElement() {
    this.#containerEl = document.getElementById("container");
    this.#switchEl = this.#containerEl.querySelector("switch");
    this.#fontSelectEl = this.#containerEl.querySelector("font");
  }

  #addEvent() {
    this.#switchEl.addEventListener("change", (e) => {
      document.documentElement.setAttribute(
        "theme",
        e.target.checked ? "dark-mode" : ""
      );
      console.log(e.target.checked);
    });
    this.#fontSelectEl.addEventListener("change", (e) => {
      document.body.style.fontFamily = e.target.value;
    });
  }
  #onChangeTheme(e) {
    document.documentElement.setAttribute(
      "theme",
      e.target.checked ? "dark-mode" : ""
    );
  }

  #onChangeFont(e) {
    document.body.style.fontFamily = e.target.value;
  }
}

document.addEventListener("DOMContentLoaded", main)
function main() {
  cprt();
  hljs.initHighlightingOnLoad();
  A(".copy-btn") && A(".copy-btn").forEach(el => {
    el.addEventListener("click", ev => {
      copy(el);
    });
  });
}




document.addEventListener("DOMContentLoaded", () => {
  MakeRunnable();
  // Shiki.highlightAll();
  // alert("Hi there i am a SoloAlert")
  SoloAlert.alert({
    title: "Welcome!",
    body: "Hi there i am a SoloAlert .",
    icon: "success"
  });
});



/*MY DOM FUNCTIONS*/
function id(el) {
  return document.getElementById(el);
}
function clas(e, i) {
  if (i) { return document.getElementsByClassName(e)[i]; }
  else { return document.getElementsByClassName(e) }
}
function A(query) { return document.querySelectorAll(query); }
function $(query) { return document.querySelector(query); }
/*________________________________*/
function cprt() {
  var el = document.getElementById("cprt");
  var year = new Date().getFullYear();
  el.innerHTML = `© ${year} <a href='https://github.com/arnav-kr'>Arnav Kumar</a>`;
}
function MakeRunnable() {
  var btns = document.querySelectorAll(".runnable-code-btn");
  var codes = document.querySelectorAll(".runnable-code");
  var logs = document.querySelectorAll(".runnable-logs");

  var count = 1;

  btns.forEach(el => {
    let btn = el;
    let cde = el.parentNode.childNodes[1];
    let log = el.parentNode.childNodes[3];
    let jar = CodeJar(cde, highlighter);
    btn.addEventListener("click", e => {
      log.innerHTML = "";
      log.style.display = "none";
      let cdcnt = jar.toString();
      btn.textContent = "Rerun";
      try {
        eval(cdcnt);
      }
      catch (e) {
        log.innerHTML = `<span style="color:red;">${e}</span>`;
        log.style.display = "block";
      }
    });
    count += 1;
  });
}
function copy(t) {
  try {
    var copyText = document.createElement("textarea");
    var ttbcpd;
    if (t instanceof HTMLElement) {
      ttbcpd = t.dataset.copyContent || t.textContent || "";
    }
    else {
      ttbcpd = t;
    }
    copyText.style.position = "fixed";
    copyText.style.left = "-99999999px";
    copyText.style.top = "-99999999px";
    copyText.value = ttbcpd;
    document.body.appendChild(copyText);
    copyText.select();
    copyText.setSelectionRange(0, 9999999999999);
    document.execCommand("copy");
    document.body.removeChild(copyText);
    console.log("Copied Successfully!");
    alert("Copied Successfully!");
  }
  catch (e) {
    alert("An Error Occured While Copying!")
    console.error("Copy Error: \n An Error Occurred While Copying!\n", e)
  }
}

// codeInput
// by WebCoder49
// Based on a CSS-Tricks Post
// Needs Prism.js

var codeInput = {
  update: function (text, code_input) {
    code_input.setAttribute("value", text);
    let result_element = code_input.getElementsByClassName("code-input_highlighting-content")[0];
    // Handle final newlines (see article)
    if (text[text.length - 1] == "\n") {
      text += " ";
    }
    // Update code
    result_element.innerHTML = text.replace(new RegExp("&", "g"), "&amp;").replace(new RegExp("<", "g"), "&lt;"); /* Global RegExp */
    // Syntax Highlight
    Prism.highlightElement(result_element);
  },

  sync_scroll: function (element, code_input) {
    /* Scroll result to scroll coords of event - sync with textarea */
    let result_element = code_input.getElementsByClassName("code-input_highlighting")[0];
    // Get and set x and y
    result_element.scrollTop = element.scrollTop;
    result_element.scrollLeft = element.scrollLeft;
  },

  check_tab: function (element, event) {
    let code = element.value;
    if (event.key == "Tab") {
      /* Tab key pressed */
      event.preventDefault(); // stop normal
      let before_tab = code.slice(0, element.selectionStart); // text before tab
      let after_tab = code.slice(element.selectionEnd, element.value.length); // text after tab
      let cursor_pos = element.selectionEnd + 2; // after tab placed, where cursor moves to - 2 for 2 spaces
      element.value = before_tab + "  " + after_tab; // add tab char - 2 spaces
      // move cursor
      element.selectionStart = cursor_pos;
      element.selectionEnd = cursor_pos;
    }
  }
}

class CodeInput extends HTMLElement { // Create code input element
  constructor() {
    super(); // Element
  }
  connectedCallback() {
    // Added to document

    /* Defaults */
    let lang = this.getAttribute("lang") || "HTML";
    let placeholder = this.getAttribute("placeholder") || "Enter " + this.lang + " Code";
    let value = this.getAttribute("value") || this.innerHTML || "";
    this.innerHTML = ""; // Clear Content

    /* Create Textarea */
    let textarea = document.createElement("textarea");
    textarea.placeholder = placeholder;
    textarea.value = value;
    textarea.className = "code-input_editing";
    textarea.setAttribute("spellcheck", "false");

    if (this.getAttribute("name")) {
      textarea.setAttribute("name", this.getAttribute("name")); // for use in forms
      this.removeAttribute("name");
    }

    textarea.setAttribute("oninput", "codeInput.update(this.value, this.parentElement); codeInput.sync_scroll(this, this.parentElement);");
    textarea.setAttribute("onscroll", "codeInput.sync_scroll(this, this.parentElement);");
    textarea.setAttribute("onkeydown", "codeInput.check_tab(this, event);");

    this.append(textarea);

    /* Create pre code */
    let code = document.createElement("code");
    code.className = "code-input_highlighting-content language-" + lang; // Language for Prism.js
    code.innerText = value;

    let pre = document.createElement("pre");
    pre.className = "code-input_highlighting";
    pre.setAttribute("aria-hidden", "true"); // Hide for screen readers
    pre.append(code);
    this.append(pre);

    /* Add code from value attribute - useful for loading from backend */
    let text = textarea.value || "";
    let result_element = code

    // Handle final newlines (see article)
    if (text[text.length - 1] == "\n") {
      text += " ";
    }

    // Update code
    result_element.innerHTML = text.replace(new RegExp("&", "g"), "&amp;").replace(new RegExp("<", "g"), "&lt;"); /* Global RegExp */

    // Syntax Highlight
    Prism.highlightElement(result_element);
  }
  static get observedAttributes() {
    return ["value", "placeholder"]; // Attributes to monitor
  }
  attributeChangedCallback(name, oldValue, newValue) {

    let textarea = this.getElementsByClassName("code-input_editing")[0];
    let result_element = this.getElementsByClassName("code-input_highlighting-content")[0];
    let text = textarea.value;
    switch (name) {

      case "value":

        // Handle final newlines (see article)
        if (text[text.length - 1] == "\n") {
          text += " ";
        }

        // Update code
        result_element.innerHTML = text.replace(new RegExp("&", "g"), "&amp;").replace(new RegExp("<", "g"), "&lt;"); /* Global RegExp */

        // Syntax Highlight
        Prism.highlightElement(result_element);

        break;

      case "placeholder":
        textarea.placeholder = newValue;
        break;
    }
  }
}

customElements.define("code-editor", CodeInput); // Set tag
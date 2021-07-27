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
  el.textContent = `© ${year} Arnav Kumar`;
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


























const SoloAlert = {
  defaults: {
    title: "Title",
    body: "",
    icon: "",
    theme: "auto",
    html: "",
    textLimit: 100,
    useTransparency: false,
    onOk: function () { },
    onCancel: function () { },
    oninput: function () { },
  },
  styles: (themer, wrapper_bg) => {
    return `

@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

*{
    margin:0;
    padding:0;
}

.SoloAlert-svg-box {
    display:inline-block;
    position: relative;
    width:150px;
    height:150px;
}

.SoloAlert-green-stroke {
    stroke:#7CB342;
    width:150px;
}

.SoloAlert-red-stroke {
    stroke: #FF6245;
    width:150px;
}

.SoloAlert-yellow-stroke {
    stroke: #FFC107;
    width:150px;
}


.SoloAlert-circular circle.path {
    stroke-dasharray: 330;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    opacity: 0.4;
    animation: 0.7s draw-circle ease-out;
}

/*------- Checkmark ---------*/
.SoloAlert-checkmark{
    stroke-width: 6.25;
    stroke-linecap: round;
    position:absolute;
    top: 56px;
    left: 49px;
    width: 52px;
    height: 40px;
}

.SoloAlert-checkmark path {
    animation: .7s draw-check ease-out;
}

@keyframes draw-circle {
    0% {
        stroke-dasharray: 0,330;
        stroke-dashoffset: 0;
        opacity: 1;
    }

    80% {
        stroke-dasharray: 330,330;
        stroke-dashoffset: 0;
        opacity: 1;
    }

    100%{
        opacity: 0.4;
    }
}

@keyframes draw-check {
    0% {
        stroke-dasharray: 49,80;
        stroke-dashoffset: 48;
        opacity: 0;
    }

    50% {
        stroke-dasharray: 49,80;
        stroke-dashoffset: 48;
        opacity: 1;
    }

    100% {
        stroke-dasharray: 130,80;
        stroke-dashoffset: 48;
    }
}

/*---------- Cross ----------*/

.SoloAlert-cross {
    stroke-width:6.25;
    stroke-linecap: round;
    position: absolute;
    top: 54px;
    left: 54px;
    width: 40px;
    height: 40px;
}

.SoloAlert-cross .SoloAlert-first-line {
    animation: 0.7s draw-first-line ease-out;
}

.SoloAlert-cross .SoloAlert-second-line {
    animation: 0.7s draw-second-line ease-out;
}

@keyframes draw-first-line {
    0% {
        stroke-dasharray: 0,56;
        stroke-dashoffset: 0;
    }

    50% {
        stroke-dasharray: 0,56;
        stroke-dashoffset: 0;
    }

    100% {
        stroke-dasharray: 56,330;
        stroke-dashoffset: 0;
    }
}

@keyframes draw-second-line {
    0% {
        stroke-dasharray: 0,55;
        stroke-dashoffset: 1;
    }

    50% {
        stroke-dasharray: 0,55;
        stroke-dashoffset: 1;
    }

    100% {
        stroke-dasharray: 55,0;
        stroke-dashoffset: 70;
    }
}

.SoloAlert-alert-sign {
    stroke-width:6.25;
    stroke-linecap: round;
    position: absolute;
    top: 40px;
    left: 68px;
    width: 15px;
    height: 70px;
    animation: 0.5s alert-sign-bounce cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.SoloAlert-alert-sign .SoloAlert-dot {
    stroke:none;
    fill: #FFC107;
}

@keyframes alert-sign-bounce {
    0% {
        transform: scale(0);
        opacity: 0;
    }

    50% {
        transform: scale(0);
        opacity: 1;
    }

    100% {
        transform: scale(1);
    }
}
.SoloAlert-wrapper{
    width:100vw !important;
    height:100vh !important;
    z-index:99999999999 !important;
    margin:0 !important;
    padding:0 !important;
    position:fixed !important;
    top:0 !important;
    left:0 !important;
    background-color:${wrapper_bg} !important;
    display:flex !important;
    align-items:center !important;
    justify-content:center !important;
    flex-direction:column !important;
    font-family:'Roboto', sans-serif !important;
    -webkit-user-select:none !important;
    -moz-user-select:none !important;
    transition:background-color 2s ease !important;
    opacity:1 !important;
}
.SoloAlert *{
    font-family: 'Roboto', sans-serif !important;
    font-weight:400 !important;
    caret-color: ${themer.blue} !important;
}
.SoloAlert-wrapper *::-webkit-scrollbar {
    width: 10px !important;
    height: 10px !important;
    background-color:transparent !important;
}
.SoloAlert-wrapper *::-webkit-scrollbar-thumb {
    background-color:#bdbdbd !important;
    min-height: 40px !important;
    border: 3px solid transparent !important;
    background-clip: padding-box !important;
    border-radius: 8px !important;
}
.SoloAlert-wrapper *::-webkit-scrollbar-corner{
    background-color: transparent !important;
}
.SoloAlert-wrapper *::-webkit-scrollbar-track{
    background-color:transparent !important;
}
.SoloAlert-wrapper .SoloAlert{
    min-width:10rem !important;
    max-width:18rem !important;
    min-height:8rem !important;
    max-height:70vh !important;
    width:calc(100vw - 4rem) !important;
    height:auto !important;
    background-color:${themer.background} !important;
    border-radius:2px !important;
    padding:1rem 1rem .5rem 1rem !important;
    margin:2rem !important;
    box-shadow: 0 19px 38px ${themer.shadowLightGrey}, 0 15px 12px ${themer.shadowLightGrey} !important;
}
.SoloAlert-wrapper .SoloAlert h3{
    margin:0 !important;
    margin-bottom:.7rem !important;
    padding:.5rem .5rem 0 .5rem !important;
    font-weight:500 !important;
    font-size:1.25rem !important;
    word-wrap:break-word !important;
    color:${themer.color} !important;
}
.SoloAlert-wrapper .SoloAlert .SoloAlert-content{
    min-height:2rem !important;
    margin-bottom:1rem !important;
    padding:0 .5rem !important;
    word-wrap:break-word !important;
    color:${themer.color} !important;
    max-heignt:calc(70vh - 7rem) !important;
}
.SoloAlert-wrapper .SoloAlert .SoloAlert-content .SoloAlert-body-text{
    font-size:.999rem !important;
}
.SoloAlert-wrapper .SoloAlert .SoloAlert-content .SoloAlert-other-content{
    width:100% !important;
    max-height:calc(70vh - 9rem) !important;
    display:flex !important;
    align-items:center !important;
    justify-content:flex-start !important;
    flex-direction:column !important;
    overflow:auto !important;
}
.SoloAlert-wrapper .SoloAlert .SoloAlert-content .SoloAlert-icon{
    width:100% !important;
    display:flex !important;
    align-items:center !important;
    justify-content:center !important;
}
.SoloAlert-wrapper .SoloAlert .SoloAlert-content .SoloAlert-other-content>*{
    width:100% !important;
    margin-bottom:.5rem !important;
    border:none !important;
    color:${themer.color} !important;
    background-color:${themer.background} !important;
    border-radius:2px !important;
}
.SoloAlert-wrapper .SoloAlert .SoloAlert-content .SoloAlert-other-content iframe{
    background-color:white;
}
.SoloAlert-wrapper .SoloAlert .SoloAlert-actions{
    display:flex !important;
    align-items:center !important;
    justify-content:flex-end !important;
}
.SoloAlert-wrapper .SoloAlert .SoloAlert-actions .SoloAlert-action-button{
    min-width:3.5rem !important;
    min-height:2.7rem !important;
    outline:0 !important;
    padding:.5rem .5rem !important;
    margin-left:.5rem !important;
    color:${themer.blue} !important;
    font-family: 'Roboto', sans-serif !important;
    font-size:.9rem !important;
    font-weight:500 !important;
    border:0 !important;
    border-radius:2px !important;
    display:inline-flex !important;
    align-items:center !important;
    justify-content:center !important;
    background-color:transparent !important;
    transition:background-color .2s ease-out !important;
    text-transform:uppercase !important;
    cursor:pointer !important;
}
.SoloAlert-wrapper .SoloAlert .SoloAlert-actions .SoloAlert-action-button:active{
    background-color:${themer.shadowLightGrey} !important;
} 
.SoloAlert-wrapper .SoloAlert .SoloAlert-content .SoloAlert-prompt-input-heading{
    color:${themer.textGrey} !important;
    font-size:.9rem !important;
    word-wrap:break-word !important;
}
.SoloAlert-wrapper .SoloAlert .SoloAlert-content .SoloAlert-prompt-input-wrapper{
    display:inline-flex !important;
    flex-direction:column !important;
    align-items:flex-start !important;
    justify-content:flex-start !important;
    padding:.2rem !important;
    min-height:4.7rem !important;
    width:100% !important;
}
.SoloAlert-wrapper .SoloAlert .SoloAlert-content .SoloAlert-prompt-input-wrapper>div>label{
    color:${themer.blue} !important;
}
.SoloAlert-wrapper .SoloAlert .SoloAlert-content .SoloAlert-prompt-input-wrapper>div{
    padding:.3rem 0 !important;
    font-size:.7rem !important;
    width:100% !important;
    height:.9rem !important;
    display:block !important;
}
.SoloAlert-wrapper .SoloAlert .SoloAlert-content .SoloAlert-prompt-input-wrapper>span{
    font-size:.75rem !important;
    display:block !important;
    text-align:right !important;
    width:100% !important;
    color:${themer.textGrey} !important;
}
.SoloAlert-wrapper .SoloAlert .SoloAlert-content .SoloAlert-prompt-input-wrapper>input{
    border:0 !important;
    outline:0 !important;
    border-bottom:1px solid ${themer.borderGrey} !important;
    font-family: 'Roboto', sans-serif !important;
    background-color:transparent !important;
    font-size:1.1rem !important;
    padding:2px !important;
    margin:.3rem 0 .5rem 0 !important;
    width:98% !important;
    color:${themer.color} !important;
}
.SoloAlert-wrapper .SoloAlert .SoloAlert-content .SoloAlert-prompt-input-wrapper>input:focus{
    border-bottom:2px solid ${themer.blue} !important;
}
@keyframes SoloAlert_fade_out{
    0%{
        opacity:1 !important;
    }
    100%{
        opacity:0 !important;
        background-color:rgba(0,0,0) !important;
        filter:brightness(0%) !important;
    }
}
.do-not-flow{
  overflow: hidden !important;
}`},
  themes: ["light", "dark"],
  data_icons: {
    success: `
<div class="SoloAlert-svg-box">
                <svg class="SoloAlert-circular SoloAlert-green-stroke">
                    <circle class="path" cx="75" cy="75" r="50" fill="none" stroke-width="5" stroke-miterlimit="10"/>
                </svg>
                <svg class="SoloAlert-checkmark SoloAlert-green-stroke">
                    <g transform="matrix(0.79961,8.65821e-32,8.39584e-32,0.79961,-489.57,-205.679)">
                        <path class="checkmark__check" fill="none" d="M616.306,283.025L634.087,300.805L673.361,261.53"/>
                    </g>
                </svg>
            </div>
`,
    error: `
<div class="SoloAlert-svg-box">
                <svg class="SoloAlert-circular SoloAlert-red-stroke">
                    <circle class="path" cx="75" cy="75" r="50" fill="none" stroke-width="5" stroke-miterlimit="10"/>
                </svg>
                <svg class="SoloAlert-cross SoloAlert-red-stroke">
                    <g transform="matrix(0.79961,8.65821e-32,8.39584e-32,0.79961,-502.652,-204.518)">
                        <path class="SoloAlert-first-line" d="M634.087,300.805L673.361,261.53" fill="none"/>
                    </g>
                    <g transform="matrix(-1.28587e-16,-0.79961,0.79961,-1.28587e-16,-204.752,543.031)">
                        <path class="SoloAlert-second-line" d="M634.087,300.805L673.361,261.53"/>
                    </g>
                </svg>
            </div>
`,
    warning: `
<div class="SoloAlert-svg-box">
                <svg class="SoloAlert-circular SoloAlert-yellow-stroke">
                    <circle class="path" cx="75" cy="75" r="50" fill="none" stroke-width="5" stroke-miterlimit="10"/>
                </svg>
                <svg class="SoloAlert-alert-sign SoloAlert-yellow-stroke">
                    <g transform="matrix(1,0,0,1,-615.516,-257.346)">
                        <g transform="matrix(0.56541,-0.56541,0.56541,0.56541,93.7153,495.69)">
                            <path class="SoloAlert-line" d="M634.087,300.805L673.361,261.53" fill="none"/>
                        </g>
                        <g transform="matrix(2.27612,-2.46519e-32,0,2.27612,-792.339,-404.147)">
                            <circle class="SoloAlert-dot" cx="621.52" cy="316.126" r="1.318" />
                        </g>
                    </g>
                </svg>
            </div>
`
  },
  data_theme: {
    light: {
      color: "#212121",
      background: "#ffffff",
      blue: "#3f51b5",
      wrapperBg: "#cccccc",
      transparentWrapperBg: "rgba(0, 0, 0, 0.2)",
      textGrey: "#757575",
      darkGrey: "#9e9e9e",
      borderGrey: "#757575",
      shadowGrey: "rgba(0,0,0,0.24)",
      shadowLightGrey: "rgba(0,0,0,0.12)"
    },
    dark: {
      color: "#FFFFFF",
      background: "#3d474d",
      blue: "#6d81f2",
      wrapperBg: "#cccccc",
      transparentWrapperBg: "rgba(0, 0, 0, 0.2)",
      textGrey: "#c5c8ca",
      darkGrey: "#9e9e9e",
      borderGrey: "#888888",
      shadowGrey: "rgba(0,0,0,0.24)",
      shadowLightGrey: "rgba(0,0,0,0.12)"
    }
  },
  _characterCounter: (q, m, l) => {
    var max = parseInt(l);
    var input = q
    var counter = m;
    if (input.value.length > max) {
      input.value = input.value.substring(0, max);
      return false;
    } else { counter.textContent = `${input.value.length} / ${max}`; }
  },
  changeTheme: (n) => {
    SoloAlert.currentTheme = n;
  },
  currentTheme: "light",
  alert: (options) => {
    if (typeof (options) !== "object" || Array.isArray(options)) {
      throw new TypeError("SoloAlert Alert: provided argument must be an Object!")
    }
    var inp_title = (/string|number/).test(typeof (options.title)) ? options.title : SoloAlert.defaults.title || "Title";
    var inp_body = (/string|number/).test(typeof (options.body)) ? options.body : SoloAlert.defaults.body || "";
    var inp_icon = typeof (options.icon) === "string" && (/success|error|warning/).test(options.icon) ? options.icon : SoloAlert.defaults.icon || "";
    var inp_html = typeof (options.html) === "string" ? options.html : SoloAlert.defaults.html || "";
    var inp_theme = (/dark|light|auto/).test(options.theme) ? options.theme : SoloAlert.defaults.theme || "auto";
    var inp_onOk = typeof (options.onOk) === "function" ? options.onOk : SoloAlert.defaults.onOk || function () { };
    var inp_useTransparency = typeof (options.useTransparency) === "boolean" ? options.useTransparency : SoloAlert.defaults.useTransparency || false;
    if (inp_theme === "auto") {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        SoloAlert.currentTheme = "light";
      }
      else { SoloAlert.currentTheme = "dark"; }
    } else {
      SoloAlert.changeTheme(inp_theme);
    }
    const themer = SoloAlert.data_theme[SoloAlert.currentTheme];
    var wrapper_bg = inp_useTransparency ? themer.transparentWrapperBg : themer.wrapperBg;
    var bWrapper = document.createElement("div");
    var style = document.createElement("style");
    style.textContent = SoloAlert.styles(themer, wrapper_bg);
    var wrapper = document.createElement("div");
    wrapper.classList.add("SoloAlert-wrapper");
    var solo_alert = document.createElement("div");
    solo_alert.classList.add("SoloAlert");
    var title = document.createElement("h3");
    title.textContent = inp_title;
    var content = document.createElement("div");
    content.classList.add("SoloAlert-content");
    var otherContent = document.createElement("div");
    var icon = document.createElement("div");
    if (inp_icon !== null) {
      icon.classList.add("SoloAlert-icon");
      otherContent.style.maxHeight = "calc(70vh - 18rem)";
      icon.innerHTML = SoloAlert.data_icons[inp_icon];
    }
    otherContent.classList.add("SoloAlert-other-content");
    otherContent.innerHTML += inp_html;
    if (inp_html !== "" || inp_icon !== "") {
      otherContent.style.marginTop = ".5rem";
    }
    var alertBody = document.createElement("p");
    alertBody.classList.add("SoloAlert-body-text");
    alertBody.textContent = inp_body;
    //alertBody.classList.add("SoloAlert-prompt-input-heading");
    var actions = document.createElement("div");
    actions.classList.add("SoloAlert-actions");
    var okBtn = document.createElement("button");
    okBtn.classList.add("SoloAlert-action-button");
    okBtn.textContent = "OK";
    okBtn.addEventListener("click", inp_onOk);


    bWrapper.appendChild(style);
    bWrapper.appendChild(wrapper)
    wrapper.appendChild(solo_alert);
    solo_alert.appendChild(title);
    solo_alert.appendChild(content);
    content.appendChild(alertBody);
    if (inp_icon !== "") {
      content.appendChild(icon);
    }
    content.appendChild(otherContent);
    actions.appendChild(okBtn);
    solo_alert.appendChild(actions);
    document.body.appendChild(bWrapper);
    document.body.classList.add("do-not-flow");


    return new Promise((resolve, reject) => {

      okBtn.addEventListener("click", () => {
        wrapper.style.animation = "SoloAlert_fade_out .1s ease-out";
        setTimeout(() => {

          document.body.removeChild(bWrapper);
          document.body.classList.remove("do-not-flow");

        }, 90);
        resolve(true);
      });

      bWrapper.addEventListener("click", (event) => {
        if (event.target.className == "SoloAlert-wrapper") {
          wrapper.style.animation = "SoloAlert_fade_out .1s ease-out";
          setTimeout(() => {

            document.body.removeChild(bWrapper);
            document.body.classList.remove("do-not-flow");

          }, 90);
          resolve(false);
        }
      });
    });
  },
  prompt: (options) => {
    if (typeof (options) !== "object" || Array.isArray(options)) {
      throw new TypeError("SoloAler Prompt: provided argument must be an Object!")
    }
    var inp_title = (/string|number/).test(typeof (options.title)) ? options.title : SoloAlert.defaults.title || "Title";
    var inp_body = (/string|number/).test(typeof (options.body)) ? options.body : SoloAlert.defaults.body || "";
    var inp_textLimit = typeof (options.textLimit) === "number" ? Math.round(parseInt(options.textLimit)) : SoloAlert.defaults.textLimit || 100;
    var inp_theme = (/dark|light|auto/).test(options.theme) ? options.theme : SoloAlert.defaults.theme || "auto";
    var inp_onOk = typeof (options.onOk) === "function" ? options.onOk : SoloAlert.defaults.onOk || function () { };
    var inp_onCancel = typeof (options.onCancel) === "function" ? options.onCancel : SoloAlert.defaults.onCancel || function () { };
    var inp_onInput = typeof (options.onInput) === "function" ? options.onInput : SoloAlert.defaults.onInput || function () { };
    var inp_useTransparency = typeof (options.useTransparency) === "boolean" ? options.useTransparency : SoloAlert.defaults.useTransparency || false;

    if (inp_theme === "auto") {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        SoloAlert.currentTheme = "light";
      }
      else { SoloAlert.currentTheme = "dark"; }
    } else {
      SoloAlert.changeTheme(inp_theme);
    }
    const themer = SoloAlert.data_theme[SoloAlert.currentTheme];
    var wrapper_bg = inp_useTransparency ? themer.transparentWrapperBg : themer.wrapperBg;
    var bWrapper = document.createElement("div");
    var style = document.createElement("style");
    style.textContent = SoloAlert.styles(themer, wrapper_bg);
    var wrapper = document.createElement("div");
    wrapper.classList.add("SoloAlert-wrapper");
    var solo_alert = document.createElement("div");
    solo_alert.classList.add("SoloAlert");
    var title = document.createElement("h3");
    title.textContent = inp_title;
    var content = document.createElement("div");
    content.classList.add("SoloAlert-content");
    var promptHeading = document.createElement("p");
    promptHeading.textContent = inp_body;
    promptHeading.classList.add("SoloAlert-prompt-input-heading");
    var promptInputWrapper = document.createElement("div");
    promptInputWrapper.classList.add("SoloAlert-prompt-input-wrapper");
    var promptLabelWrapper = document.createElement("div");
    var promptLabel = document.createElement("label");
    promptLabel.setAttribute("for", "SoloAlert-prompt-input");
    promptLabel.textContent = "Input";
    var promptInput = document.createElement("input");
    promptInput.classList.add("SoloAlert-prompt-input");
    promptInput.setAttribute("max-limit", inp_textLimit)
    var promptCharacterCounter = document.createElement("span");
    promptCharacterCounter.textContent = `0 / ${inp_textLimit}`;
    promptInput.addEventListener("keydown", () => { SoloAlert._characterCounter(promptInput, promptCharacterCounter, inp_textLimit) });
    promptInput.addEventListener("input", inp_onInput);
    var actions = document.createElement("div");
    actions.classList.add("SoloAlert-actions");
    var cancelBtn = document.createElement("button");
    cancelBtn.classList.add("SoloAlert-action-button");
    cancelBtn.textContent = "CANCEL";
    cancelBtn.addEventListener("click", inp_onCancel);
    var okBtn = document.createElement("button");
    okBtn.classList.add("SoloAlert-action-button");
    okBtn.textContent = "OK";
    okBtn.addEventListener("click", inp_onOk);


    bWrapper.appendChild(style);
    bWrapper.appendChild(wrapper)
    wrapper.appendChild(solo_alert);
    solo_alert.appendChild(title);
    solo_alert.appendChild(content);
    content.appendChild(promptHeading);
    content.appendChild(promptInputWrapper);
    promptInputWrapper.appendChild(promptLabelWrapper);
    promptLabelWrapper.appendChild(promptLabel);
    promptInputWrapper.appendChild(promptInput);
    promptInputWrapper.appendChild(promptCharacterCounter);
    actions.appendChild(cancelBtn);
    actions.appendChild(okBtn);
    solo_alert.appendChild(actions);
    document.body.appendChild(bWrapper);
    document.body.classList.add("do-not-flow");


    return new Promise((resolve, reject) => {


      okBtn.addEventListener("click", () => {
        wrapper.style.animation = "SoloAlert_fade_out .1s ease-out";
        setTimeout(() => {

          document.body.removeChild(bWrapper);
          document.body.classList.remove("do-not-flow");

        }, 90);
        resolve(promptInput.value);
      });

      cancelBtn.addEventListener("click", () => {
        wrapper.style.animation = "SoloAlert_fade_out .1s ease-out";
        setTimeout(() => {

          document.body.removeChild(bWrapper);
          document.body.classList.remove("do-not-flow");

        }, 90);
        resolve(null);
      });

      bWrapper.addEventListener("click", (event) => {
        if (event.target.className == "SoloAlert-wrapper") {
          wrapper.style.animation = "SoloAlert_fade_out .1s ease-out";
          setTimeout(() => {

            document.body.removeChild(bWrapper);
            document.body.classList.remove("do-not-flow");

          }, 90);
          resolve(null);
        }
      });

    });
  },
  confirm: (options) => {
    if (typeof (options) !== "object" || Array.isArray(options)) {
      throw new TypeError("SoloAlert Confirm: provided argument must be an Object!")
    }
    var inp_title = (/string|number/).test(typeof (options.title)) ? options.title : SoloAlert.defaults.title || "Title";
    var inp_body = (/string|number/).test(typeof (options.body)) ? options.body : SoloAlert.defaults.body || "";
    var inp_theme = (/dark|light|auto/).test(options.theme) ? options.theme : SoloAlert.defaults.theme || "auto";
    var inp_onOk = typeof (options.onOk) === "function" ? options.onOk : SoloAlert.defaults.onOk || function () { };
    var inp_onCancel = typeof (options.onCancel) === "function" ? options.onCancel : SoloAlert.defaults.onCancel || function () { };
    var inp_useTransparency = typeof (options.useTransparency) === "boolean" ? options.useTransparency : SoloAlert.defaults.useTransparency || false;

    if (inp_theme === "auto") {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        SoloAlert.currentTheme = "light";
      }
      else { SoloAlert.currentTheme = "dark"; }
    } else {
      SoloAlert.changeTheme(inp_theme);
    }
    const themer = SoloAlert.data_theme[SoloAlert.currentTheme];
    var wrapper_bg = inp_useTransparency ? themer.transparentWrapperBg : themer.wrapperBg;
    var bWrapper = document.createElement("div");
    var style = document.createElement("style");
    style.textContent = SoloAlert.styles(themer, wrapper_bg);
    var wrapper = document.createElement("div");
    wrapper.classList.add("SoloAlert-wrapper");
    var solo_alert = document.createElement("div");
    solo_alert.classList.add("SoloAlert");
    var title = document.createElement("h3");
    title.textContent = inp_title;
    var content = document.createElement("div");
    content.classList.add("SoloAlert-content");
    var alertBody = document.createElement("p");
    alertBody.classList.add("SoloAlert-body-text");
    alertBody.textContent = inp_body;
    //alertBody.classList.add("SoloAlert-prompt-input-heading");
    var actions = document.createElement("div");
    actions.classList.add("SoloAlert-actions");
    var cancelBtn = document.createElement("button");
    cancelBtn.classList.add("SoloAlert-action-button");
    cancelBtn.textContent = "CANCEL";
    cancelBtn.addEventListener("click", inp_onCancel);
    var okBtn = document.createElement("button");
    okBtn.classList.add("SoloAlert-action-button");
    okBtn.textContent = "OK";
    okBtn.addEventListener("click", inp_onOk);


    bWrapper.appendChild(style);
    bWrapper.appendChild(wrapper)
    wrapper.appendChild(solo_alert);
    solo_alert.appendChild(title);
    solo_alert.appendChild(content);
    content.appendChild(alertBody);
    actions.appendChild(cancelBtn);
    actions.appendChild(okBtn);
    solo_alert.appendChild(actions);
    document.body.appendChild(bWrapper);
    document.body.classList.add("do-not-flow");


    return new Promise((resolve, reject) => {
      okBtn.addEventListener("click", () => {
        wrapper.style.animation = "SoloAlert_fade_out .1s ease-out";
        setTimeout(() => {

          document.body.removeChild(bWrapper);
          document.body.classList.remove("do-not-flow");

        }, 90);
        resolve(true);
      });

      cancelBtn.addEventListener("click", () => {
        wrapper.style.animation = "SoloAlert_fade_out .1s ease-out";
        setTimeout(() => {

          document.body.removeChild(bWrapper);
          document.body.classList.remove("do-not-flow");

        }, 90);
        resolve(false);
      });

      bWrapper.addEventListener("click", (event) => {
        if (event.target.className == "SoloAlert-wrapper") {
          wrapper.style.animation = "SoloAlert_fade_out .1s ease-out";
          setTimeout(() => {

            document.body.removeChild(bWrapper);
            document.body.classList.remove("do-not-flow");

          }, 90);
          resolve(false);
        }
      });

    });
  },
  backup: {
    alert: window.alert,
    prompt: window.prompt,
    confirm: window.confirm
  },
  prettyAlert: {
    alert(text, options = {}) {
      return SoloAlert.alert({ body: text, ...options });
    },
    prompt(text, options = {}) {
      return SoloAlert.prompt({ body: text, ...options });
    },
    confirm(text, options = {}) {
      return SoloAlert.confirm({ body: text, ...options });
    }
  },
  setAsDefault() {
    window.alert = SoloAlert.prettyAlert.alert;
    window.prompt = SoloAlert.prettyAlert.prompt;
    window.confirm = SoloAlert.prettyAlert.confirm;
  },
  resetDefaults() {
    window.alert = SoloAlert.backup.alert;
    window.prompt = SoloAlert.backup.prompt;
    window.confirm = SoloAlert.backup.confirm;
  }
};
/*
a small Documentation 

example code in HTML Section


all parameters
{
    title:"Your Title : String",
    body:"Your text : String",
    html:"Your HTML content or code : HTML String",
    textLimit:"Text limit for Prompt : Number ",
    theme:"Theme, values: light | dark | auto",
    onOk:"when ok button is clicked : function ",
    onCancel:"when cancel button is clicked : function",
    onInput:"when user input something in prompt :function",
    icon:"icon, values : success | error | warning",
}


all methods

SoloAlert.alert(parameters : object);
SoloAlert.prompt(parameters : object);
SoloAlert.confirm(parameters : object);



*/




// const SoloAlert = { styles: t => `\n\n@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap' );\n\n*{\n    margin:0;\n    padding:0;\n}\n\n.SoloAlert-svg-box {\n    display:inline-block;\n    position: relative;\n    width:150px;\n    height:150px;\n}\n\n.SoloAlert-green-stroke {\n    stroke:#7CB342;\n    width:150px;\n}\n\n.SoloAlert-red-stroke {\n    stroke: #FF6245;\n    width:150px;\n}\n\n.SoloAlert-yellow-stroke {\n    stroke: #FFC107;\n    width:150px;\n}\n\n\n.SoloAlert-circular circle.path {\n    stroke-dasharray: 330;\n    stroke-dashoffset: 0;\n    stroke-linecap: round;\n    opacity: 0.4;\n    animation: 0.7s draw-circle ease-out;\n}\n\n/*------- Checkmark ---------*/\n.SoloAlert-checkmark{\n    stroke-width: 6.25;\n    stroke-linecap: round;\n    position:absolute;\n    top: 56px;\n    left: 49px;\n    width: 52px;\n    height: 40px;\n}\n\n.SoloAlert-checkmark path {\n    animation: .7s draw-check ease-out;\n}\n\n@keyframes draw-circle {\n    0% {\n        stroke-dasharray: 0,330;\n        stroke-dashoffset: 0;\n        opacity: 1;\n    }\n\n    80% {\n        stroke-dasharray: 330,330;\n        stroke-dashoffset: 0;\n        opacity: 1;\n    }\n\n    100%{\n        opacity: 0.4;\n    }\n}\n\n@keyframes draw-check {\n    0% {\n        stroke-dasharray: 49,80;\n        stroke-dashoffset: 48;\n        opacity: 0;\n    }\n\n    50% {\n        stroke-dasharray: 49,80;\n        stroke-dashoffset: 48;\n        opacity: 1;\n    }\n\n    100% {\n        stroke-dasharray: 130,80;\n        stroke-dashoffset: 48;\n    }\n}\n\n/*---------- Cross ----------*/\n\n.SoloAlert-cross {\n    stroke-width:6.25;\n    stroke-linecap: round;\n    position: absolute;\n    top: 54px;\n    left: 54px;\n    width: 40px;\n    height: 40px;\n}\n\n.SoloAlert-cross .SoloAlert-first-line {\n    animation: 0.7s draw-first-line ease-out;\n}\n\n.SoloAlert-cross .SoloAlert-second-line {\n    animation: 0.7s draw-second-line ease-out;\n}\n\n@keyframes draw-first-line {\n    0% {\n        stroke-dasharray: 0,56;\n        stroke-dashoffset: 0;\n    }\n\n    50% {\n        stroke-dasharray: 0,56;\n        stroke-dashoffset: 0;\n    }\n\n    100% {\n        stroke-dasharray: 56,330;\n        stroke-dashoffset: 0;\n    }\n}\n\n@keyframes draw-second-line {\n    0% {\n        stroke-dasharray: 0,55;\n        stroke-dashoffset: 1;\n    }\n\n    50% {\n        stroke-dasharray: 0,55;\n        stroke-dashoffset: 1;\n    }\n\n    100% {\n        stroke-dasharray: 55,0;\n        stroke-dashoffset: 70;\n    }\n}\n\n.SoloAlert-alert-sign {\n    stroke-width:6.25;\n    stroke-linecap: round;\n    position: absolute;\n    top: 40px;\n    left: 68px;\n    width: 15px;\n    height: 70px;\n    animation: 0.5s alert-sign-bounce cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.SoloAlert-alert-sign .SoloAlert-dot {\n    stroke:none;\n    fill: #FFC107;\n}\n\n@keyframes alert-sign-bounce {\n    0% {\n        transform: scale(0);\n        opacity: 0;\n    }\n\n    50% {\n        transform: scale(0);\n        opacity: 1;\n    }\n\n    100% {\n        transform: scale(1);\n    }\n}\n.SoloAlert-wrapper{\n    width:100vw !important;\n    height:100vh !important;\n    z-index:99999999999 !important;\n    margin:0 !important;\n    padding:0 !important;\n    position:fixed !important;\n    top:0 !important;\n    left:0 !important;\n    background-color:${t.grey} !important;\n    display:flex !important;\n    align-items:center !important;\n    justify-content:center !important;\n    flex-direction:column !important;\n    font-family:'Roboto', sans-serif !important;\n    -webkit-user-select:none !important;\n    -moz-user-select:none !important;\n    transition:background-color 2s ease !important;\n    opacity:1 !important;\n}\n.SoloAlert *{\n    font-family: 'Roboto', sans-serif !important;\n    font-weight:400 !important;\n    caret-color: ${t.blue} !important;\n}\n.SoloAlert-wrapper *::-webkit-scrollbar {\n    width: 10px !important;\n    height: 10px !important;\n    background-color:transparent !important;\n}\n.SoloAlert-wrapper *::-webkit-scrollbar-thumb {\n    background-color:#bdbdbd !important;\n    min-height: 40px !important;\n    border: 3px solid transparent !important;\n    background-clip: padding-box !important;\n    border-radius: 8px !important;\n}\n.SoloAlert-wrapper *::-webkit-scrollbar-corner{\n    background-color: transparent !important;\n}\n.SoloAlert-wrapper *::-webkit-scrollbar-track{\n    background-color:transparent !important;\n}\n.SoloAlert-wrapper .SoloAlert{\n    min-width:18rem !important;\n    max-width:18rem !important;\n    min-height:8rem !important;\n    max-height:70vh !important;\n    width:18rem !important;\n    height:auto !important;\n    background-color:${t.background} !important;\n    border-radius:2px !important;\n    padding:1rem 1rem .5rem 1rem !important;\n    /*box-shadow:0 0 10px 7px ${t.shadowLightGrey} !important;*/\n    box-shadow: 0 19px 38px ${t.shadowLightGrey}, 0 15px 12px ${t.shadowLightGrey} !important;\n}\n.SoloAlert-wrapper .SoloAlert h3{\n    margin:0 !important;\n    margin-bottom:.7rem !important;\n    padding:.5rem .5rem 0 .5rem !important;\n    font-weight:500 !important;\n    font-size:1.25rem !important;\n    word-wrap:break-word !important;\n    color:${t.color} !important;\n}\n.SoloAlert-wrapper .SoloAlert .SoloAlert-content{\n    min-height:2rem !important;\n    margin-bottom:1rem !important;\n    padding:0 .5rem !important;\n    word-wrap:break-word !important;\n    color:${t.color} !important;\n    max-heignt:calc(70vh - 7rem) !important;\n}\n.SoloAlert-wrapper .SoloAlert .SoloAlert-content .SoloAlert-body-text{\n    font-size:.999rem !important;\n}\n.SoloAlert-wrapper .SoloAlert .SoloAlert-content .SoloAlert-other-content{\n    width:100% !important;\n    max-height:calc(70vh - 9rem) !important;\n    display:flex !important;\n    align-items:center !important;\n    justify-content:flex-start !important;\n    flex-direction:column !important;\n    overflow:auto !important;\n}\n.SoloAlert-wrapper .SoloAlert .SoloAlert-content .SoloAlert-icon{\n    width:100% !important;\n    display:flex !important;\n    align-items:center !important;\n    justify-content:center !important;\n}\n.SoloAlert-wrapper .SoloAlert .SoloAlert-content .SoloAlert-other-content>*{\n    width:100% !important;\n    margin-bottom:.5rem !important;\n    border:none !important;\n    color:${t.color} !important;\n    background-color:${t.background} !important;\n    border-radius:2px !important;\n}\n.SoloAlert-wrapper .SoloAlert .SoloAlert-content .SoloAlert-other-content iframe{\n    background-color:white;\n}\n.SoloAlert-wrapper .SoloAlert .SoloAlert-actions{\n    display:flex !important;\n    align-items:center !important;\n    justify-content:flex-end !important;\n}\n.SoloAlert-wrapper .SoloAlert .SoloAlert-actions .SoloAlert-action-button{\n    min-width:3.5rem !important;\n    min-height:2.7rem !important;\n    outline:0 !important;\n    padding:.5rem .5rem !important;\n    margin-left:.5rem !important;\n    color:${t.blue} !important;\n    font-family: 'Roboto', sans-serif !important;\n    font-size:.9rem !important;\n    font-weight:500 !important;\n    border:0 !important;\n    border-radius:2px !important;\n    display:inline-flex !important;\n    align-items:center !important;\n    justify-content:center !important;\n    background-color:transparent !important;\n    transition:background-color .2s ease-out !important;\n    text-transform:uppercase !important;\n}\n.SoloAlert-wrapper .SoloAlert .SoloAlert-actions .SoloAlert-action-button:active{\n    background-color:${t.shadowLightGrey} !important;\n} \n.SoloAlert-wrapper .SoloAlert .SoloAlert-content .SoloAlert-prompt-input-heading{\n    color:${t.textGrey} !important;\n    font-size:.9rem !important;\n    word-wrap:break-word !important;\n}\n.SoloAlert-wrapper .SoloAlert .SoloAlert-content .SoloAlert-prompt-input-wrapper{\n    display:inline-flex !important;\n    flex-direction:column !important;\n    align-items:flex-start !important;\n    justify-content:flex-start !important;\n    padding:.2rem !important;\n    min-height:4.7rem !important;\n    width:100% !important;\n}\n.SoloAlert-wrapper .SoloAlert .SoloAlert-content .SoloAlert-prompt-input-wrapper>div>label{\n    color:${t.blue} !important;\n}\n.SoloAlert-wrapper .SoloAlert .SoloAlert-content .SoloAlert-prompt-input-wrapper>div{\n    padding:.3rem 0 !important;\n    font-size:.7rem !important;\n    width:100% !important;\n    height:.9rem !important;\n    display:block !important;\n}\n.SoloAlert-wrapper .SoloAlert .SoloAlert-content .SoloAlert-prompt-input-wrapper>span{\n    font-size:.75rem !important;\n    display:block !important;\n    text-align:right !important;\n    width:100% !important;\n    color:${t.textGrey} !important;\n}\n.SoloAlert-wrapper .SoloAlert .SoloAlert-content .SoloAlert-prompt-input-wrapper>input{\n    border:0 !important;\n    outline:0 !important;\n    border-bottom:1px solid ${t.borderGrey} !important;\n    font-family: 'Roboto', sans-serif !important;\n    background-color:transparent !important;\n    font-size:1.1rem !important;\n    padding:2px !important;\n    margin:.3rem 0 .5rem 0 !important;\n    width:98% !important;\n    color:${t.color} !important;\n}\n.SoloAlert-wrapper .SoloAlert .SoloAlert-content .SoloAlert-prompt-input-wrapper>input:focus{\n    border-bottom:2px solid ${t.blue} !important;\n}\n@keyframes SoloAlert_fade_out{\n    0%{\n        opacity:1 !important;\n    }\n    100%{\n        opacity:0 !important;\n        background-color:rgba(0,0,0) !important;\n        filter:brightness(0%) !important;\n    }\n}\n        `, themes: ["light", "dark"], data_icons: { success: '\n<div class="SoloAlert-svg-box">\n                <svg class="SoloAlert-circular SoloAlert-green-stroke">\n                    <circle class="path" cx="75" cy="75" r="50" fill="none" stroke-width="5" stroke-miterlimit="10"/>\n                </svg>\n                <svg class="SoloAlert-checkmark SoloAlert-green-stroke">\n                    <g transform="matrix(0.79961,8.65821e-32,8.39584e-32,0.79961,-489.57,-205.679)">\n                        <path class="checkmark__check" fill="none" d="M616.306,283.025L634.087,300.805L673.361,261.53"/>\n                    </g>\n                </svg>\n            </div>\n', error: '\n<div class="SoloAlert-svg-box">\n                <svg class="SoloAlert-circular SoloAlert-red-stroke">\n                    <circle class="path" cx="75" cy="75" r="50" fill="none" stroke-width="5" stroke-miterlimit="10"/>\n                </svg>\n                <svg class="SoloAlert-cross SoloAlert-red-stroke">\n                    <g transform="matrix(0.79961,8.65821e-32,8.39584e-32,0.79961,-502.652,-204.518)">\n                        <path class="SoloAlert-first-line" d="M634.087,300.805L673.361,261.53" fill="none"/>\n                    </g>\n                    <g transform="matrix(-1.28587e-16,-0.79961,0.79961,-1.28587e-16,-204.752,543.031)">\n                        <path class="SoloAlert-second-line" d="M634.087,300.805L673.361,261.53"/>\n                    </g>\n                </svg>\n            </div>\n', warning: '\n<div class="SoloAlert-svg-box">\n                <svg class="SoloAlert-circular SoloAlert-yellow-stroke">\n                    <circle class="path" cx="75" cy="75" r="50" fill="none" stroke-width="5" stroke-miterlimit="10"/>\n                </svg>\n                <svg class="SoloAlert-alert-sign SoloAlert-yellow-stroke">\n                    <g transform="matrix(1,0,0,1,-615.516,-257.346)">\n                        <g transform="matrix(0.56541,-0.56541,0.56541,0.56541,93.7153,495.69)">\n                            <path class="SoloAlert-line" d="M634.087,300.805L673.361,261.53" fill="none"/>\n                        </g>\n                        <g transform="matrix(2.27612,-2.46519e-32,0,2.27612,-792.339,-404.147)">\n                            <circle class="SoloAlert-dot" cx="621.52" cy="316.126" r="1.318" />\n                        </g>\n                    </g>\n                </svg>\n            </div>\n' }, data_theme: { light: { color: "#212121", background: "#ffffff", blue: "#3f51b5", grey: "#ccc", textGrey: "#757575", darkGrey: "#9e9e9e", borderGrey: "#757575", shadowGrey: "rgba(0,0,0,0.24)", shadowLightGrey: "rgba(0,0,0,0.12)" }, dark: { color: "#FFFFFF", background: "#3d474d", blue: "#6d81f2", grey: "#cccccc", textGrey: "#c5c8ca", darkGrey: "#9e9e9e", borderGrey: "#888888", shadowGrey: "rgba(0,0,0,0.24)", shadowLightGrey: "rgba(0,0,0,0.12)" } }, _characterCounter: (t, e, n) => { var o = parseInt(n), r = t, a = e; if (r.value.length > o) return r.value = r.value.substring(0, o), !1; a.textContent = `${r.value.length} / ${o}` }, changeTheme: t => { SoloAlert.currentTheme = t }, currentTheme: "light", alert: t => { if ("object" != typeof t || Array.isArray(t)) throw new TypeError("SoloAlert Alert: provided argument must be an Object!"); var e = "string" == typeof t.title ? t.title : "Title", n = "string" == typeof t.body ? t.body : "", o = "string" == typeof t.icon && "success" === t.icon ? t.icon : null, r = "string" == typeof t.html ? t.html : "", a = "dark" === t.theme ? t.theme : "auto", l = "function" == typeof t.onOk ? t.onOk : () => { }; try { document.getElementsByTagName("main")[0].style.opacity = 0 } catch (t) { } var s = (new Date).getHours(); "auto" === a ? SoloAlert.currentTheme = s >= 7 && s < 19 ? "light" : "dark" : SoloAlert.changeTheme(a); const i = SoloAlert.data_theme[SoloAlert.currentTheme]; var d = document.createElement("div"), p = document.createElement("style"); p.textContent = SoloAlert.styles(i); var m = document.createElement("div"); m.classList.add("SoloAlert-wrapper"); var c = document.createElement("div"); c.classList.add("SoloAlert"); var h = document.createElement("h3"); h.textContent = e; var u = document.createElement("div"); u.classList.add("SoloAlert-content"); var y = document.createElement("div"), A = document.createElement("div"); null !== o && (A.classList.add("SoloAlert-icon"), y.style.maxHeight = "calc(70vh - 18rem)", A.innerHTML = SoloAlert.data_icons[o]), y.classList.add("SoloAlert-other-content"), y.innerHTML += r, "" === r && "" === o || (y.style.marginTop = ".5rem"); var g = document.createElement("p"); g.classList.add("SoloAlert-body-text"), g.textContent = n; var f = document.createElement("div"); f.classList.add("SoloAlert-actions"); var b = document.createElement("button"); b.classList.add("SoloAlert-action-button"), b.textContent = "OK", b.addEventListener("click", l), d.appendChild(p), d.appendChild(m), m.appendChild(c), c.appendChild(h), c.appendChild(u), u.appendChild(g), "" !== o && u.appendChild(A), u.appendChild(y), f.appendChild(b), c.appendChild(f), document.body.appendChild(d), b.addEventListener("click", () => { m.style.animation = "SoloAlert_fade_out .1s ease-out", setTimeout(() => { try { document.getElementsByTagName("main")[0].style.opacity = 1 } catch (t) { } document.body.removeChild(d) }, 90) }), d.addEventListener("click", t => { "SoloAlert-wrapper" == t.target.className && (m.style.animation = "SoloAlert_fade_out .1s ease-out", setTimeout(() => { try { document.getElementsByTagName("main")[0].style.opacity = 1 } catch (t) { } document.body.removeChild(d) }, 90)) }) }, prompt: t => { if ("object" != typeof t || Array.isArray(t)) throw new TypeError("SoloAler Prompt: provided argument must be an Object!"); var e = "string" == typeof t.title ? t.title : "Title", n = "string" == typeof t.body ? t.body : "", o = "number" == typeof t.textLimit ? Math.round(parseInt(t.textLimit)) : 100, r = "dark" === t.theme ? t.theme : "auto", a = "function" == typeof t.onOk ? t.onOk : () => { }, l = "function" == typeof t.onCancel ? t.onCancel : () => { }, s = "function" == typeof t.onInput ? t.onInput : () => { }; try { document.getElementsByTagName("main")[0].style.opacity = 0 } catch (t) { } var i = (new Date).getHours(); "auto" === r ? SoloAlert.currentTheme = i >= 7 && i < 19 ? "light" : "dark" : SoloAlert.changeTheme(r); const d = SoloAlert.data_theme[SoloAlert.currentTheme]; var p = document.createElement("div"), m = document.createElement("style"); m.textContent = SoloAlert.styles(d); var c = document.createElement("div"); c.classList.add("SoloAlert-wrapper"); var h = document.createElement("div"); h.classList.add("SoloAlert"); var u = document.createElement("h3"); u.textContent = e; var y = document.createElement("div"); y.classList.add("SoloAlert-content"); var A = document.createElement("p"); A.textContent = n, A.classList.add("SoloAlert-prompt-input-heading"); var g = document.createElement("div"); g.classList.add("SoloAlert-prompt-input-wrapper"); var f = document.createElement("div"), b = document.createElement("label"); b.setAttribute("for", "SoloAlert-prompt-input"), b.textContent = "Input"; var k = document.createElement("input"); k.classList.add("SoloAlert-prompt-input"), k.setAttribute("max-limit", o); var w = document.createElement("span"); w.textContent = `0 / ${o}`, k.addEventListener("keyup", () => { SoloAlert._characterCounter(k, w, o) }), k.addEventListener("input", s); var v = document.createElement("div"); v.classList.add("SoloAlert-actions"); var x = document.createElement("button"); x.classList.add("SoloAlert-action-button"), x.textContent = "CANCEL", x.addEventListener("click", l); var C = document.createElement("button"); return C.classList.add("SoloAlert-action-button"), C.textContent = "OK", C.addEventListener("click", a), p.appendChild(m), p.appendChild(c), c.appendChild(h), h.appendChild(u), h.appendChild(y), y.appendChild(A), y.appendChild(g), g.appendChild(f), f.appendChild(b), g.appendChild(k), g.appendChild(w), v.appendChild(x), v.appendChild(C), h.appendChild(v), document.body.appendChild(p), new Promise((t, e) => { C.addEventListener("click", () => { c.style.animation = "SoloAlert_fade_out .1s ease-out", setTimeout(() => { try { document.getElementsByTagName("main")[0].style.opacity = 1 } catch (t) { } document.body.removeChild(p) }, 90), t(k.value) }), x.addEventListener("click", () => { c.style.animation = "SoloAlert_fade_out .1s ease-out", setTimeout(() => { try { document.getElementsByTagName("main")[0].style.opacity = 1 } catch (t) { } document.body.removeChild(p) }, 90), t(null) }), p.addEventListener("click", e => { "SoloAlert-wrapper" == e.target.className && (c.style.animation = "SoloAlert_fade_out .1s ease-out", setTimeout(() => { try { document.getElementsByTagName("main")[0].style.opacity = 1 } catch (t) { } document.body.removeChild(p) }, 90), t(null)) }) }) }, confirm: t => { if ("object" != typeof t || Array.isArray(t)) throw new TypeError("SoloAlert Confirm: provided argument must be an Object!"); var e = "string" == typeof t.title ? t.title : "Title", n = "string" == typeof t.body ? t.body : "", o = "dark" === t.theme ? t.theme : "auto", r = "function" == typeof t.onOk ? t.onOk : () => { }, a = "function" == typeof t.onCancel ? t.onCancel : () => { }; try { document.getElementsByTagName("main")[0].style.opacity = 0 } catch (t) { } var l = (new Date).getHours(); "auto" === o ? SoloAlert.currentTheme = l >= 7 && l < 19 ? "light" : "dark" : SoloAlert.changeTheme(o); const s = SoloAlert.data_theme[SoloAlert.currentTheme]; var i = document.createElement("div"), d = document.createElement("style"); d.textContent = SoloAlert.styles(s); var p = document.createElement("div"); p.classList.add("SoloAlert-wrapper"); var m = document.createElement("div"); m.classList.add("SoloAlert"); var c = document.createElement("h3"); c.textContent = e; var h = document.createElement("div"); h.classList.add("SoloAlert-content"); var u = document.createElement("p"); u.classList.add("SoloAlert-body-text"), u.textContent = n; var y = document.createElement("div"); y.classList.add("SoloAlert-actions"); var A = document.createElement("button"); A.classList.add("SoloAlert-action-button"), A.textContent = "CANCEL", A.addEventListener("click", a); var g = document.createElement("button"); return g.classList.add("SoloAlert-action-button"), g.textContent = "OK", g.addEventListener("click", r), i.appendChild(d), i.appendChild(p), p.appendChild(m), m.appendChild(c), m.appendChild(h), h.appendChild(u), y.appendChild(A), y.appendChild(g), m.appendChild(y), document.body.appendChild(i), new Promise((t, e) => { g.addEventListener("click", () => { p.style.animation = "SoloAlert_fade_out .1s ease-out", setTimeout(() => { try { document.getElementsByTagName("main")[0].style.opacity = 1 } catch (t) { } document.body.removeChild(i) }, 90), t(!0) }), A.addEventListener("click", () => { p.style.animation = "SoloAlert_fade_out .1s ease-out", setTimeout(() => { try { document.getElementsByTagName("main")[0].style.opacity = 1 } catch (t) { } document.body.removeChild(i) }, 90), t(!1) }), i.addEventListener("click", e => { "SoloAlert-wrapper" == e.target.className && (p.style.animation = "SoloAlert_fade_out .1s ease-out", setTimeout(() => { try { document.getElementsByTagName("main")[0].style.opacity = 1 } catch (t) { } document.body.removeChild(i) }, 90), t(!1)) }) }) }, overrideWindow() { window.alert = SoloAlert.alert, window.prompt = SoloAlert.prompt, window.confirm = SoloAlert.confirm } };
/*
a small Documentation

example code in HTML Section


all parameters
{
    title:"Your Title : String",
    body:"Your text : String",
    html:"Your HTML content or code : HTML String",
    textLimit:"Text limit for Prompt : Number ",
    theme:"Theme, values: light | dark | auto",
    onOk:"when ok button is clicked : function ",
    onCancel:"when cancel button is clicked : function",
    onInput:"when user input something in prompt :function",
    icon:"icon, values : success | error | warning",
}


all methods

SoloAlert.alert(parameters : object);
SoloAlert.prompt(parameters : object);
SoloAlert.confirm(parameters : object);



*/



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
/*! 
 * SoloAlert.js
 * A customizable lightweight Alert Library with Material UI and awesome features.
 * 2021-07-27
 * By Arnav Kumar, http://github.com/arnav-kr
 * MIT Licence.  
 */
((root, factory) => {
  if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = factory();
  }
  else if (typeof define === 'function' && define.amd) {
    define([], factory);
  }
  else if (typeof exports === 'object') {
    exports["SoloAlert"] = factory();
  }
  else {
    root["SoloAlert"] = factory();
  }

})(this, () => {
  const SoloAlert = {
    defaults: {
      title: "Title",
      body: "",
      icon: "",
      theme: "auto",
      html: "",
      type: "text",
      textLimit: 100,
      useTransparency: false,
      onOk: function () { },
      onCancel: function () { },
      onInput: function () { },
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
      user-select:none !important;
      -webkit-user-select:none !important;
      -moz-user-select:none !important;
      transition:background-color 2s ease !important;
      opacity:1 !important;
  }
  .SoloAlert *{
      font-family: 'Roboto', sans-serif !important;
      font-weight:400 !important;
      caret-color: ${themer.blue} !important;
      tap-highlight-color: rgba(0,0,0,0) !important;
      -webkit-tap-highlight-color: rgba(0,0,0,0) !important;
      -moz-tap-highlight-color: rgba(0,0,0,0) !important;
      -ms-tap-highlight-color: rgba(0,0,0,0) !important;
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
      /* min-height:8rem !important;
      max-height:70vh !important; */
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
      var inp_icon = typeof (options.icon) === "string" && Object.keys(SoloAlert.data_icons).includes(options.icon) ? options.icon : SoloAlert.defaults.icon || "";
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
        throw new TypeError("SoloAlert Prompt: provided argument must be an Object!")
      }
      var inp_title = (/string|number/).test(typeof (options.title)) ? options.title : SoloAlert.defaults.title || "Title";
      var inp_body = (/string|number/).test(typeof (options.body)) ? options.body : SoloAlert.defaults.body || "";
      var inp_textLimit = typeof (options.textLimit) === "number" ? Math.round(parseInt(options.textLimit)) : SoloAlert.defaults.textLimit || 100;
      var inp_theme = (/dark|light|auto/).test(options.theme) ? options.theme : SoloAlert.defaults.theme || "auto";
      var inp_type = typeof (options.type) == "string" ? options.type : SoloAlert.defaults.type || "text";
      var inp_attributes = typeof (options.attributes) == "object" && !Array.isArray(options.attributes) ? options.attributes : SoloAlert.defaults.attributes || {};
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
      promptInput.type = inp_type;
      for (attr in inp_attributes) {
        if (attr == "class" || attr == "className") {
          promptInput.className += inp_attributes[attr];
        }
        else {
          promptInput.setAttribute(attr, inp_attributes[attr]);
        }
      }
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
  return SoloAlert;
});
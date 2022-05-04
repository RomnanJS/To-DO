const _flexbox = document.querySelector(".flex");
const _hr = document.createElement("hr");
const list = document.createElement("ul");
list.classList.add("listul");

const buttonheader = document.querySelector("button__click");

const divinfo = document.querySelector(".info");
const divflex = document.querySelector(".flex");
divflex.append(divinfo);
const __div = document.createElement("div");
__div.classList.add("divbox");

const divfooter = document.createElement("div");
const _1buttonfooter = document.createElement("button");
const _2buttonfooter = document.createElement("button");
_1buttonfooter.classList.add("buttondelite");
_2buttonfooter.classList.add("buttondeliteall");
_1buttonfooter.append("Удалить завершенные");
_2buttonfooter.append("Удалить всe");

divfooter.classList.add("footer");
divfooter.append(_1buttonfooter);
divfooter.append(_2buttonfooter);
__div.append(list);

function createList(text) {
  const inputbox = document.createElement("input");
  inputbox.setAttribute("type", "checkbox");
  inputbox.classList.add("inchexbox");
  const _span = document.createElement("p");
  const _li = document.createElement("li");
  _li.append(inputbox);
  _span.append(text);
  list.prepend(_li);

  const _button = document.createElement("button");
  _button.classList.add("ButtonX");
  _button.onclick = () => {
    _li.remove();
  };

  _1buttonfooter.addEventListener("click", () => {
    if (_span.classList.contains("linethro")) {
      _li.remove();
    }
  });

  _2buttonfooter.addEventListener("click", () => {
    _li.remove();
    divfooter.remove();
    _hr.remove();
    __div.remove();
  });

  inputbox.addEventListener("click", () => {
    _span.classList.toggle("linethro");
  });

  _li.append(_span);
  _li.append(_button);
  _flexbox.append(_hr);
  _flexbox.append(__div);
  _button.append("❌");
  list.append(divfooter);
}

const click = (document.querySelector("button").onclick = function () {
  const _input = document.querySelector(".input__text");
  createList(_input.value);
});

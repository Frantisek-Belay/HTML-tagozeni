// Funkce pro vytvoření náhodného HTML tagu
function createRandomTag() {
  var tags = [
    "<!--...-->",
    "!DOCTYPE",
    "wbr",
    "var",
    "title",
    "time",
    "samp",
    "metr",
    "meta",
    "mark",
    "link",
    "kbd",
    "input",
    "bdo",
    "bdi",
    "img",
    "em",
    "colgroup",
    "col",
    "code",
    "br",
    "area",
    "abbr",
    "video",
    "ul",
    "u",
    "track",
    "tr",
    "thead",
    "th",
    "textarea",
    "tfoot",
    "template",
    "td",
    "tbody",
    "table",
    "svg",
    "sup",
    "summary",
    "sub",
    "style",
    "strong",
    "source",
    "small",
    "select",
    "section",
    "search",
    "script",
    "s",
    "ruby",
    "rt",
    "rp",
    "q",
    "progress",
    "pre",
    "picture",
    "param",
    "p",
    "optgroup",
    "option",
    "ol",
    "object",
    "noscript",
    "nav",
    "meter",
    "menu",
    "map",
    "main",
    "li",
    "legend",
    "label",
    "ins",
    "iframe",
    "i",
    "html",
    "hr",
    "hgroup",
    "header",
    "head",
    "h6",
    "h5",
    "h4",
    "h3",
    "h2",
    "h1",
    "form",
    "footer",
    "figure",
    "figcaption",
    "fieldset",
    "embed",
    "dt",
    "dl",
    "dialog",
    "dfn",
    "details",
    "datalist",
    "data",
    "del",
    "dd",
    "cite",
    "caption",
    "canvas",
    "blockquote",
    "button",
    "body",
    "base",
    "address",
    "article",
    "aside",
    "audio",
    "span",
    "div",
    "a",
  ]; // Seznam podporovaných tagů, můžeš přidat další podle potřeby
  var randomTag = tags[Math.floor(Math.random() * tags.length)]; // Náhodný výběr tagu
  var tag = document.createElement(randomTag); // Vytvoření elementu podle náhodného tagu
  tag.className = "tag " + randomTag; // Přidání CSS třídy pro formátování
  tag.innerHTML = "&lt;" + randomTag + "&gt;"; // Vložení textu do tagu
  var randomX = Math.random() * window.innerWidth; // Náhodná pozice X
  var randomRotateX = Math.random() * 360; // Náhodné otočení kolem osy X
  var randomRotateY = Math.random() * 360; // Náhodné otočení kolem osy Y
  var randomRotateZ = Math.random() * 360; // Náhodné otočení kolem osy Z
  var randomDuration = Math.random() * 15 + 10; // Náhodná rychlost pádu
  var randomOffsetX = Math.random() * 350 - 15; // Náhodné horizontální ofsetování pohybu
  var randomOffsetY = Math.random() * 50 - 25; // Náhodné vertikální ofsetování pohybu
  tag.style.left = randomX + "px"; // Nastavení pozice X
  tag.style.top = "-50px"; // Nastavení pozice Y nad horní hranou stránky
  var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16); // Náhodná barva
  tag.style.transition =
    "top " +
    randomDuration +
    "s linear, transform " +
    randomDuration +
    "s linear"; // Nastavení přechodu pro pohyb dolů a otáčení
  tag.style.transform =
    "rotateX(" +
    randomRotateX +
    "deg) rotateY(" +
    randomRotateY +
    "deg) rotateZ(" +
    randomRotateZ +
    "deg) translateX(" +
    randomOffsetX +
    "px) translateY(" +
    randomOffsetY +
    "px)"; // Nastavení náhodného otočení a pohybu
  tag.style.color = randomColor; // Nastavení náhodné barvy
  document.body.appendChild(tag); // Přidání tagu do těla dokumentu

  setTimeout(function () {
    var randomX = Math.random() * window.innerWidth; // Náhodná pozice X pro nový směr pádu
    var randomRotateX = Math.random() * 360; // Náhodné otočení kolem osy X
    var randomRotateY = Math.random() * 360; // Náhodné otočení kolem osy Y
    var randomRotateZ = Math.random() * 360; // Náhodné otočení kolem osy Z
    var randomDuration = Math.random() * 5 + 5; // Náhodná rychlost pádu
    var randomOffsetX = Math.random() * 50 - 25; // Náhodné horizontální ofsetování pohybu
    var randomOffsetY = Math.random() * 50 - 25; // Náhodné vertikální ofsetování pohybu
    var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16); // Náhodná barva
    tag.style.left = randomX + "px"; // Nastavení nové pozice X pro nový směr pádu
    tag.style.top = window.innerHeight + 50 + "px"; // Nastavení pozice Y pod spodní hranou stránky
    tag.style.transform =
      "rotateX(" +
      randomRotateX +
      "deg) rotateY(" +
      randomRotateY +
      "deg) rotateZ(" +
      randomRotateZ +
      "deg) translateX(" +
      randomOffsetX +
      "px) translateY(" +
      randomOffsetY +
      "px)"; // Nastavení nového náhodného otočení a pohybu
    tag.style.color = randomColor; // Nastavení náhodné barvy
  }, 100); // Časová prodleva pro zahájení pádu tagu

  //   Kontrola, kdy tag dosáhne spodní hranice stránky a odebrání ho
  setTimeout(function () {
    tag.parentNode.removeChild(tag);
  }, randomDuration * 1000 + 100); // Časová prodleva pro odebrání tagu po skončení přechodu
}

// Funkce pro generování hustého "sněžení" tagů
function generateTags() {
  setInterval(function () {
    createRandomTag();
  }, 100); // Interval mezi vytvářením tagů (v milisekundách)
}

// Spuštění generování tagů po načtení stránky
window.onload = function () {
  generateTags();
};

let $d = document,
  randomColor = () => {
    col = Math.round(Math.random() * 16777215);
    return [
      "#" + ("000000" + col.toString(16)).slice(-6),
      "#" + ("000000" + (16777215 - col).toString(16)).slice(-6),
    ];
  };

segs = $d.querySelectorAll(".ram article");

class Program {
  constructor(nombre, t_codigo, t_data, t_bss, logo) {
    this.nombre = nombre;
    this.t_disco = encabezado;
    this.t_codigo = t_codigo;
    this.t_data = t_data;
    this.t_bss = t_bss;
    this.memoria = encabezado + stack + heap;
    this.logo = logo;
  }
  resize() {
    this.t_disco += this.t_codigo + this.t_data + this.t_bss;
    this.memoria += this.t_codigo + this.t_data + this.t_bss;
  }
}

const kernel = 1048576,
  stack = 65536,
  heap = 131072,
  encabezado = 180,
  SO = new Program("S.O.", 431592, 207365, 916, "https://icon-library.com/images/dos-icon/dos-icon-5.jpg"),
  Notepad = new Program(
    "Notepad",
    18654,
    10352,
    164,
    "https://icon-library.com/images/notepad-icon-png/notepad-icon-png-16.jpg"
  ),
  Word = new Program(
    "Word",
    81465,
    13548,
    276,
    "https://icon-library.com/images/icon-word/icon-word-5.jpg"
  ),
  Excel = new Program(
    "Excel",
    91776,
    15000,
    300,
    "https://icon-library.com/images/excel-sheet-icon/excel-sheet-icon-8.jpg"
  ),
  AutoCAD = new Program(
    "AutoCAD",
    122883,
    137842,
    1055,
    "https://icon-library.com/images/autodesk-autocad.png"
  ),
  Calculadora = new Program(
    "Calculadora",
    20480,
    303,
    387,
    "https://icon-library.com/images/windows-calculator-icon/windows-calculator-icon-8.jpg"
  ),
  Chrome = new Program(
    "Chrome",
    384762,
    224288,
    1228,
    "https://icon-library.com/images/chrome-icon/chrome-icon-5.jpg"
  ),
  GTA5 = new Program(
    "Grand Theft Auto V",
    2359361,
    532470,
    8692,
    "https://icon-library.com/images/grand-theft-auto-v-icon/grand-theft-auto-v-icon-20.jpg"
  ),
  Oracle = new Program(
    "Oracle",
    576319,
    614403,
    2364,
    "https://icon-library.com/images/oracle-icon-png/oracle-icon-png-14.jpg"
  );
let programas = [
  SO,
  Notepad,
  Word,
  Excel,
  AutoCAD,
  Calculadora,
  Chrome,
  GTA5,
  Oracle,
];
for (let p of programas) {
  p.resize();
  fig = `<figure>
    <img src="${p.logo}" alt=" ">
    <figcaption><span>${p.nombre}</span></figcaption>
  </figure>`;
  $d.querySelector(".icons").innerHTML += fig;
}

programas.forEach((e, i) => {
  col = randomColor();
  segs[i].querySelector("span").textContent = e.nombre;
  segs[i].setAttribute(
    "style",
    `background: ${col[0]};text-shadow: -1.5px 2.5px 2px black, 1.5px -1.5px 0.08em ${col[1]}, 0 0 2em black;`
  );
  let $articles = `<article><span>P${i}</span></article>`;
  for (const key in e) {
    if (key !== "logo") {
      $articles += `<article><span>${e[key]}</span></article>`;
    }
  }
  $articles += `<article><span>${
    parseInt((e.memoria / 1024) * 100) / 100
  }</span></article>`;
  $d.querySelector(".proc").innerHTML += $articles;
});

$d.querySelectorAll(".icons figure").forEach((e) => {
  e.addEventListener("click", (fig) => {
    Array(...e.parentElement.children).forEach((f) => {
      f.classList.remove("figclick");
    });
    let $figure = fig.target;
    while (!$figure.matches("figure")) $figure = $figure.parentNode;
    $figure.classList.add("figclick");
  });
  e.addEventListener("dblclick", (fig) => {
    console.log("double", fig.target);
  });
});
console.log(programas);

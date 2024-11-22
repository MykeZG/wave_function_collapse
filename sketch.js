// const celdas = [];S
// let numero = 3;
// let otroNumero;
// let plantas = ["maiz", "menta"];
// Aqui se esta copiando la dirección más no el contenido del objeto (pointers -> apuntadores)

// ... separa a todos los objetos de plantas y frutas pasa a ser un nuevo array que se define con [] y ahi se coloca todos los elementos que han sido dispersos de planta al ser un string su copia ya no es una referencia si no que se copia la variable misma por que es una variable sencilla pero si adentro hubiera objetos como un array dentro de un array esa copia de los arrays tambien seria superficial solo se copiaria la direccion de los arrays
// let frutas = [...plantas];
const cells = []; // 4x4
const GRID = 4;
const tiles = [];
const NT = 22; // numero de azulejos
const rules = [
  // Reglas de los bordes de cada azulejo xd
  // Reglas como si fuera un array no te permite almacenar nombres a los elementos solo un indices.
  // [
  //   0,0,0,0
  // ],

  // Object Literlal
  {
    // tile 0
    UP: 0,
    RIGHT: 0,
    DOWN: 0,
    LEFT: 0,
  },
  {
    // tile 1 Aun no sé
    UP: 0,
    RIGHT: 0,
    DOWN: 0,
    LEFT: 0,
  },
  {
    // tile 2
    UP: 1,
    RIGHT: 0,
    DOWN: 0,
    LEFT: 0,
  },
  {
    // tile 3
    UP: 0,
    RIGHT: 1,
    DOWN: 0,
    LEFT: 0,
  },
  {
    // tile 4
    UP: 0,
    RIGHT: 0,
    DOWN: 1,
    LEFT: 0,
  },
  {
    // tile 5
    UP: 0,
    RIGHT: 0,
    DOWN: 0,
    LEFT: 1,
  },
  {
    // tile 6
    UP: 0,
    RIGHT: 0,
    DOWN: 0,
    LEFT: 0,
  },
  {
    // tile 7
    UP: 0,
    RIGHT: 0,
    DOWN: 0,
    LEFT: 0,
  },
  {
    // tile 8
    UP: 0,
    RIGHT: 0,
    DOWN: 0,
    LEFT: 0,
  },
  {
    // tile 9
    UP: 0,
    RIGHT: 0,
    DOWN: 0,
    LEFT: 0,
  },
  {
    // tile 10
    UP: 1,
    RIGHT: 0,
    DOWN: 1,
    LEFT: 0,
  },
  {
    // tile 11
    UP: 0,
    RIGHT: 1,
    DOWN: 0,
    LEFT: 1,
  },
  {
    // tile 12
    UP: 1,
    RIGHT: 1,
    DOWN: 0,
    LEFT: 0,
  },
  {
    // tile 13
    UP: 0,
    RIGHT: 1,
    DOWN: 1,
    LEFT: 0,
  },
  {
    // tile 14
    UP: 0,
    RIGHT: 0,
    DOWN: 1,
    LEFT: 1,
  },
  {
    // tile 15
    UP: 1,
    RIGHT: 0,
    DOWN: 0,
    LEFT: 1,
  },
  {
    // tile 16
    UP: 1,
    RIGHT: 1,
    DOWN: 1,
    LEFT: 0,
  },
  {
    // tile 17
    UP: 0,
    RIGHT: 1,
    DOWN: 1,
    LEFT: 1,
  },
  {
    // tile 18
    UP: 1,
    RIGHT: 0,
    DOWN: 1,
    LEFT: 1,
  },
  {
    // tile 19
    UP: 1,
    RIGHT: 1,
    DOWN: 0,
    LEFT: 1,
  },
  {
    // tile 20
    UP: 1,
    RIGHT: 1,
    DOWN: 1,
    LEFT: 1,
  },
  {
    // tile 21
    UP: 0,
    RIGHT: 0,
    DOWN: 0,
    LEFT: 0,
  },
];

function preload() {
  for (let i = 0; i < NT; i++) {
    tiles[i] = loadImage(`img/tile${i}.png`);
    // tiles[i] = loadImage("img/tile" + i + ".png");
  }
}

function setup() {
  createCanvas(1080, 1080);

  let optionsI = [];
  for (let i = 0; i < tiles.length; i++) {
    optionsI.push(i);
  }
  for (let i = 0; i < GRID * GRID; i++) {
    cells[i] = {
      collapsed: false,
      options: optionsI,
    };
  }
  print(cells);
  // frutas[2] = "manzana";

  // print(frutas);
  // print(plantas);
}

function draw() {
  background(0);
}

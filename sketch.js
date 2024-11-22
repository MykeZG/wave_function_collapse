// const celdas = [];S
// let numero = 3;
// let otroNumero;
// let plantas = ["maiz", "menta"];
// Aqui se esta copiando la dirección más no el contenido del objeto (pointers -> apuntadores)

// ... separa a todos los objetos de plantas y frutas pasa a ser un nuevo array que se define con [] y ahi se coloca todos los elementos que han sido dispersos de planta al ser un string su copia ya no es una referencia si no que se copia la variable misma por que es una variable sencilla pero si adentro hubiera objetos como un array dentro de un array esa copia de los arrays tambien seria superficial solo se copiaria la direccion de los arrays
// let frutas = [...plantas];
const celdas = []; // 4x4
const GRID = 4;
let ancho; // altura de celda
let alto; // anchura de celda
const tiles = [];
let opcionesI = [];
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
    UP: 1,
    RIGHT: 0,
    DOWN: 0,
    LEFT: 0,
  },
  {
    // tile 7
    UP: 0,
    RIGHT: 1,
    DOWN: 0,
    LEFT: 0,
  },
  {
    // tile 8
    UP: 0,
    RIGHT: 0,
    DOWN: 1,
    LEFT: 0,
  },
  {
    // tile 9
    UP: 0,
    RIGHT: 0,
    DOWN: 0,
    LEFT: 1,
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
const NT = rules.length; // numero de azulejos

function preload() {
  for (let i = 0; i < NT; i++) {
    tiles[i] = loadImage(`img/tile${i}.png`);
    // tiles[i] = loadImage("img/tile" + i + ".png");
  }
}

function setup() {
  createCanvas(1080, 1080);

  ancho = width / GRID;
  alto = height / GRID;

  for (let i = 0; i < tiles.length; i++) {
    opcionesI.push(i);
  }
  for (let i = 0; i < GRID * GRID; i++) {
    celdas[i] = {
      colapsado: false,
      opciones: opcionesI,
    };
  }
  // celdas[8].colapsado = true;
  // celdas[3].colapsado = true;

  // celdas[12].opcionesI = [5, 6, 8];
  // celdas[4].opcionesI = [4, 7, 12];
  // celdas[6].opcionesI = [49, 7, 12];
  // celdas[1].opcionesI = [6, 4, 8, 10];
  // celdas[5].opcionesI = [1, 6, 4, 8, 10];
  // frutas[2] = "manzana";

  // print(frutas);
  // print(plantas);
}

function draw() {
  // background(100);
  // funcion anonima = funcion (recibo el elemento()le doy un nombre){dentro de la función utilizo ese nombre para acceder a cada una de las celdas y hacer la comparacion}
  // Arrot function => esto es una funcióin  {} parametros de entrada
  // function filtrarCeldas(cell) {
  //   return cell.colapsado == false;
  // }
  // const uCells = celdas.filter(filtrarCeldas);

  // const uCells = celdas.filter(function (celda) {
  //   return cell.colapsado == false;
  // });
  // signo de admiracion no es igual
  const celdasConOpciones = celdas.filter((celda) => {
    return celda.opciones.length > 0;
    b;
  });

  const celdasDisponibles = celdasConOpciones.filter((celda) => {
    return celda.colapsado == false;
  });

  if (celdasDisponibles.length > 0) {
    celdasDisponibles.sort((a, b) => {
      return a.opciones.length - b.opciones.length;
    });

    const celdasPorColapsar = celdasDisponibles.filter((celda) => {
      return celda.opciones.length == celdasDisponibles[0].opciones.length;
    });

    const celdaSeleccionada = random(celdasPorColapsar);
    celdaSeleccionada.colapsado = true;

    const opcionSeleccionada = random(celdaSeleccionada.opciones);

    celdaSeleccionada.opciones = [opcionSeleccionada];

    // print(celdaSeleccionada);
    for (let x = 0; x < GRID; x++) {
      for (let y = 0; y < GRID; y++) {
        const celdaIndex = x + y * GRID;
        const celdaActual = celdas[celdaIndex];
        if (celdaActual.opciones.length < 1) {
          fill(255, 100, 100);
          rect(x * ancho, y * alto, ancho, alto);
        }
        if (celdaActual.colapsado) {
          const indiceDeAzulejo = celdaActual.opciones[0];
          const reglasActuales = rules[indiceDeAzulejo];
          // print(reglasActuales);
          image(
            tiles[celdaActual.opciones[0]],
            x * ancho,
            y * alto,
            ancho,
            alto
          );

          // Cambiar entropía UP
          if (y > 0) {
            const indiceUP = x + (y - 1) * GRID;
            const celdaUP = celdas[indiceUP];
            if (!celdaUP.colapsado) {
              cambiarEntropia(celdaUP, reglasActuales["UP"], "DOWN");
            }
            // print(reglasActuales["UP"]);
          }

          // Cambiar entropía RIGHT
          if (x < GRID - 1) {
            const indiceRIGHT = x + 1 + y * GRID;
            const celdaRIGHT = celdas[indiceRIGHT];
            if (!celdaRIGHT.colapsado) {
              cambiarEntropia(celdaRIGHT, reglasActuales["RIGHT"], "LEFT");
            }
          }

          // Cambiar entropía DOWN
          if (y < GRID - 1) {
            const indiceDOWN = x + (y + 1) * GRID;
            const celdaDOWN = celdas[indiceDOWN];
            if (!celdaDOWN.colapsado) {
              cambiarEntropia(celdaDOWN, reglasActuales["DOWN"], "UP");
            }
          }

          // Cambiar entropía LEFT
          if (x > 0) {
            const indiceLEFT = x - 1 + y * GRID;
            const celdaLEFT = celdas[indiceLEFT];
            if (!celdaLEFT.colapsado) {
              cambiarEntropia(celdaLEFT, reglasActuales["LEFT"], "RIGHT");
            }
          }
        } else {
          // strokeWeight(6);
          // rect(x * ancho, y * alto, ancho, alto);
        }
      }
    }
  }
  // noLoop();
  else {
    // for (let i = 0; i < GRID * GRID; i++) {
    //   celdas[i] = {
    //     colapsado: false,
    //     opciones: opcionesI,
    //   };
    // }
  }
}
function cambiarEntropia(_celda, _regla, _opuesta) {
  const nuevasOpciones = [];
  for (let i = 0; i < _celda.opciones.length; i++) {
    if (_regla == rules[_celda.opciones[i]][_opuesta]) {
      const celdaCompatible = _celda.opciones[i];
      nuevasOpciones.push(celdaCompatible);
    }
  }
  _celda.opciones = nuevasOpciones;
  print(nuevasOpciones);
}

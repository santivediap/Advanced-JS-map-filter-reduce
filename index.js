//RESUELVE LOS EJERCICIOS AQUI

// Ejercicio 1

const numbers = [4,5,6,7,8,9,10];

const elevados = () => {
    return numbers.map(n => n**n);
}

// Ejercicio 2

const foodList = ['Pizza', 'Ramen', 'Paella', 'Entrecot'];

const result2 = foodList.map((value) => {

    if(value == 'Pizza') {
        return 'Como soy de Italia, amo comer Pizza';
    }

    if(value == 'Ramen') {
        return 'Como soy de Japón, amo comer Ramen';
    }

    if(value == 'Paella') {
        return 'Como soy de Valencia, amo comer Paella';
    }

    if(value == 'Entrecot') {
        return 'Aunque no como carne, el Entrecot es sabroso';
    }
})

// Ejercicio 3

const staff = [
    {
      name: 'Pepe',
      role: 'The Boss',
      hobbies: ['leer', 'ver pelis']
    },
    {
      name: 'Ana',
      role: 'becaria',
      hobbies: ['nadar', 'bailar']
    },
    {
      name: 'Luis',
      role: 'programador',
      hobbies: ['dormir', 'comprar']
    },
    {
      name: 'Carlos',
      role: 'secretario',
      hobbies: ['futbol', 'queso']
    }
  ];

const result3 = staff.map(item => {
  let staffDescription = [];

  staffDescription.push(`${item.name} es ${item.role} y le gusta ${item.hobbies.join(" y ")}`)

  return staffDescription.toString();
})

// Ejercicio 4

const numbers2 = [1,2,3,4,5,6,7,8,9,10];

const result4 = numbers2.filter(num => num % 2)

// Ejercicio 5

const foodList2 = [
    {
      name: 'Tempeh',
      isVeggie: true
    },
    {
      name: 'Cheesbacon burguer',
      isVeggie: false
    },
    {
      name: 'Tofu burguer',
      isVeggie: true
    },
    {
      name: 'Entrecot',
      isVeggie: false
    }];

const result5 = foodList2
                        .filter(val => val.isVeggie)
                        .map(element => {
  if(element.name.includes('burguer')) {
    return `Que rica ${element.name} me voy a comer!`
} else {
  return `Que rico ${element.name} me voy a comer!`
}});

// Ejercicio 6

const inventory = [
  {
    name: 'Mobile phone',
    price: 199
  },
  {
    name: 'TV Samsung',
    price: 459
  },
  {
    name: 'Viaje a Cancún',
    price: 600
  },
  {
    name: 'Mascarilla',
    price: 1
  }
];

const result6 = inventory
                        .filter(val => val.price > 300)
                        .map(val => val.name);

// Ejercicio 7

const numeros3 = [39, 2, 4, 25, 62];

const result7 = numeros3.reduce((prev, curr) => prev * curr);

// Ejercicio 8

const sentenceElements = [
  'Me',
  'llamo',
  'Santi',
  'y',
  'quiero',
  'sentir',
  'la',
  'fuerza',
  'con',
  'javascript'
];

const result8 = sentenceElements.reduce((prev, curr) => `${prev} ${curr}`)

// Ejercicio 9

const books = [
  {
    name: ' JS for dummies',
    author: 'Emily A. Vander Veer',
    price: 20,
    category: 'code'
  },
  {
    name: 'Don Quijote de la Mancha',
    author: 'Cervantes',
    price: 14,
    category: 'novel'
  },
  {
    name: 'Juego de tronos',
    author: 'George R. Martin',
    price: 32,
    category: 'Fantasy'
  },
  {
    name: 'javascript the good parts',
    author: 'Douglas Crockford',
    price: 40,
    category: 'code'
  }
];

const result9 = books
                    .filter(book => book.category == "code")
                    .map(val => val.price)
                    .reduce((count, curr) => count + curr)
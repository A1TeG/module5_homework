let personal = new Map();
personal.set('Директор', 'Василий');
personal.set('Бригадир', 'Семён');
personal.set('Рабочий', 'Геннадий');

personal.forEach((value, key) => {
  console.log(`Ключ - ${key}, Значение - ${value}`)
})
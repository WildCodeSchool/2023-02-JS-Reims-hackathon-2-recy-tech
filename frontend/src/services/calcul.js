function calcul(ram, storage, antutu, state) {
  let price = 0;
  let category = "test";

  switch (ram) {
    case "1Go":
      price += 30;
      break;
    case "2Go":
      price += 40;
      break;
    case "3Go":
      price += 54;
      break;
    case "4Go":
      price += 70;
      break;
    case "6Go":
      price += 88;
      break;
    case "8Go":
      price += 108;
      break;
    case "12Go":
      price += 130;
      break;
    case "16Go":
      price += 154;
      break;
    default:
      price += 0;
      break;
  }
  switch (storage) {
    case "16GB":
      price += 31;
      break;
    case "32GB":
      price += 45;
      break;
    case "64GB":
      price += 66;
      break;
    case "128GB":
      price += 98;
      break;
    case "256GB":
      price += 118;
      break;
    case "512GB":
      price += 150;
      break;
    default:
      price += 0;
      break;
  }

  if (antutu >= 0 && antutu < 50000) {
    price += 40;
  } else if (antutu >= 50000 && antutu < 100000) {
    price += 44;
  } else if (antutu >= 100000 && antutu < 150000) {
    price += 49;
  } else if (antutu >= 150000 && antutu < 200000) {
    price += 55;
  } else if (antutu >= 200000 && antutu < 250000) {
    price += 62;
  } else if (antutu >= 250000 && antutu < 300000) {
    price += 70;
  } else if (antutu >= 300000 && antutu < 350000) {
    price += 79;
  } else {
    price += 0;
  }
  switch (state) {
    case "DEEE":
      price *= 0; // 100% reduction
      break;
    case "REPARABLE":
      price *= 0.5; // 50% reduction
      break;
    case "BLOQUE":
      price *= 0.9; // 10% reduction
      break;
    case "RECONDITIONABLE":
      price *= 0.95; // 5% reduction
      break;
    case "RECONDITIONNE":
      // No reduction
      break;
    default:
      price *= 1;
      break;
  }

  if (price < 90) {
    category = "1-HC";
  } else if (price >= 90 && price < 165) {
    category = "2-C";
  } else if (price >= 165 && price < 255) {
    category = "3-B";
  } else if (price >= 255 && price < 375) {
    category = "4-A";
  } else {
    category = "5-Premium";
  }

  return [price, category];
}

// eslint-disable-next-line import/prefer-default-export
export { calcul };

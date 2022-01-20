function tri(lad1, lad2, lad3) {
  if (lad1 == lad2 && lad2 == lad3) {
    return "Equilátero.";
  } else if (lad1 == lad2 || lad2 == lad3 || lad3 == lad1) {
    return "Isóceles.";
  } else {
    return "Escaleno.";
  }
}

console.log(tri(8, 1, 4));

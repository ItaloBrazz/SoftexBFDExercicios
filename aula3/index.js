function bhaskara(a, b, c) {
  const delta = b * b - 4 * a * c;

  if (delta < 0) {
    return "Não existem raízes reais";
  }

  const raizDelta = Math.sqrt(delta);
  const x1 = (-b + raizDelta) / (2 * a);
  const x2 = (-b - raizDelta) / (2 * a);

  return `As raízes da equação são:\n x₁ = ${x1}\n x₂ = ${x2}`;
}

console.log(bhaskara(1, -3, 2));

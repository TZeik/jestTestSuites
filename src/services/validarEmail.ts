export function validarEmail(correo: string): boolean {
  const rx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // se verifica que solo haya 1 @ y 1 .
  return (
    rx.test(correo) &&
    correo.split("@").length === 2 &&
    correo.split("@")[1].split(".").length === 2
  );
}

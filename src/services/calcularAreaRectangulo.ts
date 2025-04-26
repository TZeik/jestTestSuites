export function calcularAreaRectangulo(base: number, altura: number): number {
    if (base <= 0 || altura <= 0) {
        throw new Error("Base y altura deben ser valores positivos");
    }
    return base * altura;
}
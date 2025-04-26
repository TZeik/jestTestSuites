import { calcularAreaRectangulo } from '../../src/services/calcularAreaRectangulo';

describe('calcularAreaRectangulo', () => {
    it('Calcular correctamente valores positivos', () => {
        expect(calcularAreaRectangulo(5, 4)).toBe(20);
        expect(calcularAreaRectangulo(3, 7)).toBe(21);
        expect(calcularAreaRectangulo(10, 10)).toBe(100);
    });

    it('Verificacion de que se lanza error por parametros de la funcion', () => {
        expect(() => calcularAreaRectangulo(0, 5)).toThrow();
        expect(() => calcularAreaRectangulo(-2, 5)).toThrow();
    });

});
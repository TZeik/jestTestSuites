import { validarEmail } from '../../src/services/validarEmail';

describe('validarEmail', () => {
    it('Retorno de true para correos validos', () => {
        expect(validarEmail('randy@dexample.com')).toBe(true);
        expect(validarEmail('gauris@talendig.com')).toBe(true);
        expect(validarEmail('aaa@bbb.ccc')).toBe(true);
    });

    it('Ahora se espera que los correos invalidos retorne false', () => {
        expect(validarEmail('randy@example')).toBe(false);
        expect(validarEmail('gauris@.com')).toBe(false);
        expect(validarEmail('@gmail.com')).toBe(false);
        expect(validarEmail('rafael tejada.com')).toBe(false);
        expect(validarEmail('richard@velez..com')).toBe(false);
        expect(validarEmail('rafael@@example.com')).toBe(false);
        expect(validarEmail('')).toBe(false);
    });
});
import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";
import heroes from "../../src/data/heroes";

describe("test 09-promesas", () => {
  test("getHeroeByIdAsync should return one heroes ", (done) => {
    const id = 1;
    getHeroeByIdAsync(id).then((hero) => {
      expect(hero).toEqual(heroes[0]);

      done();
    });
  });

  test("getHeroeByIdAsync should return error if hero don´t exist", (done) => {
    const id = 123;
    getHeroeByIdAsync(id)
      .then(() => {})
      .catch((error) => {
        expect(error).toBe('No se pudo encontrar el héroe')
        done()

      });
  });
});

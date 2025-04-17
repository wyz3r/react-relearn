import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe("function test", () => {
  test("getUser should return obj", () => {
    const user = getUser();
    const obj = {
      uid: "ABC123",
      username: "El_Papi1502",
    };
   
    expect(obj).toEqual(user);
  });

  test("getUsuarioActivo should retunr obj", () => {
    const name = 'Leonel'
   
    const obj = {
        uid: "ABC567",
        username: name,
      };
      const userActive = getUsuarioActivo(name);

    expect(userActive).toEqual(obj)

  })
 
  // test('should first', () => { second })
});

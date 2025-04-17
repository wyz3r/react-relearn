describe("Testing in <DemoCOmponent />", () => {
  test("This Test must no fail ", () => {
    //  1 initialize
    const message1 = "Hola mundo";
    //  2 incentive
    const message2 = message1.trim();
    //  observe behavior

    expect(message1).toBe(message2);
  });
});

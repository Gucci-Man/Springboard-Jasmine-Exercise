
it('should calculate the monthly rate correctly', function () {
  const values = { amount: 10000, years: 10, rate: 4.5 };
  expect(calculateMonthlyPayment(values)).toEqual('103.64');
});


it("should return a result with 2 decimal places", function () {
  const values = { amount: 10000, years: 10, rate: 4.5 };
  expect(Number(calculateMonthlyPayment(values))).toBeCloseTo(103.64, 2);
});

it("should be able to calculate extremely high interest rates", () => {
  const values = { amount: 10000, years: 10, rate: 99 };
  expect(calculateMonthlyPayment(values)).toEqual('825.06');
})

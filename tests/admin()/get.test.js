test('GET to /admin()', async () => {
  const response = await fetch('http://localhost:3000/admin()');

  expect(response.status).toBe(200);
});

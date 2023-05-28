test('данные являются арахисовым маслом', async () => {
    await expect(fetchData()).resolves.toBe('арахисовое масло');
});

test('fetch вернёт ошибку', async () => {
    await expect(fetchData()).rejects.toMatch('error');
});
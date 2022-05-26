const add = (a, b) => a + b;

const users = ['roman', 'fava', 'jozef', 'basia'];

it('check list', () => {
    expect(users).toContain('roman');
    expect(users).not.toContain('bananas');
});

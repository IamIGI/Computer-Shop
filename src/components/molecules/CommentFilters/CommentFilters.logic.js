export const ratingOptions = [
    { label: 'Wszystkie oceny', value: 0 },
    { label: '1 gwiazdka', value: 1 },
    { label: '2 gwiazdka', value: 2 },
    { label: '3 gwiazdka', value: 3 },
    { label: '4 gwiazdka', value: 4 },
    { label: '5 gwiazdka', value: 5 },
    { label: '6 gwiazdka', value: 6 },
];

export const filterOptions = [
    { label: 'Najnowsze', value: 'date' },
    { label: 'Najstarsze', value: '-date' },
    { label: 'Najbardziej pomocne', value: 'likes.up' },
    { label: 'Najwyższe oceny', value: 'content.rating' },
    { label: 'Najniższe oceny', value: '-content.rating' },
];

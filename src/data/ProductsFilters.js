export const Producers = { title: 'Producent', filters: ['Apple', 'Asus', 'HP', 'Dell', 'MSI'] };
export const Places = { title: 'Salon', filters: ['Krakow', 'Warszawa', 'Lodz', 'Sczescin', 'Gdansk'] };
export const Processors = {
    title: 'Procesor',
    filters: ['Intel Core i3', 'Intel Core i5', 'Intel Core i7', 'AMD Ryzen 5', 'Apple M1 Pro', 'Apple M1'],
    filters_extended: [
        { label: 'Intel Core i3', value: 'INTEL-3' },
        { label: 'Intel Core i5', value: 'INTEL-5' },
        { label: 'Intel Core i7', value: 'INTEL-7' },
        { label: 'AMD Ryzen 5', value: 'AMD-5' },
        { label: 'Apple M1 Pro', value: 'APPLE-10' },
        { label: 'Apple M1', value: 'APPLE-8' },
    ],
};
export const RAM = { title: 'Ram', filters: ['4', '8', '16', '32'] };
export const OS = { title: 'System operacyjny', filters: ['Brak systemu', 'Windows 11', 'Windows 10', 'maxOS'] };

export const filterOptions = [
    { label: 'Brak sortowania', value: 'none' },
    { label: 'Najpopularniejsze', value: 'popular' },
    { label: 'Najlepiej oceniane', value: 'rating' },
    { label: 'Cena: od najtańszych', value: '-price' },
    { label: 'Cena: od najdroższych', value: 'price' },
];

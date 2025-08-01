{

    // interface - generic

    interface Developer<T> {
        name: string;
        computer: {
            brand: string;
            model: string;
            releaseYear: number;
        },
        smartWatch: T
    }

    const poorDeveloper: Developer<{
        brand: string;
        model: string;
        display: string;
    }> = {
        name: 'Rezwan Rahim',
        computer: {
            brand: 'Asus',
            model: 'X-w234',
            releaseYear: 2021
        },
        smartWatch: {
            brand: 'Emilab',
            model: 'Kw66',
            display: 'OLED'
        }
    }

    const richDeveloper: Developer<{
        brand: string;
        model: string;
        heartTrack: boolean;
        sleepTrack: boolean
    }> = {
        name: 'Rezwan Rahim Rupak',
        computer: {
            brand: 'Apple',
            model: 'Apple-Y234',
            releaseYear: 2025
        },
        smartWatch: {
            brand: 'Rolex',
            model: 'R-556',
            heartTrack: true,
            sleepTrack: true
        }
    }

}
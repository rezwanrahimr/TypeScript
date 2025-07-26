{

    // union types

    type FrontendDeveloper = 'Level1' | 'Level2';

    const newDeveloper: FrontendDeveloper = 'Level1';

    type User = {
        name: string;
        level: 'Level1' | 'Level2';
        gender: 'Male' | 'Femal';
    }

    const user1: User = {
        name: 'Rezwan Rahim Rupak',
        level: 'Level1',
        gender: 'Male'
    }


    // intersection

    type FrotnendDeveloper = {
        skills: string[];
        designation: 'Frontend Developer';
    }

    type BackendDeveloper = {
        skills: string[];
        designation2: 'Backend Developer';
    }

    type FullstackDeveloper = FrontendDeveloper & BackendDeveloper;

    const developer: FullstackDeveloper = {
        skills: ['Node.js', 'Express.js'],
        designation: 'Frontend Develper',
        designation2: 'Backend Developer'
    }

}
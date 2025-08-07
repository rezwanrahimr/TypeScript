{
    // oop - class
    class Animal {
        name: string;
        species: string;
        sound: string;

        constructor(name: string, species: string, sound: string) {
            this.name = name;
            this.species = species;
            this.sound = sound;
        }

        makeSound(): string {
            return `${this.name} says ${this.sound}`;
        }
    }

    const dog = new Animal("Buddy", "Dog", "Woof");
    const cat = new Animal("Whiskers", "Cat", "Meow");
    console.log(`${dog.name} is a ${dog.species} and says ${dog.sound} ${dog.makeSound()}`);

}
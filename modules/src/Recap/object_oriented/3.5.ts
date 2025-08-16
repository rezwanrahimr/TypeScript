{
    // instanceof guard
    class Animal {
        name: string;
        species: string;

        constructor(name: string, species: string) {
            this.name = name;
            this.species = species;
        }
        makeSound(): string {
            return `${this.name} makes a sound.`;
        }
    }

    class Dog extends Animal {
        constructor(name: string, species: string) {
            super(name, species);
        }

        makeSound(): string {
            return `${this.name} barks.`;
        }
    }

    const dog = new Dog("Buddy", "Dog");
    const cat = new Animal("Whiskers", "Cat");
    console.log(dog);
    console.log(cat);
    const sound = dog.makeSound();
    console.log(sound);
    console.log(cat.makeSound());

}
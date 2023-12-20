// ts union
enum Level {
  junior = "Junior",
  mid = "Mid",
  senior = "Senior",
}
type NoopDeveloper = {
  name: string;
};

type JuniorDeveloper = NoopDeveloper & {
  //InterSection
  experience: number;
  expertise: string;
};

type NextDeveloper = JuniorDeveloper & {
  // InterSection
  leaderShipExperience: number;
  level: Level;
};

const newDeveloper: NoopDeveloper | JuniorDeveloper = {
  // Union
  name: "Rezwan Rahim",
  experience: 2,
  expertise: "JavaScript React Node",
};

const nextLevelDeveloper: JuniorDeveloper | NextDeveloper = {
  name: "Rezwan Rahim Rupak",
  experience: 2,
  expertise: "JavaScript React Node",
  leaderShipExperience: 3,
  level: Level.mid,
};

// InterSection

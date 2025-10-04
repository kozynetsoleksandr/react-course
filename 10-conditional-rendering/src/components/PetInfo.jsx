function PetInfo({ animalName, age, hasPet }) {
  return hasPet ? (
    <h1>
      My {animalName} is {age} years old
    </h1>
  ) : (
    <h1>I don't have an animal</h1>
  );
}

export default PetInfo;

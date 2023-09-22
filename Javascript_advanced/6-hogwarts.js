const studentHogwarts = () => {
    // Private variables
    let privateScore = 0;
    let name = null;
  
    // Private method
    const changeScoreBy = (points) => {
      privateScore += points;
    };
  
    // Public methods
    const setName = (newName) => {
      name = newName;
    };
  
    const rewardStudent = () => {
      changeScoreBy(1);
    };
  
    const penalizeStudent = () => {
      changeScoreBy(-1);
    };
  
    const getScore = () => {
      return `${name}: ${privateScore}`;
    };
  
    return {
      setName,
      rewardStudent,
      penalizeStudent,
      getScore,
    };
  };
  
  // Create an instance for Harry
  const harry = studentHogwarts();
  harry.setName("Harry");
  harry.rewardStudent();
  harry.rewardStudent();
  harry.rewardStudent();
  harry.rewardStudent();
  console.log(harry.getScore());
  
  // Create an instance for Draco
  const draco = studentHogwarts();
  draco.setName("Draco");
  draco.rewardStudent();
  draco.penalizeStudent();
  draco.penalizeStudent();
  draco.penalizeStudent();
  console.log(draco.getScore());
  
let globalVariable = "Welcome";

function outerFunc() {
  alert(globalVariable);
  let course = "Holberton";

  function innerFunc() {
    alert(globalVariable + " " + course);
    let exclamation = "!";

    function inception() {
      alert(globalVariable + " " + course + exclamation);
    }
    inception();
  }
  innerFunc();
}
outerFunc();

function welcomeMessage(fullName) {
  return function () {
    alert("Welcome ", fullName);
  };
}

guillaume = welcomeMessage("guillaume");
alex = welcomeMessage("alex");
fred = welcomeMessage("fred");

guillaume();
alex();
fred();

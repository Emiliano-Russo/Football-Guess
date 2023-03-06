export const isSameAge = ({ btnSelected, realAge, age, message }) => {
  switch (btnSelected) {
    case "=":
      if (realAge == age) {
        message.success("Has acertado tu jugador tiene " + age + "!");
        return true;
      } else {
        message.error("Tu jugador no tiene " + age);
      }
      break;
    case "<":
      if (realAge < age) {
        message.success("Si tu jugador tiene menos de " + age);
      } else {
        message.error("Tu jugador no tiene menos de " + age);
      }
      break;

    case ">":
      if (realAge > age) {
        message.success("Si tu jugador tiene mas de " + age);
      } else {
        message.error("Tu jugador no tiene mas de " + age);
      }
      break;
  }
  return false;
};

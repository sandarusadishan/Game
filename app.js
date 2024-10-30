let y = Math.floor(Math.random() * 10 + 1);

let attempts = 0;

document.getElementById("submitguess").onclick = function () {
  let x = document.getElementById("guessField").value;
  attempts++;

  if (x == y) {
    alert(
      "CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN " + attempts + " ATTEMPT(S)!"
    );
  } else if (attempts >= 3) {
    alert(
      "SORRY! You've used all 3 attempts. The correct number was " + y + "."
    );
  } else if (x > y) {
    alert(
      "OOPS SORRY!! TRY A SMALLER NUMBER. Attempts left: " + (3 - attempts)
    );
  } else {
    alert(
      "OOPS SORRY!! TRY A GREATER NUMBER. Attempts left: " + (3 - attempts)
    );
  }
};

const pianoKeys = document.querySelectorAll('.piano-keys');
const keyboard = document.querySelectorAll('.keyboard');
const helpMessage = document.querySelector('.help-message');
const twinkle = document.getElementById('twinkle');
const rowBoat = document.getElementById('row-your-boat');
const chordC = document.getElementById('c-chord');
const chordDm = document.getElementById('dm-chord');
const chordEm = document.getElementById('em-chord');
const chordF = document.getElementById('f-chord');
const chordG7 = document.getElementById('g7-chord');
const chordAm = document.getElementById('am-chord');
const chordBb5 = document.getElementById('bb5-chord');

let clicked = false;
let keydown = false;

function clickedAnimation(note) {
  note.classList.add('played');
  setTimeout(() => {
    note.classList.remove('played');
  }, 300);
}

function playSound(note) {
  let sound = new Audio(`sounds/${note}.mp3`);
  sound.play();
}

for (let i = 0; i < pianoKeys.length; i++) {
  pianoKeys[i].addEventListener('click', () => {
    playSound(pianoKeys[i].id);
    clickedAnimation(pianoKeys[i]);
  });
}

for (let i = 0; i < keyboard.length; i++) {
  keyboard[i].addEventListener('click', () => {
    helpMessage.classList.add('show');
    setTimeout(() => {
      helpMessage.classList.remove('show');
    }, 5000);
  });
}

document.addEventListener('keypress', (e) => {
  switch (e.key) {
    case 'a':
      playSound('c');
      clickedAnimation(pianoKeys[0]);
      break;
    case 's':
      playSound('d');
      clickedAnimation(pianoKeys[1]);
      break;
    case 'd':
      playSound('e');
      clickedAnimation(pianoKeys[2]);
      break;
    case 'f':
      playSound('f');
      clickedAnimation(pianoKeys[3]);
      break;
    case 'g':
      playSound('g');
      clickedAnimation(pianoKeys[4]);
      break;
    case 'h':
      playSound('a');
      clickedAnimation(pianoKeys[5]);
      break;
    case 'j':
      playSound('b');
      clickedAnimation(pianoKeys[6]);
      break;
    case 'k':
      playSound('cc');
      clickedAnimation(pianoKeys[7]);
      break;

    default:
      console.log('error (keyboard shortcut)');
  }
  keydown = true;
});

twinkle.addEventListener('click', () => {
  clicked = true;
  playSound('c');
  clickedAnimation(pianoKeys[0]);
  setTimeout(() => {
    playSound('c');
    clickedAnimation(pianoKeys[0]);
  }, 1000);
  setTimeout(() => {
    playSound('g');
    clickedAnimation(pianoKeys[4]);
  }, 2000);
  setTimeout(() => {
    playSound('g');
    clickedAnimation(pianoKeys[4]);
  }, 3000);
  setTimeout(() => {
    playSound('a');
    clickedAnimation(pianoKeys[5]);
  }, 4000);
  setTimeout(() => {
    playSound('a');
    clickedAnimation(pianoKeys[5]);
  }, 5000);
  setTimeout(() => {
    playSound('g');
    clickedAnimation(pianoKeys[4]);
  }, 6000);
  setTimeout(() => {
    playSound('f');
    clickedAnimation(pianoKeys[3]);
  }, 8000);
  setTimeout(() => {
    playSound('f');
    clickedAnimation(pianoKeys[3]);
  }, 9000);
  setTimeout(() => {
    playSound('e');
    clickedAnimation(pianoKeys[2]);
  }, 10000);
  setTimeout(() => {
    playSound('e');
    clickedAnimation(pianoKeys[2]);
  }, 11000);
  setTimeout(() => {
    playSound('d');
    clickedAnimation(pianoKeys[1]);
  }, 12000);
  setTimeout(() => {
    playSound('d');
    clickedAnimation(pianoKeys[1]);
  }, 13000);
  setTimeout(() => {
    playSound('c');
    clickedAnimation(pianoKeys[0]);
  }, 14000);
});

rowBoat.addEventListener('click', () => {
  playSound('c');
  clickedAnimation(pianoKeys[0]);
  setTimeout(() => {
    playSound('c');
    clickedAnimation(pianoKeys[0]);
  }, 1000);
  setTimeout(() => {
    playSound('c');
    clickedAnimation(pianoKeys[0]);
  }, 2000);
  setTimeout(() => {
    playSound('d');
    clickedAnimation(pianoKeys[1]);
  }, 2500);
  setTimeout(() => {
    playSound('e');
    clickedAnimation(pianoKeys[2]);
  }, 3000);
  setTimeout(() => {
    playSound('e');
    clickedAnimation(pianoKeys[2]);
  }, 4000);
  setTimeout(() => {
    playSound('d');
    clickedAnimation(pianoKeys[1]);
  }, 4500);
  setTimeout(() => {
    playSound('e');
    clickedAnimation(pianoKeys[2]);
  }, 5000);
  setTimeout(() => {
    playSound('f');
    clickedAnimation(pianoKeys[3]);
  }, 5500);
  setTimeout(() => {
    playSound('g');
    clickedAnimation(pianoKeys[4]);
  }, 6000);
  setTimeout(() => {
    playSound('cc');
    clickedAnimation(pianoKeys[7]);
  }, 8000);
  setTimeout(() => {
    playSound('g');
    clickedAnimation(pianoKeys[4]);
  }, 9000);
  setTimeout(() => {
    playSound('e');
    clickedAnimation(pianoKeys[2]);
  }, 10000);
  setTimeout(() => {
    playSound('c');
    clickedAnimation(pianoKeys[0]);
  }, 11000);
  setTimeout(() => {
    playSound('g');
    clickedAnimation(pianoKeys[4]);
  }, 12000);
  setTimeout(() => {
    playSound('f');
    clickedAnimation(pianoKeys[3]);
  }, 12500);
  setTimeout(() => {
    playSound('e');
    clickedAnimation(pianoKeys[2]);
  }, 13000);
  setTimeout(() => {
    playSound('d');
    clickedAnimation(pianoKeys[1]);
  }, 13500);
  setTimeout(() => {
    playSound('c');
    clickedAnimation(pianoKeys[0]);
  }, 14000);
});

chordC.addEventListener('click', () => {
  playSound('c');
  playSound('e');
  playSound('g');
  playSound('cc');

  clickedAnimation(pianoKeys[0]);
  clickedAnimation(pianoKeys[2]);
  clickedAnimation(pianoKeys[4]);
  clickedAnimation(pianoKeys[7]);
});

chordDm.addEventListener('click', () => {
  playSound('d');
  playSound('f');
  playSound('a');

  clickedAnimation(pianoKeys[1]);
  clickedAnimation(pianoKeys[3]);
  clickedAnimation(pianoKeys[5]);
});

chordEm.addEventListener('click', () => {
  playSound('e');
  playSound('g');
  playSound('b');

  clickedAnimation(pianoKeys[2]);
  clickedAnimation(pianoKeys[4]);
  clickedAnimation(pianoKeys[6]);
});

chordF.addEventListener('click', () => {
  playSound('f');
  playSound('a');
  playSound('cc');

  clickedAnimation(pianoKeys[3]);
  clickedAnimation(pianoKeys[5]);
  clickedAnimation(pianoKeys[7]);
});

chordG7.addEventListener('click', () => {
  playSound('d');
  playSound('f');
  playSound('g');
  playSound('b');

  clickedAnimation(pianoKeys[1]);
  clickedAnimation(pianoKeys[3]);
  clickedAnimation(pianoKeys[4]);
  clickedAnimation(pianoKeys[6]);
});

chordAm.addEventListener('click', () => {
  playSound('c');
  playSound('e');
  playSound('a');

  clickedAnimation(pianoKeys[0]);
  clickedAnimation(pianoKeys[2]);
  clickedAnimation(pianoKeys[5]);
});

chordBb5.addEventListener('click', () => {
  playSound('d');
  playSound('f');
  playSound('b');

  clickedAnimation(pianoKeys[1]);
  clickedAnimation(pianoKeys[3]);
  clickedAnimation(pianoKeys[6]);
});

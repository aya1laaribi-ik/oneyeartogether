const envelope =
  document.querySelector("#envelope");

const envelopeView =
  document.querySelector("#envelopeView");

const questionView =
  document.querySelector("#questionView");

const yayView =
  document.querySelector("#yayView");

const no =
  document.querySelector("#no");

const yes =
  document.querySelector("#yes");

const buttons =
  document.querySelector("#buttons");


/* =========================
   OPEN LETTER
========================= */

function openLetter() {

  envelope.classList.add("open");

  setTimeout(() => {

    envelopeView.classList.add("hidden");

    questionView.classList.remove("hidden");

  }, 850);
}


envelope.addEventListener(
  "click",
  openLetter
);


envelope.addEventListener(
  "keydown",
  (e) => {

    if (
      e.key === "Enter" ||
      e.key === " "
    ) {

      e.preventDefault();

      openLetter();

    }

  }
);


/* =========================
   MAKE NO BUTTON RUN AWAY
========================= */

function moveNo() {

  const r =
    buttons.getBoundingClientRect();

  const b =
    no.getBoundingClientRect();

  const maxX =
    Math.max(
      0,
      (r.width - b.width) / 2 - 10
    );

  const maxY = 22;

  const x =
    (Math.random() * 2 - 1) * maxX;

  const y =
    (Math.random() * 2 - 1) * maxY;

  no.style.transform =
    `translate(${x}px, ${y}px)`;
}


no.addEventListener(
  "mouseenter",
  moveNo
);


no.addEventListener(
  "touchstart",
  (e) => {

    e.preventDefault();

    moveNo();

  }
);


no.addEventListener(
  "click",
  moveNo
);


/* =========================
   YES BUTTON
========================= */

yes.addEventListener(
  "click",
  () => {

    questionView.classList.add("hidden");

    yayView.classList.remove("hidden");

  }
);


/* =========================
   RESTART
========================= */

document
  .querySelector("#restart")
  .addEventListener(
    "click",
    () => {

      yayView.classList.add("hidden");

      envelopeView.classList.remove("hidden");

      envelope.classList.remove("open");

      no.style.transform = "";

    }
  );
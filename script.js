const envelope = document.getElementById("envelope");
const waxSeal = document.getElementById("waxSeal");
const openButton = document.getElementById("openButton");

const rsvp = document.getElementById("rsvp");
const whatsappButton =
  document.getElementById("whatsappButton");


let isOpen = false;


/* =========================
   APERTURA INVITO
========================= */

function openInvitation() {

  if (isOpen) return;

  isOpen = true;

  /*
    STEP 1
    Sigillo e nastro scompaiono
  */

  envelope.classList.add("open");

  openButton.style.opacity = "0";


  /*
    STEP 2
    Mostra RSVP dopo
    l'animazione dell'invito
  */

  setTimeout(() => {

    rsvp.classList.add("visible");

  }, 2200);

}


/* =========================
   EVENTI
========================= */

waxSeal.addEventListener(
  "click",
  openInvitation
);

openButton.addEventListener(
  "click",
  openInvitation
);


/* =========================
   WHATSAPP
========================= */

/*
  Inserire qui il numero
  della sposa.

  IMPORTANTE:
  prefisso internazionale
  senza + e senza spazi.

  Esempio:
  393331234567
*/

const bridePhone =
  "393331234567";


const whatsappMessage =
  `Ciao! Confermo con piacere la mia presenza al vostro matrimonio del 6 giugno 2027.`;


const encodedMessage =
  encodeURIComponent(
    whatsappMessage
  );


whatsappButton.href =
  `https://wa.me/${bridePhone}?text=${encodedMessage}`;

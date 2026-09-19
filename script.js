/* ==========================================
   ELEMENTS
========================================== */

const invitation =
  document.getElementById(
    "invitationWrapper"
  );

const openButton =
  document.getElementById(
    "openButton"
  );

const rsvp =
  document.getElementById(
    "rsvp"
  );

const whatsappButton =
  document.getElementById(
    "whatsappButton"
  );


let invitationOpen = false;


/* ==========================================
   OPEN INVITATION
========================================== */

function openInvitation() {

  if (invitationOpen) {
    return;
  }

  invitationOpen = true;


  /*
    Avvia il dispiegamento
    verticale dei pannelli.
  */

  invitation.classList.add(
    "open"
  );


  /*
    Dopo l'apertura completa
    compare RSVP.
  */

  setTimeout(() => {

    rsvp.classList.add(
      "visible"
    );

  }, 2400);


  /*
    Scroll morbido per seguire
    l'apertura dell'invito.
  */

  setTimeout(() => {

    invitation.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  }, 450);

}


/* ==========================================
   BUTTON
========================================== */

openButton.addEventListener(
  "click",
  openInvitation
);


/* ==========================================
   WHATSAPP
========================================== */

/*
  Sostituire con il numero
  reale della sposa.

  Formato:

  39 + numero

  SENZA:
  +
  spazi
  trattini
*/

const bridePhone =
  "393331234567";


const whatsappMessage =
  `Ciao! Confermo con piacere la mia presenza al matrimonio del 6 giugno 2027.`;


const encodedMessage =
  encodeURIComponent(
    whatsappMessage
  );


whatsappButton.href =
  `https://wa.me/${bridePhone}?text=${encodedMessage}`;

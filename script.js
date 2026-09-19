/* =========================================================
   ELEMENTS
========================================================= */

const envelopeStage =
  document.getElementById("envelopeStage");

const envelopeWrap =
  document.getElementById("envelopeWrap");

const waxSeal =
  document.getElementById("waxSeal");

const openEnvelopeLabel =
  document.getElementById("openEnvelopeLabel");

const cardStage =
  document.getElementById("cardStage");

const invitation =
  document.getElementById("invitation");

const unfoldButton =
  document.getElementById("unfoldButton");

const rsvp =
  document.getElementById("rsvp");

const whatsappButton =
  document.getElementById("whatsappButton");


let envelopeOpened = false;
let invitationOpened = false;


/* =========================================================
   OPEN ENVELOPE
========================================================= */

function openEnvelope() {

  if (envelopeOpened) return;

  envelopeOpened = true;


  /*
    STEP 1
    Sigillo + nastro
  */

  envelopeWrap.classList.add("opening");


  /*
    STEP 2
    Apertura patta
  */

  setTimeout(() => {

    envelopeWrap.classList.add("flap-open");

  }, 600);


  /*
    STEP 3
    Il cartoncino sale
    dalla busta
  */

  setTimeout(() => {

    envelopeWrap.classList.add("card-out");

  }, 1250);


  /*
    STEP 4
    Dissolvenza scena busta
  */

  setTimeout(() => {

    envelopeStage.classList.add("exit");

  }, 2800);


  /*
    STEP 5
    Mostra partecipazione
  */

  setTimeout(() => {

    envelopeStage.style.display = "none";

    cardStage.classList.add("visible");

    window.scrollTo({
      top: 0,
      behavior: "instant"
    });

  }, 3650);

}


/* =========================================================
   ENVELOPE EVENTS
========================================================= */

waxSeal.addEventListener(
  "click",
  openEnvelope
);


openEnvelopeLabel.addEventListener(
  "click",
  openEnvelope
);


/* =========================================================
   UNFOLD INVITATION
========================================================= */

function unfoldInvitation() {

  if (invitationOpened) return;

  invitationOpened = true;


  /*
    Apertura pannello 2
    e pannello 3.
  */

  invitation.classList.add(
    "unfolded"
  );


  /*
    Accompagna lentamente
    l'apertura con lo scroll.
  */

  setTimeout(() => {

    window.scrollTo({
      top: 430,
      behavior: "smooth"
    });

  }, 800);


  /*
    Dopo l'apertura completa
    appare RSVP.
  */

  setTimeout(() => {

    rsvp.classList.add(
      "visible"
    );

  }, 2450);

}


/* =========================================================
   UNFOLD EVENT
========================================================= */

unfoldButton.addEventListener(
  "click",
  unfoldInvitation
);


/* =========================================================
   WHATSAPP RSVP
========================================================= */

const bridePhone =
  "393935124923";


const whatsappMessage =
  `Ciao Noa! Confermo con piacere la mia presenza al matrimonio di Daniel e Noa del 6 giugno 2027.`;


const encodedMessage =
  encodeURIComponent(
    whatsappMessage
  );


whatsappButton.href =
  `https://wa.me/${bridePhone}?text=${encodedMessage}`;

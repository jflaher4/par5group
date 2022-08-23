function scrollToHome() {
  document.getElementById('home').scrollIntoView({behavior: 'smooth'});
}

async function scrollToPartners() {
  var partnerCards = document.getElementsByClassName('partner-card');
  for (var i = 0; i < partnerCards.length; i++) {
    partnerCards[i].classList.remove('visible');
  }
  document.getElementById('partners').scrollIntoView({behavior: 'smooth'});
  for (var i = 0; i < partnerCards.length; i++) {
    var partnerCard = partnerCards[i];
    partnerCard.classList.add('visible');
    await delay(350);
  }
}

async function scrollToStaff() {
  var staffRows = document.getElementsByClassName('tr');
  for (var i = 0; i < staffRows.length; i++) {
    staffRows[i].classList.remove('visible');
  }
  document.getElementById('staff').scrollIntoView({behavior: 'smooth'});
  for (var i = 0; i < staffRows.length; i++) {
    staffRows[i].classList.add('visible');
    await delay(75);
  }
}

function scrollToJoinUs() {
  document.getElementById('join-us').scrollIntoView({behavior: 'smooth'});
}

function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

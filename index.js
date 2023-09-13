function scrollToHome() {
  document.getElementById('home').scrollIntoView({behavior: 'smooth'});
}


var firstPartnerScroll = false;
async function scrollToPartners() {
  if (!firstPartnerScroll) {
    firstPartnerScroll = true;
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
  } else {
    document.getElementById('partners').scrollIntoView({behavior: 'smooth'});
  }
}

var firstStaffScroll = false;
async function scrollToStaff() {
  if (!firstStaffScroll) {
    firstStaffScroll = true;
    var staffRows = document.getElementsByClassName('tr');
    for (var i = 0; i < staffRows.length; i++) {
      staffRows[i].classList.remove('visible');
    }
    document.getElementById('staff').scrollIntoView({behavior: 'smooth'});
    for (var i = 0; i < staffRows.length; i++) {
      staffRows[i].classList.add('visible');
      await delay(75);
    }
  } else {
    document.getElementById('staff').scrollIntoView({behavior: 'smooth'});
  }
}

function scrollToJoinUs() {
  document.getElementById('join-us').scrollIntoView({behavior: 'smooth'});
}

function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

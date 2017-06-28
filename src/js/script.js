window.onload = () => {
  'use strict';

  const getCurrentYear = () => {
    const date = new Date();
    const year = date.getFullYear();
    return year;
  }

  // footer
  let currentYear = document.getElementById('currentYear');
  currentYear.innerText = getCurrentYear();

  // event
  let ankerElms = document.querySelectorAll('a');
  for (let elm of ankerElms) {
    elm.addEventListener('click', function(){
      const href = this.href;
      const isAmazon = href.match(/^https?:\/\/www.amazon.co.jp/);
      const trackingId = 'otaman0517-22';
      const trackingIdRegExp = '/' + trackingId +'/';
      const isTracking = href.match(trackingIdRegExp);
      if (isAmazon && isTracking) {
        ga('send', 'event', 'amazon', 'click', href);
      }
    });
  }
};

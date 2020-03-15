  let percentage = document.getElementById('percentage_select');
  chrome.storage.sync.get('percentage', function(data) {
    index = 10 - data.percentage * 10;
    percentage.selectedIndex = index;
    percentage.setAttribute('selectedIndex', data.percentage);
  });
  percentage.onchange = function(element) {
      let val = element.target.value;
      chrome.storage.sync.set({'percentage': val}, function() {
        console.log('percentage is ' + val);
      })
      index = 10 - val * 10;
      percentage.selectedIndex = index;
  }
 

chrome.storage.sync.get('percentage', function(data) {
    var links = document.getElementsByTagName("a");
    for(var i=0;i<links.length;i++){
        // Turn x percent of links into Rick Rolls
        if (Math.random() < data.percentage){
            links[i].href = "https://youtu.be/dQw4w9WgXcQ?t=41";
            links[i].target = "_blank";
        }
    }
});


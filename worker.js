onmessage = function(e) {
    var no = e.data; 
    setInterval(function(){
        no++;
        postMessage(no);
    }, 1000);
};
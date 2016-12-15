function testForm(x) {
	console.log(x);
}


function testCall() {$.ajax({
    url: 'https://yogthos.p.mashape.com/', 
    type: 'POST', 
    data: [{}, ["paragraph","test"]],
    dataType: "json",
    success: function(data) { console.dir((data.source)); },
    error: function(err) { alert(err); },
    beforeSend: function(xhr) {
    xhr.setRequestHeader("X-Mashape-Authorization", "7Mdfu2zWc5mshIJQhtCSDbKUwc4op1Juj5cjsndA3gIYPlLOTk"); // Enter here your Mashape key
    }
});

}

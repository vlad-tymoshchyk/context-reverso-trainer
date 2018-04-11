(function(className, trainingnumber){
	console.clear();
	var ex = Array.from(document.querySelectorAll(className));
	ex.sort(function(){
		if(Math.random() < 0.5){
			return -1;
		} else {
			return 1;
		};
	});
	var message = messageTwo = messageTree = '-',
		src = 1,
		trg = 0,
		target = '',
		source = '';
	if ( /[а-яА-Я]/.test(ex[0].children[trg].innerText) ) {
		src = 0;
		trg = 1;
	}
	for(var i=0, len=trainingnumber; i<len; i++){
		if(!message) break;
		source = ex[i].children[src].innerText;
		target = ex[i].children[trg].innerText;
		var translation = prompt(source + '\n\n' + (i+1) + '/' + trainingnumber );
		if(translation == 'stop') {
			console.warn('Translation has been stoped');
			break;
		}
		messageTree = messageTwo;
		messageTwo = message;
		message = source 
			+ '\n\n' 
			+ target 
			+ '\n\n' 
			+ (translation ? translation : "--------NOT INSERTED---------") 
			+ '\n-----------------------------\n';
		console.clear();
		console.log(message + messageTwo + messageTree);
		if (i == len-1 ) {
			console.log('task complited/n==================================');
		}
		if(i == len -1 && confirm("Do you want to take it once more???"))
			i = -1;
		}
}(".example", 10))

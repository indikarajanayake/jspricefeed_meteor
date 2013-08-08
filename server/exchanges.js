//Collection to store Exchanges 
Exchanges	= new  Meteor.Collection("exchanges");
//start up funciton add sample exchange 
Meteor.startup(function(){

	if(Exchanges.find().count() == 0){
		Exchanges.insert({code:"DFM",symbols:[{code:"DFM",ltp:'10',ltq:'20'}]});
	}
});
//mock function to update the exchange documents 

Meteor.setInterval(function(){
Exchanges.update({code:"DFM", "symbols.code":"DFM"},{$inc :{"symbols.$.ltp":1}},false, true);


},1000);

// publish selected exchange

Meteor.publish("exchangeDetail", function(currentExchangeId){

	return Exchanges.findOne({code:currentExchangeId});

});
//publish exchanges details. Initally send all the data 
Meteor.publish("exchangesDetails", function(){
	return Exchanges.find();
});

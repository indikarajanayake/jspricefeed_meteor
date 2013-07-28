Exchanges	= new  Meteor.Collection("exchanges");

Meteor.startup(function(){
	
	if(Exchanges.find().count() == 0){
		Exchanges.insert({code:"DFM",symbols:[{code:"DFM",ltp:'10',ltq:'20'}]});
	}
});

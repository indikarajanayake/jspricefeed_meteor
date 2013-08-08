//Exchange collection in client side
Exchanges	= new Meteor.Collection("exchanges");

//populate templates
Template.exchangesTemplate.exchanges	= function(){
	
	return Exchanges.find();
};

Template.exchangeTemplate.exchange	= function(){
	return Exchanges.findOne({code:Session.get('currentExchangeId')});
};

//routers
Meteor.Router.add({
	'/':'exchangesTemplate',
	'/exchange/:id': function(id){
				Session.set('currentExchangeId', id);
				return 'exchangeTemplate'
			}
});
//wrap with autosubscribe to trigger when session changes
Meteor.autosubscribe(function (){
//get selected exchange details
Meteor.subscribe("exchangeDetail", Session.get('currentExchangeId'));
});

// get details of exchanges
Meteor.subscribe("exchangesDetails");

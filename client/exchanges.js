Exchanges	= new Meteor.Collection("exchanges");

Template.exchangesTemplate.exchanges	= function(){
	Exchanges.remove();	
	return Exchanges.find();
};

Template.exchangeTemplate.exchange	= function(){
	return Exchanges.findOne({code:Session.get('currentExchangeId')});
};


Meteor.Router.add({
	'/':'exchangesTemplate',
	'/exchange/:id': function(id){
				Session.set('currentExchangeId', id);
				return 'exchangeTemplate'
			}
});



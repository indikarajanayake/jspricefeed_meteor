Exchanges	= new Meteor.Collection("exchanges");

Template.exchangesTemplate.exchanges	= function(){
	return Exchanges.find();
};

Template.exchangeTemplate.exchange	= function(){
	return Exchanges.findOne(Session.get('currentExchangeId'));
};


Meteor.Router.add({
	'/':'exchangesTemplate',
	'/exchange/:id': function(id){
				Session.set('currentExchangeId', id);
				return 'exchangeTemplate'
			}
});



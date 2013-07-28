Exchanges	= new Meteor.Collection("exchanges");

Template.exchangesTemplate.exchanges	= function(){
	return Exchanges.find();
};


Meteor.Router.add({
	'/':'exchangesTemplate',
});

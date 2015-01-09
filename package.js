Package.describe({
	name: 'alisalaah:primitives',
	summary: 'Meteor package of Basic Primitives organization and family tree charts based on JQuery UI',
	version: '2.0.10',
	git: 'https://github.com/alisalaah/meteor-primitives.git'
});

Package.onUse(function(api) {
	api.versionsFrom('METEOR@0.9.2');
	api.use('mizzao:jquery-ui@1.11.2');
	
    api.add_files('primitives.js', 'client');
    api.add_files('primitives.css', 'client');
});

var _ = require('../src/blank');


module.exports = {
	name : 'Basic functional',
	assert : function(assert){
		assert.isArray([1], 'Does it looks like a bi.. an Array? %s');
		assert.isBoolean(true, 'true is array');


		assert.isLess(1, 2);
	}
};
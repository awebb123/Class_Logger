var _ = require('../src/blank');


module.exports = {
	name : 'Assertions',
	assert : function(assert){


		assert.isTrue(_.isFunction(_), 'var _ isFunction() is true');
		assert.isFalse(_.isObject(_), 'var _ isObject() is false');
		assert.isTrue(_.isObject(_), 'var _ isObject() is true');
	}
};
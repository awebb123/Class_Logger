(function(){
	var _;

	function Blank (target) {
		this.target = target;
	}

	_ = Blank;

	Blank.define = function(module) {
		var name, value;

		if ('methods' in module) {
			for (name in module.methods) {
				this.constructor.prototype[name] = module.methods[name];
			}
		}

		if ('utils' in module) {
			for (name in module.utils) {
				this[name] = module.utils[name];
			}
		}
	};

	Blank.method = function(name, fn) {
		this.constructor.prototype[name] = fn;
	};

	Blank.methods = function(methods) {
		var name;
		for (name in methods) {
			this.method(name, methods[name]);
		}
	};

	Blank.util = function(name, fn) {
		this[name] = fn;
	};

	Blank.utils = function(utils) {
		var name;
		for (name in utils) {
			this.util(name, utils[name]);
		}
	};

	// Test functions
	
	function isFunction(target) {
		return typeof(target) === 'function';
	};

	function isObject(target) {
		return typeof(target) === 'object';
	};

	function isString(target) {
		return typeof(target) === 'string';
	};

	function isEmptyString(target) {
		return isString(target) && ! target.length;
	}

	function isNotEmptyString(target) {
		return isString(target) && target.length;
	}

	function isBoolean(target) {
		return typeof(target) === 'boolean';
	};

	function isNumber(target) {
		return typeof(target) === 'number';
	};

	function isArray(target) {
		return isObject(target) && target instanceof Array;
	};

	function isEmptyArray(target) {
		return isArray(target) && target.length < 1;
	}

	function isNotEmptyArray(target) {
		return isArray(target) && target.length > 0;
	}

	function isError(target) {
		return isObject(target) && target instanceof Error;
	};

	function isEqual (a, b) {
		return a == b;
	}

	function isNotEqual(a, b) {
		return a != b;
	}

	function isGreater(a, b) {
		return a > b;
	}

	function isLess(a, b) {
		return a < b;
	}

	function isTrue(target) {
		return target === true;
	}

	function isFalse(target) {
		return target === false;
	}

	function isNotTrue(target) {
		return target !== true;
	}

	function isNotFalse(target) {
		return target !== false;
	}

	function isUndefined(target) {
		return target === undefined;
	}

	function isNotUndefined(target) {
		return target !== undefined;
	}

	function isEmpty(target) {
		if (isArray(target) || isString(target)) {
			return target.length > 0
		} else if (isObject(target)) {
			return Object.getOwnPropertyNames(target).length > 0;
		} else {
			return undefined;
		}
	}

	function isNotEmpty (target) {
		return ! isEmpty(target);
	}

	function hasProperty (target, property) {
		return isObject(target) && typeof target[property] !== 'undefined';
	}

	function Assert() {
		var results;
		results        = [];
		results.total  = 0;
		results.passed = 0;
		results.missed = 0;
		results.ok     = true;
		results.fail   = false;

		this.results = results;
	};

	Assert.prototype.isArray = function(target, message) {
		message = message || '%s is array';
		this._result(isArray(target), this.format(message, target));
	};

	Assert.prototype.isObject = function(target, message) {
		message = message || 'Is object';
		this._result(isObject(target), this.format(message, target));
	};

	Assert.prototype.isFunction = function(target, message) {
		message = message || 'Is function';
		this._result(isFunction(target), this.format(message, target));
	};

	Assert.prototype.isString = function(target, message) {
		message = message || 'Is string';
		this._result(isString(target), this.format(message, target));
	};

	Assert.prototype.isBoolean = function(target, message) {
		message = message || 'Is boolean';
		this._result(isBoolean(target), this.format(message, target));
	};

	Assert.prototype.isNumber = function(target, message) {
		message = message || 'Is number';
		this._result(isNumber(target), this.format(message, target));
	};

	Assert.prototype.isError = function(target, message) {
		message = message || 'Is error';
		this._result(isError(target), this.format(message, target));
	};

	Assert.prototype.isTrue = function(target, message) {
		message = message || 'Is true';
		this._result(isTrue(target), this.format(message, target));
	};

	Assert.prototype.isFalse = function(target, message) {
		message = message || 'Is false';
		this._result(isFalse(target), this.format(message, target));
	};

	Assert.prototype.isEqual = function(a, b, message) {
		message = message || 'Is equal';
		this._result(isEqual(a, b), this.format(message, a, b));
	};

	Assert.prototype.isNotEqual = function(a, b, message) {
		message = message || 'Is not equal';
		this._result(isNotEqual(a, b), this.format(message, a, b));
	};

	Assert.prototype.isGreater = function(a, b, message) {
		message = message || '%d is greater then %d';
		this._result(isGreater(a, b), this.format(message, a, b) );
	};

	Assert.prototype.isLess = function(a, b, message) {
		message = message || '%d is less then %d';
		this._result(isLess(a, b), this.format(message, a, b));
	};

	Assert.prototype.format = function(message, value) {
		var values = toArray(arguments).slice(1).map(function(value){
			return JSON.stringify(value, null);
		});

		values.unshift(message);
		return format.apply(null, values);
	};

	Assert.prototype._result = function(result, message) {
		this.results.total++;

		if (result) {
			this.results.passed++;
		} else {
			this.results.missed++;
			this.results.ok   = false;
			this.results.fail = true;
		}

		this.results.push({
			result  : result,
			message : message
		});
	}

	function test(test, callback) {
		var assert = new Assert();
		test(assert);

		if (typeof callback === 'function') {
			callback(assert.results);
		} else {
			return assert.results;
		}
	}

	Blank.define({
		utils : {
			isArray    : isArray,
			isEmptyArray    : isEmptyArray,
			isNotEmptyArray : isNotEmptyArray,
			isBoolean  : isBoolean,
			isFunction : isFunction,
			isObject   : isObject,
			isNumber   : isNumber,
			isString   : isString,
			isEmptyString    : isEmptyString,
			isNotEmptyString : isNotEmptyString,
			isError    : isError,
			isEqual    : isEqual,
			isNotEqual : isNotEqual,
			isLess     : isLess,
			isGreater  : isGreater,
			isTrue     : isTrue,
			isNotTrue  : isNotTrue,
			isNotFalse : isNotFalse,
			isFalse    : isFalse,
			isEmpty    : isEmpty,
			isNotEmpty : isNotEmpty,
			isUndefined : isUndefined,
			isNotUndefined : isNotUndefined,
			isDefined      : isNotUndefined,
			hasProperty    : hasProperty,
			test       : test
		}
	});

	// OOPize -----------------------------------------------------------------
	function ProtoObject () {}

	ProtoObject.prototype.super = function(target, method, args) {
		return target.prototype[method].apply(this, args);
	};

	ProtoObject.extend = function(source) {
		var fn, parent;
		parent = this;

		if ( ! source.hasOwnProperty('constructor')) {
			fn = function() {
				parent.apply(this, arguments);
			}
		} else {
			fn = source.constructor;
			delete source.constructor;
		}

		fn.prototype.__proto__ = this.prototype;
		extend(fn.prototype, this.prototype, source);
		extend(fn, this);

		return fn;
	};

	Blank.util('Proto', ProtoObject);

	Blank.util('classify', function(source) {
		return ProtoObject.extend(source);
	});
	
	// ARRAY METHODS ----------------------------------------------------------
	
	function randomItem(target) {
		if ( ! target.length) return;
		return target[Math.round(Math.random() * (target.length - 1))];
	}

	function all(target, filter) {
		return target.filter(filter).length > 0;
	}

	function any(target, filter) {
		var index, length;
		index  = -1;
		length = target.length;

		while (++index < length) {
			if (filter(target[index], index)) return true;
		}

		return false;
	}

	/**
	 * Search an item with callback
	 * @param  {Array}    target   Array to search in
	 * @param  {Function} callback Search callback
	 * @return {Number}            Return index when callback returns not false the first time
	 */
	function search(target, callback) {
		var index = -1;
		var length = target.length;
		while(++index < length) {
			if (callback(target[index], index) === true) {
				return index;
			}
		}

		return -1;
	}

	function firstOf(target, filter) {
		var index, length;
		index  = -1;
		length = target.length;

		while (++index < length) {
			if (filter(target[index], index)) return target[index];
		}
		
		return;
	}

	function lastOf(target, filter) {
		var index, length, result;
		index  = -1;
		length = target.length;

		result = target.filter(filter).pop();
		
		return result;
	}

	function firstItem (target) {
		return target.length ? target[0] : undefined;
	}

	function lastItem (target) {
		return target.length ? target[target.length - 1] : undefined;
	}
	/**
	 * Check if any item from source array exists in target
	 * @param  {Array}   target Search in
	 * @param  {Array}   source Search from
	 * @return {Boolean}        Returns true if any match found
	 */
	function hasAny(target, source) {
		var index  = -1;
		var length = source.length;
		while (++index < length) {
			if (target.indexOf(source[index]) > -1) return true;
		}
		return false;
	}

	function pluck(target, field) {
		var result = [];
		var index  = -1;
		var length = target.length;
		var item;

		while(++index < length) {
			item = target[index];
			result.push(item[field]);
		};
		return result;
	}

	function indexBy(target, field) {
		var result = {};
		var index = -1;
		var length = target.length;
		var item;
		while (++index < length) {
			item = target[index];
			result[item[field]] = item;
		}
		return result;
	}

	function groupBy(target, field) {
		var result = {};
		var index = -1;
		var length = target.length;
		var item, value;
		while (++index < length) {
			item = target[index];
			value = item[field];
			if ( ! result.hasOwnProperty(value)) {
				result[value] = [];
			}
			result[value].push(item);
		}
		return result;	
	}

	function unique(target) {
		var unique = [];
		var index  = -1;
		var length = target.length;
		var value;
		while(++index < length){
			value = target[index];
			if (unique.indexOf(value) < 0) {
				unique.push(value);
			}
		}
		return unique;
	}

	Blank.utils({
		randomItem : randomItem,
		all        : all,
		any        : any,
		search     : search,
		firstOf    : firstOf,
		lastOf     : lastOf,
		firstItem  : firstItem,
		lastItem   : lastItem,
		hasAny     : hasAny,
		pluck      : pluck,
		indexBy    : indexBy,
		groupBy    : groupBy,
		unique     : unique,
		index      : function() {
			console.log('Index function is deprecated use indexBy:', (new Error).stack);
			return indexBy.apply(null, arguments);
		}
	});

	// MISCELANOUS ------------------------------------------------------------
	
	function toArray(target) {
		return Array.prototype.slice.call(target);
	};

	function toNumber(target) {
		return target|0;
	};

	/**
	 * Format message like a standart console.log do^ replaces %s, %d, %i marks with function argument
	 * 
	 * @param  {String} message Message
	 * @param  {mixed}  value   Value for inserting into string
	 * @return {String}         Formatted string
	 */
	function format (message, value) {
		var values;

		values  = toArray(arguments).slice(1);
		message = message.replace(/%(s|i|d|f)/g, function(v) {
			var replace;
			replace = format[v[1]](values.shift());
			return values.length >= 0 ? replace : '-';
		});

		return message;
	};

	format.s = function(value) {
		// TODO: decide to use JSON stringify or other function
		return stringify(value);
	};

	format.d = format.s;

	format.f = function(value) {
		return parseFloat(value) + '';
	};

	format.i = function(value) {
		return value;
		return parseInt(value) + '';
	};

	function stringify(value) {
		return value + '';
	}

	/**
	 * Convert string to fixed size column
	 * @param  {String}  string String to columnize
	 * @param  {Number}  length Column length
	 * @param  {Boolean} pad    Pad last line
	 * @return {String}         String converted to column
	 */
	function columnize(string, length, pad) {
		var result, slice;
		result = [];
		while (string.length) {
			slice = string.substr(0, length);
			result.push(slice);
			string = string.substr(slice.length);
		}

		if (pad && slice.length < length) {
			while(slice.length < length) {
				slice += pad;
			}

			result[result.length - 1] = slice;
		}

		return result.join('\n');
	};

	function pad(str, length, pad) {
		str = str + '';
		if (length > 0) {
			while(str.length < length) {
				str += pad;
			}
		} else if (length < 0) {
			length *= -1;
			while(str.length < length) {
				str = pad + str;
			}
		}

		return str;
	};

	/**
	 * Convert string first char to upper case
	 * @param  {String} string String to convert
	 * @return {String}        Converted string
	 */
	function toUpperCaseFirst(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	};

	/**
	 * Convert strings first char to lower case
	 * @param  {String} string String to convert
	 * @return {String}        Converted string
	 */
	function toLowerCaseFirst(string) {
		return string.charAt(0).toLowerCase() + string.slice(1);
	};

	/**
	 * Convert string to camel-cased format
	 * @param  {String} string String to convert
	 * @param  {RegExp} regex  Delimiter regex. Optional. Remember about g-modificator!
	 * @return {String}        Camel cased string
	 */
	function toCamelCase(string, regex) {
		string = string  + '';
		regex  = regex || /(\W|_)([A-z0-9])/g;
		return string.replace(regex, function(match, delimiter, letter) {
			return letter.toUpperCase();
		});
	};

	/**
	 * Create callback nodejs-express-like queue
	 * @param  {Array}        args  Arguments passed to callbacks
	 * @param  {Array}        queue Callbacks queue
	 * @param  {Error|null}   err   Error object
	 */
	function next(args, queue, err) {
		queue = queue.slice();
		args  = (args || []).slice();

		var callback;
		
		if (err) {
			// Search first callback which has 4 arguments: err, req, res, next
			while (queue.length) {
				callback = queue.shift();
				if (callback.length < args.length + 2) {
					continue;
				}

				callback.apply(null, [err].concat(args, next.bind(null, args, queue)));
			}
		} else {
			callback = queue.shift();
			if ( ! callback) return;

			if (callback.length < args.length + 2) {
				callback.apply(null, [].concat(args, next.bind(null, args, queue)));
			} else {
				callback.apply(null, [null].concat(args, next.bind(null, args, queue)));
			}
		}
	};

	Blank.utils({
		toArray   : toArray,
		toNumber  : toNumber,
		format    : format,
		columnize : columnize,
		pad       : pad,
		toUpperCaseFirst : toUpperCaseFirst,
		toLowerCaseFirst : toLowerCaseFirst,
		toCamelCase : toCamelCase,
		queues    : {
			next : next
		}
	});

	// SHORT HANDS ------------------------------------------------------------
	
	function extend (target, source) {
		var sources, prop;
		sources = Array.prototype.slice.call(arguments, 1);

		while(sources.length) {
			source = sources.shift();
			for (prop in source) {
				target[prop] = source[prop];
			}
		}

		return target;
	};

	/**
	 * Merge objects and use strategy for conflicts
	 * 
	 * @param  {Object}   target   Target to merge in
	 * @param  {Object}   source   Source to merge with target
	 * @param  {Function} strategy Function to resolve conflicts
	 * @return {Object}            Target object
	 */
	function merge (target, source, strategy) {
		var sources, prop, value;
		sources = Array.prototype.slice.call(arguments, 1);
		
		if (sources.length && typeof sources[sources.length - 1] === 'function') {
			strategy = sources.pop();
		} else {
			strategy = function(a, b) {
				if (isArray(a)) {
					return a.concat(b);
				} else if (isObject(a) && isObject(b)) {
					return merge(a, b, strategy);
				} else {
					return undefined;
				}
			};
		}

		while (sources.length) {
			source = sources.shift();
			for (prop in source) {
				if (strategy && target.hasOwnProperty(prop)) {
					value = strategy(target[prop], source[prop]);
					
					if (typeof value === 'undefined') {
						value = source[prop];
					}

					target[prop] = value;
				} else {
					target[prop] = source[prop];
				}
			}
		}

		return target;
	}

	/**
	 * Extend deep
	 * @param  {Object} target Target object to extend
	 * @param  {Object} source Source object
	 * @return {Object}        Target object
	 */
	function extendDeep (target, source) {
		var sources, index, length, prop, value;
		sources = Array.prototype.slice.call(arguments, 1);
		index   = -1;
		length  = sources.length;
		while(++index < length) {
			source = sources[index];
			for(prop in source) {
				if (source.hasOwnProperty(prop)) {
					value = source[prop];
					if (target.hasOwnProperty(prop) && typeof value === 'object' && value instanceof Array === false) {
						extendDeep(target[prop], value);
					} else {
						target[prop] = value;
					}
				}
			}
		}

		return target;
	}

	/**
	 * Get properties from object and set to new object
	 * @param  {Object}       source Source object
	 * @param  {Array|string} keys   Object keys
	 * @return {Object}              Object with defined properties
	 */
	function extract(source, keys) {
		if ( ! isArray(keys)) {
			keys = toArray(arguments).slice(2);
		}

		var key, index, length, target;
		target = {};
		index  = -1;
		length = keys.length;

		while (++index < length) {
			key = keys[index];
			target[key] = source[key];
		}

		return target;
	}

	/**
	 * Get properties from source object and set to target object
	 * @param  {Object}       target Target object
	 * @param  {Object}       source Source object
	 * @param  {Array|string} keys   Object keys
	 * @return {Object}              Object with defined properties
	 */
	function implant(target, source, keys) {
		if ( ! isArray(keys)) {
			keys = toArray(arguments).slice(3);
		}

		var key, index, length;
		index  = -1;
		length = keys.length;

		while (++index < length) {
			key = keys[index];
			target[key] = source[key];
		}

		return target;
	};

	/**
	 * Extend one object with another but excluding special properties
	 * @param  {Object} target  Target object
	 * @param  {Object} source  Source object
	 * @param  {Array}  exclude Excluded keys
	 * @return {Object}         Target object
	 */
	function without(target, source, exclude) {
		var prop;
		for (prop in source) {
			if (source.hasOwnProperty(prop) && exclude.indexOf(prop) < 0) {
				target[prop] = source[prop];
			}
		}
		return target;
	};

	/**
	 * Mix one prototype into other
	 * @param  {Function} target Target function
	 * @param  {Function} source Source function
	 * @return {Function}        Target function
	 */
	function mixin (target, source) {
		var sources, index, length, prop;
		// Grab all arguments as sources
		sources = Array.prototype.slice.call(arguments, 1);
		index   = -1;
		length  = sources.length;
		// Iterate sources
		while (++index < length) {
			source = sources[index];
			for (prop in source.prototype) {
				if (source.prototype.hasOwnProperty(prop)) {
					target.prototype[prop] = source.prototype[prop];
				}
			}
		}
		return target;
	}

	Blank.utils({
		extend     : extend,
		extendDeep : extendDeep,
		merge   : merge,
		extract : extract,
		implant : implant,
		without : without,
		mixin   : mixin
	});

	Blank.method('extend', function(source) {
		this._target = _.extend(this._target, source);
		return this;
	});
	
	// ENVIRONMENT DETECTION --------------------------------------------------
	
	Blank.define({
		utils : {

			environment : function() {
				var env = {
					type : 'unknown',
					version : undefined,
					v       : undefined
				};

				if (this.isBrowser()) {
					env.type = 'browser';
					// TODO : add version and programm name support
				} else if (this.isNodeJs()) {
					env.type = 'nodejs'
					env.version = env.v = process.version;
				} else {
					env.type = 'unknown'
				}

				return env;
			},

			isBrowser : function() {
				return typeof window !== 'undefined';
			},

			isIE : function() {
				if (typeof this._ie === 'undefined') {
					this._ie = this.isBrowser() && ('ActiveXObject' in window);
				}

				return this._ie;
			},

			browser : function(version, callback) {
				if ( ! this.isBrowser()) return this;

				if (arguments.length === 1) {
					// TODO: add version and browser name support
					callback = version;
					callback();
				} else {
					throw new Error('Version support not added yet');
				}

				return this;
			},

			isNodeJs : function() {
				return typeof process !== 'undefined' && typeof module !== 'undefined' && module.exports;
			},

			nodeJs : function(version, callback) {
				if ( ! this.isNodeJs()) return this;

				if (arguments.length === 1) {
					callback = version;
					callback();
				} else {
					throw new Error('Version support not added yet');
				}

				return this;
			}
		}
	});

	/*
		Browser dependant functions
	 */
	Blank.browser(function() {
		Blank.utils({
			addListener : function(target, event, callback) {
				if (! this.isIE()) {
					target.addEventListener(event, callback);
				} else {
					target.attachEvent(event, callback);
				}
			},

			removeListener : function(target, event, callback) {
				if (! this.isIE()) {
					target.removeEventListener(event, callback);
				} else {
					target.detachEvent(event, callback);
				}
			}
		});

		window.blank = Blank;
		window._     = Blank;

		stringify = function(value) {
			return JSON.stringify(value, null, 4);
		}
	});

	Blank.nodeJs(function(){
		module.exports = Blank;

		stringify = function(v) {
			return require('util').inspect(v, true);
		}
	});

	if (typeof define === 'function') {
		define(function(){ return Blank; });
	}
})();
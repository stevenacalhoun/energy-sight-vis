/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(16);


/***/ },
/* 1 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*eslint-disable no-unused-vars*/
	/*!
	 * jQuery JavaScript Library v3.1.0
	 * https://jquery.com/
	 *
	 * Includes Sizzle.js
	 * https://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * https://jquery.org/license
	 *
	 * Date: 2016-07-07T21:44Z
	 */
	( function( global, factory ) {
	
		"use strict";
	
		if ( typeof module === "object" && typeof module.exports === "object" ) {
	
			// For CommonJS and CommonJS-like environments where a proper `window`
			// is present, execute the factory and get jQuery.
			// For environments that do not have a `window` with a `document`
			// (such as Node.js), expose a factory as module.exports.
			// This accentuates the need for the creation of a real `window`.
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info.
			module.exports = global.document ?
				factory( global, true ) :
				function( w ) {
					if ( !w.document ) {
						throw new Error( "jQuery requires a window with a document" );
					}
					return factory( w );
				};
		} else {
			factory( global );
		}
	
	// Pass this if window is not defined yet
	} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {
	
	// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
	// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
	// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
	// enough that all such attempts are guarded in a try block.
	"use strict";
	
	var arr = [];
	
	var document = window.document;
	
	var getProto = Object.getPrototypeOf;
	
	var slice = arr.slice;
	
	var concat = arr.concat;
	
	var push = arr.push;
	
	var indexOf = arr.indexOf;
	
	var class2type = {};
	
	var toString = class2type.toString;
	
	var hasOwn = class2type.hasOwnProperty;
	
	var fnToString = hasOwn.toString;
	
	var ObjectFunctionString = fnToString.call( Object );
	
	var support = {};
	
	
	
		function DOMEval( code, doc ) {
			doc = doc || document;
	
			var script = doc.createElement( "script" );
	
			script.text = code;
			doc.head.appendChild( script ).parentNode.removeChild( script );
		}
	/* global Symbol */
	// Defining this global in .eslintrc would create a danger of using the global
	// unguarded in another place, it seems safer to define global only for this module
	
	
	
	var
		version = "3.1.0",
	
		// Define a local copy of jQuery
		jQuery = function( selector, context ) {
	
			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init( selector, context );
		},
	
		// Support: Android <=4.0 only
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
	
		// Matches dashed string for camelizing
		rmsPrefix = /^-ms-/,
		rdashAlpha = /-([a-z])/g,
	
		// Used by jQuery.camelCase as callback to replace()
		fcamelCase = function( all, letter ) {
			return letter.toUpperCase();
		};
	
	jQuery.fn = jQuery.prototype = {
	
		// The current version of jQuery being used
		jquery: version,
	
		constructor: jQuery,
	
		// The default length of a jQuery object is 0
		length: 0,
	
		toArray: function() {
			return slice.call( this );
		},
	
		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function( num ) {
			return num != null ?
	
				// Return just the one element from the set
				( num < 0 ? this[ num + this.length ] : this[ num ] ) :
	
				// Return all the elements in a clean array
				slice.call( this );
		},
	
		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function( elems ) {
	
			// Build a new jQuery matched element set
			var ret = jQuery.merge( this.constructor(), elems );
	
			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;
	
			// Return the newly-formed element set
			return ret;
		},
	
		// Execute a callback for every element in the matched set.
		each: function( callback ) {
			return jQuery.each( this, callback );
		},
	
		map: function( callback ) {
			return this.pushStack( jQuery.map( this, function( elem, i ) {
				return callback.call( elem, i, elem );
			} ) );
		},
	
		slice: function() {
			return this.pushStack( slice.apply( this, arguments ) );
		},
	
		first: function() {
			return this.eq( 0 );
		},
	
		last: function() {
			return this.eq( -1 );
		},
	
		eq: function( i ) {
			var len = this.length,
				j = +i + ( i < 0 ? len : 0 );
			return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
		},
	
		end: function() {
			return this.prevObject || this.constructor();
		},
	
		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: arr.sort,
		splice: arr.splice
	};
	
	jQuery.extend = jQuery.fn.extend = function() {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[ 0 ] || {},
			i = 1,
			length = arguments.length,
			deep = false;
	
		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;
	
			// Skip the boolean and the target
			target = arguments[ i ] || {};
			i++;
		}
	
		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
			target = {};
		}
	
		// Extend jQuery itself if only one argument is passed
		if ( i === length ) {
			target = this;
			i--;
		}
	
		for ( ; i < length; i++ ) {
	
			// Only deal with non-null/undefined values
			if ( ( options = arguments[ i ] ) != null ) {
	
				// Extend the base object
				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];
	
					// Prevent never-ending loop
					if ( target === copy ) {
						continue;
					}
	
					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
						( copyIsArray = jQuery.isArray( copy ) ) ) ) {
	
						if ( copyIsArray ) {
							copyIsArray = false;
							clone = src && jQuery.isArray( src ) ? src : [];
	
						} else {
							clone = src && jQuery.isPlainObject( src ) ? src : {};
						}
	
						// Never move original objects, clone them
						target[ name ] = jQuery.extend( deep, clone, copy );
	
					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}
	
		// Return the modified object
		return target;
	};
	
	jQuery.extend( {
	
		// Unique for each copy of jQuery on the page
		expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),
	
		// Assume jQuery is ready without the ready module
		isReady: true,
	
		error: function( msg ) {
			throw new Error( msg );
		},
	
		noop: function() {},
	
		isFunction: function( obj ) {
			return jQuery.type( obj ) === "function";
		},
	
		isArray: Array.isArray,
	
		isWindow: function( obj ) {
			return obj != null && obj === obj.window;
		},
	
		isNumeric: function( obj ) {
	
			// As of jQuery 3.0, isNumeric is limited to
			// strings and numbers (primitives or objects)
			// that can be coerced to finite numbers (gh-2662)
			var type = jQuery.type( obj );
			return ( type === "number" || type === "string" ) &&
	
				// parseFloat NaNs numeric-cast false positives ("")
				// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
				// subtraction forces infinities to NaN
				!isNaN( obj - parseFloat( obj ) );
		},
	
		isPlainObject: function( obj ) {
			var proto, Ctor;
	
			// Detect obvious negatives
			// Use toString instead of jQuery.type to catch host objects
			if ( !obj || toString.call( obj ) !== "[object Object]" ) {
				return false;
			}
	
			proto = getProto( obj );
	
			// Objects with no prototype (e.g., `Object.create( null )`) are plain
			if ( !proto ) {
				return true;
			}
	
			// Objects with prototype are plain iff they were constructed by a global Object function
			Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
			return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
		},
	
		isEmptyObject: function( obj ) {
	
			/* eslint-disable no-unused-vars */
			// See https://github.com/eslint/eslint/issues/6125
			var name;
	
			for ( name in obj ) {
				return false;
			}
			return true;
		},
	
		type: function( obj ) {
			if ( obj == null ) {
				return obj + "";
			}
	
			// Support: Android <=2.3 only (functionish RegExp)
			return typeof obj === "object" || typeof obj === "function" ?
				class2type[ toString.call( obj ) ] || "object" :
				typeof obj;
		},
	
		// Evaluates a script in a global context
		globalEval: function( code ) {
			DOMEval( code );
		},
	
		// Convert dashed to camelCase; used by the css and data modules
		// Support: IE <=9 - 11, Edge 12 - 13
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function( string ) {
			return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
		},
	
		nodeName: function( elem, name ) {
			return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
		},
	
		each: function( obj, callback ) {
			var length, i = 0;
	
			if ( isArrayLike( obj ) ) {
				length = obj.length;
				for ( ; i < length; i++ ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			}
	
			return obj;
		},
	
		// Support: Android <=4.0 only
		trim: function( text ) {
			return text == null ?
				"" :
				( text + "" ).replace( rtrim, "" );
		},
	
		// results is for internal usage only
		makeArray: function( arr, results ) {
			var ret = results || [];
	
			if ( arr != null ) {
				if ( isArrayLike( Object( arr ) ) ) {
					jQuery.merge( ret,
						typeof arr === "string" ?
						[ arr ] : arr
					);
				} else {
					push.call( ret, arr );
				}
			}
	
			return ret;
		},
	
		inArray: function( elem, arr, i ) {
			return arr == null ? -1 : indexOf.call( arr, elem, i );
		},
	
		// Support: Android <=4.0 only, PhantomJS 1 only
		// push.apply(_, arraylike) throws on ancient WebKit
		merge: function( first, second ) {
			var len = +second.length,
				j = 0,
				i = first.length;
	
			for ( ; j < len; j++ ) {
				first[ i++ ] = second[ j ];
			}
	
			first.length = i;
	
			return first;
		},
	
		grep: function( elems, callback, invert ) {
			var callbackInverse,
				matches = [],
				i = 0,
				length = elems.length,
				callbackExpect = !invert;
	
			// Go through the array, only saving the items
			// that pass the validator function
			for ( ; i < length; i++ ) {
				callbackInverse = !callback( elems[ i ], i );
				if ( callbackInverse !== callbackExpect ) {
					matches.push( elems[ i ] );
				}
			}
	
			return matches;
		},
	
		// arg is for internal usage only
		map: function( elems, callback, arg ) {
			var length, value,
				i = 0,
				ret = [];
	
			// Go through the array, translating each of the items to their new values
			if ( isArrayLike( elems ) ) {
				length = elems.length;
				for ( ; i < length; i++ ) {
					value = callback( elems[ i ], i, arg );
	
					if ( value != null ) {
						ret.push( value );
					}
				}
	
			// Go through every key on the object,
			} else {
				for ( i in elems ) {
					value = callback( elems[ i ], i, arg );
	
					if ( value != null ) {
						ret.push( value );
					}
				}
			}
	
			// Flatten any nested arrays
			return concat.apply( [], ret );
		},
	
		// A global GUID counter for objects
		guid: 1,
	
		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function( fn, context ) {
			var tmp, args, proxy;
	
			if ( typeof context === "string" ) {
				tmp = fn[ context ];
				context = fn;
				fn = tmp;
			}
	
			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if ( !jQuery.isFunction( fn ) ) {
				return undefined;
			}
	
			// Simulated bind
			args = slice.call( arguments, 2 );
			proxy = function() {
				return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
			};
	
			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;
	
			return proxy;
		},
	
		now: Date.now,
	
		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	} );
	
	if ( typeof Symbol === "function" ) {
		jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
	}
	
	// Populate the class2type map
	jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );
	
	function isArrayLike( obj ) {
	
		// Support: real iOS 8.2 only (not reproducible in simulator)
		// `in` check used to prevent JIT error (gh-2145)
		// hasOwn isn't used here due to false negatives
		// regarding Nodelist length in IE
		var length = !!obj && "length" in obj && obj.length,
			type = jQuery.type( obj );
	
		if ( type === "function" || jQuery.isWindow( obj ) ) {
			return false;
		}
	
		return type === "array" || length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	}
	var Sizzle =
	/*!
	 * Sizzle CSS Selector Engine v2.3.0
	 * https://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-01-04
	 */
	(function( window ) {
	
	var i,
		support,
		Expr,
		getText,
		isXML,
		tokenize,
		compile,
		select,
		outermostContext,
		sortInput,
		hasDuplicate,
	
		// Local document vars
		setDocument,
		document,
		docElem,
		documentIsHTML,
		rbuggyQSA,
		rbuggyMatches,
		matches,
		contains,
	
		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		preferredDoc = window.document,
		dirruns = 0,
		done = 0,
		classCache = createCache(),
		tokenCache = createCache(),
		compilerCache = createCache(),
		sortOrder = function( a, b ) {
			if ( a === b ) {
				hasDuplicate = true;
			}
			return 0;
		},
	
		// Instance methods
		hasOwn = ({}).hasOwnProperty,
		arr = [],
		pop = arr.pop,
		push_native = arr.push,
		push = arr.push,
		slice = arr.slice,
		// Use a stripped-down indexOf as it's faster than native
		// https://jsperf.com/thor-indexof-vs-for/5
		indexOf = function( list, elem ) {
			var i = 0,
				len = list.length;
			for ( ; i < len; i++ ) {
				if ( list[i] === elem ) {
					return i;
				}
			}
			return -1;
		},
	
		booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
	
		// Regular expressions
	
		// http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",
	
		// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
	
		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +
			// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
			"*\\]",
	
		pseudos = ":(" + identifier + ")(?:\\((" +
			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
			// 3. anything else (capture 2)
			".*" +
			")\\)|)",
	
		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp( whitespace + "+", "g" ),
		rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),
	
		rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
		rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),
	
		rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),
	
		rpseudo = new RegExp( pseudos ),
		ridentifier = new RegExp( "^" + identifier + "$" ),
	
		matchExpr = {
			"ID": new RegExp( "^#(" + identifier + ")" ),
			"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
			"TAG": new RegExp( "^(" + identifier + "|[*])" ),
			"ATTR": new RegExp( "^" + attributes ),
			"PSEUDO": new RegExp( "^" + pseudos ),
			"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
				"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
				"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
			"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
				whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
		},
	
		rinputs = /^(?:input|select|textarea|button)$/i,
		rheader = /^h\d$/i,
	
		rnative = /^[^{]+\{\s*\[native \w/,
	
		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
	
		rsibling = /[+~]/,
	
		// CSS escapes
		// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
		funescape = function( _, escaped, escapedWhitespace ) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox<24
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ?
				escaped :
				high < 0 ?
					// BMP codepoint
					String.fromCharCode( high + 0x10000 ) :
					// Supplemental Plane codepoint (surrogate pair)
					String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
		},
	
		// CSS string/identifier serialization
		// https://drafts.csswg.org/cssom/#common-serializing-idioms
		rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
		fcssescape = function( ch, asCodePoint ) {
			if ( asCodePoint ) {
	
				// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
				if ( ch === "\0" ) {
					return "\uFFFD";
				}
	
				// Control characters and (dependent upon position) numbers get escaped as code points
				return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
			}
	
			// Other potentially-special ASCII characters get backslash-escaped
			return "\\" + ch;
		},
	
		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function() {
			setDocument();
		},
	
		disabledAncestor = addCombinator(
			function( elem ) {
				return elem.disabled === true;
			},
			{ dir: "parentNode", next: "legend" }
		);
	
	// Optimize for push.apply( _, NodeList )
	try {
		push.apply(
			(arr = slice.call( preferredDoc.childNodes )),
			preferredDoc.childNodes
		);
		// Support: Android<4.0
		// Detect silently failing push.apply
		arr[ preferredDoc.childNodes.length ].nodeType;
	} catch ( e ) {
		push = { apply: arr.length ?
	
			// Leverage slice if possible
			function( target, els ) {
				push_native.apply( target, slice.call(els) );
			} :
	
			// Support: IE<9
			// Otherwise append directly
			function( target, els ) {
				var j = target.length,
					i = 0;
				// Can't trust NodeList.length
				while ( (target[j++] = els[i++]) ) {}
				target.length = j - 1;
			}
		};
	}
	
	function Sizzle( selector, context, results, seed ) {
		var m, i, elem, nid, match, groups, newSelector,
			newContext = context && context.ownerDocument,
	
			// nodeType defaults to 9, since context defaults to document
			nodeType = context ? context.nodeType : 9;
	
		results = results || [];
	
		// Return early from calls with invalid selector or context
		if ( typeof selector !== "string" || !selector ||
			nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {
	
			return results;
		}
	
		// Try to shortcut find operations (as opposed to filters) in HTML documents
		if ( !seed ) {
	
			if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
				setDocument( context );
			}
			context = context || document;
	
			if ( documentIsHTML ) {
	
				// If the selector is sufficiently simple, try using a "get*By*" DOM method
				// (excepting DocumentFragment context, where the methods don't exist)
				if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {
	
					// ID selector
					if ( (m = match[1]) ) {
	
						// Document context
						if ( nodeType === 9 ) {
							if ( (elem = context.getElementById( m )) ) {
	
								// Support: IE, Opera, Webkit
								// TODO: identify versions
								// getElementById can match elements by name instead of ID
								if ( elem.id === m ) {
									results.push( elem );
									return results;
								}
							} else {
								return results;
							}
	
						// Element context
						} else {
	
							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( newContext && (elem = newContext.getElementById( m )) &&
								contains( context, elem ) &&
								elem.id === m ) {
	
								results.push( elem );
								return results;
							}
						}
	
					// Type selector
					} else if ( match[2] ) {
						push.apply( results, context.getElementsByTagName( selector ) );
						return results;
	
					// Class selector
					} else if ( (m = match[3]) && support.getElementsByClassName &&
						context.getElementsByClassName ) {
	
						push.apply( results, context.getElementsByClassName( m ) );
						return results;
					}
				}
	
				// Take advantage of querySelectorAll
				if ( support.qsa &&
					!compilerCache[ selector + " " ] &&
					(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {
	
					if ( nodeType !== 1 ) {
						newContext = context;
						newSelector = selector;
	
					// qSA looks outside Element context, which is not what we want
					// Thanks to Andrew Dupont for this workaround technique
					// Support: IE <=8
					// Exclude object elements
					} else if ( context.nodeName.toLowerCase() !== "object" ) {
	
						// Capture the context ID, setting it first if necessary
						if ( (nid = context.getAttribute( "id" )) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} else {
							context.setAttribute( "id", (nid = expando) );
						}
	
						// Prefix every selector in the list
						groups = tokenize( selector );
						i = groups.length;
						while ( i-- ) {
							groups[i] = "#" + nid + " " + toSelector( groups[i] );
						}
						newSelector = groups.join( "," );
	
						// Expand context for sibling selectors
						newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
							context;
					}
	
					if ( newSelector ) {
						try {
							push.apply( results,
								newContext.querySelectorAll( newSelector )
							);
							return results;
						} catch ( qsaError ) {
						} finally {
							if ( nid === expando ) {
								context.removeAttribute( "id" );
							}
						}
					}
				}
			}
		}
	
		// All others
		return select( selector.replace( rtrim, "$1" ), context, results, seed );
	}
	
	/**
	 * Create key-value caches of limited size
	 * @returns {function(string, object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */
	function createCache() {
		var keys = [];
	
		function cache( key, value ) {
			// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
			if ( keys.push( key + " " ) > Expr.cacheLength ) {
				// Only keep the most recent entries
				delete cache[ keys.shift() ];
			}
			return (cache[ key + " " ] = value);
		}
		return cache;
	}
	
	/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */
	function markFunction( fn ) {
		fn[ expando ] = true;
		return fn;
	}
	
	/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created element and returns a boolean result
	 */
	function assert( fn ) {
		var el = document.createElement("fieldset");
	
		try {
			return !!fn( el );
		} catch (e) {
			return false;
		} finally {
			// Remove from its parent by default
			if ( el.parentNode ) {
				el.parentNode.removeChild( el );
			}
			// release memory in IE
			el = null;
		}
	}
	
	/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */
	function addHandle( attrs, handler ) {
		var arr = attrs.split("|"),
			i = arr.length;
	
		while ( i-- ) {
			Expr.attrHandle[ arr[i] ] = handler;
		}
	}
	
	/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */
	function siblingCheck( a, b ) {
		var cur = b && a,
			diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
				a.sourceIndex - b.sourceIndex;
	
		// Use IE sourceIndex if available on both nodes
		if ( diff ) {
			return diff;
		}
	
		// Check if b follows a
		if ( cur ) {
			while ( (cur = cur.nextSibling) ) {
				if ( cur === b ) {
					return -1;
				}
			}
		}
	
		return a ? 1 : -1;
	}
	
	/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */
	function createInputPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === type;
		};
	}
	
	/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */
	function createButtonPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && elem.type === type;
		};
	}
	
	/**
	 * Returns a function to use in pseudos for :enabled/:disabled
	 * @param {Boolean} disabled true for :disabled; false for :enabled
	 */
	function createDisabledPseudo( disabled ) {
		// Known :disabled false positives:
		// IE: *[disabled]:not(button, input, select, textarea, optgroup, option, menuitem, fieldset)
		// not IE: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
		return function( elem ) {
	
			// Check form elements and option elements for explicit disabling
			return "label" in elem && elem.disabled === disabled ||
				"form" in elem && elem.disabled === disabled ||
	
				// Check non-disabled form elements for fieldset[disabled] ancestors
				"form" in elem && elem.disabled === false && (
					// Support: IE6-11+
					// Ancestry is covered for us
					elem.isDisabled === disabled ||
	
					// Otherwise, assume any non-<option> under fieldset[disabled] is disabled
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						("label" in elem || !disabledAncestor( elem )) !== disabled
				);
		};
	}
	
	/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */
	function createPositionalPseudo( fn ) {
		return markFunction(function( argument ) {
			argument = +argument;
			return markFunction(function( seed, matches ) {
				var j,
					matchIndexes = fn( [], seed.length, argument ),
					i = matchIndexes.length;
	
				// Match elements found at the specified indexes
				while ( i-- ) {
					if ( seed[ (j = matchIndexes[i]) ] ) {
						seed[j] = !(matches[j] = seed[j]);
					}
				}
			});
		});
	}
	
	/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */
	function testContext( context ) {
		return context && typeof context.getElementsByTagName !== "undefined" && context;
	}
	
	// Expose support vars for convenience
	support = Sizzle.support = {};
	
	/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */
	isXML = Sizzle.isXML = function( elem ) {
		// documentElement is verified for cases where it doesn't yet exist
		// (such as loading iframes in IE - #4833)
		var documentElement = elem && (elem.ownerDocument || elem).documentElement;
		return documentElement ? documentElement.nodeName !== "HTML" : false;
	};
	
	/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */
	setDocument = Sizzle.setDocument = function( node ) {
		var hasCompare, subWindow,
			doc = node ? node.ownerDocument || node : preferredDoc;
	
		// Return early if doc is invalid or already selected
		if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
			return document;
		}
	
		// Update global variables
		document = doc;
		docElem = document.documentElement;
		documentIsHTML = !isXML( document );
	
		// Support: IE 9-11, Edge
		// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
		if ( preferredDoc !== document &&
			(subWindow = document.defaultView) && subWindow.top !== subWindow ) {
	
			// Support: IE 11, Edge
			if ( subWindow.addEventListener ) {
				subWindow.addEventListener( "unload", unloadHandler, false );
	
			// Support: IE 9 - 10 only
			} else if ( subWindow.attachEvent ) {
				subWindow.attachEvent( "onunload", unloadHandler );
			}
		}
	
		/* Attributes
		---------------------------------------------------------------------- */
	
		// Support: IE<8
		// Verify that getAttribute really returns attributes and not properties
		// (excepting IE8 booleans)
		support.attributes = assert(function( el ) {
			el.className = "i";
			return !el.getAttribute("className");
		});
	
		/* getElement(s)By*
		---------------------------------------------------------------------- */
	
		// Check if getElementsByTagName("*") returns only elements
		support.getElementsByTagName = assert(function( el ) {
			el.appendChild( document.createComment("") );
			return !el.getElementsByTagName("*").length;
		});
	
		// Support: IE<9
		support.getElementsByClassName = rnative.test( document.getElementsByClassName );
	
		// Support: IE<10
		// Check if getElementById returns elements by name
		// The broken getElementById methods don't pick up programmatically-set names,
		// so use a roundabout getElementsByName test
		support.getById = assert(function( el ) {
			docElem.appendChild( el ).id = expando;
			return !document.getElementsByName || !document.getElementsByName( expando ).length;
		});
	
		// ID find and filter
		if ( support.getById ) {
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var m = context.getElementById( id );
					return m ? [ m ] : [];
				}
			};
			Expr.filter["ID"] = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute("id") === attrId;
				};
			};
		} else {
			// Support: IE6/7
			// getElementById is not reliable as a find shortcut
			delete Expr.find["ID"];
	
			Expr.filter["ID"] =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== "undefined" &&
						elem.getAttributeNode("id");
					return node && node.value === attrId;
				};
			};
		}
	
		// Tag
		Expr.find["TAG"] = support.getElementsByTagName ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== "undefined" ) {
					return context.getElementsByTagName( tag );
	
				// DocumentFragment nodes don't have gEBTN
				} else if ( support.qsa ) {
					return context.querySelectorAll( tag );
				}
			} :
	
			function( tag, context ) {
				var elem,
					tmp = [],
					i = 0,
					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName( tag );
	
				// Filter out possible comments
				if ( tag === "*" ) {
					while ( (elem = results[i++]) ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}
	
					return tmp;
				}
				return results;
			};
	
		// Class
		Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
			if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
				return context.getElementsByClassName( className );
			}
		};
	
		/* QSA/matchesSelector
		---------------------------------------------------------------------- */
	
		// QSA and matchesSelector support
	
		// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
		rbuggyMatches = [];
	
		// qSa(:focus) reports false when true (Chrome 21)
		// We allow this because of a bug in IE8/9 that throws an error
		// whenever `document.activeElement` is accessed on an iframe
		// So, we allow :focus to pass through QSA all the time to avoid the IE error
		// See https://bugs.jquery.com/ticket/13378
		rbuggyQSA = [];
	
		if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
			// Build QSA regex
			// Regex strategy adopted from Diego Perini
			assert(function( el ) {
				// Select is set to empty string on purpose
				// This is to test IE's treatment of not explicitly
				// setting a boolean content attribute,
				// since its presence should be enough
				// https://bugs.jquery.com/ticket/12359
				docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
					"<select id='" + expando + "-\r\\' msallowcapture=''>" +
					"<option selected=''></option></select>";
	
				// Support: IE8, Opera 11-12.16
				// Nothing should be selected when empty strings follow ^= or $= or *=
				// The test attribute must be unknown in Opera but "safe" for WinRT
				// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
				if ( el.querySelectorAll("[msallowcapture^='']").length ) {
					rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
				}
	
				// Support: IE8
				// Boolean attributes and "value" are not treated correctly
				if ( !el.querySelectorAll("[selected]").length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
				}
	
				// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
				if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
					rbuggyQSA.push("~=");
				}
	
				// Webkit/Opera - :checked should return selected option elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				// IE8 throws error here and will not see later tests
				if ( !el.querySelectorAll(":checked").length ) {
					rbuggyQSA.push(":checked");
				}
	
				// Support: Safari 8+, iOS 8+
				// https://bugs.webkit.org/show_bug.cgi?id=136851
				// In-page `selector#id sibling-combinator selector` fails
				if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
					rbuggyQSA.push(".#.+[+~]");
				}
			});
	
			assert(function( el ) {
				el.innerHTML = "<a href='' disabled='disabled'></a>" +
					"<select disabled='disabled'><option/></select>";
	
				// Support: Windows 8 Native Apps
				// The type and name attributes are restricted during .innerHTML assignment
				var input = document.createElement("input");
				input.setAttribute( "type", "hidden" );
				el.appendChild( input ).setAttribute( "name", "D" );
	
				// Support: IE8
				// Enforce case-sensitivity of name attribute
				if ( el.querySelectorAll("[name=d]").length ) {
					rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
				}
	
				// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
				// IE8 throws error here and will not see later tests
				if ( el.querySelectorAll(":enabled").length !== 2 ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}
	
				// Support: IE9-11+
				// IE's :disabled selector does not pick up the children of disabled fieldsets
				docElem.appendChild( el ).disabled = true;
				if ( el.querySelectorAll(":disabled").length !== 2 ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}
	
				// Opera 10-11 does not throw on post-comma invalid pseudos
				el.querySelectorAll("*,:x");
				rbuggyQSA.push(",.*:");
			});
		}
	
		if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
			docElem.webkitMatchesSelector ||
			docElem.mozMatchesSelector ||
			docElem.oMatchesSelector ||
			docElem.msMatchesSelector) )) ) {
	
			assert(function( el ) {
				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				support.disconnectedMatch = matches.call( el, "*" );
	
				// This should fail with an exception
				// Gecko does not error, returns false instead
				matches.call( el, "[s!='']:x" );
				rbuggyMatches.push( "!=", pseudos );
			});
		}
	
		rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
		rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );
	
		/* Contains
		---------------------------------------------------------------------- */
		hasCompare = rnative.test( docElem.compareDocumentPosition );
	
		// Element contains another
		// Purposefully self-exclusive
		// As in, an element does not contain itself
		contains = hasCompare || rnative.test( docElem.contains ) ?
			function( a, b ) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
					bup = b && b.parentNode;
				return a === bup || !!( bup && bup.nodeType === 1 && (
					adown.contains ?
						adown.contains( bup ) :
						a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
				));
			} :
			function( a, b ) {
				if ( b ) {
					while ( (b = b.parentNode) ) {
						if ( b === a ) {
							return true;
						}
					}
				}
				return false;
			};
	
		/* Sorting
		---------------------------------------------------------------------- */
	
		// Document order sorting
		sortOrder = hasCompare ?
		function( a, b ) {
	
			// Flag for duplicate removal
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}
	
			// Sort on method existence if only one input has compareDocumentPosition
			var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
			if ( compare ) {
				return compare;
			}
	
			// Calculate position if both inputs belong to the same document
			compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
				a.compareDocumentPosition( b ) :
	
				// Otherwise we know they are disconnected
				1;
	
			// Disconnected nodes
			if ( compare & 1 ||
				(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {
	
				// Choose the first element that is related to our preferred document
				if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
					return -1;
				}
				if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
					return 1;
				}
	
				// Maintain original order
				return sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
			}
	
			return compare & 4 ? -1 : 1;
		} :
		function( a, b ) {
			// Exit early if the nodes are identical
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}
	
			var cur,
				i = 0,
				aup = a.parentNode,
				bup = b.parentNode,
				ap = [ a ],
				bp = [ b ];
	
			// Parentless nodes are either documents or disconnected
			if ( !aup || !bup ) {
				return a === document ? -1 :
					b === document ? 1 :
					aup ? -1 :
					bup ? 1 :
					sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
	
			// If the nodes are siblings, we can do a quick check
			} else if ( aup === bup ) {
				return siblingCheck( a, b );
			}
	
			// Otherwise we need full lists of their ancestors for comparison
			cur = a;
			while ( (cur = cur.parentNode) ) {
				ap.unshift( cur );
			}
			cur = b;
			while ( (cur = cur.parentNode) ) {
				bp.unshift( cur );
			}
	
			// Walk down the tree looking for a discrepancy
			while ( ap[i] === bp[i] ) {
				i++;
			}
	
			return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck( ap[i], bp[i] ) :
	
				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 :
				bp[i] === preferredDoc ? 1 :
				0;
		};
	
		return document;
	};
	
	Sizzle.matches = function( expr, elements ) {
		return Sizzle( expr, null, null, elements );
	};
	
	Sizzle.matchesSelector = function( elem, expr ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}
	
		// Make sure that attribute selectors are quoted
		expr = expr.replace( rattributeQuotes, "='$1']" );
	
		if ( support.matchesSelector && documentIsHTML &&
			!compilerCache[ expr + " " ] &&
			( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
			( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {
	
			try {
				var ret = matches.call( elem, expr );
	
				// IE 9's matchesSelector returns false on disconnected nodes
				if ( ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11 ) {
					return ret;
				}
			} catch (e) {}
		}
	
		return Sizzle( expr, document, null, [ elem ] ).length > 0;
	};
	
	Sizzle.contains = function( context, elem ) {
		// Set document vars if needed
		if ( ( context.ownerDocument || context ) !== document ) {
			setDocument( context );
		}
		return contains( context, elem );
	};
	
	Sizzle.attr = function( elem, name ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}
	
		var fn = Expr.attrHandle[ name.toLowerCase() ],
			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
				fn( elem, name, !documentIsHTML ) :
				undefined;
	
		return val !== undefined ?
			val :
			support.attributes || !documentIsHTML ?
				elem.getAttribute( name ) :
				(val = elem.getAttributeNode(name)) && val.specified ?
					val.value :
					null;
	};
	
	Sizzle.escape = function( sel ) {
		return (sel + "").replace( rcssescape, fcssescape );
	};
	
	Sizzle.error = function( msg ) {
		throw new Error( "Syntax error, unrecognized expression: " + msg );
	};
	
	/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */
	Sizzle.uniqueSort = function( results ) {
		var elem,
			duplicates = [],
			j = 0,
			i = 0;
	
		// Unless we *know* we can detect duplicates, assume their presence
		hasDuplicate = !support.detectDuplicates;
		sortInput = !support.sortStable && results.slice( 0 );
		results.sort( sortOrder );
	
		if ( hasDuplicate ) {
			while ( (elem = results[i++]) ) {
				if ( elem === results[ i ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				results.splice( duplicates[ j ], 1 );
			}
		}
	
		// Clear input after sorting to release objects
		// See https://github.com/jquery/sizzle/pull/225
		sortInput = null;
	
		return results;
	};
	
	/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */
	getText = Sizzle.getText = function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;
	
		if ( !nodeType ) {
			// If no nodeType, this is expected to be an array
			while ( (node = elem[i++]) ) {
				// Do not traverse comment nodes
				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent for elements
			// innerText usage removed for consistency of new lines (jQuery #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {
				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
		// Do not include comment or processing instruction nodes
	
		return ret;
	};
	
	Expr = Sizzle.selectors = {
	
		// Can be adjusted by the user
		cacheLength: 50,
	
		createPseudo: markFunction,
	
		match: matchExpr,
	
		attrHandle: {},
	
		find: {},
	
		relative: {
			">": { dir: "parentNode", first: true },
			" ": { dir: "parentNode" },
			"+": { dir: "previousSibling", first: true },
			"~": { dir: "previousSibling" }
		},
	
		preFilter: {
			"ATTR": function( match ) {
				match[1] = match[1].replace( runescape, funescape );
	
				// Move the given value to match[3] whether quoted or unquoted
				match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );
	
				if ( match[2] === "~=" ) {
					match[3] = " " + match[3] + " ";
				}
	
				return match.slice( 0, 4 );
			},
	
			"CHILD": function( match ) {
				/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/
				match[1] = match[1].toLowerCase();
	
				if ( match[1].slice( 0, 3 ) === "nth" ) {
					// nth-* requires argument
					if ( !match[3] ) {
						Sizzle.error( match[0] );
					}
	
					// numeric x and y parameters for Expr.filter.CHILD
					// remember that false/true cast respectively to 0/1
					match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
					match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );
	
				// other types prohibit arguments
				} else if ( match[3] ) {
					Sizzle.error( match[0] );
				}
	
				return match;
			},
	
			"PSEUDO": function( match ) {
				var excess,
					unquoted = !match[6] && match[2];
	
				if ( matchExpr["CHILD"].test( match[0] ) ) {
					return null;
				}
	
				// Accept quoted arguments as-is
				if ( match[3] ) {
					match[2] = match[4] || match[5] || "";
	
				// Strip excess characters from unquoted arguments
				} else if ( unquoted && rpseudo.test( unquoted ) &&
					// Get excess from tokenize (recursively)
					(excess = tokenize( unquoted, true )) &&
					// advance to the next closing parenthesis
					(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {
	
					// excess is a negative index
					match[0] = match[0].slice( 0, excess );
					match[2] = unquoted.slice( 0, excess );
				}
	
				// Return only captures needed by the pseudo filter method (type and argument)
				return match.slice( 0, 3 );
			}
		},
	
		filter: {
	
			"TAG": function( nodeNameSelector ) {
				var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
				return nodeNameSelector === "*" ?
					function() { return true; } :
					function( elem ) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
			},
	
			"CLASS": function( className ) {
				var pattern = classCache[ className + " " ];
	
				return pattern ||
					(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
					classCache( className, function( elem ) {
						return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
					});
			},
	
			"ATTR": function( name, operator, check ) {
				return function( elem ) {
					var result = Sizzle.attr( elem, name );
	
					if ( result == null ) {
						return operator === "!=";
					}
					if ( !operator ) {
						return true;
					}
	
					result += "";
	
					return operator === "=" ? result === check :
						operator === "!=" ? result !== check :
						operator === "^=" ? check && result.indexOf( check ) === 0 :
						operator === "*=" ? check && result.indexOf( check ) > -1 :
						operator === "$=" ? check && result.slice( -check.length ) === check :
						operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
						operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
						false;
				};
			},
	
			"CHILD": function( type, what, argument, first, last ) {
				var simple = type.slice( 0, 3 ) !== "nth",
					forward = type.slice( -4 ) !== "last",
					ofType = what === "of-type";
	
				return first === 1 && last === 0 ?
	
					// Shortcut for :nth-*(n)
					function( elem ) {
						return !!elem.parentNode;
					} :
	
					function( elem, context, xml ) {
						var cache, uniqueCache, outerCache, node, nodeIndex, start,
							dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType,
							diff = false;
	
						if ( parent ) {
	
							// :(first|last|only)-(child|of-type)
							if ( simple ) {
								while ( dir ) {
									node = elem;
									while ( (node = node[ dir ]) ) {
										if ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) {
	
											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}
	
							start = [ forward ? parent.firstChild : parent.lastChild ];
	
							// non-xml :nth-child(...) stores cache data on `parent`
							if ( forward && useCache ) {
	
								// Seek `elem` from a previously-cached index
	
								// ...in a gzip-friendly way
								node = parent;
								outerCache = node[ expando ] || (node[ expando ] = {});
	
								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});
	
								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex && cache[ 2 ];
								node = nodeIndex && parent.childNodes[ nodeIndex ];
	
								while ( (node = ++nodeIndex && node && node[ dir ] ||
	
									// Fallback to seeking `elem` from the start
									(diff = nodeIndex = 0) || start.pop()) ) {
	
									// When found, cache indexes on `parent` and break
									if ( node.nodeType === 1 && ++diff && node === elem ) {
										uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
										break;
									}
								}
	
							} else {
								// Use previously-cached element index if available
								if ( useCache ) {
									// ...in a gzip-friendly way
									node = elem;
									outerCache = node[ expando ] || (node[ expando ] = {});
	
									// Support: IE <9 only
									// Defend against cloned attroperties (jQuery gh-1709)
									uniqueCache = outerCache[ node.uniqueID ] ||
										(outerCache[ node.uniqueID ] = {});
	
									cache = uniqueCache[ type ] || [];
									nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
									diff = nodeIndex;
								}
	
								// xml :nth-child(...)
								// or :nth-last-child(...) or :nth(-last)?-of-type(...)
								if ( diff === false ) {
									// Use the same loop as above to seek `elem` from the start
									while ( (node = ++nodeIndex && node && node[ dir ] ||
										(diff = nodeIndex = 0) || start.pop()) ) {
	
										if ( ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) &&
											++diff ) {
	
											// Cache the index of each encountered element
											if ( useCache ) {
												outerCache = node[ expando ] || (node[ expando ] = {});
	
												// Support: IE <9 only
												// Defend against cloned attroperties (jQuery gh-1709)
												uniqueCache = outerCache[ node.uniqueID ] ||
													(outerCache[ node.uniqueID ] = {});
	
												uniqueCache[ type ] = [ dirruns, diff ];
											}
	
											if ( node === elem ) {
												break;
											}
										}
									}
								}
							}
	
							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || ( diff % first === 0 && diff / first >= 0 );
						}
					};
			},
	
			"PSEUDO": function( pseudo, argument ) {
				// pseudo-class names are case-insensitive
				// http://www.w3.org/TR/selectors/#pseudo-classes
				// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
				// Remember that setFilters inherits from pseudos
				var args,
					fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
						Sizzle.error( "unsupported pseudo: " + pseudo );
	
				// The user may use createPseudo to indicate that
				// arguments are needed to create the filter function
				// just as Sizzle does
				if ( fn[ expando ] ) {
					return fn( argument );
				}
	
				// But maintain support for old signatures
				if ( fn.length > 1 ) {
					args = [ pseudo, pseudo, "", argument ];
					return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
						markFunction(function( seed, matches ) {
							var idx,
								matched = fn( seed, argument ),
								i = matched.length;
							while ( i-- ) {
								idx = indexOf( seed, matched[i] );
								seed[ idx ] = !( matches[ idx ] = matched[i] );
							}
						}) :
						function( elem ) {
							return fn( elem, 0, args );
						};
				}
	
				return fn;
			}
		},
	
		pseudos: {
			// Potentially complex pseudos
			"not": markFunction(function( selector ) {
				// Trim the selector passed to compile
				// to avoid treating leading and trailing
				// spaces as combinators
				var input = [],
					results = [],
					matcher = compile( selector.replace( rtrim, "$1" ) );
	
				return matcher[ expando ] ?
					markFunction(function( seed, matches, context, xml ) {
						var elem,
							unmatched = matcher( seed, null, xml, [] ),
							i = seed.length;
	
						// Match elements unmatched by `matcher`
						while ( i-- ) {
							if ( (elem = unmatched[i]) ) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) :
					function( elem, context, xml ) {
						input[0] = elem;
						matcher( input, null, xml, results );
						// Don't keep the element (issue #299)
						input[0] = null;
						return !results.pop();
					};
			}),
	
			"has": markFunction(function( selector ) {
				return function( elem ) {
					return Sizzle( selector, elem ).length > 0;
				};
			}),
	
			"contains": markFunction(function( text ) {
				text = text.replace( runescape, funescape );
				return function( elem ) {
					return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
				};
			}),
	
			// "Whether an element is represented by a :lang() selector
			// is based solely on the element's language value
			// being equal to the identifier C,
			// or beginning with the identifier C immediately followed by "-".
			// The matching of C against the element's language value is performed case-insensitively.
			// The identifier C does not have to be a valid language name."
			// http://www.w3.org/TR/selectors/#lang-pseudo
			"lang": markFunction( function( lang ) {
				// lang value must be a valid identifier
				if ( !ridentifier.test(lang || "") ) {
					Sizzle.error( "unsupported lang: " + lang );
				}
				lang = lang.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					var elemLang;
					do {
						if ( (elemLang = documentIsHTML ?
							elem.lang :
							elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {
	
							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
						}
					} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
					return false;
				};
			}),
	
			// Miscellaneous
			"target": function( elem ) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice( 1 ) === elem.id;
			},
	
			"root": function( elem ) {
				return elem === docElem;
			},
	
			"focus": function( elem ) {
				return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
			},
	
			// Boolean properties
			"enabled": createDisabledPseudo( false ),
			"disabled": createDisabledPseudo( true ),
	
			"checked": function( elem ) {
				// In CSS3, :checked should return both checked and selected elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				var nodeName = elem.nodeName.toLowerCase();
				return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
			},
	
			"selected": function( elem ) {
				// Accessing this property makes selected-by-default
				// options in Safari work properly
				if ( elem.parentNode ) {
					elem.parentNode.selectedIndex;
				}
	
				return elem.selected === true;
			},
	
			// Contents
			"empty": function( elem ) {
				// http://www.w3.org/TR/selectors/#empty-pseudo
				// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
				//   but not by others (comment: 8; processing instruction: 7; etc.)
				// nodeType < 6 works because attributes (2) do not appear as children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					if ( elem.nodeType < 6 ) {
						return false;
					}
				}
				return true;
			},
	
			"parent": function( elem ) {
				return !Expr.pseudos["empty"]( elem );
			},
	
			// Element/input types
			"header": function( elem ) {
				return rheader.test( elem.nodeName );
			},
	
			"input": function( elem ) {
				return rinputs.test( elem.nodeName );
			},
	
			"button": function( elem ) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === "button" || name === "button";
			},
	
			"text": function( elem ) {
				var attr;
				return elem.nodeName.toLowerCase() === "input" &&
					elem.type === "text" &&
	
					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
			},
	
			// Position-in-collection
			"first": createPositionalPseudo(function() {
				return [ 0 ];
			}),
	
			"last": createPositionalPseudo(function( matchIndexes, length ) {
				return [ length - 1 ];
			}),
	
			"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
				return [ argument < 0 ? argument + length : argument ];
			}),
	
			"even": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 0;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),
	
			"odd": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 1;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),
	
			"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; --i >= 0; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),
	
			"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; ++i < length; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			})
		}
	};
	
	Expr.pseudos["nth"] = Expr.pseudos["eq"];
	
	// Add button/input type pseudos
	for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
		Expr.pseudos[ i ] = createInputPseudo( i );
	}
	for ( i in { submit: true, reset: true } ) {
		Expr.pseudos[ i ] = createButtonPseudo( i );
	}
	
	// Easy API for creating new setFilters
	function setFilters() {}
	setFilters.prototype = Expr.filters = Expr.pseudos;
	Expr.setFilters = new setFilters();
	
	tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
		var matched, match, tokens, type,
			soFar, groups, preFilters,
			cached = tokenCache[ selector + " " ];
	
		if ( cached ) {
			return parseOnly ? 0 : cached.slice( 0 );
		}
	
		soFar = selector;
		groups = [];
		preFilters = Expr.preFilter;
	
		while ( soFar ) {
	
			// Comma and first run
			if ( !matched || (match = rcomma.exec( soFar )) ) {
				if ( match ) {
					// Don't consume trailing commas as valid
					soFar = soFar.slice( match[0].length ) || soFar;
				}
				groups.push( (tokens = []) );
			}
	
			matched = false;
	
			// Combinators
			if ( (match = rcombinators.exec( soFar )) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					// Cast descendant combinators to space
					type: match[0].replace( rtrim, " " )
				});
				soFar = soFar.slice( matched.length );
			}
	
			// Filters
			for ( type in Expr.filter ) {
				if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
					(match = preFilters[ type ]( match ))) ) {
					matched = match.shift();
					tokens.push({
						value: matched,
						type: type,
						matches: match
					});
					soFar = soFar.slice( matched.length );
				}
			}
	
			if ( !matched ) {
				break;
			}
		}
	
		// Return the length of the invalid excess
		// if we're just parsing
		// Otherwise, throw an error or return tokens
		return parseOnly ?
			soFar.length :
			soFar ?
				Sizzle.error( selector ) :
				// Cache the tokens
				tokenCache( selector, groups ).slice( 0 );
	};
	
	function toSelector( tokens ) {
		var i = 0,
			len = tokens.length,
			selector = "";
		for ( ; i < len; i++ ) {
			selector += tokens[i].value;
		}
		return selector;
	}
	
	function addCombinator( matcher, combinator, base ) {
		var dir = combinator.dir,
			skip = combinator.next,
			key = skip || dir,
			checkNonElements = base && key === "parentNode",
			doneName = done++;
	
		return combinator.first ?
			// Check against closest ancestor/preceding element
			function( elem, context, xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
			} :
	
			// Check against all ancestor/preceding elements
			function( elem, context, xml ) {
				var oldCache, uniqueCache, outerCache,
					newCache = [ dirruns, doneName ];
	
				// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
				if ( xml ) {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							if ( matcher( elem, context, xml ) ) {
								return true;
							}
						}
					}
				} else {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							outerCache = elem[ expando ] || (elem[ expando ] = {});
	
							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});
	
							if ( skip && skip === elem.nodeName.toLowerCase() ) {
								elem = elem[ dir ] || elem;
							} else if ( (oldCache = uniqueCache[ key ]) &&
								oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {
	
								// Assign to newCache so results back-propagate to previous elements
								return (newCache[ 2 ] = oldCache[ 2 ]);
							} else {
								// Reuse newcache so results back-propagate to previous elements
								uniqueCache[ key ] = newCache;
	
								// A match means we're done; a fail means we have to keep checking
								if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
									return true;
								}
							}
						}
					}
				}
			};
	}
	
	function elementMatcher( matchers ) {
		return matchers.length > 1 ?
			function( elem, context, xml ) {
				var i = matchers.length;
				while ( i-- ) {
					if ( !matchers[i]( elem, context, xml ) ) {
						return false;
					}
				}
				return true;
			} :
			matchers[0];
	}
	
	function multipleContexts( selector, contexts, results ) {
		var i = 0,
			len = contexts.length;
		for ( ; i < len; i++ ) {
			Sizzle( selector, contexts[i], results );
		}
		return results;
	}
	
	function condense( unmatched, map, filter, context, xml ) {
		var elem,
			newUnmatched = [],
			i = 0,
			len = unmatched.length,
			mapped = map != null;
	
		for ( ; i < len; i++ ) {
			if ( (elem = unmatched[i]) ) {
				if ( !filter || filter( elem, context, xml ) ) {
					newUnmatched.push( elem );
					if ( mapped ) {
						map.push( i );
					}
				}
			}
		}
	
		return newUnmatched;
	}
	
	function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
		if ( postFilter && !postFilter[ expando ] ) {
			postFilter = setMatcher( postFilter );
		}
		if ( postFinder && !postFinder[ expando ] ) {
			postFinder = setMatcher( postFinder, postSelector );
		}
		return markFunction(function( seed, results, context, xml ) {
			var temp, i, elem,
				preMap = [],
				postMap = [],
				preexisting = results.length,
	
				// Get initial elements from seed or context
				elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),
	
				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && ( seed || !selector ) ?
					condense( elems, preMap, preFilter, context, xml ) :
					elems,
	
				matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || ( seed ? preFilter : preexisting || postFilter ) ?
	
						// ...intermediate processing is necessary
						[] :
	
						// ...otherwise use results directly
						results :
					matcherIn;
	
			// Find primary matches
			if ( matcher ) {
				matcher( matcherIn, matcherOut, context, xml );
			}
	
			// Apply postFilter
			if ( postFilter ) {
				temp = condense( matcherOut, postMap );
				postFilter( temp, [], context, xml );
	
				// Un-match failing elements by moving them back to matcherIn
				i = temp.length;
				while ( i-- ) {
					if ( (elem = temp[i]) ) {
						matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
					}
				}
			}
	
			if ( seed ) {
				if ( postFinder || preFilter ) {
					if ( postFinder ) {
						// Get the final matcherOut by condensing this intermediate into postFinder contexts
						temp = [];
						i = matcherOut.length;
						while ( i-- ) {
							if ( (elem = matcherOut[i]) ) {
								// Restore matcherIn since elem is not yet a final match
								temp.push( (matcherIn[i] = elem) );
							}
						}
						postFinder( null, (matcherOut = []), temp, xml );
					}
	
					// Move matched elements from seed to results to keep them synchronized
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) &&
							(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {
	
							seed[temp] = !(results[temp] = elem);
						}
					}
				}
	
			// Add elements to results, through postFinder if defined
			} else {
				matcherOut = condense(
					matcherOut === results ?
						matcherOut.splice( preexisting, matcherOut.length ) :
						matcherOut
				);
				if ( postFinder ) {
					postFinder( null, results, matcherOut, xml );
				} else {
					push.apply( results, matcherOut );
				}
			}
		});
	}
	
	function matcherFromTokens( tokens ) {
		var checkContext, matcher, j,
			len = tokens.length,
			leadingRelative = Expr.relative[ tokens[0].type ],
			implicitRelative = leadingRelative || Expr.relative[" "],
			i = leadingRelative ? 1 : 0,
	
			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator( function( elem ) {
				return elem === checkContext;
			}, implicitRelative, true ),
			matchAnyContext = addCombinator( function( elem ) {
				return indexOf( checkContext, elem ) > -1;
			}, implicitRelative, true ),
			matchers = [ function( elem, context, xml ) {
				var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
					(checkContext = context).nodeType ?
						matchContext( elem, context, xml ) :
						matchAnyContext( elem, context, xml ) );
				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			} ];
	
		for ( ; i < len; i++ ) {
			if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
				matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
			} else {
				matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );
	
				// Return special upon seeing a positional matcher
				if ( matcher[ expando ] ) {
					// Find the next relative operator (if any) for proper handling
					j = ++i;
					for ( ; j < len; j++ ) {
						if ( Expr.relative[ tokens[j].type ] ) {
							break;
						}
					}
					return setMatcher(
						i > 1 && elementMatcher( matchers ),
						i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
						).replace( rtrim, "$1" ),
						matcher,
						i < j && matcherFromTokens( tokens.slice( i, j ) ),
						j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
						j < len && toSelector( tokens )
					);
				}
				matchers.push( matcher );
			}
		}
	
		return elementMatcher( matchers );
	}
	
	function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
		var bySet = setMatchers.length > 0,
			byElement = elementMatchers.length > 0,
			superMatcher = function( seed, context, xml, results, outermost ) {
				var elem, j, matcher,
					matchedCount = 0,
					i = "0",
					unmatched = seed && [],
					setMatched = [],
					contextBackup = outermostContext,
					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
					len = elems.length;
	
				if ( outermost ) {
					outermostContext = context === document || context || outermost;
				}
	
				// Add elements passing elementMatchers directly to results
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
					if ( byElement && elem ) {
						j = 0;
						if ( !context && elem.ownerDocument !== document ) {
							setDocument( elem );
							xml = !documentIsHTML;
						}
						while ( (matcher = elementMatchers[j++]) ) {
							if ( matcher( elem, context || document, xml) ) {
								results.push( elem );
								break;
							}
						}
						if ( outermost ) {
							dirruns = dirrunsUnique;
						}
					}
	
					// Track unmatched elements for set filters
					if ( bySet ) {
						// They will have gone through all possible matchers
						if ( (elem = !matcher && elem) ) {
							matchedCount--;
						}
	
						// Lengthen the array for every element, matched or not
						if ( seed ) {
							unmatched.push( elem );
						}
					}
				}
	
				// `i` is now the count of elements visited above, and adding it to `matchedCount`
				// makes the latter nonnegative.
				matchedCount += i;
	
				// Apply set filters to unmatched elements
				// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
				// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
				// no element matchers and no seed.
				// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
				// case, which will result in a "00" `matchedCount` that differs from `i` but is also
				// numerically zero.
				if ( bySet && i !== matchedCount ) {
					j = 0;
					while ( (matcher = setMatchers[j++]) ) {
						matcher( unmatched, setMatched, context, xml );
					}
	
					if ( seed ) {
						// Reintegrate element matches to eliminate the need for sorting
						if ( matchedCount > 0 ) {
							while ( i-- ) {
								if ( !(unmatched[i] || setMatched[i]) ) {
									setMatched[i] = pop.call( results );
								}
							}
						}
	
						// Discard index placeholder values to get only actual matches
						setMatched = condense( setMatched );
					}
	
					// Add matches to results
					push.apply( results, setMatched );
	
					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if ( outermost && !seed && setMatched.length > 0 &&
						( matchedCount + setMatchers.length ) > 1 ) {
	
						Sizzle.uniqueSort( results );
					}
				}
	
				// Override manipulation of globals by nested matchers
				if ( outermost ) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}
	
				return unmatched;
			};
	
		return bySet ?
			markFunction( superMatcher ) :
			superMatcher;
	}
	
	compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
		var i,
			setMatchers = [],
			elementMatchers = [],
			cached = compilerCache[ selector + " " ];
	
		if ( !cached ) {
			// Generate a function of recursive functions that can be used to check each element
			if ( !match ) {
				match = tokenize( selector );
			}
			i = match.length;
			while ( i-- ) {
				cached = matcherFromTokens( match[i] );
				if ( cached[ expando ] ) {
					setMatchers.push( cached );
				} else {
					elementMatchers.push( cached );
				}
			}
	
			// Cache the compiled function
			cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );
	
			// Save selector and tokenization
			cached.selector = selector;
		}
		return cached;
	};
	
	/**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */
	select = Sizzle.select = function( selector, context, results, seed ) {
		var i, tokens, token, type, find,
			compiled = typeof selector === "function" && selector,
			match = !seed && tokenize( (selector = compiled.selector || selector) );
	
		results = results || [];
	
		// Try to minimize operations if there is only one selector in the list and no seed
		// (the latter of which guarantees us context)
		if ( match.length === 1 ) {
	
			// Reduce context if the leading compound selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					support.getById && context.nodeType === 9 && documentIsHTML &&
					Expr.relative[ tokens[1].type ] ) {
	
				context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
				if ( !context ) {
					return results;
	
				// Precompiled matchers will still verify ancestry, so step up a level
				} else if ( compiled ) {
					context = context.parentNode;
				}
	
				selector = selector.slice( tokens.shift().value.length );
			}
	
			// Fetch a seed set for right-to-left matching
			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];
	
				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
					)) ) {
	
						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}
	
						break;
					}
				}
			}
		}
	
		// Compile and execute a filtering function if one is not provided
		// Provide `match` to avoid retokenization if we modified the selector above
		( compiled || compile( selector, match ) )(
			seed,
			context,
			!documentIsHTML,
			results,
			!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
		);
		return results;
	};
	
	// One-time assignments
	
	// Sort stability
	support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;
	
	// Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates = !!hasDuplicate;
	
	// Initialize against the default document
	setDocument();
	
	// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert(function( el ) {
		// Should return 1, but returns 4 (following)
		return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
	});
	
	// Support: IE<8
	// Prevent attribute/property "interpolation"
	// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !assert(function( el ) {
		el.innerHTML = "<a href='#'></a>";
		return el.firstChild.getAttribute("href") === "#" ;
	}) ) {
		addHandle( "type|href|height|width", function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
			}
		});
	}
	
	// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if ( !support.attributes || !assert(function( el ) {
		el.innerHTML = "<input/>";
		el.firstChild.setAttribute( "value", "" );
		return el.firstChild.getAttribute( "value" ) === "";
	}) ) {
		addHandle( "value", function( elem, name, isXML ) {
			if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
				return elem.defaultValue;
			}
		});
	}
	
	// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if ( !assert(function( el ) {
		return el.getAttribute("disabled") == null;
	}) ) {
		addHandle( booleans, function( elem, name, isXML ) {
			var val;
			if ( !isXML ) {
				return elem[ name ] === true ? name.toLowerCase() :
						(val = elem.getAttributeNode( name )) && val.specified ?
						val.value :
					null;
			}
		});
	}
	
	return Sizzle;
	
	})( window );
	
	
	
	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;
	
	// Deprecated
	jQuery.expr[ ":" ] = jQuery.expr.pseudos;
	jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;
	jQuery.escapeSelector = Sizzle.escape;
	
	
	
	
	var dir = function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;
	
		while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	};
	
	
	var siblings = function( n, elem ) {
		var matched = [];
	
		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}
	
		return matched;
	};
	
	
	var rneedsContext = jQuery.expr.match.needsContext;
	
	var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );
	
	
	
	var risSimple = /^.[^:#\[\.,]*$/;
	
	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, not ) {
		if ( jQuery.isFunction( qualifier ) ) {
			return jQuery.grep( elements, function( elem, i ) {
				return !!qualifier.call( elem, i, elem ) !== not;
			} );
	
		}
	
		if ( qualifier.nodeType ) {
			return jQuery.grep( elements, function( elem ) {
				return ( elem === qualifier ) !== not;
			} );
	
		}
	
		if ( typeof qualifier === "string" ) {
			if ( risSimple.test( qualifier ) ) {
				return jQuery.filter( qualifier, elements, not );
			}
	
			qualifier = jQuery.filter( qualifier, elements );
		}
	
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
		} );
	}
	
	jQuery.filter = function( expr, elems, not ) {
		var elem = elems[ 0 ];
	
		if ( not ) {
			expr = ":not(" + expr + ")";
		}
	
		return elems.length === 1 && elem.nodeType === 1 ?
			jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
			jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
				return elem.nodeType === 1;
			} ) );
	};
	
	jQuery.fn.extend( {
		find: function( selector ) {
			var i, ret,
				len = this.length,
				self = this;
	
			if ( typeof selector !== "string" ) {
				return this.pushStack( jQuery( selector ).filter( function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				} ) );
			}
	
			ret = this.pushStack( [] );
	
			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, self[ i ], ret );
			}
	
			return len > 1 ? jQuery.uniqueSort( ret ) : ret;
		},
		filter: function( selector ) {
			return this.pushStack( winnow( this, selector || [], false ) );
		},
		not: function( selector ) {
			return this.pushStack( winnow( this, selector || [], true ) );
		},
		is: function( selector ) {
			return !!winnow(
				this,
	
				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test( selector ) ?
					jQuery( selector ) :
					selector || [],
				false
			).length;
		}
	} );
	
	
	// Initialize a jQuery object
	
	
	// A central reference to the root jQuery(document)
	var rootjQuery,
	
		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		// Shortcut simple #id case for speed
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
	
		init = jQuery.fn.init = function( selector, context, root ) {
			var match, elem;
	
			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}
	
			// Method init() accepts an alternate rootjQuery
			// so migrate can support jQuery.sub (gh-2101)
			root = root || rootjQuery;
	
			// Handle HTML strings
			if ( typeof selector === "string" ) {
				if ( selector[ 0 ] === "<" &&
					selector[ selector.length - 1 ] === ">" &&
					selector.length >= 3 ) {
	
					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [ null, selector, null ];
	
				} else {
					match = rquickExpr.exec( selector );
				}
	
				// Match html or make sure no context is specified for #id
				if ( match && ( match[ 1 ] || !context ) ) {
	
					// HANDLE: $(html) -> $(array)
					if ( match[ 1 ] ) {
						context = context instanceof jQuery ? context[ 0 ] : context;
	
						// Option to run scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge( this, jQuery.parseHTML(
							match[ 1 ],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						) );
	
						// HANDLE: $(html, props)
						if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
							for ( match in context ) {
	
								// Properties of context are called as methods if possible
								if ( jQuery.isFunction( this[ match ] ) ) {
									this[ match ]( context[ match ] );
	
								// ...and otherwise set as attributes
								} else {
									this.attr( match, context[ match ] );
								}
							}
						}
	
						return this;
	
					// HANDLE: $(#id)
					} else {
						elem = document.getElementById( match[ 2 ] );
	
						if ( elem ) {
	
							// Inject the element directly into the jQuery object
							this[ 0 ] = elem;
							this.length = 1;
						}
						return this;
					}
	
				// HANDLE: $(expr, $(...))
				} else if ( !context || context.jquery ) {
					return ( context || root ).find( selector );
	
				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor( context ).find( selector );
				}
	
			// HANDLE: $(DOMElement)
			} else if ( selector.nodeType ) {
				this[ 0 ] = selector;
				this.length = 1;
				return this;
	
			// HANDLE: $(function)
			// Shortcut for document ready
			} else if ( jQuery.isFunction( selector ) ) {
				return root.ready !== undefined ?
					root.ready( selector ) :
	
					// Execute immediately if ready is not present
					selector( jQuery );
			}
	
			return jQuery.makeArray( selector, this );
		};
	
	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;
	
	// Initialize central reference
	rootjQuery = jQuery( document );
	
	
	var rparentsprev = /^(?:parents|prev(?:Until|All))/,
	
		// Methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};
	
	jQuery.fn.extend( {
		has: function( target ) {
			var targets = jQuery( target, this ),
				l = targets.length;
	
			return this.filter( function() {
				var i = 0;
				for ( ; i < l; i++ ) {
					if ( jQuery.contains( this, targets[ i ] ) ) {
						return true;
					}
				}
			} );
		},
	
		closest: function( selectors, context ) {
			var cur,
				i = 0,
				l = this.length,
				matched = [],
				targets = typeof selectors !== "string" && jQuery( selectors );
	
			// Positional selectors never match, since there's no _selection_ context
			if ( !rneedsContext.test( selectors ) ) {
				for ( ; i < l; i++ ) {
					for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {
	
						// Always skip document fragments
						if ( cur.nodeType < 11 && ( targets ?
							targets.index( cur ) > -1 :
	
							// Don't pass non-elements to Sizzle
							cur.nodeType === 1 &&
								jQuery.find.matchesSelector( cur, selectors ) ) ) {
	
							matched.push( cur );
							break;
						}
					}
				}
			}
	
			return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
		},
	
		// Determine the position of an element within the set
		index: function( elem ) {
	
			// No argument, return index in parent
			if ( !elem ) {
				return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
			}
	
			// Index in selector
			if ( typeof elem === "string" ) {
				return indexOf.call( jQuery( elem ), this[ 0 ] );
			}
	
			// Locate the position of the desired element
			return indexOf.call( this,
	
				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[ 0 ] : elem
			);
		},
	
		add: function( selector, context ) {
			return this.pushStack(
				jQuery.uniqueSort(
					jQuery.merge( this.get(), jQuery( selector, context ) )
				)
			);
		},
	
		addBack: function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter( selector )
			);
		}
	} );
	
	function sibling( cur, dir ) {
		while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
		return cur;
	}
	
	jQuery.each( {
		parent: function( elem ) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function( elem ) {
			return dir( elem, "parentNode" );
		},
		parentsUntil: function( elem, i, until ) {
			return dir( elem, "parentNode", until );
		},
		next: function( elem ) {
			return sibling( elem, "nextSibling" );
		},
		prev: function( elem ) {
			return sibling( elem, "previousSibling" );
		},
		nextAll: function( elem ) {
			return dir( elem, "nextSibling" );
		},
		prevAll: function( elem ) {
			return dir( elem, "previousSibling" );
		},
		nextUntil: function( elem, i, until ) {
			return dir( elem, "nextSibling", until );
		},
		prevUntil: function( elem, i, until ) {
			return dir( elem, "previousSibling", until );
		},
		siblings: function( elem ) {
			return siblings( ( elem.parentNode || {} ).firstChild, elem );
		},
		children: function( elem ) {
			return siblings( elem.firstChild );
		},
		contents: function( elem ) {
			return elem.contentDocument || jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var matched = jQuery.map( this, fn, until );
	
			if ( name.slice( -5 ) !== "Until" ) {
				selector = until;
			}
	
			if ( selector && typeof selector === "string" ) {
				matched = jQuery.filter( selector, matched );
			}
	
			if ( this.length > 1 ) {
	
				// Remove duplicates
				if ( !guaranteedUnique[ name ] ) {
					jQuery.uniqueSort( matched );
				}
	
				// Reverse order for parents* and prev-derivatives
				if ( rparentsprev.test( name ) ) {
					matched.reverse();
				}
			}
	
			return this.pushStack( matched );
		};
	} );
	var rnotwhite = ( /\S+/g );
	
	
	
	// Convert String-formatted options into Object-formatted ones
	function createOptions( options ) {
		var object = {};
		jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
			object[ flag ] = true;
		} );
		return object;
	}
	
	/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */
	jQuery.Callbacks = function( options ) {
	
		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			createOptions( options ) :
			jQuery.extend( {}, options );
	
		var // Flag to know if list is currently firing
			firing,
	
			// Last fire value for non-forgettable lists
			memory,
	
			// Flag to know if list was already fired
			fired,
	
			// Flag to prevent firing
			locked,
	
			// Actual callback list
			list = [],
	
			// Queue of execution data for repeatable lists
			queue = [],
	
			// Index of currently firing callback (modified by add/remove as needed)
			firingIndex = -1,
	
			// Fire callbacks
			fire = function() {
	
				// Enforce single-firing
				locked = options.once;
	
				// Execute callbacks for all pending executions,
				// respecting firingIndex overrides and runtime changes
				fired = firing = true;
				for ( ; queue.length; firingIndex = -1 ) {
					memory = queue.shift();
					while ( ++firingIndex < list.length ) {
	
						// Run callback and check for early termination
						if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
							options.stopOnFalse ) {
	
							// Jump to end and forget the data so .add doesn't re-fire
							firingIndex = list.length;
							memory = false;
						}
					}
				}
	
				// Forget the data if we're done with it
				if ( !options.memory ) {
					memory = false;
				}
	
				firing = false;
	
				// Clean up if we're done firing for good
				if ( locked ) {
	
					// Keep an empty list if we have data for future add calls
					if ( memory ) {
						list = [];
	
					// Otherwise, this object is spent
					} else {
						list = "";
					}
				}
			},
	
			// Actual Callbacks object
			self = {
	
				// Add a callback or a collection of callbacks to the list
				add: function() {
					if ( list ) {
	
						// If we have memory from a past run, we should fire after adding
						if ( memory && !firing ) {
							firingIndex = list.length - 1;
							queue.push( memory );
						}
	
						( function add( args ) {
							jQuery.each( args, function( _, arg ) {
								if ( jQuery.isFunction( arg ) ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {
	
									// Inspect recursively
									add( arg );
								}
							} );
						} )( arguments );
	
						if ( memory && !firing ) {
							fire();
						}
					}
					return this;
				},
	
				// Remove a callback from the list
				remove: function() {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );
	
							// Handle firing indexes
							if ( index <= firingIndex ) {
								firingIndex--;
							}
						}
					} );
					return this;
				},
	
				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function( fn ) {
					return fn ?
						jQuery.inArray( fn, list ) > -1 :
						list.length > 0;
				},
	
				// Remove all callbacks from the list
				empty: function() {
					if ( list ) {
						list = [];
					}
					return this;
				},
	
				// Disable .fire and .add
				// Abort any current/pending executions
				// Clear all callbacks and values
				disable: function() {
					locked = queue = [];
					list = memory = "";
					return this;
				},
				disabled: function() {
					return !list;
				},
	
				// Disable .fire
				// Also disable .add unless we have memory (since it would have no effect)
				// Abort any pending executions
				lock: function() {
					locked = queue = [];
					if ( !memory && !firing ) {
						list = memory = "";
					}
					return this;
				},
				locked: function() {
					return !!locked;
				},
	
				// Call all callbacks with the given context and arguments
				fireWith: function( context, args ) {
					if ( !locked ) {
						args = args || [];
						args = [ context, args.slice ? args.slice() : args ];
						queue.push( args );
						if ( !firing ) {
							fire();
						}
					}
					return this;
				},
	
				// Call all the callbacks with the given arguments
				fire: function() {
					self.fireWith( this, arguments );
					return this;
				},
	
				// To know if the callbacks have already been called at least once
				fired: function() {
					return !!fired;
				}
			};
	
		return self;
	};
	
	
	function Identity( v ) {
		return v;
	}
	function Thrower( ex ) {
		throw ex;
	}
	
	function adoptValue( value, resolve, reject ) {
		var method;
	
		try {
	
			// Check for promise aspect first to privilege synchronous behavior
			if ( value && jQuery.isFunction( ( method = value.promise ) ) ) {
				method.call( value ).done( resolve ).fail( reject );
	
			// Other thenables
			} else if ( value && jQuery.isFunction( ( method = value.then ) ) ) {
				method.call( value, resolve, reject );
	
			// Other non-thenables
			} else {
	
				// Support: Android 4.0 only
				// Strict mode functions invoked without .call/.apply get global-object context
				resolve.call( undefined, value );
			}
	
		// For Promises/A+, convert exceptions into rejections
		// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
		// Deferred#then to conditionally suppress rejection.
		} catch ( value ) {
	
			// Support: Android 4.0 only
			// Strict mode functions invoked without .call/.apply get global-object context
			reject.call( undefined, value );
		}
	}
	
	jQuery.extend( {
	
		Deferred: function( func ) {
			var tuples = [
	
					// action, add listener, callbacks,
					// ... .then handlers, argument index, [final state]
					[ "notify", "progress", jQuery.Callbacks( "memory" ),
						jQuery.Callbacks( "memory" ), 2 ],
					[ "resolve", "done", jQuery.Callbacks( "once memory" ),
						jQuery.Callbacks( "once memory" ), 0, "resolved" ],
					[ "reject", "fail", jQuery.Callbacks( "once memory" ),
						jQuery.Callbacks( "once memory" ), 1, "rejected" ]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					always: function() {
						deferred.done( arguments ).fail( arguments );
						return this;
					},
					"catch": function( fn ) {
						return promise.then( null, fn );
					},
	
					// Keep pipe for back-compat
					pipe: function( /* fnDone, fnFail, fnProgress */ ) {
						var fns = arguments;
	
						return jQuery.Deferred( function( newDefer ) {
							jQuery.each( tuples, function( i, tuple ) {
	
								// Map tuples (progress, done, fail) to arguments (done, fail, progress)
								var fn = jQuery.isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];
	
								// deferred.progress(function() { bind to newDefer or newDefer.notify })
								// deferred.done(function() { bind to newDefer or newDefer.resolve })
								// deferred.fail(function() { bind to newDefer or newDefer.reject })
								deferred[ tuple[ 1 ] ]( function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && jQuery.isFunction( returned.promise ) ) {
										returned.promise()
											.progress( newDefer.notify )
											.done( newDefer.resolve )
											.fail( newDefer.reject );
									} else {
										newDefer[ tuple[ 0 ] + "With" ](
											this,
											fn ? [ returned ] : arguments
										);
									}
								} );
							} );
							fns = null;
						} ).promise();
					},
					then: function( onFulfilled, onRejected, onProgress ) {
						var maxDepth = 0;
						function resolve( depth, deferred, handler, special ) {
							return function() {
								var that = this,
									args = arguments,
									mightThrow = function() {
										var returned, then;
	
										// Support: Promises/A+ section 2.3.3.3.3
										// https://promisesaplus.com/#point-59
										// Ignore double-resolution attempts
										if ( depth < maxDepth ) {
											return;
										}
	
										returned = handler.apply( that, args );
	
										// Support: Promises/A+ section 2.3.1
										// https://promisesaplus.com/#point-48
										if ( returned === deferred.promise() ) {
											throw new TypeError( "Thenable self-resolution" );
										}
	
										// Support: Promises/A+ sections 2.3.3.1, 3.5
										// https://promisesaplus.com/#point-54
										// https://promisesaplus.com/#point-75
										// Retrieve `then` only once
										then = returned &&
	
											// Support: Promises/A+ section 2.3.4
											// https://promisesaplus.com/#point-64
											// Only check objects and functions for thenability
											( typeof returned === "object" ||
												typeof returned === "function" ) &&
											returned.then;
	
										// Handle a returned thenable
										if ( jQuery.isFunction( then ) ) {
	
											// Special processors (notify) just wait for resolution
											if ( special ) {
												then.call(
													returned,
													resolve( maxDepth, deferred, Identity, special ),
													resolve( maxDepth, deferred, Thrower, special )
												);
	
											// Normal processors (resolve) also hook into progress
											} else {
	
												// ...and disregard older resolution values
												maxDepth++;
	
												then.call(
													returned,
													resolve( maxDepth, deferred, Identity, special ),
													resolve( maxDepth, deferred, Thrower, special ),
													resolve( maxDepth, deferred, Identity,
														deferred.notifyWith )
												);
											}
	
										// Handle all other returned values
										} else {
	
											// Only substitute handlers pass on context
											// and multiple values (non-spec behavior)
											if ( handler !== Identity ) {
												that = undefined;
												args = [ returned ];
											}
	
											// Process the value(s)
											// Default process is resolve
											( special || deferred.resolveWith )( that, args );
										}
									},
	
									// Only normal processors (resolve) catch and reject exceptions
									process = special ?
										mightThrow :
										function() {
											try {
												mightThrow();
											} catch ( e ) {
	
												if ( jQuery.Deferred.exceptionHook ) {
													jQuery.Deferred.exceptionHook( e,
														process.stackTrace );
												}
	
												// Support: Promises/A+ section 2.3.3.3.4.1
												// https://promisesaplus.com/#point-61
												// Ignore post-resolution exceptions
												if ( depth + 1 >= maxDepth ) {
	
													// Only substitute handlers pass on context
													// and multiple values (non-spec behavior)
													if ( handler !== Thrower ) {
														that = undefined;
														args = [ e ];
													}
	
													deferred.rejectWith( that, args );
												}
											}
										};
	
								// Support: Promises/A+ section 2.3.3.3.1
								// https://promisesaplus.com/#point-57
								// Re-resolve promises immediately to dodge false rejection from
								// subsequent errors
								if ( depth ) {
									process();
								} else {
	
									// Call an optional hook to record the stack, in case of exception
									// since it's otherwise lost when execution goes async
									if ( jQuery.Deferred.getStackHook ) {
										process.stackTrace = jQuery.Deferred.getStackHook();
									}
									window.setTimeout( process );
								}
							};
						}
	
						return jQuery.Deferred( function( newDefer ) {
	
							// progress_handlers.add( ... )
							tuples[ 0 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onProgress ) ?
										onProgress :
										Identity,
									newDefer.notifyWith
								)
							);
	
							// fulfilled_handlers.add( ... )
							tuples[ 1 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onFulfilled ) ?
										onFulfilled :
										Identity
								)
							);
	
							// rejected_handlers.add( ... )
							tuples[ 2 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onRejected ) ?
										onRejected :
										Thrower
								)
							);
						} ).promise();
					},
	
					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};
	
			// Add list-specific methods
			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 5 ];
	
				// promise.progress = list.add
				// promise.done = list.add
				// promise.fail = list.add
				promise[ tuple[ 1 ] ] = list.add;
	
				// Handle state
				if ( stateString ) {
					list.add(
						function() {
	
							// state = "resolved" (i.e., fulfilled)
							// state = "rejected"
							state = stateString;
						},
	
						// rejected_callbacks.disable
						// fulfilled_callbacks.disable
						tuples[ 3 - i ][ 2 ].disable,
	
						// progress_callbacks.lock
						tuples[ 0 ][ 2 ].lock
					);
				}
	
				// progress_handlers.fire
				// fulfilled_handlers.fire
				// rejected_handlers.fire
				list.add( tuple[ 3 ].fire );
	
				// deferred.notify = function() { deferred.notifyWith(...) }
				// deferred.resolve = function() { deferred.resolveWith(...) }
				// deferred.reject = function() { deferred.rejectWith(...) }
				deferred[ tuple[ 0 ] ] = function() {
					deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
					return this;
				};
	
				// deferred.notifyWith = list.fireWith
				// deferred.resolveWith = list.fireWith
				// deferred.rejectWith = list.fireWith
				deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
			} );
	
			// Make the deferred a promise
			promise.promise( deferred );
	
			// Call given func if any
			if ( func ) {
				func.call( deferred, deferred );
			}
	
			// All done!
			return deferred;
		},
	
		// Deferred helper
		when: function( singleValue ) {
			var
	
				// count of uncompleted subordinates
				remaining = arguments.length,
	
				// count of unprocessed arguments
				i = remaining,
	
				// subordinate fulfillment data
				resolveContexts = Array( i ),
				resolveValues = slice.call( arguments ),
	
				// the master Deferred
				master = jQuery.Deferred(),
	
				// subordinate callback factory
				updateFunc = function( i ) {
					return function( value ) {
						resolveContexts[ i ] = this;
						resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
						if ( !( --remaining ) ) {
							master.resolveWith( resolveContexts, resolveValues );
						}
					};
				};
	
			// Single- and empty arguments are adopted like Promise.resolve
			if ( remaining <= 1 ) {
				adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject );
	
				// Use .then() to unwrap secondary thenables (cf. gh-3000)
				if ( master.state() === "pending" ||
					jQuery.isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {
	
					return master.then();
				}
			}
	
			// Multiple arguments are aggregated like Promise.all array elements
			while ( i-- ) {
				adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
			}
	
			return master.promise();
		}
	} );
	
	
	// These usually indicate a programmer mistake during development,
	// warn about them ASAP rather than swallowing them by default.
	var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
	
	jQuery.Deferred.exceptionHook = function( error, stack ) {
	
		// Support: IE 8 - 9 only
		// Console exists when dev tools are open, which can happen at any time
		if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
			window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
		}
	};
	
	
	
	
	jQuery.readyException = function( error ) {
		window.setTimeout( function() {
			throw error;
		} );
	};
	
	
	
	
	// The deferred used on DOM ready
	var readyList = jQuery.Deferred();
	
	jQuery.fn.ready = function( fn ) {
	
		readyList
			.then( fn )
	
			// Wrap jQuery.readyException in a function so that the lookup
			// happens at the time of error handling instead of callback
			// registration.
			.catch( function( error ) {
				jQuery.readyException( error );
			} );
	
		return this;
	};
	
	jQuery.extend( {
	
		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,
	
		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,
	
		// Hold (or release) the ready event
		holdReady: function( hold ) {
			if ( hold ) {
				jQuery.readyWait++;
			} else {
				jQuery.ready( true );
			}
		},
	
		// Handle when the DOM is ready
		ready: function( wait ) {
	
			// Abort if there are pending holds or we're already ready
			if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
				return;
			}
	
			// Remember that the DOM is ready
			jQuery.isReady = true;
	
			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}
	
			// If there are functions bound, to execute
			readyList.resolveWith( document, [ jQuery ] );
		}
	} );
	
	jQuery.ready.then = readyList.then;
	
	// The ready event handler and self cleanup method
	function completed() {
		document.removeEventListener( "DOMContentLoaded", completed );
		window.removeEventListener( "load", completed );
		jQuery.ready();
	}
	
	// Catch cases where $(document).ready() is called
	// after the browser event has already occurred.
	// Support: IE <=9 - 10 only
	// Older IE sometimes signals "interactive" too soon
	if ( document.readyState === "complete" ||
		( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {
	
		// Handle it asynchronously to allow scripts the opportunity to delay ready
		window.setTimeout( jQuery.ready );
	
	} else {
	
		// Use the handy event callback
		document.addEventListener( "DOMContentLoaded", completed );
	
		// A fallback to window.onload, that will always work
		window.addEventListener( "load", completed );
	}
	
	
	
	
	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			len = elems.length,
			bulk = key == null;
	
		// Sets many values
		if ( jQuery.type( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				access( elems, fn, i, key[ i ], true, emptyGet, raw );
			}
	
		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;
	
			if ( !jQuery.isFunction( value ) ) {
				raw = true;
			}
	
			if ( bulk ) {
	
				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;
	
				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}
	
			if ( fn ) {
				for ( ; i < len; i++ ) {
					fn(
						elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
					);
				}
			}
		}
	
		return chainable ?
			elems :
	
			// Gets
			bulk ?
				fn.call( elems ) :
				len ? fn( elems[ 0 ], key ) : emptyGet;
	};
	var acceptData = function( owner ) {
	
		// Accepts only:
		//  - Node
		//    - Node.ELEMENT_NODE
		//    - Node.DOCUMENT_NODE
		//  - Object
		//    - Any
		return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
	};
	
	
	
	
	function Data() {
		this.expando = jQuery.expando + Data.uid++;
	}
	
	Data.uid = 1;
	
	Data.prototype = {
	
		cache: function( owner ) {
	
			// Check if the owner object already has a cache
			var value = owner[ this.expando ];
	
			// If not, create one
			if ( !value ) {
				value = {};
	
				// We can accept data for non-element nodes in modern browsers,
				// but we should not, see #8335.
				// Always return an empty object.
				if ( acceptData( owner ) ) {
	
					// If it is a node unlikely to be stringify-ed or looped over
					// use plain assignment
					if ( owner.nodeType ) {
						owner[ this.expando ] = value;
	
					// Otherwise secure it in a non-enumerable property
					// configurable must be true to allow the property to be
					// deleted when data is removed
					} else {
						Object.defineProperty( owner, this.expando, {
							value: value,
							configurable: true
						} );
					}
				}
			}
	
			return value;
		},
		set: function( owner, data, value ) {
			var prop,
				cache = this.cache( owner );
	
			// Handle: [ owner, key, value ] args
			// Always use camelCase key (gh-2257)
			if ( typeof data === "string" ) {
				cache[ jQuery.camelCase( data ) ] = value;
	
			// Handle: [ owner, { properties } ] args
			} else {
	
				// Copy the properties one-by-one to the cache object
				for ( prop in data ) {
					cache[ jQuery.camelCase( prop ) ] = data[ prop ];
				}
			}
			return cache;
		},
		get: function( owner, key ) {
			return key === undefined ?
				this.cache( owner ) :
	
				// Always use camelCase key (gh-2257)
				owner[ this.expando ] && owner[ this.expando ][ jQuery.camelCase( key ) ];
		},
		access: function( owner, key, value ) {
	
			// In cases where either:
			//
			//   1. No key was specified
			//   2. A string key was specified, but no value provided
			//
			// Take the "read" path and allow the get method to determine
			// which value to return, respectively either:
			//
			//   1. The entire cache object
			//   2. The data stored at the key
			//
			if ( key === undefined ||
					( ( key && typeof key === "string" ) && value === undefined ) ) {
	
				return this.get( owner, key );
			}
	
			// When the key is not a string, or both a key and value
			// are specified, set or extend (existing objects) with either:
			//
			//   1. An object of properties
			//   2. A key and value
			//
			this.set( owner, key, value );
	
			// Since the "set" path can have two possible entry points
			// return the expected data based on which path was taken[*]
			return value !== undefined ? value : key;
		},
		remove: function( owner, key ) {
			var i,
				cache = owner[ this.expando ];
	
			if ( cache === undefined ) {
				return;
			}
	
			if ( key !== undefined ) {
	
				// Support array or space separated string of keys
				if ( jQuery.isArray( key ) ) {
	
					// If key is an array of keys...
					// We always set camelCase keys, so remove that.
					key = key.map( jQuery.camelCase );
				} else {
					key = jQuery.camelCase( key );
	
					// If a key with the spaces exists, use it.
					// Otherwise, create an array by matching non-whitespace
					key = key in cache ?
						[ key ] :
						( key.match( rnotwhite ) || [] );
				}
	
				i = key.length;
	
				while ( i-- ) {
					delete cache[ key[ i ] ];
				}
			}
	
			// Remove the expando if there's no more data
			if ( key === undefined || jQuery.isEmptyObject( cache ) ) {
	
				// Support: Chrome <=35 - 45
				// Webkit & Blink performance suffers when deleting properties
				// from DOM nodes, so set to undefined instead
				// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
				if ( owner.nodeType ) {
					owner[ this.expando ] = undefined;
				} else {
					delete owner[ this.expando ];
				}
			}
		},
		hasData: function( owner ) {
			var cache = owner[ this.expando ];
			return cache !== undefined && !jQuery.isEmptyObject( cache );
		}
	};
	var dataPriv = new Data();
	
	var dataUser = new Data();
	
	
	
	//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014
	
	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		rmultiDash = /[A-Z]/g;
	
	function dataAttr( elem, key, data ) {
		var name;
	
		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if ( data === undefined && elem.nodeType === 1 ) {
			name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
			data = elem.getAttribute( name );
	
			if ( typeof data === "string" ) {
				try {
					data = data === "true" ? true :
						data === "false" ? false :
						data === "null" ? null :
	
						// Only convert to a number if it doesn't change the string
						+data + "" === data ? +data :
						rbrace.test( data ) ? JSON.parse( data ) :
						data;
				} catch ( e ) {}
	
				// Make sure we set the data so it isn't changed later
				dataUser.set( elem, key, data );
			} else {
				data = undefined;
			}
		}
		return data;
	}
	
	jQuery.extend( {
		hasData: function( elem ) {
			return dataUser.hasData( elem ) || dataPriv.hasData( elem );
		},
	
		data: function( elem, name, data ) {
			return dataUser.access( elem, name, data );
		},
	
		removeData: function( elem, name ) {
			dataUser.remove( elem, name );
		},
	
		// TODO: Now that all calls to _data and _removeData have been replaced
		// with direct calls to dataPriv methods, these can be deprecated.
		_data: function( elem, name, data ) {
			return dataPriv.access( elem, name, data );
		},
	
		_removeData: function( elem, name ) {
			dataPriv.remove( elem, name );
		}
	} );
	
	jQuery.fn.extend( {
		data: function( key, value ) {
			var i, name, data,
				elem = this[ 0 ],
				attrs = elem && elem.attributes;
	
			// Gets all values
			if ( key === undefined ) {
				if ( this.length ) {
					data = dataUser.get( elem );
	
					if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
						i = attrs.length;
						while ( i-- ) {
	
							// Support: IE 11 only
							// The attrs elements can be null (#14894)
							if ( attrs[ i ] ) {
								name = attrs[ i ].name;
								if ( name.indexOf( "data-" ) === 0 ) {
									name = jQuery.camelCase( name.slice( 5 ) );
									dataAttr( elem, name, data[ name ] );
								}
							}
						}
						dataPriv.set( elem, "hasDataAttrs", true );
					}
				}
	
				return data;
			}
	
			// Sets multiple values
			if ( typeof key === "object" ) {
				return this.each( function() {
					dataUser.set( this, key );
				} );
			}
	
			return access( this, function( value ) {
				var data;
	
				// The calling jQuery object (element matches) is not empty
				// (and therefore has an element appears at this[ 0 ]) and the
				// `value` parameter was not undefined. An empty jQuery object
				// will result in `undefined` for elem = this[ 0 ] which will
				// throw an exception if an attempt to read a data cache is made.
				if ( elem && value === undefined ) {
	
					// Attempt to get data from the cache
					// The key will always be camelCased in Data
					data = dataUser.get( elem, key );
					if ( data !== undefined ) {
						return data;
					}
	
					// Attempt to "discover" the data in
					// HTML5 custom data-* attrs
					data = dataAttr( elem, key );
					if ( data !== undefined ) {
						return data;
					}
	
					// We tried really hard, but the data doesn't exist.
					return;
				}
	
				// Set the data...
				this.each( function() {
	
					// We always store the camelCased key
					dataUser.set( this, key, value );
				} );
			}, null, value, arguments.length > 1, null, true );
		},
	
		removeData: function( key ) {
			return this.each( function() {
				dataUser.remove( this, key );
			} );
		}
	} );
	
	
	jQuery.extend( {
		queue: function( elem, type, data ) {
			var queue;
	
			if ( elem ) {
				type = ( type || "fx" ) + "queue";
				queue = dataPriv.get( elem, type );
	
				// Speed up dequeue by getting out quickly if this is just a lookup
				if ( data ) {
					if ( !queue || jQuery.isArray( data ) ) {
						queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
					} else {
						queue.push( data );
					}
				}
				return queue || [];
			}
		},
	
		dequeue: function( elem, type ) {
			type = type || "fx";
	
			var queue = jQuery.queue( elem, type ),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks( elem, type ),
				next = function() {
					jQuery.dequeue( elem, type );
				};
	
			// If the fx queue is dequeued, always remove the progress sentinel
			if ( fn === "inprogress" ) {
				fn = queue.shift();
				startLength--;
			}
	
			if ( fn ) {
	
				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if ( type === "fx" ) {
					queue.unshift( "inprogress" );
				}
	
				// Clear up the last queue stop function
				delete hooks.stop;
				fn.call( elem, next, hooks );
			}
	
			if ( !startLength && hooks ) {
				hooks.empty.fire();
			}
		},
	
		// Not public - generate a queueHooks object, or return the current one
		_queueHooks: function( elem, type ) {
			var key = type + "queueHooks";
			return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
				empty: jQuery.Callbacks( "once memory" ).add( function() {
					dataPriv.remove( elem, [ type + "queue", key ] );
				} )
			} );
		}
	} );
	
	jQuery.fn.extend( {
		queue: function( type, data ) {
			var setter = 2;
	
			if ( typeof type !== "string" ) {
				data = type;
				type = "fx";
				setter--;
			}
	
			if ( arguments.length < setter ) {
				return jQuery.queue( this[ 0 ], type );
			}
	
			return data === undefined ?
				this :
				this.each( function() {
					var queue = jQuery.queue( this, type, data );
	
					// Ensure a hooks for this queue
					jQuery._queueHooks( this, type );
	
					if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
						jQuery.dequeue( this, type );
					}
				} );
		},
		dequeue: function( type ) {
			return this.each( function() {
				jQuery.dequeue( this, type );
			} );
		},
		clearQueue: function( type ) {
			return this.queue( type || "fx", [] );
		},
	
		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function( type, obj ) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function() {
					if ( !( --count ) ) {
						defer.resolveWith( elements, [ elements ] );
					}
				};
	
			if ( typeof type !== "string" ) {
				obj = type;
				type = undefined;
			}
			type = type || "fx";
	
			while ( i-- ) {
				tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
				if ( tmp && tmp.empty ) {
					count++;
					tmp.empty.add( resolve );
				}
			}
			resolve();
			return defer.promise( obj );
		}
	} );
	var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;
	
	var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );
	
	
	var cssExpand = [ "Top", "Right", "Bottom", "Left" ];
	
	var isHiddenWithinTree = function( elem, el ) {
	
			// isHiddenWithinTree might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;
	
			// Inline style trumps all
			return elem.style.display === "none" ||
				elem.style.display === "" &&
	
				// Otherwise, check computed style
				// Support: Firefox <=43 - 45
				// Disconnected elements can have computed display: none, so first confirm that elem is
				// in the document.
				jQuery.contains( elem.ownerDocument, elem ) &&
	
				jQuery.css( elem, "display" ) === "none";
		};
	
	var swap = function( elem, options, callback, args ) {
		var ret, name,
			old = {};
	
		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}
	
		ret = callback.apply( elem, args || [] );
	
		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}
	
		return ret;
	};
	
	
	
	
	function adjustCSS( elem, prop, valueParts, tween ) {
		var adjusted,
			scale = 1,
			maxIterations = 20,
			currentValue = tween ?
				function() {
					return tween.cur();
				} :
				function() {
					return jQuery.css( elem, prop, "" );
				},
			initial = currentValue(),
			unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),
	
			// Starting value computation is required for potential unit mismatches
			initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
				rcssNum.exec( jQuery.css( elem, prop ) );
	
		if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {
	
			// Trust units reported by jQuery.css
			unit = unit || initialInUnit[ 3 ];
	
			// Make sure we update the tween properties later on
			valueParts = valueParts || [];
	
			// Iteratively approximate from a nonzero starting point
			initialInUnit = +initial || 1;
	
			do {
	
				// If previous iteration zeroed out, double until we get *something*.
				// Use string for doubling so we don't accidentally see scale as unchanged below
				scale = scale || ".5";
	
				// Adjust and apply
				initialInUnit = initialInUnit / scale;
				jQuery.style( elem, prop, initialInUnit + unit );
	
			// Update scale, tolerating zero or NaN from tween.cur()
			// Break the loop if scale is unchanged or perfect, or if we've just had enough.
			} while (
				scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
			);
		}
	
		if ( valueParts ) {
			initialInUnit = +initialInUnit || +initial || 0;
	
			// Apply relative offset (+=/-=) if specified
			adjusted = valueParts[ 1 ] ?
				initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
				+valueParts[ 2 ];
			if ( tween ) {
				tween.unit = unit;
				tween.start = initialInUnit;
				tween.end = adjusted;
			}
		}
		return adjusted;
	}
	
	
	var defaultDisplayMap = {};
	
	function getDefaultDisplay( elem ) {
		var temp,
			doc = elem.ownerDocument,
			nodeName = elem.nodeName,
			display = defaultDisplayMap[ nodeName ];
	
		if ( display ) {
			return display;
		}
	
		temp = doc.body.appendChild( doc.createElement( nodeName ) ),
		display = jQuery.css( temp, "display" );
	
		temp.parentNode.removeChild( temp );
	
		if ( display === "none" ) {
			display = "block";
		}
		defaultDisplayMap[ nodeName ] = display;
	
		return display;
	}
	
	function showHide( elements, show ) {
		var display, elem,
			values = [],
			index = 0,
			length = elements.length;
	
		// Determine new display value for elements that need to change
		for ( ; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}
	
			display = elem.style.display;
			if ( show ) {
	
				// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
				// check is required in this first loop unless we have a nonempty display value (either
				// inline or about-to-be-restored)
				if ( display === "none" ) {
					values[ index ] = dataPriv.get( elem, "display" ) || null;
					if ( !values[ index ] ) {
						elem.style.display = "";
					}
				}
				if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
					values[ index ] = getDefaultDisplay( elem );
				}
			} else {
				if ( display !== "none" ) {
					values[ index ] = "none";
	
					// Remember what we're overwriting
					dataPriv.set( elem, "display", display );
				}
			}
		}
	
		// Set the display of the elements in a second loop to avoid constant reflow
		for ( index = 0; index < length; index++ ) {
			if ( values[ index ] != null ) {
				elements[ index ].style.display = values[ index ];
			}
		}
	
		return elements;
	}
	
	jQuery.fn.extend( {
		show: function() {
			return showHide( this, true );
		},
		hide: function() {
			return showHide( this );
		},
		toggle: function( state ) {
			if ( typeof state === "boolean" ) {
				return state ? this.show() : this.hide();
			}
	
			return this.each( function() {
				if ( isHiddenWithinTree( this ) ) {
					jQuery( this ).show();
				} else {
					jQuery( this ).hide();
				}
			} );
		}
	} );
	var rcheckableType = ( /^(?:checkbox|radio)$/i );
	
	var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );
	
	var rscriptType = ( /^$|\/(?:java|ecma)script/i );
	
	
	
	// We have to close these tags to support XHTML (#13200)
	var wrapMap = {
	
		// Support: IE <=9 only
		option: [ 1, "<select multiple='multiple'>", "</select>" ],
	
		// XHTML parsers do not magically insert elements in the
		// same way that tag soup parsers do. So we cannot shorten
		// this by omitting <tbody> or other required elements.
		thead: [ 1, "<table>", "</table>" ],
		col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
	
		_default: [ 0, "", "" ]
	};
	
	// Support: IE <=9 only
	wrapMap.optgroup = wrapMap.option;
	
	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;
	
	
	function getAll( context, tag ) {
	
		// Support: IE <=9 - 11 only
		// Use typeof to avoid zero-argument method invocation on host objects (#15151)
		var ret = typeof context.getElementsByTagName !== "undefined" ?
				context.getElementsByTagName( tag || "*" ) :
				typeof context.querySelectorAll !== "undefined" ?
					context.querySelectorAll( tag || "*" ) :
				[];
	
		return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
			jQuery.merge( [ context ], ret ) :
			ret;
	}
	
	
	// Mark scripts as having already been evaluated
	function setGlobalEval( elems, refElements ) {
		var i = 0,
			l = elems.length;
	
		for ( ; i < l; i++ ) {
			dataPriv.set(
				elems[ i ],
				"globalEval",
				!refElements || dataPriv.get( refElements[ i ], "globalEval" )
			);
		}
	}
	
	
	var rhtml = /<|&#?\w+;/;
	
	function buildFragment( elems, context, scripts, selection, ignored ) {
		var elem, tmp, tag, wrap, contains, j,
			fragment = context.createDocumentFragment(),
			nodes = [],
			i = 0,
			l = elems.length;
	
		for ( ; i < l; i++ ) {
			elem = elems[ i ];
	
			if ( elem || elem === 0 ) {
	
				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {
	
					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );
	
				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );
	
				// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild( context.createElement( "div" ) );
	
					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
					tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];
	
					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}
	
					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, tmp.childNodes );
	
					// Remember the top-level container
					tmp = fragment.firstChild;
	
					// Ensure the created nodes are orphaned (#12392)
					tmp.textContent = "";
				}
			}
		}
	
		// Remove wrapper from fragment
		fragment.textContent = "";
	
		i = 0;
		while ( ( elem = nodes[ i++ ] ) ) {
	
			// Skip elements already in the context collection (trac-4087)
			if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
				if ( ignored ) {
					ignored.push( elem );
				}
				continue;
			}
	
			contains = jQuery.contains( elem.ownerDocument, elem );
	
			// Append to fragment
			tmp = getAll( fragment.appendChild( elem ), "script" );
	
			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}
	
			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( ( elem = tmp[ j++ ] ) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}
	
		return fragment;
	}
	
	
	( function() {
		var fragment = document.createDocumentFragment(),
			div = fragment.appendChild( document.createElement( "div" ) ),
			input = document.createElement( "input" );
	
		// Support: Android 4.0 - 4.3 only
		// Check state lost if the name is set (#11217)
		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input.setAttribute( "type", "radio" );
		input.setAttribute( "checked", "checked" );
		input.setAttribute( "name", "t" );
	
		div.appendChild( input );
	
		// Support: Android <=4.1 only
		// Older WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;
	
		// Support: IE <=11 only
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
	} )();
	var documentElement = document.documentElement;
	
	
	
	var
		rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
	
	function returnTrue() {
		return true;
	}
	
	function returnFalse() {
		return false;
	}
	
	// Support: IE <=9 only
	// See #13393 for more info
	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch ( err ) { }
	}
	
	function on( elem, types, selector, data, fn, one ) {
		var origFn, type;
	
		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {
	
			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {
	
				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				on( elem, type, selector, data, types[ type ], one );
			}
			return elem;
		}
	
		if ( data == null && fn == null ) {
	
			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {
	
				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {
	
				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return elem;
		}
	
		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {
	
				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};
	
			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return elem.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		} );
	}
	
	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {
	
		global: {},
	
		add: function( elem, types, handler, data, selector ) {
	
			var handleObjIn, eventHandle, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.get( elem );
	
			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if ( !elemData ) {
				return;
			}
	
			// Caller can pass in an object of custom data in lieu of the handler
			if ( handler.handler ) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}
	
			// Ensure that invalid selectors throw exceptions at attach time
			// Evaluate against documentElement in case elem is a non-element node (e.g., document)
			if ( selector ) {
				jQuery.find.matchesSelector( documentElement, selector );
			}
	
			// Make sure that the handler has a unique ID, used to find/remove it later
			if ( !handler.guid ) {
				handler.guid = jQuery.guid++;
			}
	
			// Init the element's event structure and main handler, if this is the first
			if ( !( events = elemData.events ) ) {
				events = elemData.events = {};
			}
			if ( !( eventHandle = elemData.handle ) ) {
				eventHandle = elemData.handle = function( e ) {
	
					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
						jQuery.event.dispatch.apply( elem, arguments ) : undefined;
				};
			}
	
			// Handle multiple events separated by a space
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();
	
				// There *must* be a type, no attaching namespace-only handlers
				if ( !type ) {
					continue;
				}
	
				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[ type ] || {};
	
				// If selector defined, determine special event api type, otherwise given type
				type = ( selector ? special.delegateType : special.bindType ) || type;
	
				// Update special based on newly reset type
				special = jQuery.event.special[ type ] || {};
	
				// handleObj is passed to all event handlers
				handleObj = jQuery.extend( {
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
					namespace: namespaces.join( "." )
				}, handleObjIn );
	
				// Init the event handler queue if we're the first
				if ( !( handlers = events[ type ] ) ) {
					handlers = events[ type ] = [];
					handlers.delegateCount = 0;
	
					// Only use addEventListener if the special events handler returns false
					if ( !special.setup ||
						special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
	
						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle );
						}
					}
				}
	
				if ( special.add ) {
					special.add.call( elem, handleObj );
	
					if ( !handleObj.handler.guid ) {
						handleObj.handler.guid = handler.guid;
					}
				}
	
				// Add to the element's handler list, delegates in front
				if ( selector ) {
					handlers.splice( handlers.delegateCount++, 0, handleObj );
				} else {
					handlers.push( handleObj );
				}
	
				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[ type ] = true;
			}
	
		},
	
		// Detach an event or set of events from an element
		remove: function( elem, types, handler, selector, mappedTypes ) {
	
			var j, origCount, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );
	
			if ( !elemData || !( events = elemData.events ) ) {
				return;
			}
	
			// Once for each type.namespace in types; type may be omitted
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();
	
				// Unbind all events (on this namespace, if provided) for the element
				if ( !type ) {
					for ( type in events ) {
						jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
					}
					continue;
				}
	
				special = jQuery.event.special[ type ] || {};
				type = ( selector ? special.delegateType : special.bindType ) || type;
				handlers = events[ type ] || [];
				tmp = tmp[ 2 ] &&
					new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );
	
				// Remove matching events
				origCount = j = handlers.length;
				while ( j-- ) {
					handleObj = handlers[ j ];
	
					if ( ( mappedTypes || origType === handleObj.origType ) &&
						( !handler || handler.guid === handleObj.guid ) &&
						( !tmp || tmp.test( handleObj.namespace ) ) &&
						( !selector || selector === handleObj.selector ||
							selector === "**" && handleObj.selector ) ) {
						handlers.splice( j, 1 );
	
						if ( handleObj.selector ) {
							handlers.delegateCount--;
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
				}
	
				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if ( origCount && !handlers.length ) {
					if ( !special.teardown ||
						special.teardown.call( elem, namespaces, elemData.handle ) === false ) {
	
						jQuery.removeEvent( elem, type, elemData.handle );
					}
	
					delete events[ type ];
				}
			}
	
			// Remove data and the expando if it's no longer used
			if ( jQuery.isEmptyObject( events ) ) {
				dataPriv.remove( elem, "handle events" );
			}
		},
	
		dispatch: function( nativeEvent ) {
	
			// Make a writable jQuery.Event from the native event object
			var event = jQuery.event.fix( nativeEvent );
	
			var i, j, ret, matched, handleObj, handlerQueue,
				args = new Array( arguments.length ),
				handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};
	
			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[ 0 ] = event;
	
			for ( i = 1; i < arguments.length; i++ ) {
				args[ i ] = arguments[ i ];
			}
	
			event.delegateTarget = this;
	
			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
				return;
			}
	
			// Determine handlers
			handlerQueue = jQuery.event.handlers.call( this, event, handlers );
	
			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
				event.currentTarget = matched.elem;
	
				j = 0;
				while ( ( handleObj = matched.handlers[ j++ ] ) &&
					!event.isImmediatePropagationStopped() ) {
	
					// Triggered event must either 1) have no namespace, or 2) have namespace(s)
					// a subset or equal to those in the bound event (both can have no namespace).
					if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {
	
						event.handleObj = handleObj;
						event.data = handleObj.data;
	
						ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
							handleObj.handler ).apply( matched.elem, args );
	
						if ( ret !== undefined ) {
							if ( ( event.result = ret ) === false ) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}
	
			// Call the postDispatch hook for the mapped type
			if ( special.postDispatch ) {
				special.postDispatch.call( this, event );
			}
	
			return event.result;
		},
	
		handlers: function( event, handlers ) {
			var i, matches, sel, handleObj,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;
	
			// Support: IE <=9
			// Find delegate handlers
			// Black-hole SVG <use> instance trees (#13180)
			//
			// Support: Firefox <=42
			// Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
			if ( delegateCount && cur.nodeType &&
				( event.type !== "click" || isNaN( event.button ) || event.button < 1 ) ) {
	
				for ( ; cur !== this; cur = cur.parentNode || this ) {
	
					// Don't check non-elements (#13208)
					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if ( cur.nodeType === 1 && ( cur.disabled !== true || event.type !== "click" ) ) {
						matches = [];
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];
	
							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";
	
							if ( matches[ sel ] === undefined ) {
								matches[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) > -1 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matches[ sel ] ) {
								matches.push( handleObj );
							}
						}
						if ( matches.length ) {
							handlerQueue.push( { elem: cur, handlers: matches } );
						}
					}
				}
			}
	
			// Add the remaining (directly-bound) handlers
			if ( delegateCount < handlers.length ) {
				handlerQueue.push( { elem: this, handlers: handlers.slice( delegateCount ) } );
			}
	
			return handlerQueue;
		},
	
		addProp: function( name, hook ) {
			Object.defineProperty( jQuery.Event.prototype, name, {
				enumerable: true,
				configurable: true,
	
				get: jQuery.isFunction( hook ) ?
					function() {
						if ( this.originalEvent ) {
								return hook( this.originalEvent );
						}
					} :
					function() {
						if ( this.originalEvent ) {
								return this.originalEvent[ name ];
						}
					},
	
				set: function( value ) {
					Object.defineProperty( this, name, {
						enumerable: true,
						configurable: true,
						writable: true,
						value: value
					} );
				}
			} );
		},
	
		fix: function( originalEvent ) {
			return originalEvent[ jQuery.expando ] ?
				originalEvent :
				new jQuery.Event( originalEvent );
		},
	
		special: {
			load: {
	
				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {
	
				// Fire native event if possible so blur/focus sequence is correct
				trigger: function() {
					if ( this !== safeActiveElement() && this.focus ) {
						this.focus();
						return false;
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if ( this === safeActiveElement() && this.blur ) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {
	
				// For checkbox, fire native event so checked state will be right
				trigger: function() {
					if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
						this.click();
						return false;
					}
				},
	
				// For cross-browser consistency, don't fire native .click() on links
				_default: function( event ) {
					return jQuery.nodeName( event.target, "a" );
				}
			},
	
			beforeunload: {
				postDispatch: function( event ) {
	
					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if ( event.result !== undefined && event.originalEvent ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		}
	};
	
	jQuery.removeEvent = function( elem, type, handle ) {
	
		// This "if" is needed for plain objects
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle );
		}
	};
	
	jQuery.Event = function( src, props ) {
	
		// Allow instantiation without the 'new' keyword
		if ( !( this instanceof jQuery.Event ) ) {
			return new jQuery.Event( src, props );
		}
	
		// Event object
		if ( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;
	
			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented ||
					src.defaultPrevented === undefined &&
	
					// Support: Android <=2.3 only
					src.returnValue === false ?
				returnTrue :
				returnFalse;
	
			// Create target properties
			// Support: Safari <=6 - 7 only
			// Target should not be a text node (#504, #13143)
			this.target = ( src.target && src.target.nodeType === 3 ) ?
				src.target.parentNode :
				src.target;
	
			this.currentTarget = src.currentTarget;
			this.relatedTarget = src.relatedTarget;
	
		// Event type
		} else {
			this.type = src;
		}
	
		// Put explicitly provided properties onto the event object
		if ( props ) {
			jQuery.extend( this, props );
		}
	
		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();
	
		// Mark it as fixed
		this[ jQuery.expando ] = true;
	};
	
	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		constructor: jQuery.Event,
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,
		isSimulated: false,
	
		preventDefault: function() {
			var e = this.originalEvent;
	
			this.isDefaultPrevented = returnTrue;
	
			if ( e && !this.isSimulated ) {
				e.preventDefault();
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;
	
			this.isPropagationStopped = returnTrue;
	
			if ( e && !this.isSimulated ) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;
	
			this.isImmediatePropagationStopped = returnTrue;
	
			if ( e && !this.isSimulated ) {
				e.stopImmediatePropagation();
			}
	
			this.stopPropagation();
		}
	};
	
	// Includes all common event props including KeyEvent and MouseEvent specific props
	jQuery.each( {
		altKey: true,
		bubbles: true,
		cancelable: true,
		changedTouches: true,
		ctrlKey: true,
		detail: true,
		eventPhase: true,
		metaKey: true,
		pageX: true,
		pageY: true,
		shiftKey: true,
		view: true,
		"char": true,
		charCode: true,
		key: true,
		keyCode: true,
		button: true,
		buttons: true,
		clientX: true,
		clientY: true,
		offsetX: true,
		offsetY: true,
		pointerId: true,
		pointerType: true,
		screenX: true,
		screenY: true,
		targetTouches: true,
		toElement: true,
		touches: true,
	
		which: function( event ) {
			var button = event.button;
	
			// Add which for key events
			if ( event.which == null && rkeyEvent.test( event.type ) ) {
				return event.charCode != null ? event.charCode : event.keyCode;
			}
	
			// Add which for click: 1 === left; 2 === middle; 3 === right
			if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
				return ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
			}
	
			return event.which;
		}
	}, jQuery.event.addProp );
	
	// Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	jQuery.each( {
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function( orig, fix ) {
		jQuery.event.special[ orig ] = {
			delegateType: fix,
			bindType: fix,
	
			handle: function( event ) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;
	
				// For mouseenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply( this, arguments );
					event.type = fix;
				}
				return ret;
			}
		};
	} );
	
	jQuery.fn.extend( {
	
		on: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn );
		},
		one: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn, 1 );
		},
		off: function( types, selector, fn ) {
			var handleObj, type;
			if ( types && types.preventDefault && types.handleObj ) {
	
				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery( types.delegateTarget ).off(
					handleObj.namespace ?
						handleObj.origType + "." + handleObj.namespace :
						handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if ( typeof types === "object" ) {
	
				// ( types-object [, selector] )
				for ( type in types ) {
					this.off( type, selector, types[ type ] );
				}
				return this;
			}
			if ( selector === false || typeof selector === "function" ) {
	
				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if ( fn === false ) {
				fn = returnFalse;
			}
			return this.each( function() {
				jQuery.event.remove( this, types, fn, selector );
			} );
		}
	} );
	
	
	var
	
		/* eslint-disable max-len */
	
		// See https://github.com/eslint/eslint/issues/3229
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
	
		/* eslint-enable */
	
		// Support: IE <=10 - 11, Edge 12 - 13
		// In IE/Edge using regex groups here causes severe slowdowns.
		// See https://connect.microsoft.com/IE/feedback/details/1736512/
		rnoInnerhtml = /<script|<style|<link/i,
	
		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rscriptTypeMasked = /^true\/(.*)/,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
	
	function manipulationTarget( elem, content ) {
		if ( jQuery.nodeName( elem, "table" ) &&
			jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {
	
			return elem.getElementsByTagName( "tbody" )[ 0 ] || elem;
		}
	
		return elem;
	}
	
	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		var match = rscriptTypeMasked.exec( elem.type );
	
		if ( match ) {
			elem.type = match[ 1 ];
		} else {
			elem.removeAttribute( "type" );
		}
	
		return elem;
	}
	
	function cloneCopyEvent( src, dest ) {
		var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;
	
		if ( dest.nodeType !== 1 ) {
			return;
		}
	
		// 1. Copy private data: events, handlers, etc.
		if ( dataPriv.hasData( src ) ) {
			pdataOld = dataPriv.access( src );
			pdataCur = dataPriv.set( dest, pdataOld );
			events = pdataOld.events;
	
			if ( events ) {
				delete pdataCur.handle;
				pdataCur.events = {};
	
				for ( type in events ) {
					for ( i = 0, l = events[ type ].length; i < l; i++ ) {
						jQuery.event.add( dest, type, events[ type ][ i ] );
					}
				}
			}
		}
	
		// 2. Copy user data
		if ( dataUser.hasData( src ) ) {
			udataOld = dataUser.access( src );
			udataCur = jQuery.extend( {}, udataOld );
	
			dataUser.set( dest, udataCur );
		}
	}
	
	// Fix IE bugs, see support tests
	function fixInput( src, dest ) {
		var nodeName = dest.nodeName.toLowerCase();
	
		// Fails to persist the checked state of a cloned checkbox or radio button.
		if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
			dest.checked = src.checked;
	
		// Fails to return the selected option to the default selected state when cloning options
		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}
	
	function domManip( collection, args, callback, ignored ) {
	
		// Flatten any nested arrays
		args = concat.apply( [], args );
	
		var fragment, first, scripts, hasScripts, node, doc,
			i = 0,
			l = collection.length,
			iNoClone = l - 1,
			value = args[ 0 ],
			isFunction = jQuery.isFunction( value );
	
		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return collection.each( function( index ) {
				var self = collection.eq( index );
				if ( isFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				domManip( self, args, callback, ignored );
			} );
		}
	
		if ( l ) {
			fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
			first = fragment.firstChild;
	
			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}
	
			// Require either new content or an interest in ignored elements to invoke the callback
			if ( first || ignored ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;
	
				// Use the original fragment for the last item
				// instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;
	
					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );
	
						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {
	
							// Support: Android <=4.0 only, PhantomJS 1 only
							// push.apply(_, arraylike) throws on ancient WebKit
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}
	
					callback.call( collection[ i ], node, i );
				}
	
				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;
	
					// Reenable scripts
					jQuery.map( scripts, restoreScript );
	
					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!dataPriv.access( node, "globalEval" ) &&
							jQuery.contains( doc, node ) ) {
	
							if ( node.src ) {
	
								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								DOMEval( node.textContent.replace( rcleanScript, "" ), doc );
							}
						}
					}
				}
			}
		}
	
		return collection;
	}
	
	function remove( elem, selector, keepData ) {
		var node,
			nodes = selector ? jQuery.filter( selector, elem ) : elem,
			i = 0;
	
		for ( ; ( node = nodes[ i ] ) != null; i++ ) {
			if ( !keepData && node.nodeType === 1 ) {
				jQuery.cleanData( getAll( node ) );
			}
	
			if ( node.parentNode ) {
				if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
					setGlobalEval( getAll( node, "script" ) );
				}
				node.parentNode.removeChild( node );
			}
		}
	
		return elem;
	}
	
	jQuery.extend( {
		htmlPrefilter: function( html ) {
			return html.replace( rxhtmlTag, "<$1></$2>" );
		},
	
		clone: function( elem, dataAndEvents, deepDataAndEvents ) {
			var i, l, srcElements, destElements,
				clone = elem.cloneNode( true ),
				inPage = jQuery.contains( elem.ownerDocument, elem );
	
			// Fix IE cloning issues
			if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
					!jQuery.isXMLDoc( elem ) ) {
	
				// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
				destElements = getAll( clone );
				srcElements = getAll( elem );
	
				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					fixInput( srcElements[ i ], destElements[ i ] );
				}
			}
	
			// Copy the events from the original to the clone
			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );
	
					for ( i = 0, l = srcElements.length; i < l; i++ ) {
						cloneCopyEvent( srcElements[ i ], destElements[ i ] );
					}
				} else {
					cloneCopyEvent( elem, clone );
				}
			}
	
			// Preserve script evaluation history
			destElements = getAll( clone, "script" );
			if ( destElements.length > 0 ) {
				setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
			}
	
			// Return the cloned set
			return clone;
		},
	
		cleanData: function( elems ) {
			var data, elem, type,
				special = jQuery.event.special,
				i = 0;
	
			for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
				if ( acceptData( elem ) ) {
					if ( ( data = elem[ dataPriv.expando ] ) ) {
						if ( data.events ) {
							for ( type in data.events ) {
								if ( special[ type ] ) {
									jQuery.event.remove( elem, type );
	
								// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent( elem, type, data.handle );
								}
							}
						}
	
						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataPriv.expando ] = undefined;
					}
					if ( elem[ dataUser.expando ] ) {
	
						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataUser.expando ] = undefined;
					}
				}
			}
		}
	} );
	
	jQuery.fn.extend( {
		detach: function( selector ) {
			return remove( this, selector, true );
		},
	
		remove: function( selector ) {
			return remove( this, selector );
		},
	
		text: function( value ) {
			return access( this, function( value ) {
				return value === undefined ?
					jQuery.text( this ) :
					this.empty().each( function() {
						if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
							this.textContent = value;
						}
					} );
			}, null, value, arguments.length );
		},
	
		append: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.appendChild( elem );
				}
			} );
		},
	
		prepend: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.insertBefore( elem, target.firstChild );
				}
			} );
		},
	
		before: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this );
				}
			} );
		},
	
		after: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this.nextSibling );
				}
			} );
		},
	
		empty: function() {
			var elem,
				i = 0;
	
			for ( ; ( elem = this[ i ] ) != null; i++ ) {
				if ( elem.nodeType === 1 ) {
	
					// Prevent memory leaks
					jQuery.cleanData( getAll( elem, false ) );
	
					// Remove any remaining nodes
					elem.textContent = "";
				}
			}
	
			return this;
		},
	
		clone: function( dataAndEvents, deepDataAndEvents ) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
	
			return this.map( function() {
				return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
			} );
		},
	
		html: function( value ) {
			return access( this, function( value ) {
				var elem = this[ 0 ] || {},
					i = 0,
					l = this.length;
	
				if ( value === undefined && elem.nodeType === 1 ) {
					return elem.innerHTML;
				}
	
				// See if we can take a shortcut and just use innerHTML
				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {
	
					value = jQuery.htmlPrefilter( value );
	
					try {
						for ( ; i < l; i++ ) {
							elem = this[ i ] || {};
	
							// Remove element nodes and prevent memory leaks
							if ( elem.nodeType === 1 ) {
								jQuery.cleanData( getAll( elem, false ) );
								elem.innerHTML = value;
							}
						}
	
						elem = 0;
	
					// If using innerHTML throws an exception, use the fallback method
					} catch ( e ) {}
				}
	
				if ( elem ) {
					this.empty().append( value );
				}
			}, null, value, arguments.length );
		},
	
		replaceWith: function() {
			var ignored = [];
	
			// Make the changes, replacing each non-ignored context element with the new content
			return domManip( this, arguments, function( elem ) {
				var parent = this.parentNode;
	
				if ( jQuery.inArray( this, ignored ) < 0 ) {
					jQuery.cleanData( getAll( this ) );
					if ( parent ) {
						parent.replaceChild( elem, this );
					}
				}
	
			// Force callback invocation
			}, ignored );
		}
	} );
	
	jQuery.each( {
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var elems,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1,
				i = 0;
	
			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone( true );
				jQuery( insert[ i ] )[ original ]( elems );
	
				// Support: Android <=4.0 only, PhantomJS 1 only
				// .get() because push.apply(_, arraylike) throws on ancient WebKit
				push.apply( ret, elems.get() );
			}
	
			return this.pushStack( ret );
		};
	} );
	var rmargin = ( /^margin/ );
	
	var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );
	
	var getStyles = function( elem ) {
	
			// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
			// IE throws on elements created in popups
			// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
			var view = elem.ownerDocument.defaultView;
	
			if ( !view || !view.opener ) {
				view = window;
			}
	
			return view.getComputedStyle( elem );
		};
	
	
	
	( function() {
	
		// Executing both pixelPosition & boxSizingReliable tests require only one layout
		// so they're executed at the same time to save the second computation.
		function computeStyleTests() {
	
			// This is a singleton, we need to execute it only once
			if ( !div ) {
				return;
			}
	
			div.style.cssText =
				"box-sizing:border-box;" +
				"position:relative;display:block;" +
				"margin:auto;border:1px;padding:1px;" +
				"top:1%;width:50%";
			div.innerHTML = "";
			documentElement.appendChild( container );
	
			var divStyle = window.getComputedStyle( div );
			pixelPositionVal = divStyle.top !== "1%";
	
			// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
			reliableMarginLeftVal = divStyle.marginLeft === "2px";
			boxSizingReliableVal = divStyle.width === "4px";
	
			// Support: Android 4.0 - 4.3 only
			// Some styles come back with percentage values, even though they shouldn't
			div.style.marginRight = "50%";
			pixelMarginRightVal = divStyle.marginRight === "4px";
	
			documentElement.removeChild( container );
	
			// Nullify the div so it wouldn't be stored in the memory and
			// it will also be a sign that checks already performed
			div = null;
		}
	
		var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
			container = document.createElement( "div" ),
			div = document.createElement( "div" );
	
		// Finish early in limited (non-browser) environments
		if ( !div.style ) {
			return;
		}
	
		// Support: IE <=9 - 11 only
		// Style of cloned element affects source element cloned (#8908)
		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";
	
		container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
			"padding:0;margin-top:1px;position:absolute";
		container.appendChild( div );
	
		jQuery.extend( support, {
			pixelPosition: function() {
				computeStyleTests();
				return pixelPositionVal;
			},
			boxSizingReliable: function() {
				computeStyleTests();
				return boxSizingReliableVal;
			},
			pixelMarginRight: function() {
				computeStyleTests();
				return pixelMarginRightVal;
			},
			reliableMarginLeft: function() {
				computeStyleTests();
				return reliableMarginLeftVal;
			}
		} );
	} )();
	
	
	function curCSS( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,
			style = elem.style;
	
		computed = computed || getStyles( elem );
	
		// Support: IE <=9 only
		// getPropertyValue is only needed for .css('filter') (#12537)
		if ( computed ) {
			ret = computed.getPropertyValue( name ) || computed[ name ];
	
			if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
				ret = jQuery.style( elem, name );
			}
	
			// A tribute to the "awesome hack by Dean Edwards"
			// Android Browser returns percentage for some values,
			// but width seems to be reliably pixels.
			// This is against the CSSOM draft spec:
			// https://drafts.csswg.org/cssom/#resolved-values
			if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {
	
				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;
	
				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;
	
				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}
	
		return ret !== undefined ?
	
			// Support: IE <=9 - 11 only
			// IE returns zIndex value as an integer.
			ret + "" :
			ret;
	}
	
	
	function addGetHookIf( conditionFn, hookFn ) {
	
		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function() {
				if ( conditionFn() ) {
	
					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}
	
				// Hook needed; redefine it so that the support test is not executed again.
				return ( this.get = hookFn ).apply( this, arguments );
			}
		};
	}
	
	
	var
	
		// Swappable if display is none or starts with table
		// except "table", "table-cell", or "table-caption"
		// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,
		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},
	
		cssPrefixes = [ "Webkit", "Moz", "ms" ],
		emptyStyle = document.createElement( "div" ).style;
	
	// Return a css property mapped to a potentially vendor prefixed property
	function vendorPropName( name ) {
	
		// Shortcut for names that are not vendor prefixed
		if ( name in emptyStyle ) {
			return name;
		}
	
		// Check for vendor prefixed names
		var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
			i = cssPrefixes.length;
	
		while ( i-- ) {
			name = cssPrefixes[ i ] + capName;
			if ( name in emptyStyle ) {
				return name;
			}
		}
	}
	
	function setPositiveNumber( elem, value, subtract ) {
	
		// Any relative (+/-) values have already been
		// normalized at this point
		var matches = rcssNum.exec( value );
		return matches ?
	
			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
			value;
	}
	
	function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
		var i = extra === ( isBorderBox ? "border" : "content" ) ?
	
			// If we already have the right measurement, avoid augmentation
			4 :
	
			// Otherwise initialize for horizontal or vertical properties
			name === "width" ? 1 : 0,
	
			val = 0;
	
		for ( ; i < 4; i += 2 ) {
	
			// Both box models exclude margin, so add it if we want it
			if ( extra === "margin" ) {
				val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
			}
	
			if ( isBorderBox ) {
	
				// border-box includes padding, so remove it if we want content
				if ( extra === "content" ) {
					val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
				}
	
				// At this point, extra isn't border nor margin, so remove border
				if ( extra !== "margin" ) {
					val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			} else {
	
				// At this point, extra isn't content, so add padding
				val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
	
				// At this point, extra isn't content nor padding, so add border
				if ( extra !== "padding" ) {
					val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			}
		}
	
		return val;
	}
	
	function getWidthOrHeight( elem, name, extra ) {
	
		// Start with offset property, which is equivalent to the border-box value
		var val,
			valueIsBorderBox = true,
			styles = getStyles( elem ),
			isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";
	
		// Support: IE <=11 only
		// Running getBoundingClientRect on a disconnected node
		// in IE throws an error.
		if ( elem.getClientRects().length ) {
			val = elem.getBoundingClientRect()[ name ];
		}
	
		// Some non-html elements return undefined for offsetWidth, so check for null/undefined
		// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
		// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
		if ( val <= 0 || val == null ) {
	
			// Fall back to computed then uncomputed css if necessary
			val = curCSS( elem, name, styles );
			if ( val < 0 || val == null ) {
				val = elem.style[ name ];
			}
	
			// Computed unit is not pixels. Stop here and return.
			if ( rnumnonpx.test( val ) ) {
				return val;
			}
	
			// Check for style in case a browser which returns unreliable values
			// for getComputedStyle silently falls back to the reliable elem.style
			valueIsBorderBox = isBorderBox &&
				( support.boxSizingReliable() || val === elem.style[ name ] );
	
			// Normalize "", auto, and prepare for extra
			val = parseFloat( val ) || 0;
		}
	
		// Use the active box-sizing model to add/subtract irrelevant styles
		return ( val +
			augmentWidthOrHeight(
				elem,
				name,
				extra || ( isBorderBox ? "border" : "content" ),
				valueIsBorderBox,
				styles
			)
		) + "px";
	}
	
	jQuery.extend( {
	
		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function( elem, computed ) {
					if ( computed ) {
	
						// We should always get a number back from opacity
						var ret = curCSS( elem, "opacity" );
						return ret === "" ? "1" : ret;
					}
				}
			}
		},
	
		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"animationIterationCount": true,
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},
	
		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {
			"float": "cssFloat"
		},
	
		// Get and set the style property on a DOM Node
		style: function( elem, name, value, extra ) {
	
			// Don't set styles on text and comment nodes
			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
				return;
			}
	
			// Make sure that we're working with the right name
			var ret, type, hooks,
				origName = jQuery.camelCase( name ),
				style = elem.style;
	
			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );
	
			// Gets hook for the prefixed version, then unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];
	
			// Check if we're setting a value
			if ( value !== undefined ) {
				type = typeof value;
	
				// Convert "+=" or "-=" to relative numbers (#7345)
				if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
					value = adjustCSS( elem, name, ret );
	
					// Fixes bug #9237
					type = "number";
				}
	
				// Make sure that null and NaN values aren't set (#7116)
				if ( value == null || value !== value ) {
					return;
				}
	
				// If a number was passed in, add the unit (except for certain CSS properties)
				if ( type === "number" ) {
					value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
				}
	
				// background-* props affect original clone's values
				if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
					style[ name ] = "inherit";
				}
	
				// If a hook was provided, use that value, otherwise just set the specified value
				if ( !hooks || !( "set" in hooks ) ||
					( value = hooks.set( elem, value, extra ) ) !== undefined ) {
	
					style[ name ] = value;
				}
	
			} else {
	
				// If a hook was provided get the non-computed value from there
				if ( hooks && "get" in hooks &&
					( ret = hooks.get( elem, false, extra ) ) !== undefined ) {
	
					return ret;
				}
	
				// Otherwise just get the value from the style object
				return style[ name ];
			}
		},
	
		css: function( elem, name, extra, styles ) {
			var val, num, hooks,
				origName = jQuery.camelCase( name );
	
			// Make sure that we're working with the right name
			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );
	
			// Try prefixed name followed by the unprefixed name
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];
	
			// If a hook was provided get the computed value from there
			if ( hooks && "get" in hooks ) {
				val = hooks.get( elem, true, extra );
			}
	
			// Otherwise, if a way to get the computed value exists, use that
			if ( val === undefined ) {
				val = curCSS( elem, name, styles );
			}
	
			// Convert "normal" to computed value
			if ( val === "normal" && name in cssNormalTransform ) {
				val = cssNormalTransform[ name ];
			}
	
			// Make numeric if forced or a qualifier was provided and val looks numeric
			if ( extra === "" || extra ) {
				num = parseFloat( val );
				return extra === true || isFinite( num ) ? num || 0 : val;
			}
			return val;
		}
	} );
	
	jQuery.each( [ "height", "width" ], function( i, name ) {
		jQuery.cssHooks[ name ] = {
			get: function( elem, computed, extra ) {
				if ( computed ) {
	
					// Certain elements can have dimension info if we invisibly show them
					// but it must have a current display style that would benefit
					return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&
	
						// Support: Safari 8+
						// Table columns in Safari have non-zero offsetWidth & zero
						// getBoundingClientRect().width unless display is changed.
						// Support: IE <=11 only
						// Running getBoundingClientRect on a disconnected node
						// in IE throws an error.
						( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
							swap( elem, cssShow, function() {
								return getWidthOrHeight( elem, name, extra );
							} ) :
							getWidthOrHeight( elem, name, extra );
				}
			},
	
			set: function( elem, value, extra ) {
				var matches,
					styles = extra && getStyles( elem ),
					subtract = extra && augmentWidthOrHeight(
						elem,
						name,
						extra,
						jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
						styles
					);
	
				// Convert to pixels if value adjustment is needed
				if ( subtract && ( matches = rcssNum.exec( value ) ) &&
					( matches[ 3 ] || "px" ) !== "px" ) {
	
					elem.style[ name ] = value;
					value = jQuery.css( elem, name );
				}
	
				return setPositiveNumber( elem, value, subtract );
			}
		};
	} );
	
	jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
		function( elem, computed ) {
			if ( computed ) {
				return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
					elem.getBoundingClientRect().left -
						swap( elem, { marginLeft: 0 }, function() {
							return elem.getBoundingClientRect().left;
						} )
					) + "px";
			}
		}
	);
	
	// These hooks are used by animate to expand properties
	jQuery.each( {
		margin: "",
		padding: "",
		border: "Width"
	}, function( prefix, suffix ) {
		jQuery.cssHooks[ prefix + suffix ] = {
			expand: function( value ) {
				var i = 0,
					expanded = {},
	
					// Assumes a single number if not a string
					parts = typeof value === "string" ? value.split( " " ) : [ value ];
	
				for ( ; i < 4; i++ ) {
					expanded[ prefix + cssExpand[ i ] + suffix ] =
						parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
				}
	
				return expanded;
			}
		};
	
		if ( !rmargin.test( prefix ) ) {
			jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
		}
	} );
	
	jQuery.fn.extend( {
		css: function( name, value ) {
			return access( this, function( elem, name, value ) {
				var styles, len,
					map = {},
					i = 0;
	
				if ( jQuery.isArray( name ) ) {
					styles = getStyles( elem );
					len = name.length;
	
					for ( ; i < len; i++ ) {
						map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
					}
	
					return map;
				}
	
				return value !== undefined ?
					jQuery.style( elem, name, value ) :
					jQuery.css( elem, name );
			}, name, value, arguments.length > 1 );
		}
	} );
	
	
	function Tween( elem, options, prop, end, easing ) {
		return new Tween.prototype.init( elem, options, prop, end, easing );
	}
	jQuery.Tween = Tween;
	
	Tween.prototype = {
		constructor: Tween,
		init: function( elem, options, prop, end, easing, unit ) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || jQuery.easing._default;
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
		},
		cur: function() {
			var hooks = Tween.propHooks[ this.prop ];
	
			return hooks && hooks.get ?
				hooks.get( this ) :
				Tween.propHooks._default.get( this );
		},
		run: function( percent ) {
			var eased,
				hooks = Tween.propHooks[ this.prop ];
	
			if ( this.options.duration ) {
				this.pos = eased = jQuery.easing[ this.easing ](
					percent, this.options.duration * percent, 0, 1, this.options.duration
				);
			} else {
				this.pos = eased = percent;
			}
			this.now = ( this.end - this.start ) * eased + this.start;
	
			if ( this.options.step ) {
				this.options.step.call( this.elem, this.now, this );
			}
	
			if ( hooks && hooks.set ) {
				hooks.set( this );
			} else {
				Tween.propHooks._default.set( this );
			}
			return this;
		}
	};
	
	Tween.prototype.init.prototype = Tween.prototype;
	
	Tween.propHooks = {
		_default: {
			get: function( tween ) {
				var result;
	
				// Use a property on the element directly when it is not a DOM element,
				// or when there is no matching style property that exists.
				if ( tween.elem.nodeType !== 1 ||
					tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
					return tween.elem[ tween.prop ];
				}
	
				// Passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails.
				// Simple values such as "10px" are parsed to Float;
				// complex values such as "rotate(1rad)" are returned as-is.
				result = jQuery.css( tween.elem, tween.prop, "" );
	
				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function( tween ) {
	
				// Use step hook for back compat.
				// Use cssHook if its there.
				// Use .style if available and use plain properties where available.
				if ( jQuery.fx.step[ tween.prop ] ) {
					jQuery.fx.step[ tween.prop ]( tween );
				} else if ( tween.elem.nodeType === 1 &&
					( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
						jQuery.cssHooks[ tween.prop ] ) ) {
					jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
				} else {
					tween.elem[ tween.prop ] = tween.now;
				}
			}
		}
	};
	
	// Support: IE <=9 only
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function( tween ) {
			if ( tween.elem.nodeType && tween.elem.parentNode ) {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	};
	
	jQuery.easing = {
		linear: function( p ) {
			return p;
		},
		swing: function( p ) {
			return 0.5 - Math.cos( p * Math.PI ) / 2;
		},
		_default: "swing"
	};
	
	jQuery.fx = Tween.prototype.init;
	
	// Back compat <1.8 extension point
	jQuery.fx.step = {};
	
	
	
	
	var
		fxNow, timerId,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rrun = /queueHooks$/;
	
	function raf() {
		if ( timerId ) {
			window.requestAnimationFrame( raf );
			jQuery.fx.tick();
		}
	}
	
	// Animations created synchronously will run synchronously
	function createFxNow() {
		window.setTimeout( function() {
			fxNow = undefined;
		} );
		return ( fxNow = jQuery.now() );
	}
	
	// Generate parameters to create a standard animation
	function genFx( type, includeWidth ) {
		var which,
			i = 0,
			attrs = { height: type };
	
		// If we include width, step value is 1 to do all cssExpand values,
		// otherwise step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for ( ; i < 4; i += 2 - includeWidth ) {
			which = cssExpand[ i ];
			attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
		}
	
		if ( includeWidth ) {
			attrs.opacity = attrs.width = type;
		}
	
		return attrs;
	}
	
	function createTween( value, prop, animation ) {
		var tween,
			collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {
	
				// We're done with this property
				return tween;
			}
		}
	}
	
	function defaultPrefilter( elem, props, opts ) {
		var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
			isBox = "width" in props || "height" in props,
			anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHiddenWithinTree( elem ),
			dataShow = dataPriv.get( elem, "fxshow" );
	
		// Queue-skipping animations hijack the fx hooks
		if ( !opts.queue ) {
			hooks = jQuery._queueHooks( elem, "fx" );
			if ( hooks.unqueued == null ) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function() {
					if ( !hooks.unqueued ) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;
	
			anim.always( function() {
	
				// Ensure the complete handler is called before this completes
				anim.always( function() {
					hooks.unqueued--;
					if ( !jQuery.queue( elem, "fx" ).length ) {
						hooks.empty.fire();
					}
				} );
			} );
		}
	
		// Detect show/hide animations
		for ( prop in props ) {
			value = props[ prop ];
			if ( rfxtypes.test( value ) ) {
				delete props[ prop ];
				toggle = toggle || value === "toggle";
				if ( value === ( hidden ? "hide" : "show" ) ) {
	
					// Pretend to be hidden if this is a "show" and
					// there is still data from a stopped show/hide
					if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
						hidden = true;
	
					// Ignore all other no-op show/hide data
					} else {
						continue;
					}
				}
				orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
			}
		}
	
		// Bail out if this is a no-op like .hide().hide()
		propTween = !jQuery.isEmptyObject( props );
		if ( !propTween && jQuery.isEmptyObject( orig ) ) {
			return;
		}
	
		// Restrict "overflow" and "display" styles during box animations
		if ( isBox && elem.nodeType === 1 ) {
	
			// Support: IE <=9 - 11, Edge 12 - 13
			// Record all 3 overflow attributes because IE does not infer the shorthand
			// from identically-valued overflowX and overflowY
			opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];
	
			// Identify a display type, preferring old show/hide data over the CSS cascade
			restoreDisplay = dataShow && dataShow.display;
			if ( restoreDisplay == null ) {
				restoreDisplay = dataPriv.get( elem, "display" );
			}
			display = jQuery.css( elem, "display" );
			if ( display === "none" ) {
				if ( restoreDisplay ) {
					display = restoreDisplay;
				} else {
	
					// Get nonempty value(s) by temporarily forcing visibility
					showHide( [ elem ], true );
					restoreDisplay = elem.style.display || restoreDisplay;
					display = jQuery.css( elem, "display" );
					showHide( [ elem ] );
				}
			}
	
			// Animate inline elements as inline-block
			if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
				if ( jQuery.css( elem, "float" ) === "none" ) {
	
					// Restore the original display value at the end of pure show/hide animations
					if ( !propTween ) {
						anim.done( function() {
							style.display = restoreDisplay;
						} );
						if ( restoreDisplay == null ) {
							display = style.display;
							restoreDisplay = display === "none" ? "" : display;
						}
					}
					style.display = "inline-block";
				}
			}
		}
	
		if ( opts.overflow ) {
			style.overflow = "hidden";
			anim.always( function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			} );
		}
	
		// Implement show/hide animations
		propTween = false;
		for ( prop in orig ) {
	
			// General show/hide setup for this element animation
			if ( !propTween ) {
				if ( dataShow ) {
					if ( "hidden" in dataShow ) {
						hidden = dataShow.hidden;
					}
				} else {
					dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
				}
	
				// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
				if ( toggle ) {
					dataShow.hidden = !hidden;
				}
	
				// Show elements before animating them
				if ( hidden ) {
					showHide( [ elem ], true );
				}
	
				/* eslint-disable no-loop-func */
	
				anim.done( function() {
	
				/* eslint-enable no-loop-func */
	
					// The final step of a "hide" animation is actually hiding the element
					if ( !hidden ) {
						showHide( [ elem ] );
					}
					dataPriv.remove( elem, "fxshow" );
					for ( prop in orig ) {
						jQuery.style( elem, prop, orig[ prop ] );
					}
				} );
			}
	
			// Per-property setup
			propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = propTween.start;
				if ( hidden ) {
					propTween.end = propTween.start;
					propTween.start = 0;
				}
			}
		}
	}
	
	function propFilter( props, specialEasing ) {
		var index, name, easing, value, hooks;
	
		// camelCase, specialEasing and expand cssHook pass
		for ( index in props ) {
			name = jQuery.camelCase( index );
			easing = specialEasing[ name ];
			value = props[ index ];
			if ( jQuery.isArray( value ) ) {
				easing = value[ 1 ];
				value = props[ index ] = value[ 0 ];
			}
	
			if ( index !== name ) {
				props[ name ] = value;
				delete props[ index ];
			}
	
			hooks = jQuery.cssHooks[ name ];
			if ( hooks && "expand" in hooks ) {
				value = hooks.expand( value );
				delete props[ name ];
	
				// Not quite $.extend, this won't overwrite existing keys.
				// Reusing 'index' because we have the correct "name"
				for ( index in value ) {
					if ( !( index in props ) ) {
						props[ index ] = value[ index ];
						specialEasing[ index ] = easing;
					}
				}
			} else {
				specialEasing[ name ] = easing;
			}
		}
	}
	
	function Animation( elem, properties, options ) {
		var result,
			stopped,
			index = 0,
			length = Animation.prefilters.length,
			deferred = jQuery.Deferred().always( function() {
	
				// Don't match elem in the :animated selector
				delete tick.elem;
			} ),
			tick = function() {
				if ( stopped ) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),
	
					// Support: Android 2.3 only
					// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;
	
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( percent );
				}
	
				deferred.notifyWith( elem, [ animation, percent, remaining ] );
	
				if ( percent < 1 && length ) {
					return remaining;
				} else {
					deferred.resolveWith( elem, [ animation ] );
					return false;
				}
			},
			animation = deferred.promise( {
				elem: elem,
				props: jQuery.extend( {}, properties ),
				opts: jQuery.extend( true, {
					specialEasing: {},
					easing: jQuery.easing._default
				}, options ),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function( prop, end ) {
					var tween = jQuery.Tween( elem, animation.opts, prop, end,
							animation.opts.specialEasing[ prop ] || animation.opts.easing );
					animation.tweens.push( tween );
					return tween;
				},
				stop: function( gotoEnd ) {
					var index = 0,
	
						// If we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
					if ( stopped ) {
						return this;
					}
					stopped = true;
					for ( ; index < length; index++ ) {
						animation.tweens[ index ].run( 1 );
					}
	
					// Resolve when we played the last frame; otherwise, reject
					if ( gotoEnd ) {
						deferred.notifyWith( elem, [ animation, 1, 0 ] );
						deferred.resolveWith( elem, [ animation, gotoEnd ] );
					} else {
						deferred.rejectWith( elem, [ animation, gotoEnd ] );
					}
					return this;
				}
			} ),
			props = animation.props;
	
		propFilter( props, animation.opts.specialEasing );
	
		for ( ; index < length; index++ ) {
			result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
			if ( result ) {
				if ( jQuery.isFunction( result.stop ) ) {
					jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
						jQuery.proxy( result.stop, result );
				}
				return result;
			}
		}
	
		jQuery.map( props, createTween, animation );
	
		if ( jQuery.isFunction( animation.opts.start ) ) {
			animation.opts.start.call( elem, animation );
		}
	
		jQuery.fx.timer(
			jQuery.extend( tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			} )
		);
	
		// attach callbacks from options
		return animation.progress( animation.opts.progress )
			.done( animation.opts.done, animation.opts.complete )
			.fail( animation.opts.fail )
			.always( animation.opts.always );
	}
	
	jQuery.Animation = jQuery.extend( Animation, {
	
		tweeners: {
			"*": [ function( prop, value ) {
				var tween = this.createTween( prop, value );
				adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
				return tween;
			} ]
		},
	
		tweener: function( props, callback ) {
			if ( jQuery.isFunction( props ) ) {
				callback = props;
				props = [ "*" ];
			} else {
				props = props.match( rnotwhite );
			}
	
			var prop,
				index = 0,
				length = props.length;
	
			for ( ; index < length; index++ ) {
				prop = props[ index ];
				Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
				Animation.tweeners[ prop ].unshift( callback );
			}
		},
	
		prefilters: [ defaultPrefilter ],
	
		prefilter: function( callback, prepend ) {
			if ( prepend ) {
				Animation.prefilters.unshift( callback );
			} else {
				Animation.prefilters.push( callback );
			}
		}
	} );
	
	jQuery.speed = function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
		};
	
		// Go to the end state if fx are off or if document is hidden
		if ( jQuery.fx.off || document.hidden ) {
			opt.duration = 0;
	
		} else {
			opt.duration = typeof opt.duration === "number" ?
				opt.duration : opt.duration in jQuery.fx.speeds ?
					jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;
		}
	
		// Normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}
	
		// Queueing
		opt.old = opt.complete;
	
		opt.complete = function() {
			if ( jQuery.isFunction( opt.old ) ) {
				opt.old.call( this );
			}
	
			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			}
		};
	
		return opt;
	};
	
	jQuery.fn.extend( {
		fadeTo: function( speed, to, easing, callback ) {
	
			// Show any hidden elements after setting opacity to 0
			return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()
	
				// Animate to the value specified
				.end().animate( { opacity: to }, speed, easing, callback );
		},
		animate: function( prop, speed, easing, callback ) {
			var empty = jQuery.isEmptyObject( prop ),
				optall = jQuery.speed( speed, easing, callback ),
				doAnimation = function() {
	
					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation( this, jQuery.extend( {}, prop ), optall );
	
					// Empty animations, or finishing resolves immediately
					if ( empty || dataPriv.get( this, "finish" ) ) {
						anim.stop( true );
					}
				};
				doAnimation.finish = doAnimation;
	
			return empty || optall.queue === false ?
				this.each( doAnimation ) :
				this.queue( optall.queue, doAnimation );
		},
		stop: function( type, clearQueue, gotoEnd ) {
			var stopQueue = function( hooks ) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop( gotoEnd );
			};
	
			if ( typeof type !== "string" ) {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if ( clearQueue && type !== false ) {
				this.queue( type || "fx", [] );
			}
	
			return this.each( function() {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = dataPriv.get( this );
	
				if ( index ) {
					if ( data[ index ] && data[ index ].stop ) {
						stopQueue( data[ index ] );
					}
				} else {
					for ( index in data ) {
						if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
							stopQueue( data[ index ] );
						}
					}
				}
	
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this &&
						( type == null || timers[ index ].queue === type ) ) {
	
						timers[ index ].anim.stop( gotoEnd );
						dequeue = false;
						timers.splice( index, 1 );
					}
				}
	
				// Start the next in the queue if the last step wasn't forced.
				// Timers currently will call their complete callbacks, which
				// will dequeue but only if they were gotoEnd.
				if ( dequeue || !gotoEnd ) {
					jQuery.dequeue( this, type );
				}
			} );
		},
		finish: function( type ) {
			if ( type !== false ) {
				type = type || "fx";
			}
			return this.each( function() {
				var index,
					data = dataPriv.get( this ),
					queue = data[ type + "queue" ],
					hooks = data[ type + "queueHooks" ],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;
	
				// Enable finishing flag on private data
				data.finish = true;
	
				// Empty the queue first
				jQuery.queue( this, type, [] );
	
				if ( hooks && hooks.stop ) {
					hooks.stop.call( this, true );
				}
	
				// Look for any active animations, and finish them
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
						timers[ index ].anim.stop( true );
						timers.splice( index, 1 );
					}
				}
	
				// Look for any animations in the old queue and finish them
				for ( index = 0; index < length; index++ ) {
					if ( queue[ index ] && queue[ index ].finish ) {
						queue[ index ].finish.call( this );
					}
				}
	
				// Turn off finishing flag
				delete data.finish;
			} );
		}
	} );
	
	jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
		var cssFn = jQuery.fn[ name ];
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return speed == null || typeof speed === "boolean" ?
				cssFn.apply( this, arguments ) :
				this.animate( genFx( name, true ), speed, easing, callback );
		};
	} );
	
	// Generate shortcuts for custom animations
	jQuery.each( {
		slideDown: genFx( "show" ),
		slideUp: genFx( "hide" ),
		slideToggle: genFx( "toggle" ),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function( name, props ) {
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return this.animate( props, speed, easing, callback );
		};
	} );
	
	jQuery.timers = [];
	jQuery.fx.tick = function() {
		var timer,
			i = 0,
			timers = jQuery.timers;
	
		fxNow = jQuery.now();
	
		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];
	
			// Checks the timer has not already been removed
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}
	
		if ( !timers.length ) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};
	
	jQuery.fx.timer = function( timer ) {
		jQuery.timers.push( timer );
		if ( timer() ) {
			jQuery.fx.start();
		} else {
			jQuery.timers.pop();
		}
	};
	
	jQuery.fx.interval = 13;
	jQuery.fx.start = function() {
		if ( !timerId ) {
			timerId = window.requestAnimationFrame ?
				window.requestAnimationFrame( raf ) :
				window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
		}
	};
	
	jQuery.fx.stop = function() {
		if ( window.cancelAnimationFrame ) {
			window.cancelAnimationFrame( timerId );
		} else {
			window.clearInterval( timerId );
		}
	
		timerId = null;
	};
	
	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,
	
		// Default speed
		_default: 400
	};
	
	
	// Based off of the plugin by Clint Helfers, with permission.
	// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";
	
		return this.queue( type, function( next, hooks ) {
			var timeout = window.setTimeout( next, time );
			hooks.stop = function() {
				window.clearTimeout( timeout );
			};
		} );
	};
	
	
	( function() {
		var input = document.createElement( "input" ),
			select = document.createElement( "select" ),
			opt = select.appendChild( document.createElement( "option" ) );
	
		input.type = "checkbox";
	
		// Support: Android <=4.3 only
		// Default value for a checkbox should be "on"
		support.checkOn = input.value !== "";
	
		// Support: IE <=11 only
		// Must access selectedIndex to make default options select
		support.optSelected = opt.selected;
	
		// Support: IE <=11 only
		// An input loses its value after becoming a radio
		input = document.createElement( "input" );
		input.value = "t";
		input.type = "radio";
		support.radioValue = input.value === "t";
	} )();
	
	
	var boolHook,
		attrHandle = jQuery.expr.attrHandle;
	
	jQuery.fn.extend( {
		attr: function( name, value ) {
			return access( this, jQuery.attr, name, value, arguments.length > 1 );
		},
	
		removeAttr: function( name ) {
			return this.each( function() {
				jQuery.removeAttr( this, name );
			} );
		}
	} );
	
	jQuery.extend( {
		attr: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;
	
			// Don't get/set attributes on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}
	
			// Fallback to prop when attributes are not supported
			if ( typeof elem.getAttribute === "undefined" ) {
				return jQuery.prop( elem, name, value );
			}
	
			// Attribute hooks are determined by the lowercase version
			// Grab necessary hook if one is defined
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
				hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
					( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
			}
	
			if ( value !== undefined ) {
				if ( value === null ) {
					jQuery.removeAttr( elem, name );
					return;
				}
	
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}
	
				elem.setAttribute( name, value + "" );
				return value;
			}
	
			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}
	
			ret = jQuery.find.attr( elem, name );
	
			// Non-existent attributes return null, we normalize to undefined
			return ret == null ? undefined : ret;
		},
	
		attrHooks: {
			type: {
				set: function( elem, value ) {
					if ( !support.radioValue && value === "radio" &&
						jQuery.nodeName( elem, "input" ) ) {
						var val = elem.value;
						elem.setAttribute( "type", value );
						if ( val ) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		},
	
		removeAttr: function( elem, value ) {
			var name,
				i = 0,
				attrNames = value && value.match( rnotwhite );
	
			if ( attrNames && elem.nodeType === 1 ) {
				while ( ( name = attrNames[ i++ ] ) ) {
					elem.removeAttribute( name );
				}
			}
		}
	} );
	
	// Hooks for boolean attributes
	boolHook = {
		set: function( elem, value, name ) {
			if ( value === false ) {
	
				// Remove boolean attributes when set to false
				jQuery.removeAttr( elem, name );
			} else {
				elem.setAttribute( name, name );
			}
			return name;
		}
	};
	
	jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
		var getter = attrHandle[ name ] || jQuery.find.attr;
	
		attrHandle[ name ] = function( elem, name, isXML ) {
			var ret, handle,
				lowercaseName = name.toLowerCase();
	
			if ( !isXML ) {
	
				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ lowercaseName ];
				attrHandle[ lowercaseName ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					lowercaseName :
					null;
				attrHandle[ lowercaseName ] = handle;
			}
			return ret;
		};
	} );
	
	
	
	
	var rfocusable = /^(?:input|select|textarea|button)$/i,
		rclickable = /^(?:a|area)$/i;
	
	jQuery.fn.extend( {
		prop: function( name, value ) {
			return access( this, jQuery.prop, name, value, arguments.length > 1 );
		},
	
		removeProp: function( name ) {
			return this.each( function() {
				delete this[ jQuery.propFix[ name ] || name ];
			} );
		}
	} );
	
	jQuery.extend( {
		prop: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;
	
			// Don't get/set properties on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}
	
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
	
				// Fix name and attach hooks
				name = jQuery.propFix[ name ] || name;
				hooks = jQuery.propHooks[ name ];
			}
	
			if ( value !== undefined ) {
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}
	
				return ( elem[ name ] = value );
			}
	
			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}
	
			return elem[ name ];
		},
	
		propHooks: {
			tabIndex: {
				get: function( elem ) {
	
					// Support: IE <=9 - 11 only
					// elem.tabIndex doesn't always return the
					// correct value when it hasn't been explicitly set
					// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
					// Use proper attribute retrieval(#12072)
					var tabindex = jQuery.find.attr( elem, "tabindex" );
	
					return tabindex ?
						parseInt( tabindex, 10 ) :
						rfocusable.test( elem.nodeName ) ||
							rclickable.test( elem.nodeName ) && elem.href ?
								0 :
								-1;
				}
			}
		},
	
		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	} );
	
	// Support: IE <=11 only
	// Accessing the selectedIndex property
	// forces the browser to respect setting selected
	// on the option
	// The getter ensures a default option is selected
	// when in an optgroup
	if ( !support.optSelected ) {
		jQuery.propHooks.selected = {
			get: function( elem ) {
				var parent = elem.parentNode;
				if ( parent && parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
				return null;
			},
			set: function( elem ) {
				var parent = elem.parentNode;
				if ( parent ) {
					parent.selectedIndex;
	
					if ( parent.parentNode ) {
						parent.parentNode.selectedIndex;
					}
				}
			}
		};
	}
	
	jQuery.each( [
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function() {
		jQuery.propFix[ this.toLowerCase() ] = this;
	} );
	
	
	
	
	var rclass = /[\t\r\n\f]/g;
	
	function getClass( elem ) {
		return elem.getAttribute && elem.getAttribute( "class" ) || "";
	}
	
	jQuery.fn.extend( {
		addClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;
	
			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
				} );
			}
	
			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];
	
				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );
	
					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
							if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
								cur += clazz + " ";
							}
						}
	
						// Only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}
	
			return this;
		},
	
		removeClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;
	
			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
				} );
			}
	
			if ( !arguments.length ) {
				return this.attr( "class", "" );
			}
	
			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];
	
				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
	
					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );
	
					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
	
							// Remove *all* instances
							while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
								cur = cur.replace( " " + clazz + " ", " " );
							}
						}
	
						// Only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}
	
			return this;
		},
	
		toggleClass: function( value, stateVal ) {
			var type = typeof value;
	
			if ( typeof stateVal === "boolean" && type === "string" ) {
				return stateVal ? this.addClass( value ) : this.removeClass( value );
			}
	
			if ( jQuery.isFunction( value ) ) {
				return this.each( function( i ) {
					jQuery( this ).toggleClass(
						value.call( this, i, getClass( this ), stateVal ),
						stateVal
					);
				} );
			}
	
			return this.each( function() {
				var className, i, self, classNames;
	
				if ( type === "string" ) {
	
					// Toggle individual class names
					i = 0;
					self = jQuery( this );
					classNames = value.match( rnotwhite ) || [];
	
					while ( ( className = classNames[ i++ ] ) ) {
	
						// Check each className given, space separated list
						if ( self.hasClass( className ) ) {
							self.removeClass( className );
						} else {
							self.addClass( className );
						}
					}
	
				// Toggle whole class name
				} else if ( value === undefined || type === "boolean" ) {
					className = getClass( this );
					if ( className ) {
	
						// Store className if set
						dataPriv.set( this, "__className__", className );
					}
	
					// If the element has a class name or if we're passed `false`,
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					if ( this.setAttribute ) {
						this.setAttribute( "class",
							className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
						);
					}
				}
			} );
		},
	
		hasClass: function( selector ) {
			var className, elem,
				i = 0;
	
			className = " " + selector + " ";
			while ( ( elem = this[ i++ ] ) ) {
				if ( elem.nodeType === 1 &&
					( " " + getClass( elem ) + " " ).replace( rclass, " " )
						.indexOf( className ) > -1
				) {
					return true;
				}
			}
	
			return false;
		}
	} );
	
	
	
	
	var rreturn = /\r/g,
		rspaces = /[\x20\t\r\n\f]+/g;
	
	jQuery.fn.extend( {
		val: function( value ) {
			var hooks, ret, isFunction,
				elem = this[ 0 ];
	
			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] ||
						jQuery.valHooks[ elem.nodeName.toLowerCase() ];
	
					if ( hooks &&
						"get" in hooks &&
						( ret = hooks.get( elem, "value" ) ) !== undefined
					) {
						return ret;
					}
	
					ret = elem.value;
	
					return typeof ret === "string" ?
	
						// Handle most common string cases
						ret.replace( rreturn, "" ) :
	
						// Handle cases where value is null/undef or number
						ret == null ? "" : ret;
				}
	
				return;
			}
	
			isFunction = jQuery.isFunction( value );
	
			return this.each( function( i ) {
				var val;
	
				if ( this.nodeType !== 1 ) {
					return;
				}
	
				if ( isFunction ) {
					val = value.call( this, i, jQuery( this ).val() );
				} else {
					val = value;
				}
	
				// Treat null/undefined as ""; convert numbers to string
				if ( val == null ) {
					val = "";
	
				} else if ( typeof val === "number" ) {
					val += "";
	
				} else if ( jQuery.isArray( val ) ) {
					val = jQuery.map( val, function( value ) {
						return value == null ? "" : value + "";
					} );
				}
	
				hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];
	
				// If set returns undefined, fall back to normal setting
				if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
					this.value = val;
				}
			} );
		}
	} );
	
	jQuery.extend( {
		valHooks: {
			option: {
				get: function( elem ) {
	
					var val = jQuery.find.attr( elem, "value" );
					return val != null ?
						val :
	
						// Support: IE <=10 - 11 only
						// option.text throws exceptions (#14686, #14858)
						// Strip and collapse whitespace
						// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
						jQuery.trim( jQuery.text( elem ) ).replace( rspaces, " " );
				}
			},
			select: {
				get: function( elem ) {
					var value, option,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one",
						values = one ? null : [],
						max = one ? index + 1 : options.length,
						i = index < 0 ?
							max :
							one ? index : 0;
	
					// Loop through all the selected options
					for ( ; i < max; i++ ) {
						option = options[ i ];
	
						// Support: IE <=9 only
						// IE8-9 doesn't update selected after form reset (#2551)
						if ( ( option.selected || i === index ) &&
	
								// Don't return options that are disabled or in a disabled optgroup
								!option.disabled &&
								( !option.parentNode.disabled ||
									!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {
	
							// Get the specific value for the option
							value = jQuery( option ).val();
	
							// We don't need an array for one selects
							if ( one ) {
								return value;
							}
	
							// Multi-Selects return an array
							values.push( value );
						}
					}
	
					return values;
				},
	
				set: function( elem, value ) {
					var optionSet, option,
						options = elem.options,
						values = jQuery.makeArray( value ),
						i = options.length;
	
					while ( i-- ) {
						option = options[ i ];
	
						/* eslint-disable no-cond-assign */
	
						if ( option.selected =
							jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
						) {
							optionSet = true;
						}
	
						/* eslint-enable no-cond-assign */
					}
	
					// Force browsers to behave consistently when non-matching value is set
					if ( !optionSet ) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		}
	} );
	
	// Radios and checkboxes getter/setter
	jQuery.each( [ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			set: function( elem, value ) {
				if ( jQuery.isArray( value ) ) {
					return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
				}
			}
		};
		if ( !support.checkOn ) {
			jQuery.valHooks[ this ].get = function( elem ) {
				return elem.getAttribute( "value" ) === null ? "on" : elem.value;
			};
		}
	} );
	
	
	
	
	// Return jQuery for attributes-only inclusion
	
	
	var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;
	
	jQuery.extend( jQuery.event, {
	
		trigger: function( event, data, elem, onlyHandlers ) {
	
			var i, cur, tmp, bubbleType, ontype, handle, special,
				eventPath = [ elem || document ],
				type = hasOwn.call( event, "type" ) ? event.type : event,
				namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];
	
			cur = tmp = elem = elem || document;
	
			// Don't do events on text and comment nodes
			if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
				return;
			}
	
			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
				return;
			}
	
			if ( type.indexOf( "." ) > -1 ) {
	
				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split( "." );
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf( ":" ) < 0 && "on" + type;
	
			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[ jQuery.expando ] ?
				event :
				new jQuery.Event( type, typeof event === "object" && event );
	
			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join( "." );
			event.rnamespace = event.namespace ?
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
				null;
	
			// Clean up the event in case it is being reused
			event.result = undefined;
			if ( !event.target ) {
				event.target = elem;
			}
	
			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ?
				[ event ] :
				jQuery.makeArray( data, [ event ] );
	
			// Allow special events to draw outside the lines
			special = jQuery.event.special[ type ] || {};
			if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
				return;
			}
	
			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {
	
				bubbleType = special.delegateType || type;
				if ( !rfocusMorph.test( bubbleType + type ) ) {
					cur = cur.parentNode;
				}
				for ( ; cur; cur = cur.parentNode ) {
					eventPath.push( cur );
					tmp = cur;
				}
	
				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if ( tmp === ( elem.ownerDocument || document ) ) {
					eventPath.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}
	
			// Fire handlers on the event path
			i = 0;
			while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
	
				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;
	
				// jQuery handler
				handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
					dataPriv.get( cur, "handle" );
				if ( handle ) {
					handle.apply( cur, data );
				}
	
				// Native handler
				handle = ontype && cur[ ontype ];
				if ( handle && handle.apply && acceptData( cur ) ) {
					event.result = handle.apply( cur, data );
					if ( event.result === false ) {
						event.preventDefault();
					}
				}
			}
			event.type = type;
	
			// If nobody prevented the default action, do it now
			if ( !onlyHandlers && !event.isDefaultPrevented() ) {
	
				if ( ( !special._default ||
					special._default.apply( eventPath.pop(), data ) === false ) &&
					acceptData( elem ) ) {
	
					// Call a native DOM method on the target with the same name as the event.
					// Don't do default actions on window, that's where global variables be (#6170)
					if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {
	
						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ ontype ];
	
						if ( tmp ) {
							elem[ ontype ] = null;
						}
	
						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						elem[ type ]();
						jQuery.event.triggered = undefined;
	
						if ( tmp ) {
							elem[ ontype ] = tmp;
						}
					}
				}
			}
	
			return event.result;
		},
	
		// Piggyback on a donor event to simulate a different one
		// Used only for `focus(in | out)` events
		simulate: function( type, elem, event ) {
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true
				}
			);
	
			jQuery.event.trigger( e, null, elem );
		}
	
	} );
	
	jQuery.fn.extend( {
	
		trigger: function( type, data ) {
			return this.each( function() {
				jQuery.event.trigger( type, data, this );
			} );
		},
		triggerHandler: function( type, data ) {
			var elem = this[ 0 ];
			if ( elem ) {
				return jQuery.event.trigger( type, data, elem, true );
			}
		}
	} );
	
	
	jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup contextmenu" ).split( " " ),
		function( i, name ) {
	
		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );
	
	jQuery.fn.extend( {
		hover: function( fnOver, fnOut ) {
			return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
		}
	} );
	
	
	
	
	support.focusin = "onfocusin" in window;
	
	
	// Support: Firefox <=44
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
	if ( !support.focusin ) {
		jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {
	
			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
			};
	
			jQuery.event.special[ fix ] = {
				setup: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix );
	
					if ( !attaches ) {
						doc.addEventListener( orig, handler, true );
					}
					dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
				},
				teardown: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix ) - 1;
	
					if ( !attaches ) {
						doc.removeEventListener( orig, handler, true );
						dataPriv.remove( doc, fix );
	
					} else {
						dataPriv.access( doc, fix, attaches );
					}
				}
			};
		} );
	}
	var location = window.location;
	
	var nonce = jQuery.now();
	
	var rquery = ( /\?/ );
	
	
	
	// Cross-browser xml parsing
	jQuery.parseXML = function( data ) {
		var xml;
		if ( !data || typeof data !== "string" ) {
			return null;
		}
	
		// Support: IE 9 - 11 only
		// IE throws on parseFromString with invalid input.
		try {
			xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
		} catch ( e ) {
			xml = undefined;
		}
	
		if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	};
	
	
	var
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;
	
	function buildParams( prefix, obj, traditional, add ) {
		var name;
	
		if ( jQuery.isArray( obj ) ) {
	
			// Serialize array item.
			jQuery.each( obj, function( i, v ) {
				if ( traditional || rbracket.test( prefix ) ) {
	
					// Treat each array item as a scalar.
					add( prefix, v );
	
				} else {
	
					// Item is non-scalar (array or object), encode its numeric index.
					buildParams(
						prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
						v,
						traditional,
						add
					);
				}
			} );
	
		} else if ( !traditional && jQuery.type( obj ) === "object" ) {
	
			// Serialize object item.
			for ( name in obj ) {
				buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
			}
	
		} else {
	
			// Serialize scalar item.
			add( prefix, obj );
		}
	}
	
	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function( a, traditional ) {
		var prefix,
			s = [],
			add = function( key, valueOrFunction ) {
	
				// If value is a function, invoke it and use its return value
				var value = jQuery.isFunction( valueOrFunction ) ?
					valueOrFunction() :
					valueOrFunction;
	
				s[ s.length ] = encodeURIComponent( key ) + "=" +
					encodeURIComponent( value == null ? "" : value );
			};
	
		// If an array was passed in, assume that it is an array of form elements.
		if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
	
			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			} );
	
		} else {
	
			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}
	
		// Return the resulting serialization
		return s.join( "&" );
	};
	
	jQuery.fn.extend( {
		serialize: function() {
			return jQuery.param( this.serializeArray() );
		},
		serializeArray: function() {
			return this.map( function() {
	
				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop( this, "elements" );
				return elements ? jQuery.makeArray( elements ) : this;
			} )
			.filter( function() {
				var type = this.type;
	
				// Use .is( ":disabled" ) so that fieldset[disabled] works
				return this.name && !jQuery( this ).is( ":disabled" ) &&
					rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
					( this.checked || !rcheckableType.test( type ) );
			} )
			.map( function( i, elem ) {
				var val = jQuery( this ).val();
	
				return val == null ?
					null :
					jQuery.isArray( val ) ?
						jQuery.map( val, function( val ) {
							return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
						} ) :
						{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
			} ).get();
		}
	} );
	
	
	var
		r20 = /%20/g,
		rhash = /#.*$/,
		rts = /([?&])_=[^&]*/,
		rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
	
		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,
	
		/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */
		prefilters = {},
	
		/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */
		transports = {},
	
		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat( "*" ),
	
		// Anchor tag for parsing the document origin
		originAnchor = document.createElement( "a" );
		originAnchor.href = location.href;
	
	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports( structure ) {
	
		// dataTypeExpression is optional and defaults to "*"
		return function( dataTypeExpression, func ) {
	
			if ( typeof dataTypeExpression !== "string" ) {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}
	
			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];
	
			if ( jQuery.isFunction( func ) ) {
	
				// For each dataType in the dataTypeExpression
				while ( ( dataType = dataTypes[ i++ ] ) ) {
	
					// Prepend if requested
					if ( dataType[ 0 ] === "+" ) {
						dataType = dataType.slice( 1 ) || "*";
						( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );
	
					// Otherwise append
					} else {
						( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
					}
				}
			}
		};
	}
	
	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {
	
		var inspected = {},
			seekingTransport = ( structure === transports );
	
		function inspect( dataType ) {
			var selected;
			inspected[ dataType ] = true;
			jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
				var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
				if ( typeof dataTypeOrTransport === "string" &&
					!seekingTransport && !inspected[ dataTypeOrTransport ] ) {
	
					options.dataTypes.unshift( dataTypeOrTransport );
					inspect( dataTypeOrTransport );
					return false;
				} else if ( seekingTransport ) {
					return !( selected = dataTypeOrTransport );
				}
			} );
			return selected;
		}
	
		return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
	}
	
	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend( target, src ) {
		var key, deep,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};
	
		for ( key in src ) {
			if ( src[ key ] !== undefined ) {
				( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
			}
		}
		if ( deep ) {
			jQuery.extend( true, target, deep );
		}
	
		return target;
	}
	
	/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */
	function ajaxHandleResponses( s, jqXHR, responses ) {
	
		var ct, type, finalDataType, firstDataType,
			contents = s.contents,
			dataTypes = s.dataTypes;
	
		// Remove auto dataType and get content-type in the process
		while ( dataTypes[ 0 ] === "*" ) {
			dataTypes.shift();
			if ( ct === undefined ) {
				ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
			}
		}
	
		// Check if we're dealing with a known content-type
		if ( ct ) {
			for ( type in contents ) {
				if ( contents[ type ] && contents[ type ].test( ct ) ) {
					dataTypes.unshift( type );
					break;
				}
			}
		}
	
		// Check to see if we have a response for the expected dataType
		if ( dataTypes[ 0 ] in responses ) {
			finalDataType = dataTypes[ 0 ];
		} else {
	
			// Try convertible dataTypes
			for ( type in responses ) {
				if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
					finalDataType = type;
					break;
				}
				if ( !firstDataType ) {
					firstDataType = type;
				}
			}
	
			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}
	
		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if ( finalDataType ) {
			if ( finalDataType !== dataTypes[ 0 ] ) {
				dataTypes.unshift( finalDataType );
			}
			return responses[ finalDataType ];
		}
	}
	
	/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */
	function ajaxConvert( s, response, jqXHR, isSuccess ) {
		var conv2, current, conv, tmp, prev,
			converters = {},
	
			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();
	
		// Create converters map with lowercased keys
		if ( dataTypes[ 1 ] ) {
			for ( conv in s.converters ) {
				converters[ conv.toLowerCase() ] = s.converters[ conv ];
			}
		}
	
		current = dataTypes.shift();
	
		// Convert to each sequential dataType
		while ( current ) {
	
			if ( s.responseFields[ current ] ) {
				jqXHR[ s.responseFields[ current ] ] = response;
			}
	
			// Apply the dataFilter if provided
			if ( !prev && isSuccess && s.dataFilter ) {
				response = s.dataFilter( response, s.dataType );
			}
	
			prev = current;
			current = dataTypes.shift();
	
			if ( current ) {
	
				// There's only work to do if current dataType is non-auto
				if ( current === "*" ) {
	
					current = prev;
	
				// Convert response if prev dataType is non-auto and differs from current
				} else if ( prev !== "*" && prev !== current ) {
	
					// Seek a direct converter
					conv = converters[ prev + " " + current ] || converters[ "* " + current ];
	
					// If none found, seek a pair
					if ( !conv ) {
						for ( conv2 in converters ) {
	
							// If conv2 outputs current
							tmp = conv2.split( " " );
							if ( tmp[ 1 ] === current ) {
	
								// If prev can be converted to accepted input
								conv = converters[ prev + " " + tmp[ 0 ] ] ||
									converters[ "* " + tmp[ 0 ] ];
								if ( conv ) {
	
									// Condense equivalence converters
									if ( conv === true ) {
										conv = converters[ conv2 ];
	
									// Otherwise, insert the intermediate dataType
									} else if ( converters[ conv2 ] !== true ) {
										current = tmp[ 0 ];
										dataTypes.unshift( tmp[ 1 ] );
									}
									break;
								}
							}
						}
					}
	
					// Apply converter (if not an equivalence)
					if ( conv !== true ) {
	
						// Unless errors are allowed to bubble, catch and return them
						if ( conv && s.throws ) {
							response = conv( response );
						} else {
							try {
								response = conv( response );
							} catch ( e ) {
								return {
									state: "parsererror",
									error: conv ? e : "No conversion from " + prev + " to " + current
								};
							}
						}
					}
				}
			}
		}
	
		return { state: "success", data: response };
	}
	
	jQuery.extend( {
	
		// Counter for holding the number of active queries
		active: 0,
	
		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},
	
		ajaxSettings: {
			url: location.href,
			type: "GET",
			isLocal: rlocalProtocol.test( location.protocol ),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
	
			/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/
	
			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
	
			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},
	
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
	
			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {
	
				// Convert anything to text
				"* text": String,
	
				// Text to html (true = no transformation)
				"text html": true,
	
				// Evaluate text as a json expression
				"text json": JSON.parse,
	
				// Parse text as xml
				"text xml": jQuery.parseXML
			},
	
			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},
	
		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function( target, settings ) {
			return settings ?
	
				// Building a settings object
				ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :
	
				// Extending ajaxSettings
				ajaxExtend( jQuery.ajaxSettings, target );
		},
	
		ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
		ajaxTransport: addToPrefiltersOrTransports( transports ),
	
		// Main method
		ajax: function( url, options ) {
	
			// If url is an object, simulate pre-1.5 signature
			if ( typeof url === "object" ) {
				options = url;
				url = undefined;
			}
	
			// Force options to be an object
			options = options || {};
	
			var transport,
	
				// URL without anti-cache param
				cacheURL,
	
				// Response headers
				responseHeadersString,
				responseHeaders,
	
				// timeout handle
				timeoutTimer,
	
				// Url cleanup var
				urlAnchor,
	
				// Request state (becomes false upon send and true upon completion)
				completed,
	
				// To know if global events are to be dispatched
				fireGlobals,
	
				// Loop variable
				i,
	
				// uncached part of the url
				uncached,
	
				// Create the final options object
				s = jQuery.ajaxSetup( {}, options ),
	
				// Callbacks context
				callbackContext = s.context || s,
	
				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context &&
					( callbackContext.nodeType || callbackContext.jquery ) ?
						jQuery( callbackContext ) :
						jQuery.event,
	
				// Deferreds
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks( "once memory" ),
	
				// Status-dependent callbacks
				statusCode = s.statusCode || {},
	
				// Headers (they are sent all at once)
				requestHeaders = {},
				requestHeadersNames = {},
	
				// Default abort message
				strAbort = "canceled",
	
				// Fake xhr
				jqXHR = {
					readyState: 0,
	
					// Builds headers hashtable if needed
					getResponseHeader: function( key ) {
						var match;
						if ( completed ) {
							if ( !responseHeaders ) {
								responseHeaders = {};
								while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
									responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
								}
							}
							match = responseHeaders[ key.toLowerCase() ];
						}
						return match == null ? null : match;
					},
	
					// Raw string
					getAllResponseHeaders: function() {
						return completed ? responseHeadersString : null;
					},
	
					// Caches the header
					setRequestHeader: function( name, value ) {
						if ( completed == null ) {
							name = requestHeadersNames[ name.toLowerCase() ] =
								requestHeadersNames[ name.toLowerCase() ] || name;
							requestHeaders[ name ] = value;
						}
						return this;
					},
	
					// Overrides response content-type header
					overrideMimeType: function( type ) {
						if ( completed == null ) {
							s.mimeType = type;
						}
						return this;
					},
	
					// Status-dependent callbacks
					statusCode: function( map ) {
						var code;
						if ( map ) {
							if ( completed ) {
	
								// Execute the appropriate callbacks
								jqXHR.always( map[ jqXHR.status ] );
							} else {
	
								// Lazy-add the new callbacks in a way that preserves old ones
								for ( code in map ) {
									statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
								}
							}
						}
						return this;
					},
	
					// Cancel the request
					abort: function( statusText ) {
						var finalText = statusText || strAbort;
						if ( transport ) {
							transport.abort( finalText );
						}
						done( 0, finalText );
						return this;
					}
				};
	
			// Attach deferreds
			deferred.promise( jqXHR );
	
			// Add protocol if not provided (prefilters might expect it)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ( ( url || s.url || location.href ) + "" )
				.replace( rprotocol, location.protocol + "//" );
	
			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;
	
			// Extract dataTypes list
			s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];
	
			// A cross-domain request is in order when the origin doesn't match the current origin.
			if ( s.crossDomain == null ) {
				urlAnchor = document.createElement( "a" );
	
				// Support: IE <=8 - 11, Edge 12 - 13
				// IE throws exception on accessing the href property if url is malformed,
				// e.g. http://example.com:80x/
				try {
					urlAnchor.href = s.url;
	
					// Support: IE <=8 - 11 only
					// Anchor's host property isn't correctly set when s.url is relative
					urlAnchor.href = urlAnchor.href;
					s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
						urlAnchor.protocol + "//" + urlAnchor.host;
				} catch ( e ) {
	
					// If there is an error parsing the URL, assume it is crossDomain,
					// it can be rejected by the transport if it is invalid
					s.crossDomain = true;
				}
			}
	
			// Convert data if not already a string
			if ( s.data && s.processData && typeof s.data !== "string" ) {
				s.data = jQuery.param( s.data, s.traditional );
			}
	
			// Apply prefilters
			inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );
	
			// If request was aborted inside a prefilter, stop there
			if ( completed ) {
				return jqXHR;
			}
	
			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;
	
			// Watch for a new set of requests
			if ( fireGlobals && jQuery.active++ === 0 ) {
				jQuery.event.trigger( "ajaxStart" );
			}
	
			// Uppercase the type
			s.type = s.type.toUpperCase();
	
			// Determine if request has content
			s.hasContent = !rnoContent.test( s.type );
	
			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			// Remove hash to simplify url manipulation
			cacheURL = s.url.replace( rhash, "" );
	
			// More options handling for requests with no content
			if ( !s.hasContent ) {
	
				// Remember the hash so we can put it back
				uncached = s.url.slice( cacheURL.length );
	
				// If data is available, append data to url
				if ( s.data ) {
					cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;
	
					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}
	
				// Add anti-cache in uncached url if needed
				if ( s.cache === false ) {
					cacheURL = cacheURL.replace( rts, "" );
					uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
				}
	
				// Put hash and anti-cache on the URL that will be requested (gh-1732)
				s.url = cacheURL + uncached;
	
			// Change '%20' to '+' if this is encoded form body content (gh-2658)
			} else if ( s.data && s.processData &&
				( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
				s.data = s.data.replace( r20, "+" );
			}
	
			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if ( s.ifModified ) {
				if ( jQuery.lastModified[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
				}
				if ( jQuery.etag[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
				}
			}
	
			// Set the correct header, if data is being sent
			if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
				jqXHR.setRequestHeader( "Content-Type", s.contentType );
			}
	
			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
					s.accepts[ s.dataTypes[ 0 ] ] +
						( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
					s.accepts[ "*" ]
			);
	
			// Check for headers option
			for ( i in s.headers ) {
				jqXHR.setRequestHeader( i, s.headers[ i ] );
			}
	
			// Allow custom headers/mimetypes and early abort
			if ( s.beforeSend &&
				( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {
	
				// Abort if not done already and return
				return jqXHR.abort();
			}
	
			// Aborting is no longer a cancellation
			strAbort = "abort";
	
			// Install callbacks on deferreds
			completeDeferred.add( s.complete );
			jqXHR.done( s.success );
			jqXHR.fail( s.error );
	
			// Get transport
			transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );
	
			// If no transport, we auto-abort
			if ( !transport ) {
				done( -1, "No Transport" );
			} else {
				jqXHR.readyState = 1;
	
				// Send global event
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
				}
	
				// If request was aborted inside ajaxSend, stop there
				if ( completed ) {
					return jqXHR;
				}
	
				// Timeout
				if ( s.async && s.timeout > 0 ) {
					timeoutTimer = window.setTimeout( function() {
						jqXHR.abort( "timeout" );
					}, s.timeout );
				}
	
				try {
					completed = false;
					transport.send( requestHeaders, done );
				} catch ( e ) {
	
					// Rethrow post-completion exceptions
					if ( completed ) {
						throw e;
					}
	
					// Propagate others as results
					done( -1, e );
				}
			}
	
			// Callback for when everything is done
			function done( status, nativeStatusText, responses, headers ) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;
	
				// Ignore repeat invocations
				if ( completed ) {
					return;
				}
	
				completed = true;
	
				// Clear timeout if it exists
				if ( timeoutTimer ) {
					window.clearTimeout( timeoutTimer );
				}
	
				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;
	
				// Cache response headers
				responseHeadersString = headers || "";
	
				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;
	
				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;
	
				// Get response data
				if ( responses ) {
					response = ajaxHandleResponses( s, jqXHR, responses );
				}
	
				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert( s, response, jqXHR, isSuccess );
	
				// If successful, handle type chaining
				if ( isSuccess ) {
	
					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if ( s.ifModified ) {
						modified = jqXHR.getResponseHeader( "Last-Modified" );
						if ( modified ) {
							jQuery.lastModified[ cacheURL ] = modified;
						}
						modified = jqXHR.getResponseHeader( "etag" );
						if ( modified ) {
							jQuery.etag[ cacheURL ] = modified;
						}
					}
	
					// if no content
					if ( status === 204 || s.type === "HEAD" ) {
						statusText = "nocontent";
	
					// if not modified
					} else if ( status === 304 ) {
						statusText = "notmodified";
	
					// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {
	
					// Extract error from statusText and normalize for non-aborts
					error = statusText;
					if ( status || !statusText ) {
						statusText = "error";
						if ( status < 0 ) {
							status = 0;
						}
					}
				}
	
				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = ( nativeStatusText || statusText ) + "";
	
				// Success/Error
				if ( isSuccess ) {
					deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
				} else {
					deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
				}
	
				// Status-dependent callbacks
				jqXHR.statusCode( statusCode );
				statusCode = undefined;
	
				if ( fireGlobals ) {
					globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
						[ jqXHR, s, isSuccess ? success : error ] );
				}
	
				// Complete
				completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );
	
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
	
					// Handle the global AJAX counter
					if ( !( --jQuery.active ) ) {
						jQuery.event.trigger( "ajaxStop" );
					}
				}
			}
	
			return jqXHR;
		},
	
		getJSON: function( url, data, callback ) {
			return jQuery.get( url, data, callback, "json" );
		},
	
		getScript: function( url, callback ) {
			return jQuery.get( url, undefined, callback, "script" );
		}
	} );
	
	jQuery.each( [ "get", "post" ], function( i, method ) {
		jQuery[ method ] = function( url, data, callback, type ) {
	
			// Shift arguments if data argument was omitted
			if ( jQuery.isFunction( data ) ) {
				type = type || callback;
				callback = data;
				data = undefined;
			}
	
			// The url can be an options object (which then must have .url)
			return jQuery.ajax( jQuery.extend( {
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			}, jQuery.isPlainObject( url ) && url ) );
		};
	} );
	
	
	jQuery._evalUrl = function( url ) {
		return jQuery.ajax( {
			url: url,
	
			// Make this explicit, since user can override this through ajaxSetup (#11264)
			type: "GET",
			dataType: "script",
			cache: true,
			async: false,
			global: false,
			"throws": true
		} );
	};
	
	
	jQuery.fn.extend( {
		wrapAll: function( html ) {
			var wrap;
	
			if ( this[ 0 ] ) {
				if ( jQuery.isFunction( html ) ) {
					html = html.call( this[ 0 ] );
				}
	
				// The elements to wrap the target around
				wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );
	
				if ( this[ 0 ].parentNode ) {
					wrap.insertBefore( this[ 0 ] );
				}
	
				wrap.map( function() {
					var elem = this;
	
					while ( elem.firstElementChild ) {
						elem = elem.firstElementChild;
					}
	
					return elem;
				} ).append( this );
			}
	
			return this;
		},
	
		wrapInner: function( html ) {
			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapInner( html.call( this, i ) );
				} );
			}
	
			return this.each( function() {
				var self = jQuery( this ),
					contents = self.contents();
	
				if ( contents.length ) {
					contents.wrapAll( html );
	
				} else {
					self.append( html );
				}
			} );
		},
	
		wrap: function( html ) {
			var isFunction = jQuery.isFunction( html );
	
			return this.each( function( i ) {
				jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
			} );
		},
	
		unwrap: function( selector ) {
			this.parent( selector ).not( "body" ).each( function() {
				jQuery( this ).replaceWith( this.childNodes );
			} );
			return this;
		}
	} );
	
	
	jQuery.expr.pseudos.hidden = function( elem ) {
		return !jQuery.expr.pseudos.visible( elem );
	};
	jQuery.expr.pseudos.visible = function( elem ) {
		return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
	};
	
	
	
	
	jQuery.ajaxSettings.xhr = function() {
		try {
			return new window.XMLHttpRequest();
		} catch ( e ) {}
	};
	
	var xhrSuccessStatus = {
	
			// File protocol always yields status code 0, assume 200
			0: 200,
	
			// Support: IE <=9 only
			// #1450: sometimes IE returns 1223 when it should be 204
			1223: 204
		},
		xhrSupported = jQuery.ajaxSettings.xhr();
	
	support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	support.ajax = xhrSupported = !!xhrSupported;
	
	jQuery.ajaxTransport( function( options ) {
		var callback, errorCallback;
	
		// Cross domain only allowed if supported through XMLHttpRequest
		if ( support.cors || xhrSupported && !options.crossDomain ) {
			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr();
	
					xhr.open(
						options.type,
						options.url,
						options.async,
						options.username,
						options.password
					);
	
					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}
	
					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}
	
					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
						headers[ "X-Requested-With" ] = "XMLHttpRequest";
					}
	
					// Set headers
					for ( i in headers ) {
						xhr.setRequestHeader( i, headers[ i ] );
					}
	
					// Callback
					callback = function( type ) {
						return function() {
							if ( callback ) {
								callback = errorCallback = xhr.onload =
									xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;
	
								if ( type === "abort" ) {
									xhr.abort();
								} else if ( type === "error" ) {
	
									// Support: IE <=9 only
									// On a manual native abort, IE9 throws
									// errors on any property access that is not readyState
									if ( typeof xhr.status !== "number" ) {
										complete( 0, "error" );
									} else {
										complete(
	
											// File: protocol always yields status 0; see #8605, #14207
											xhr.status,
											xhr.statusText
										);
									}
								} else {
									complete(
										xhrSuccessStatus[ xhr.status ] || xhr.status,
										xhr.statusText,
	
										// Support: IE <=9 only
										// IE9 has no XHR2 but throws on binary (trac-11426)
										// For XHR2 non-text, let the caller handle it (gh-2498)
										( xhr.responseType || "text" ) !== "text"  ||
										typeof xhr.responseText !== "string" ?
											{ binary: xhr.response } :
											{ text: xhr.responseText },
										xhr.getAllResponseHeaders()
									);
								}
							}
						};
					};
	
					// Listen to events
					xhr.onload = callback();
					errorCallback = xhr.onerror = callback( "error" );
	
					// Support: IE 9 only
					// Use onreadystatechange to replace onabort
					// to handle uncaught aborts
					if ( xhr.onabort !== undefined ) {
						xhr.onabort = errorCallback;
					} else {
						xhr.onreadystatechange = function() {
	
							// Check readyState before timeout as it changes
							if ( xhr.readyState === 4 ) {
	
								// Allow onerror to be called first,
								// but that will not handle a native abort
								// Also, save errorCallback to a variable
								// as xhr.onerror cannot be accessed
								window.setTimeout( function() {
									if ( callback ) {
										errorCallback();
									}
								} );
							}
						};
					}
	
					// Create the abort callback
					callback = callback( "abort" );
	
					try {
	
						// Do send the request (this may raise an exception)
						xhr.send( options.hasContent && options.data || null );
					} catch ( e ) {
	
						// #14683: Only rethrow if this hasn't been notified as an error yet
						if ( callback ) {
							throw e;
						}
					}
				},
	
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );
	
	
	
	
	// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
	jQuery.ajaxPrefilter( function( s ) {
		if ( s.crossDomain ) {
			s.contents.script = false;
		}
	} );
	
	// Install script dataType
	jQuery.ajaxSetup( {
		accepts: {
			script: "text/javascript, application/javascript, " +
				"application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function( text ) {
				jQuery.globalEval( text );
				return text;
			}
		}
	} );
	
	// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter( "script", function( s ) {
		if ( s.cache === undefined ) {
			s.cache = false;
		}
		if ( s.crossDomain ) {
			s.type = "GET";
		}
	} );
	
	// Bind script tag hack transport
	jQuery.ajaxTransport( "script", function( s ) {
	
		// This transport only deals with cross domain requests
		if ( s.crossDomain ) {
			var script, callback;
			return {
				send: function( _, complete ) {
					script = jQuery( "<script>" ).prop( {
						charset: s.scriptCharset,
						src: s.url
					} ).on(
						"load error",
						callback = function( evt ) {
							script.remove();
							callback = null;
							if ( evt ) {
								complete( evt.type === "error" ? 404 : 200, evt.type );
							}
						}
					);
	
					// Use native DOM manipulation to avoid our domManip AJAX trickery
					document.head.appendChild( script[ 0 ] );
				},
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );
	
	
	
	
	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;
	
	// Default jsonp settings
	jQuery.ajaxSetup( {
		jsonp: "callback",
		jsonpCallback: function() {
			var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
			this[ callback ] = true;
			return callback;
		}
	} );
	
	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {
	
		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
				"url" :
				typeof s.data === "string" &&
					( s.contentType || "" )
						.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
					rjsonp.test( s.data ) && "data"
			);
	
		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {
	
			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
				s.jsonpCallback() :
				s.jsonpCallback;
	
			// Insert callback into url or form data
			if ( jsonProp ) {
				s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
			} else if ( s.jsonp !== false ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
			}
	
			// Use data converter to retrieve json after script execution
			s.converters[ "script json" ] = function() {
				if ( !responseContainer ) {
					jQuery.error( callbackName + " was not called" );
				}
				return responseContainer[ 0 ];
			};
	
			// Force json dataType
			s.dataTypes[ 0 ] = "json";
	
			// Install callback
			overwritten = window[ callbackName ];
			window[ callbackName ] = function() {
				responseContainer = arguments;
			};
	
			// Clean-up function (fires after converters)
			jqXHR.always( function() {
	
				// If previous value didn't exist - remove it
				if ( overwritten === undefined ) {
					jQuery( window ).removeProp( callbackName );
	
				// Otherwise restore preexisting value
				} else {
					window[ callbackName ] = overwritten;
				}
	
				// Save back as free
				if ( s[ callbackName ] ) {
	
					// Make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;
	
					// Save the callback name for future use
					oldCallbacks.push( callbackName );
				}
	
				// Call if it was a function and we have a response
				if ( responseContainer && jQuery.isFunction( overwritten ) ) {
					overwritten( responseContainer[ 0 ] );
				}
	
				responseContainer = overwritten = undefined;
			} );
	
			// Delegate to script
			return "script";
		}
	} );
	
	
	
	
	// Support: Safari 8 only
	// In Safari 8 documents created via document.implementation.createHTMLDocument
	// collapse sibling forms: the second one becomes a child of the first one.
	// Because of that, this security measure has to be disabled in Safari 8.
	// https://bugs.webkit.org/show_bug.cgi?id=137337
	support.createHTMLDocument = ( function() {
		var body = document.implementation.createHTMLDocument( "" ).body;
		body.innerHTML = "<form></form><form></form>";
		return body.childNodes.length === 2;
	} )();
	
	
	// Argument "data" should be string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function( data, context, keepScripts ) {
		if ( typeof data !== "string" ) {
			return [];
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}
	
		var base, parsed, scripts;
	
		if ( !context ) {
	
			// Stop scripts or inline event handlers from being executed immediately
			// by using document.implementation
			if ( support.createHTMLDocument ) {
				context = document.implementation.createHTMLDocument( "" );
	
				// Set the base href for the created document
				// so any parsed elements with URLs
				// are based on the document's URL (gh-2965)
				base = context.createElement( "base" );
				base.href = document.location.href;
				context.head.appendChild( base );
			} else {
				context = document;
			}
		}
	
		parsed = rsingleTag.exec( data );
		scripts = !keepScripts && [];
	
		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[ 1 ] ) ];
		}
	
		parsed = buildFragment( [ data ], context, scripts );
	
		if ( scripts && scripts.length ) {
			jQuery( scripts ).remove();
		}
	
		return jQuery.merge( [], parsed.childNodes );
	};
	
	
	/**
	 * Load a url into a page
	 */
	jQuery.fn.load = function( url, params, callback ) {
		var selector, type, response,
			self = this,
			off = url.indexOf( " " );
	
		if ( off > -1 ) {
			selector = jQuery.trim( url.slice( off ) );
			url = url.slice( 0, off );
		}
	
		// If it's a function
		if ( jQuery.isFunction( params ) ) {
	
			// We assume that it's the callback
			callback = params;
			params = undefined;
	
		// Otherwise, build a param string
		} else if ( params && typeof params === "object" ) {
			type = "POST";
		}
	
		// If we have elements to modify, make the request
		if ( self.length > 0 ) {
			jQuery.ajax( {
				url: url,
	
				// If "type" variable is undefined, then "GET" method will be used.
				// Make value of this field explicit since
				// user can override it through ajaxSetup method
				type: type || "GET",
				dataType: "html",
				data: params
			} ).done( function( responseText ) {
	
				// Save response for use in complete callback
				response = arguments;
	
				self.html( selector ?
	
					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :
	
					// Otherwise use the full result
					responseText );
	
			// If the request succeeds, this function gets "data", "status", "jqXHR"
			// but they are ignored because response was set above.
			// If it fails, this function gets "jqXHR", "status", "error"
			} ).always( callback && function( jqXHR, status ) {
				self.each( function() {
					callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
				} );
			} );
		}
	
		return this;
	};
	
	
	
	
	// Attach a bunch of functions for handling common AJAX events
	jQuery.each( [
		"ajaxStart",
		"ajaxStop",
		"ajaxComplete",
		"ajaxError",
		"ajaxSuccess",
		"ajaxSend"
	], function( i, type ) {
		jQuery.fn[ type ] = function( fn ) {
			return this.on( type, fn );
		};
	} );
	
	
	
	
	jQuery.expr.pseudos.animated = function( elem ) {
		return jQuery.grep( jQuery.timers, function( fn ) {
			return elem === fn.elem;
		} ).length;
	};
	
	
	
	
	/**
	 * Gets a window from an element
	 */
	function getWindow( elem ) {
		return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
	}
	
	jQuery.offset = {
		setOffset: function( elem, options, i ) {
			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
				position = jQuery.css( elem, "position" ),
				curElem = jQuery( elem ),
				props = {};
	
			// Set position first, in-case top/left are set even on static elem
			if ( position === "static" ) {
				elem.style.position = "relative";
			}
	
			curOffset = curElem.offset();
			curCSSTop = jQuery.css( elem, "top" );
			curCSSLeft = jQuery.css( elem, "left" );
			calculatePosition = ( position === "absolute" || position === "fixed" ) &&
				( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;
	
			// Need to be able to calculate position if either
			// top or left is auto and position is either absolute or fixed
			if ( calculatePosition ) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;
	
			} else {
				curTop = parseFloat( curCSSTop ) || 0;
				curLeft = parseFloat( curCSSLeft ) || 0;
			}
	
			if ( jQuery.isFunction( options ) ) {
	
				// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
				options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
			}
	
			if ( options.top != null ) {
				props.top = ( options.top - curOffset.top ) + curTop;
			}
			if ( options.left != null ) {
				props.left = ( options.left - curOffset.left ) + curLeft;
			}
	
			if ( "using" in options ) {
				options.using.call( elem, props );
	
			} else {
				curElem.css( props );
			}
		}
	};
	
	jQuery.fn.extend( {
		offset: function( options ) {
	
			// Preserve chaining for setter
			if ( arguments.length ) {
				return options === undefined ?
					this :
					this.each( function( i ) {
						jQuery.offset.setOffset( this, options, i );
					} );
			}
	
			var docElem, win, rect, doc,
				elem = this[ 0 ];
	
			if ( !elem ) {
				return;
			}
	
			// Support: IE <=11 only
			// Running getBoundingClientRect on a
			// disconnected node in IE throws an error
			if ( !elem.getClientRects().length ) {
				return { top: 0, left: 0 };
			}
	
			rect = elem.getBoundingClientRect();
	
			// Make sure element is not hidden (display: none)
			if ( rect.width || rect.height ) {
				doc = elem.ownerDocument;
				win = getWindow( doc );
				docElem = doc.documentElement;
	
				return {
					top: rect.top + win.pageYOffset - docElem.clientTop,
					left: rect.left + win.pageXOffset - docElem.clientLeft
				};
			}
	
			// Return zeros for disconnected and hidden elements (gh-2310)
			return rect;
		},
	
		position: function() {
			if ( !this[ 0 ] ) {
				return;
			}
	
			var offsetParent, offset,
				elem = this[ 0 ],
				parentOffset = { top: 0, left: 0 };
	
			// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
			// because it is its only offset parent
			if ( jQuery.css( elem, "position" ) === "fixed" ) {
	
				// Assume getBoundingClientRect is there when computed position is fixed
				offset = elem.getBoundingClientRect();
	
			} else {
	
				// Get *real* offsetParent
				offsetParent = this.offsetParent();
	
				// Get correct offsets
				offset = this.offset();
				if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
					parentOffset = offsetParent.offset();
				}
	
				// Add offsetParent borders
				parentOffset = {
					top: parentOffset.top + jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ),
					left: parentOffset.left + jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true )
				};
			}
	
			// Subtract parent offsets and element margins
			return {
				top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
				left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
			};
		},
	
		// This method will return documentElement in the following cases:
		// 1) For the element inside the iframe without offsetParent, this method will return
		//    documentElement of the parent window
		// 2) For the hidden or detached element
		// 3) For body or html element, i.e. in case of the html node - it will return itself
		//
		// but those exceptions were never presented as a real life use-cases
		// and might be considered as more preferable results.
		//
		// This logic, however, is not guaranteed and can change at any point in the future
		offsetParent: function() {
			return this.map( function() {
				var offsetParent = this.offsetParent;
	
				while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
					offsetParent = offsetParent.offsetParent;
				}
	
				return offsetParent || documentElement;
			} );
		}
	} );
	
	// Create scrollLeft and scrollTop methods
	jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
		var top = "pageYOffset" === prop;
	
		jQuery.fn[ method ] = function( val ) {
			return access( this, function( elem, method, val ) {
				var win = getWindow( elem );
	
				if ( val === undefined ) {
					return win ? win[ prop ] : elem[ method ];
				}
	
				if ( win ) {
					win.scrollTo(
						!top ? val : win.pageXOffset,
						top ? val : win.pageYOffset
					);
	
				} else {
					elem[ method ] = val;
				}
			}, method, val, arguments.length );
		};
	} );
	
	// Support: Safari <=7 - 9.1, Chrome <=37 - 49
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each( [ "top", "left" ], function( i, prop ) {
		jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
			function( elem, computed ) {
				if ( computed ) {
					computed = curCSS( elem, prop );
	
					// If curCSS returns percentage, fallback to offset
					return rnumnonpx.test( computed ) ?
						jQuery( elem ).position()[ prop ] + "px" :
						computed;
				}
			}
		);
	} );
	
	
	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
		jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
			function( defaultExtra, funcName ) {
	
			// Margin is only for outerHeight, outerWidth
			jQuery.fn[ funcName ] = function( margin, value ) {
				var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
					extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );
	
				return access( this, function( elem, type, value ) {
					var doc;
	
					if ( jQuery.isWindow( elem ) ) {
	
						// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
						return funcName.indexOf( "outer" ) === 0 ?
							elem[ "inner" + name ] :
							elem.document.documentElement[ "client" + name ];
					}
	
					// Get document width or height
					if ( elem.nodeType === 9 ) {
						doc = elem.documentElement;
	
						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						return Math.max(
							elem.body[ "scroll" + name ], doc[ "scroll" + name ],
							elem.body[ "offset" + name ], doc[ "offset" + name ],
							doc[ "client" + name ]
						);
					}
	
					return value === undefined ?
	
						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css( elem, type, extra ) :
	
						// Set width or height on the element
						jQuery.style( elem, type, value, extra );
				}, type, chainable ? margin : undefined, chainable );
			};
		} );
	} );
	
	
	jQuery.fn.extend( {
	
		bind: function( types, data, fn ) {
			return this.on( types, null, data, fn );
		},
		unbind: function( types, fn ) {
			return this.off( types, null, fn );
		},
	
		delegate: function( selector, types, data, fn ) {
			return this.on( types, selector, data, fn );
		},
		undelegate: function( selector, types, fn ) {
	
			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ?
				this.off( selector, "**" ) :
				this.off( types, selector || "**", fn );
		}
	} );
	
	jQuery.parseJSON = JSON.parse;
	
	
	
	
	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.
	
	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon
	
	if ( true ) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return jQuery;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}
	
	
	
	
	
	var
	
		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,
	
		// Map over the $ in case of overwrite
		_$ = window.$;
	
	jQuery.noConflict = function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}
	
		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}
	
		return jQuery;
	};
	
	// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if ( !noGlobal ) {
		window.jQuery = window.$ = jQuery;
	}
	
	
	return jQuery;
	} );


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	// https://d3js.org Version 4.2.2. Copyright 2016 Mike Bostock.
	(function (global, factory) {
	   true ? factory(exports) :
	  typeof define === 'function' && define.amd ? define(['exports'], factory) :
	  (factory((global.d3 = global.d3 || {})));
	}(this, (function (exports) { 'use strict';
	
	  var version = "4.2.2";
	
	  function ascending(a, b) {
	    return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
	  }
	
	  function bisector(compare) {
	    if (compare.length === 1) compare = ascendingComparator(compare);
	    return {
	      left: function(a, x, lo, hi) {
	        if (lo == null) lo = 0;
	        if (hi == null) hi = a.length;
	        while (lo < hi) {
	          var mid = lo + hi >>> 1;
	          if (compare(a[mid], x) < 0) lo = mid + 1;
	          else hi = mid;
	        }
	        return lo;
	      },
	      right: function(a, x, lo, hi) {
	        if (lo == null) lo = 0;
	        if (hi == null) hi = a.length;
	        while (lo < hi) {
	          var mid = lo + hi >>> 1;
	          if (compare(a[mid], x) > 0) hi = mid;
	          else lo = mid + 1;
	        }
	        return lo;
	      }
	    };
	  }
	
	  function ascendingComparator(f) {
	    return function(d, x) {
	      return ascending(f(d), x);
	    };
	  }
	
	  var ascendingBisect = bisector(ascending);
	  var bisectRight = ascendingBisect.right;
	  var bisectLeft = ascendingBisect.left;
	
	  function descending(a, b) {
	    return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
	  }
	
	  function number(x) {
	    return x === null ? NaN : +x;
	  }
	
	  function variance(array, f) {
	    var n = array.length,
	        m = 0,
	        a,
	        d,
	        s = 0,
	        i = -1,
	        j = 0;
	
	    if (f == null) {
	      while (++i < n) {
	        if (!isNaN(a = number(array[i]))) {
	          d = a - m;
	          m += d / ++j;
	          s += d * (a - m);
	        }
	      }
	    }
	
	    else {
	      while (++i < n) {
	        if (!isNaN(a = number(f(array[i], i, array)))) {
	          d = a - m;
	          m += d / ++j;
	          s += d * (a - m);
	        }
	      }
	    }
	
	    if (j > 1) return s / (j - 1);
	  }
	
	  function deviation(array, f) {
	    var v = variance(array, f);
	    return v ? Math.sqrt(v) : v;
	  }
	
	  function extent(array, f) {
	    var i = -1,
	        n = array.length,
	        a,
	        b,
	        c;
	
	    if (f == null) {
	      while (++i < n) if ((b = array[i]) != null && b >= b) { a = c = b; break; }
	      while (++i < n) if ((b = array[i]) != null) {
	        if (a > b) a = b;
	        if (c < b) c = b;
	      }
	    }
	
	    else {
	      while (++i < n) if ((b = f(array[i], i, array)) != null && b >= b) { a = c = b; break; }
	      while (++i < n) if ((b = f(array[i], i, array)) != null) {
	        if (a > b) a = b;
	        if (c < b) c = b;
	      }
	    }
	
	    return [a, c];
	  }
	
	  var array = Array.prototype;
	
	  var slice = array.slice;
	  var map = array.map;
	
	  function constant(x) {
	    return function() {
	      return x;
	    };
	  }
	
	  function identity(x) {
	    return x;
	  }
	
	  function range(start, stop, step) {
	    start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;
	
	    var i = -1,
	        n = Math.max(0, Math.ceil((stop - start) / step)) | 0,
	        range = new Array(n);
	
	    while (++i < n) {
	      range[i] = start + i * step;
	    }
	
	    return range;
	  }
	
	  var e10 = Math.sqrt(50);
	  var e5 = Math.sqrt(10);
	  var e2 = Math.sqrt(2);
	  function ticks(start, stop, count) {
	    var step = tickStep(start, stop, count);
	    return range(
	      Math.ceil(start / step) * step,
	      Math.floor(stop / step) * step + step / 2, // inclusive
	      step
	    );
	  }
	
	  function tickStep(start, stop, count) {
	    var step0 = Math.abs(stop - start) / Math.max(0, count),
	        step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)),
	        error = step0 / step1;
	    if (error >= e10) step1 *= 10;
	    else if (error >= e5) step1 *= 5;
	    else if (error >= e2) step1 *= 2;
	    return stop < start ? -step1 : step1;
	  }
	
	  function sturges(values) {
	    return Math.ceil(Math.log(values.length) / Math.LN2) + 1;
	  }
	
	  function histogram() {
	    var value = identity,
	        domain = extent,
	        threshold = sturges;
	
	    function histogram(data) {
	      var i,
	          n = data.length,
	          x,
	          values = new Array(n);
	
	      for (i = 0; i < n; ++i) {
	        values[i] = value(data[i], i, data);
	      }
	
	      var xz = domain(values),
	          x0 = xz[0],
	          x1 = xz[1],
	          tz = threshold(values, x0, x1);
	
	      // Convert number of thresholds into uniform thresholds.
	      if (!Array.isArray(tz)) tz = ticks(x0, x1, tz);
	
	      // Remove any thresholds outside the domain.
	      var m = tz.length;
	      while (tz[0] <= x0) tz.shift(), --m;
	      while (tz[m - 1] >= x1) tz.pop(), --m;
	
	      var bins = new Array(m + 1),
	          bin;
	
	      // Initialize bins.
	      for (i = 0; i <= m; ++i) {
	        bin = bins[i] = [];
	        bin.x0 = i > 0 ? tz[i - 1] : x0;
	        bin.x1 = i < m ? tz[i] : x1;
	      }
	
	      // Assign data to bins by value, ignoring any outside the domain.
	      for (i = 0; i < n; ++i) {
	        x = values[i];
	        if (x0 <= x && x <= x1) {
	          bins[bisectRight(tz, x, 0, m)].push(data[i]);
	        }
	      }
	
	      return bins;
	    }
	
	    histogram.value = function(_) {
	      return arguments.length ? (value = typeof _ === "function" ? _ : constant(_), histogram) : value;
	    };
	
	    histogram.domain = function(_) {
	      return arguments.length ? (domain = typeof _ === "function" ? _ : constant([_[0], _[1]]), histogram) : domain;
	    };
	
	    histogram.thresholds = function(_) {
	      return arguments.length ? (threshold = typeof _ === "function" ? _ : Array.isArray(_) ? constant(slice.call(_)) : constant(_), histogram) : threshold;
	    };
	
	    return histogram;
	  }
	
	  function threshold(array, p, f) {
	    if (f == null) f = number;
	    if (!(n = array.length)) return;
	    if ((p = +p) <= 0 || n < 2) return +f(array[0], 0, array);
	    if (p >= 1) return +f(array[n - 1], n - 1, array);
	    var n,
	        h = (n - 1) * p,
	        i = Math.floor(h),
	        a = +f(array[i], i, array),
	        b = +f(array[i + 1], i + 1, array);
	    return a + (b - a) * (h - i);
	  }
	
	  function freedmanDiaconis(values, min, max) {
	    values = map.call(values, number).sort(ascending);
	    return Math.ceil((max - min) / (2 * (threshold(values, 0.75) - threshold(values, 0.25)) * Math.pow(values.length, -1 / 3)));
	  }
	
	  function scott(values, min, max) {
	    return Math.ceil((max - min) / (3.5 * deviation(values) * Math.pow(values.length, -1 / 3)));
	  }
	
	  function max(array, f) {
	    var i = -1,
	        n = array.length,
	        a,
	        b;
	
	    if (f == null) {
	      while (++i < n) if ((b = array[i]) != null && b >= b) { a = b; break; }
	      while (++i < n) if ((b = array[i]) != null && b > a) a = b;
	    }
	
	    else {
	      while (++i < n) if ((b = f(array[i], i, array)) != null && b >= b) { a = b; break; }
	      while (++i < n) if ((b = f(array[i], i, array)) != null && b > a) a = b;
	    }
	
	    return a;
	  }
	
	  function mean(array, f) {
	    var s = 0,
	        n = array.length,
	        a,
	        i = -1,
	        j = n;
	
	    if (f == null) {
	      while (++i < n) if (!isNaN(a = number(array[i]))) s += a; else --j;
	    }
	
	    else {
	      while (++i < n) if (!isNaN(a = number(f(array[i], i, array)))) s += a; else --j;
	    }
	
	    if (j) return s / j;
	  }
	
	  function median(array, f) {
	    var numbers = [],
	        n = array.length,
	        a,
	        i = -1;
	
	    if (f == null) {
	      while (++i < n) if (!isNaN(a = number(array[i]))) numbers.push(a);
	    }
	
	    else {
	      while (++i < n) if (!isNaN(a = number(f(array[i], i, array)))) numbers.push(a);
	    }
	
	    return threshold(numbers.sort(ascending), 0.5);
	  }
	
	  function merge(arrays) {
	    var n = arrays.length,
	        m,
	        i = -1,
	        j = 0,
	        merged,
	        array;
	
	    while (++i < n) j += arrays[i].length;
	    merged = new Array(j);
	
	    while (--n >= 0) {
	      array = arrays[n];
	      m = array.length;
	      while (--m >= 0) {
	        merged[--j] = array[m];
	      }
	    }
	
	    return merged;
	  }
	
	  function min(array, f) {
	    var i = -1,
	        n = array.length,
	        a,
	        b;
	
	    if (f == null) {
	      while (++i < n) if ((b = array[i]) != null && b >= b) { a = b; break; }
	      while (++i < n) if ((b = array[i]) != null && a > b) a = b;
	    }
	
	    else {
	      while (++i < n) if ((b = f(array[i], i, array)) != null && b >= b) { a = b; break; }
	      while (++i < n) if ((b = f(array[i], i, array)) != null && a > b) a = b;
	    }
	
	    return a;
	  }
	
	  function pairs(array) {
	    var i = 0, n = array.length - 1, p = array[0], pairs = new Array(n < 0 ? 0 : n);
	    while (i < n) pairs[i] = [p, p = array[++i]];
	    return pairs;
	  }
	
	  function permute(array, indexes) {
	    var i = indexes.length, permutes = new Array(i);
	    while (i--) permutes[i] = array[indexes[i]];
	    return permutes;
	  }
	
	  function scan(array, compare) {
	    if (!(n = array.length)) return;
	    var i = 0,
	        n,
	        j = 0,
	        xi,
	        xj = array[j];
	
	    if (!compare) compare = ascending;
	
	    while (++i < n) if (compare(xi = array[i], xj) < 0 || compare(xj, xj) !== 0) xj = xi, j = i;
	
	    if (compare(xj, xj) === 0) return j;
	  }
	
	  function shuffle(array, i0, i1) {
	    var m = (i1 == null ? array.length : i1) - (i0 = i0 == null ? 0 : +i0),
	        t,
	        i;
	
	    while (m) {
	      i = Math.random() * m-- | 0;
	      t = array[m + i0];
	      array[m + i0] = array[i + i0];
	      array[i + i0] = t;
	    }
	
	    return array;
	  }
	
	  function sum(array, f) {
	    var s = 0,
	        n = array.length,
	        a,
	        i = -1;
	
	    if (f == null) {
	      while (++i < n) if (a = +array[i]) s += a; // Note: zero and null are equivalent.
	    }
	
	    else {
	      while (++i < n) if (a = +f(array[i], i, array)) s += a;
	    }
	
	    return s;
	  }
	
	  function transpose(matrix) {
	    if (!(n = matrix.length)) return [];
	    for (var i = -1, m = min(matrix, length), transpose = new Array(m); ++i < m;) {
	      for (var j = -1, n, row = transpose[i] = new Array(n); ++j < n;) {
	        row[j] = matrix[j][i];
	      }
	    }
	    return transpose;
	  }
	
	  function length(d) {
	    return d.length;
	  }
	
	  function zip() {
	    return transpose(arguments);
	  }
	
	  var prefix = "$";
	
	  function Map() {}
	
	  Map.prototype = map$1.prototype = {
	    constructor: Map,
	    has: function(key) {
	      return (prefix + key) in this;
	    },
	    get: function(key) {
	      return this[prefix + key];
	    },
	    set: function(key, value) {
	      this[prefix + key] = value;
	      return this;
	    },
	    remove: function(key) {
	      var property = prefix + key;
	      return property in this && delete this[property];
	    },
	    clear: function() {
	      for (var property in this) if (property[0] === prefix) delete this[property];
	    },
	    keys: function() {
	      var keys = [];
	      for (var property in this) if (property[0] === prefix) keys.push(property.slice(1));
	      return keys;
	    },
	    values: function() {
	      var values = [];
	      for (var property in this) if (property[0] === prefix) values.push(this[property]);
	      return values;
	    },
	    entries: function() {
	      var entries = [];
	      for (var property in this) if (property[0] === prefix) entries.push({key: property.slice(1), value: this[property]});
	      return entries;
	    },
	    size: function() {
	      var size = 0;
	      for (var property in this) if (property[0] === prefix) ++size;
	      return size;
	    },
	    empty: function() {
	      for (var property in this) if (property[0] === prefix) return false;
	      return true;
	    },
	    each: function(f) {
	      for (var property in this) if (property[0] === prefix) f(this[property], property.slice(1), this);
	    }
	  };
	
	  function map$1(object, f) {
	    var map = new Map;
	
	    // Copy constructor.
	    if (object instanceof Map) object.each(function(value, key) { map.set(key, value); });
	
	    // Index array by numeric index or specified key function.
	    else if (Array.isArray(object)) {
	      var i = -1,
	          n = object.length,
	          o;
	
	      if (f == null) while (++i < n) map.set(i, object[i]);
	      else while (++i < n) map.set(f(o = object[i], i, object), o);
	    }
	
	    // Convert object to map.
	    else if (object) for (var key in object) map.set(key, object[key]);
	
	    return map;
	  }
	
	  function nest() {
	    var keys = [],
	        sortKeys = [],
	        sortValues,
	        rollup,
	        nest;
	
	    function apply(array, depth, createResult, setResult) {
	      if (depth >= keys.length) return rollup != null
	          ? rollup(array) : (sortValues != null
	          ? array.sort(sortValues)
	          : array);
	
	      var i = -1,
	          n = array.length,
	          key = keys[depth++],
	          keyValue,
	          value,
	          valuesByKey = map$1(),
	          values,
	          result = createResult();
	
	      while (++i < n) {
	        if (values = valuesByKey.get(keyValue = key(value = array[i]) + "")) {
	          values.push(value);
	        } else {
	          valuesByKey.set(keyValue, [value]);
	        }
	      }
	
	      valuesByKey.each(function(values, key) {
	        setResult(result, key, apply(values, depth, createResult, setResult));
	      });
	
	      return result;
	    }
	
	    function entries(map, depth) {
	      if (++depth > keys.length) return map;
	      var array, sortKey = sortKeys[depth - 1];
	      if (rollup != null && depth >= keys.length) array = map.entries();
	      else array = [], map.each(function(v, k) { array.push({key: k, values: entries(v, depth)}); });
	      return sortKey != null ? array.sort(function(a, b) { return sortKey(a.key, b.key); }) : array;
	    }
	
	    return nest = {
	      object: function(array) { return apply(array, 0, createObject, setObject); },
	      map: function(array) { return apply(array, 0, createMap, setMap); },
	      entries: function(array) { return entries(apply(array, 0, createMap, setMap), 0); },
	      key: function(d) { keys.push(d); return nest; },
	      sortKeys: function(order) { sortKeys[keys.length - 1] = order; return nest; },
	      sortValues: function(order) { sortValues = order; return nest; },
	      rollup: function(f) { rollup = f; return nest; }
	    };
	  }
	
	  function createObject() {
	    return {};
	  }
	
	  function setObject(object, key, value) {
	    object[key] = value;
	  }
	
	  function createMap() {
	    return map$1();
	  }
	
	  function setMap(map, key, value) {
	    map.set(key, value);
	  }
	
	  function Set() {}
	
	  var proto = map$1.prototype;
	
	  Set.prototype = set.prototype = {
	    constructor: Set,
	    has: proto.has,
	    add: function(value) {
	      value += "";
	      this[prefix + value] = value;
	      return this;
	    },
	    remove: proto.remove,
	    clear: proto.clear,
	    values: proto.keys,
	    size: proto.size,
	    empty: proto.empty,
	    each: proto.each
	  };
	
	  function set(object, f) {
	    var set = new Set;
	
	    // Copy constructor.
	    if (object instanceof Set) object.each(function(value) { set.add(value); });
	
	    // Otherwise, assume it’s an array.
	    else if (object) {
	      var i = -1, n = object.length;
	      if (f == null) while (++i < n) set.add(object[i]);
	      else while (++i < n) set.add(f(object[i], i, object));
	    }
	
	    return set;
	  }
	
	  function keys(map) {
	    var keys = [];
	    for (var key in map) keys.push(key);
	    return keys;
	  }
	
	  function values(map) {
	    var values = [];
	    for (var key in map) values.push(map[key]);
	    return values;
	  }
	
	  function entries(map) {
	    var entries = [];
	    for (var key in map) entries.push({key: key, value: map[key]});
	    return entries;
	  }
	
	  function uniform(min, max) {
	    min = min == null ? 0 : +min;
	    max = max == null ? 1 : +max;
	    if (arguments.length === 1) max = min, min = 0;
	    else max -= min;
	    return function() {
	      return Math.random() * max + min;
	    };
	  }
	
	  function normal(mu, sigma) {
	    var x, r;
	    mu = mu == null ? 0 : +mu;
	    sigma = sigma == null ? 1 : +sigma;
	    return function() {
	      var y;
	
	      // If available, use the second previously-generated uniform random.
	      if (x != null) y = x, x = null;
	
	      // Otherwise, generate a new x and y.
	      else do {
	        x = Math.random() * 2 - 1;
	        y = Math.random() * 2 - 1;
	        r = x * x + y * y;
	      } while (!r || r > 1);
	
	      return mu + sigma * y * Math.sqrt(-2 * Math.log(r) / r);
	    };
	  }
	
	  function logNormal() {
	    var randomNormal = normal.apply(this, arguments);
	    return function() {
	      return Math.exp(randomNormal());
	    };
	  }
	
	  function irwinHall(n) {
	    return function() {
	      for (var sum = 0, i = 0; i < n; ++i) sum += Math.random();
	      return sum;
	    };
	  }
	
	  function bates(n) {
	    var randomIrwinHall = irwinHall(n);
	    return function() {
	      return randomIrwinHall() / n;
	    };
	  }
	
	  function exponential(lambda) {
	    return function() {
	      return -Math.log(1 - Math.random()) / lambda;
	    };
	  }
	
	  function linear(t) {
	    return +t;
	  }
	
	  function quadIn(t) {
	    return t * t;
	  }
	
	  function quadOut(t) {
	    return t * (2 - t);
	  }
	
	  function quadInOut(t) {
	    return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2;
	  }
	
	  function cubicIn(t) {
	    return t * t * t;
	  }
	
	  function cubicOut(t) {
	    return --t * t * t + 1;
	  }
	
	  function easeCubicInOut(t) {
	    return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
	  }
	
	  var exponent = 3;
	
	  var polyIn = (function custom(e) {
	    e = +e;
	
	    function polyIn(t) {
	      return Math.pow(t, e);
	    }
	
	    polyIn.exponent = custom;
	
	    return polyIn;
	  })(exponent);
	
	  var polyOut = (function custom(e) {
	    e = +e;
	
	    function polyOut(t) {
	      return 1 - Math.pow(1 - t, e);
	    }
	
	    polyOut.exponent = custom;
	
	    return polyOut;
	  })(exponent);
	
	  var polyInOut = (function custom(e) {
	    e = +e;
	
	    function polyInOut(t) {
	      return ((t *= 2) <= 1 ? Math.pow(t, e) : 2 - Math.pow(2 - t, e)) / 2;
	    }
	
	    polyInOut.exponent = custom;
	
	    return polyInOut;
	  })(exponent);
	
	  var pi = Math.PI;
	  var halfPi = pi / 2;
	  function sinIn(t) {
	    return 1 - Math.cos(t * halfPi);
	  }
	
	  function sinOut(t) {
	    return Math.sin(t * halfPi);
	  }
	
	  function sinInOut(t) {
	    return (1 - Math.cos(pi * t)) / 2;
	  }
	
	  function expIn(t) {
	    return Math.pow(2, 10 * t - 10);
	  }
	
	  function expOut(t) {
	    return 1 - Math.pow(2, -10 * t);
	  }
	
	  function expInOut(t) {
	    return ((t *= 2) <= 1 ? Math.pow(2, 10 * t - 10) : 2 - Math.pow(2, 10 - 10 * t)) / 2;
	  }
	
	  function circleIn(t) {
	    return 1 - Math.sqrt(1 - t * t);
	  }
	
	  function circleOut(t) {
	    return Math.sqrt(1 - --t * t);
	  }
	
	  function circleInOut(t) {
	    return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2;
	  }
	
	  var b1 = 4 / 11;
	  var b2 = 6 / 11;
	  var b3 = 8 / 11;
	  var b4 = 3 / 4;
	  var b5 = 9 / 11;
	  var b6 = 10 / 11;
	  var b7 = 15 / 16;
	  var b8 = 21 / 22;
	  var b9 = 63 / 64;
	  var b0 = 1 / b1 / b1;
	  function bounceIn(t) {
	    return 1 - bounceOut(1 - t);
	  }
	
	  function bounceOut(t) {
	    return (t = +t) < b1 ? b0 * t * t : t < b3 ? b0 * (t -= b2) * t + b4 : t < b6 ? b0 * (t -= b5) * t + b7 : b0 * (t -= b8) * t + b9;
	  }
	
	  function bounceInOut(t) {
	    return ((t *= 2) <= 1 ? 1 - bounceOut(1 - t) : bounceOut(t - 1) + 1) / 2;
	  }
	
	  var overshoot = 1.70158;
	
	  var backIn = (function custom(s) {
	    s = +s;
	
	    function backIn(t) {
	      return t * t * ((s + 1) * t - s);
	    }
	
	    backIn.overshoot = custom;
	
	    return backIn;
	  })(overshoot);
	
	  var backOut = (function custom(s) {
	    s = +s;
	
	    function backOut(t) {
	      return --t * t * ((s + 1) * t + s) + 1;
	    }
	
	    backOut.overshoot = custom;
	
	    return backOut;
	  })(overshoot);
	
	  var backInOut = (function custom(s) {
	    s = +s;
	
	    function backInOut(t) {
	      return ((t *= 2) < 1 ? t * t * ((s + 1) * t - s) : (t -= 2) * t * ((s + 1) * t + s) + 2) / 2;
	    }
	
	    backInOut.overshoot = custom;
	
	    return backInOut;
	  })(overshoot);
	
	  var tau = 2 * Math.PI;
	  var amplitude = 1;
	  var period = 0.3;
	  var elasticIn = (function custom(a, p) {
	    var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);
	
	    function elasticIn(t) {
	      return a * Math.pow(2, 10 * --t) * Math.sin((s - t) / p);
	    }
	
	    elasticIn.amplitude = function(a) { return custom(a, p * tau); };
	    elasticIn.period = function(p) { return custom(a, p); };
	
	    return elasticIn;
	  })(amplitude, period);
	
	  var elasticOut = (function custom(a, p) {
	    var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);
	
	    function elasticOut(t) {
	      return 1 - a * Math.pow(2, -10 * (t = +t)) * Math.sin((t + s) / p);
	    }
	
	    elasticOut.amplitude = function(a) { return custom(a, p * tau); };
	    elasticOut.period = function(p) { return custom(a, p); };
	
	    return elasticOut;
	  })(amplitude, period);
	
	  var elasticInOut = (function custom(a, p) {
	    var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);
	
	    function elasticInOut(t) {
	      return ((t = t * 2 - 1) < 0
	          ? a * Math.pow(2, 10 * t) * Math.sin((s - t) / p)
	          : 2 - a * Math.pow(2, -10 * t) * Math.sin((s + t) / p)) / 2;
	    }
	
	    elasticInOut.amplitude = function(a) { return custom(a, p * tau); };
	    elasticInOut.period = function(p) { return custom(a, p); };
	
	    return elasticInOut;
	  })(amplitude, period);
	
	  function area(polygon) {
	    var i = -1,
	        n = polygon.length,
	        a,
	        b = polygon[n - 1],
	        area = 0;
	
	    while (++i < n) {
	      a = b;
	      b = polygon[i];
	      area += a[1] * b[0] - a[0] * b[1];
	    }
	
	    return area / 2;
	  }
	
	  function centroid(polygon) {
	    var i = -1,
	        n = polygon.length,
	        x = 0,
	        y = 0,
	        a,
	        b = polygon[n - 1],
	        c,
	        k = 0;
	
	    while (++i < n) {
	      a = b;
	      b = polygon[i];
	      k += c = a[0] * b[1] - b[0] * a[1];
	      x += (a[0] + b[0]) * c;
	      y += (a[1] + b[1]) * c;
	    }
	
	    return k *= 3, [x / k, y / k];
	  }
	
	  // Returns the 2D cross product of AB and AC vectors, i.e., the z-component of
	  // the 3D cross product in a quadrant I Cartesian coordinate system (+x is
	  // right, +y is up). Returns a positive value if ABC is counter-clockwise,
	  // negative if clockwise, and zero if the points are collinear.
	  function cross(a, b, c) {
	    return (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]);
	  }
	
	  function lexicographicOrder(a, b) {
	    return a[0] - b[0] || a[1] - b[1];
	  }
	
	  // Computes the upper convex hull per the monotone chain algorithm.
	  // Assumes points.length >= 3, is sorted by x, unique in y.
	  // Returns an array of indices into points in left-to-right order.
	  function computeUpperHullIndexes(points) {
	    var n = points.length,
	        indexes = [0, 1],
	        size = 2;
	
	    for (var i = 2; i < n; ++i) {
	      while (size > 1 && cross(points[indexes[size - 2]], points[indexes[size - 1]], points[i]) <= 0) --size;
	      indexes[size++] = i;
	    }
	
	    return indexes.slice(0, size); // remove popped points
	  }
	
	  function hull(points) {
	    if ((n = points.length) < 3) return null;
	
	    var i,
	        n,
	        sortedPoints = new Array(n),
	        flippedPoints = new Array(n);
	
	    for (i = 0; i < n; ++i) sortedPoints[i] = [+points[i][0], +points[i][1], i];
	    sortedPoints.sort(lexicographicOrder);
	    for (i = 0; i < n; ++i) flippedPoints[i] = [sortedPoints[i][0], -sortedPoints[i][1]];
	
	    var upperIndexes = computeUpperHullIndexes(sortedPoints),
	        lowerIndexes = computeUpperHullIndexes(flippedPoints);
	
	    // Construct the hull polygon, removing possible duplicate endpoints.
	    var skipLeft = lowerIndexes[0] === upperIndexes[0],
	        skipRight = lowerIndexes[lowerIndexes.length - 1] === upperIndexes[upperIndexes.length - 1],
	        hull = [];
	
	    // Add upper hull in right-to-l order.
	    // Then add lower hull in left-to-right order.
	    for (i = upperIndexes.length - 1; i >= 0; --i) hull.push(points[sortedPoints[upperIndexes[i]][2]]);
	    for (i = +skipLeft; i < lowerIndexes.length - skipRight; ++i) hull.push(points[sortedPoints[lowerIndexes[i]][2]]);
	
	    return hull;
	  }
	
	  function contains(polygon, point) {
	    var n = polygon.length,
	        p = polygon[n - 1],
	        x = point[0], y = point[1],
	        x0 = p[0], y0 = p[1],
	        x1, y1,
	        inside = false;
	
	    for (var i = 0; i < n; ++i) {
	      p = polygon[i], x1 = p[0], y1 = p[1];
	      if (((y1 > y) !== (y0 > y)) && (x < (x0 - x1) * (y - y1) / (y0 - y1) + x1)) inside = !inside;
	      x0 = x1, y0 = y1;
	    }
	
	    return inside;
	  }
	
	  function length$1(polygon) {
	    var i = -1,
	        n = polygon.length,
	        b = polygon[n - 1],
	        xa,
	        ya,
	        xb = b[0],
	        yb = b[1],
	        perimeter = 0;
	
	    while (++i < n) {
	      xa = xb;
	      ya = yb;
	      b = polygon[i];
	      xb = b[0];
	      yb = b[1];
	      xa -= xb;
	      ya -= yb;
	      perimeter += Math.sqrt(xa * xa + ya * ya);
	    }
	
	    return perimeter;
	  }
	
	var   pi$1 = Math.PI;
	var   tau$1 = 2 * pi$1;
	  var epsilon = 1e-6;
	  var tauEpsilon = tau$1 - epsilon;
	  function Path() {
	    this._x0 = this._y0 = // start of current subpath
	    this._x1 = this._y1 = null; // end of current subpath
	    this._ = [];
	  }
	
	  function path() {
	    return new Path;
	  }
	
	  Path.prototype = path.prototype = {
	    constructor: Path,
	    moveTo: function(x, y) {
	      this._.push("M", this._x0 = this._x1 = +x, ",", this._y0 = this._y1 = +y);
	    },
	    closePath: function() {
	      if (this._x1 !== null) {
	        this._x1 = this._x0, this._y1 = this._y0;
	        this._.push("Z");
	      }
	    },
	    lineTo: function(x, y) {
	      this._.push("L", this._x1 = +x, ",", this._y1 = +y);
	    },
	    quadraticCurveTo: function(x1, y1, x, y) {
	      this._.push("Q", +x1, ",", +y1, ",", this._x1 = +x, ",", this._y1 = +y);
	    },
	    bezierCurveTo: function(x1, y1, x2, y2, x, y) {
	      this._.push("C", +x1, ",", +y1, ",", +x2, ",", +y2, ",", this._x1 = +x, ",", this._y1 = +y);
	    },
	    arcTo: function(x1, y1, x2, y2, r) {
	      x1 = +x1, y1 = +y1, x2 = +x2, y2 = +y2, r = +r;
	      var x0 = this._x1,
	          y0 = this._y1,
	          x21 = x2 - x1,
	          y21 = y2 - y1,
	          x01 = x0 - x1,
	          y01 = y0 - y1,
	          l01_2 = x01 * x01 + y01 * y01;
	
	      // Is the radius negative? Error.
	      if (r < 0) throw new Error("negative radius: " + r);
	
	      // Is this path empty? Move to (x1,y1).
	      if (this._x1 === null) {
	        this._.push(
	          "M", this._x1 = x1, ",", this._y1 = y1
	        );
	      }
	
	      // Or, is (x1,y1) coincident with (x0,y0)? Do nothing.
	      else if (!(l01_2 > epsilon));
	
	      // Or, are (x0,y0), (x1,y1) and (x2,y2) collinear?
	      // Equivalently, is (x1,y1) coincident with (x2,y2)?
	      // Or, is the radius zero? Line to (x1,y1).
	      else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon) || !r) {
	        this._.push(
	          "L", this._x1 = x1, ",", this._y1 = y1
	        );
	      }
	
	      // Otherwise, draw an arc!
	      else {
	        var x20 = x2 - x0,
	            y20 = y2 - y0,
	            l21_2 = x21 * x21 + y21 * y21,
	            l20_2 = x20 * x20 + y20 * y20,
	            l21 = Math.sqrt(l21_2),
	            l01 = Math.sqrt(l01_2),
	            l = r * Math.tan((pi$1 - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2),
	            t01 = l / l01,
	            t21 = l / l21;
	
	        // If the start tangent is not coincident with (x0,y0), line to.
	        if (Math.abs(t01 - 1) > epsilon) {
	          this._.push(
	            "L", x1 + t01 * x01, ",", y1 + t01 * y01
	          );
	        }
	
	        this._.push(
	          "A", r, ",", r, ",0,0,", +(y01 * x20 > x01 * y20), ",", this._x1 = x1 + t21 * x21, ",", this._y1 = y1 + t21 * y21
	        );
	      }
	    },
	    arc: function(x, y, r, a0, a1, ccw) {
	      x = +x, y = +y, r = +r;
	      var dx = r * Math.cos(a0),
	          dy = r * Math.sin(a0),
	          x0 = x + dx,
	          y0 = y + dy,
	          cw = 1 ^ ccw,
	          da = ccw ? a0 - a1 : a1 - a0;
	
	      // Is the radius negative? Error.
	      if (r < 0) throw new Error("negative radius: " + r);
	
	      // Is this path empty? Move to (x0,y0).
	      if (this._x1 === null) {
	        this._.push(
	          "M", x0, ",", y0
	        );
	      }
	
	      // Or, is (x0,y0) not coincident with the previous point? Line to (x0,y0).
	      else if (Math.abs(this._x1 - x0) > epsilon || Math.abs(this._y1 - y0) > epsilon) {
	        this._.push(
	          "L", x0, ",", y0
	        );
	      }
	
	      // Is this arc empty? We’re done.
	      if (!r) return;
	
	      // Is this a complete circle? Draw two arcs to complete the circle.
	      if (da > tauEpsilon) {
	        this._.push(
	          "A", r, ",", r, ",0,1,", cw, ",", x - dx, ",", y - dy,
	          "A", r, ",", r, ",0,1,", cw, ",", this._x1 = x0, ",", this._y1 = y0
	        );
	      }
	
	      // Otherwise, draw an arc!
	      else {
	        if (da < 0) da = da % tau$1 + tau$1;
	        this._.push(
	          "A", r, ",", r, ",0,", +(da >= pi$1), ",", cw, ",", this._x1 = x + r * Math.cos(a1), ",", this._y1 = y + r * Math.sin(a1)
	        );
	      }
	    },
	    rect: function(x, y, w, h) {
	      this._.push("M", this._x0 = this._x1 = +x, ",", this._y0 = this._y1 = +y, "h", +w, "v", +h, "h", -w, "Z");
	    },
	    toString: function() {
	      return this._.join("");
	    }
	  };
	
	  function tree_add(d) {
	    var x = +this._x.call(null, d),
	        y = +this._y.call(null, d);
	    return add(this.cover(x, y), x, y, d);
	  }
	
	  function add(tree, x, y, d) {
	    if (isNaN(x) || isNaN(y)) return tree; // ignore invalid points
	
	    var parent,
	        node = tree._root,
	        leaf = {data: d},
	        x0 = tree._x0,
	        y0 = tree._y0,
	        x1 = tree._x1,
	        y1 = tree._y1,
	        xm,
	        ym,
	        xp,
	        yp,
	        right,
	        bottom,
	        i,
	        j;
	
	    // If the tree is empty, initialize the root as a leaf.
	    if (!node) return tree._root = leaf, tree;
	
	    // Find the existing leaf for the new point, or add it.
	    while (node.length) {
	      if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm; else x1 = xm;
	      if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym; else y1 = ym;
	      if (parent = node, !(node = node[i = bottom << 1 | right])) return parent[i] = leaf, tree;
	    }
	
	    // Is the new point is exactly coincident with the existing point?
	    xp = +tree._x.call(null, node.data);
	    yp = +tree._y.call(null, node.data);
	    if (x === xp && y === yp) return leaf.next = node, parent ? parent[i] = leaf : tree._root = leaf, tree;
	
	    // Otherwise, split the leaf node until the old and new point are separated.
	    do {
	      parent = parent ? parent[i] = new Array(4) : tree._root = new Array(4);
	      if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm; else x1 = xm;
	      if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym; else y1 = ym;
	    } while ((i = bottom << 1 | right) === (j = (yp >= ym) << 1 | (xp >= xm)));
	    return parent[j] = node, parent[i] = leaf, tree;
	  }
	
	  function addAll(data) {
	    var d, i, n = data.length,
	        x,
	        y,
	        xz = new Array(n),
	        yz = new Array(n),
	        x0 = Infinity,
	        y0 = Infinity,
	        x1 = -Infinity,
	        y1 = -Infinity;
	
	    // Compute the points and their extent.
	    for (i = 0; i < n; ++i) {
	      if (isNaN(x = +this._x.call(null, d = data[i])) || isNaN(y = +this._y.call(null, d))) continue;
	      xz[i] = x;
	      yz[i] = y;
	      if (x < x0) x0 = x;
	      if (x > x1) x1 = x;
	      if (y < y0) y0 = y;
	      if (y > y1) y1 = y;
	    }
	
	    // If there were no (valid) points, inherit the existing extent.
	    if (x1 < x0) x0 = this._x0, x1 = this._x1;
	    if (y1 < y0) y0 = this._y0, y1 = this._y1;
	
	    // Expand the tree to cover the new points.
	    this.cover(x0, y0).cover(x1, y1);
	
	    // Add the new points.
	    for (i = 0; i < n; ++i) {
	      add(this, xz[i], yz[i], data[i]);
	    }
	
	    return this;
	  }
	
	  function tree_cover(x, y) {
	    if (isNaN(x = +x) || isNaN(y = +y)) return this; // ignore invalid points
	
	    var x0 = this._x0,
	        y0 = this._y0,
	        x1 = this._x1,
	        y1 = this._y1;
	
	    // If the quadtree has no extent, initialize them.
	    // Integer extent are necessary so that if we later double the extent,
	    // the existing quadrant boundaries don’t change due to floating point error!
	    if (isNaN(x0)) {
	      x1 = (x0 = Math.floor(x)) + 1;
	      y1 = (y0 = Math.floor(y)) + 1;
	    }
	
	    // Otherwise, double repeatedly to cover.
	    else if (x0 > x || x > x1 || y0 > y || y > y1) {
	      var z = x1 - x0,
	          node = this._root,
	          parent,
	          i;
	
	      switch (i = (y < (y0 + y1) / 2) << 1 | (x < (x0 + x1) / 2)) {
	        case 0: {
	          do parent = new Array(4), parent[i] = node, node = parent;
	          while (z *= 2, x1 = x0 + z, y1 = y0 + z, x > x1 || y > y1);
	          break;
	        }
	        case 1: {
	          do parent = new Array(4), parent[i] = node, node = parent;
	          while (z *= 2, x0 = x1 - z, y1 = y0 + z, x0 > x || y > y1);
	          break;
	        }
	        case 2: {
	          do parent = new Array(4), parent[i] = node, node = parent;
	          while (z *= 2, x1 = x0 + z, y0 = y1 - z, x > x1 || y0 > y);
	          break;
	        }
	        case 3: {
	          do parent = new Array(4), parent[i] = node, node = parent;
	          while (z *= 2, x0 = x1 - z, y0 = y1 - z, x0 > x || y0 > y);
	          break;
	        }
	      }
	
	      if (this._root && this._root.length) this._root = node;
	    }
	
	    // If the quadtree covers the point already, just return.
	    else return this;
	
	    this._x0 = x0;
	    this._y0 = y0;
	    this._x1 = x1;
	    this._y1 = y1;
	    return this;
	  }
	
	  function tree_data() {
	    var data = [];
	    this.visit(function(node) {
	      if (!node.length) do data.push(node.data); while (node = node.next)
	    });
	    return data;
	  }
	
	  function tree_extent(_) {
	    return arguments.length
	        ? this.cover(+_[0][0], +_[0][1]).cover(+_[1][0], +_[1][1])
	        : isNaN(this._x0) ? undefined : [[this._x0, this._y0], [this._x1, this._y1]];
	  }
	
	  function Quad(node, x0, y0, x1, y1) {
	    this.node = node;
	    this.x0 = x0;
	    this.y0 = y0;
	    this.x1 = x1;
	    this.y1 = y1;
	  }
	
	  function tree_find(x, y, radius) {
	    var data,
	        x0 = this._x0,
	        y0 = this._y0,
	        x1,
	        y1,
	        x2,
	        y2,
	        x3 = this._x1,
	        y3 = this._y1,
	        quads = [],
	        node = this._root,
	        q,
	        i;
	
	    if (node) quads.push(new Quad(node, x0, y0, x3, y3));
	    if (radius == null) radius = Infinity;
	    else {
	      x0 = x - radius, y0 = y - radius;
	      x3 = x + radius, y3 = y + radius;
	      radius *= radius;
	    }
	
	    while (q = quads.pop()) {
	
	      // Stop searching if this quadrant can’t contain a closer node.
	      if (!(node = q.node)
	          || (x1 = q.x0) > x3
	          || (y1 = q.y0) > y3
	          || (x2 = q.x1) < x0
	          || (y2 = q.y1) < y0) continue;
	
	      // Bisect the current quadrant.
	      if (node.length) {
	        var xm = (x1 + x2) / 2,
	            ym = (y1 + y2) / 2;
	
	        quads.push(
	          new Quad(node[3], xm, ym, x2, y2),
	          new Quad(node[2], x1, ym, xm, y2),
	          new Quad(node[1], xm, y1, x2, ym),
	          new Quad(node[0], x1, y1, xm, ym)
	        );
	
	        // Visit the closest quadrant first.
	        if (i = (y >= ym) << 1 | (x >= xm)) {
	          q = quads[quads.length - 1];
	          quads[quads.length - 1] = quads[quads.length - 1 - i];
	          quads[quads.length - 1 - i] = q;
	        }
	      }
	
	      // Visit this point. (Visiting coincident points isn’t necessary!)
	      else {
	        var dx = x - +this._x.call(null, node.data),
	            dy = y - +this._y.call(null, node.data),
	            d2 = dx * dx + dy * dy;
	        if (d2 < radius) {
	          var d = Math.sqrt(radius = d2);
	          x0 = x - d, y0 = y - d;
	          x3 = x + d, y3 = y + d;
	          data = node.data;
	        }
	      }
	    }
	
	    return data;
	  }
	
	  function tree_remove(d) {
	    if (isNaN(x = +this._x.call(null, d)) || isNaN(y = +this._y.call(null, d))) return this; // ignore invalid points
	
	    var parent,
	        node = this._root,
	        retainer,
	        previous,
	        next,
	        x0 = this._x0,
	        y0 = this._y0,
	        x1 = this._x1,
	        y1 = this._y1,
	        x,
	        y,
	        xm,
	        ym,
	        right,
	        bottom,
	        i,
	        j;
	
	    // If the tree is empty, initialize the root as a leaf.
	    if (!node) return this;
	
	    // Find the leaf node for the point.
	    // While descending, also retain the deepest parent with a non-removed sibling.
	    if (node.length) while (true) {
	      if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm; else x1 = xm;
	      if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym; else y1 = ym;
	      if (!(parent = node, node = node[i = bottom << 1 | right])) return this;
	      if (!node.length) break;
	      if (parent[(i + 1) & 3] || parent[(i + 2) & 3] || parent[(i + 3) & 3]) retainer = parent, j = i;
	    }
	
	    // Find the point to remove.
	    while (node.data !== d) if (!(previous = node, node = node.next)) return this;
	    if (next = node.next) delete node.next;
	
	    // If there are multiple coincident points, remove just the point.
	    if (previous) return (next ? previous.next = next : delete previous.next), this;
	
	    // If this is the root point, remove it.
	    if (!parent) return this._root = next, this;
	
	    // Remove this leaf.
	    next ? parent[i] = next : delete parent[i];
	
	    // If the parent now contains exactly one leaf, collapse superfluous parents.
	    if ((node = parent[0] || parent[1] || parent[2] || parent[3])
	        && node === (parent[3] || parent[2] || parent[1] || parent[0])
	        && !node.length) {
	      if (retainer) retainer[j] = node;
	      else this._root = node;
	    }
	
	    return this;
	  }
	
	  function removeAll(data) {
	    for (var i = 0, n = data.length; i < n; ++i) this.remove(data[i]);
	    return this;
	  }
	
	  function tree_root() {
	    return this._root;
	  }
	
	  function tree_size() {
	    var size = 0;
	    this.visit(function(node) {
	      if (!node.length) do ++size; while (node = node.next)
	    });
	    return size;
	  }
	
	  function tree_visit(callback) {
	    var quads = [], q, node = this._root, child, x0, y0, x1, y1;
	    if (node) quads.push(new Quad(node, this._x0, this._y0, this._x1, this._y1));
	    while (q = quads.pop()) {
	      if (!callback(node = q.node, x0 = q.x0, y0 = q.y0, x1 = q.x1, y1 = q.y1) && node.length) {
	        var xm = (x0 + x1) / 2, ym = (y0 + y1) / 2;
	        if (child = node[3]) quads.push(new Quad(child, xm, ym, x1, y1));
	        if (child = node[2]) quads.push(new Quad(child, x0, ym, xm, y1));
	        if (child = node[1]) quads.push(new Quad(child, xm, y0, x1, ym));
	        if (child = node[0]) quads.push(new Quad(child, x0, y0, xm, ym));
	      }
	    }
	    return this;
	  }
	
	  function tree_visitAfter(callback) {
	    var quads = [], next = [], q;
	    if (this._root) quads.push(new Quad(this._root, this._x0, this._y0, this._x1, this._y1));
	    while (q = quads.pop()) {
	      var node = q.node;
	      if (node.length) {
	        var child, x0 = q.x0, y0 = q.y0, x1 = q.x1, y1 = q.y1, xm = (x0 + x1) / 2, ym = (y0 + y1) / 2;
	        if (child = node[0]) quads.push(new Quad(child, x0, y0, xm, ym));
	        if (child = node[1]) quads.push(new Quad(child, xm, y0, x1, ym));
	        if (child = node[2]) quads.push(new Quad(child, x0, ym, xm, y1));
	        if (child = node[3]) quads.push(new Quad(child, xm, ym, x1, y1));
	      }
	      next.push(q);
	    }
	    while (q = next.pop()) {
	      callback(q.node, q.x0, q.y0, q.x1, q.y1);
	    }
	    return this;
	  }
	
	  function defaultX(d) {
	    return d[0];
	  }
	
	  function tree_x(_) {
	    return arguments.length ? (this._x = _, this) : this._x;
	  }
	
	  function defaultY(d) {
	    return d[1];
	  }
	
	  function tree_y(_) {
	    return arguments.length ? (this._y = _, this) : this._y;
	  }
	
	  function quadtree(nodes, x, y) {
	    var tree = new Quadtree(x == null ? defaultX : x, y == null ? defaultY : y, NaN, NaN, NaN, NaN);
	    return nodes == null ? tree : tree.addAll(nodes);
	  }
	
	  function Quadtree(x, y, x0, y0, x1, y1) {
	    this._x = x;
	    this._y = y;
	    this._x0 = x0;
	    this._y0 = y0;
	    this._x1 = x1;
	    this._y1 = y1;
	    this._root = undefined;
	  }
	
	  function leaf_copy(leaf) {
	    var copy = {data: leaf.data}, next = copy;
	    while (leaf = leaf.next) next = next.next = {data: leaf.data};
	    return copy;
	  }
	
	  var treeProto = quadtree.prototype = Quadtree.prototype;
	
	  treeProto.copy = function() {
	    var copy = new Quadtree(this._x, this._y, this._x0, this._y0, this._x1, this._y1),
	        node = this._root,
	        nodes,
	        child;
	
	    if (!node) return copy;
	
	    if (!node.length) return copy._root = leaf_copy(node), copy;
	
	    nodes = [{source: node, target: copy._root = new Array(4)}];
	    while (node = nodes.pop()) {
	      for (var i = 0; i < 4; ++i) {
	        if (child = node.source[i]) {
	          if (child.length) nodes.push({source: child, target: node.target[i] = new Array(4)});
	          else node.target[i] = leaf_copy(child);
	        }
	      }
	    }
	
	    return copy;
	  };
	
	  treeProto.add = tree_add;
	  treeProto.addAll = addAll;
	  treeProto.cover = tree_cover;
	  treeProto.data = tree_data;
	  treeProto.extent = tree_extent;
	  treeProto.find = tree_find;
	  treeProto.remove = tree_remove;
	  treeProto.removeAll = removeAll;
	  treeProto.root = tree_root;
	  treeProto.size = tree_size;
	  treeProto.visit = tree_visit;
	  treeProto.visitAfter = tree_visitAfter;
	  treeProto.x = tree_x;
	  treeProto.y = tree_y;
	
	  var slice$1 = [].slice;
	
	  var noabort = {};
	
	  function Queue(size) {
	    if (!(size >= 1)) throw new Error;
	    this._size = size;
	    this._call =
	    this._error = null;
	    this._tasks = [];
	    this._data = [];
	    this._waiting =
	    this._active =
	    this._ended =
	    this._start = 0; // inside a synchronous task callback?
	  }
	
	  Queue.prototype = queue.prototype = {
	    constructor: Queue,
	    defer: function(callback) {
	      if (typeof callback !== "function" || this._call) throw new Error;
	      if (this._error != null) return this;
	      var t = slice$1.call(arguments, 1);
	      t.push(callback);
	      ++this._waiting, this._tasks.push(t);
	      poke(this);
	      return this;
	    },
	    abort: function() {
	      if (this._error == null) abort(this, new Error("abort"));
	      return this;
	    },
	    await: function(callback) {
	      if (typeof callback !== "function" || this._call) throw new Error;
	      this._call = function(error, results) { callback.apply(null, [error].concat(results)); };
	      maybeNotify(this);
	      return this;
	    },
	    awaitAll: function(callback) {
	      if (typeof callback !== "function" || this._call) throw new Error;
	      this._call = callback;
	      maybeNotify(this);
	      return this;
	    }
	  };
	
	  function poke(q) {
	    if (!q._start) try { start(q); } // let the current task complete
	    catch (e) { if (q._tasks[q._ended + q._active - 1]) abort(q, e); } // task errored synchronously
	  }
	
	  function start(q) {
	    while (q._start = q._waiting && q._active < q._size) {
	      var i = q._ended + q._active,
	          t = q._tasks[i],
	          j = t.length - 1,
	          c = t[j];
	      t[j] = end(q, i);
	      --q._waiting, ++q._active;
	      t = c.apply(null, t);
	      if (!q._tasks[i]) continue; // task finished synchronously
	      q._tasks[i] = t || noabort;
	    }
	  }
	
	  function end(q, i) {
	    return function(e, r) {
	      if (!q._tasks[i]) return; // ignore multiple callbacks
	      --q._active, ++q._ended;
	      q._tasks[i] = null;
	      if (q._error != null) return; // ignore secondary errors
	      if (e != null) {
	        abort(q, e);
	      } else {
	        q._data[i] = r;
	        if (q._waiting) poke(q);
	        else maybeNotify(q);
	      }
	    };
	  }
	
	  function abort(q, e) {
	    var i = q._tasks.length, t;
	    q._error = e; // ignore active callbacks
	    q._data = undefined; // allow gc
	    q._waiting = NaN; // prevent starting
	
	    while (--i >= 0) {
	      if (t = q._tasks[i]) {
	        q._tasks[i] = null;
	        if (t.abort) try { t.abort(); }
	        catch (e) { /* ignore */ }
	      }
	    }
	
	    q._active = NaN; // allow notification
	    maybeNotify(q);
	  }
	
	  function maybeNotify(q) {
	    if (!q._active && q._call) q._call(q._error, q._data);
	  }
	
	  function queue(concurrency) {
	    return new Queue(arguments.length ? +concurrency : Infinity);
	  }
	
	  function constant$1(x) {
	    return function constant() {
	      return x;
	    };
	  }
	
	  var epsilon$1 = 1e-12;
	  var pi$2 = Math.PI;
	  var halfPi$1 = pi$2 / 2;
	  var tau$2 = 2 * pi$2;
	
	  function arcInnerRadius(d) {
	    return d.innerRadius;
	  }
	
	  function arcOuterRadius(d) {
	    return d.outerRadius;
	  }
	
	  function arcStartAngle(d) {
	    return d.startAngle;
	  }
	
	  function arcEndAngle(d) {
	    return d.endAngle;
	  }
	
	  function arcPadAngle(d) {
	    return d && d.padAngle; // Note: optional!
	  }
	
	  function asin(x) {
	    return x >= 1 ? halfPi$1 : x <= -1 ? -halfPi$1 : Math.asin(x);
	  }
	
	  function intersect(x0, y0, x1, y1, x2, y2, x3, y3) {
	    var x10 = x1 - x0, y10 = y1 - y0,
	        x32 = x3 - x2, y32 = y3 - y2,
	        t = (x32 * (y0 - y2) - y32 * (x0 - x2)) / (y32 * x10 - x32 * y10);
	    return [x0 + t * x10, y0 + t * y10];
	  }
	
	  // Compute perpendicular offset line of length rc.
	  // http://mathworld.wolfram.com/Circle-LineIntersection.html
	  function cornerTangents(x0, y0, x1, y1, r1, rc, cw) {
	    var x01 = x0 - x1,
	        y01 = y0 - y1,
	        lo = (cw ? rc : -rc) / Math.sqrt(x01 * x01 + y01 * y01),
	        ox = lo * y01,
	        oy = -lo * x01,
	        x11 = x0 + ox,
	        y11 = y0 + oy,
	        x10 = x1 + ox,
	        y10 = y1 + oy,
	        x00 = (x11 + x10) / 2,
	        y00 = (y11 + y10) / 2,
	        dx = x10 - x11,
	        dy = y10 - y11,
	        d2 = dx * dx + dy * dy,
	        r = r1 - rc,
	        D = x11 * y10 - x10 * y11,
	        d = (dy < 0 ? -1 : 1) * Math.sqrt(Math.max(0, r * r * d2 - D * D)),
	        cx0 = (D * dy - dx * d) / d2,
	        cy0 = (-D * dx - dy * d) / d2,
	        cx1 = (D * dy + dx * d) / d2,
	        cy1 = (-D * dx + dy * d) / d2,
	        dx0 = cx0 - x00,
	        dy0 = cy0 - y00,
	        dx1 = cx1 - x00,
	        dy1 = cy1 - y00;
	
	    // Pick the closer of the two intersection points.
	    // TODO Is there a faster way to determine which intersection to use?
	    if (dx0 * dx0 + dy0 * dy0 > dx1 * dx1 + dy1 * dy1) cx0 = cx1, cy0 = cy1;
	
	    return {
	      cx: cx0,
	      cy: cy0,
	      x01: -ox,
	      y01: -oy,
	      x11: cx0 * (r1 / r - 1),
	      y11: cy0 * (r1 / r - 1)
	    };
	  }
	
	  function arc() {
	    var innerRadius = arcInnerRadius,
	        outerRadius = arcOuterRadius,
	        cornerRadius = constant$1(0),
	        padRadius = null,
	        startAngle = arcStartAngle,
	        endAngle = arcEndAngle,
	        padAngle = arcPadAngle,
	        context = null;
	
	    function arc() {
	      var buffer,
	          r,
	          r0 = +innerRadius.apply(this, arguments),
	          r1 = +outerRadius.apply(this, arguments),
	          a0 = startAngle.apply(this, arguments) - halfPi$1,
	          a1 = endAngle.apply(this, arguments) - halfPi$1,
	          da = Math.abs(a1 - a0),
	          cw = a1 > a0;
	
	      if (!context) context = buffer = path();
	
	      // Ensure that the outer radius is always larger than the inner radius.
	      if (r1 < r0) r = r1, r1 = r0, r0 = r;
	
	      // Is it a point?
	      if (!(r1 > epsilon$1)) context.moveTo(0, 0);
	
	      // Or is it a circle or annulus?
	      else if (da > tau$2 - epsilon$1) {
	        context.moveTo(r1 * Math.cos(a0), r1 * Math.sin(a0));
	        context.arc(0, 0, r1, a0, a1, !cw);
	        if (r0 > epsilon$1) {
	          context.moveTo(r0 * Math.cos(a1), r0 * Math.sin(a1));
	          context.arc(0, 0, r0, a1, a0, cw);
	        }
	      }
	
	      // Or is it a circular or annular sector?
	      else {
	        var a01 = a0,
	            a11 = a1,
	            a00 = a0,
	            a10 = a1,
	            da0 = da,
	            da1 = da,
	            ap = padAngle.apply(this, arguments) / 2,
	            rp = (ap > epsilon$1) && (padRadius ? +padRadius.apply(this, arguments) : Math.sqrt(r0 * r0 + r1 * r1)),
	            rc = Math.min(Math.abs(r1 - r0) / 2, +cornerRadius.apply(this, arguments)),
	            rc0 = rc,
	            rc1 = rc,
	            t0,
	            t1;
	
	        // Apply padding? Note that since r1 ≥ r0, da1 ≥ da0.
	        if (rp > epsilon$1) {
	          var p0 = asin(rp / r0 * Math.sin(ap)),
	              p1 = asin(rp / r1 * Math.sin(ap));
	          if ((da0 -= p0 * 2) > epsilon$1) p0 *= (cw ? 1 : -1), a00 += p0, a10 -= p0;
	          else da0 = 0, a00 = a10 = (a0 + a1) / 2;
	          if ((da1 -= p1 * 2) > epsilon$1) p1 *= (cw ? 1 : -1), a01 += p1, a11 -= p1;
	          else da1 = 0, a01 = a11 = (a0 + a1) / 2;
	        }
	
	        var x01 = r1 * Math.cos(a01),
	            y01 = r1 * Math.sin(a01),
	            x10 = r0 * Math.cos(a10),
	            y10 = r0 * Math.sin(a10);
	
	        // Apply rounded corners?
	        if (rc > epsilon$1) {
	          var x11 = r1 * Math.cos(a11),
	              y11 = r1 * Math.sin(a11),
	              x00 = r0 * Math.cos(a00),
	              y00 = r0 * Math.sin(a00);
	
	          // Restrict the corner radius according to the sector angle.
	          if (da < pi$2) {
	            var oc = da0 > epsilon$1 ? intersect(x01, y01, x00, y00, x11, y11, x10, y10) : [x10, y10],
	                ax = x01 - oc[0],
	                ay = y01 - oc[1],
	                bx = x11 - oc[0],
	                by = y11 - oc[1],
	                kc = 1 / Math.sin(Math.acos((ax * bx + ay * by) / (Math.sqrt(ax * ax + ay * ay) * Math.sqrt(bx * bx + by * by))) / 2),
	                lc = Math.sqrt(oc[0] * oc[0] + oc[1] * oc[1]);
	            rc0 = Math.min(rc, (r0 - lc) / (kc - 1));
	            rc1 = Math.min(rc, (r1 - lc) / (kc + 1));
	          }
	        }
	
	        // Is the sector collapsed to a line?
	        if (!(da1 > epsilon$1)) context.moveTo(x01, y01);
	
	        // Does the sector’s outer ring have rounded corners?
	        else if (rc1 > epsilon$1) {
	          t0 = cornerTangents(x00, y00, x01, y01, r1, rc1, cw);
	          t1 = cornerTangents(x11, y11, x10, y10, r1, rc1, cw);
	
	          context.moveTo(t0.cx + t0.x01, t0.cy + t0.y01);
	
	          // Have the corners merged?
	          if (rc1 < rc) context.arc(t0.cx, t0.cy, rc1, Math.atan2(t0.y01, t0.x01), Math.atan2(t1.y01, t1.x01), !cw);
	
	          // Otherwise, draw the two corners and the ring.
	          else {
	            context.arc(t0.cx, t0.cy, rc1, Math.atan2(t0.y01, t0.x01), Math.atan2(t0.y11, t0.x11), !cw);
	            context.arc(0, 0, r1, Math.atan2(t0.cy + t0.y11, t0.cx + t0.x11), Math.atan2(t1.cy + t1.y11, t1.cx + t1.x11), !cw);
	            context.arc(t1.cx, t1.cy, rc1, Math.atan2(t1.y11, t1.x11), Math.atan2(t1.y01, t1.x01), !cw);
	          }
	        }
	
	        // Or is the outer ring just a circular arc?
	        else context.moveTo(x01, y01), context.arc(0, 0, r1, a01, a11, !cw);
	
	        // Is there no inner ring, and it’s a circular sector?
	        // Or perhaps it’s an annular sector collapsed due to padding?
	        if (!(r0 > epsilon$1) || !(da0 > epsilon$1)) context.lineTo(x10, y10);
	
	        // Does the sector’s inner ring (or point) have rounded corners?
	        else if (rc0 > epsilon$1) {
	          t0 = cornerTangents(x10, y10, x11, y11, r0, -rc0, cw);
	          t1 = cornerTangents(x01, y01, x00, y00, r0, -rc0, cw);
	
	          context.lineTo(t0.cx + t0.x01, t0.cy + t0.y01);
	
	          // Have the corners merged?
	          if (rc0 < rc) context.arc(t0.cx, t0.cy, rc0, Math.atan2(t0.y01, t0.x01), Math.atan2(t1.y01, t1.x01), !cw);
	
	          // Otherwise, draw the two corners and the ring.
	          else {
	            context.arc(t0.cx, t0.cy, rc0, Math.atan2(t0.y01, t0.x01), Math.atan2(t0.y11, t0.x11), !cw);
	            context.arc(0, 0, r0, Math.atan2(t0.cy + t0.y11, t0.cx + t0.x11), Math.atan2(t1.cy + t1.y11, t1.cx + t1.x11), cw);
	            context.arc(t1.cx, t1.cy, rc0, Math.atan2(t1.y11, t1.x11), Math.atan2(t1.y01, t1.x01), !cw);
	          }
	        }
	
	        // Or is the inner ring just a circular arc?
	        else context.arc(0, 0, r0, a10, a00, cw);
	      }
	
	      context.closePath();
	
	      if (buffer) return context = null, buffer + "" || null;
	    }
	
	    arc.centroid = function() {
	      var r = (+innerRadius.apply(this, arguments) + +outerRadius.apply(this, arguments)) / 2,
	          a = (+startAngle.apply(this, arguments) + +endAngle.apply(this, arguments)) / 2 - pi$2 / 2;
	      return [Math.cos(a) * r, Math.sin(a) * r];
	    };
	
	    arc.innerRadius = function(_) {
	      return arguments.length ? (innerRadius = typeof _ === "function" ? _ : constant$1(+_), arc) : innerRadius;
	    };
	
	    arc.outerRadius = function(_) {
	      return arguments.length ? (outerRadius = typeof _ === "function" ? _ : constant$1(+_), arc) : outerRadius;
	    };
	
	    arc.cornerRadius = function(_) {
	      return arguments.length ? (cornerRadius = typeof _ === "function" ? _ : constant$1(+_), arc) : cornerRadius;
	    };
	
	    arc.padRadius = function(_) {
	      return arguments.length ? (padRadius = _ == null ? null : typeof _ === "function" ? _ : constant$1(+_), arc) : padRadius;
	    };
	
	    arc.startAngle = function(_) {
	      return arguments.length ? (startAngle = typeof _ === "function" ? _ : constant$1(+_), arc) : startAngle;
	    };
	
	    arc.endAngle = function(_) {
	      return arguments.length ? (endAngle = typeof _ === "function" ? _ : constant$1(+_), arc) : endAngle;
	    };
	
	    arc.padAngle = function(_) {
	      return arguments.length ? (padAngle = typeof _ === "function" ? _ : constant$1(+_), arc) : padAngle;
	    };
	
	    arc.context = function(_) {
	      return arguments.length ? ((context = _ == null ? null : _), arc) : context;
	    };
	
	    return arc;
	  }
	
	  function Linear(context) {
	    this._context = context;
	  }
	
	  Linear.prototype = {
	    areaStart: function() {
	      this._line = 0;
	    },
	    areaEnd: function() {
	      this._line = NaN;
	    },
	    lineStart: function() {
	      this._point = 0;
	    },
	    lineEnd: function() {
	      if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
	      this._line = 1 - this._line;
	    },
	    point: function(x, y) {
	      x = +x, y = +y;
	      switch (this._point) {
	        case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
	        case 1: this._point = 2; // proceed
	        default: this._context.lineTo(x, y); break;
	      }
	    }
	  };
	
	  function curveLinear(context) {
	    return new Linear(context);
	  }
	
	  function x(p) {
	    return p[0];
	  }
	
	  function y(p) {
	    return p[1];
	  }
	
	  function line() {
	    var x$$ = x,
	        y$$ = y,
	        defined = constant$1(true),
	        context = null,
	        curve = curveLinear,
	        output = null;
	
	    function line(data) {
	      var i,
	          n = data.length,
	          d,
	          defined0 = false,
	          buffer;
	
	      if (context == null) output = curve(buffer = path());
	
	      for (i = 0; i <= n; ++i) {
	        if (!(i < n && defined(d = data[i], i, data)) === defined0) {
	          if (defined0 = !defined0) output.lineStart();
	          else output.lineEnd();
	        }
	        if (defined0) output.point(+x$$(d, i, data), +y$$(d, i, data));
	      }
	
	      if (buffer) return output = null, buffer + "" || null;
	    }
	
	    line.x = function(_) {
	      return arguments.length ? (x$$ = typeof _ === "function" ? _ : constant$1(+_), line) : x$$;
	    };
	
	    line.y = function(_) {
	      return arguments.length ? (y$$ = typeof _ === "function" ? _ : constant$1(+_), line) : y$$;
	    };
	
	    line.defined = function(_) {
	      return arguments.length ? (defined = typeof _ === "function" ? _ : constant$1(!!_), line) : defined;
	    };
	
	    line.curve = function(_) {
	      return arguments.length ? (curve = _, context != null && (output = curve(context)), line) : curve;
	    };
	
	    line.context = function(_) {
	      return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), line) : context;
	    };
	
	    return line;
	  }
	
	  function area$1() {
	    var x0 = x,
	        x1 = null,
	        y0 = constant$1(0),
	        y1 = y,
	        defined = constant$1(true),
	        context = null,
	        curve = curveLinear,
	        output = null;
	
	    function area(data) {
	      var i,
	          j,
	          k,
	          n = data.length,
	          d,
	          defined0 = false,
	          buffer,
	          x0z = new Array(n),
	          y0z = new Array(n);
	
	      if (context == null) output = curve(buffer = path());
	
	      for (i = 0; i <= n; ++i) {
	        if (!(i < n && defined(d = data[i], i, data)) === defined0) {
	          if (defined0 = !defined0) {
	            j = i;
	            output.areaStart();
	            output.lineStart();
	          } else {
	            output.lineEnd();
	            output.lineStart();
	            for (k = i - 1; k >= j; --k) {
	              output.point(x0z[k], y0z[k]);
	            }
	            output.lineEnd();
	            output.areaEnd();
	          }
	        }
	        if (defined0) {
	          x0z[i] = +x0(d, i, data), y0z[i] = +y0(d, i, data);
	          output.point(x1 ? +x1(d, i, data) : x0z[i], y1 ? +y1(d, i, data) : y0z[i]);
	        }
	      }
	
	      if (buffer) return output = null, buffer + "" || null;
	    }
	
	    function arealine() {
	      return line().defined(defined).curve(curve).context(context);
	    }
	
	    area.x = function(_) {
	      return arguments.length ? (x0 = typeof _ === "function" ? _ : constant$1(+_), x1 = null, area) : x0;
	    };
	
	    area.x0 = function(_) {
	      return arguments.length ? (x0 = typeof _ === "function" ? _ : constant$1(+_), area) : x0;
	    };
	
	    area.x1 = function(_) {
	      return arguments.length ? (x1 = _ == null ? null : typeof _ === "function" ? _ : constant$1(+_), area) : x1;
	    };
	
	    area.y = function(_) {
	      return arguments.length ? (y0 = typeof _ === "function" ? _ : constant$1(+_), y1 = null, area) : y0;
	    };
	
	    area.y0 = function(_) {
	      return arguments.length ? (y0 = typeof _ === "function" ? _ : constant$1(+_), area) : y0;
	    };
	
	    area.y1 = function(_) {
	      return arguments.length ? (y1 = _ == null ? null : typeof _ === "function" ? _ : constant$1(+_), area) : y1;
	    };
	
	    area.lineX0 =
	    area.lineY0 = function() {
	      return arealine().x(x0).y(y0);
	    };
	
	    area.lineY1 = function() {
	      return arealine().x(x0).y(y1);
	    };
	
	    area.lineX1 = function() {
	      return arealine().x(x1).y(y0);
	    };
	
	    area.defined = function(_) {
	      return arguments.length ? (defined = typeof _ === "function" ? _ : constant$1(!!_), area) : defined;
	    };
	
	    area.curve = function(_) {
	      return arguments.length ? (curve = _, context != null && (output = curve(context)), area) : curve;
	    };
	
	    area.context = function(_) {
	      return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), area) : context;
	    };
	
	    return area;
	  }
	
	  function descending$1(a, b) {
	    return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
	  }
	
	  function identity$1(d) {
	    return d;
	  }
	
	  function pie() {
	    var value = identity$1,
	        sortValues = descending$1,
	        sort = null,
	        startAngle = constant$1(0),
	        endAngle = constant$1(tau$2),
	        padAngle = constant$1(0);
	
	    function pie(data) {
	      var i,
	          n = data.length,
	          j,
	          k,
	          sum = 0,
	          index = new Array(n),
	          arcs = new Array(n),
	          a0 = +startAngle.apply(this, arguments),
	          da = Math.min(tau$2, Math.max(-tau$2, endAngle.apply(this, arguments) - a0)),
	          a1,
	          p = Math.min(Math.abs(da) / n, padAngle.apply(this, arguments)),
	          pa = p * (da < 0 ? -1 : 1),
	          v;
	
	      for (i = 0; i < n; ++i) {
	        if ((v = arcs[index[i] = i] = +value(data[i], i, data)) > 0) {
	          sum += v;
	        }
	      }
	
	      // Optionally sort the arcs by previously-computed values or by data.
	      if (sortValues != null) index.sort(function(i, j) { return sortValues(arcs[i], arcs[j]); });
	      else if (sort != null) index.sort(function(i, j) { return sort(data[i], data[j]); });
	
	      // Compute the arcs! They are stored in the original data's order.
	      for (i = 0, k = sum ? (da - n * pa) / sum : 0; i < n; ++i, a0 = a1) {
	        j = index[i], v = arcs[j], a1 = a0 + (v > 0 ? v * k : 0) + pa, arcs[j] = {
	          data: data[j],
	          index: i,
	          value: v,
	          startAngle: a0,
	          endAngle: a1,
	          padAngle: p
	        };
	      }
	
	      return arcs;
	    }
	
	    pie.value = function(_) {
	      return arguments.length ? (value = typeof _ === "function" ? _ : constant$1(+_), pie) : value;
	    };
	
	    pie.sortValues = function(_) {
	      return arguments.length ? (sortValues = _, sort = null, pie) : sortValues;
	    };
	
	    pie.sort = function(_) {
	      return arguments.length ? (sort = _, sortValues = null, pie) : sort;
	    };
	
	    pie.startAngle = function(_) {
	      return arguments.length ? (startAngle = typeof _ === "function" ? _ : constant$1(+_), pie) : startAngle;
	    };
	
	    pie.endAngle = function(_) {
	      return arguments.length ? (endAngle = typeof _ === "function" ? _ : constant$1(+_), pie) : endAngle;
	    };
	
	    pie.padAngle = function(_) {
	      return arguments.length ? (padAngle = typeof _ === "function" ? _ : constant$1(+_), pie) : padAngle;
	    };
	
	    return pie;
	  }
	
	  var curveRadialLinear = curveRadial(curveLinear);
	
	  function Radial(curve) {
	    this._curve = curve;
	  }
	
	  Radial.prototype = {
	    areaStart: function() {
	      this._curve.areaStart();
	    },
	    areaEnd: function() {
	      this._curve.areaEnd();
	    },
	    lineStart: function() {
	      this._curve.lineStart();
	    },
	    lineEnd: function() {
	      this._curve.lineEnd();
	    },
	    point: function(a, r) {
	      this._curve.point(r * Math.sin(a), r * -Math.cos(a));
	    }
	  };
	
	  function curveRadial(curve) {
	
	    function radial(context) {
	      return new Radial(curve(context));
	    }
	
	    radial._curve = curve;
	
	    return radial;
	  }
	
	  function radialLine(l) {
	    var c = l.curve;
	
	    l.angle = l.x, delete l.x;
	    l.radius = l.y, delete l.y;
	
	    l.curve = function(_) {
	      return arguments.length ? c(curveRadial(_)) : c()._curve;
	    };
	
	    return l;
	  }
	
	  function radialLine$1() {
	    return radialLine(line().curve(curveRadialLinear));
	  }
	
	  function radialArea() {
	    var a = area$1().curve(curveRadialLinear),
	        c = a.curve,
	        x0 = a.lineX0,
	        x1 = a.lineX1,
	        y0 = a.lineY0,
	        y1 = a.lineY1;
	
	    a.angle = a.x, delete a.x;
	    a.startAngle = a.x0, delete a.x0;
	    a.endAngle = a.x1, delete a.x1;
	    a.radius = a.y, delete a.y;
	    a.innerRadius = a.y0, delete a.y0;
	    a.outerRadius = a.y1, delete a.y1;
	    a.lineStartAngle = function() { return radialLine(x0()); }, delete a.lineX0;
	    a.lineEndAngle = function() { return radialLine(x1()); }, delete a.lineX1;
	    a.lineInnerRadius = function() { return radialLine(y0()); }, delete a.lineY0;
	    a.lineOuterRadius = function() { return radialLine(y1()); }, delete a.lineY1;
	
	    a.curve = function(_) {
	      return arguments.length ? c(curveRadial(_)) : c()._curve;
	    };
	
	    return a;
	  }
	
	  var circle = {
	    draw: function(context, size) {
	      var r = Math.sqrt(size / pi$2);
	      context.moveTo(r, 0);
	      context.arc(0, 0, r, 0, tau$2);
	    }
	  };
	
	  var cross$1 = {
	    draw: function(context, size) {
	      var r = Math.sqrt(size / 5) / 2;
	      context.moveTo(-3 * r, -r);
	      context.lineTo(-r, -r);
	      context.lineTo(-r, -3 * r);
	      context.lineTo(r, -3 * r);
	      context.lineTo(r, -r);
	      context.lineTo(3 * r, -r);
	      context.lineTo(3 * r, r);
	      context.lineTo(r, r);
	      context.lineTo(r, 3 * r);
	      context.lineTo(-r, 3 * r);
	      context.lineTo(-r, r);
	      context.lineTo(-3 * r, r);
	      context.closePath();
	    }
	  };
	
	  var tan30 = Math.sqrt(1 / 3);
	  var tan30_2 = tan30 * 2;
	  var diamond = {
	    draw: function(context, size) {
	      var y = Math.sqrt(size / tan30_2),
	          x = y * tan30;
	      context.moveTo(0, -y);
	      context.lineTo(x, 0);
	      context.lineTo(0, y);
	      context.lineTo(-x, 0);
	      context.closePath();
	    }
	  };
	
	  var ka = 0.89081309152928522810;
	  var kr = Math.sin(pi$2 / 10) / Math.sin(7 * pi$2 / 10);
	  var kx = Math.sin(tau$2 / 10) * kr;
	  var ky = -Math.cos(tau$2 / 10) * kr;
	  var star = {
	    draw: function(context, size) {
	      var r = Math.sqrt(size * ka),
	          x = kx * r,
	          y = ky * r;
	      context.moveTo(0, -r);
	      context.lineTo(x, y);
	      for (var i = 1; i < 5; ++i) {
	        var a = tau$2 * i / 5,
	            c = Math.cos(a),
	            s = Math.sin(a);
	        context.lineTo(s * r, -c * r);
	        context.lineTo(c * x - s * y, s * x + c * y);
	      }
	      context.closePath();
	    }
	  };
	
	  var square = {
	    draw: function(context, size) {
	      var w = Math.sqrt(size),
	          x = -w / 2;
	      context.rect(x, x, w, w);
	    }
	  };
	
	  var sqrt3 = Math.sqrt(3);
	
	  var triangle = {
	    draw: function(context, size) {
	      var y = -Math.sqrt(size / (sqrt3 * 3));
	      context.moveTo(0, y * 2);
	      context.lineTo(-sqrt3 * y, -y);
	      context.lineTo(sqrt3 * y, -y);
	      context.closePath();
	    }
	  };
	
	  var c = -0.5;
	  var s = Math.sqrt(3) / 2;
	  var k = 1 / Math.sqrt(12);
	  var a = (k / 2 + 1) * 3;
	  var wye = {
	    draw: function(context, size) {
	      var r = Math.sqrt(size / a),
	          x0 = r / 2,
	          y0 = r * k,
	          x1 = x0,
	          y1 = r * k + r,
	          x2 = -x1,
	          y2 = y1;
	      context.moveTo(x0, y0);
	      context.lineTo(x1, y1);
	      context.lineTo(x2, y2);
	      context.lineTo(c * x0 - s * y0, s * x0 + c * y0);
	      context.lineTo(c * x1 - s * y1, s * x1 + c * y1);
	      context.lineTo(c * x2 - s * y2, s * x2 + c * y2);
	      context.lineTo(c * x0 + s * y0, c * y0 - s * x0);
	      context.lineTo(c * x1 + s * y1, c * y1 - s * x1);
	      context.lineTo(c * x2 + s * y2, c * y2 - s * x2);
	      context.closePath();
	    }
	  };
	
	  var symbols = [
	    circle,
	    cross$1,
	    diamond,
	    square,
	    star,
	    triangle,
	    wye
	  ];
	
	  function symbol() {
	    var type = constant$1(circle),
	        size = constant$1(64),
	        context = null;
	
	    function symbol() {
	      var buffer;
	      if (!context) context = buffer = path();
	      type.apply(this, arguments).draw(context, +size.apply(this, arguments));
	      if (buffer) return context = null, buffer + "" || null;
	    }
	
	    symbol.type = function(_) {
	      return arguments.length ? (type = typeof _ === "function" ? _ : constant$1(_), symbol) : type;
	    };
	
	    symbol.size = function(_) {
	      return arguments.length ? (size = typeof _ === "function" ? _ : constant$1(+_), symbol) : size;
	    };
	
	    symbol.context = function(_) {
	      return arguments.length ? (context = _ == null ? null : _, symbol) : context;
	    };
	
	    return symbol;
	  }
	
	  function noop() {}
	
	  function point(that, x, y) {
	    that._context.bezierCurveTo(
	      (2 * that._x0 + that._x1) / 3,
	      (2 * that._y0 + that._y1) / 3,
	      (that._x0 + 2 * that._x1) / 3,
	      (that._y0 + 2 * that._y1) / 3,
	      (that._x0 + 4 * that._x1 + x) / 6,
	      (that._y0 + 4 * that._y1 + y) / 6
	    );
	  }
	
	  function Basis(context) {
	    this._context = context;
	  }
	
	  Basis.prototype = {
	    areaStart: function() {
	      this._line = 0;
	    },
	    areaEnd: function() {
	      this._line = NaN;
	    },
	    lineStart: function() {
	      this._x0 = this._x1 =
	      this._y0 = this._y1 = NaN;
	      this._point = 0;
	    },
	    lineEnd: function() {
	      switch (this._point) {
	        case 3: point(this, this._x1, this._y1); // proceed
	        case 2: this._context.lineTo(this._x1, this._y1); break;
	      }
	      if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
	      this._line = 1 - this._line;
	    },
	    point: function(x, y) {
	      x = +x, y = +y;
	      switch (this._point) {
	        case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
	        case 1: this._point = 2; break;
	        case 2: this._point = 3; this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6); // proceed
	        default: point(this, x, y); break;
	      }
	      this._x0 = this._x1, this._x1 = x;
	      this._y0 = this._y1, this._y1 = y;
	    }
	  };
	
	  function basis(context) {
	    return new Basis(context);
	  }
	
	  function BasisClosed(context) {
	    this._context = context;
	  }
	
	  BasisClosed.prototype = {
	    areaStart: noop,
	    areaEnd: noop,
	    lineStart: function() {
	      this._x0 = this._x1 = this._x2 = this._x3 = this._x4 =
	      this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN;
	      this._point = 0;
	    },
	    lineEnd: function() {
	      switch (this._point) {
	        case 1: {
	          this._context.moveTo(this._x2, this._y2);
	          this._context.closePath();
	          break;
	        }
	        case 2: {
	          this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3);
	          this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3);
	          this._context.closePath();
	          break;
	        }
	        case 3: {
	          this.point(this._x2, this._y2);
	          this.point(this._x3, this._y3);
	          this.point(this._x4, this._y4);
	          break;
	        }
	      }
	    },
	    point: function(x, y) {
	      x = +x, y = +y;
	      switch (this._point) {
	        case 0: this._point = 1; this._x2 = x, this._y2 = y; break;
	        case 1: this._point = 2; this._x3 = x, this._y3 = y; break;
	        case 2: this._point = 3; this._x4 = x, this._y4 = y; this._context.moveTo((this._x0 + 4 * this._x1 + x) / 6, (this._y0 + 4 * this._y1 + y) / 6); break;
	        default: point(this, x, y); break;
	      }
	      this._x0 = this._x1, this._x1 = x;
	      this._y0 = this._y1, this._y1 = y;
	    }
	  };
	
	  function basisClosed(context) {
	    return new BasisClosed(context);
	  }
	
	  function BasisOpen(context) {
	    this._context = context;
	  }
	
	  BasisOpen.prototype = {
	    areaStart: function() {
	      this._line = 0;
	    },
	    areaEnd: function() {
	      this._line = NaN;
	    },
	    lineStart: function() {
	      this._x0 = this._x1 =
	      this._y0 = this._y1 = NaN;
	      this._point = 0;
	    },
	    lineEnd: function() {
	      if (this._line || (this._line !== 0 && this._point === 3)) this._context.closePath();
	      this._line = 1 - this._line;
	    },
	    point: function(x, y) {
	      x = +x, y = +y;
	      switch (this._point) {
	        case 0: this._point = 1; break;
	        case 1: this._point = 2; break;
	        case 2: this._point = 3; var x0 = (this._x0 + 4 * this._x1 + x) / 6, y0 = (this._y0 + 4 * this._y1 + y) / 6; this._line ? this._context.lineTo(x0, y0) : this._context.moveTo(x0, y0); break;
	        case 3: this._point = 4; // proceed
	        default: point(this, x, y); break;
	      }
	      this._x0 = this._x1, this._x1 = x;
	      this._y0 = this._y1, this._y1 = y;
	    }
	  };
	
	  function basisOpen(context) {
	    return new BasisOpen(context);
	  }
	
	  function Bundle(context, beta) {
	    this._basis = new Basis(context);
	    this._beta = beta;
	  }
	
	  Bundle.prototype = {
	    lineStart: function() {
	      this._x = [];
	      this._y = [];
	      this._basis.lineStart();
	    },
	    lineEnd: function() {
	      var x = this._x,
	          y = this._y,
	          j = x.length - 1;
	
	      if (j > 0) {
	        var x0 = x[0],
	            y0 = y[0],
	            dx = x[j] - x0,
	            dy = y[j] - y0,
	            i = -1,
	            t;
	
	        while (++i <= j) {
	          t = i / j;
	          this._basis.point(
	            this._beta * x[i] + (1 - this._beta) * (x0 + t * dx),
	            this._beta * y[i] + (1 - this._beta) * (y0 + t * dy)
	          );
	        }
	      }
	
	      this._x = this._y = null;
	      this._basis.lineEnd();
	    },
	    point: function(x, y) {
	      this._x.push(+x);
	      this._y.push(+y);
	    }
	  };
	
	  var bundle = (function custom(beta) {
	
	    function bundle(context) {
	      return beta === 1 ? new Basis(context) : new Bundle(context, beta);
	    }
	
	    bundle.beta = function(beta) {
	      return custom(+beta);
	    };
	
	    return bundle;
	  })(0.85);
	
	  function point$1(that, x, y) {
	    that._context.bezierCurveTo(
	      that._x1 + that._k * (that._x2 - that._x0),
	      that._y1 + that._k * (that._y2 - that._y0),
	      that._x2 + that._k * (that._x1 - x),
	      that._y2 + that._k * (that._y1 - y),
	      that._x2,
	      that._y2
	    );
	  }
	
	  function Cardinal(context, tension) {
	    this._context = context;
	    this._k = (1 - tension) / 6;
	  }
	
	  Cardinal.prototype = {
	    areaStart: function() {
	      this._line = 0;
	    },
	    areaEnd: function() {
	      this._line = NaN;
	    },
	    lineStart: function() {
	      this._x0 = this._x1 = this._x2 =
	      this._y0 = this._y1 = this._y2 = NaN;
	      this._point = 0;
	    },
	    lineEnd: function() {
	      switch (this._point) {
	        case 2: this._context.lineTo(this._x2, this._y2); break;
	        case 3: point$1(this, this._x1, this._y1); break;
	      }
	      if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
	      this._line = 1 - this._line;
	    },
	    point: function(x, y) {
	      x = +x, y = +y;
	      switch (this._point) {
	        case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
	        case 1: this._point = 2; this._x1 = x, this._y1 = y; break;
	        case 2: this._point = 3; // proceed
	        default: point$1(this, x, y); break;
	      }
	      this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
	      this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
	    }
	  };
	
	  var cardinal = (function custom(tension) {
	
	    function cardinal(context) {
	      return new Cardinal(context, tension);
	    }
	
	    cardinal.tension = function(tension) {
	      return custom(+tension);
	    };
	
	    return cardinal;
	  })(0);
	
	  function CardinalClosed(context, tension) {
	    this._context = context;
	    this._k = (1 - tension) / 6;
	  }
	
	  CardinalClosed.prototype = {
	    areaStart: noop,
	    areaEnd: noop,
	    lineStart: function() {
	      this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 =
	      this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
	      this._point = 0;
	    },
	    lineEnd: function() {
	      switch (this._point) {
	        case 1: {
	          this._context.moveTo(this._x3, this._y3);
	          this._context.closePath();
	          break;
	        }
	        case 2: {
	          this._context.lineTo(this._x3, this._y3);
	          this._context.closePath();
	          break;
	        }
	        case 3: {
	          this.point(this._x3, this._y3);
	          this.point(this._x4, this._y4);
	          this.point(this._x5, this._y5);
	          break;
	        }
	      }
	    },
	    point: function(x, y) {
	      x = +x, y = +y;
	      switch (this._point) {
	        case 0: this._point = 1; this._x3 = x, this._y3 = y; break;
	        case 1: this._point = 2; this._context.moveTo(this._x4 = x, this._y4 = y); break;
	        case 2: this._point = 3; this._x5 = x, this._y5 = y; break;
	        default: point$1(this, x, y); break;
	      }
	      this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
	      this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
	    }
	  };
	
	  var cardinalClosed = (function custom(tension) {
	
	    function cardinal(context) {
	      return new CardinalClosed(context, tension);
	    }
	
	    cardinal.tension = function(tension) {
	      return custom(+tension);
	    };
	
	    return cardinal;
	  })(0);
	
	  function CardinalOpen(context, tension) {
	    this._context = context;
	    this._k = (1 - tension) / 6;
	  }
	
	  CardinalOpen.prototype = {
	    areaStart: function() {
	      this._line = 0;
	    },
	    areaEnd: function() {
	      this._line = NaN;
	    },
	    lineStart: function() {
	      this._x0 = this._x1 = this._x2 =
	      this._y0 = this._y1 = this._y2 = NaN;
	      this._point = 0;
	    },
	    lineEnd: function() {
	      if (this._line || (this._line !== 0 && this._point === 3)) this._context.closePath();
	      this._line = 1 - this._line;
	    },
	    point: function(x, y) {
	      x = +x, y = +y;
	      switch (this._point) {
	        case 0: this._point = 1; break;
	        case 1: this._point = 2; break;
	        case 2: this._point = 3; this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2); break;
	        case 3: this._point = 4; // proceed
	        default: point$1(this, x, y); break;
	      }
	      this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
	      this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
	    }
	  };
	
	  var cardinalOpen = (function custom(tension) {
	
	    function cardinal(context) {
	      return new CardinalOpen(context, tension);
	    }
	
	    cardinal.tension = function(tension) {
	      return custom(+tension);
	    };
	
	    return cardinal;
	  })(0);
	
	  function point$2(that, x, y) {
	    var x1 = that._x1,
	        y1 = that._y1,
	        x2 = that._x2,
	        y2 = that._y2;
	
	    if (that._l01_a > epsilon$1) {
	      var a = 2 * that._l01_2a + 3 * that._l01_a * that._l12_a + that._l12_2a,
	          n = 3 * that._l01_a * (that._l01_a + that._l12_a);
	      x1 = (x1 * a - that._x0 * that._l12_2a + that._x2 * that._l01_2a) / n;
	      y1 = (y1 * a - that._y0 * that._l12_2a + that._y2 * that._l01_2a) / n;
	    }
	
	    if (that._l23_a > epsilon$1) {
	      var b = 2 * that._l23_2a + 3 * that._l23_a * that._l12_a + that._l12_2a,
	          m = 3 * that._l23_a * (that._l23_a + that._l12_a);
	      x2 = (x2 * b + that._x1 * that._l23_2a - x * that._l12_2a) / m;
	      y2 = (y2 * b + that._y1 * that._l23_2a - y * that._l12_2a) / m;
	    }
	
	    that._context.bezierCurveTo(x1, y1, x2, y2, that._x2, that._y2);
	  }
	
	  function CatmullRom(context, alpha) {
	    this._context = context;
	    this._alpha = alpha;
	  }
	
	  CatmullRom.prototype = {
	    areaStart: function() {
	      this._line = 0;
	    },
	    areaEnd: function() {
	      this._line = NaN;
	    },
	    lineStart: function() {
	      this._x0 = this._x1 = this._x2 =
	      this._y0 = this._y1 = this._y2 = NaN;
	      this._l01_a = this._l12_a = this._l23_a =
	      this._l01_2a = this._l12_2a = this._l23_2a =
	      this._point = 0;
	    },
	    lineEnd: function() {
	      switch (this._point) {
	        case 2: this._context.lineTo(this._x2, this._y2); break;
	        case 3: this.point(this, this._x2, this._y2); break;
	      }
	      if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
	      this._line = 1 - this._line;
	    },
	    point: function(x, y) {
	      x = +x, y = +y;
	
	      if (this._point) {
	        var x23 = this._x2 - x,
	            y23 = this._y2 - y;
	        this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
	      }
	
	      switch (this._point) {
	        case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
	        case 1: this._point = 2; break;
	        case 2: this._point = 3; // proceed
	        default: point$2(this, x, y); break;
	      }
	
	      this._l01_a = this._l12_a, this._l12_a = this._l23_a;
	      this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
	      this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
	      this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
	    }
	  };
	
	  var catmullRom = (function custom(alpha) {
	
	    function catmullRom(context) {
	      return alpha ? new CatmullRom(context, alpha) : new Cardinal(context, 0);
	    }
	
	    catmullRom.alpha = function(alpha) {
	      return custom(+alpha);
	    };
	
	    return catmullRom;
	  })(0.5);
	
	  function CatmullRomClosed(context, alpha) {
	    this._context = context;
	    this._alpha = alpha;
	  }
	
	  CatmullRomClosed.prototype = {
	    areaStart: noop,
	    areaEnd: noop,
	    lineStart: function() {
	      this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 =
	      this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
	      this._l01_a = this._l12_a = this._l23_a =
	      this._l01_2a = this._l12_2a = this._l23_2a =
	      this._point = 0;
	    },
	    lineEnd: function() {
	      switch (this._point) {
	        case 1: {
	          this._context.moveTo(this._x3, this._y3);
	          this._context.closePath();
	          break;
	        }
	        case 2: {
	          this._context.lineTo(this._x3, this._y3);
	          this._context.closePath();
	          break;
	        }
	        case 3: {
	          this.point(this._x3, this._y3);
	          this.point(this._x4, this._y4);
	          this.point(this._x5, this._y5);
	          break;
	        }
	      }
	    },
	    point: function(x, y) {
	      x = +x, y = +y;
	
	      if (this._point) {
	        var x23 = this._x2 - x,
	            y23 = this._y2 - y;
	        this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
	      }
	
	      switch (this._point) {
	        case 0: this._point = 1; this._x3 = x, this._y3 = y; break;
	        case 1: this._point = 2; this._context.moveTo(this._x4 = x, this._y4 = y); break;
	        case 2: this._point = 3; this._x5 = x, this._y5 = y; break;
	        default: point$2(this, x, y); break;
	      }
	
	      this._l01_a = this._l12_a, this._l12_a = this._l23_a;
	      this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
	      this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
	      this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
	    }
	  };
	
	  var catmullRomClosed = (function custom(alpha) {
	
	    function catmullRom(context) {
	      return alpha ? new CatmullRomClosed(context, alpha) : new CardinalClosed(context, 0);
	    }
	
	    catmullRom.alpha = function(alpha) {
	      return custom(+alpha);
	    };
	
	    return catmullRom;
	  })(0.5);
	
	  function CatmullRomOpen(context, alpha) {
	    this._context = context;
	    this._alpha = alpha;
	  }
	
	  CatmullRomOpen.prototype = {
	    areaStart: function() {
	      this._line = 0;
	    },
	    areaEnd: function() {
	      this._line = NaN;
	    },
	    lineStart: function() {
	      this._x0 = this._x1 = this._x2 =
	      this._y0 = this._y1 = this._y2 = NaN;
	      this._l01_a = this._l12_a = this._l23_a =
	      this._l01_2a = this._l12_2a = this._l23_2a =
	      this._point = 0;
	    },
	    lineEnd: function() {
	      if (this._line || (this._line !== 0 && this._point === 3)) this._context.closePath();
	      this._line = 1 - this._line;
	    },
	    point: function(x, y) {
	      x = +x, y = +y;
	
	      if (this._point) {
	        var x23 = this._x2 - x,
	            y23 = this._y2 - y;
	        this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
	      }
	
	      switch (this._point) {
	        case 0: this._point = 1; break;
	        case 1: this._point = 2; break;
	        case 2: this._point = 3; this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2); break;
	        case 3: this._point = 4; // proceed
	        default: point$2(this, x, y); break;
	      }
	
	      this._l01_a = this._l12_a, this._l12_a = this._l23_a;
	      this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
	      this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
	      this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
	    }
	  };
	
	  var catmullRomOpen = (function custom(alpha) {
	
	    function catmullRom(context) {
	      return alpha ? new CatmullRomOpen(context, alpha) : new CardinalOpen(context, 0);
	    }
	
	    catmullRom.alpha = function(alpha) {
	      return custom(+alpha);
	    };
	
	    return catmullRom;
	  })(0.5);
	
	  function LinearClosed(context) {
	    this._context = context;
	  }
	
	  LinearClosed.prototype = {
	    areaStart: noop,
	    areaEnd: noop,
	    lineStart: function() {
	      this._point = 0;
	    },
	    lineEnd: function() {
	      if (this._point) this._context.closePath();
	    },
	    point: function(x, y) {
	      x = +x, y = +y;
	      if (this._point) this._context.lineTo(x, y);
	      else this._point = 1, this._context.moveTo(x, y);
	    }
	  };
	
	  function linearClosed(context) {
	    return new LinearClosed(context);
	  }
	
	  function sign(x) {
	    return x < 0 ? -1 : 1;
	  }
	
	  // Calculate the slopes of the tangents (Hermite-type interpolation) based on
	  // the following paper: Steffen, M. 1990. A Simple Method for Monotonic
	  // Interpolation in One Dimension. Astronomy and Astrophysics, Vol. 239, NO.
	  // NOV(II), P. 443, 1990.
	  function slope3(that, x2, y2) {
	    var h0 = that._x1 - that._x0,
	        h1 = x2 - that._x1,
	        s0 = (that._y1 - that._y0) / (h0 || h1 < 0 && -0),
	        s1 = (y2 - that._y1) / (h1 || h0 < 0 && -0),
	        p = (s0 * h1 + s1 * h0) / (h0 + h1);
	    return (sign(s0) + sign(s1)) * Math.min(Math.abs(s0), Math.abs(s1), 0.5 * Math.abs(p)) || 0;
	  }
	
	  // Calculate a one-sided slope.
	  function slope2(that, t) {
	    var h = that._x1 - that._x0;
	    return h ? (3 * (that._y1 - that._y0) / h - t) / 2 : t;
	  }
	
	  // According to https://en.wikipedia.org/wiki/Cubic_Hermite_spline#Representations
	  // "you can express cubic Hermite interpolation in terms of cubic Bézier curves
	  // with respect to the four values p0, p0 + m0 / 3, p1 - m1 / 3, p1".
	  function point$3(that, t0, t1) {
	    var x0 = that._x0,
	        y0 = that._y0,
	        x1 = that._x1,
	        y1 = that._y1,
	        dx = (x1 - x0) / 3;
	    that._context.bezierCurveTo(x0 + dx, y0 + dx * t0, x1 - dx, y1 - dx * t1, x1, y1);
	  }
	
	  function MonotoneX(context) {
	    this._context = context;
	  }
	
	  MonotoneX.prototype = {
	    areaStart: function() {
	      this._line = 0;
	    },
	    areaEnd: function() {
	      this._line = NaN;
	    },
	    lineStart: function() {
	      this._x0 = this._x1 =
	      this._y0 = this._y1 =
	      this._t0 = NaN;
	      this._point = 0;
	    },
	    lineEnd: function() {
	      switch (this._point) {
	        case 2: this._context.lineTo(this._x1, this._y1); break;
	        case 3: point$3(this, this._t0, slope2(this, this._t0)); break;
	      }
	      if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
	      this._line = 1 - this._line;
	    },
	    point: function(x, y) {
	      var t1 = NaN;
	
	      x = +x, y = +y;
	      if (x === this._x1 && y === this._y1) return; // Ignore coincident points.
	      switch (this._point) {
	        case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
	        case 1: this._point = 2; break;
	        case 2: this._point = 3; point$3(this, slope2(this, t1 = slope3(this, x, y)), t1); break;
	        default: point$3(this, this._t0, t1 = slope3(this, x, y)); break;
	      }
	
	      this._x0 = this._x1, this._x1 = x;
	      this._y0 = this._y1, this._y1 = y;
	      this._t0 = t1;
	    }
	  }
	
	  function MonotoneY(context) {
	    this._context = new ReflectContext(context);
	  }
	
	  (MonotoneY.prototype = Object.create(MonotoneX.prototype)).point = function(x, y) {
	    MonotoneX.prototype.point.call(this, y, x);
	  };
	
	  function ReflectContext(context) {
	    this._context = context;
	  }
	
	  ReflectContext.prototype = {
	    moveTo: function(x, y) { this._context.moveTo(y, x); },
	    closePath: function() { this._context.closePath(); },
	    lineTo: function(x, y) { this._context.lineTo(y, x); },
	    bezierCurveTo: function(x1, y1, x2, y2, x, y) { this._context.bezierCurveTo(y1, x1, y2, x2, y, x); }
	  };
	
	  function monotoneX(context) {
	    return new MonotoneX(context);
	  }
	
	  function monotoneY(context) {
	    return new MonotoneY(context);
	  }
	
	  function Natural(context) {
	    this._context = context;
	  }
	
	  Natural.prototype = {
	    areaStart: function() {
	      this._line = 0;
	    },
	    areaEnd: function() {
	      this._line = NaN;
	    },
	    lineStart: function() {
	      this._x = [];
	      this._y = [];
	    },
	    lineEnd: function() {
	      var x = this._x,
	          y = this._y,
	          n = x.length;
	
	      if (n) {
	        this._line ? this._context.lineTo(x[0], y[0]) : this._context.moveTo(x[0], y[0]);
	        if (n === 2) {
	          this._context.lineTo(x[1], y[1]);
	        } else {
	          var px = controlPoints(x),
	              py = controlPoints(y);
	          for (var i0 = 0, i1 = 1; i1 < n; ++i0, ++i1) {
	            this._context.bezierCurveTo(px[0][i0], py[0][i0], px[1][i0], py[1][i0], x[i1], y[i1]);
	          }
	        }
	      }
	
	      if (this._line || (this._line !== 0 && n === 1)) this._context.closePath();
	      this._line = 1 - this._line;
	      this._x = this._y = null;
	    },
	    point: function(x, y) {
	      this._x.push(+x);
	      this._y.push(+y);
	    }
	  };
	
	  // See https://www.particleincell.com/2012/bezier-splines/ for derivation.
	  function controlPoints(x) {
	    var i,
	        n = x.length - 1,
	        m,
	        a = new Array(n),
	        b = new Array(n),
	        r = new Array(n);
	    a[0] = 0, b[0] = 2, r[0] = x[0] + 2 * x[1];
	    for (i = 1; i < n - 1; ++i) a[i] = 1, b[i] = 4, r[i] = 4 * x[i] + 2 * x[i + 1];
	    a[n - 1] = 2, b[n - 1] = 7, r[n - 1] = 8 * x[n - 1] + x[n];
	    for (i = 1; i < n; ++i) m = a[i] / b[i - 1], b[i] -= m, r[i] -= m * r[i - 1];
	    a[n - 1] = r[n - 1] / b[n - 1];
	    for (i = n - 2; i >= 0; --i) a[i] = (r[i] - a[i + 1]) / b[i];
	    b[n - 1] = (x[n] + a[n - 1]) / 2;
	    for (i = 0; i < n - 1; ++i) b[i] = 2 * x[i + 1] - a[i + 1];
	    return [a, b];
	  }
	
	  function natural(context) {
	    return new Natural(context);
	  }
	
	  function Step(context, t) {
	    this._context = context;
	    this._t = t;
	  }
	
	  Step.prototype = {
	    areaStart: function() {
	      this._line = 0;
	    },
	    areaEnd: function() {
	      this._line = NaN;
	    },
	    lineStart: function() {
	      this._x = this._y = NaN;
	      this._point = 0;
	    },
	    lineEnd: function() {
	      if (0 < this._t && this._t < 1 && this._point === 2) this._context.lineTo(this._x, this._y);
	      if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
	      if (this._line >= 0) this._t = 1 - this._t, this._line = 1 - this._line;
	    },
	    point: function(x, y) {
	      x = +x, y = +y;
	      switch (this._point) {
	        case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
	        case 1: this._point = 2; // proceed
	        default: {
	          if (this._t <= 0) {
	            this._context.lineTo(this._x, y);
	            this._context.lineTo(x, y);
	          } else {
	            var x1 = this._x * (1 - this._t) + x * this._t;
	            this._context.lineTo(x1, this._y);
	            this._context.lineTo(x1, y);
	          }
	          break;
	        }
	      }
	      this._x = x, this._y = y;
	    }
	  };
	
	  function step(context) {
	    return new Step(context, 0.5);
	  }
	
	  function stepBefore(context) {
	    return new Step(context, 0);
	  }
	
	  function stepAfter(context) {
	    return new Step(context, 1);
	  }
	
	  var slice$2 = Array.prototype.slice;
	
	  function none(series, order) {
	    if (!((n = series.length) > 1)) return;
	    for (var i = 1, s0, s1 = series[order[0]], n, m = s1.length; i < n; ++i) {
	      s0 = s1, s1 = series[order[i]];
	      for (var j = 0; j < m; ++j) {
	        s1[j][1] += s1[j][0] = isNaN(s0[j][1]) ? s0[j][0] : s0[j][1];
	      }
	    }
	  }
	
	  function none$1(series) {
	    var n = series.length, o = new Array(n);
	    while (--n >= 0) o[n] = n;
	    return o;
	  }
	
	  function stackValue(d, key) {
	    return d[key];
	  }
	
	  function stack() {
	    var keys = constant$1([]),
	        order = none$1,
	        offset = none,
	        value = stackValue;
	
	    function stack(data) {
	      var kz = keys.apply(this, arguments),
	          i,
	          m = data.length,
	          n = kz.length,
	          sz = new Array(n),
	          oz;
	
	      for (i = 0; i < n; ++i) {
	        for (var ki = kz[i], si = sz[i] = new Array(m), j = 0, sij; j < m; ++j) {
	          si[j] = sij = [0, +value(data[j], ki, j, data)];
	          sij.data = data[j];
	        }
	        si.key = ki;
	      }
	
	      for (i = 0, oz = order(sz); i < n; ++i) {
	        sz[oz[i]].index = i;
	      }
	
	      offset(sz, oz);
	      return sz;
	    }
	
	    stack.keys = function(_) {
	      return arguments.length ? (keys = typeof _ === "function" ? _ : constant$1(slice$2.call(_)), stack) : keys;
	    };
	
	    stack.value = function(_) {
	      return arguments.length ? (value = typeof _ === "function" ? _ : constant$1(+_), stack) : value;
	    };
	
	    stack.order = function(_) {
	      return arguments.length ? (order = _ == null ? none$1 : typeof _ === "function" ? _ : constant$1(slice$2.call(_)), stack) : order;
	    };
	
	    stack.offset = function(_) {
	      return arguments.length ? (offset = _ == null ? none : _, stack) : offset;
	    };
	
	    return stack;
	  }
	
	  function expand(series, order) {
	    if (!((n = series.length) > 0)) return;
	    for (var i, n, j = 0, m = series[0].length, y; j < m; ++j) {
	      for (y = i = 0; i < n; ++i) y += series[i][j][1] || 0;
	      if (y) for (i = 0; i < n; ++i) series[i][j][1] /= y;
	    }
	    none(series, order);
	  }
	
	  function silhouette(series, order) {
	    if (!((n = series.length) > 0)) return;
	    for (var j = 0, s0 = series[order[0]], n, m = s0.length; j < m; ++j) {
	      for (var i = 0, y = 0; i < n; ++i) y += series[i][j][1] || 0;
	      s0[j][1] += s0[j][0] = -y / 2;
	    }
	    none(series, order);
	  }
	
	  function wiggle(series, order) {
	    if (!((n = series.length) > 0) || !((m = (s0 = series[order[0]]).length) > 0)) return;
	    for (var y = 0, j = 1, s0, m, n; j < m; ++j) {
	      for (var i = 0, s1 = 0, s2 = 0; i < n; ++i) {
	        var si = series[order[i]],
	            sij0 = si[j][1] || 0,
	            sij1 = si[j - 1][1] || 0,
	            s3 = (sij0 - sij1) / 2;
	        for (var k = 0; k < i; ++k) {
	          var sk = series[order[k]],
	              skj0 = sk[j][1] || 0,
	              skj1 = sk[j - 1][1] || 0;
	          s3 += skj0 - skj1;
	        }
	        s1 += sij0, s2 += s3 * sij0;
	      }
	      s0[j - 1][1] += s0[j - 1][0] = y;
	      if (s1) y -= s2 / s1;
	    }
	    s0[j - 1][1] += s0[j - 1][0] = y;
	    none(series, order);
	  }
	
	  function ascending$1(series) {
	    var sums = series.map(sum$1);
	    return none$1(series).sort(function(a, b) { return sums[a] - sums[b]; });
	  }
	
	  function sum$1(series) {
	    var s = 0, i = -1, n = series.length, v;
	    while (++i < n) if (v = +series[i][1]) s += v;
	    return s;
	  }
	
	  function descending$2(series) {
	    return ascending$1(series).reverse();
	  }
	
	  function insideOut(series) {
	    var n = series.length,
	        i,
	        j,
	        sums = series.map(sum$1),
	        order = none$1(series).sort(function(a, b) { return sums[b] - sums[a]; }),
	        top = 0,
	        bottom = 0,
	        tops = [],
	        bottoms = [];
	
	    for (i = 0; i < n; ++i) {
	      j = order[i];
	      if (top < bottom) {
	        top += sums[j];
	        tops.push(j);
	      } else {
	        bottom += sums[j];
	        bottoms.push(j);
	      }
	    }
	
	    return bottoms.reverse().concat(tops);
	  }
	
	  function reverse(series) {
	    return none$1(series).reverse();
	  }
	
	  function define(constructor, factory, prototype) {
	    constructor.prototype = factory.prototype = prototype;
	    prototype.constructor = constructor;
	  }
	
	  function extend(parent, definition) {
	    var prototype = Object.create(parent.prototype);
	    for (var key in definition) prototype[key] = definition[key];
	    return prototype;
	  }
	
	  function Color() {}
	
	  var darker = 0.7;
	  var brighter = 1 / darker;
	
	  var reHex3 = /^#([0-9a-f]{3})$/;
	  var reHex6 = /^#([0-9a-f]{6})$/;
	  var reRgbInteger = /^rgb\(\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*\)$/;
	  var reRgbPercent = /^rgb\(\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*\)$/;
	  var reRgbaInteger = /^rgba\(\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+(?:\.\d+)?)\s*\)$/;
	  var reRgbaPercent = /^rgba\(\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)\s*\)$/;
	  var reHslPercent = /^hsl\(\s*([-+]?\d+(?:\.\d+)?)\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*\)$/;
	  var reHslaPercent = /^hsla\(\s*([-+]?\d+(?:\.\d+)?)\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)\s*\)$/;
	  var named = {
	    aliceblue: 0xf0f8ff,
	    antiquewhite: 0xfaebd7,
	    aqua: 0x00ffff,
	    aquamarine: 0x7fffd4,
	    azure: 0xf0ffff,
	    beige: 0xf5f5dc,
	    bisque: 0xffe4c4,
	    black: 0x000000,
	    blanchedalmond: 0xffebcd,
	    blue: 0x0000ff,
	    blueviolet: 0x8a2be2,
	    brown: 0xa52a2a,
	    burlywood: 0xdeb887,
	    cadetblue: 0x5f9ea0,
	    chartreuse: 0x7fff00,
	    chocolate: 0xd2691e,
	    coral: 0xff7f50,
	    cornflowerblue: 0x6495ed,
	    cornsilk: 0xfff8dc,
	    crimson: 0xdc143c,
	    cyan: 0x00ffff,
	    darkblue: 0x00008b,
	    darkcyan: 0x008b8b,
	    darkgoldenrod: 0xb8860b,
	    darkgray: 0xa9a9a9,
	    darkgreen: 0x006400,
	    darkgrey: 0xa9a9a9,
	    darkkhaki: 0xbdb76b,
	    darkmagenta: 0x8b008b,
	    darkolivegreen: 0x556b2f,
	    darkorange: 0xff8c00,
	    darkorchid: 0x9932cc,
	    darkred: 0x8b0000,
	    darksalmon: 0xe9967a,
	    darkseagreen: 0x8fbc8f,
	    darkslateblue: 0x483d8b,
	    darkslategray: 0x2f4f4f,
	    darkslategrey: 0x2f4f4f,
	    darkturquoise: 0x00ced1,
	    darkviolet: 0x9400d3,
	    deeppink: 0xff1493,
	    deepskyblue: 0x00bfff,
	    dimgray: 0x696969,
	    dimgrey: 0x696969,
	    dodgerblue: 0x1e90ff,
	    firebrick: 0xb22222,
	    floralwhite: 0xfffaf0,
	    forestgreen: 0x228b22,
	    fuchsia: 0xff00ff,
	    gainsboro: 0xdcdcdc,
	    ghostwhite: 0xf8f8ff,
	    gold: 0xffd700,
	    goldenrod: 0xdaa520,
	    gray: 0x808080,
	    green: 0x008000,
	    greenyellow: 0xadff2f,
	    grey: 0x808080,
	    honeydew: 0xf0fff0,
	    hotpink: 0xff69b4,
	    indianred: 0xcd5c5c,
	    indigo: 0x4b0082,
	    ivory: 0xfffff0,
	    khaki: 0xf0e68c,
	    lavender: 0xe6e6fa,
	    lavenderblush: 0xfff0f5,
	    lawngreen: 0x7cfc00,
	    lemonchiffon: 0xfffacd,
	    lightblue: 0xadd8e6,
	    lightcoral: 0xf08080,
	    lightcyan: 0xe0ffff,
	    lightgoldenrodyellow: 0xfafad2,
	    lightgray: 0xd3d3d3,
	    lightgreen: 0x90ee90,
	    lightgrey: 0xd3d3d3,
	    lightpink: 0xffb6c1,
	    lightsalmon: 0xffa07a,
	    lightseagreen: 0x20b2aa,
	    lightskyblue: 0x87cefa,
	    lightslategray: 0x778899,
	    lightslategrey: 0x778899,
	    lightsteelblue: 0xb0c4de,
	    lightyellow: 0xffffe0,
	    lime: 0x00ff00,
	    limegreen: 0x32cd32,
	    linen: 0xfaf0e6,
	    magenta: 0xff00ff,
	    maroon: 0x800000,
	    mediumaquamarine: 0x66cdaa,
	    mediumblue: 0x0000cd,
	    mediumorchid: 0xba55d3,
	    mediumpurple: 0x9370db,
	    mediumseagreen: 0x3cb371,
	    mediumslateblue: 0x7b68ee,
	    mediumspringgreen: 0x00fa9a,
	    mediumturquoise: 0x48d1cc,
	    mediumvioletred: 0xc71585,
	    midnightblue: 0x191970,
	    mintcream: 0xf5fffa,
	    mistyrose: 0xffe4e1,
	    moccasin: 0xffe4b5,
	    navajowhite: 0xffdead,
	    navy: 0x000080,
	    oldlace: 0xfdf5e6,
	    olive: 0x808000,
	    olivedrab: 0x6b8e23,
	    orange: 0xffa500,
	    orangered: 0xff4500,
	    orchid: 0xda70d6,
	    palegoldenrod: 0xeee8aa,
	    palegreen: 0x98fb98,
	    paleturquoise: 0xafeeee,
	    palevioletred: 0xdb7093,
	    papayawhip: 0xffefd5,
	    peachpuff: 0xffdab9,
	    peru: 0xcd853f,
	    pink: 0xffc0cb,
	    plum: 0xdda0dd,
	    powderblue: 0xb0e0e6,
	    purple: 0x800080,
	    rebeccapurple: 0x663399,
	    red: 0xff0000,
	    rosybrown: 0xbc8f8f,
	    royalblue: 0x4169e1,
	    saddlebrown: 0x8b4513,
	    salmon: 0xfa8072,
	    sandybrown: 0xf4a460,
	    seagreen: 0x2e8b57,
	    seashell: 0xfff5ee,
	    sienna: 0xa0522d,
	    silver: 0xc0c0c0,
	    skyblue: 0x87ceeb,
	    slateblue: 0x6a5acd,
	    slategray: 0x708090,
	    slategrey: 0x708090,
	    snow: 0xfffafa,
	    springgreen: 0x00ff7f,
	    steelblue: 0x4682b4,
	    tan: 0xd2b48c,
	    teal: 0x008080,
	    thistle: 0xd8bfd8,
	    tomato: 0xff6347,
	    turquoise: 0x40e0d0,
	    violet: 0xee82ee,
	    wheat: 0xf5deb3,
	    white: 0xffffff,
	    whitesmoke: 0xf5f5f5,
	    yellow: 0xffff00,
	    yellowgreen: 0x9acd32
	  };
	
	  define(Color, color, {
	    displayable: function() {
	      return this.rgb().displayable();
	    },
	    toString: function() {
	      return this.rgb() + "";
	    }
	  });
	
	  function color(format) {
	    var m;
	    format = (format + "").trim().toLowerCase();
	    return (m = reHex3.exec(format)) ? (m = parseInt(m[1], 16), new Rgb((m >> 8 & 0xf) | (m >> 4 & 0x0f0), (m >> 4 & 0xf) | (m & 0xf0), ((m & 0xf) << 4) | (m & 0xf), 1)) // #f00
	        : (m = reHex6.exec(format)) ? rgbn(parseInt(m[1], 16)) // #ff0000
	        : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
	        : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
	        : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
	        : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
	        : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
	        : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
	        : named.hasOwnProperty(format) ? rgbn(named[format])
	        : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0)
	        : null;
	  }
	
	  function rgbn(n) {
	    return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
	  }
	
	  function rgba(r, g, b, a) {
	    if (a <= 0) r = g = b = NaN;
	    return new Rgb(r, g, b, a);
	  }
	
	  function rgbConvert(o) {
	    if (!(o instanceof Color)) o = color(o);
	    if (!o) return new Rgb;
	    o = o.rgb();
	    return new Rgb(o.r, o.g, o.b, o.opacity);
	  }
	
	  function colorRgb(r, g, b, opacity) {
	    return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
	  }
	
	  function Rgb(r, g, b, opacity) {
	    this.r = +r;
	    this.g = +g;
	    this.b = +b;
	    this.opacity = +opacity;
	  }
	
	  define(Rgb, colorRgb, extend(Color, {
	    brighter: function(k) {
	      k = k == null ? brighter : Math.pow(brighter, k);
	      return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
	    },
	    darker: function(k) {
	      k = k == null ? darker : Math.pow(darker, k);
	      return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
	    },
	    rgb: function() {
	      return this;
	    },
	    displayable: function() {
	      return (0 <= this.r && this.r <= 255)
	          && (0 <= this.g && this.g <= 255)
	          && (0 <= this.b && this.b <= 255)
	          && (0 <= this.opacity && this.opacity <= 1);
	    },
	    toString: function() {
	      var a = this.opacity; a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
	      return (a === 1 ? "rgb(" : "rgba(")
	          + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", "
	          + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", "
	          + Math.max(0, Math.min(255, Math.round(this.b) || 0))
	          + (a === 1 ? ")" : ", " + a + ")");
	    }
	  }));
	
	  function hsla(h, s, l, a) {
	    if (a <= 0) h = s = l = NaN;
	    else if (l <= 0 || l >= 1) h = s = NaN;
	    else if (s <= 0) h = NaN;
	    return new Hsl(h, s, l, a);
	  }
	
	  function hslConvert(o) {
	    if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
	    if (!(o instanceof Color)) o = color(o);
	    if (!o) return new Hsl;
	    if (o instanceof Hsl) return o;
	    o = o.rgb();
	    var r = o.r / 255,
	        g = o.g / 255,
	        b = o.b / 255,
	        min = Math.min(r, g, b),
	        max = Math.max(r, g, b),
	        h = NaN,
	        s = max - min,
	        l = (max + min) / 2;
	    if (s) {
	      if (r === max) h = (g - b) / s + (g < b) * 6;
	      else if (g === max) h = (b - r) / s + 2;
	      else h = (r - g) / s + 4;
	      s /= l < 0.5 ? max + min : 2 - max - min;
	      h *= 60;
	    } else {
	      s = l > 0 && l < 1 ? 0 : h;
	    }
	    return new Hsl(h, s, l, o.opacity);
	  }
	
	  function colorHsl(h, s, l, opacity) {
	    return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
	  }
	
	  function Hsl(h, s, l, opacity) {
	    this.h = +h;
	    this.s = +s;
	    this.l = +l;
	    this.opacity = +opacity;
	  }
	
	  define(Hsl, colorHsl, extend(Color, {
	    brighter: function(k) {
	      k = k == null ? brighter : Math.pow(brighter, k);
	      return new Hsl(this.h, this.s, this.l * k, this.opacity);
	    },
	    darker: function(k) {
	      k = k == null ? darker : Math.pow(darker, k);
	      return new Hsl(this.h, this.s, this.l * k, this.opacity);
	    },
	    rgb: function() {
	      var h = this.h % 360 + (this.h < 0) * 360,
	          s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
	          l = this.l,
	          m2 = l + (l < 0.5 ? l : 1 - l) * s,
	          m1 = 2 * l - m2;
	      return new Rgb(
	        hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
	        hsl2rgb(h, m1, m2),
	        hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
	        this.opacity
	      );
	    },
	    displayable: function() {
	      return (0 <= this.s && this.s <= 1 || isNaN(this.s))
	          && (0 <= this.l && this.l <= 1)
	          && (0 <= this.opacity && this.opacity <= 1);
	    }
	  }));
	
	  /* From FvD 13.37, CSS Color Module Level 3 */
	  function hsl2rgb(h, m1, m2) {
	    return (h < 60 ? m1 + (m2 - m1) * h / 60
	        : h < 180 ? m2
	        : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60
	        : m1) * 255;
	  }
	
	  var deg2rad = Math.PI / 180;
	  var rad2deg = 180 / Math.PI;
	
	  var Kn = 18;
	  var Xn = 0.950470;
	  var Yn = 1;
	  var Zn = 1.088830;
	  var t0 = 4 / 29;
	  var t1 = 6 / 29;
	  var t2 = 3 * t1 * t1;
	  var t3 = t1 * t1 * t1;
	  function labConvert(o) {
	    if (o instanceof Lab) return new Lab(o.l, o.a, o.b, o.opacity);
	    if (o instanceof Hcl) {
	      var h = o.h * deg2rad;
	      return new Lab(o.l, Math.cos(h) * o.c, Math.sin(h) * o.c, o.opacity);
	    }
	    if (!(o instanceof Rgb)) o = rgbConvert(o);
	    var b = rgb2xyz(o.r),
	        a = rgb2xyz(o.g),
	        l = rgb2xyz(o.b),
	        x = xyz2lab((0.4124564 * b + 0.3575761 * a + 0.1804375 * l) / Xn),
	        y = xyz2lab((0.2126729 * b + 0.7151522 * a + 0.0721750 * l) / Yn),
	        z = xyz2lab((0.0193339 * b + 0.1191920 * a + 0.9503041 * l) / Zn);
	    return new Lab(116 * y - 16, 500 * (x - y), 200 * (y - z), o.opacity);
	  }
	
	  function lab(l, a, b, opacity) {
	    return arguments.length === 1 ? labConvert(l) : new Lab(l, a, b, opacity == null ? 1 : opacity);
	  }
	
	  function Lab(l, a, b, opacity) {
	    this.l = +l;
	    this.a = +a;
	    this.b = +b;
	    this.opacity = +opacity;
	  }
	
	  define(Lab, lab, extend(Color, {
	    brighter: function(k) {
	      return new Lab(this.l + Kn * (k == null ? 1 : k), this.a, this.b, this.opacity);
	    },
	    darker: function(k) {
	      return new Lab(this.l - Kn * (k == null ? 1 : k), this.a, this.b, this.opacity);
	    },
	    rgb: function() {
	      var y = (this.l + 16) / 116,
	          x = isNaN(this.a) ? y : y + this.a / 500,
	          z = isNaN(this.b) ? y : y - this.b / 200;
	      y = Yn * lab2xyz(y);
	      x = Xn * lab2xyz(x);
	      z = Zn * lab2xyz(z);
	      return new Rgb(
	        xyz2rgb( 3.2404542 * x - 1.5371385 * y - 0.4985314 * z), // D65 -> sRGB
	        xyz2rgb(-0.9692660 * x + 1.8760108 * y + 0.0415560 * z),
	        xyz2rgb( 0.0556434 * x - 0.2040259 * y + 1.0572252 * z),
	        this.opacity
	      );
	    }
	  }));
	
	  function xyz2lab(t) {
	    return t > t3 ? Math.pow(t, 1 / 3) : t / t2 + t0;
	  }
	
	  function lab2xyz(t) {
	    return t > t1 ? t * t * t : t2 * (t - t0);
	  }
	
	  function xyz2rgb(x) {
	    return 255 * (x <= 0.0031308 ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - 0.055);
	  }
	
	  function rgb2xyz(x) {
	    return (x /= 255) <= 0.04045 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
	  }
	
	  function hclConvert(o) {
	    if (o instanceof Hcl) return new Hcl(o.h, o.c, o.l, o.opacity);
	    if (!(o instanceof Lab)) o = labConvert(o);
	    var h = Math.atan2(o.b, o.a) * rad2deg;
	    return new Hcl(h < 0 ? h + 360 : h, Math.sqrt(o.a * o.a + o.b * o.b), o.l, o.opacity);
	  }
	
	  function colorHcl(h, c, l, opacity) {
	    return arguments.length === 1 ? hclConvert(h) : new Hcl(h, c, l, opacity == null ? 1 : opacity);
	  }
	
	  function Hcl(h, c, l, opacity) {
	    this.h = +h;
	    this.c = +c;
	    this.l = +l;
	    this.opacity = +opacity;
	  }
	
	  define(Hcl, colorHcl, extend(Color, {
	    brighter: function(k) {
	      return new Hcl(this.h, this.c, this.l + Kn * (k == null ? 1 : k), this.opacity);
	    },
	    darker: function(k) {
	      return new Hcl(this.h, this.c, this.l - Kn * (k == null ? 1 : k), this.opacity);
	    },
	    rgb: function() {
	      return labConvert(this).rgb();
	    }
	  }));
	
	  var A = -0.14861;
	  var B = +1.78277;
	  var C = -0.29227;
	  var D = -0.90649;
	  var E = +1.97294;
	  var ED = E * D;
	  var EB = E * B;
	  var BC_DA = B * C - D * A;
	  function cubehelixConvert(o) {
	    if (o instanceof Cubehelix) return new Cubehelix(o.h, o.s, o.l, o.opacity);
	    if (!(o instanceof Rgb)) o = rgbConvert(o);
	    var r = o.r / 255,
	        g = o.g / 255,
	        b = o.b / 255,
	        l = (BC_DA * b + ED * r - EB * g) / (BC_DA + ED - EB),
	        bl = b - l,
	        k = (E * (g - l) - C * bl) / D,
	        s = Math.sqrt(k * k + bl * bl) / (E * l * (1 - l)), // NaN if l=0 or l=1
	        h = s ? Math.atan2(k, bl) * rad2deg - 120 : NaN;
	    return new Cubehelix(h < 0 ? h + 360 : h, s, l, o.opacity);
	  }
	
	  function cubehelix(h, s, l, opacity) {
	    return arguments.length === 1 ? cubehelixConvert(h) : new Cubehelix(h, s, l, opacity == null ? 1 : opacity);
	  }
	
	  function Cubehelix(h, s, l, opacity) {
	    this.h = +h;
	    this.s = +s;
	    this.l = +l;
	    this.opacity = +opacity;
	  }
	
	  define(Cubehelix, cubehelix, extend(Color, {
	    brighter: function(k) {
	      k = k == null ? brighter : Math.pow(brighter, k);
	      return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
	    },
	    darker: function(k) {
	      k = k == null ? darker : Math.pow(darker, k);
	      return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
	    },
	    rgb: function() {
	      var h = isNaN(this.h) ? 0 : (this.h + 120) * deg2rad,
	          l = +this.l,
	          a = isNaN(this.s) ? 0 : this.s * l * (1 - l),
	          cosh = Math.cos(h),
	          sinh = Math.sin(h);
	      return new Rgb(
	        255 * (l + a * (A * cosh + B * sinh)),
	        255 * (l + a * (C * cosh + D * sinh)),
	        255 * (l + a * (E * cosh)),
	        this.opacity
	      );
	    }
	  }));
	
	  function basis$1(t1, v0, v1, v2, v3) {
	    var t2 = t1 * t1, t3 = t2 * t1;
	    return ((1 - 3 * t1 + 3 * t2 - t3) * v0
	        + (4 - 6 * t2 + 3 * t3) * v1
	        + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2
	        + t3 * v3) / 6;
	  }
	
	  function basis$2(values) {
	    var n = values.length - 1;
	    return function(t) {
	      var i = t <= 0 ? (t = 0) : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n),
	          v1 = values[i],
	          v2 = values[i + 1],
	          v0 = i > 0 ? values[i - 1] : 2 * v1 - v2,
	          v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
	      return basis$1((t - i / n) * n, v0, v1, v2, v3);
	    };
	  }
	
	  function basisClosed$1(values) {
	    var n = values.length;
	    return function(t) {
	      var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n),
	          v0 = values[(i + n - 1) % n],
	          v1 = values[i % n],
	          v2 = values[(i + 1) % n],
	          v3 = values[(i + 2) % n];
	      return basis$1((t - i / n) * n, v0, v1, v2, v3);
	    };
	  }
	
	  function constant$2(x) {
	    return function() {
	      return x;
	    };
	  }
	
	  function linear$1(a, d) {
	    return function(t) {
	      return a + t * d;
	    };
	  }
	
	  function exponential$1(a, b, y) {
	    return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
	      return Math.pow(a + t * b, y);
	    };
	  }
	
	  function hue(a, b) {
	    var d = b - a;
	    return d ? linear$1(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : constant$2(isNaN(a) ? b : a);
	  }
	
	  function gamma(y) {
	    return (y = +y) === 1 ? nogamma : function(a, b) {
	      return b - a ? exponential$1(a, b, y) : constant$2(isNaN(a) ? b : a);
	    };
	  }
	
	  function nogamma(a, b) {
	    var d = b - a;
	    return d ? linear$1(a, d) : constant$2(isNaN(a) ? b : a);
	  }
	
	  var interpolateRgb = (function rgbGamma(y) {
	    var color = gamma(y);
	
	    function rgb(start, end) {
	      var r = color((start = colorRgb(start)).r, (end = colorRgb(end)).r),
	          g = color(start.g, end.g),
	          b = color(start.b, end.b),
	          opacity = color(start.opacity, end.opacity);
	      return function(t) {
	        start.r = r(t);
	        start.g = g(t);
	        start.b = b(t);
	        start.opacity = opacity(t);
	        return start + "";
	      };
	    }
	
	    rgb.gamma = rgbGamma;
	
	    return rgb;
	  })(1);
	
	  function rgbSpline(spline) {
	    return function(colors) {
	      var n = colors.length,
	          r = new Array(n),
	          g = new Array(n),
	          b = new Array(n),
	          i, color;
	      for (i = 0; i < n; ++i) {
	        color = colorRgb(colors[i]);
	        r[i] = color.r || 0;
	        g[i] = color.g || 0;
	        b[i] = color.b || 0;
	      }
	      r = spline(r);
	      g = spline(g);
	      b = spline(b);
	      color.opacity = 1;
	      return function(t) {
	        color.r = r(t);
	        color.g = g(t);
	        color.b = b(t);
	        return color + "";
	      };
	    };
	  }
	
	  var rgbBasis = rgbSpline(basis$2);
	  var rgbBasisClosed = rgbSpline(basisClosed$1);
	
	  function array$1(a, b) {
	    var nb = b ? b.length : 0,
	        na = a ? Math.min(nb, a.length) : 0,
	        x = new Array(nb),
	        c = new Array(nb),
	        i;
	
	    for (i = 0; i < na; ++i) x[i] = interpolate(a[i], b[i]);
	    for (; i < nb; ++i) c[i] = b[i];
	
	    return function(t) {
	      for (i = 0; i < na; ++i) c[i] = x[i](t);
	      return c;
	    };
	  }
	
	  function date(a, b) {
	    var d = new Date;
	    return a = +a, b -= a, function(t) {
	      return d.setTime(a + b * t), d;
	    };
	  }
	
	  function interpolateNumber(a, b) {
	    return a = +a, b -= a, function(t) {
	      return a + b * t;
	    };
	  }
	
	  function object(a, b) {
	    var i = {},
	        c = {},
	        k;
	
	    if (a === null || typeof a !== "object") a = {};
	    if (b === null || typeof b !== "object") b = {};
	
	    for (k in b) {
	      if (k in a) {
	        i[k] = interpolate(a[k], b[k]);
	      } else {
	        c[k] = b[k];
	      }
	    }
	
	    return function(t) {
	      for (k in i) c[k] = i[k](t);
	      return c;
	    };
	  }
	
	  var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
	  var reB = new RegExp(reA.source, "g");
	  function zero(b) {
	    return function() {
	      return b;
	    };
	  }
	
	  function one(b) {
	    return function(t) {
	      return b(t) + "";
	    };
	  }
	
	  function interpolateString(a, b) {
	    var bi = reA.lastIndex = reB.lastIndex = 0, // scan index for next number in b
	        am, // current match in a
	        bm, // current match in b
	        bs, // string preceding current number in b, if any
	        i = -1, // index in s
	        s = [], // string constants and placeholders
	        q = []; // number interpolators
	
	    // Coerce inputs to strings.
	    a = a + "", b = b + "";
	
	    // Interpolate pairs of numbers in a & b.
	    while ((am = reA.exec(a))
	        && (bm = reB.exec(b))) {
	      if ((bs = bm.index) > bi) { // a string precedes the next number in b
	        bs = b.slice(bi, bs);
	        if (s[i]) s[i] += bs; // coalesce with previous string
	        else s[++i] = bs;
	      }
	      if ((am = am[0]) === (bm = bm[0])) { // numbers in a & b match
	        if (s[i]) s[i] += bm; // coalesce with previous string
	        else s[++i] = bm;
	      } else { // interpolate non-matching numbers
	        s[++i] = null;
	        q.push({i: i, x: interpolateNumber(am, bm)});
	      }
	      bi = reB.lastIndex;
	    }
	
	    // Add remains of b.
	    if (bi < b.length) {
	      bs = b.slice(bi);
	      if (s[i]) s[i] += bs; // coalesce with previous string
	      else s[++i] = bs;
	    }
	
	    // Special optimization for only a single match.
	    // Otherwise, interpolate each of the numbers and rejoin the string.
	    return s.length < 2 ? (q[0]
	        ? one(q[0].x)
	        : zero(b))
	        : (b = q.length, function(t) {
	            for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
	            return s.join("");
	          });
	  }
	
	  function interpolate(a, b) {
	    var t = typeof b, c;
	    return b == null || t === "boolean" ? constant$2(b)
	        : (t === "number" ? interpolateNumber
	        : t === "string" ? ((c = color(b)) ? (b = c, interpolateRgb) : interpolateString)
	        : b instanceof color ? interpolateRgb
	        : b instanceof Date ? date
	        : Array.isArray(b) ? array$1
	        : isNaN(b) ? object
	        : interpolateNumber)(a, b);
	  }
	
	  function interpolateRound(a, b) {
	    return a = +a, b -= a, function(t) {
	      return Math.round(a + b * t);
	    };
	  }
	
	  var degrees = 180 / Math.PI;
	
	  var identity$2 = {
	    translateX: 0,
	    translateY: 0,
	    rotate: 0,
	    skewX: 0,
	    scaleX: 1,
	    scaleY: 1
	  };
	
	  function decompose(a, b, c, d, e, f) {
	    var scaleX, scaleY, skewX;
	    if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
	    if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
	    if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
	    if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
	    return {
	      translateX: e,
	      translateY: f,
	      rotate: Math.atan2(b, a) * degrees,
	      skewX: Math.atan(skewX) * degrees,
	      scaleX: scaleX,
	      scaleY: scaleY
	    };
	  }
	
	  var cssNode;
	  var cssRoot;
	  var cssView;
	  var svgNode;
	  function parseCss(value) {
	    if (value === "none") return identity$2;
	    if (!cssNode) cssNode = document.createElement("DIV"), cssRoot = document.documentElement, cssView = document.defaultView;
	    cssNode.style.transform = value;
	    value = cssView.getComputedStyle(cssRoot.appendChild(cssNode), null).getPropertyValue("transform");
	    cssRoot.removeChild(cssNode);
	    value = value.slice(7, -1).split(",");
	    return decompose(+value[0], +value[1], +value[2], +value[3], +value[4], +value[5]);
	  }
	
	  function parseSvg(value) {
	    if (value == null) return identity$2;
	    if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
	    svgNode.setAttribute("transform", value);
	    if (!(value = svgNode.transform.baseVal.consolidate())) return identity$2;
	    value = value.matrix;
	    return decompose(value.a, value.b, value.c, value.d, value.e, value.f);
	  }
	
	  function interpolateTransform(parse, pxComma, pxParen, degParen) {
	
	    function pop(s) {
	      return s.length ? s.pop() + " " : "";
	    }
	
	    function translate(xa, ya, xb, yb, s, q) {
	      if (xa !== xb || ya !== yb) {
	        var i = s.push("translate(", null, pxComma, null, pxParen);
	        q.push({i: i - 4, x: interpolateNumber(xa, xb)}, {i: i - 2, x: interpolateNumber(ya, yb)});
	      } else if (xb || yb) {
	        s.push("translate(" + xb + pxComma + yb + pxParen);
	      }
	    }
	
	    function rotate(a, b, s, q) {
	      if (a !== b) {
	        if (a - b > 180) b += 360; else if (b - a > 180) a += 360; // shortest path
	        q.push({i: s.push(pop(s) + "rotate(", null, degParen) - 2, x: interpolateNumber(a, b)});
	      } else if (b) {
	        s.push(pop(s) + "rotate(" + b + degParen);
	      }
	    }
	
	    function skewX(a, b, s, q) {
	      if (a !== b) {
	        q.push({i: s.push(pop(s) + "skewX(", null, degParen) - 2, x: interpolateNumber(a, b)});
	      } else if (b) {
	        s.push(pop(s) + "skewX(" + b + degParen);
	      }
	    }
	
	    function scale(xa, ya, xb, yb, s, q) {
	      if (xa !== xb || ya !== yb) {
	        var i = s.push(pop(s) + "scale(", null, ",", null, ")");
	        q.push({i: i - 4, x: interpolateNumber(xa, xb)}, {i: i - 2, x: interpolateNumber(ya, yb)});
	      } else if (xb !== 1 || yb !== 1) {
	        s.push(pop(s) + "scale(" + xb + "," + yb + ")");
	      }
	    }
	
	    return function(a, b) {
	      var s = [], // string constants and placeholders
	          q = []; // number interpolators
	      a = parse(a), b = parse(b);
	      translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
	      rotate(a.rotate, b.rotate, s, q);
	      skewX(a.skewX, b.skewX, s, q);
	      scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
	      a = b = null; // gc
	      return function(t) {
	        var i = -1, n = q.length, o;
	        while (++i < n) s[(o = q[i]).i] = o.x(t);
	        return s.join("");
	      };
	    };
	  }
	
	  var interpolateTransform$1 = interpolateTransform(parseCss, "px, ", "px)", "deg)");
	  var interpolateTransform$2 = interpolateTransform(parseSvg, ", ", ")", ")");
	
	  var rho = Math.SQRT2;
	  var rho2 = 2;
	  var rho4 = 4;
	  var epsilon2 = 1e-12;
	  function cosh(x) {
	    return ((x = Math.exp(x)) + 1 / x) / 2;
	  }
	
	  function sinh(x) {
	    return ((x = Math.exp(x)) - 1 / x) / 2;
	  }
	
	  function tanh(x) {
	    return ((x = Math.exp(2 * x)) - 1) / (x + 1);
	  }
	
	  // p0 = [ux0, uy0, w0]
	  // p1 = [ux1, uy1, w1]
	  function interpolateZoom(p0, p1) {
	    var ux0 = p0[0], uy0 = p0[1], w0 = p0[2],
	        ux1 = p1[0], uy1 = p1[1], w1 = p1[2],
	        dx = ux1 - ux0,
	        dy = uy1 - uy0,
	        d2 = dx * dx + dy * dy,
	        i,
	        S;
	
	    // Special case for u0 ≅ u1.
	    if (d2 < epsilon2) {
	      S = Math.log(w1 / w0) / rho;
	      i = function(t) {
	        return [
	          ux0 + t * dx,
	          uy0 + t * dy,
	          w0 * Math.exp(rho * t * S)
	        ];
	      }
	    }
	
	    // General case.
	    else {
	      var d1 = Math.sqrt(d2),
	          b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1),
	          b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1),
	          r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0),
	          r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
	      S = (r1 - r0) / rho;
	      i = function(t) {
	        var s = t * S,
	            coshr0 = cosh(r0),
	            u = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s + r0) - sinh(r0));
	        return [
	          ux0 + u * dx,
	          uy0 + u * dy,
	          w0 * coshr0 / cosh(rho * s + r0)
	        ];
	      }
	    }
	
	    i.duration = S * 1000;
	
	    return i;
	  }
	
	  function hsl(hue) {
	    return function(start, end) {
	      var h = hue((start = colorHsl(start)).h, (end = colorHsl(end)).h),
	          s = nogamma(start.s, end.s),
	          l = nogamma(start.l, end.l),
	          opacity = nogamma(start.opacity, end.opacity);
	      return function(t) {
	        start.h = h(t);
	        start.s = s(t);
	        start.l = l(t);
	        start.opacity = opacity(t);
	        return start + "";
	      };
	    }
	  }
	
	  var hsl$1 = hsl(hue);
	  var hslLong = hsl(nogamma);
	
	  function lab$1(start, end) {
	    var l = nogamma((start = lab(start)).l, (end = lab(end)).l),
	        a = nogamma(start.a, end.a),
	        b = nogamma(start.b, end.b),
	        opacity = nogamma(start.opacity, end.opacity);
	    return function(t) {
	      start.l = l(t);
	      start.a = a(t);
	      start.b = b(t);
	      start.opacity = opacity(t);
	      return start + "";
	    };
	  }
	
	  function hcl(hue) {
	    return function(start, end) {
	      var h = hue((start = colorHcl(start)).h, (end = colorHcl(end)).h),
	          c = nogamma(start.c, end.c),
	          l = nogamma(start.l, end.l),
	          opacity = nogamma(start.opacity, end.opacity);
	      return function(t) {
	        start.h = h(t);
	        start.c = c(t);
	        start.l = l(t);
	        start.opacity = opacity(t);
	        return start + "";
	      };
	    }
	  }
	
	  var hcl$1 = hcl(hue);
	  var hclLong = hcl(nogamma);
	
	  function cubehelix$1(hue) {
	    return (function cubehelixGamma(y) {
	      y = +y;
	
	      function cubehelix$$(start, end) {
	        var h = hue((start = cubehelix(start)).h, (end = cubehelix(end)).h),
	            s = nogamma(start.s, end.s),
	            l = nogamma(start.l, end.l),
	            opacity = nogamma(start.opacity, end.opacity);
	        return function(t) {
	          start.h = h(t);
	          start.s = s(t);
	          start.l = l(Math.pow(t, y));
	          start.opacity = opacity(t);
	          return start + "";
	        };
	      }
	
	      cubehelix$$.gamma = cubehelixGamma;
	
	      return cubehelix$$;
	    })(1);
	  }
	
	  var cubehelix$2 = cubehelix$1(hue);
	  var interpolateCubehelixLong = cubehelix$1(nogamma);
	
	  function quantize(interpolator, n) {
	    var samples = new Array(n);
	    for (var i = 0; i < n; ++i) samples[i] = interpolator(i / (n - 1));
	    return samples;
	  }
	
	  var noop$1 = {value: function() {}};
	
	  function dispatch() {
	    for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
	      if (!(t = arguments[i] + "") || (t in _)) throw new Error("illegal type: " + t);
	      _[t] = [];
	    }
	    return new Dispatch(_);
	  }
	
	  function Dispatch(_) {
	    this._ = _;
	  }
	
	  function parseTypenames(typenames, types) {
	    return typenames.trim().split(/^|\s+/).map(function(t) {
	      var name = "", i = t.indexOf(".");
	      if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
	      if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
	      return {type: t, name: name};
	    });
	  }
	
	  Dispatch.prototype = dispatch.prototype = {
	    constructor: Dispatch,
	    on: function(typename, callback) {
	      var _ = this._,
	          T = parseTypenames(typename + "", _),
	          t,
	          i = -1,
	          n = T.length;
	
	      // If no callback was specified, return the callback of the given type and name.
	      if (arguments.length < 2) {
	        while (++i < n) if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name))) return t;
	        return;
	      }
	
	      // If a type was specified, set the callback for the given type and name.
	      // Otherwise, if a null callback was specified, remove callbacks of the given name.
	      if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
	      while (++i < n) {
	        if (t = (typename = T[i]).type) _[t] = set$1(_[t], typename.name, callback);
	        else if (callback == null) for (t in _) _[t] = set$1(_[t], typename.name, null);
	      }
	
	      return this;
	    },
	    copy: function() {
	      var copy = {}, _ = this._;
	      for (var t in _) copy[t] = _[t].slice();
	      return new Dispatch(copy);
	    },
	    call: function(type, that) {
	      if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) args[i] = arguments[i + 2];
	      if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
	      for (t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
	    },
	    apply: function(type, that, args) {
	      if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
	      for (var t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
	    }
	  };
	
	  function get(type, name) {
	    for (var i = 0, n = type.length, c; i < n; ++i) {
	      if ((c = type[i]).name === name) {
	        return c.value;
	      }
	    }
	  }
	
	  function set$1(type, name, callback) {
	    for (var i = 0, n = type.length; i < n; ++i) {
	      if (type[i].name === name) {
	        type[i] = noop$1, type = type.slice(0, i).concat(type.slice(i + 1));
	        break;
	      }
	    }
	    if (callback != null) type.push({name: name, value: callback});
	    return type;
	  }
	
	  function objectConverter(columns) {
	    return new Function("d", "return {" + columns.map(function(name, i) {
	      return JSON.stringify(name) + ": d[" + i + "]";
	    }).join(",") + "}");
	  }
	
	  function customConverter(columns, f) {
	    var object = objectConverter(columns);
	    return function(row, i) {
	      return f(object(row), i, columns);
	    };
	  }
	
	  // Compute unique columns in order of discovery.
	  function inferColumns(rows) {
	    var columnSet = Object.create(null),
	        columns = [];
	
	    rows.forEach(function(row) {
	      for (var column in row) {
	        if (!(column in columnSet)) {
	          columns.push(columnSet[column] = column);
	        }
	      }
	    });
	
	    return columns;
	  }
	
	  function dsv(delimiter) {
	    var reFormat = new RegExp("[\"" + delimiter + "\n]"),
	        delimiterCode = delimiter.charCodeAt(0);
	
	    function parse(text, f) {
	      var convert, columns, rows = parseRows(text, function(row, i) {
	        if (convert) return convert(row, i - 1);
	        columns = row, convert = f ? customConverter(row, f) : objectConverter(row);
	      });
	      rows.columns = columns;
	      return rows;
	    }
	
	    function parseRows(text, f) {
	      var EOL = {}, // sentinel value for end-of-line
	          EOF = {}, // sentinel value for end-of-file
	          rows = [], // output rows
	          N = text.length,
	          I = 0, // current character index
	          n = 0, // the current line number
	          t, // the current token
	          eol; // is the current token followed by EOL?
	
	      function token() {
	        if (I >= N) return EOF; // special case: end of file
	        if (eol) return eol = false, EOL; // special case: end of line
	
	        // special case: quotes
	        var j = I, c;
	        if (text.charCodeAt(j) === 34) {
	          var i = j;
	          while (i++ < N) {
	            if (text.charCodeAt(i) === 34) {
	              if (text.charCodeAt(i + 1) !== 34) break;
	              ++i;
	            }
	          }
	          I = i + 2;
	          c = text.charCodeAt(i + 1);
	          if (c === 13) {
	            eol = true;
	            if (text.charCodeAt(i + 2) === 10) ++I;
	          } else if (c === 10) {
	            eol = true;
	          }
	          return text.slice(j + 1, i).replace(/""/g, "\"");
	        }
	
	        // common case: find next delimiter or newline
	        while (I < N) {
	          var k = 1;
	          c = text.charCodeAt(I++);
	          if (c === 10) eol = true; // \n
	          else if (c === 13) { eol = true; if (text.charCodeAt(I) === 10) ++I, ++k; } // \r|\r\n
	          else if (c !== delimiterCode) continue;
	          return text.slice(j, I - k);
	        }
	
	        // special case: last token before EOF
	        return text.slice(j);
	      }
	
	      while ((t = token()) !== EOF) {
	        var a = [];
	        while (t !== EOL && t !== EOF) {
	          a.push(t);
	          t = token();
	        }
	        if (f && (a = f(a, n++)) == null) continue;
	        rows.push(a);
	      }
	
	      return rows;
	    }
	
	    function format(rows, columns) {
	      if (columns == null) columns = inferColumns(rows);
	      return [columns.map(formatValue).join(delimiter)].concat(rows.map(function(row) {
	        return columns.map(function(column) {
	          return formatValue(row[column]);
	        }).join(delimiter);
	      })).join("\n");
	    }
	
	    function formatRows(rows) {
	      return rows.map(formatRow).join("\n");
	    }
	
	    function formatRow(row) {
	      return row.map(formatValue).join(delimiter);
	    }
	
	    function formatValue(text) {
	      return text == null ? ""
	          : reFormat.test(text += "") ? "\"" + text.replace(/\"/g, "\"\"") + "\""
	          : text;
	    }
	
	    return {
	      parse: parse,
	      parseRows: parseRows,
	      format: format,
	      formatRows: formatRows
	    };
	  }
	
	  var csv = dsv(",");
	
	  var csvParse = csv.parse;
	  var csvParseRows = csv.parseRows;
	  var csvFormat = csv.format;
	  var csvFormatRows = csv.formatRows;
	
	  var tsv = dsv("\t");
	
	  var tsvParse = tsv.parse;
	  var tsvParseRows = tsv.parseRows;
	  var tsvFormat = tsv.format;
	  var tsvFormatRows = tsv.formatRows;
	
	  function request(url, callback) {
	    var request,
	        event = dispatch("beforesend", "progress", "load", "error"),
	        mimeType,
	        headers = map$1(),
	        xhr = new XMLHttpRequest,
	        user = null,
	        password = null,
	        response,
	        responseType,
	        timeout = 0;
	
	    // If IE does not support CORS, use XDomainRequest.
	    if (typeof XDomainRequest !== "undefined"
	        && !("withCredentials" in xhr)
	        && /^(http(s)?:)?\/\//.test(url)) xhr = new XDomainRequest;
	
	    "onload" in xhr
	        ? xhr.onload = xhr.onerror = xhr.ontimeout = respond
	        : xhr.onreadystatechange = function(o) { xhr.readyState > 3 && respond(o); };
	
	    function respond(o) {
	      var status = xhr.status, result;
	      if (!status && hasResponse(xhr)
	          || status >= 200 && status < 300
	          || status === 304) {
	        if (response) {
	          try {
	            result = response.call(request, xhr);
	          } catch (e) {
	            event.call("error", request, e);
	            return;
	          }
	        } else {
	          result = xhr;
	        }
	        event.call("load", request, result);
	      } else {
	        event.call("error", request, o);
	      }
	    }
	
	    xhr.onprogress = function(e) {
	      event.call("progress", request, e);
	    };
	
	    request = {
	      header: function(name, value) {
	        name = (name + "").toLowerCase();
	        if (arguments.length < 2) return headers.get(name);
	        if (value == null) headers.remove(name);
	        else headers.set(name, value + "");
	        return request;
	      },
	
	      // If mimeType is non-null and no Accept header is set, a default is used.
	      mimeType: function(value) {
	        if (!arguments.length) return mimeType;
	        mimeType = value == null ? null : value + "";
	        return request;
	      },
	
	      // Specifies what type the response value should take;
	      // for instance, arraybuffer, blob, document, or text.
	      responseType: function(value) {
	        if (!arguments.length) return responseType;
	        responseType = value;
	        return request;
	      },
	
	      timeout: function(value) {
	        if (!arguments.length) return timeout;
	        timeout = +value;
	        return request;
	      },
	
	      user: function(value) {
	        return arguments.length < 1 ? user : (user = value == null ? null : value + "", request);
	      },
	
	      password: function(value) {
	        return arguments.length < 1 ? password : (password = value == null ? null : value + "", request);
	      },
	
	      // Specify how to convert the response content to a specific type;
	      // changes the callback value on "load" events.
	      response: function(value) {
	        response = value;
	        return request;
	      },
	
	      // Alias for send("GET", …).
	      get: function(data, callback) {
	        return request.send("GET", data, callback);
	      },
	
	      // Alias for send("POST", …).
	      post: function(data, callback) {
	        return request.send("POST", data, callback);
	      },
	
	      // If callback is non-null, it will be used for error and load events.
	      send: function(method, data, callback) {
	        xhr.open(method, url, true, user, password);
	        if (mimeType != null && !headers.has("accept")) headers.set("accept", mimeType + ",*/*");
	        if (xhr.setRequestHeader) headers.each(function(value, name) { xhr.setRequestHeader(name, value); });
	        if (mimeType != null && xhr.overrideMimeType) xhr.overrideMimeType(mimeType);
	        if (responseType != null) xhr.responseType = responseType;
	        if (timeout > 0) xhr.timeout = timeout;
	        if (callback == null && typeof data === "function") callback = data, data = null;
	        if (callback != null && callback.length === 1) callback = fixCallback(callback);
	        if (callback != null) request.on("error", callback).on("load", function(xhr) { callback(null, xhr); });
	        event.call("beforesend", request, xhr);
	        xhr.send(data == null ? null : data);
	        return request;
	      },
	
	      abort: function() {
	        xhr.abort();
	        return request;
	      },
	
	      on: function() {
	        var value = event.on.apply(event, arguments);
	        return value === event ? request : value;
	      }
	    };
	
	    if (callback != null) {
	      if (typeof callback !== "function") throw new Error("invalid callback: " + callback);
	      return request.get(callback);
	    }
	
	    return request;
	  }
	
	  function fixCallback(callback) {
	    return function(error, xhr) {
	      callback(error == null ? xhr : null);
	    };
	  }
	
	  function hasResponse(xhr) {
	    var type = xhr.responseType;
	    return type && type !== "text"
	        ? xhr.response // null on error
	        : xhr.responseText; // "" on error
	  }
	
	  function type(defaultMimeType, response) {
	    return function(url, callback) {
	      var r = request(url).mimeType(defaultMimeType).response(response);
	      if (callback != null) {
	        if (typeof callback !== "function") throw new Error("invalid callback: " + callback);
	        return r.get(callback);
	      }
	      return r;
	    };
	  }
	
	  var html = type("text/html", function(xhr) {
	    return document.createRange().createContextualFragment(xhr.responseText);
	  });
	
	  var json = type("application/json", function(xhr) {
	    return JSON.parse(xhr.responseText);
	  });
	
	  var text = type("text/plain", function(xhr) {
	    return xhr.responseText;
	  });
	
	  var xml = type("application/xml", function(xhr) {
	    var xml = xhr.responseXML;
	    if (!xml) throw new Error("parse error");
	    return xml;
	  });
	
	  function dsv$1(defaultMimeType, parse) {
	    return function(url, row, callback) {
	      if (arguments.length < 3) callback = row, row = null;
	      var r = request(url).mimeType(defaultMimeType);
	      r.row = function(_) { return arguments.length ? r.response(responseOf(parse, row = _)) : row; };
	      r.row(row);
	      return callback ? r.get(callback) : r;
	    };
	  }
	
	  function responseOf(parse, row) {
	    return function(request) {
	      return parse(request.responseText, row);
	    };
	  }
	
	  var csv$1 = dsv$1("text/csv", csvParse);
	
	  var tsv$1 = dsv$1("text/tab-separated-values", tsvParse);
	
	  var frame = 0;
	  var timeout = 0;
	  var interval = 0;
	  var pokeDelay = 1000;
	  var taskHead;
	  var taskTail;
	  var clockLast = 0;
	  var clockNow = 0;
	  var clockSkew = 0;
	  var clock = typeof performance === "object" && performance.now ? performance : Date;
	  var setFrame = typeof requestAnimationFrame === "function"
	          ? (clock === Date ? function(f) { requestAnimationFrame(function() { f(clock.now()); }); } : requestAnimationFrame)
	          : function(f) { setTimeout(f, 17); };
	  function now() {
	    return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
	  }
	
	  function clearNow() {
	    clockNow = 0;
	  }
	
	  function Timer() {
	    this._call =
	    this._time =
	    this._next = null;
	  }
	
	  Timer.prototype = timer.prototype = {
	    constructor: Timer,
	    restart: function(callback, delay, time) {
	      if (typeof callback !== "function") throw new TypeError("callback is not a function");
	      time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
	      if (!this._next && taskTail !== this) {
	        if (taskTail) taskTail._next = this;
	        else taskHead = this;
	        taskTail = this;
	      }
	      this._call = callback;
	      this._time = time;
	      sleep();
	    },
	    stop: function() {
	      if (this._call) {
	        this._call = null;
	        this._time = Infinity;
	        sleep();
	      }
	    }
	  };
	
	  function timer(callback, delay, time) {
	    var t = new Timer;
	    t.restart(callback, delay, time);
	    return t;
	  }
	
	  function timerFlush() {
	    now(); // Get the current time, if not already set.
	    ++frame; // Pretend we’ve set an alarm, if we haven’t already.
	    var t = taskHead, e;
	    while (t) {
	      if ((e = clockNow - t._time) >= 0) t._call.call(null, e);
	      t = t._next;
	    }
	    --frame;
	  }
	
	  function wake(time) {
	    clockNow = (clockLast = time || clock.now()) + clockSkew;
	    frame = timeout = 0;
	    try {
	      timerFlush();
	    } finally {
	      frame = 0;
	      nap();
	      clockNow = 0;
	    }
	  }
	
	  function poke$1() {
	    var now = clock.now(), delay = now - clockLast;
	    if (delay > pokeDelay) clockSkew -= delay, clockLast = now;
	  }
	
	  function nap() {
	    var t0, t1 = taskHead, t2, time = Infinity;
	    while (t1) {
	      if (t1._call) {
	        if (time > t1._time) time = t1._time;
	        t0 = t1, t1 = t1._next;
	      } else {
	        t2 = t1._next, t1._next = null;
	        t1 = t0 ? t0._next = t2 : taskHead = t2;
	      }
	    }
	    taskTail = t0;
	    sleep(time);
	  }
	
	  function sleep(time) {
	    if (frame) return; // Soonest alarm already set, or will be.
	    if (timeout) timeout = clearTimeout(timeout);
	    var delay = time - clockNow;
	    if (delay > 24) {
	      if (time < Infinity) timeout = setTimeout(wake, delay);
	      if (interval) interval = clearInterval(interval);
	    } else {
	      if (!interval) interval = setInterval(poke$1, pokeDelay);
	      frame = 1, setFrame(wake);
	    }
	  }
	
	  function timeout$1(callback, delay, time) {
	    var t = new Timer;
	    delay = delay == null ? 0 : +delay;
	    t.restart(function(elapsed) {
	      t.stop();
	      callback(elapsed + delay);
	    }, delay, time);
	    return t;
	  }
	
	  function interval$1(callback, delay, time) {
	    var t = new Timer, total = delay;
	    if (delay == null) return t.restart(callback, delay, time), t;
	    delay = +delay, time = time == null ? now() : +time;
	    t.restart(function tick(elapsed) {
	      elapsed += total;
	      t.restart(tick, total += delay, time);
	      callback(elapsed);
	    }, delay, time);
	    return t;
	  }
	
	var   t0$1 = new Date;
	var   t1$1 = new Date;
	  function newInterval(floori, offseti, count, field) {
	
	    function interval(date) {
	      return floori(date = new Date(+date)), date;
	    }
	
	    interval.floor = interval;
	
	    interval.ceil = function(date) {
	      return floori(date = new Date(date - 1)), offseti(date, 1), floori(date), date;
	    };
	
	    interval.round = function(date) {
	      var d0 = interval(date),
	          d1 = interval.ceil(date);
	      return date - d0 < d1 - date ? d0 : d1;
	    };
	
	    interval.offset = function(date, step) {
	      return offseti(date = new Date(+date), step == null ? 1 : Math.floor(step)), date;
	    };
	
	    interval.range = function(start, stop, step) {
	      var range = [];
	      start = interval.ceil(start);
	      step = step == null ? 1 : Math.floor(step);
	      if (!(start < stop) || !(step > 0)) return range; // also handles Invalid Date
	      do range.push(new Date(+start)); while (offseti(start, step), floori(start), start < stop)
	      return range;
	    };
	
	    interval.filter = function(test) {
	      return newInterval(function(date) {
	        while (floori(date), !test(date)) date.setTime(date - 1);
	      }, function(date, step) {
	        while (--step >= 0) while (offseti(date, 1), !test(date));
	      });
	    };
	
	    if (count) {
	      interval.count = function(start, end) {
	        t0$1.setTime(+start), t1$1.setTime(+end);
	        floori(t0$1), floori(t1$1);
	        return Math.floor(count(t0$1, t1$1));
	      };
	
	      interval.every = function(step) {
	        step = Math.floor(step);
	        return !isFinite(step) || !(step > 0) ? null
	            : !(step > 1) ? interval
	            : interval.filter(field
	                ? function(d) { return field(d) % step === 0; }
	                : function(d) { return interval.count(0, d) % step === 0; });
	      };
	    }
	
	    return interval;
	  }
	
	  var millisecond = newInterval(function() {
	    // noop
	  }, function(date, step) {
	    date.setTime(+date + step);
	  }, function(start, end) {
	    return end - start;
	  });
	
	  // An optimized implementation for this simple case.
	  millisecond.every = function(k) {
	    k = Math.floor(k);
	    if (!isFinite(k) || !(k > 0)) return null;
	    if (!(k > 1)) return millisecond;
	    return newInterval(function(date) {
	      date.setTime(Math.floor(date / k) * k);
	    }, function(date, step) {
	      date.setTime(+date + step * k);
	    }, function(start, end) {
	      return (end - start) / k;
	    });
	  };
	
	  var milliseconds = millisecond.range;
	
	  var durationSecond = 1e3;
	  var durationMinute = 6e4;
	  var durationHour = 36e5;
	  var durationDay = 864e5;
	  var durationWeek = 6048e5;
	
	  var second = newInterval(function(date) {
	    date.setTime(Math.floor(date / durationSecond) * durationSecond);
	  }, function(date, step) {
	    date.setTime(+date + step * durationSecond);
	  }, function(start, end) {
	    return (end - start) / durationSecond;
	  }, function(date) {
	    return date.getUTCSeconds();
	  });
	
	  var seconds = second.range;
	
	  var minute = newInterval(function(date) {
	    date.setTime(Math.floor(date / durationMinute) * durationMinute);
	  }, function(date, step) {
	    date.setTime(+date + step * durationMinute);
	  }, function(start, end) {
	    return (end - start) / durationMinute;
	  }, function(date) {
	    return date.getMinutes();
	  });
	
	  var minutes = minute.range;
	
	  var hour = newInterval(function(date) {
	    var offset = date.getTimezoneOffset() * durationMinute % durationHour;
	    if (offset < 0) offset += durationHour;
	    date.setTime(Math.floor((+date - offset) / durationHour) * durationHour + offset);
	  }, function(date, step) {
	    date.setTime(+date + step * durationHour);
	  }, function(start, end) {
	    return (end - start) / durationHour;
	  }, function(date) {
	    return date.getHours();
	  });
	
	  var hours = hour.range;
	
	  var day = newInterval(function(date) {
	    date.setHours(0, 0, 0, 0);
	  }, function(date, step) {
	    date.setDate(date.getDate() + step);
	  }, function(start, end) {
	    return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * durationMinute) / durationDay;
	  }, function(date) {
	    return date.getDate() - 1;
	  });
	
	  var days = day.range;
	
	  function weekday(i) {
	    return newInterval(function(date) {
	      date.setDate(date.getDate() - (date.getDay() + 7 - i) % 7);
	      date.setHours(0, 0, 0, 0);
	    }, function(date, step) {
	      date.setDate(date.getDate() + step * 7);
	    }, function(start, end) {
	      return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * durationMinute) / durationWeek;
	    });
	  }
	
	  var timeWeek = weekday(0);
	  var timeMonday = weekday(1);
	  var tuesday = weekday(2);
	  var wednesday = weekday(3);
	  var thursday = weekday(4);
	  var friday = weekday(5);
	  var saturday = weekday(6);
	
	  var sundays = timeWeek.range;
	  var mondays = timeMonday.range;
	  var tuesdays = tuesday.range;
	  var wednesdays = wednesday.range;
	  var thursdays = thursday.range;
	  var fridays = friday.range;
	  var saturdays = saturday.range;
	
	  var month = newInterval(function(date) {
	    date.setDate(1);
	    date.setHours(0, 0, 0, 0);
	  }, function(date, step) {
	    date.setMonth(date.getMonth() + step);
	  }, function(start, end) {
	    return end.getMonth() - start.getMonth() + (end.getFullYear() - start.getFullYear()) * 12;
	  }, function(date) {
	    return date.getMonth();
	  });
	
	  var months = month.range;
	
	  var year = newInterval(function(date) {
	    date.setMonth(0, 1);
	    date.setHours(0, 0, 0, 0);
	  }, function(date, step) {
	    date.setFullYear(date.getFullYear() + step);
	  }, function(start, end) {
	    return end.getFullYear() - start.getFullYear();
	  }, function(date) {
	    return date.getFullYear();
	  });
	
	  // An optimized implementation for this simple case.
	  year.every = function(k) {
	    return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : newInterval(function(date) {
	      date.setFullYear(Math.floor(date.getFullYear() / k) * k);
	      date.setMonth(0, 1);
	      date.setHours(0, 0, 0, 0);
	    }, function(date, step) {
	      date.setFullYear(date.getFullYear() + step * k);
	    });
	  };
	
	  var years = year.range;
	
	  var utcMinute = newInterval(function(date) {
	    date.setUTCSeconds(0, 0);
	  }, function(date, step) {
	    date.setTime(+date + step * durationMinute);
	  }, function(start, end) {
	    return (end - start) / durationMinute;
	  }, function(date) {
	    return date.getUTCMinutes();
	  });
	
	  var utcMinutes = utcMinute.range;
	
	  var utcHour = newInterval(function(date) {
	    date.setUTCMinutes(0, 0, 0);
	  }, function(date, step) {
	    date.setTime(+date + step * durationHour);
	  }, function(start, end) {
	    return (end - start) / durationHour;
	  }, function(date) {
	    return date.getUTCHours();
	  });
	
	  var utcHours = utcHour.range;
	
	  var utcDay = newInterval(function(date) {
	    date.setUTCHours(0, 0, 0, 0);
	  }, function(date, step) {
	    date.setUTCDate(date.getUTCDate() + step);
	  }, function(start, end) {
	    return (end - start) / durationDay;
	  }, function(date) {
	    return date.getUTCDate() - 1;
	  });
	
	  var utcDays = utcDay.range;
	
	  function utcWeekday(i) {
	    return newInterval(function(date) {
	      date.setUTCDate(date.getUTCDate() - (date.getUTCDay() + 7 - i) % 7);
	      date.setUTCHours(0, 0, 0, 0);
	    }, function(date, step) {
	      date.setUTCDate(date.getUTCDate() + step * 7);
	    }, function(start, end) {
	      return (end - start) / durationWeek;
	    });
	  }
	
	  var utcWeek = utcWeekday(0);
	  var utcMonday = utcWeekday(1);
	  var utcTuesday = utcWeekday(2);
	  var utcWednesday = utcWeekday(3);
	  var utcThursday = utcWeekday(4);
	  var utcFriday = utcWeekday(5);
	  var utcSaturday = utcWeekday(6);
	
	  var utcSundays = utcWeek.range;
	  var utcMondays = utcMonday.range;
	  var utcTuesdays = utcTuesday.range;
	  var utcWednesdays = utcWednesday.range;
	  var utcThursdays = utcThursday.range;
	  var utcFridays = utcFriday.range;
	  var utcSaturdays = utcSaturday.range;
	
	  var utcMonth = newInterval(function(date) {
	    date.setUTCDate(1);
	    date.setUTCHours(0, 0, 0, 0);
	  }, function(date, step) {
	    date.setUTCMonth(date.getUTCMonth() + step);
	  }, function(start, end) {
	    return end.getUTCMonth() - start.getUTCMonth() + (end.getUTCFullYear() - start.getUTCFullYear()) * 12;
	  }, function(date) {
	    return date.getUTCMonth();
	  });
	
	  var utcMonths = utcMonth.range;
	
	  var utcYear = newInterval(function(date) {
	    date.setUTCMonth(0, 1);
	    date.setUTCHours(0, 0, 0, 0);
	  }, function(date, step) {
	    date.setUTCFullYear(date.getUTCFullYear() + step);
	  }, function(start, end) {
	    return end.getUTCFullYear() - start.getUTCFullYear();
	  }, function(date) {
	    return date.getUTCFullYear();
	  });
	
	  // An optimized implementation for this simple case.
	  utcYear.every = function(k) {
	    return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : newInterval(function(date) {
	      date.setUTCFullYear(Math.floor(date.getUTCFullYear() / k) * k);
	      date.setUTCMonth(0, 1);
	      date.setUTCHours(0, 0, 0, 0);
	    }, function(date, step) {
	      date.setUTCFullYear(date.getUTCFullYear() + step * k);
	    });
	  };
	
	  var utcYears = utcYear.range;
	
	  // Computes the decimal coefficient and exponent of the specified number x with
	  // significant digits p, where x is positive and p is in [1, 21] or undefined.
	  // For example, formatDecimal(1.23) returns ["123", 0].
	  function formatDecimal(x, p) {
	    if ((i = (x = p ? x.toExponential(p - 1) : x.toExponential()).indexOf("e")) < 0) return null; // NaN, ±Infinity
	    var i, coefficient = x.slice(0, i);
	
	    // The string returned by toExponential either has the form \d\.\d+e[-+]\d+
	    // (e.g., 1.2e+3) or the form \de[-+]\d+ (e.g., 1e+3).
	    return [
	      coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
	      +x.slice(i + 1)
	    ];
	  }
	
	  function exponent$1(x) {
	    return x = formatDecimal(Math.abs(x)), x ? x[1] : NaN;
	  }
	
	  function formatGroup(grouping, thousands) {
	    return function(value, width) {
	      var i = value.length,
	          t = [],
	          j = 0,
	          g = grouping[0],
	          length = 0;
	
	      while (i > 0 && g > 0) {
	        if (length + g + 1 > width) g = Math.max(1, width - length);
	        t.push(value.substring(i -= g, i + g));
	        if ((length += g + 1) > width) break;
	        g = grouping[j = (j + 1) % grouping.length];
	      }
	
	      return t.reverse().join(thousands);
	    };
	  }
	
	  function formatDefault(x, p) {
	    x = x.toPrecision(p);
	
	    out: for (var n = x.length, i = 1, i0 = -1, i1; i < n; ++i) {
	      switch (x[i]) {
	        case ".": i0 = i1 = i; break;
	        case "0": if (i0 === 0) i0 = i; i1 = i; break;
	        case "e": break out;
	        default: if (i0 > 0) i0 = 0; break;
	      }
	    }
	
	    return i0 > 0 ? x.slice(0, i0) + x.slice(i1 + 1) : x;
	  }
	
	  var prefixExponent;
	
	  function formatPrefixAuto(x, p) {
	    var d = formatDecimal(x, p);
	    if (!d) return x + "";
	    var coefficient = d[0],
	        exponent = d[1],
	        i = exponent - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1,
	        n = coefficient.length;
	    return i === n ? coefficient
	        : i > n ? coefficient + new Array(i - n + 1).join("0")
	        : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i)
	        : "0." + new Array(1 - i).join("0") + formatDecimal(x, Math.max(0, p + i - 1))[0]; // less than 1y!
	  }
	
	  function formatRounded(x, p) {
	    var d = formatDecimal(x, p);
	    if (!d) return x + "";
	    var coefficient = d[0],
	        exponent = d[1];
	    return exponent < 0 ? "0." + new Array(-exponent).join("0") + coefficient
	        : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1)
	        : coefficient + new Array(exponent - coefficient.length + 2).join("0");
	  }
	
	  var formatTypes = {
	    "": formatDefault,
	    "%": function(x, p) { return (x * 100).toFixed(p); },
	    "b": function(x) { return Math.round(x).toString(2); },
	    "c": function(x) { return x + ""; },
	    "d": function(x) { return Math.round(x).toString(10); },
	    "e": function(x, p) { return x.toExponential(p); },
	    "f": function(x, p) { return x.toFixed(p); },
	    "g": function(x, p) { return x.toPrecision(p); },
	    "o": function(x) { return Math.round(x).toString(8); },
	    "p": function(x, p) { return formatRounded(x * 100, p); },
	    "r": formatRounded,
	    "s": formatPrefixAuto,
	    "X": function(x) { return Math.round(x).toString(16).toUpperCase(); },
	    "x": function(x) { return Math.round(x).toString(16); }
	  };
	
	  // [[fill]align][sign][symbol][0][width][,][.precision][type]
	  var re = /^(?:(.)?([<>=^]))?([+\-\( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?([a-z%])?$/i;
	
	  function formatSpecifier(specifier) {
	    return new FormatSpecifier(specifier);
	  }
	
	  function FormatSpecifier(specifier) {
	    if (!(match = re.exec(specifier))) throw new Error("invalid format: " + specifier);
	
	    var match,
	        fill = match[1] || " ",
	        align = match[2] || ">",
	        sign = match[3] || "-",
	        symbol = match[4] || "",
	        zero = !!match[5],
	        width = match[6] && +match[6],
	        comma = !!match[7],
	        precision = match[8] && +match[8].slice(1),
	        type = match[9] || "";
	
	    // The "n" type is an alias for ",g".
	    if (type === "n") comma = true, type = "g";
	
	    // Map invalid types to the default format.
	    else if (!formatTypes[type]) type = "";
	
	    // If zero fill is specified, padding goes after sign and before digits.
	    if (zero || (fill === "0" && align === "=")) zero = true, fill = "0", align = "=";
	
	    this.fill = fill;
	    this.align = align;
	    this.sign = sign;
	    this.symbol = symbol;
	    this.zero = zero;
	    this.width = width;
	    this.comma = comma;
	    this.precision = precision;
	    this.type = type;
	  }
	
	  FormatSpecifier.prototype.toString = function() {
	    return this.fill
	        + this.align
	        + this.sign
	        + this.symbol
	        + (this.zero ? "0" : "")
	        + (this.width == null ? "" : Math.max(1, this.width | 0))
	        + (this.comma ? "," : "")
	        + (this.precision == null ? "" : "." + Math.max(0, this.precision | 0))
	        + this.type;
	  };
	
	  var prefixes = ["y","z","a","f","p","n","\xB5","m","","k","M","G","T","P","E","Z","Y"];
	
	  function identity$3(x) {
	    return x;
	  }
	
	  function formatLocale(locale) {
	    var group = locale.grouping && locale.thousands ? formatGroup(locale.grouping, locale.thousands) : identity$3,
	        currency = locale.currency,
	        decimal = locale.decimal;
	
	    function newFormat(specifier) {
	      specifier = formatSpecifier(specifier);
	
	      var fill = specifier.fill,
	          align = specifier.align,
	          sign = specifier.sign,
	          symbol = specifier.symbol,
	          zero = specifier.zero,
	          width = specifier.width,
	          comma = specifier.comma,
	          precision = specifier.precision,
	          type = specifier.type;
	
	      // Compute the prefix and suffix.
	      // For SI-prefix, the suffix is lazily computed.
	      var prefix = symbol === "$" ? currency[0] : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "",
	          suffix = symbol === "$" ? currency[1] : /[%p]/.test(type) ? "%" : "";
	
	      // What format function should we use?
	      // Is this an integer type?
	      // Can this type generate exponential notation?
	      var formatType = formatTypes[type],
	          maybeSuffix = !type || /[defgprs%]/.test(type);
	
	      // Set the default precision if not specified,
	      // or clamp the specified precision to the supported range.
	      // For significant precision, it must be in [1, 21].
	      // For fixed precision, it must be in [0, 20].
	      precision = precision == null ? (type ? 6 : 12)
	          : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision))
	          : Math.max(0, Math.min(20, precision));
	
	      function format(value) {
	        var valuePrefix = prefix,
	            valueSuffix = suffix,
	            i, n, c;
	
	        if (type === "c") {
	          valueSuffix = formatType(value) + valueSuffix;
	          value = "";
	        } else {
	          value = +value;
	
	          // Convert negative to positive, and compute the prefix.
	          // Note that -0 is not less than 0, but 1 / -0 is!
	          var valueNegative = (value < 0 || 1 / value < 0) && (value *= -1, true);
	
	          // Perform the initial formatting.
	          value = formatType(value, precision);
	
	          // If the original value was negative, it may be rounded to zero during
	          // formatting; treat this as (positive) zero.
	          if (valueNegative) {
	            i = -1, n = value.length;
	            valueNegative = false;
	            while (++i < n) {
	              if (c = value.charCodeAt(i), (48 < c && c < 58)
	                  || (type === "x" && 96 < c && c < 103)
	                  || (type === "X" && 64 < c && c < 71)) {
	                valueNegative = true;
	                break;
	              }
	            }
	          }
	
	          // Compute the prefix and suffix.
	          valuePrefix = (valueNegative ? (sign === "(" ? sign : "-") : sign === "-" || sign === "(" ? "" : sign) + valuePrefix;
	          valueSuffix = valueSuffix + (type === "s" ? prefixes[8 + prefixExponent / 3] : "") + (valueNegative && sign === "(" ? ")" : "");
	
	          // Break the formatted value into the integer “value” part that can be
	          // grouped, and fractional or exponential “suffix” part that is not.
	          if (maybeSuffix) {
	            i = -1, n = value.length;
	            while (++i < n) {
	              if (c = value.charCodeAt(i), 48 > c || c > 57) {
	                valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
	                value = value.slice(0, i);
	                break;
	              }
	            }
	          }
	        }
	
	        // If the fill character is not "0", grouping is applied before padding.
	        if (comma && !zero) value = group(value, Infinity);
	
	        // Compute the padding.
	        var length = valuePrefix.length + value.length + valueSuffix.length,
	            padding = length < width ? new Array(width - length + 1).join(fill) : "";
	
	        // If the fill character is "0", grouping is applied after padding.
	        if (comma && zero) value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";
	
	        // Reconstruct the final output based on the desired alignment.
	        switch (align) {
	          case "<": return valuePrefix + value + valueSuffix + padding;
	          case "=": return valuePrefix + padding + value + valueSuffix;
	          case "^": return padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length);
	        }
	        return padding + valuePrefix + value + valueSuffix;
	      }
	
	      format.toString = function() {
	        return specifier + "";
	      };
	
	      return format;
	    }
	
	    function formatPrefix(specifier, value) {
	      var f = newFormat((specifier = formatSpecifier(specifier), specifier.type = "f", specifier)),
	          e = Math.max(-8, Math.min(8, Math.floor(exponent$1(value) / 3))) * 3,
	          k = Math.pow(10, -e),
	          prefix = prefixes[8 + e / 3];
	      return function(value) {
	        return f(k * value) + prefix;
	      };
	    }
	
	    return {
	      format: newFormat,
	      formatPrefix: formatPrefix
	    };
	  }
	
	  var locale;
	  defaultLocale({
	    decimal: ".",
	    thousands: ",",
	    grouping: [3],
	    currency: ["$", ""]
	  });
	
	  function defaultLocale(definition) {
	    locale = formatLocale(definition);
	    exports.format = locale.format;
	    exports.formatPrefix = locale.formatPrefix;
	    return locale;
	  }
	
	  function precisionFixed(step) {
	    return Math.max(0, -exponent$1(Math.abs(step)));
	  }
	
	  function precisionPrefix(step, value) {
	    return Math.max(0, Math.max(-8, Math.min(8, Math.floor(exponent$1(value) / 3))) * 3 - exponent$1(Math.abs(step)));
	  }
	
	  function precisionRound(step, max) {
	    step = Math.abs(step), max = Math.abs(max) - step;
	    return Math.max(0, exponent$1(max) - exponent$1(step)) + 1;
	  }
	
	  function localDate(d) {
	    if (0 <= d.y && d.y < 100) {
	      var date = new Date(-1, d.m, d.d, d.H, d.M, d.S, d.L);
	      date.setFullYear(d.y);
	      return date;
	    }
	    return new Date(d.y, d.m, d.d, d.H, d.M, d.S, d.L);
	  }
	
	  function utcDate(d) {
	    if (0 <= d.y && d.y < 100) {
	      var date = new Date(Date.UTC(-1, d.m, d.d, d.H, d.M, d.S, d.L));
	      date.setUTCFullYear(d.y);
	      return date;
	    }
	    return new Date(Date.UTC(d.y, d.m, d.d, d.H, d.M, d.S, d.L));
	  }
	
	  function newYear(y) {
	    return {y: y, m: 0, d: 1, H: 0, M: 0, S: 0, L: 0};
	  }
	
	  function formatLocale$1(locale) {
	    var locale_dateTime = locale.dateTime,
	        locale_date = locale.date,
	        locale_time = locale.time,
	        locale_periods = locale.periods,
	        locale_weekdays = locale.days,
	        locale_shortWeekdays = locale.shortDays,
	        locale_months = locale.months,
	        locale_shortMonths = locale.shortMonths;
	
	    var periodRe = formatRe(locale_periods),
	        periodLookup = formatLookup(locale_periods),
	        weekdayRe = formatRe(locale_weekdays),
	        weekdayLookup = formatLookup(locale_weekdays),
	        shortWeekdayRe = formatRe(locale_shortWeekdays),
	        shortWeekdayLookup = formatLookup(locale_shortWeekdays),
	        monthRe = formatRe(locale_months),
	        monthLookup = formatLookup(locale_months),
	        shortMonthRe = formatRe(locale_shortMonths),
	        shortMonthLookup = formatLookup(locale_shortMonths);
	
	    var formats = {
	      "a": formatShortWeekday,
	      "A": formatWeekday,
	      "b": formatShortMonth,
	      "B": formatMonth,
	      "c": null,
	      "d": formatDayOfMonth,
	      "e": formatDayOfMonth,
	      "H": formatHour24,
	      "I": formatHour12,
	      "j": formatDayOfYear,
	      "L": formatMilliseconds,
	      "m": formatMonthNumber,
	      "M": formatMinutes,
	      "p": formatPeriod,
	      "S": formatSeconds,
	      "U": formatWeekNumberSunday,
	      "w": formatWeekdayNumber,
	      "W": formatWeekNumberMonday,
	      "x": null,
	      "X": null,
	      "y": formatYear,
	      "Y": formatFullYear,
	      "Z": formatZone,
	      "%": formatLiteralPercent
	    };
	
	    var utcFormats = {
	      "a": formatUTCShortWeekday,
	      "A": formatUTCWeekday,
	      "b": formatUTCShortMonth,
	      "B": formatUTCMonth,
	      "c": null,
	      "d": formatUTCDayOfMonth,
	      "e": formatUTCDayOfMonth,
	      "H": formatUTCHour24,
	      "I": formatUTCHour12,
	      "j": formatUTCDayOfYear,
	      "L": formatUTCMilliseconds,
	      "m": formatUTCMonthNumber,
	      "M": formatUTCMinutes,
	      "p": formatUTCPeriod,
	      "S": formatUTCSeconds,
	      "U": formatUTCWeekNumberSunday,
	      "w": formatUTCWeekdayNumber,
	      "W": formatUTCWeekNumberMonday,
	      "x": null,
	      "X": null,
	      "y": formatUTCYear,
	      "Y": formatUTCFullYear,
	      "Z": formatUTCZone,
	      "%": formatLiteralPercent
	    };
	
	    var parses = {
	      "a": parseShortWeekday,
	      "A": parseWeekday,
	      "b": parseShortMonth,
	      "B": parseMonth,
	      "c": parseLocaleDateTime,
	      "d": parseDayOfMonth,
	      "e": parseDayOfMonth,
	      "H": parseHour24,
	      "I": parseHour24,
	      "j": parseDayOfYear,
	      "L": parseMilliseconds,
	      "m": parseMonthNumber,
	      "M": parseMinutes,
	      "p": parsePeriod,
	      "S": parseSeconds,
	      "U": parseWeekNumberSunday,
	      "w": parseWeekdayNumber,
	      "W": parseWeekNumberMonday,
	      "x": parseLocaleDate,
	      "X": parseLocaleTime,
	      "y": parseYear,
	      "Y": parseFullYear,
	      "Z": parseZone,
	      "%": parseLiteralPercent
	    };
	
	    // These recursive directive definitions must be deferred.
	    formats.x = newFormat(locale_date, formats);
	    formats.X = newFormat(locale_time, formats);
	    formats.c = newFormat(locale_dateTime, formats);
	    utcFormats.x = newFormat(locale_date, utcFormats);
	    utcFormats.X = newFormat(locale_time, utcFormats);
	    utcFormats.c = newFormat(locale_dateTime, utcFormats);
	
	    function newFormat(specifier, formats) {
	      return function(date) {
	        var string = [],
	            i = -1,
	            j = 0,
	            n = specifier.length,
	            c,
	            pad,
	            format;
	
	        if (!(date instanceof Date)) date = new Date(+date);
	
	        while (++i < n) {
	          if (specifier.charCodeAt(i) === 37) {
	            string.push(specifier.slice(j, i));
	            if ((pad = pads[c = specifier.charAt(++i)]) != null) c = specifier.charAt(++i);
	            else pad = c === "e" ? " " : "0";
	            if (format = formats[c]) c = format(date, pad);
	            string.push(c);
	            j = i + 1;
	          }
	        }
	
	        string.push(specifier.slice(j, i));
	        return string.join("");
	      };
	    }
	
	    function newParse(specifier, newDate) {
	      return function(string) {
	        var d = newYear(1900),
	            i = parseSpecifier(d, specifier, string += "", 0);
	        if (i != string.length) return null;
	
	        // The am-pm flag is 0 for AM, and 1 for PM.
	        if ("p" in d) d.H = d.H % 12 + d.p * 12;
	
	        // Convert day-of-week and week-of-year to day-of-year.
	        if ("W" in d || "U" in d) {
	          if (!("w" in d)) d.w = "W" in d ? 1 : 0;
	          var day = "Z" in d ? utcDate(newYear(d.y)).getUTCDay() : newDate(newYear(d.y)).getDay();
	          d.m = 0;
	          d.d = "W" in d ? (d.w + 6) % 7 + d.W * 7 - (day + 5) % 7 : d.w + d.U * 7 - (day + 6) % 7;
	        }
	
	        // If a time zone is specified, all fields are interpreted as UTC and then
	        // offset according to the specified time zone.
	        if ("Z" in d) {
	          d.H += d.Z / 100 | 0;
	          d.M += d.Z % 100;
	          return utcDate(d);
	        }
	
	        // Otherwise, all fields are in local time.
	        return newDate(d);
	      };
	    }
	
	    function parseSpecifier(d, specifier, string, j) {
	      var i = 0,
	          n = specifier.length,
	          m = string.length,
	          c,
	          parse;
	
	      while (i < n) {
	        if (j >= m) return -1;
	        c = specifier.charCodeAt(i++);
	        if (c === 37) {
	          c = specifier.charAt(i++);
	          parse = parses[c in pads ? specifier.charAt(i++) : c];
	          if (!parse || ((j = parse(d, string, j)) < 0)) return -1;
	        } else if (c != string.charCodeAt(j++)) {
	          return -1;
	        }
	      }
	
	      return j;
	    }
	
	    function parsePeriod(d, string, i) {
	      var n = periodRe.exec(string.slice(i));
	      return n ? (d.p = periodLookup[n[0].toLowerCase()], i + n[0].length) : -1;
	    }
	
	    function parseShortWeekday(d, string, i) {
	      var n = shortWeekdayRe.exec(string.slice(i));
	      return n ? (d.w = shortWeekdayLookup[n[0].toLowerCase()], i + n[0].length) : -1;
	    }
	
	    function parseWeekday(d, string, i) {
	      var n = weekdayRe.exec(string.slice(i));
	      return n ? (d.w = weekdayLookup[n[0].toLowerCase()], i + n[0].length) : -1;
	    }
	
	    function parseShortMonth(d, string, i) {
	      var n = shortMonthRe.exec(string.slice(i));
	      return n ? (d.m = shortMonthLookup[n[0].toLowerCase()], i + n[0].length) : -1;
	    }
	
	    function parseMonth(d, string, i) {
	      var n = monthRe.exec(string.slice(i));
	      return n ? (d.m = monthLookup[n[0].toLowerCase()], i + n[0].length) : -1;
	    }
	
	    function parseLocaleDateTime(d, string, i) {
	      return parseSpecifier(d, locale_dateTime, string, i);
	    }
	
	    function parseLocaleDate(d, string, i) {
	      return parseSpecifier(d, locale_date, string, i);
	    }
	
	    function parseLocaleTime(d, string, i) {
	      return parseSpecifier(d, locale_time, string, i);
	    }
	
	    function formatShortWeekday(d) {
	      return locale_shortWeekdays[d.getDay()];
	    }
	
	    function formatWeekday(d) {
	      return locale_weekdays[d.getDay()];
	    }
	
	    function formatShortMonth(d) {
	      return locale_shortMonths[d.getMonth()];
	    }
	
	    function formatMonth(d) {
	      return locale_months[d.getMonth()];
	    }
	
	    function formatPeriod(d) {
	      return locale_periods[+(d.getHours() >= 12)];
	    }
	
	    function formatUTCShortWeekday(d) {
	      return locale_shortWeekdays[d.getUTCDay()];
	    }
	
	    function formatUTCWeekday(d) {
	      return locale_weekdays[d.getUTCDay()];
	    }
	
	    function formatUTCShortMonth(d) {
	      return locale_shortMonths[d.getUTCMonth()];
	    }
	
	    function formatUTCMonth(d) {
	      return locale_months[d.getUTCMonth()];
	    }
	
	    function formatUTCPeriod(d) {
	      return locale_periods[+(d.getUTCHours() >= 12)];
	    }
	
	    return {
	      format: function(specifier) {
	        var f = newFormat(specifier += "", formats);
	        f.toString = function() { return specifier; };
	        return f;
	      },
	      parse: function(specifier) {
	        var p = newParse(specifier += "", localDate);
	        p.toString = function() { return specifier; };
	        return p;
	      },
	      utcFormat: function(specifier) {
	        var f = newFormat(specifier += "", utcFormats);
	        f.toString = function() { return specifier; };
	        return f;
	      },
	      utcParse: function(specifier) {
	        var p = newParse(specifier, utcDate);
	        p.toString = function() { return specifier; };
	        return p;
	      }
	    };
	  }
	
	  var pads = {"-": "", "_": " ", "0": "0"};
	  var numberRe = /^\s*\d+/;
	  var percentRe = /^%/;
	  var requoteRe = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;
	  function pad(value, fill, width) {
	    var sign = value < 0 ? "-" : "",
	        string = (sign ? -value : value) + "",
	        length = string.length;
	    return sign + (length < width ? new Array(width - length + 1).join(fill) + string : string);
	  }
	
	  function requote(s) {
	    return s.replace(requoteRe, "\\$&");
	  }
	
	  function formatRe(names) {
	    return new RegExp("^(?:" + names.map(requote).join("|") + ")", "i");
	  }
	
	  function formatLookup(names) {
	    var map = {}, i = -1, n = names.length;
	    while (++i < n) map[names[i].toLowerCase()] = i;
	    return map;
	  }
	
	  function parseWeekdayNumber(d, string, i) {
	    var n = numberRe.exec(string.slice(i, i + 1));
	    return n ? (d.w = +n[0], i + n[0].length) : -1;
	  }
	
	  function parseWeekNumberSunday(d, string, i) {
	    var n = numberRe.exec(string.slice(i));
	    return n ? (d.U = +n[0], i + n[0].length) : -1;
	  }
	
	  function parseWeekNumberMonday(d, string, i) {
	    var n = numberRe.exec(string.slice(i));
	    return n ? (d.W = +n[0], i + n[0].length) : -1;
	  }
	
	  function parseFullYear(d, string, i) {
	    var n = numberRe.exec(string.slice(i, i + 4));
	    return n ? (d.y = +n[0], i + n[0].length) : -1;
	  }
	
	  function parseYear(d, string, i) {
	    var n = numberRe.exec(string.slice(i, i + 2));
	    return n ? (d.y = +n[0] + (+n[0] > 68 ? 1900 : 2000), i + n[0].length) : -1;
	  }
	
	  function parseZone(d, string, i) {
	    var n = /^(Z)|([+-]\d\d)(?:\:?(\d\d))?/.exec(string.slice(i, i + 6));
	    return n ? (d.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), i + n[0].length) : -1;
	  }
	
	  function parseMonthNumber(d, string, i) {
	    var n = numberRe.exec(string.slice(i, i + 2));
	    return n ? (d.m = n[0] - 1, i + n[0].length) : -1;
	  }
	
	  function parseDayOfMonth(d, string, i) {
	    var n = numberRe.exec(string.slice(i, i + 2));
	    return n ? (d.d = +n[0], i + n[0].length) : -1;
	  }
	
	  function parseDayOfYear(d, string, i) {
	    var n = numberRe.exec(string.slice(i, i + 3));
	    return n ? (d.m = 0, d.d = +n[0], i + n[0].length) : -1;
	  }
	
	  function parseHour24(d, string, i) {
	    var n = numberRe.exec(string.slice(i, i + 2));
	    return n ? (d.H = +n[0], i + n[0].length) : -1;
	  }
	
	  function parseMinutes(d, string, i) {
	    var n = numberRe.exec(string.slice(i, i + 2));
	    return n ? (d.M = +n[0], i + n[0].length) : -1;
	  }
	
	  function parseSeconds(d, string, i) {
	    var n = numberRe.exec(string.slice(i, i + 2));
	    return n ? (d.S = +n[0], i + n[0].length) : -1;
	  }
	
	  function parseMilliseconds(d, string, i) {
	    var n = numberRe.exec(string.slice(i, i + 3));
	    return n ? (d.L = +n[0], i + n[0].length) : -1;
	  }
	
	  function parseLiteralPercent(d, string, i) {
	    var n = percentRe.exec(string.slice(i, i + 1));
	    return n ? i + n[0].length : -1;
	  }
	
	  function formatDayOfMonth(d, p) {
	    return pad(d.getDate(), p, 2);
	  }
	
	  function formatHour24(d, p) {
	    return pad(d.getHours(), p, 2);
	  }
	
	  function formatHour12(d, p) {
	    return pad(d.getHours() % 12 || 12, p, 2);
	  }
	
	  function formatDayOfYear(d, p) {
	    return pad(1 + day.count(year(d), d), p, 3);
	  }
	
	  function formatMilliseconds(d, p) {
	    return pad(d.getMilliseconds(), p, 3);
	  }
	
	  function formatMonthNumber(d, p) {
	    return pad(d.getMonth() + 1, p, 2);
	  }
	
	  function formatMinutes(d, p) {
	    return pad(d.getMinutes(), p, 2);
	  }
	
	  function formatSeconds(d, p) {
	    return pad(d.getSeconds(), p, 2);
	  }
	
	  function formatWeekNumberSunday(d, p) {
	    return pad(timeWeek.count(year(d), d), p, 2);
	  }
	
	  function formatWeekdayNumber(d) {
	    return d.getDay();
	  }
	
	  function formatWeekNumberMonday(d, p) {
	    return pad(timeMonday.count(year(d), d), p, 2);
	  }
	
	  function formatYear(d, p) {
	    return pad(d.getFullYear() % 100, p, 2);
	  }
	
	  function formatFullYear(d, p) {
	    return pad(d.getFullYear() % 10000, p, 4);
	  }
	
	  function formatZone(d) {
	    var z = d.getTimezoneOffset();
	    return (z > 0 ? "-" : (z *= -1, "+"))
	        + pad(z / 60 | 0, "0", 2)
	        + pad(z % 60, "0", 2);
	  }
	
	  function formatUTCDayOfMonth(d, p) {
	    return pad(d.getUTCDate(), p, 2);
	  }
	
	  function formatUTCHour24(d, p) {
	    return pad(d.getUTCHours(), p, 2);
	  }
	
	  function formatUTCHour12(d, p) {
	    return pad(d.getUTCHours() % 12 || 12, p, 2);
	  }
	
	  function formatUTCDayOfYear(d, p) {
	    return pad(1 + utcDay.count(utcYear(d), d), p, 3);
	  }
	
	  function formatUTCMilliseconds(d, p) {
	    return pad(d.getUTCMilliseconds(), p, 3);
	  }
	
	  function formatUTCMonthNumber(d, p) {
	    return pad(d.getUTCMonth() + 1, p, 2);
	  }
	
	  function formatUTCMinutes(d, p) {
	    return pad(d.getUTCMinutes(), p, 2);
	  }
	
	  function formatUTCSeconds(d, p) {
	    return pad(d.getUTCSeconds(), p, 2);
	  }
	
	  function formatUTCWeekNumberSunday(d, p) {
	    return pad(utcWeek.count(utcYear(d), d), p, 2);
	  }
	
	  function formatUTCWeekdayNumber(d) {
	    return d.getUTCDay();
	  }
	
	  function formatUTCWeekNumberMonday(d, p) {
	    return pad(utcMonday.count(utcYear(d), d), p, 2);
	  }
	
	  function formatUTCYear(d, p) {
	    return pad(d.getUTCFullYear() % 100, p, 2);
	  }
	
	  function formatUTCFullYear(d, p) {
	    return pad(d.getUTCFullYear() % 10000, p, 4);
	  }
	
	  function formatUTCZone() {
	    return "+0000";
	  }
	
	  function formatLiteralPercent() {
	    return "%";
	  }
	
	  var locale$1;
	  defaultLocale$1({
	    dateTime: "%x, %X",
	    date: "%-m/%-d/%Y",
	    time: "%-I:%M:%S %p",
	    periods: ["AM", "PM"],
	    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
	    shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
	    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
	    shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
	  });
	
	  function defaultLocale$1(definition) {
	    locale$1 = formatLocale$1(definition);
	    exports.timeFormat = locale$1.format;
	    exports.timeParse = locale$1.parse;
	    exports.utcFormat = locale$1.utcFormat;
	    exports.utcParse = locale$1.utcParse;
	    return locale$1;
	  }
	
	  var isoSpecifier = "%Y-%m-%dT%H:%M:%S.%LZ";
	
	  function formatIsoNative(date) {
	    return date.toISOString();
	  }
	
	  var formatIso = Date.prototype.toISOString
	      ? formatIsoNative
	      : exports.utcFormat(isoSpecifier);
	
	  function parseIsoNative(string) {
	    var date = new Date(string);
	    return isNaN(date) ? null : date;
	  }
	
	  var parseIso = +new Date("2000-01-01T00:00:00.000Z")
	      ? parseIsoNative
	      : exports.utcParse(isoSpecifier);
	
	  var array$2 = Array.prototype;
	
	  var map$2 = array$2.map;
	  var slice$3 = array$2.slice;
	
	  var implicit = {name: "implicit"};
	
	  function ordinal(range) {
	    var index = map$1(),
	        domain = [],
	        unknown = implicit;
	
	    range = range == null ? [] : slice$3.call(range);
	
	    function scale(d) {
	      var key = d + "", i = index.get(key);
	      if (!i) {
	        if (unknown !== implicit) return unknown;
	        index.set(key, i = domain.push(d));
	      }
	      return range[(i - 1) % range.length];
	    }
	
	    scale.domain = function(_) {
	      if (!arguments.length) return domain.slice();
	      domain = [], index = map$1();
	      var i = -1, n = _.length, d, key;
	      while (++i < n) if (!index.has(key = (d = _[i]) + "")) index.set(key, domain.push(d));
	      return scale;
	    };
	
	    scale.range = function(_) {
	      return arguments.length ? (range = slice$3.call(_), scale) : range.slice();
	    };
	
	    scale.unknown = function(_) {
	      return arguments.length ? (unknown = _, scale) : unknown;
	    };
	
	    scale.copy = function() {
	      return ordinal()
	          .domain(domain)
	          .range(range)
	          .unknown(unknown);
	    };
	
	    return scale;
	  }
	
	  function band() {
	    var scale = ordinal().unknown(undefined),
	        domain = scale.domain,
	        ordinalRange = scale.range,
	        range$$ = [0, 1],
	        step,
	        bandwidth,
	        round = false,
	        paddingInner = 0,
	        paddingOuter = 0,
	        align = 0.5;
	
	    delete scale.unknown;
	
	    function rescale() {
	      var n = domain().length,
	          reverse = range$$[1] < range$$[0],
	          start = range$$[reverse - 0],
	          stop = range$$[1 - reverse];
	      step = (stop - start) / Math.max(1, n - paddingInner + paddingOuter * 2);
	      if (round) step = Math.floor(step);
	      start += (stop - start - step * (n - paddingInner)) * align;
	      bandwidth = step * (1 - paddingInner);
	      if (round) start = Math.round(start), bandwidth = Math.round(bandwidth);
	      var values = range(n).map(function(i) { return start + step * i; });
	      return ordinalRange(reverse ? values.reverse() : values);
	    }
	
	    scale.domain = function(_) {
	      return arguments.length ? (domain(_), rescale()) : domain();
	    };
	
	    scale.range = function(_) {
	      return arguments.length ? (range$$ = [+_[0], +_[1]], rescale()) : range$$.slice();
	    };
	
	    scale.rangeRound = function(_) {
	      return range$$ = [+_[0], +_[1]], round = true, rescale();
	    };
	
	    scale.bandwidth = function() {
	      return bandwidth;
	    };
	
	    scale.step = function() {
	      return step;
	    };
	
	    scale.round = function(_) {
	      return arguments.length ? (round = !!_, rescale()) : round;
	    };
	
	    scale.padding = function(_) {
	      return arguments.length ? (paddingInner = paddingOuter = Math.max(0, Math.min(1, _)), rescale()) : paddingInner;
	    };
	
	    scale.paddingInner = function(_) {
	      return arguments.length ? (paddingInner = Math.max(0, Math.min(1, _)), rescale()) : paddingInner;
	    };
	
	    scale.paddingOuter = function(_) {
	      return arguments.length ? (paddingOuter = Math.max(0, Math.min(1, _)), rescale()) : paddingOuter;
	    };
	
	    scale.align = function(_) {
	      return arguments.length ? (align = Math.max(0, Math.min(1, _)), rescale()) : align;
	    };
	
	    scale.copy = function() {
	      return band()
	          .domain(domain())
	          .range(range$$)
	          .round(round)
	          .paddingInner(paddingInner)
	          .paddingOuter(paddingOuter)
	          .align(align);
	    };
	
	    return rescale();
	  }
	
	  function pointish(scale) {
	    var copy = scale.copy;
	
	    scale.padding = scale.paddingOuter;
	    delete scale.paddingInner;
	    delete scale.paddingOuter;
	
	    scale.copy = function() {
	      return pointish(copy());
	    };
	
	    return scale;
	  }
	
	  function point$4() {
	    return pointish(band().paddingInner(1));
	  }
	
	  function constant$3(x) {
	    return function() {
	      return x;
	    };
	  }
	
	  function number$1(x) {
	    return +x;
	  }
	
	  var unit = [0, 1];
	
	  function deinterpolate(a, b) {
	    return (b -= (a = +a))
	        ? function(x) { return (x - a) / b; }
	        : constant$3(b);
	  }
	
	  function deinterpolateClamp(deinterpolate) {
	    return function(a, b) {
	      var d = deinterpolate(a = +a, b = +b);
	      return function(x) { return x <= a ? 0 : x >= b ? 1 : d(x); };
	    };
	  }
	
	  function reinterpolateClamp(reinterpolate) {
	    return function(a, b) {
	      var r = reinterpolate(a = +a, b = +b);
	      return function(t) { return t <= 0 ? a : t >= 1 ? b : r(t); };
	    };
	  }
	
	  function bimap(domain, range, deinterpolate, reinterpolate) {
	    var d0 = domain[0], d1 = domain[1], r0 = range[0], r1 = range[1];
	    if (d1 < d0) d0 = deinterpolate(d1, d0), r0 = reinterpolate(r1, r0);
	    else d0 = deinterpolate(d0, d1), r0 = reinterpolate(r0, r1);
	    return function(x) { return r0(d0(x)); };
	  }
	
	  function polymap(domain, range, deinterpolate, reinterpolate) {
	    var j = Math.min(domain.length, range.length) - 1,
	        d = new Array(j),
	        r = new Array(j),
	        i = -1;
	
	    // Reverse descending domains.
	    if (domain[j] < domain[0]) {
	      domain = domain.slice().reverse();
	      range = range.slice().reverse();
	    }
	
	    while (++i < j) {
	      d[i] = deinterpolate(domain[i], domain[i + 1]);
	      r[i] = reinterpolate(range[i], range[i + 1]);
	    }
	
	    return function(x) {
	      var i = bisectRight(domain, x, 1, j) - 1;
	      return r[i](d[i](x));
	    };
	  }
	
	  function copy(source, target) {
	    return target
	        .domain(source.domain())
	        .range(source.range())
	        .interpolate(source.interpolate())
	        .clamp(source.clamp());
	  }
	
	  // deinterpolate(a, b)(x) takes a domain value x in [a,b] and returns the corresponding parameter t in [0,1].
	  // reinterpolate(a, b)(t) takes a parameter t in [0,1] and returns the corresponding domain value x in [a,b].
	  function continuous(deinterpolate$$, reinterpolate) {
	    var domain = unit,
	        range = unit,
	        interpolate$$ = interpolate,
	        clamp = false,
	        piecewise,
	        output,
	        input;
	
	    function rescale() {
	      piecewise = Math.min(domain.length, range.length) > 2 ? polymap : bimap;
	      output = input = null;
	      return scale;
	    }
	
	    function scale(x) {
	      return (output || (output = piecewise(domain, range, clamp ? deinterpolateClamp(deinterpolate$$) : deinterpolate$$, interpolate$$)))(+x);
	    }
	
	    scale.invert = function(y) {
	      return (input || (input = piecewise(range, domain, deinterpolate, clamp ? reinterpolateClamp(reinterpolate) : reinterpolate)))(+y);
	    };
	
	    scale.domain = function(_) {
	      return arguments.length ? (domain = map$2.call(_, number$1), rescale()) : domain.slice();
	    };
	
	    scale.range = function(_) {
	      return arguments.length ? (range = slice$3.call(_), rescale()) : range.slice();
	    };
	
	    scale.rangeRound = function(_) {
	      return range = slice$3.call(_), interpolate$$ = interpolateRound, rescale();
	    };
	
	    scale.clamp = function(_) {
	      return arguments.length ? (clamp = !!_, rescale()) : clamp;
	    };
	
	    scale.interpolate = function(_) {
	      return arguments.length ? (interpolate$$ = _, rescale()) : interpolate$$;
	    };
	
	    return rescale();
	  }
	
	  function tickFormat(domain, count, specifier) {
	    var start = domain[0],
	        stop = domain[domain.length - 1],
	        step = tickStep(start, stop, count == null ? 10 : count),
	        precision;
	    specifier = formatSpecifier(specifier == null ? ",f" : specifier);
	    switch (specifier.type) {
	      case "s": {
	        var value = Math.max(Math.abs(start), Math.abs(stop));
	        if (specifier.precision == null && !isNaN(precision = precisionPrefix(step, value))) specifier.precision = precision;
	        return exports.formatPrefix(specifier, value);
	      }
	      case "":
	      case "e":
	      case "g":
	      case "p":
	      case "r": {
	        if (specifier.precision == null && !isNaN(precision = precisionRound(step, Math.max(Math.abs(start), Math.abs(stop))))) specifier.precision = precision - (specifier.type === "e");
	        break;
	      }
	      case "f":
	      case "%": {
	        if (specifier.precision == null && !isNaN(precision = precisionFixed(step))) specifier.precision = precision - (specifier.type === "%") * 2;
	        break;
	      }
	    }
	    return exports.format(specifier);
	  }
	
	  function linearish(scale) {
	    var domain = scale.domain;
	
	    scale.ticks = function(count) {
	      var d = domain();
	      return ticks(d[0], d[d.length - 1], count == null ? 10 : count);
	    };
	
	    scale.tickFormat = function(count, specifier) {
	      return tickFormat(domain(), count, specifier);
	    };
	
	    scale.nice = function(count) {
	      var d = domain(),
	          i = d.length - 1,
	          n = count == null ? 10 : count,
	          start = d[0],
	          stop = d[i],
	          step = tickStep(start, stop, n);
	
	      if (step) {
	        step = tickStep(Math.floor(start / step) * step, Math.ceil(stop / step) * step, n);
	        d[0] = Math.floor(start / step) * step;
	        d[i] = Math.ceil(stop / step) * step;
	        domain(d);
	      }
	
	      return scale;
	    };
	
	    return scale;
	  }
	
	  function linear$2() {
	    var scale = continuous(deinterpolate, interpolateNumber);
	
	    scale.copy = function() {
	      return copy(scale, linear$2());
	    };
	
	    return linearish(scale);
	  }
	
	  function identity$4() {
	    var domain = [0, 1];
	
	    function scale(x) {
	      return +x;
	    }
	
	    scale.invert = scale;
	
	    scale.domain = scale.range = function(_) {
	      return arguments.length ? (domain = map$2.call(_, number$1), scale) : domain.slice();
	    };
	
	    scale.copy = function() {
	      return identity$4().domain(domain);
	    };
	
	    return linearish(scale);
	  }
	
	  function nice(domain, interval) {
	    domain = domain.slice();
	
	    var i0 = 0,
	        i1 = domain.length - 1,
	        x0 = domain[i0],
	        x1 = domain[i1],
	        t;
	
	    if (x1 < x0) {
	      t = i0, i0 = i1, i1 = t;
	      t = x0, x0 = x1, x1 = t;
	    }
	
	    domain[i0] = interval.floor(x0);
	    domain[i1] = interval.ceil(x1);
	    return domain;
	  }
	
	  function deinterpolate$1(a, b) {
	    return (b = Math.log(b / a))
	        ? function(x) { return Math.log(x / a) / b; }
	        : constant$3(b);
	  }
	
	  function reinterpolate(a, b) {
	    return a < 0
	        ? function(t) { return -Math.pow(-b, t) * Math.pow(-a, 1 - t); }
	        : function(t) { return Math.pow(b, t) * Math.pow(a, 1 - t); };
	  }
	
	  function pow10(x) {
	    return isFinite(x) ? +("1e" + x) : x < 0 ? 0 : x;
	  }
	
	  function powp(base) {
	    return base === 10 ? pow10
	        : base === Math.E ? Math.exp
	        : function(x) { return Math.pow(base, x); };
	  }
	
	  function logp(base) {
	    return base === Math.E ? Math.log
	        : base === 10 && Math.log10
	        || base === 2 && Math.log2
	        || (base = Math.log(base), function(x) { return Math.log(x) / base; });
	  }
	
	  function reflect(f) {
	    return function(x) {
	      return -f(-x);
	    };
	  }
	
	  function log() {
	    var scale = continuous(deinterpolate$1, reinterpolate).domain([1, 10]),
	        domain = scale.domain,
	        base = 10,
	        logs = logp(10),
	        pows = powp(10);
	
	    function rescale() {
	      logs = logp(base), pows = powp(base);
	      if (domain()[0] < 0) logs = reflect(logs), pows = reflect(pows);
	      return scale;
	    }
	
	    scale.base = function(_) {
	      return arguments.length ? (base = +_, rescale()) : base;
	    };
	
	    scale.domain = function(_) {
	      return arguments.length ? (domain(_), rescale()) : domain();
	    };
	
	    scale.ticks = function(count) {
	      var d = domain(),
	          u = d[0],
	          v = d[d.length - 1],
	          r;
	
	      if (r = v < u) i = u, u = v, v = i;
	
	      var i = logs(u),
	          j = logs(v),
	          p,
	          k,
	          t,
	          n = count == null ? 10 : +count,
	          z = [];
	
	      if (!(base % 1) && j - i < n) {
	        i = Math.round(i) - 1, j = Math.round(j) + 1;
	        if (u > 0) for (; i < j; ++i) {
	          for (k = 1, p = pows(i); k < base; ++k) {
	            t = p * k;
	            if (t < u) continue;
	            if (t > v) break;
	            z.push(t);
	          }
	        } else for (; i < j; ++i) {
	          for (k = base - 1, p = pows(i); k >= 1; --k) {
	            t = p * k;
	            if (t < u) continue;
	            if (t > v) break;
	            z.push(t);
	          }
	        }
	      } else {
	        z = ticks(i, j, Math.min(j - i, n)).map(pows);
	      }
	
	      return r ? z.reverse() : z;
	    };
	
	    scale.tickFormat = function(count, specifier) {
	      if (specifier == null) specifier = base === 10 ? ".0e" : ",";
	      if (typeof specifier !== "function") specifier = exports.format(specifier);
	      if (count === Infinity) return specifier;
	      if (count == null) count = 10;
	      var k = Math.max(1, base * count / scale.ticks().length); // TODO fast estimate?
	      return function(d) {
	        var i = d / pows(Math.round(logs(d)));
	        if (i * base < base - 0.5) i *= base;
	        return i <= k ? specifier(d) : "";
	      };
	    };
	
	    scale.nice = function() {
	      return domain(nice(domain(), {
	        floor: function(x) { return pows(Math.floor(logs(x))); },
	        ceil: function(x) { return pows(Math.ceil(logs(x))); }
	      }));
	    };
	
	    scale.copy = function() {
	      return copy(scale, log().base(base));
	    };
	
	    return scale;
	  }
	
	  function raise(x, exponent) {
	    return x < 0 ? -Math.pow(-x, exponent) : Math.pow(x, exponent);
	  }
	
	  function pow() {
	    var exponent = 1,
	        scale = continuous(deinterpolate, reinterpolate),
	        domain = scale.domain;
	
	    function deinterpolate(a, b) {
	      return (b = raise(b, exponent) - (a = raise(a, exponent)))
	          ? function(x) { return (raise(x, exponent) - a) / b; }
	          : constant$3(b);
	    }
	
	    function reinterpolate(a, b) {
	      b = raise(b, exponent) - (a = raise(a, exponent));
	      return function(t) { return raise(a + b * t, 1 / exponent); };
	    }
	
	    scale.exponent = function(_) {
	      return arguments.length ? (exponent = +_, domain(domain())) : exponent;
	    };
	
	    scale.copy = function() {
	      return copy(scale, pow().exponent(exponent));
	    };
	
	    return linearish(scale);
	  }
	
	  function sqrt() {
	    return pow().exponent(0.5);
	  }
	
	  function quantile() {
	    var domain = [],
	        range = [],
	        thresholds = [];
	
	    function rescale() {
	      var i = 0, n = Math.max(1, range.length);
	      thresholds = new Array(n - 1);
	      while (++i < n) thresholds[i - 1] = threshold(domain, i / n);
	      return scale;
	    }
	
	    function scale(x) {
	      if (!isNaN(x = +x)) return range[bisectRight(thresholds, x)];
	    }
	
	    scale.invertExtent = function(y) {
	      var i = range.indexOf(y);
	      return i < 0 ? [NaN, NaN] : [
	        i > 0 ? thresholds[i - 1] : domain[0],
	        i < thresholds.length ? thresholds[i] : domain[domain.length - 1]
	      ];
	    };
	
	    scale.domain = function(_) {
	      if (!arguments.length) return domain.slice();
	      domain = [];
	      for (var i = 0, n = _.length, d; i < n; ++i) if (d = _[i], d != null && !isNaN(d = +d)) domain.push(d);
	      domain.sort(ascending);
	      return rescale();
	    };
	
	    scale.range = function(_) {
	      return arguments.length ? (range = slice$3.call(_), rescale()) : range.slice();
	    };
	
	    scale.quantiles = function() {
	      return thresholds.slice();
	    };
	
	    scale.copy = function() {
	      return quantile()
	          .domain(domain)
	          .range(range);
	    };
	
	    return scale;
	  }
	
	  function quantize$1() {
	    var x0 = 0,
	        x1 = 1,
	        n = 1,
	        domain = [0.5],
	        range = [0, 1];
	
	    function scale(x) {
	      if (x <= x) return range[bisectRight(domain, x, 0, n)];
	    }
	
	    function rescale() {
	      var i = -1;
	      domain = new Array(n);
	      while (++i < n) domain[i] = ((i + 1) * x1 - (i - n) * x0) / (n + 1);
	      return scale;
	    }
	
	    scale.domain = function(_) {
	      return arguments.length ? (x0 = +_[0], x1 = +_[1], rescale()) : [x0, x1];
	    };
	
	    scale.range = function(_) {
	      return arguments.length ? (n = (range = slice$3.call(_)).length - 1, rescale()) : range.slice();
	    };
	
	    scale.invertExtent = function(y) {
	      var i = range.indexOf(y);
	      return i < 0 ? [NaN, NaN]
	          : i < 1 ? [x0, domain[0]]
	          : i >= n ? [domain[n - 1], x1]
	          : [domain[i - 1], domain[i]];
	    };
	
	    scale.copy = function() {
	      return quantize$1()
	          .domain([x0, x1])
	          .range(range);
	    };
	
	    return linearish(scale);
	  }
	
	  function threshold$1() {
	    var domain = [0.5],
	        range = [0, 1],
	        n = 1;
	
	    function scale(x) {
	      if (x <= x) return range[bisectRight(domain, x, 0, n)];
	    }
	
	    scale.domain = function(_) {
	      return arguments.length ? (domain = slice$3.call(_), n = Math.min(domain.length, range.length - 1), scale) : domain.slice();
	    };
	
	    scale.range = function(_) {
	      return arguments.length ? (range = slice$3.call(_), n = Math.min(domain.length, range.length - 1), scale) : range.slice();
	    };
	
	    scale.invertExtent = function(y) {
	      var i = range.indexOf(y);
	      return [domain[i - 1], domain[i]];
	    };
	
	    scale.copy = function() {
	      return threshold$1()
	          .domain(domain)
	          .range(range);
	    };
	
	    return scale;
	  }
	
	var   durationSecond$1 = 1000;
	var   durationMinute$1 = durationSecond$1 * 60;
	var   durationHour$1 = durationMinute$1 * 60;
	var   durationDay$1 = durationHour$1 * 24;
	var   durationWeek$1 = durationDay$1 * 7;
	  var durationMonth = durationDay$1 * 30;
	  var durationYear = durationDay$1 * 365;
	  function date$1(t) {
	    return new Date(t);
	  }
	
	  function number$2(t) {
	    return t instanceof Date ? +t : +new Date(+t);
	  }
	
	  function calendar(year, month, week, day, hour, minute, second, millisecond, format) {
	    var scale = continuous(deinterpolate, interpolateNumber),
	        invert = scale.invert,
	        domain = scale.domain;
	
	    var formatMillisecond = format(".%L"),
	        formatSecond = format(":%S"),
	        formatMinute = format("%I:%M"),
	        formatHour = format("%I %p"),
	        formatDay = format("%a %d"),
	        formatWeek = format("%b %d"),
	        formatMonth = format("%B"),
	        formatYear = format("%Y");
	
	    var tickIntervals = [
	      [second,  1,      durationSecond$1],
	      [second,  5,  5 * durationSecond$1],
	      [second, 15, 15 * durationSecond$1],
	      [second, 30, 30 * durationSecond$1],
	      [minute,  1,      durationMinute$1],
	      [minute,  5,  5 * durationMinute$1],
	      [minute, 15, 15 * durationMinute$1],
	      [minute, 30, 30 * durationMinute$1],
	      [  hour,  1,      durationHour$1  ],
	      [  hour,  3,  3 * durationHour$1  ],
	      [  hour,  6,  6 * durationHour$1  ],
	      [  hour, 12, 12 * durationHour$1  ],
	      [   day,  1,      durationDay$1   ],
	      [   day,  2,  2 * durationDay$1   ],
	      [  week,  1,      durationWeek$1  ],
	      [ month,  1,      durationMonth ],
	      [ month,  3,  3 * durationMonth ],
	      [  year,  1,      durationYear  ]
	    ];
	
	    function tickFormat(date) {
	      return (second(date) < date ? formatMillisecond
	          : minute(date) < date ? formatSecond
	          : hour(date) < date ? formatMinute
	          : day(date) < date ? formatHour
	          : month(date) < date ? (week(date) < date ? formatDay : formatWeek)
	          : year(date) < date ? formatMonth
	          : formatYear)(date);
	    }
	
	    function tickInterval(interval, start, stop, step) {
	      if (interval == null) interval = 10;
	
	      // If a desired tick count is specified, pick a reasonable tick interval
	      // based on the extent of the domain and a rough estimate of tick size.
	      // Otherwise, assume interval is already a time interval and use it.
	      if (typeof interval === "number") {
	        var target = Math.abs(stop - start) / interval,
	            i = bisector(function(i) { return i[2]; }).right(tickIntervals, target);
	        if (i === tickIntervals.length) {
	          step = tickStep(start / durationYear, stop / durationYear, interval);
	          interval = year;
	        } else if (i) {
	          i = tickIntervals[target / tickIntervals[i - 1][2] < tickIntervals[i][2] / target ? i - 1 : i];
	          step = i[1];
	          interval = i[0];
	        } else {
	          step = tickStep(start, stop, interval);
	          interval = millisecond;
	        }
	      }
	
	      return step == null ? interval : interval.every(step);
	    }
	
	    scale.invert = function(y) {
	      return new Date(invert(y));
	    };
	
	    scale.domain = function(_) {
	      return arguments.length ? domain(map$2.call(_, number$2)) : domain().map(date$1);
	    };
	
	    scale.ticks = function(interval, step) {
	      var d = domain(),
	          t0 = d[0],
	          t1 = d[d.length - 1],
	          r = t1 < t0,
	          t;
	      if (r) t = t0, t0 = t1, t1 = t;
	      t = tickInterval(interval, t0, t1, step);
	      t = t ? t.range(t0, t1 + 1) : []; // inclusive stop
	      return r ? t.reverse() : t;
	    };
	
	    scale.tickFormat = function(count, specifier) {
	      return specifier == null ? tickFormat : format(specifier);
	    };
	
	    scale.nice = function(interval, step) {
	      var d = domain();
	      return (interval = tickInterval(interval, d[0], d[d.length - 1], step))
	          ? domain(nice(d, interval))
	          : scale;
	    };
	
	    scale.copy = function() {
	      return copy(scale, calendar(year, month, week, day, hour, minute, second, millisecond, format));
	    };
	
	    return scale;
	  }
	
	  function time() {
	    return calendar(year, month, timeWeek, day, hour, minute, second, millisecond, exports.timeFormat).domain([new Date(2000, 0, 1), new Date(2000, 0, 2)]);
	  }
	
	  function utcTime() {
	    return calendar(utcYear, utcMonth, utcWeek, utcDay, utcHour, utcMinute, second, millisecond, exports.utcFormat).domain([Date.UTC(2000, 0, 1), Date.UTC(2000, 0, 2)]);
	  }
	
	  function colors(s) {
	    return s.match(/.{6}/g).map(function(x) {
	      return "#" + x;
	    });
	  }
	
	  var category10 = colors("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf");
	
	  var category20b = colors("393b795254a36b6ecf9c9ede6379398ca252b5cf6bcedb9c8c6d31bd9e39e7ba52e7cb94843c39ad494ad6616be7969c7b4173a55194ce6dbdde9ed6");
	
	  var category20c = colors("3182bd6baed69ecae1c6dbefe6550dfd8d3cfdae6bfdd0a231a35474c476a1d99bc7e9c0756bb19e9ac8bcbddcdadaeb636363969696bdbdbdd9d9d9");
	
	  var category20 = colors("1f77b4aec7e8ff7f0effbb782ca02c98df8ad62728ff98969467bdc5b0d58c564bc49c94e377c2f7b6d27f7f7fc7c7c7bcbd22dbdb8d17becf9edae5");
	
	  var cubehelix$3 = interpolateCubehelixLong(cubehelix(300, 0.5, 0.0), cubehelix(-240, 0.5, 1.0));
	
	  var warm = interpolateCubehelixLong(cubehelix(-100, 0.75, 0.35), cubehelix(80, 1.50, 0.8));
	
	  var cool = interpolateCubehelixLong(cubehelix(260, 0.75, 0.35), cubehelix(80, 1.50, 0.8));
	
	  var rainbow = cubehelix();
	
	  function rainbow$1(t) {
	    if (t < 0 || t > 1) t -= Math.floor(t);
	    var ts = Math.abs(t - 0.5);
	    rainbow.h = 360 * t - 100;
	    rainbow.s = 1.5 - 1.5 * ts;
	    rainbow.l = 0.8 - 0.9 * ts;
	    return rainbow + "";
	  }
	
	  function ramp(range) {
	    var n = range.length;
	    return function(t) {
	      return range[Math.max(0, Math.min(n - 1, Math.floor(t * n)))];
	    };
	  }
	
	  var viridis = ramp(colors("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));
	
	  var magma = ramp(colors("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"));
	
	  var inferno = ramp(colors("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"));
	
	  var plasma = ramp(colors("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));
	
	  function sequential(interpolator) {
	    var x0 = 0,
	        x1 = 1,
	        clamp = false;
	
	    function scale(x) {
	      var t = (x - x0) / (x1 - x0);
	      return interpolator(clamp ? Math.max(0, Math.min(1, t)) : t);
	    }
	
	    scale.domain = function(_) {
	      return arguments.length ? (x0 = +_[0], x1 = +_[1], scale) : [x0, x1];
	    };
	
	    scale.clamp = function(_) {
	      return arguments.length ? (clamp = !!_, scale) : clamp;
	    };
	
	    scale.interpolator = function(_) {
	      return arguments.length ? (interpolator = _, scale) : interpolator;
	    };
	
	    scale.copy = function() {
	      return sequential(interpolator).domain([x0, x1]).clamp(clamp);
	    };
	
	    return linearish(scale);
	  }
	
	  var xhtml = "http://www.w3.org/1999/xhtml";
	
	  var namespaces = {
	    svg: "http://www.w3.org/2000/svg",
	    xhtml: xhtml,
	    xlink: "http://www.w3.org/1999/xlink",
	    xml: "http://www.w3.org/XML/1998/namespace",
	    xmlns: "http://www.w3.org/2000/xmlns/"
	  };
	
	  function namespace(name) {
	    var prefix = name += "", i = prefix.indexOf(":");
	    if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
	    return namespaces.hasOwnProperty(prefix) ? {space: namespaces[prefix], local: name} : name;
	  }
	
	  function creatorInherit(name) {
	    return function() {
	      var document = this.ownerDocument,
	          uri = this.namespaceURI;
	      return uri === xhtml && document.documentElement.namespaceURI === xhtml
	          ? document.createElement(name)
	          : document.createElementNS(uri, name);
	    };
	  }
	
	  function creatorFixed(fullname) {
	    return function() {
	      return this.ownerDocument.createElementNS(fullname.space, fullname.local);
	    };
	  }
	
	  function creator(name) {
	    var fullname = namespace(name);
	    return (fullname.local
	        ? creatorFixed
	        : creatorInherit)(fullname);
	  }
	
	  var nextId = 0;
	
	  function local() {
	    return new Local;
	  }
	
	  function Local() {
	    this._ = "@" + (++nextId).toString(36);
	  }
	
	  Local.prototype = local.prototype = {
	    constructor: Local,
	    get: function(node) {
	      var id = this._;
	      while (!(id in node)) if (!(node = node.parentNode)) return;
	      return node[id];
	    },
	    set: function(node, value) {
	      return node[this._] = value;
	    },
	    remove: function(node) {
	      return this._ in node && delete node[this._];
	    },
	    toString: function() {
	      return this._;
	    }
	  };
	
	  var matcher = function(selector) {
	    return function() {
	      return this.matches(selector);
	    };
	  };
	
	  if (typeof document !== "undefined") {
	    var element = document.documentElement;
	    if (!element.matches) {
	      var vendorMatches = element.webkitMatchesSelector
	          || element.msMatchesSelector
	          || element.mozMatchesSelector
	          || element.oMatchesSelector;
	      matcher = function(selector) {
	        return function() {
	          return vendorMatches.call(this, selector);
	        };
	      };
	    }
	  }
	
	  var matcher$1 = matcher;
	
	  var filterEvents = {};
	
	  exports.event = null;
	
	  if (typeof document !== "undefined") {
	    var element$1 = document.documentElement;
	    if (!("onmouseenter" in element$1)) {
	      filterEvents = {mouseenter: "mouseover", mouseleave: "mouseout"};
	    }
	  }
	
	  function filterContextListener(listener, index, group) {
	    listener = contextListener(listener, index, group);
	    return function(event) {
	      var related = event.relatedTarget;
	      if (!related || (related !== this && !(related.compareDocumentPosition(this) & 8))) {
	        listener.call(this, event);
	      }
	    };
	  }
	
	  function contextListener(listener, index, group) {
	    return function(event1) {
	      var event0 = exports.event; // Events can be reentrant (e.g., focus).
	      exports.event = event1;
	      try {
	        listener.call(this, this.__data__, index, group);
	      } finally {
	        exports.event = event0;
	      }
	    };
	  }
	
	  function parseTypenames$1(typenames) {
	    return typenames.trim().split(/^|\s+/).map(function(t) {
	      var name = "", i = t.indexOf(".");
	      if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
	      return {type: t, name: name};
	    });
	  }
	
	  function onRemove(typename) {
	    return function() {
	      var on = this.__on;
	      if (!on) return;
	      for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
	        if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
	          this.removeEventListener(o.type, o.listener, o.capture);
	        } else {
	          on[++i] = o;
	        }
	      }
	      if (++i) on.length = i;
	      else delete this.__on;
	    };
	  }
	
	  function onAdd(typename, value, capture) {
	    var wrap = filterEvents.hasOwnProperty(typename.type) ? filterContextListener : contextListener;
	    return function(d, i, group) {
	      var on = this.__on, o, listener = wrap(value, i, group);
	      if (on) for (var j = 0, m = on.length; j < m; ++j) {
	        if ((o = on[j]).type === typename.type && o.name === typename.name) {
	          this.removeEventListener(o.type, o.listener, o.capture);
	          this.addEventListener(o.type, o.listener = listener, o.capture = capture);
	          o.value = value;
	          return;
	        }
	      }
	      this.addEventListener(typename.type, listener, capture);
	      o = {type: typename.type, name: typename.name, value: value, listener: listener, capture: capture};
	      if (!on) this.__on = [o];
	      else on.push(o);
	    };
	  }
	
	  function selection_on(typename, value, capture) {
	    var typenames = parseTypenames$1(typename + ""), i, n = typenames.length, t;
	
	    if (arguments.length < 2) {
	      var on = this.node().__on;
	      if (on) for (var j = 0, m = on.length, o; j < m; ++j) {
	        for (i = 0, o = on[j]; i < n; ++i) {
	          if ((t = typenames[i]).type === o.type && t.name === o.name) {
	            return o.value;
	          }
	        }
	      }
	      return;
	    }
	
	    on = value ? onAdd : onRemove;
	    if (capture == null) capture = false;
	    for (i = 0; i < n; ++i) this.each(on(typenames[i], value, capture));
	    return this;
	  }
	
	  function customEvent(event1, listener, that, args) {
	    var event0 = exports.event;
	    event1.sourceEvent = exports.event;
	    exports.event = event1;
	    try {
	      return listener.apply(that, args);
	    } finally {
	      exports.event = event0;
	    }
	  }
	
	  function sourceEvent() {
	    var current = exports.event, source;
	    while (source = current.sourceEvent) current = source;
	    return current;
	  }
	
	  function point$5(node, event) {
	    var svg = node.ownerSVGElement || node;
	
	    if (svg.createSVGPoint) {
	      var point = svg.createSVGPoint();
	      point.x = event.clientX, point.y = event.clientY;
	      point = point.matrixTransform(node.getScreenCTM().inverse());
	      return [point.x, point.y];
	    }
	
	    var rect = node.getBoundingClientRect();
	    return [event.clientX - rect.left - node.clientLeft, event.clientY - rect.top - node.clientTop];
	  }
	
	  function mouse(node) {
	    var event = sourceEvent();
	    if (event.changedTouches) event = event.changedTouches[0];
	    return point$5(node, event);
	  }
	
	  function none$2() {}
	
	  function selector(selector) {
	    return selector == null ? none$2 : function() {
	      return this.querySelector(selector);
	    };
	  }
	
	  function selection_select(select) {
	    if (typeof select !== "function") select = selector(select);
	
	    for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
	      for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
	        if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
	          if ("__data__" in node) subnode.__data__ = node.__data__;
	          subgroup[i] = subnode;
	        }
	      }
	    }
	
	    return new Selection(subgroups, this._parents);
	  }
	
	  function empty() {
	    return [];
	  }
	
	  function selectorAll(selector) {
	    return selector == null ? empty : function() {
	      return this.querySelectorAll(selector);
	    };
	  }
	
	  function selection_selectAll(select) {
	    if (typeof select !== "function") select = selectorAll(select);
	
	    for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
	      for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
	        if (node = group[i]) {
	          subgroups.push(select.call(node, node.__data__, i, group));
	          parents.push(node);
	        }
	      }
	    }
	
	    return new Selection(subgroups, parents);
	  }
	
	  function selection_filter(match) {
	    if (typeof match !== "function") match = matcher$1(match);
	
	    for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
	      for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
	        if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
	          subgroup.push(node);
	        }
	      }
	    }
	
	    return new Selection(subgroups, this._parents);
	  }
	
	  function sparse(update) {
	    return new Array(update.length);
	  }
	
	  function selection_enter() {
	    return new Selection(this._enter || this._groups.map(sparse), this._parents);
	  }
	
	  function EnterNode(parent, datum) {
	    this.ownerDocument = parent.ownerDocument;
	    this.namespaceURI = parent.namespaceURI;
	    this._next = null;
	    this._parent = parent;
	    this.__data__ = datum;
	  }
	
	  EnterNode.prototype = {
	    constructor: EnterNode,
	    appendChild: function(child) { return this._parent.insertBefore(child, this._next); },
	    insertBefore: function(child, next) { return this._parent.insertBefore(child, next); },
	    querySelector: function(selector) { return this._parent.querySelector(selector); },
	    querySelectorAll: function(selector) { return this._parent.querySelectorAll(selector); }
	  };
	
	  function constant$4(x) {
	    return function() {
	      return x;
	    };
	  }
	
	  var keyPrefix = "$"; // Protect against keys like “__proto__”.
	
	  function bindIndex(parent, group, enter, update, exit, data) {
	    var i = 0,
	        node,
	        groupLength = group.length,
	        dataLength = data.length;
	
	    // Put any non-null nodes that fit into update.
	    // Put any null nodes into enter.
	    // Put any remaining data into enter.
	    for (; i < dataLength; ++i) {
	      if (node = group[i]) {
	        node.__data__ = data[i];
	        update[i] = node;
	      } else {
	        enter[i] = new EnterNode(parent, data[i]);
	      }
	    }
	
	    // Put any non-null nodes that don’t fit into exit.
	    for (; i < groupLength; ++i) {
	      if (node = group[i]) {
	        exit[i] = node;
	      }
	    }
	  }
	
	  function bindKey(parent, group, enter, update, exit, data, key) {
	    var i,
	        node,
	        nodeByKeyValue = {},
	        groupLength = group.length,
	        dataLength = data.length,
	        keyValues = new Array(groupLength),
	        keyValue;
	
	    // Compute the key for each node.
	    // If multiple nodes have the same key, the duplicates are added to exit.
	    for (i = 0; i < groupLength; ++i) {
	      if (node = group[i]) {
	        keyValues[i] = keyValue = keyPrefix + key.call(node, node.__data__, i, group);
	        if (keyValue in nodeByKeyValue) {
	          exit[i] = node;
	        } else {
	          nodeByKeyValue[keyValue] = node;
	        }
	      }
	    }
	
	    // Compute the key for each datum.
	    // If there a node associated with this key, join and add it to update.
	    // If there is not (or the key is a duplicate), add it to enter.
	    for (i = 0; i < dataLength; ++i) {
	      keyValue = keyPrefix + key.call(parent, data[i], i, data);
	      if (node = nodeByKeyValue[keyValue]) {
	        update[i] = node;
	        node.__data__ = data[i];
	        nodeByKeyValue[keyValue] = null;
	      } else {
	        enter[i] = new EnterNode(parent, data[i]);
	      }
	    }
	
	    // Add any remaining nodes that were not bound to data to exit.
	    for (i = 0; i < groupLength; ++i) {
	      if ((node = group[i]) && (nodeByKeyValue[keyValues[i]] === node)) {
	        exit[i] = node;
	      }
	    }
	  }
	
	  function selection_data(value, key) {
	    if (!value) {
	      data = new Array(this.size()), j = -1;
	      this.each(function(d) { data[++j] = d; });
	      return data;
	    }
	
	    var bind = key ? bindKey : bindIndex,
	        parents = this._parents,
	        groups = this._groups;
	
	    if (typeof value !== "function") value = constant$4(value);
	
	    for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
	      var parent = parents[j],
	          group = groups[j],
	          groupLength = group.length,
	          data = value.call(parent, parent && parent.__data__, j, parents),
	          dataLength = data.length,
	          enterGroup = enter[j] = new Array(dataLength),
	          updateGroup = update[j] = new Array(dataLength),
	          exitGroup = exit[j] = new Array(groupLength);
	
	      bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);
	
	      // Now connect the enter nodes to their following update node, such that
	      // appendChild can insert the materialized enter node before this node,
	      // rather than at the end of the parent node.
	      for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
	        if (previous = enterGroup[i0]) {
	          if (i0 >= i1) i1 = i0 + 1;
	          while (!(next = updateGroup[i1]) && ++i1 < dataLength);
	          previous._next = next || null;
	        }
	      }
	    }
	
	    update = new Selection(update, parents);
	    update._enter = enter;
	    update._exit = exit;
	    return update;
	  }
	
	  function selection_exit() {
	    return new Selection(this._exit || this._groups.map(sparse), this._parents);
	  }
	
	  function selection_merge(selection) {
	
	    for (var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
	      for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
	        if (node = group0[i] || group1[i]) {
	          merge[i] = node;
	        }
	      }
	    }
	
	    for (; j < m0; ++j) {
	      merges[j] = groups0[j];
	    }
	
	    return new Selection(merges, this._parents);
	  }
	
	  function selection_order() {
	
	    for (var groups = this._groups, j = -1, m = groups.length; ++j < m;) {
	      for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;) {
	        if (node = group[i]) {
	          if (next && next !== node.nextSibling) next.parentNode.insertBefore(node, next);
	          next = node;
	        }
	      }
	    }
	
	    return this;
	  }
	
	  function selection_sort(compare) {
	    if (!compare) compare = ascending$2;
	
	    function compareNode(a, b) {
	      return a && b ? compare(a.__data__, b.__data__) : !a - !b;
	    }
	
	    for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
	      for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
	        if (node = group[i]) {
	          sortgroup[i] = node;
	        }
	      }
	      sortgroup.sort(compareNode);
	    }
	
	    return new Selection(sortgroups, this._parents).order();
	  }
	
	  function ascending$2(a, b) {
	    return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
	  }
	
	  function selection_call() {
	    var callback = arguments[0];
	    arguments[0] = this;
	    callback.apply(null, arguments);
	    return this;
	  }
	
	  function selection_nodes() {
	    var nodes = new Array(this.size()), i = -1;
	    this.each(function() { nodes[++i] = this; });
	    return nodes;
	  }
	
	  function selection_node() {
	
	    for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
	      for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
	        var node = group[i];
	        if (node) return node;
	      }
	    }
	
	    return null;
	  }
	
	  function selection_size() {
	    var size = 0;
	    this.each(function() { ++size; });
	    return size;
	  }
	
	  function selection_empty() {
	    return !this.node();
	  }
	
	  function selection_each(callback) {
	
	    for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
	      for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
	        if (node = group[i]) callback.call(node, node.__data__, i, group);
	      }
	    }
	
	    return this;
	  }
	
	  function attrRemove(name) {
	    return function() {
	      this.removeAttribute(name);
	    };
	  }
	
	  function attrRemoveNS(fullname) {
	    return function() {
	      this.removeAttributeNS(fullname.space, fullname.local);
	    };
	  }
	
	  function attrConstant(name, value) {
	    return function() {
	      this.setAttribute(name, value);
	    };
	  }
	
	  function attrConstantNS(fullname, value) {
	    return function() {
	      this.setAttributeNS(fullname.space, fullname.local, value);
	    };
	  }
	
	  function attrFunction(name, value) {
	    return function() {
	      var v = value.apply(this, arguments);
	      if (v == null) this.removeAttribute(name);
	      else this.setAttribute(name, v);
	    };
	  }
	
	  function attrFunctionNS(fullname, value) {
	    return function() {
	      var v = value.apply(this, arguments);
	      if (v == null) this.removeAttributeNS(fullname.space, fullname.local);
	      else this.setAttributeNS(fullname.space, fullname.local, v);
	    };
	  }
	
	  function selection_attr(name, value) {
	    var fullname = namespace(name);
	
	    if (arguments.length < 2) {
	      var node = this.node();
	      return fullname.local
	          ? node.getAttributeNS(fullname.space, fullname.local)
	          : node.getAttribute(fullname);
	    }
	
	    return this.each((value == null
	        ? (fullname.local ? attrRemoveNS : attrRemove) : (typeof value === "function"
	        ? (fullname.local ? attrFunctionNS : attrFunction)
	        : (fullname.local ? attrConstantNS : attrConstant)))(fullname, value));
	  }
	
	  function window(node) {
	    return (node.ownerDocument && node.ownerDocument.defaultView) // node is a Node
	        || (node.document && node) // node is a Window
	        || node.defaultView; // node is a Document
	  }
	
	  function styleRemove(name) {
	    return function() {
	      this.style.removeProperty(name);
	    };
	  }
	
	  function styleConstant(name, value, priority) {
	    return function() {
	      this.style.setProperty(name, value, priority);
	    };
	  }
	
	  function styleFunction(name, value, priority) {
	    return function() {
	      var v = value.apply(this, arguments);
	      if (v == null) this.style.removeProperty(name);
	      else this.style.setProperty(name, v, priority);
	    };
	  }
	
	  function selection_style(name, value, priority) {
	    var node;
	    return arguments.length > 1
	        ? this.each((value == null
	              ? styleRemove : typeof value === "function"
	              ? styleFunction
	              : styleConstant)(name, value, priority == null ? "" : priority))
	        : window(node = this.node())
	            .getComputedStyle(node, null)
	            .getPropertyValue(name);
	  }
	
	  function propertyRemove(name) {
	    return function() {
	      delete this[name];
	    };
	  }
	
	  function propertyConstant(name, value) {
	    return function() {
	      this[name] = value;
	    };
	  }
	
	  function propertyFunction(name, value) {
	    return function() {
	      var v = value.apply(this, arguments);
	      if (v == null) delete this[name];
	      else this[name] = v;
	    };
	  }
	
	  function selection_property(name, value) {
	    return arguments.length > 1
	        ? this.each((value == null
	            ? propertyRemove : typeof value === "function"
	            ? propertyFunction
	            : propertyConstant)(name, value))
	        : this.node()[name];
	  }
	
	  function classArray(string) {
	    return string.trim().split(/^|\s+/);
	  }
	
	  function classList(node) {
	    return node.classList || new ClassList(node);
	  }
	
	  function ClassList(node) {
	    this._node = node;
	    this._names = classArray(node.getAttribute("class") || "");
	  }
	
	  ClassList.prototype = {
	    add: function(name) {
	      var i = this._names.indexOf(name);
	      if (i < 0) {
	        this._names.push(name);
	        this._node.setAttribute("class", this._names.join(" "));
	      }
	    },
	    remove: function(name) {
	      var i = this._names.indexOf(name);
	      if (i >= 0) {
	        this._names.splice(i, 1);
	        this._node.setAttribute("class", this._names.join(" "));
	      }
	    },
	    contains: function(name) {
	      return this._names.indexOf(name) >= 0;
	    }
	  };
	
	  function classedAdd(node, names) {
	    var list = classList(node), i = -1, n = names.length;
	    while (++i < n) list.add(names[i]);
	  }
	
	  function classedRemove(node, names) {
	    var list = classList(node), i = -1, n = names.length;
	    while (++i < n) list.remove(names[i]);
	  }
	
	  function classedTrue(names) {
	    return function() {
	      classedAdd(this, names);
	    };
	  }
	
	  function classedFalse(names) {
	    return function() {
	      classedRemove(this, names);
	    };
	  }
	
	  function classedFunction(names, value) {
	    return function() {
	      (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
	    };
	  }
	
	  function selection_classed(name, value) {
	    var names = classArray(name + "");
	
	    if (arguments.length < 2) {
	      var list = classList(this.node()), i = -1, n = names.length;
	      while (++i < n) if (!list.contains(names[i])) return false;
	      return true;
	    }
	
	    return this.each((typeof value === "function"
	        ? classedFunction : value
	        ? classedTrue
	        : classedFalse)(names, value));
	  }
	
	  function textRemove() {
	    this.textContent = "";
	  }
	
	  function textConstant(value) {
	    return function() {
	      this.textContent = value;
	    };
	  }
	
	  function textFunction(value) {
	    return function() {
	      var v = value.apply(this, arguments);
	      this.textContent = v == null ? "" : v;
	    };
	  }
	
	  function selection_text(value) {
	    return arguments.length
	        ? this.each(value == null
	            ? textRemove : (typeof value === "function"
	            ? textFunction
	            : textConstant)(value))
	        : this.node().textContent;
	  }
	
	  function htmlRemove() {
	    this.innerHTML = "";
	  }
	
	  function htmlConstant(value) {
	    return function() {
	      this.innerHTML = value;
	    };
	  }
	
	  function htmlFunction(value) {
	    return function() {
	      var v = value.apply(this, arguments);
	      this.innerHTML = v == null ? "" : v;
	    };
	  }
	
	  function selection_html(value) {
	    return arguments.length
	        ? this.each(value == null
	            ? htmlRemove : (typeof value === "function"
	            ? htmlFunction
	            : htmlConstant)(value))
	        : this.node().innerHTML;
	  }
	
	  function raise$1() {
	    if (this.nextSibling) this.parentNode.appendChild(this);
	  }
	
	  function selection_raise() {
	    return this.each(raise$1);
	  }
	
	  function lower() {
	    if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
	  }
	
	  function selection_lower() {
	    return this.each(lower);
	  }
	
	  function selection_append(name) {
	    var create = typeof name === "function" ? name : creator(name);
	    return this.select(function() {
	      return this.appendChild(create.apply(this, arguments));
	    });
	  }
	
	  function constantNull() {
	    return null;
	  }
	
	  function selection_insert(name, before) {
	    var create = typeof name === "function" ? name : creator(name),
	        select = before == null ? constantNull : typeof before === "function" ? before : selector(before);
	    return this.select(function() {
	      return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
	    });
	  }
	
	  function remove() {
	    var parent = this.parentNode;
	    if (parent) parent.removeChild(this);
	  }
	
	  function selection_remove() {
	    return this.each(remove);
	  }
	
	  function selection_datum(value) {
	    return arguments.length
	        ? this.property("__data__", value)
	        : this.node().__data__;
	  }
	
	  function dispatchEvent(node, type, params) {
	    var window$$ = window(node),
	        event = window$$.CustomEvent;
	
	    if (event) {
	      event = new event(type, params);
	    } else {
	      event = window$$.document.createEvent("Event");
	      if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
	      else event.initEvent(type, false, false);
	    }
	
	    node.dispatchEvent(event);
	  }
	
	  function dispatchConstant(type, params) {
	    return function() {
	      return dispatchEvent(this, type, params);
	    };
	  }
	
	  function dispatchFunction(type, params) {
	    return function() {
	      return dispatchEvent(this, type, params.apply(this, arguments));
	    };
	  }
	
	  function selection_dispatch(type, params) {
	    return this.each((typeof params === "function"
	        ? dispatchFunction
	        : dispatchConstant)(type, params));
	  }
	
	  var root = [null];
	
	  function Selection(groups, parents) {
	    this._groups = groups;
	    this._parents = parents;
	  }
	
	  function selection() {
	    return new Selection([[document.documentElement]], root);
	  }
	
	  Selection.prototype = selection.prototype = {
	    constructor: Selection,
	    select: selection_select,
	    selectAll: selection_selectAll,
	    filter: selection_filter,
	    data: selection_data,
	    enter: selection_enter,
	    exit: selection_exit,
	    merge: selection_merge,
	    order: selection_order,
	    sort: selection_sort,
	    call: selection_call,
	    nodes: selection_nodes,
	    node: selection_node,
	    size: selection_size,
	    empty: selection_empty,
	    each: selection_each,
	    attr: selection_attr,
	    style: selection_style,
	    property: selection_property,
	    classed: selection_classed,
	    text: selection_text,
	    html: selection_html,
	    raise: selection_raise,
	    lower: selection_lower,
	    append: selection_append,
	    insert: selection_insert,
	    remove: selection_remove,
	    datum: selection_datum,
	    on: selection_on,
	    dispatch: selection_dispatch
	  };
	
	  function select(selector) {
	    return typeof selector === "string"
	        ? new Selection([[document.querySelector(selector)]], [document.documentElement])
	        : new Selection([[selector]], root);
	  }
	
	  function selectAll(selector) {
	    return typeof selector === "string"
	        ? new Selection([document.querySelectorAll(selector)], [document.documentElement])
	        : new Selection([selector == null ? [] : selector], root);
	  }
	
	  function touch(node, touches, identifier) {
	    if (arguments.length < 3) identifier = touches, touches = sourceEvent().changedTouches;
	
	    for (var i = 0, n = touches ? touches.length : 0, touch; i < n; ++i) {
	      if ((touch = touches[i]).identifier === identifier) {
	        return point$5(node, touch);
	      }
	    }
	
	    return null;
	  }
	
	  function touches(node, touches) {
	    if (touches == null) touches = sourceEvent().touches;
	
	    for (var i = 0, n = touches ? touches.length : 0, points = new Array(n); i < n; ++i) {
	      points[i] = point$5(node, touches[i]);
	    }
	
	    return points;
	  }
	
	  var emptyOn = dispatch("start", "end", "interrupt");
	  var emptyTween = [];
	
	  var CREATED = 0;
	  var SCHEDULED = 1;
	  var STARTING = 2;
	  var STARTED = 3;
	  var ENDING = 4;
	  var ENDED = 5;
	
	  function schedule(node, name, id, index, group, timing) {
	    var schedules = node.__transition;
	    if (!schedules) node.__transition = {};
	    else if (id in schedules) return;
	    create(node, id, {
	      name: name,
	      index: index, // For context during callback.
	      group: group, // For context during callback.
	      on: emptyOn,
	      tween: emptyTween,
	      time: timing.time,
	      delay: timing.delay,
	      duration: timing.duration,
	      ease: timing.ease,
	      timer: null,
	      state: CREATED
	    });
	  }
	
	  function init(node, id) {
	    var schedule = node.__transition;
	    if (!schedule || !(schedule = schedule[id]) || schedule.state > CREATED) throw new Error("too late");
	    return schedule;
	  }
	
	  function set$2(node, id) {
	    var schedule = node.__transition;
	    if (!schedule || !(schedule = schedule[id]) || schedule.state > STARTING) throw new Error("too late");
	    return schedule;
	  }
	
	  function get$1(node, id) {
	    var schedule = node.__transition;
	    if (!schedule || !(schedule = schedule[id])) throw new Error("too late");
	    return schedule;
	  }
	
	  function create(node, id, self) {
	    var schedules = node.__transition,
	        tween;
	
	    // Initialize the self timer when the transition is created.
	    // Note the actual delay is not known until the first callback!
	    schedules[id] = self;
	    self.timer = timer(schedule, 0, self.time);
	
	    // If the delay is greater than this first sleep, sleep some more;
	    // otherwise, start immediately.
	    function schedule(elapsed) {
	      self.state = SCHEDULED;
	      if (self.delay <= elapsed) start(elapsed - self.delay);
	      else self.timer.restart(start, self.delay, self.time);
	    }
	
	    function start(elapsed) {
	      var i, j, n, o;
	
	      for (i in schedules) {
	        o = schedules[i];
	        if (o.name !== self.name) continue;
	
	        // Interrupt the active transition, if any.
	        // Dispatch the interrupt event.
	        if (o.state === STARTED) {
	          o.state = ENDED;
	          o.timer.stop();
	          o.on.call("interrupt", node, node.__data__, o.index, o.group);
	          delete schedules[i];
	        }
	
	        // Cancel any pre-empted transitions. No interrupt event is dispatched
	        // because the cancelled transitions never started. Note that this also
	        // removes this transition from the pending list!
	        else if (+i < id) {
	          o.state = ENDED;
	          o.timer.stop();
	          delete schedules[i];
	        }
	      }
	
	      // Defer the first tick to end of the current frame; see mbostock/d3#1576.
	      // Note the transition may be canceled after start and before the first tick!
	      // Note this must be scheduled before the start event; see d3/d3-transition#16!
	      // Assuming this is successful, subsequent callbacks go straight to tick.
	      timeout$1(function() {
	        if (self.state === STARTED) {
	          self.timer.restart(tick, self.delay, self.time);
	          tick(elapsed);
	        }
	      });
	
	      // Dispatch the start event.
	      // Note this must be done before the tween are initialized.
	      self.state = STARTING;
	      self.on.call("start", node, node.__data__, self.index, self.group);
	      if (self.state !== STARTING) return; // interrupted
	      self.state = STARTED;
	
	      // Initialize the tween, deleting null tween.
	      tween = new Array(n = self.tween.length);
	      for (i = 0, j = -1; i < n; ++i) {
	        if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) {
	          tween[++j] = o;
	        }
	      }
	      tween.length = j + 1;
	    }
	
	    function tick(elapsed) {
	      var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.state = ENDING, 1),
	          i = -1,
	          n = tween.length;
	
	      while (++i < n) {
	        tween[i].call(null, t);
	      }
	
	      // Dispatch the end event.
	      if (self.state === ENDING) {
	        self.state = ENDED;
	        self.timer.stop();
	        self.on.call("end", node, node.__data__, self.index, self.group);
	        for (i in schedules) if (+i !== id) return void delete schedules[id];
	        delete node.__transition;
	      }
	    }
	  }
	
	  function interrupt(node, name) {
	    var schedules = node.__transition,
	        schedule,
	        active,
	        empty = true,
	        i;
	
	    if (!schedules) return;
	
	    name = name == null ? null : name + "";
	
	    for (i in schedules) {
	      if ((schedule = schedules[i]).name !== name) { empty = false; continue; }
	      active = schedule.state === STARTED;
	      schedule.state = ENDED;
	      schedule.timer.stop();
	      if (active) schedule.on.call("interrupt", node, node.__data__, schedule.index, schedule.group);
	      delete schedules[i];
	    }
	
	    if (empty) delete node.__transition;
	  }
	
	  function selection_interrupt(name) {
	    return this.each(function() {
	      interrupt(this, name);
	    });
	  }
	
	  function tweenRemove(id, name) {
	    var tween0, tween1;
	    return function() {
	      var schedule = set$2(this, id),
	          tween = schedule.tween;
	
	      // If this node shared tween with the previous node,
	      // just assign the updated shared tween and we’re done!
	      // Otherwise, copy-on-write.
	      if (tween !== tween0) {
	        tween1 = tween0 = tween;
	        for (var i = 0, n = tween1.length; i < n; ++i) {
	          if (tween1[i].name === name) {
	            tween1 = tween1.slice();
	            tween1.splice(i, 1);
	            break;
	          }
	        }
	      }
	
	      schedule.tween = tween1;
	    };
	  }
	
	  function tweenFunction(id, name, value) {
	    var tween0, tween1;
	    if (typeof value !== "function") throw new Error;
	    return function() {
	      var schedule = set$2(this, id),
	          tween = schedule.tween;
	
	      // If this node shared tween with the previous node,
	      // just assign the updated shared tween and we’re done!
	      // Otherwise, copy-on-write.
	      if (tween !== tween0) {
	        tween1 = (tween0 = tween).slice();
	        for (var t = {name: name, value: value}, i = 0, n = tween1.length; i < n; ++i) {
	          if (tween1[i].name === name) {
	            tween1[i] = t;
	            break;
	          }
	        }
	        if (i === n) tween1.push(t);
	      }
	
	      schedule.tween = tween1;
	    };
	  }
	
	  function transition_tween(name, value) {
	    var id = this._id;
	
	    name += "";
	
	    if (arguments.length < 2) {
	      var tween = get$1(this.node(), id).tween;
	      for (var i = 0, n = tween.length, t; i < n; ++i) {
	        if ((t = tween[i]).name === name) {
	          return t.value;
	        }
	      }
	      return null;
	    }
	
	    return this.each((value == null ? tweenRemove : tweenFunction)(id, name, value));
	  }
	
	  function tweenValue(transition, name, value) {
	    var id = transition._id;
	
	    transition.each(function() {
	      var schedule = set$2(this, id);
	      (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
	    });
	
	    return function(node) {
	      return get$1(node, id).value[name];
	    };
	  }
	
	  function interpolate$1(a, b) {
	    var c;
	    return (typeof b === "number" ? interpolateNumber
	        : b instanceof color ? interpolateRgb
	        : (c = color(b)) ? (b = c, interpolateRgb)
	        : interpolateString)(a, b);
	  }
	
	  function attrRemove$1(name) {
	    return function() {
	      this.removeAttribute(name);
	    };
	  }
	
	  function attrRemoveNS$1(fullname) {
	    return function() {
	      this.removeAttributeNS(fullname.space, fullname.local);
	    };
	  }
	
	  function attrConstant$1(name, interpolate, value1) {
	    var value00,
	        interpolate0;
	    return function() {
	      var value0 = this.getAttribute(name);
	      return value0 === value1 ? null
	          : value0 === value00 ? interpolate0
	          : interpolate0 = interpolate(value00 = value0, value1);
	    };
	  }
	
	  function attrConstantNS$1(fullname, interpolate, value1) {
	    var value00,
	        interpolate0;
	    return function() {
	      var value0 = this.getAttributeNS(fullname.space, fullname.local);
	      return value0 === value1 ? null
	          : value0 === value00 ? interpolate0
	          : interpolate0 = interpolate(value00 = value0, value1);
	    };
	  }
	
	  function attrFunction$1(name, interpolate, value) {
	    var value00,
	        value10,
	        interpolate0;
	    return function() {
	      var value0, value1 = value(this);
	      if (value1 == null) return void this.removeAttribute(name);
	      value0 = this.getAttribute(name);
	      return value0 === value1 ? null
	          : value0 === value00 && value1 === value10 ? interpolate0
	          : interpolate0 = interpolate(value00 = value0, value10 = value1);
	    };
	  }
	
	  function attrFunctionNS$1(fullname, interpolate, value) {
	    var value00,
	        value10,
	        interpolate0;
	    return function() {
	      var value0, value1 = value(this);
	      if (value1 == null) return void this.removeAttributeNS(fullname.space, fullname.local);
	      value0 = this.getAttributeNS(fullname.space, fullname.local);
	      return value0 === value1 ? null
	          : value0 === value00 && value1 === value10 ? interpolate0
	          : interpolate0 = interpolate(value00 = value0, value10 = value1);
	    };
	  }
	
	  function transition_attr(name, value) {
	    var fullname = namespace(name), i = fullname === "transform" ? interpolateTransform$2 : interpolate$1;
	    return this.attrTween(name, typeof value === "function"
	        ? (fullname.local ? attrFunctionNS$1 : attrFunction$1)(fullname, i, tweenValue(this, "attr." + name, value))
	        : value == null ? (fullname.local ? attrRemoveNS$1 : attrRemove$1)(fullname)
	        : (fullname.local ? attrConstantNS$1 : attrConstant$1)(fullname, i, value));
	  }
	
	  function attrTweenNS(fullname, value) {
	    function tween() {
	      var node = this, i = value.apply(node, arguments);
	      return i && function(t) {
	        node.setAttributeNS(fullname.space, fullname.local, i(t));
	      };
	    }
	    tween._value = value;
	    return tween;
	  }
	
	  function attrTween(name, value) {
	    function tween() {
	      var node = this, i = value.apply(node, arguments);
	      return i && function(t) {
	        node.setAttribute(name, i(t));
	      };
	    }
	    tween._value = value;
	    return tween;
	  }
	
	  function transition_attrTween(name, value) {
	    var key = "attr." + name;
	    if (arguments.length < 2) return (key = this.tween(key)) && key._value;
	    if (value == null) return this.tween(key, null);
	    if (typeof value !== "function") throw new Error;
	    var fullname = namespace(name);
	    return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
	  }
	
	  function delayFunction(id, value) {
	    return function() {
	      init(this, id).delay = +value.apply(this, arguments);
	    };
	  }
	
	  function delayConstant(id, value) {
	    return value = +value, function() {
	      init(this, id).delay = value;
	    };
	  }
	
	  function transition_delay(value) {
	    var id = this._id;
	
	    return arguments.length
	        ? this.each((typeof value === "function"
	            ? delayFunction
	            : delayConstant)(id, value))
	        : get$1(this.node(), id).delay;
	  }
	
	  function durationFunction(id, value) {
	    return function() {
	      set$2(this, id).duration = +value.apply(this, arguments);
	    };
	  }
	
	  function durationConstant(id, value) {
	    return value = +value, function() {
	      set$2(this, id).duration = value;
	    };
	  }
	
	  function transition_duration(value) {
	    var id = this._id;
	
	    return arguments.length
	        ? this.each((typeof value === "function"
	            ? durationFunction
	            : durationConstant)(id, value))
	        : get$1(this.node(), id).duration;
	  }
	
	  function easeConstant(id, value) {
	    if (typeof value !== "function") throw new Error;
	    return function() {
	      set$2(this, id).ease = value;
	    };
	  }
	
	  function transition_ease(value) {
	    var id = this._id;
	
	    return arguments.length
	        ? this.each(easeConstant(id, value))
	        : get$1(this.node(), id).ease;
	  }
	
	  function transition_filter(match) {
	    if (typeof match !== "function") match = matcher$1(match);
	
	    for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
	      for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
	        if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
	          subgroup.push(node);
	        }
	      }
	    }
	
	    return new Transition(subgroups, this._parents, this._name, this._id);
	  }
	
	  function transition_merge(transition) {
	    if (transition._id !== this._id) throw new Error;
	
	    for (var groups0 = this._groups, groups1 = transition._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
	      for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
	        if (node = group0[i] || group1[i]) {
	          merge[i] = node;
	        }
	      }
	    }
	
	    for (; j < m0; ++j) {
	      merges[j] = groups0[j];
	    }
	
	    return new Transition(merges, this._parents, this._name, this._id);
	  }
	
	  function start$1(name) {
	    return (name + "").trim().split(/^|\s+/).every(function(t) {
	      var i = t.indexOf(".");
	      if (i >= 0) t = t.slice(0, i);
	      return !t || t === "start";
	    });
	  }
	
	  function onFunction(id, name, listener) {
	    var on0, on1, sit = start$1(name) ? init : set$2;
	    return function() {
	      var schedule = sit(this, id),
	          on = schedule.on;
	
	      // If this node shared a dispatch with the previous node,
	      // just assign the updated shared dispatch and we’re done!
	      // Otherwise, copy-on-write.
	      if (on !== on0) (on1 = (on0 = on).copy()).on(name, listener);
	
	      schedule.on = on1;
	    };
	  }
	
	  function transition_on(name, listener) {
	    var id = this._id;
	
	    return arguments.length < 2
	        ? get$1(this.node(), id).on.on(name)
	        : this.each(onFunction(id, name, listener));
	  }
	
	  function removeFunction(id) {
	    return function() {
	      var parent = this.parentNode;
	      for (var i in this.__transition) if (+i !== id) return;
	      if (parent) parent.removeChild(this);
	    };
	  }
	
	  function transition_remove() {
	    return this.on("end.remove", removeFunction(this._id));
	  }
	
	  function transition_select(select) {
	    var name = this._name,
	        id = this._id;
	
	    if (typeof select !== "function") select = selector(select);
	
	    for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
	      for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
	        if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
	          if ("__data__" in node) subnode.__data__ = node.__data__;
	          subgroup[i] = subnode;
	          schedule(subgroup[i], name, id, i, subgroup, get$1(node, id));
	        }
	      }
	    }
	
	    return new Transition(subgroups, this._parents, name, id);
	  }
	
	  function transition_selectAll(select) {
	    var name = this._name,
	        id = this._id;
	
	    if (typeof select !== "function") select = selectorAll(select);
	
	    for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
	      for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
	        if (node = group[i]) {
	          for (var children = select.call(node, node.__data__, i, group), child, inherit = get$1(node, id), k = 0, l = children.length; k < l; ++k) {
	            if (child = children[k]) {
	              schedule(child, name, id, k, children, inherit);
	            }
	          }
	          subgroups.push(children);
	          parents.push(node);
	        }
	      }
	    }
	
	    return new Transition(subgroups, parents, name, id);
	  }
	
	  var Selection$1 = selection.prototype.constructor;
	
	  function transition_selection() {
	    return new Selection$1(this._groups, this._parents);
	  }
	
	  function styleRemove$1(name, interpolate) {
	    var value00,
	        value10,
	        interpolate0;
	    return function() {
	      var style = window(this).getComputedStyle(this, null),
	          value0 = style.getPropertyValue(name),
	          value1 = (this.style.removeProperty(name), style.getPropertyValue(name));
	      return value0 === value1 ? null
	          : value0 === value00 && value1 === value10 ? interpolate0
	          : interpolate0 = interpolate(value00 = value0, value10 = value1);
	    };
	  }
	
	  function styleRemoveEnd(name) {
	    return function() {
	      this.style.removeProperty(name);
	    };
	  }
	
	  function styleConstant$1(name, interpolate, value1) {
	    var value00,
	        interpolate0;
	    return function() {
	      var value0 = window(this).getComputedStyle(this, null).getPropertyValue(name);
	      return value0 === value1 ? null
	          : value0 === value00 ? interpolate0
	          : interpolate0 = interpolate(value00 = value0, value1);
	    };
	  }
	
	  function styleFunction$1(name, interpolate, value) {
	    var value00,
	        value10,
	        interpolate0;
	    return function() {
	      var style = window(this).getComputedStyle(this, null),
	          value0 = style.getPropertyValue(name),
	          value1 = value(this);
	      if (value1 == null) value1 = (this.style.removeProperty(name), style.getPropertyValue(name));
	      return value0 === value1 ? null
	          : value0 === value00 && value1 === value10 ? interpolate0
	          : interpolate0 = interpolate(value00 = value0, value10 = value1);
	    };
	  }
	
	  function transition_style(name, value, priority) {
	    var i = (name += "") === "transform" ? interpolateTransform$1 : interpolate$1;
	    return value == null ? this
	            .styleTween(name, styleRemove$1(name, i))
	            .on("end.style." + name, styleRemoveEnd(name))
	        : this.styleTween(name, typeof value === "function"
	            ? styleFunction$1(name, i, tweenValue(this, "style." + name, value))
	            : styleConstant$1(name, i, value), priority);
	  }
	
	  function styleTween(name, value, priority) {
	    function tween() {
	      var node = this, i = value.apply(node, arguments);
	      return i && function(t) {
	        node.style.setProperty(name, i(t), priority);
	      };
	    }
	    tween._value = value;
	    return tween;
	  }
	
	  function transition_styleTween(name, value, priority) {
	    var key = "style." + (name += "");
	    if (arguments.length < 2) return (key = this.tween(key)) && key._value;
	    if (value == null) return this.tween(key, null);
	    if (typeof value !== "function") throw new Error;
	    return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
	  }
	
	  function textConstant$1(value) {
	    return function() {
	      this.textContent = value;
	    };
	  }
	
	  function textFunction$1(value) {
	    return function() {
	      var value1 = value(this);
	      this.textContent = value1 == null ? "" : value1;
	    };
	  }
	
	  function transition_text(value) {
	    return this.tween("text", typeof value === "function"
	        ? textFunction$1(tweenValue(this, "text", value))
	        : textConstant$1(value == null ? "" : value + ""));
	  }
	
	  function transition_transition() {
	    var name = this._name,
	        id0 = this._id,
	        id1 = newId();
	
	    for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
	      for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
	        if (node = group[i]) {
	          var inherit = get$1(node, id0);
	          schedule(node, name, id1, i, group, {
	            time: inherit.time + inherit.delay + inherit.duration,
	            delay: 0,
	            duration: inherit.duration,
	            ease: inherit.ease
	          });
	        }
	      }
	    }
	
	    return new Transition(groups, this._parents, name, id1);
	  }
	
	  var id = 0;
	
	  function Transition(groups, parents, name, id) {
	    this._groups = groups;
	    this._parents = parents;
	    this._name = name;
	    this._id = id;
	  }
	
	  function transition(name) {
	    return selection().transition(name);
	  }
	
	  function newId() {
	    return ++id;
	  }
	
	  var selection_prototype = selection.prototype;
	
	  Transition.prototype = transition.prototype = {
	    constructor: Transition,
	    select: transition_select,
	    selectAll: transition_selectAll,
	    filter: transition_filter,
	    merge: transition_merge,
	    selection: transition_selection,
	    transition: transition_transition,
	    call: selection_prototype.call,
	    nodes: selection_prototype.nodes,
	    node: selection_prototype.node,
	    size: selection_prototype.size,
	    empty: selection_prototype.empty,
	    each: selection_prototype.each,
	    on: transition_on,
	    attr: transition_attr,
	    attrTween: transition_attrTween,
	    style: transition_style,
	    styleTween: transition_styleTween,
	    text: transition_text,
	    remove: transition_remove,
	    tween: transition_tween,
	    delay: transition_delay,
	    duration: transition_duration,
	    ease: transition_ease
	  };
	
	  var defaultTiming = {
	    time: null, // Set on use.
	    delay: 0,
	    duration: 250,
	    ease: easeCubicInOut
	  };
	
	  function inherit(node, id) {
	    var timing;
	    while (!(timing = node.__transition) || !(timing = timing[id])) {
	      if (!(node = node.parentNode)) {
	        return defaultTiming.time = now(), defaultTiming;
	      }
	    }
	    return timing;
	  }
	
	  function selection_transition(name) {
	    var id,
	        timing;
	
	    if (name instanceof Transition) {
	      id = name._id, name = name._name;
	    } else {
	      id = newId(), (timing = defaultTiming).time = now(), name = name == null ? null : name + "";
	    }
	
	    for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
	      for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
	        if (node = group[i]) {
	          schedule(node, name, id, i, group, timing || inherit(node, id));
	        }
	      }
	    }
	
	    return new Transition(groups, this._parents, name, id);
	  }
	
	  selection.prototype.interrupt = selection_interrupt;
	  selection.prototype.transition = selection_transition;
	
	  var root$1 = [null];
	
	  function active(node, name) {
	    var schedules = node.__transition,
	        schedule,
	        i;
	
	    if (schedules) {
	      name = name == null ? null : name + "";
	      for (i in schedules) {
	        if ((schedule = schedules[i]).state > SCHEDULED && schedule.name === name) {
	          return new Transition([[node]], root$1, name, +i);
	        }
	      }
	    }
	
	    return null;
	  }
	
	  var slice$4 = Array.prototype.slice;
	
	  function identity$5(x) {
	    return x;
	  }
	
	  var top = 1;
	  var right = 2;
	  var bottom = 3;
	  var left = 4;
	var   epsilon$2 = 1e-6;
	  function translateX(scale0, scale1, d) {
	    var x = scale0(d);
	    return "translate(" + (isFinite(x) ? x : scale1(d)) + ",0)";
	  }
	
	  function translateY(scale0, scale1, d) {
	    var y = scale0(d);
	    return "translate(0," + (isFinite(y) ? y : scale1(d)) + ")";
	  }
	
	  function center(scale) {
	    var offset = scale.bandwidth() / 2;
	    if (scale.round()) offset = Math.round(offset);
	    return function(d) {
	      return scale(d) + offset;
	    };
	  }
	
	  function entering() {
	    return !this.__axis;
	  }
	
	  function axis(orient, scale) {
	    var tickArguments = [],
	        tickValues = null,
	        tickFormat = null,
	        tickSizeInner = 6,
	        tickSizeOuter = 6,
	        tickPadding = 3;
	
	    function axis(context) {
	      var values = tickValues == null ? (scale.ticks ? scale.ticks.apply(scale, tickArguments) : scale.domain()) : tickValues,
	          format = tickFormat == null ? (scale.tickFormat ? scale.tickFormat.apply(scale, tickArguments) : identity$5) : tickFormat,
	          spacing = Math.max(tickSizeInner, 0) + tickPadding,
	          transform = orient === top || orient === bottom ? translateX : translateY,
	          range = scale.range(),
	          range0 = range[0] + 0.5,
	          range1 = range[range.length - 1] + 0.5,
	          position = (scale.bandwidth ? center : identity$5)(scale.copy()),
	          selection = context.selection ? context.selection() : context,
	          path = selection.selectAll(".domain").data([null]),
	          tick = selection.selectAll(".tick").data(values, scale).order(),
	          tickExit = tick.exit(),
	          tickEnter = tick.enter().append("g").attr("class", "tick"),
	          line = tick.select("line"),
	          text = tick.select("text"),
	          k = orient === top || orient === left ? -1 : 1,
	          x, y = orient === left || orient === right ? (x = "x", "y") : (x = "y", "x");
	
	      path = path.merge(path.enter().insert("path", ".tick")
	          .attr("class", "domain")
	          .attr("stroke", "#000"));
	
	      tick = tick.merge(tickEnter);
	
	      line = line.merge(tickEnter.append("line")
	          .attr("stroke", "#000")
	          .attr(x + "2", k * tickSizeInner)
	          .attr(y + "1", 0.5)
	          .attr(y + "2", 0.5));
	
	      text = text.merge(tickEnter.append("text")
	          .attr("fill", "#000")
	          .attr(x, k * spacing)
	          .attr(y, 0.5)
	          .attr("dy", orient === top ? "0em" : orient === bottom ? "0.71em" : "0.32em"));
	
	      if (context !== selection) {
	        path = path.transition(context);
	        tick = tick.transition(context);
	        line = line.transition(context);
	        text = text.transition(context);
	
	        tickExit = tickExit.transition(context)
	            .attr("opacity", epsilon$2)
	            .attr("transform", function(d) { return transform(position, this.parentNode.__axis || position, d); });
	
	        tickEnter
	            .attr("opacity", epsilon$2)
	            .attr("transform", function(d) { return transform(this.parentNode.__axis || position, position, d); });
	      }
	
	      tickExit.remove();
	
	      path
	          .attr("d", orient === left || orient == right
	              ? "M" + k * tickSizeOuter + "," + range0 + "H0.5V" + range1 + "H" + k * tickSizeOuter
	              : "M" + range0 + "," + k * tickSizeOuter + "V0.5H" + range1 + "V" + k * tickSizeOuter);
	
	      tick
	          .attr("opacity", 1)
	          .attr("transform", function(d) { return transform(position, position, d); });
	
	      line
	          .attr(x + "2", k * tickSizeInner);
	
	      text
	          .attr(x, k * spacing)
	          .text(format);
	
	      selection.filter(entering)
	          .attr("fill", "none")
	          .attr("font-size", 10)
	          .attr("font-family", "sans-serif")
	          .attr("text-anchor", orient === right ? "start" : orient === left ? "end" : "middle");
	
	      selection
	          .each(function() { this.__axis = position; });
	    }
	
	    axis.scale = function(_) {
	      return arguments.length ? (scale = _, axis) : scale;
	    };
	
	    axis.ticks = function() {
	      return tickArguments = slice$4.call(arguments), axis;
	    };
	
	    axis.tickArguments = function(_) {
	      return arguments.length ? (tickArguments = _ == null ? [] : slice$4.call(_), axis) : tickArguments.slice();
	    };
	
	    axis.tickValues = function(_) {
	      return arguments.length ? (tickValues = _ == null ? null : slice$4.call(_), axis) : tickValues && tickValues.slice();
	    };
	
	    axis.tickFormat = function(_) {
	      return arguments.length ? (tickFormat = _, axis) : tickFormat;
	    };
	
	    axis.tickSize = function(_) {
	      return arguments.length ? (tickSizeInner = tickSizeOuter = +_, axis) : tickSizeInner;
	    };
	
	    axis.tickSizeInner = function(_) {
	      return arguments.length ? (tickSizeInner = +_, axis) : tickSizeInner;
	    };
	
	    axis.tickSizeOuter = function(_) {
	      return arguments.length ? (tickSizeOuter = +_, axis) : tickSizeOuter;
	    };
	
	    axis.tickPadding = function(_) {
	      return arguments.length ? (tickPadding = +_, axis) : tickPadding;
	    };
	
	    return axis;
	  }
	
	  function axisTop(scale) {
	    return axis(top, scale);
	  }
	
	  function axisRight(scale) {
	    return axis(right, scale);
	  }
	
	  function axisBottom(scale) {
	    return axis(bottom, scale);
	  }
	
	  function axisLeft(scale) {
	    return axis(left, scale);
	  }
	
	  function defaultSeparation(a, b) {
	    return a.parent === b.parent ? 1 : 2;
	  }
	
	  function meanX(children) {
	    return children.reduce(meanXReduce, 0) / children.length;
	  }
	
	  function meanXReduce(x, c) {
	    return x + c.x;
	  }
	
	  function maxY(children) {
	    return 1 + children.reduce(maxYReduce, 0);
	  }
	
	  function maxYReduce(y, c) {
	    return Math.max(y, c.y);
	  }
	
	  function leafLeft(node) {
	    var children;
	    while (children = node.children) node = children[0];
	    return node;
	  }
	
	  function leafRight(node) {
	    var children;
	    while (children = node.children) node = children[children.length - 1];
	    return node;
	  }
	
	  function cluster() {
	    var separation = defaultSeparation,
	        dx = 1,
	        dy = 1,
	        nodeSize = false;
	
	    function cluster(root) {
	      var previousNode,
	          x = 0;
	
	      // First walk, computing the initial x & y values.
	      root.eachAfter(function(node) {
	        var children = node.children;
	        if (children) {
	          node.x = meanX(children);
	          node.y = maxY(children);
	        } else {
	          node.x = previousNode ? x += separation(node, previousNode) : 0;
	          node.y = 0;
	          previousNode = node;
	        }
	      });
	
	      var left = leafLeft(root),
	          right = leafRight(root),
	          x0 = left.x - separation(left, right) / 2,
	          x1 = right.x + separation(right, left) / 2;
	
	      // Second walk, normalizing x & y to the desired size.
	      return root.eachAfter(nodeSize ? function(node) {
	        node.x = (node.x - root.x) * dx;
	        node.y = (root.y - node.y) * dy;
	      } : function(node) {
	        node.x = (node.x - x0) / (x1 - x0) * dx;
	        node.y = (1 - (root.y ? node.y / root.y : 1)) * dy;
	      });
	    }
	
	    cluster.separation = function(x) {
	      return arguments.length ? (separation = x, cluster) : separation;
	    };
	
	    cluster.size = function(x) {
	      return arguments.length ? (nodeSize = false, dx = +x[0], dy = +x[1], cluster) : (nodeSize ? null : [dx, dy]);
	    };
	
	    cluster.nodeSize = function(x) {
	      return arguments.length ? (nodeSize = true, dx = +x[0], dy = +x[1], cluster) : (nodeSize ? [dx, dy] : null);
	    };
	
	    return cluster;
	  }
	
	  function node_each(callback) {
	    var node = this, current, next = [node], children, i, n;
	    do {
	      current = next.reverse(), next = [];
	      while (node = current.pop()) {
	        callback(node), children = node.children;
	        if (children) for (i = 0, n = children.length; i < n; ++i) {
	          next.push(children[i]);
	        }
	      }
	    } while (next.length);
	    return this;
	  }
	
	  function node_eachBefore(callback) {
	    var node = this, nodes = [node], children, i;
	    while (node = nodes.pop()) {
	      callback(node), children = node.children;
	      if (children) for (i = children.length - 1; i >= 0; --i) {
	        nodes.push(children[i]);
	      }
	    }
	    return this;
	  }
	
	  function node_eachAfter(callback) {
	    var node = this, nodes = [node], next = [], children, i, n;
	    while (node = nodes.pop()) {
	      next.push(node), children = node.children;
	      if (children) for (i = 0, n = children.length; i < n; ++i) {
	        nodes.push(children[i]);
	      }
	    }
	    while (node = next.pop()) {
	      callback(node);
	    }
	    return this;
	  }
	
	  function node_sum(value) {
	    return this.eachAfter(function(node) {
	      var sum = +value(node.data) || 0,
	          children = node.children,
	          i = children && children.length;
	      while (--i >= 0) sum += children[i].value;
	      node.value = sum;
	    });
	  }
	
	  function node_sort(compare) {
	    return this.eachBefore(function(node) {
	      if (node.children) {
	        node.children.sort(compare);
	      }
	    });
	  }
	
	  function node_path(end) {
	    var start = this,
	        ancestor = leastCommonAncestor(start, end),
	        nodes = [start];
	    while (start !== ancestor) {
	      start = start.parent;
	      nodes.push(start);
	    }
	    var k = nodes.length;
	    while (end !== ancestor) {
	      nodes.splice(k, 0, end);
	      end = end.parent;
	    }
	    return nodes;
	  }
	
	  function leastCommonAncestor(a, b) {
	    if (a === b) return a;
	    var aNodes = a.ancestors(),
	        bNodes = b.ancestors(),
	        c = null;
	    a = aNodes.pop();
	    b = bNodes.pop();
	    while (a === b) {
	      c = a;
	      a = aNodes.pop();
	      b = bNodes.pop();
	    }
	    return c;
	  }
	
	  function node_ancestors() {
	    var node = this, nodes = [node];
	    while (node = node.parent) {
	      nodes.push(node);
	    }
	    return nodes;
	  }
	
	  function node_descendants() {
	    var nodes = [];
	    this.each(function(node) {
	      nodes.push(node);
	    });
	    return nodes;
	  }
	
	  function node_leaves() {
	    var leaves = [];
	    this.eachBefore(function(node) {
	      if (!node.children) {
	        leaves.push(node);
	      }
	    });
	    return leaves;
	  }
	
	  function node_links() {
	    var root = this, links = [];
	    root.each(function(node) {
	      if (node !== root) { // Don’t include the root’s parent, if any.
	        links.push({source: node.parent, target: node});
	      }
	    });
	    return links;
	  }
	
	  function hierarchy(data, children) {
	    var root = new Node(data),
	        valued = +data.value && (root.value = data.value),
	        node,
	        nodes = [root],
	        child,
	        childs,
	        i,
	        n;
	
	    if (children == null) children = defaultChildren;
	
	    while (node = nodes.pop()) {
	      if (valued) node.value = +node.data.value;
	      if ((childs = children(node.data)) && (n = childs.length)) {
	        node.children = new Array(n);
	        for (i = n - 1; i >= 0; --i) {
	          nodes.push(child = node.children[i] = new Node(childs[i]));
	          child.parent = node;
	          child.depth = node.depth + 1;
	        }
	      }
	    }
	
	    return root.eachBefore(computeHeight);
	  }
	
	  function node_copy() {
	    return hierarchy(this).eachBefore(copyData);
	  }
	
	  function defaultChildren(d) {
	    return d.children;
	  }
	
	  function copyData(node) {
	    node.data = node.data.data;
	  }
	
	  function computeHeight(node) {
	    var height = 0;
	    do node.height = height;
	    while ((node = node.parent) && (node.height < ++height));
	  }
	
	  function Node(data) {
	    this.data = data;
	    this.depth =
	    this.height = 0;
	    this.parent = null;
	  }
	
	  Node.prototype = hierarchy.prototype = {
	    constructor: Node,
	    each: node_each,
	    eachAfter: node_eachAfter,
	    eachBefore: node_eachBefore,
	    sum: node_sum,
	    sort: node_sort,
	    path: node_path,
	    ancestors: node_ancestors,
	    descendants: node_descendants,
	    leaves: node_leaves,
	    links: node_links,
	    copy: node_copy
	  };
	
	  function Node$2(value) {
	    this._ = value;
	    this.next = null;
	  }
	
	  function shuffle$1(array) {
	    var i,
	        n = (array = array.slice()).length,
	        head = null,
	        node = head;
	
	    while (n) {
	      var next = new Node$2(array[n - 1]);
	      if (node) node = node.next = next;
	      else node = head = next;
	      array[i] = array[--n];
	    }
	
	    return {
	      head: head,
	      tail: node
	    };
	  }
	
	  function enclose(circles) {
	    return encloseN(shuffle$1(circles), []);
	  }
	
	  function encloses(a, b) {
	    var dx = b.x - a.x,
	        dy = b.y - a.y,
	        dr = a.r - b.r;
	    return dr * dr + 1e-6 > dx * dx + dy * dy;
	  }
	
	  // Returns the smallest circle that contains circles L and intersects circles B.
	  function encloseN(L, B) {
	    var circle,
	        l0 = null,
	        l1 = L.head,
	        l2,
	        p1;
	
	    switch (B.length) {
	      case 1: circle = enclose1(B[0]); break;
	      case 2: circle = enclose2(B[0], B[1]); break;
	      case 3: circle = enclose3(B[0], B[1], B[2]); break;
	    }
	
	    while (l1) {
	      p1 = l1._, l2 = l1.next;
	      if (!circle || !encloses(circle, p1)) {
	
	        // Temporarily truncate L before l1.
	        if (l0) L.tail = l0, l0.next = null;
	        else L.head = L.tail = null;
	
	        B.push(p1);
	        circle = encloseN(L, B); // Note: reorders L!
	        B.pop();
	
	        // Move l1 to the front of L and reconnect the truncated list L.
	        if (L.head) l1.next = L.head, L.head = l1;
	        else l1.next = null, L.head = L.tail = l1;
	        l0 = L.tail, l0.next = l2;
	
	      } else {
	        l0 = l1;
	      }
	      l1 = l2;
	    }
	
	    L.tail = l0;
	    return circle;
	  }
	
	  function enclose1(a) {
	    return {
	      x: a.x,
	      y: a.y,
	      r: a.r
	    };
	  }
	
	  function enclose2(a, b) {
	    var x1 = a.x, y1 = a.y, r1 = a.r,
	        x2 = b.x, y2 = b.y, r2 = b.r,
	        x21 = x2 - x1, y21 = y2 - y1, r21 = r2 - r1,
	        l = Math.sqrt(x21 * x21 + y21 * y21);
	    return {
	      x: (x1 + x2 + x21 / l * r21) / 2,
	      y: (y1 + y2 + y21 / l * r21) / 2,
	      r: (l + r1 + r2) / 2
	    };
	  }
	
	  function enclose3(a, b, c) {
	    var x1 = a.x, y1 = a.y, r1 = a.r,
	        x2 = b.x, y2 = b.y, r2 = b.r,
	        x3 = c.x, y3 = c.y, r3 = c.r,
	        a2 = 2 * (x1 - x2),
	        b2 = 2 * (y1 - y2),
	        c2 = 2 * (r2 - r1),
	        d2 = x1 * x1 + y1 * y1 - r1 * r1 - x2 * x2 - y2 * y2 + r2 * r2,
	        a3 = 2 * (x1 - x3),
	        b3 = 2 * (y1 - y3),
	        c3 = 2 * (r3 - r1),
	        d3 = x1 * x1 + y1 * y1 - r1 * r1 - x3 * x3 - y3 * y3 + r3 * r3,
	        ab = a3 * b2 - a2 * b3,
	        xa = (b2 * d3 - b3 * d2) / ab - x1,
	        xb = (b3 * c2 - b2 * c3) / ab,
	        ya = (a3 * d2 - a2 * d3) / ab - y1,
	        yb = (a2 * c3 - a3 * c2) / ab,
	        A = xb * xb + yb * yb - 1,
	        B = 2 * (xa * xb + ya * yb + r1),
	        C = xa * xa + ya * ya - r1 * r1,
	        r = (-B - Math.sqrt(B * B - 4 * A * C)) / (2 * A);
	    return {
	      x: xa + xb * r + x1,
	      y: ya + yb * r + y1,
	      r: r
	    };
	  }
	
	  function place(a, b, c) {
	    var ax = a.x,
	        ay = a.y,
	        da = b.r + c.r,
	        db = a.r + c.r,
	        dx = b.x - ax,
	        dy = b.y - ay,
	        dc = dx * dx + dy * dy;
	    if (dc) {
	      var x = 0.5 + ((db *= db) - (da *= da)) / (2 * dc),
	          y = Math.sqrt(Math.max(0, 2 * da * (db + dc) - (db -= dc) * db - da * da)) / (2 * dc);
	      c.x = ax + x * dx + y * dy;
	      c.y = ay + x * dy - y * dx;
	    } else {
	      c.x = ax + db;
	      c.y = ay;
	    }
	  }
	
	  function intersects(a, b) {
	    var dx = b.x - a.x,
	        dy = b.y - a.y,
	        dr = a.r + b.r;
	    return dr * dr > dx * dx + dy * dy;
	  }
	
	  function distance2(circle, x, y) {
	    var dx = circle.x - x,
	        dy = circle.y - y;
	    return dx * dx + dy * dy;
	  }
	
	  function Node$1(circle) {
	    this._ = circle;
	    this.next = null;
	    this.previous = null;
	  }
	
	  function packEnclose(circles) {
	    if (!(n = circles.length)) return 0;
	
	    var a, b, c, n;
	
	    // Place the first circle.
	    a = circles[0], a.x = 0, a.y = 0;
	    if (!(n > 1)) return a.r;
	
	    // Place the second circle.
	    b = circles[1], a.x = -b.r, b.x = a.r, b.y = 0;
	    if (!(n > 2)) return a.r + b.r;
	
	    // Place the third circle.
	    place(b, a, c = circles[2]);
	
	    // Initialize the weighted centroid.
	    var aa = a.r * a.r,
	        ba = b.r * b.r,
	        ca = c.r * c.r,
	        oa = aa + ba + ca,
	        ox = aa * a.x + ba * b.x + ca * c.x,
	        oy = aa * a.y + ba * b.y + ca * c.y,
	        cx, cy, i, j, k, sj, sk;
	
	    // Initialize the front-chain using the first three circles a, b and c.
	    a = new Node$1(a), b = new Node$1(b), c = new Node$1(c);
	    a.next = c.previous = b;
	    b.next = a.previous = c;
	    c.next = b.previous = a;
	
	    // Attempt to place each remaining circle…
	    pack: for (i = 3; i < n; ++i) {
	      place(a._, b._, c = circles[i]), c = new Node$1(c);
	
	      // If there are only three elements in the front-chain…
	      if ((k = a.previous) === (j = b.next)) {
	        // If the new circle intersects the third circle,
	        // rotate the front chain to try the next position.
	        if (intersects(j._, c._)) {
	          a = b, b = j, --i;
	          continue pack;
	        }
	      }
	
	      // Find the closest intersecting circle on the front-chain, if any.
	      else {
	        sj = j._.r, sk = k._.r;
	        do {
	          if (sj <= sk) {
	            if (intersects(j._, c._)) {
	              b = j, a.next = b, b.previous = a, --i;
	              continue pack;
	            }
	            j = j.next, sj += j._.r;
	          } else {
	            if (intersects(k._, c._)) {
	              a = k, a.next = b, b.previous = a, --i;
	              continue pack;
	            }
	            k = k.previous, sk += k._.r;
	          }
	        } while (j !== k.next);
	      }
	
	      // Success! Insert the new circle c between a and b.
	      c.previous = a, c.next = b, a.next = b.previous = b = c;
	
	      // Update the weighted centroid.
	      oa += ca = c._.r * c._.r;
	      ox += ca * c._.x;
	      oy += ca * c._.y;
	
	      // Compute the new closest circle a to centroid.
	      aa = distance2(a._, cx = ox / oa, cy = oy / oa);
	      while ((c = c.next) !== b) {
	        if ((ca = distance2(c._, cx, cy)) < aa) {
	          a = c, aa = ca;
	        }
	      }
	      b = a.next;
	    }
	
	    // Compute the enclosing circle of the front chain.
	    a = [b._], c = b; while ((c = c.next) !== b) a.push(c._); c = enclose(a);
	
	    // Translate the circles to put the enclosing circle around the origin.
	    for (i = 0; i < n; ++i) a = circles[i], a.x -= c.x, a.y -= c.y;
	
	    return c.r;
	  }
	
	  function siblings(circles) {
	    packEnclose(circles);
	    return circles;
	  }
	
	  function optional(f) {
	    return f == null ? null : required(f);
	  }
	
	  function required(f) {
	    if (typeof f !== "function") throw new Error;
	    return f;
	  }
	
	  function constantZero() {
	    return 0;
	  }
	
	  function constant$5(x) {
	    return function() {
	      return x;
	    };
	  }
	
	  function defaultRadius(d) {
	    return Math.sqrt(d.value);
	  }
	
	  function index() {
	    var radius = null,
	        dx = 1,
	        dy = 1,
	        padding = constantZero;
	
	    function pack(root) {
	      root.x = dx / 2, root.y = dy / 2;
	      if (radius) {
	        root.eachBefore(radiusLeaf(radius))
	            .eachAfter(packChildren(padding, 0.5))
	            .eachBefore(translateChild(1));
	      } else {
	        root.eachBefore(radiusLeaf(defaultRadius))
	            .eachAfter(packChildren(constantZero, 1))
	            .eachAfter(packChildren(padding, root.r / Math.min(dx, dy)))
	            .eachBefore(translateChild(Math.min(dx, dy) / (2 * root.r)));
	      }
	      return root;
	    }
	
	    pack.radius = function(x) {
	      return arguments.length ? (radius = optional(x), pack) : radius;
	    };
	
	    pack.size = function(x) {
	      return arguments.length ? (dx = +x[0], dy = +x[1], pack) : [dx, dy];
	    };
	
	    pack.padding = function(x) {
	      return arguments.length ? (padding = typeof x === "function" ? x : constant$5(+x), pack) : padding;
	    };
	
	    return pack;
	  }
	
	  function radiusLeaf(radius) {
	    return function(node) {
	      if (!node.children) {
	        node.r = Math.max(0, +radius(node) || 0);
	      }
	    };
	  }
	
	  function packChildren(padding, k) {
	    return function(node) {
	      if (children = node.children) {
	        var children,
	            i,
	            n = children.length,
	            r = padding(node) * k || 0,
	            e;
	
	        if (r) for (i = 0; i < n; ++i) children[i].r += r;
	        e = packEnclose(children);
	        if (r) for (i = 0; i < n; ++i) children[i].r -= r;
	        node.r = e + r;
	      }
	    };
	  }
	
	  function translateChild(k) {
	    return function(node) {
	      var parent = node.parent;
	      node.r *= k;
	      if (parent) {
	        node.x = parent.x + k * node.x;
	        node.y = parent.y + k * node.y;
	      }
	    };
	  }
	
	  function roundNode(node) {
	    node.x0 = Math.round(node.x0);
	    node.y0 = Math.round(node.y0);
	    node.x1 = Math.round(node.x1);
	    node.y1 = Math.round(node.y1);
	  }
	
	  function treemapDice(parent, x0, y0, x1, y1) {
	    var nodes = parent.children,
	        node,
	        i = -1,
	        n = nodes.length,
	        k = parent.value && (x1 - x0) / parent.value;
	
	    while (++i < n) {
	      node = nodes[i], node.y0 = y0, node.y1 = y1;
	      node.x0 = x0, node.x1 = x0 += node.value * k;
	    }
	  }
	
	  function partition() {
	    var dx = 1,
	        dy = 1,
	        padding = 0,
	        round = false;
	
	    function partition(root) {
	      var n = root.height + 1;
	      root.x0 =
	      root.y0 = padding;
	      root.x1 = dx;
	      root.y1 = dy / n;
	      root.eachBefore(positionNode(dy, n));
	      if (round) root.eachBefore(roundNode);
	      return root;
	    }
	
	    function positionNode(dy, n) {
	      return function(node) {
	        if (node.children) {
	          treemapDice(node, node.x0, dy * (node.depth + 1) / n, node.x1, dy * (node.depth + 2) / n);
	        }
	        var x0 = node.x0,
	            y0 = node.y0,
	            x1 = node.x1 - padding,
	            y1 = node.y1 - padding;
	        if (x1 < x0) x0 = x1 = (x0 + x1) / 2;
	        if (y1 < y0) y0 = y1 = (y0 + y1) / 2;
	        node.x0 = x0;
	        node.y0 = y0;
	        node.x1 = x1;
	        node.y1 = y1;
	      };
	    }
	
	    partition.round = function(x) {
	      return arguments.length ? (round = !!x, partition) : round;
	    };
	
	    partition.size = function(x) {
	      return arguments.length ? (dx = +x[0], dy = +x[1], partition) : [dx, dy];
	    };
	
	    partition.padding = function(x) {
	      return arguments.length ? (padding = +x, partition) : padding;
	    };
	
	    return partition;
	  }
	
	var   keyPrefix$1 = "$";
	  var preroot = {depth: -1};
	  var ambiguous = {};
	  function defaultId(d) {
	    return d.id;
	  }
	
	  function defaultParentId(d) {
	    return d.parentId;
	  }
	
	  function stratify() {
	    var id = defaultId,
	        parentId = defaultParentId;
	
	    function stratify(data) {
	      var d,
	          i,
	          n = data.length,
	          root,
	          parent,
	          node,
	          nodes = new Array(n),
	          nodeId,
	          nodeKey,
	          nodeByKey = {};
	
	      for (i = 0; i < n; ++i) {
	        d = data[i], node = nodes[i] = new Node(d);
	        if ((nodeId = id(d, i, data)) != null && (nodeId += "")) {
	          nodeKey = keyPrefix$1 + (node.id = nodeId);
	          nodeByKey[nodeKey] = nodeKey in nodeByKey ? ambiguous : node;
	        }
	      }
	
	      for (i = 0; i < n; ++i) {
	        node = nodes[i], nodeId = parentId(data[i], i, data);
	        if (nodeId == null || !(nodeId += "")) {
	          if (root) throw new Error("multiple roots");
	          root = node;
	        } else {
	          parent = nodeByKey[keyPrefix$1 + nodeId];
	          if (!parent) throw new Error("missing: " + nodeId);
	          if (parent === ambiguous) throw new Error("ambiguous: " + nodeId);
	          if (parent.children) parent.children.push(node);
	          else parent.children = [node];
	          node.parent = parent;
	        }
	      }
	
	      if (!root) throw new Error("no root");
	      root.parent = preroot;
	      root.eachBefore(function(node) { node.depth = node.parent.depth + 1; --n; }).eachBefore(computeHeight);
	      root.parent = null;
	      if (n > 0) throw new Error("cycle");
	
	      return root;
	    }
	
	    stratify.id = function(x) {
	      return arguments.length ? (id = required(x), stratify) : id;
	    };
	
	    stratify.parentId = function(x) {
	      return arguments.length ? (parentId = required(x), stratify) : parentId;
	    };
	
	    return stratify;
	  }
	
	  function defaultSeparation$1(a, b) {
	    return a.parent === b.parent ? 1 : 2;
	  }
	
	  // function radialSeparation(a, b) {
	  //   return (a.parent === b.parent ? 1 : 2) / a.depth;
	  // }
	
	  // This function is used to traverse the left contour of a subtree (or
	  // subforest). It returns the successor of v on this contour. This successor is
	  // either given by the leftmost child of v or by the thread of v. The function
	  // returns null if and only if v is on the highest level of its subtree.
	  function nextLeft(v) {
	    var children = v.children;
	    return children ? children[0] : v.t;
	  }
	
	  // This function works analogously to nextLeft.
	  function nextRight(v) {
	    var children = v.children;
	    return children ? children[children.length - 1] : v.t;
	  }
	
	  // Shifts the current subtree rooted at w+. This is done by increasing
	  // prelim(w+) and mod(w+) by shift.
	  function moveSubtree(wm, wp, shift) {
	    var change = shift / (wp.i - wm.i);
	    wp.c -= change;
	    wp.s += shift;
	    wm.c += change;
	    wp.z += shift;
	    wp.m += shift;
	  }
	
	  // All other shifts, applied to the smaller subtrees between w- and w+, are
	  // performed by this function. To prepare the shifts, we have to adjust
	  // change(w+), shift(w+), and change(w-).
	  function executeShifts(v) {
	    var shift = 0,
	        change = 0,
	        children = v.children,
	        i = children.length,
	        w;
	    while (--i >= 0) {
	      w = children[i];
	      w.z += shift;
	      w.m += shift;
	      shift += w.s + (change += w.c);
	    }
	  }
	
	  // If vi-’s ancestor is a sibling of v, returns vi-’s ancestor. Otherwise,
	  // returns the specified (default) ancestor.
	  function nextAncestor(vim, v, ancestor) {
	    return vim.a.parent === v.parent ? vim.a : ancestor;
	  }
	
	  function TreeNode(node, i) {
	    this._ = node;
	    this.parent = null;
	    this.children = null;
	    this.A = null; // default ancestor
	    this.a = this; // ancestor
	    this.z = 0; // prelim
	    this.m = 0; // mod
	    this.c = 0; // change
	    this.s = 0; // shift
	    this.t = null; // thread
	    this.i = i; // number
	  }
	
	  TreeNode.prototype = Object.create(Node.prototype);
	
	  function treeRoot(root) {
	    var tree = new TreeNode(root, 0),
	        node,
	        nodes = [tree],
	        child,
	        children,
	        i,
	        n;
	
	    while (node = nodes.pop()) {
	      if (children = node._.children) {
	        node.children = new Array(n = children.length);
	        for (i = n - 1; i >= 0; --i) {
	          nodes.push(child = node.children[i] = new TreeNode(children[i], i));
	          child.parent = node;
	        }
	      }
	    }
	
	    (tree.parent = new TreeNode(null, 0)).children = [tree];
	    return tree;
	  }
	
	  // Node-link tree diagram using the Reingold-Tilford "tidy" algorithm
	  function tree() {
	    var separation = defaultSeparation$1,
	        dx = 1,
	        dy = 1,
	        nodeSize = null;
	
	    function tree(root) {
	      var t = treeRoot(root);
	
	      // Compute the layout using Buchheim et al.’s algorithm.
	      t.eachAfter(firstWalk), t.parent.m = -t.z;
	      t.eachBefore(secondWalk);
	
	      // If a fixed node size is specified, scale x and y.
	      if (nodeSize) root.eachBefore(sizeNode);
	
	      // If a fixed tree size is specified, scale x and y based on the extent.
	      // Compute the left-most, right-most, and depth-most nodes for extents.
	      else {
	        var left = root,
	            right = root,
	            bottom = root;
	        root.eachBefore(function(node) {
	          if (node.x < left.x) left = node;
	          if (node.x > right.x) right = node;
	          if (node.depth > bottom.depth) bottom = node;
	        });
	        var s = left === right ? 1 : separation(left, right) / 2,
	            tx = s - left.x,
	            kx = dx / (right.x + s + tx),
	            ky = dy / (bottom.depth || 1);
	        root.eachBefore(function(node) {
	          node.x = (node.x + tx) * kx;
	          node.y = node.depth * ky;
	        });
	      }
	
	      return root;
	    }
	
	    // Computes a preliminary x-coordinate for v. Before that, FIRST WALK is
	    // applied recursively to the children of v, as well as the function
	    // APPORTION. After spacing out the children by calling EXECUTE SHIFTS, the
	    // node v is placed to the midpoint of its outermost children.
	    function firstWalk(v) {
	      var children = v.children,
	          siblings = v.parent.children,
	          w = v.i ? siblings[v.i - 1] : null;
	      if (children) {
	        executeShifts(v);
	        var midpoint = (children[0].z + children[children.length - 1].z) / 2;
	        if (w) {
	          v.z = w.z + separation(v._, w._);
	          v.m = v.z - midpoint;
	        } else {
	          v.z = midpoint;
	        }
	      } else if (w) {
	        v.z = w.z + separation(v._, w._);
	      }
	      v.parent.A = apportion(v, w, v.parent.A || siblings[0]);
	    }
	
	    // Computes all real x-coordinates by summing up the modifiers recursively.
	    function secondWalk(v) {
	      v._.x = v.z + v.parent.m;
	      v.m += v.parent.m;
	    }
	
	    // The core of the algorithm. Here, a new subtree is combined with the
	    // previous subtrees. Threads are used to traverse the inside and outside
	    // contours of the left and right subtree up to the highest common level. The
	    // vertices used for the traversals are vi+, vi-, vo-, and vo+, where the
	    // superscript o means outside and i means inside, the subscript - means left
	    // subtree and + means right subtree. For summing up the modifiers along the
	    // contour, we use respective variables si+, si-, so-, and so+. Whenever two
	    // nodes of the inside contours conflict, we compute the left one of the
	    // greatest uncommon ancestors using the function ANCESTOR and call MOVE
	    // SUBTREE to shift the subtree and prepare the shifts of smaller subtrees.
	    // Finally, we add a new thread (if necessary).
	    function apportion(v, w, ancestor) {
	      if (w) {
	        var vip = v,
	            vop = v,
	            vim = w,
	            vom = vip.parent.children[0],
	            sip = vip.m,
	            sop = vop.m,
	            sim = vim.m,
	            som = vom.m,
	            shift;
	        while (vim = nextRight(vim), vip = nextLeft(vip), vim && vip) {
	          vom = nextLeft(vom);
	          vop = nextRight(vop);
	          vop.a = v;
	          shift = vim.z + sim - vip.z - sip + separation(vim._, vip._);
	          if (shift > 0) {
	            moveSubtree(nextAncestor(vim, v, ancestor), v, shift);
	            sip += shift;
	            sop += shift;
	          }
	          sim += vim.m;
	          sip += vip.m;
	          som += vom.m;
	          sop += vop.m;
	        }
	        if (vim && !nextRight(vop)) {
	          vop.t = vim;
	          vop.m += sim - sop;
	        }
	        if (vip && !nextLeft(vom)) {
	          vom.t = vip;
	          vom.m += sip - som;
	          ancestor = v;
	        }
	      }
	      return ancestor;
	    }
	
	    function sizeNode(node) {
	      node.x *= dx;
	      node.y = node.depth * dy;
	    }
	
	    tree.separation = function(x) {
	      return arguments.length ? (separation = x, tree) : separation;
	    };
	
	    tree.size = function(x) {
	      return arguments.length ? (nodeSize = false, dx = +x[0], dy = +x[1], tree) : (nodeSize ? null : [dx, dy]);
	    };
	
	    tree.nodeSize = function(x) {
	      return arguments.length ? (nodeSize = true, dx = +x[0], dy = +x[1], tree) : (nodeSize ? [dx, dy] : null);
	    };
	
	    return tree;
	  }
	
	  function treemapSlice(parent, x0, y0, x1, y1) {
	    var nodes = parent.children,
	        node,
	        i = -1,
	        n = nodes.length,
	        k = parent.value && (y1 - y0) / parent.value;
	
	    while (++i < n) {
	      node = nodes[i], node.x0 = x0, node.x1 = x1;
	      node.y0 = y0, node.y1 = y0 += node.value * k;
	    }
	  }
	
	  var phi = (1 + Math.sqrt(5)) / 2;
	
	  function squarifyRatio(ratio, parent, x0, y0, x1, y1) {
	    var rows = [],
	        nodes = parent.children,
	        row,
	        nodeValue,
	        i0 = 0,
	        i1,
	        n = nodes.length,
	        dx, dy,
	        value = parent.value,
	        sumValue,
	        minValue,
	        maxValue,
	        newRatio,
	        minRatio,
	        alpha,
	        beta;
	
	    while (i0 < n) {
	      dx = x1 - x0, dy = y1 - y0;
	      minValue = maxValue = sumValue = nodes[i0].value;
	      alpha = Math.max(dy / dx, dx / dy) / (value * ratio);
	      beta = sumValue * sumValue * alpha;
	      minRatio = Math.max(maxValue / beta, beta / minValue);
	
	      // Keep adding nodes while the aspect ratio maintains or improves.
	      for (i1 = i0 + 1; i1 < n; ++i1) {
	        sumValue += nodeValue = nodes[i1].value;
	        if (nodeValue < minValue) minValue = nodeValue;
	        if (nodeValue > maxValue) maxValue = nodeValue;
	        beta = sumValue * sumValue * alpha;
	        newRatio = Math.max(maxValue / beta, beta / minValue);
	        if (newRatio > minRatio) { sumValue -= nodeValue; break; }
	        minRatio = newRatio;
	      }
	
	      // Position and record the row orientation.
	      rows.push(row = {value: sumValue, dice: dx < dy, children: nodes.slice(i0, i1)});
	      if (row.dice) treemapDice(row, x0, y0, x1, value ? y0 += dy * sumValue / value : y1);
	      else treemapSlice(row, x0, y0, value ? x0 += dx * sumValue / value : x1, y1);
	      value -= sumValue, i0 = i1;
	    }
	
	    return rows;
	  }
	
	  var squarify = (function custom(ratio) {
	
	    function squarify(parent, x0, y0, x1, y1) {
	      squarifyRatio(ratio, parent, x0, y0, x1, y1);
	    }
	
	    squarify.ratio = function(x) {
	      return custom((x = +x) > 1 ? x : 1);
	    };
	
	    return squarify;
	  })(phi);
	
	  function index$1() {
	    var tile = squarify,
	        round = false,
	        dx = 1,
	        dy = 1,
	        paddingStack = [0],
	        paddingInner = constantZero,
	        paddingTop = constantZero,
	        paddingRight = constantZero,
	        paddingBottom = constantZero,
	        paddingLeft = constantZero;
	
	    function treemap(root) {
	      root.x0 =
	      root.y0 = 0;
	      root.x1 = dx;
	      root.y1 = dy;
	      root.eachBefore(positionNode);
	      paddingStack = [0];
	      if (round) root.eachBefore(roundNode);
	      return root;
	    }
	
	    function positionNode(node) {
	      var p = paddingStack[node.depth],
	          x0 = node.x0 + p,
	          y0 = node.y0 + p,
	          x1 = node.x1 - p,
	          y1 = node.y1 - p;
	      if (x1 < x0) x0 = x1 = (x0 + x1) / 2;
	      if (y1 < y0) y0 = y1 = (y0 + y1) / 2;
	      node.x0 = x0;
	      node.y0 = y0;
	      node.x1 = x1;
	      node.y1 = y1;
	      if (node.children) {
	        p = paddingStack[node.depth + 1] = paddingInner(node) / 2;
	        x0 += paddingLeft(node) - p;
	        y0 += paddingTop(node) - p;
	        x1 -= paddingRight(node) - p;
	        y1 -= paddingBottom(node) - p;
	        if (x1 < x0) x0 = x1 = (x0 + x1) / 2;
	        if (y1 < y0) y0 = y1 = (y0 + y1) / 2;
	        tile(node, x0, y0, x1, y1);
	      }
	    }
	
	    treemap.round = function(x) {
	      return arguments.length ? (round = !!x, treemap) : round;
	    };
	
	    treemap.size = function(x) {
	      return arguments.length ? (dx = +x[0], dy = +x[1], treemap) : [dx, dy];
	    };
	
	    treemap.tile = function(x) {
	      return arguments.length ? (tile = required(x), treemap) : tile;
	    };
	
	    treemap.padding = function(x) {
	      return arguments.length ? treemap.paddingInner(x).paddingOuter(x) : treemap.paddingInner();
	    };
	
	    treemap.paddingInner = function(x) {
	      return arguments.length ? (paddingInner = typeof x === "function" ? x : constant$5(+x), treemap) : paddingInner;
	    };
	
	    treemap.paddingOuter = function(x) {
	      return arguments.length ? treemap.paddingTop(x).paddingRight(x).paddingBottom(x).paddingLeft(x) : treemap.paddingTop();
	    };
	
	    treemap.paddingTop = function(x) {
	      return arguments.length ? (paddingTop = typeof x === "function" ? x : constant$5(+x), treemap) : paddingTop;
	    };
	
	    treemap.paddingRight = function(x) {
	      return arguments.length ? (paddingRight = typeof x === "function" ? x : constant$5(+x), treemap) : paddingRight;
	    };
	
	    treemap.paddingBottom = function(x) {
	      return arguments.length ? (paddingBottom = typeof x === "function" ? x : constant$5(+x), treemap) : paddingBottom;
	    };
	
	    treemap.paddingLeft = function(x) {
	      return arguments.length ? (paddingLeft = typeof x === "function" ? x : constant$5(+x), treemap) : paddingLeft;
	    };
	
	    return treemap;
	  }
	
	  function binary(parent, x0, y0, x1, y1) {
	    var nodes = parent.children,
	        i, n = nodes.length,
	        sum, sums = new Array(n + 1);
	
	    for (sums[0] = sum = i = 0; i < n; ++i) {
	      sums[i + 1] = sum += nodes[i].value;
	    }
	
	    partition(0, n, parent.value, x0, y0, x1, y1);
	
	    function partition(i, j, value, x0, y0, x1, y1) {
	      if (i >= j - 1) {
	        var node = nodes[i];
	        node.x0 = x0, node.y0 = y0;
	        node.x1 = x1, node.y1 = y1;
	        return;
	      }
	
	      var valueOffset = sums[i],
	          valueTarget = (value / 2) + valueOffset,
	          k = i + 1,
	          hi = j - 1;
	
	      while (k < hi) {
	        var mid = k + hi >>> 1;
	        if (sums[mid] < valueTarget) k = mid + 1;
	        else hi = mid;
	      }
	
	      var valueLeft = sums[k] - valueOffset,
	          valueRight = value - valueLeft;
	
	      if ((y1 - y0) > (x1 - x0)) {
	        var yk = (y0 * valueRight + y1 * valueLeft) / value;
	        partition(i, k, valueLeft, x0, y0, x1, yk);
	        partition(k, j, valueRight, x0, yk, x1, y1);
	      } else {
	        var xk = (x0 * valueRight + x1 * valueLeft) / value;
	        partition(i, k, valueLeft, x0, y0, xk, y1);
	        partition(k, j, valueRight, xk, y0, x1, y1);
	      }
	    }
	  }
	
	  function sliceDice(parent, x0, y0, x1, y1) {
	    (parent.depth & 1 ? treemapSlice : treemapDice)(parent, x0, y0, x1, y1);
	  }
	
	  var resquarify = (function custom(ratio) {
	
	    function resquarify(parent, x0, y0, x1, y1) {
	      if ((rows = parent._squarify) && (rows.ratio === ratio)) {
	        var rows,
	            row,
	            nodes,
	            i,
	            j = -1,
	            n,
	            m = rows.length,
	            value = parent.value;
	
	        while (++j < m) {
	          row = rows[j], nodes = row.children;
	          for (i = row.value = 0, n = nodes.length; i < n; ++i) row.value += nodes[i].value;
	          if (row.dice) treemapDice(row, x0, y0, x1, y0 += (y1 - y0) * row.value / value);
	          else treemapSlice(row, x0, y0, x0 += (x1 - x0) * row.value / value, y1);
	          value -= row.value;
	        }
	      } else {
	        parent._squarify = rows = squarifyRatio(ratio, parent, x0, y0, x1, y1);
	        rows.ratio = ratio;
	      }
	    }
	
	    resquarify.ratio = function(x) {
	      return custom((x = +x) > 1 ? x : 1);
	    };
	
	    return resquarify;
	  })(phi);
	
	  function center$1(x, y) {
	    var nodes;
	
	    if (x == null) x = 0;
	    if (y == null) y = 0;
	
	    function force() {
	      var i,
	          n = nodes.length,
	          node,
	          sx = 0,
	          sy = 0;
	
	      for (i = 0; i < n; ++i) {
	        node = nodes[i], sx += node.x, sy += node.y;
	      }
	
	      for (sx = sx / n - x, sy = sy / n - y, i = 0; i < n; ++i) {
	        node = nodes[i], node.x -= sx, node.y -= sy;
	      }
	    }
	
	    force.initialize = function(_) {
	      nodes = _;
	    };
	
	    force.x = function(_) {
	      return arguments.length ? (x = +_, force) : x;
	    };
	
	    force.y = function(_) {
	      return arguments.length ? (y = +_, force) : y;
	    };
	
	    return force;
	  }
	
	  function constant$6(x) {
	    return function() {
	      return x;
	    };
	  }
	
	  function jiggle() {
	    return (Math.random() - 0.5) * 1e-6;
	  }
	
	  function x$1(d) {
	    return d.x + d.vx;
	  }
	
	  function y$1(d) {
	    return d.y + d.vy;
	  }
	
	  function collide(radius) {
	    var nodes,
	        radii,
	        strength = 1,
	        iterations = 1;
	
	    if (typeof radius !== "function") radius = constant$6(radius == null ? 1 : +radius);
	
	    function force() {
	      var i, n = nodes.length,
	          tree,
	          node,
	          xi,
	          yi,
	          ri,
	          ri2;
	
	      for (var k = 0; k < iterations; ++k) {
	        tree = quadtree(nodes, x$1, y$1).visitAfter(prepare);
	        for (i = 0; i < n; ++i) {
	          node = nodes[i];
	          ri = radii[i], ri2 = ri * ri;
	          xi = node.x + node.vx;
	          yi = node.y + node.vy;
	          tree.visit(apply);
	        }
	      }
	
	      function apply(quad, x0, y0, x1, y1) {
	        var data = quad.data, rj = quad.r, r = ri + rj;
	        if (data) {
	          if (data.index > i) {
	            var x = xi - data.x - data.vx,
	                y = yi - data.y - data.vy,
	                l = x * x + y * y;
	            if (l < r * r) {
	              if (x === 0) x = jiggle(), l += x * x;
	              if (y === 0) y = jiggle(), l += y * y;
	              l = (r - (l = Math.sqrt(l))) / l * strength;
	              node.vx += (x *= l) * (r = (rj *= rj) / (ri2 + rj));
	              node.vy += (y *= l) * r;
	              data.vx -= x * (r = 1 - r);
	              data.vy -= y * r;
	            }
	          }
	          return;
	        }
	        return x0 > xi + r || x1 < xi - r || y0 > yi + r || y1 < yi - r;
	      }
	    }
	
	    function prepare(quad) {
	      if (quad.data) return quad.r = radii[quad.data.index];
	      for (var i = quad.r = 0; i < 4; ++i) {
	        if (quad[i] && quad[i].r > quad.r) {
	          quad.r = quad[i].r;
	        }
	      }
	    }
	
	    force.initialize = function(_) {
	      var i, n = (nodes = _).length; radii = new Array(n);
	      for (i = 0; i < n; ++i) radii[i] = +radius(nodes[i], i, nodes);
	    };
	
	    force.iterations = function(_) {
	      return arguments.length ? (iterations = +_, force) : iterations;
	    };
	
	    force.strength = function(_) {
	      return arguments.length ? (strength = +_, force) : strength;
	    };
	
	    force.radius = function(_) {
	      return arguments.length ? (radius = typeof _ === "function" ? _ : constant$6(+_), force) : radius;
	    };
	
	    return force;
	  }
	
	  function index$2(d, i) {
	    return i;
	  }
	
	  function link(links) {
	    var id = index$2,
	        strength = defaultStrength,
	        strengths,
	        distance = constant$6(30),
	        distances,
	        nodes,
	        count,
	        bias,
	        iterations = 1;
	
	    if (links == null) links = [];
	
	    function defaultStrength(link) {
	      return 1 / Math.min(count[link.source.index], count[link.target.index]);
	    }
	
	    function force(alpha) {
	      for (var k = 0, n = links.length; k < iterations; ++k) {
	        for (var i = 0, link, source, target, x, y, l, b; i < n; ++i) {
	          link = links[i], source = link.source, target = link.target;
	          x = target.x + target.vx - source.x - source.vx || jiggle();
	          y = target.y + target.vy - source.y - source.vy || jiggle();
	          l = Math.sqrt(x * x + y * y);
	          l = (l - distances[i]) / l * alpha * strengths[i];
	          x *= l, y *= l;
	          target.vx -= x * (b = bias[i]);
	          target.vy -= y * b;
	          source.vx += x * (b = 1 - b);
	          source.vy += y * b;
	        }
	      }
	    }
	
	    function initialize() {
	      if (!nodes) return;
	
	      var i,
	          n = nodes.length,
	          m = links.length,
	          nodeById = map$1(nodes, id),
	          link;
	
	      for (i = 0, count = new Array(n); i < n; ++i) {
	        count[i] = 0;
	      }
	
	      for (i = 0; i < m; ++i) {
	        link = links[i], link.index = i;
	        if (typeof link.source !== "object") link.source = nodeById.get(link.source);
	        if (typeof link.target !== "object") link.target = nodeById.get(link.target);
	        ++count[link.source.index], ++count[link.target.index];
	      }
	
	      for (i = 0, bias = new Array(m); i < m; ++i) {
	        link = links[i], bias[i] = count[link.source.index] / (count[link.source.index] + count[link.target.index]);
	      }
	
	      strengths = new Array(m), initializeStrength();
	      distances = new Array(m), initializeDistance();
	    }
	
	    function initializeStrength() {
	      if (!nodes) return;
	
	      for (var i = 0, n = links.length; i < n; ++i) {
	        strengths[i] = +strength(links[i], i, links);
	      }
	    }
	
	    function initializeDistance() {
	      if (!nodes) return;
	
	      for (var i = 0, n = links.length; i < n; ++i) {
	        distances[i] = +distance(links[i], i, links);
	      }
	    }
	
	    force.initialize = function(_) {
	      nodes = _;
	      initialize();
	    };
	
	    force.links = function(_) {
	      return arguments.length ? (links = _, initialize(), force) : links;
	    };
	
	    force.id = function(_) {
	      return arguments.length ? (id = _, force) : id;
	    };
	
	    force.iterations = function(_) {
	      return arguments.length ? (iterations = +_, force) : iterations;
	    };
	
	    force.strength = function(_) {
	      return arguments.length ? (strength = typeof _ === "function" ? _ : constant$6(+_), initializeStrength(), force) : strength;
	    };
	
	    force.distance = function(_) {
	      return arguments.length ? (distance = typeof _ === "function" ? _ : constant$6(+_), initializeDistance(), force) : distance;
	    };
	
	    return force;
	  }
	
	  function x$2(d) {
	    return d.x;
	  }
	
	  function y$2(d) {
	    return d.y;
	  }
	
	  var initialRadius = 10;
	  var initialAngle = Math.PI * (3 - Math.sqrt(5));
	  function simulation(nodes) {
	    var simulation,
	        alpha = 1,
	        alphaMin = 0.001,
	        alphaDecay = 1 - Math.pow(alphaMin, 1 / 300),
	        alphaTarget = 0,
	        velocityDecay = 0.6,
	        forces = map$1(),
	        stepper = timer(step),
	        event = dispatch("tick", "end");
	
	    if (nodes == null) nodes = [];
	
	    function step() {
	      tick();
	      event.call("tick", simulation);
	      if (alpha < alphaMin) {
	        stepper.stop();
	        event.call("end", simulation);
	      }
	    }
	
	    function tick() {
	      var i, n = nodes.length, node;
	
	      alpha += (alphaTarget - alpha) * alphaDecay;
	
	      forces.each(function(force) {
	        force(alpha);
	      });
	
	      for (i = 0; i < n; ++i) {
	        node = nodes[i];
	        if (node.fx == null) node.x += node.vx *= velocityDecay;
	        else node.x = node.fx, node.vx = 0;
	        if (node.fy == null) node.y += node.vy *= velocityDecay;
	        else node.y = node.fy, node.vy = 0;
	      }
	    }
	
	    function initializeNodes() {
	      for (var i = 0, n = nodes.length, node; i < n; ++i) {
	        node = nodes[i], node.index = i;
	        if (isNaN(node.x) || isNaN(node.y)) {
	          var radius = initialRadius * Math.sqrt(i), angle = i * initialAngle;
	          node.x = radius * Math.cos(angle);
	          node.y = radius * Math.sin(angle);
	        }
	        if (isNaN(node.vx) || isNaN(node.vy)) {
	          node.vx = node.vy = 0;
	        }
	      }
	    }
	
	    function initializeForce(force) {
	      if (force.initialize) force.initialize(nodes);
	      return force;
	    }
	
	    initializeNodes();
	
	    return simulation = {
	      tick: tick,
	
	      restart: function() {
	        return stepper.restart(step), simulation;
	      },
	
	      stop: function() {
	        return stepper.stop(), simulation;
	      },
	
	      nodes: function(_) {
	        return arguments.length ? (nodes = _, initializeNodes(), forces.each(initializeForce), simulation) : nodes;
	      },
	
	      alpha: function(_) {
	        return arguments.length ? (alpha = +_, simulation) : alpha;
	      },
	
	      alphaMin: function(_) {
	        return arguments.length ? (alphaMin = +_, simulation) : alphaMin;
	      },
	
	      alphaDecay: function(_) {
	        return arguments.length ? (alphaDecay = +_, simulation) : +alphaDecay;
	      },
	
	      alphaTarget: function(_) {
	        return arguments.length ? (alphaTarget = +_, simulation) : alphaTarget;
	      },
	
	      velocityDecay: function(_) {
	        return arguments.length ? (velocityDecay = 1 - _, simulation) : 1 - velocityDecay;
	      },
	
	      force: function(name, _) {
	        return arguments.length > 1 ? ((_ == null ? forces.remove(name) : forces.set(name, initializeForce(_))), simulation) : forces.get(name);
	      },
	
	      find: function(x, y, radius) {
	        var i = 0,
	            n = nodes.length,
	            dx,
	            dy,
	            d2,
	            node,
	            closest;
	
	        if (radius == null) radius = Infinity;
	        else radius *= radius;
	
	        for (i = 0; i < n; ++i) {
	          node = nodes[i];
	          dx = x - node.x;
	          dy = y - node.y;
	          d2 = dx * dx + dy * dy;
	          if (d2 < radius) closest = node, radius = d2;
	        }
	
	        return closest;
	      },
	
	      on: function(name, _) {
	        return arguments.length > 1 ? (event.on(name, _), simulation) : event.on(name);
	      }
	    };
	  }
	
	  function manyBody() {
	    var nodes,
	        node,
	        alpha,
	        strength = constant$6(-30),
	        strengths,
	        distanceMin2 = 1,
	        distanceMax2 = Infinity,
	        theta2 = 0.81;
	
	    function force(_) {
	      var i, n = nodes.length, tree = quadtree(nodes, x$2, y$2).visitAfter(accumulate);
	      for (alpha = _, i = 0; i < n; ++i) node = nodes[i], tree.visit(apply);
	    }
	
	    function initialize() {
	      if (!nodes) return;
	      var i, n = nodes.length;
	      strengths = new Array(n);
	      for (i = 0; i < n; ++i) strengths[i] = +strength(nodes[i], i, nodes);
	    }
	
	    function accumulate(quad) {
	      var strength = 0, q, c, x, y, i;
	
	      // For internal nodes, accumulate forces from child quadrants.
	      if (quad.length) {
	        for (x = y = i = 0; i < 4; ++i) {
	          if ((q = quad[i]) && (c = q.value)) {
	            strength += c, x += c * q.x, y += c * q.y;
	          }
	        }
	        quad.x = x / strength;
	        quad.y = y / strength;
	      }
	
	      // For leaf nodes, accumulate forces from coincident quadrants.
	      else {
	        q = quad;
	        q.x = q.data.x;
	        q.y = q.data.y;
	        do strength += strengths[q.data.index];
	        while (q = q.next);
	      }
	
	      quad.value = strength;
	    }
	
	    function apply(quad, x1, _, x2) {
	      if (!quad.value) return true;
	
	      var x = quad.x - node.x,
	          y = quad.y - node.y,
	          w = x2 - x1,
	          l = x * x + y * y;
	
	      // Apply the Barnes-Hut approximation if possible.
	      // Limit forces for very close nodes; randomize direction if coincident.
	      if (w * w / theta2 < l) {
	        if (l < distanceMax2) {
	          if (x === 0) x = jiggle(), l += x * x;
	          if (y === 0) y = jiggle(), l += y * y;
	          if (l < distanceMin2) l = Math.sqrt(distanceMin2 * l);
	          node.vx += x * quad.value * alpha / l;
	          node.vy += y * quad.value * alpha / l;
	        }
	        return true;
	      }
	
	      // Otherwise, process points directly.
	      else if (quad.length || l >= distanceMax2) return;
	
	      // Limit forces for very close nodes; randomize direction if coincident.
	      if (quad.data !== node || quad.next) {
	        if (x === 0) x = jiggle(), l += x * x;
	        if (y === 0) y = jiggle(), l += y * y;
	        if (l < distanceMin2) l = Math.sqrt(distanceMin2 * l);
	      }
	
	      do if (quad.data !== node) {
	        w = strengths[quad.data.index] * alpha / l;
	        node.vx += x * w;
	        node.vy += y * w;
	      } while (quad = quad.next);
	    }
	
	    force.initialize = function(_) {
	      nodes = _;
	      initialize();
	    };
	
	    force.strength = function(_) {
	      return arguments.length ? (strength = typeof _ === "function" ? _ : constant$6(+_), initialize(), force) : strength;
	    };
	
	    force.distanceMin = function(_) {
	      return arguments.length ? (distanceMin2 = _ * _, force) : Math.sqrt(distanceMin2);
	    };
	
	    force.distanceMax = function(_) {
	      return arguments.length ? (distanceMax2 = _ * _, force) : Math.sqrt(distanceMax2);
	    };
	
	    force.theta = function(_) {
	      return arguments.length ? (theta2 = _ * _, force) : Math.sqrt(theta2);
	    };
	
	    return force;
	  }
	
	  function x$3(x) {
	    var strength = constant$6(0.1),
	        nodes,
	        strengths,
	        xz;
	
	    if (typeof x !== "function") x = constant$6(x == null ? 0 : +x);
	
	    function force(alpha) {
	      for (var i = 0, n = nodes.length, node; i < n; ++i) {
	        node = nodes[i], node.vx += (xz[i] - node.x) * strengths[i] * alpha;
	      }
	    }
	
	    function initialize() {
	      if (!nodes) return;
	      var i, n = nodes.length;
	      strengths = new Array(n);
	      xz = new Array(n);
	      for (i = 0; i < n; ++i) {
	        strengths[i] = isNaN(xz[i] = +x(nodes[i], i, nodes)) ? 0 : +strength(nodes[i], i, nodes);
	      }
	    }
	
	    force.initialize = function(_) {
	      nodes = _;
	      initialize();
	    };
	
	    force.strength = function(_) {
	      return arguments.length ? (strength = typeof _ === "function" ? _ : constant$6(+_), initialize(), force) : strength;
	    };
	
	    force.x = function(_) {
	      return arguments.length ? (x = typeof _ === "function" ? _ : constant$6(+_), initialize(), force) : x;
	    };
	
	    return force;
	  }
	
	  function y$3(y) {
	    var strength = constant$6(0.1),
	        nodes,
	        strengths,
	        yz;
	
	    if (typeof y !== "function") y = constant$6(y == null ? 0 : +y);
	
	    function force(alpha) {
	      for (var i = 0, n = nodes.length, node; i < n; ++i) {
	        node = nodes[i], node.vy += (yz[i] - node.y) * strengths[i] * alpha;
	      }
	    }
	
	    function initialize() {
	      if (!nodes) return;
	      var i, n = nodes.length;
	      strengths = new Array(n);
	      yz = new Array(n);
	      for (i = 0; i < n; ++i) {
	        strengths[i] = isNaN(yz[i] = +y(nodes[i], i, nodes)) ? 0 : +strength(nodes[i], i, nodes);
	      }
	    }
	
	    force.initialize = function(_) {
	      nodes = _;
	      initialize();
	    };
	
	    force.strength = function(_) {
	      return arguments.length ? (strength = typeof _ === "function" ? _ : constant$6(+_), initialize(), force) : strength;
	    };
	
	    force.y = function(_) {
	      return arguments.length ? (y = typeof _ === "function" ? _ : constant$6(+_), initialize(), force) : y;
	    };
	
	    return force;
	  }
	
	  function nopropagation() {
	    exports.event.stopImmediatePropagation();
	  }
	
	  function noevent() {
	    exports.event.preventDefault();
	    exports.event.stopImmediatePropagation();
	  }
	
	  function dragDisable(view) {
	    var root = view.document.documentElement,
	        selection = select(view).on("dragstart.drag", noevent, true);
	    if ("onselectstart" in root) {
	      selection.on("selectstart.drag", noevent, true);
	    } else {
	      root.__noselect = root.style.MozUserSelect;
	      root.style.MozUserSelect = "none";
	    }
	  }
	
	  function dragEnable(view, noclick) {
	    var root = view.document.documentElement,
	        selection = select(view).on("dragstart.drag", null);
	    if (noclick) {
	      selection.on("click.drag", noevent, true);
	      setTimeout(function() { selection.on("click.drag", null); }, 0);
	    }
	    if ("onselectstart" in root) {
	      selection.on("selectstart.drag", null);
	    } else {
	      root.style.MozUserSelect = root.__noselect;
	      delete root.__noselect;
	    }
	  }
	
	  function constant$7(x) {
	    return function() {
	      return x;
	    };
	  }
	
	  function DragEvent(target, type, subject, id, active, x, y, dx, dy, dispatch) {
	    this.target = target;
	    this.type = type;
	    this.subject = subject;
	    this.identifier = id;
	    this.active = active;
	    this.x = x;
	    this.y = y;
	    this.dx = dx;
	    this.dy = dy;
	    this._ = dispatch;
	  }
	
	  DragEvent.prototype.on = function() {
	    var value = this._.on.apply(this._, arguments);
	    return value === this._ ? this : value;
	  };
	
	  // Ignore right-click, since that should open the context menu.
	  function defaultFilter() {
	    return !exports.event.button;
	  }
	
	  function defaultContainer() {
	    return this.parentNode;
	  }
	
	  function defaultSubject(d) {
	    return d == null ? {x: exports.event.x, y: exports.event.y} : d;
	  }
	
	  function drag() {
	    var filter = defaultFilter,
	        container = defaultContainer,
	        subject = defaultSubject,
	        gestures = {},
	        listeners = dispatch("start", "drag", "end"),
	        active = 0,
	        mousemoving,
	        touchending;
	
	    function drag(selection) {
	      selection
	          .on("mousedown.drag", mousedowned)
	          .on("touchstart.drag", touchstarted)
	          .on("touchmove.drag", touchmoved)
	          .on("touchend.drag touchcancel.drag", touchended)
	          .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
	    }
	
	    function mousedowned() {
	      if (touchending || !filter.apply(this, arguments)) return;
	      var gesture = beforestart("mouse", container.apply(this, arguments), mouse, this, arguments);
	      if (!gesture) return;
	      select(exports.event.view).on("mousemove.drag", mousemoved, true).on("mouseup.drag", mouseupped, true);
	      dragDisable(exports.event.view);
	      nopropagation();
	      mousemoving = false;
	      gesture("start");
	    }
	
	    function mousemoved() {
	      noevent();
	      mousemoving = true;
	      gestures.mouse("drag");
	    }
	
	    function mouseupped() {
	      select(exports.event.view).on("mousemove.drag mouseup.drag", null);
	      dragEnable(exports.event.view, mousemoving);
	      noevent();
	      gestures.mouse("end");
	    }
	
	    function touchstarted() {
	      if (!filter.apply(this, arguments)) return;
	      var touches = exports.event.changedTouches,
	          c = container.apply(this, arguments),
	          n = touches.length, i, gesture;
	
	      for (i = 0; i < n; ++i) {
	        if (gesture = beforestart(touches[i].identifier, c, touch, this, arguments)) {
	          nopropagation();
	          gesture("start");
	        }
	      }
	    }
	
	    function touchmoved() {
	      var touches = exports.event.changedTouches,
	          n = touches.length, i, gesture;
	
	      for (i = 0; i < n; ++i) {
	        if (gesture = gestures[touches[i].identifier]) {
	          noevent();
	          gesture("drag");
	        }
	      }
	    }
	
	    function touchended() {
	      var touches = exports.event.changedTouches,
	          n = touches.length, i, gesture;
	
	      if (touchending) clearTimeout(touchending);
	      touchending = setTimeout(function() { touchending = null; }, 500); // Ghost clicks are delayed!
	      for (i = 0; i < n; ++i) {
	        if (gesture = gestures[touches[i].identifier]) {
	          nopropagation();
	          gesture("end");
	        }
	      }
	    }
	
	    function beforestart(id, container, point, that, args) {
	      var p = point(container, id), s, dx, dy,
	          sublisteners = listeners.copy();
	
	      if (!customEvent(new DragEvent(drag, "beforestart", s, id, active, p[0], p[1], 0, 0, sublisteners), function() {
	        if ((exports.event.subject = s = subject.apply(that, args)) == null) return false;
	        dx = s.x - p[0] || 0;
	        dy = s.y - p[1] || 0;
	        return true;
	      })) return;
	
	      return function gesture(type) {
	        var p0 = p, n;
	        switch (type) {
	          case "start": gestures[id] = gesture, n = active++; break;
	          case "end": delete gestures[id], --active; // nobreak
	          case "drag": p = point(container, id), n = active; break;
	        }
	        customEvent(new DragEvent(drag, type, s, id, n, p[0] + dx, p[1] + dy, p[0] - p0[0], p[1] - p0[1], sublisteners), sublisteners.apply, sublisteners, [type, that, args]);
	      };
	    }
	
	    drag.filter = function(_) {
	      return arguments.length ? (filter = typeof _ === "function" ? _ : constant$7(!!_), drag) : filter;
	    };
	
	    drag.container = function(_) {
	      return arguments.length ? (container = typeof _ === "function" ? _ : constant$7(_), drag) : container;
	    };
	
	    drag.subject = function(_) {
	      return arguments.length ? (subject = typeof _ === "function" ? _ : constant$7(_), drag) : subject;
	    };
	
	    drag.on = function() {
	      var value = listeners.on.apply(listeners, arguments);
	      return value === listeners ? drag : value;
	    };
	
	    return drag;
	  }
	
	  function constant$8(x) {
	    return function() {
	      return x;
	    };
	  }
	
	  function x$4(d) {
	    return d[0];
	  }
	
	  function y$4(d) {
	    return d[1];
	  }
	
	  function RedBlackTree() {
	    this._ = null; // root node
	  }
	
	  function RedBlackNode(node) {
	    node.U = // parent node
	    node.C = // color - true for red, false for black
	    node.L = // left node
	    node.R = // right node
	    node.P = // previous node
	    node.N = null; // next node
	  }
	
	  RedBlackTree.prototype = {
	    constructor: RedBlackTree,
	
	    insert: function(after, node) {
	      var parent, grandpa, uncle;
	
	      if (after) {
	        node.P = after;
	        node.N = after.N;
	        if (after.N) after.N.P = node;
	        after.N = node;
	        if (after.R) {
	          after = after.R;
	          while (after.L) after = after.L;
	          after.L = node;
	        } else {
	          after.R = node;
	        }
	        parent = after;
	      } else if (this._) {
	        after = RedBlackFirst(this._);
	        node.P = null;
	        node.N = after;
	        after.P = after.L = node;
	        parent = after;
	      } else {
	        node.P = node.N = null;
	        this._ = node;
	        parent = null;
	      }
	      node.L = node.R = null;
	      node.U = parent;
	      node.C = true;
	
	      after = node;
	      while (parent && parent.C) {
	        grandpa = parent.U;
	        if (parent === grandpa.L) {
	          uncle = grandpa.R;
	          if (uncle && uncle.C) {
	            parent.C = uncle.C = false;
	            grandpa.C = true;
	            after = grandpa;
	          } else {
	            if (after === parent.R) {
	              RedBlackRotateLeft(this, parent);
	              after = parent;
	              parent = after.U;
	            }
	            parent.C = false;
	            grandpa.C = true;
	            RedBlackRotateRight(this, grandpa);
	          }
	        } else {
	          uncle = grandpa.L;
	          if (uncle && uncle.C) {
	            parent.C = uncle.C = false;
	            grandpa.C = true;
	            after = grandpa;
	          } else {
	            if (after === parent.L) {
	              RedBlackRotateRight(this, parent);
	              after = parent;
	              parent = after.U;
	            }
	            parent.C = false;
	            grandpa.C = true;
	            RedBlackRotateLeft(this, grandpa);
	          }
	        }
	        parent = after.U;
	      }
	      this._.C = false;
	    },
	
	    remove: function(node) {
	      if (node.N) node.N.P = node.P;
	      if (node.P) node.P.N = node.N;
	      node.N = node.P = null;
	
	      var parent = node.U,
	          sibling,
	          left = node.L,
	          right = node.R,
	          next,
	          red;
	
	      if (!left) next = right;
	      else if (!right) next = left;
	      else next = RedBlackFirst(right);
	
	      if (parent) {
	        if (parent.L === node) parent.L = next;
	        else parent.R = next;
	      } else {
	        this._ = next;
	      }
	
	      if (left && right) {
	        red = next.C;
	        next.C = node.C;
	        next.L = left;
	        left.U = next;
	        if (next !== right) {
	          parent = next.U;
	          next.U = node.U;
	          node = next.R;
	          parent.L = node;
	          next.R = right;
	          right.U = next;
	        } else {
	          next.U = parent;
	          parent = next;
	          node = next.R;
	        }
	      } else {
	        red = node.C;
	        node = next;
	      }
	
	      if (node) node.U = parent;
	      if (red) return;
	      if (node && node.C) { node.C = false; return; }
	
	      do {
	        if (node === this._) break;
	        if (node === parent.L) {
	          sibling = parent.R;
	          if (sibling.C) {
	            sibling.C = false;
	            parent.C = true;
	            RedBlackRotateLeft(this, parent);
	            sibling = parent.R;
	          }
	          if ((sibling.L && sibling.L.C)
	              || (sibling.R && sibling.R.C)) {
	            if (!sibling.R || !sibling.R.C) {
	              sibling.L.C = false;
	              sibling.C = true;
	              RedBlackRotateRight(this, sibling);
	              sibling = parent.R;
	            }
	            sibling.C = parent.C;
	            parent.C = sibling.R.C = false;
	            RedBlackRotateLeft(this, parent);
	            node = this._;
	            break;
	          }
	        } else {
	          sibling = parent.L;
	          if (sibling.C) {
	            sibling.C = false;
	            parent.C = true;
	            RedBlackRotateRight(this, parent);
	            sibling = parent.L;
	          }
	          if ((sibling.L && sibling.L.C)
	            || (sibling.R && sibling.R.C)) {
	            if (!sibling.L || !sibling.L.C) {
	              sibling.R.C = false;
	              sibling.C = true;
	              RedBlackRotateLeft(this, sibling);
	              sibling = parent.L;
	            }
	            sibling.C = parent.C;
	            parent.C = sibling.L.C = false;
	            RedBlackRotateRight(this, parent);
	            node = this._;
	            break;
	          }
	        }
	        sibling.C = true;
	        node = parent;
	        parent = parent.U;
	      } while (!node.C);
	
	      if (node) node.C = false;
	    }
	  };
	
	  function RedBlackRotateLeft(tree, node) {
	    var p = node,
	        q = node.R,
	        parent = p.U;
	
	    if (parent) {
	      if (parent.L === p) parent.L = q;
	      else parent.R = q;
	    } else {
	      tree._ = q;
	    }
	
	    q.U = parent;
	    p.U = q;
	    p.R = q.L;
	    if (p.R) p.R.U = p;
	    q.L = p;
	  }
	
	  function RedBlackRotateRight(tree, node) {
	    var p = node,
	        q = node.L,
	        parent = p.U;
	
	    if (parent) {
	      if (parent.L === p) parent.L = q;
	      else parent.R = q;
	    } else {
	      tree._ = q;
	    }
	
	    q.U = parent;
	    p.U = q;
	    p.L = q.R;
	    if (p.L) p.L.U = p;
	    q.R = p;
	  }
	
	  function RedBlackFirst(node) {
	    while (node.L) node = node.L;
	    return node;
	  }
	
	  function createEdge(left, right, v0, v1) {
	    var edge = [null, null],
	        index = edges.push(edge) - 1;
	    edge.left = left;
	    edge.right = right;
	    if (v0) setEdgeEnd(edge, left, right, v0);
	    if (v1) setEdgeEnd(edge, right, left, v1);
	    cells[left.index].halfedges.push(index);
	    cells[right.index].halfedges.push(index);
	    return edge;
	  }
	
	  function createBorderEdge(left, v0, v1) {
	    var edge = [v0, v1];
	    edge.left = left;
	    return edge;
	  }
	
	  function setEdgeEnd(edge, left, right, vertex) {
	    if (!edge[0] && !edge[1]) {
	      edge[0] = vertex;
	      edge.left = left;
	      edge.right = right;
	    } else if (edge.left === right) {
	      edge[1] = vertex;
	    } else {
	      edge[0] = vertex;
	    }
	  }
	
	  // Liang–Barsky line clipping.
	  function clipEdge(edge, x0, y0, x1, y1) {
	    var a = edge[0],
	        b = edge[1],
	        ax = a[0],
	        ay = a[1],
	        bx = b[0],
	        by = b[1],
	        t0 = 0,
	        t1 = 1,
	        dx = bx - ax,
	        dy = by - ay,
	        r;
	
	    r = x0 - ax;
	    if (!dx && r > 0) return;
	    r /= dx;
	    if (dx < 0) {
	      if (r < t0) return;
	      if (r < t1) t1 = r;
	    } else if (dx > 0) {
	      if (r > t1) return;
	      if (r > t0) t0 = r;
	    }
	
	    r = x1 - ax;
	    if (!dx && r < 0) return;
	    r /= dx;
	    if (dx < 0) {
	      if (r > t1) return;
	      if (r > t0) t0 = r;
	    } else if (dx > 0) {
	      if (r < t0) return;
	      if (r < t1) t1 = r;
	    }
	
	    r = y0 - ay;
	    if (!dy && r > 0) return;
	    r /= dy;
	    if (dy < 0) {
	      if (r < t0) return;
	      if (r < t1) t1 = r;
	    } else if (dy > 0) {
	      if (r > t1) return;
	      if (r > t0) t0 = r;
	    }
	
	    r = y1 - ay;
	    if (!dy && r < 0) return;
	    r /= dy;
	    if (dy < 0) {
	      if (r > t1) return;
	      if (r > t0) t0 = r;
	    } else if (dy > 0) {
	      if (r < t0) return;
	      if (r < t1) t1 = r;
	    }
	
	    if (!(t0 > 0) && !(t1 < 1)) return true; // TODO Better check?
	
	    if (t0 > 0) edge[0] = [ax + t0 * dx, ay + t0 * dy];
	    if (t1 < 1) edge[1] = [ax + t1 * dx, ay + t1 * dy];
	    return true;
	  }
	
	  function connectEdge(edge, x0, y0, x1, y1) {
	    var v1 = edge[1];
	    if (v1) return true;
	
	    var v0 = edge[0],
	        left = edge.left,
	        right = edge.right,
	        lx = left[0],
	        ly = left[1],
	        rx = right[0],
	        ry = right[1],
	        fx = (lx + rx) / 2,
	        fy = (ly + ry) / 2,
	        fm,
	        fb;
	
	    if (ry === ly) {
	      if (fx < x0 || fx >= x1) return;
	      if (lx > rx) {
	        if (!v0) v0 = [fx, y0];
	        else if (v0[1] >= y1) return;
	        v1 = [fx, y1];
	      } else {
	        if (!v0) v0 = [fx, y1];
	        else if (v0[1] < y0) return;
	        v1 = [fx, y0];
	      }
	    } else {
	      fm = (lx - rx) / (ry - ly);
	      fb = fy - fm * fx;
	      if (fm < -1 || fm > 1) {
	        if (lx > rx) {
	          if (!v0) v0 = [(y0 - fb) / fm, y0];
	          else if (v0[1] >= y1) return;
	          v1 = [(y1 - fb) / fm, y1];
	        } else {
	          if (!v0) v0 = [(y1 - fb) / fm, y1];
	          else if (v0[1] < y0) return;
	          v1 = [(y0 - fb) / fm, y0];
	        }
	      } else {
	        if (ly < ry) {
	          if (!v0) v0 = [x0, fm * x0 + fb];
	          else if (v0[0] >= x1) return;
	          v1 = [x1, fm * x1 + fb];
	        } else {
	          if (!v0) v0 = [x1, fm * x1 + fb];
	          else if (v0[0] < x0) return;
	          v1 = [x0, fm * x0 + fb];
	        }
	      }
	    }
	
	    edge[0] = v0;
	    edge[1] = v1;
	    return true;
	  }
	
	  function clipEdges(x0, y0, x1, y1) {
	    var i = edges.length,
	        edge;
	
	    while (i--) {
	      if (!connectEdge(edge = edges[i], x0, y0, x1, y1)
	          || !clipEdge(edge, x0, y0, x1, y1)
	          || !(Math.abs(edge[0][0] - edge[1][0]) > epsilon$3
	              || Math.abs(edge[0][1] - edge[1][1]) > epsilon$3)) {
	        delete edges[i];
	      }
	    }
	  }
	
	  function createCell(site) {
	    return cells[site.index] = {
	      site: site,
	      halfedges: []
	    };
	  }
	
	  function cellHalfedgeAngle(cell, edge) {
	    var site = cell.site,
	        va = edge.left,
	        vb = edge.right;
	    if (site === vb) vb = va, va = site;
	    if (vb) return Math.atan2(vb[1] - va[1], vb[0] - va[0]);
	    if (site === va) va = edge[1], vb = edge[0];
	    else va = edge[0], vb = edge[1];
	    return Math.atan2(va[0] - vb[0], vb[1] - va[1]);
	  }
	
	  function cellHalfedgeStart(cell, edge) {
	    return edge[+(edge.left !== cell.site)];
	  }
	
	  function cellHalfedgeEnd(cell, edge) {
	    return edge[+(edge.left === cell.site)];
	  }
	
	  function sortCellHalfedges() {
	    for (var i = 0, n = cells.length, cell, halfedges, j, m; i < n; ++i) {
	      if ((cell = cells[i]) && (m = (halfedges = cell.halfedges).length)) {
	        var index = new Array(m),
	            array = new Array(m);
	        for (j = 0; j < m; ++j) index[j] = j, array[j] = cellHalfedgeAngle(cell, edges[halfedges[j]]);
	        index.sort(function(i, j) { return array[j] - array[i]; });
	        for (j = 0; j < m; ++j) array[j] = halfedges[index[j]];
	        for (j = 0; j < m; ++j) halfedges[j] = array[j];
	      }
	    }
	  }
	
	  function clipCells(x0, y0, x1, y1) {
	    var nCells = cells.length,
	        iCell,
	        cell,
	        site,
	        iHalfedge,
	        halfedges,
	        nHalfedges,
	        start,
	        startX,
	        startY,
	        end,
	        endX,
	        endY,
	        cover = true;
	
	    for (iCell = 0; iCell < nCells; ++iCell) {
	      if (cell = cells[iCell]) {
	        site = cell.site;
	        halfedges = cell.halfedges;
	        iHalfedge = halfedges.length;
	
	        // Remove any dangling clipped edges.
	        while (iHalfedge--) {
	          if (!edges[halfedges[iHalfedge]]) {
	            halfedges.splice(iHalfedge, 1);
	          }
	        }
	
	        // Insert any border edges as necessary.
	        iHalfedge = 0, nHalfedges = halfedges.length;
	        while (iHalfedge < nHalfedges) {
	          end = cellHalfedgeEnd(cell, edges[halfedges[iHalfedge]]), endX = end[0], endY = end[1];
	          start = cellHalfedgeStart(cell, edges[halfedges[++iHalfedge % nHalfedges]]), startX = start[0], startY = start[1];
	          if (Math.abs(endX - startX) > epsilon$3 || Math.abs(endY - startY) > epsilon$3) {
	            halfedges.splice(iHalfedge, 0, edges.push(createBorderEdge(site, end,
	                Math.abs(endX - x0) < epsilon$3 && y1 - endY > epsilon$3 ? [x0, Math.abs(startX - x0) < epsilon$3 ? startY : y1]
	                : Math.abs(endY - y1) < epsilon$3 && x1 - endX > epsilon$3 ? [Math.abs(startY - y1) < epsilon$3 ? startX : x1, y1]
	                : Math.abs(endX - x1) < epsilon$3 && endY - y0 > epsilon$3 ? [x1, Math.abs(startX - x1) < epsilon$3 ? startY : y0]
	                : Math.abs(endY - y0) < epsilon$3 && endX - x0 > epsilon$3 ? [Math.abs(startY - y0) < epsilon$3 ? startX : x0, y0]
	                : null)) - 1);
	            ++nHalfedges;
	          }
	        }
	
	        if (nHalfedges) cover = false;
	      }
	    }
	
	    // If there weren’t any edges, have the closest site cover the extent.
	    // It doesn’t matter which corner of the extent we measure!
	    if (cover) {
	      var dx, dy, d2, dc = Infinity;
	
	      for (iCell = 0, cover = null; iCell < nCells; ++iCell) {
	        if (cell = cells[iCell]) {
	          site = cell.site;
	          dx = site[0] - x0;
	          dy = site[1] - y0;
	          d2 = dx * dx + dy * dy;
	          if (d2 < dc) dc = d2, cover = cell;
	        }
	      }
	
	      if (cover) {
	        var v00 = [x0, y0], v01 = [x0, y1], v11 = [x1, y1], v10 = [x1, y0];
	        cover.halfedges.push(
	          edges.push(createBorderEdge(site = cover.site, v00, v01)) - 1,
	          edges.push(createBorderEdge(site, v01, v11)) - 1,
	          edges.push(createBorderEdge(site, v11, v10)) - 1,
	          edges.push(createBorderEdge(site, v10, v00)) - 1
	        );
	      }
	    }
	
	    // Lastly delete any cells with no edges; these were entirely clipped.
	    for (iCell = 0; iCell < nCells; ++iCell) {
	      if (cell = cells[iCell]) {
	        if (!cell.halfedges.length) {
	          delete cells[iCell];
	        }
	      }
	    }
	  }
	
	  var circlePool = [];
	
	  var firstCircle;
	
	  function Circle() {
	    RedBlackNode(this);
	    this.x =
	    this.y =
	    this.arc =
	    this.site =
	    this.cy = null;
	  }
	
	  function attachCircle(arc) {
	    var lArc = arc.P,
	        rArc = arc.N;
	
	    if (!lArc || !rArc) return;
	
	    var lSite = lArc.site,
	        cSite = arc.site,
	        rSite = rArc.site;
	
	    if (lSite === rSite) return;
	
	    var bx = cSite[0],
	        by = cSite[1],
	        ax = lSite[0] - bx,
	        ay = lSite[1] - by,
	        cx = rSite[0] - bx,
	        cy = rSite[1] - by;
	
	    var d = 2 * (ax * cy - ay * cx);
	    if (d >= -epsilon2$1) return;
	
	    var ha = ax * ax + ay * ay,
	        hc = cx * cx + cy * cy,
	        x = (cy * ha - ay * hc) / d,
	        y = (ax * hc - cx * ha) / d;
	
	    var circle = circlePool.pop() || new Circle;
	    circle.arc = arc;
	    circle.site = cSite;
	    circle.x = x + bx;
	    circle.y = (circle.cy = y + by) + Math.sqrt(x * x + y * y); // y bottom
	
	    arc.circle = circle;
	
	    var before = null,
	        node = circles._;
	
	    while (node) {
	      if (circle.y < node.y || (circle.y === node.y && circle.x <= node.x)) {
	        if (node.L) node = node.L;
	        else { before = node.P; break; }
	      } else {
	        if (node.R) node = node.R;
	        else { before = node; break; }
	      }
	    }
	
	    circles.insert(before, circle);
	    if (!before) firstCircle = circle;
	  }
	
	  function detachCircle(arc) {
	    var circle = arc.circle;
	    if (circle) {
	      if (!circle.P) firstCircle = circle.N;
	      circles.remove(circle);
	      circlePool.push(circle);
	      RedBlackNode(circle);
	      arc.circle = null;
	    }
	  }
	
	  var beachPool = [];
	
	  function Beach() {
	    RedBlackNode(this);
	    this.edge =
	    this.site =
	    this.circle = null;
	  }
	
	  function createBeach(site) {
	    var beach = beachPool.pop() || new Beach;
	    beach.site = site;
	    return beach;
	  }
	
	  function detachBeach(beach) {
	    detachCircle(beach);
	    beaches.remove(beach);
	    beachPool.push(beach);
	    RedBlackNode(beach);
	  }
	
	  function removeBeach(beach) {
	    var circle = beach.circle,
	        x = circle.x,
	        y = circle.cy,
	        vertex = [x, y],
	        previous = beach.P,
	        next = beach.N,
	        disappearing = [beach];
	
	    detachBeach(beach);
	
	    var lArc = previous;
	    while (lArc.circle
	        && Math.abs(x - lArc.circle.x) < epsilon$3
	        && Math.abs(y - lArc.circle.cy) < epsilon$3) {
	      previous = lArc.P;
	      disappearing.unshift(lArc);
	      detachBeach(lArc);
	      lArc = previous;
	    }
	
	    disappearing.unshift(lArc);
	    detachCircle(lArc);
	
	    var rArc = next;
	    while (rArc.circle
	        && Math.abs(x - rArc.circle.x) < epsilon$3
	        && Math.abs(y - rArc.circle.cy) < epsilon$3) {
	      next = rArc.N;
	      disappearing.push(rArc);
	      detachBeach(rArc);
	      rArc = next;
	    }
	
	    disappearing.push(rArc);
	    detachCircle(rArc);
	
	    var nArcs = disappearing.length,
	        iArc;
	    for (iArc = 1; iArc < nArcs; ++iArc) {
	      rArc = disappearing[iArc];
	      lArc = disappearing[iArc - 1];
	      setEdgeEnd(rArc.edge, lArc.site, rArc.site, vertex);
	    }
	
	    lArc = disappearing[0];
	    rArc = disappearing[nArcs - 1];
	    rArc.edge = createEdge(lArc.site, rArc.site, null, vertex);
	
	    attachCircle(lArc);
	    attachCircle(rArc);
	  }
	
	  function addBeach(site) {
	    var x = site[0],
	        directrix = site[1],
	        lArc,
	        rArc,
	        dxl,
	        dxr,
	        node = beaches._;
	
	    while (node) {
	      dxl = leftBreakPoint(node, directrix) - x;
	      if (dxl > epsilon$3) node = node.L; else {
	        dxr = x - rightBreakPoint(node, directrix);
	        if (dxr > epsilon$3) {
	          if (!node.R) {
	            lArc = node;
	            break;
	          }
	          node = node.R;
	        } else {
	          if (dxl > -epsilon$3) {
	            lArc = node.P;
	            rArc = node;
	          } else if (dxr > -epsilon$3) {
	            lArc = node;
	            rArc = node.N;
	          } else {
	            lArc = rArc = node;
	          }
	          break;
	        }
	      }
	    }
	
	    createCell(site);
	    var newArc = createBeach(site);
	    beaches.insert(lArc, newArc);
	
	    if (!lArc && !rArc) return;
	
	    if (lArc === rArc) {
	      detachCircle(lArc);
	      rArc = createBeach(lArc.site);
	      beaches.insert(newArc, rArc);
	      newArc.edge = rArc.edge = createEdge(lArc.site, newArc.site);
	      attachCircle(lArc);
	      attachCircle(rArc);
	      return;
	    }
	
	    if (!rArc) { // && lArc
	      newArc.edge = createEdge(lArc.site, newArc.site);
	      return;
	    }
	
	    // else lArc !== rArc
	    detachCircle(lArc);
	    detachCircle(rArc);
	
	    var lSite = lArc.site,
	        ax = lSite[0],
	        ay = lSite[1],
	        bx = site[0] - ax,
	        by = site[1] - ay,
	        rSite = rArc.site,
	        cx = rSite[0] - ax,
	        cy = rSite[1] - ay,
	        d = 2 * (bx * cy - by * cx),
	        hb = bx * bx + by * by,
	        hc = cx * cx + cy * cy,
	        vertex = [(cy * hb - by * hc) / d + ax, (bx * hc - cx * hb) / d + ay];
	
	    setEdgeEnd(rArc.edge, lSite, rSite, vertex);
	    newArc.edge = createEdge(lSite, site, null, vertex);
	    rArc.edge = createEdge(site, rSite, null, vertex);
	    attachCircle(lArc);
	    attachCircle(rArc);
	  }
	
	  function leftBreakPoint(arc, directrix) {
	    var site = arc.site,
	        rfocx = site[0],
	        rfocy = site[1],
	        pby2 = rfocy - directrix;
	
	    if (!pby2) return rfocx;
	
	    var lArc = arc.P;
	    if (!lArc) return -Infinity;
	
	    site = lArc.site;
	    var lfocx = site[0],
	        lfocy = site[1],
	        plby2 = lfocy - directrix;
	
	    if (!plby2) return lfocx;
	
	    var hl = lfocx - rfocx,
	        aby2 = 1 / pby2 - 1 / plby2,
	        b = hl / plby2;
	
	    if (aby2) return (-b + Math.sqrt(b * b - 2 * aby2 * (hl * hl / (-2 * plby2) - lfocy + plby2 / 2 + rfocy - pby2 / 2))) / aby2 + rfocx;
	
	    return (rfocx + lfocx) / 2;
	  }
	
	  function rightBreakPoint(arc, directrix) {
	    var rArc = arc.N;
	    if (rArc) return leftBreakPoint(rArc, directrix);
	    var site = arc.site;
	    return site[1] === directrix ? site[0] : Infinity;
	  }
	
	  var epsilon$3 = 1e-6;
	  var epsilon2$1 = 1e-12;
	  var beaches;
	  var cells;
	  var circles;
	  var edges;
	
	  function triangleArea(a, b, c) {
	    return (a[0] - c[0]) * (b[1] - a[1]) - (a[0] - b[0]) * (c[1] - a[1]);
	  }
	
	  function lexicographic(a, b) {
	    return b[1] - a[1]
	        || b[0] - a[0];
	  }
	
	  function Diagram(sites, extent) {
	    var site = sites.sort(lexicographic).pop(),
	        x,
	        y,
	        circle;
	
	    edges = [];
	    cells = new Array(sites.length);
	    beaches = new RedBlackTree;
	    circles = new RedBlackTree;
	
	    while (true) {
	      circle = firstCircle;
	      if (site && (!circle || site[1] < circle.y || (site[1] === circle.y && site[0] < circle.x))) {
	        if (site[0] !== x || site[1] !== y) {
	          addBeach(site);
	          x = site[0], y = site[1];
	        }
	        site = sites.pop();
	      } else if (circle) {
	        removeBeach(circle.arc);
	      } else {
	        break;
	      }
	    }
	
	    sortCellHalfedges();
	
	    if (extent) {
	      var x0 = +extent[0][0],
	          y0 = +extent[0][1],
	          x1 = +extent[1][0],
	          y1 = +extent[1][1];
	      clipEdges(x0, y0, x1, y1);
	      clipCells(x0, y0, x1, y1);
	    }
	
	    this.edges = edges;
	    this.cells = cells;
	
	    beaches =
	    circles =
	    edges =
	    cells = null;
	  }
	
	  Diagram.prototype = {
	    constructor: Diagram,
	
	    polygons: function() {
	      var edges = this.edges;
	
	      return this.cells.map(function(cell) {
	        var polygon = cell.halfedges.map(function(i) { return cellHalfedgeStart(cell, edges[i]); });
	        polygon.data = cell.site.data;
	        return polygon;
	      });
	    },
	
	    triangles: function() {
	      var triangles = [],
	          edges = this.edges;
	
	      this.cells.forEach(function(cell, i) {
	        var site = cell.site,
	            halfedges = cell.halfedges,
	            j = -1,
	            m = halfedges.length,
	            s0,
	            e1 = edges[halfedges[m - 1]],
	            s1 = e1.left === site ? e1.right : e1.left;
	
	        while (++j < m) {
	          s0 = s1;
	          e1 = edges[halfedges[j]];
	          s1 = e1.left === site ? e1.right : e1.left;
	          if (i < s0.index && i < s1.index && triangleArea(site, s0, s1) < 0) {
	            triangles.push([site.data, s0.data, s1.data]);
	          }
	        }
	      });
	
	      return triangles;
	    },
	
	    links: function() {
	      return this.edges.filter(function(edge) {
	        return edge.right;
	      }).map(function(edge) {
	        return {
	          source: edge.left.data,
	          target: edge.right.data
	        };
	      });
	    }
	  }
	
	  function voronoi() {
	    var x = x$4,
	        y = y$4,
	        extent = null;
	
	    function voronoi(data) {
	      return new Diagram(data.map(function(d, i) {
	        var s = [Math.round(x(d, i, data) / epsilon$3) * epsilon$3, Math.round(y(d, i, data) / epsilon$3) * epsilon$3];
	        s.index = i;
	        s.data = d;
	        return s;
	      }), extent);
	    }
	
	    voronoi.polygons = function(data) {
	      return voronoi(data).polygons();
	    };
	
	    voronoi.links = function(data) {
	      return voronoi(data).links();
	    };
	
	    voronoi.triangles = function(data) {
	      return voronoi(data).triangles();
	    };
	
	    voronoi.x = function(_) {
	      return arguments.length ? (x = typeof _ === "function" ? _ : constant$8(+_), voronoi) : x;
	    };
	
	    voronoi.y = function(_) {
	      return arguments.length ? (y = typeof _ === "function" ? _ : constant$8(+_), voronoi) : y;
	    };
	
	    voronoi.extent = function(_) {
	      return arguments.length ? (extent = _ == null ? null : [[+_[0][0], +_[0][1]], [+_[1][0], +_[1][1]]], voronoi) : extent && [[extent[0][0], extent[0][1]], [extent[1][0], extent[1][1]]];
	    };
	
	    voronoi.size = function(_) {
	      return arguments.length ? (extent = _ == null ? null : [[0, 0], [+_[0], +_[1]]], voronoi) : extent && [extent[1][0] - extent[0][0], extent[1][1] - extent[0][1]];
	    };
	
	    return voronoi;
	  }
	
	  function constant$9(x) {
	    return function() {
	      return x;
	    };
	  }
	
	  function ZoomEvent(target, type, transform) {
	    this.target = target;
	    this.type = type;
	    this.transform = transform;
	  }
	
	  function Transform(k, x, y) {
	    this.k = k;
	    this.x = x;
	    this.y = y;
	  }
	
	  Transform.prototype = {
	    constructor: Transform,
	    scale: function(k) {
	      return k === 1 ? this : new Transform(this.k * k, this.x, this.y);
	    },
	    translate: function(x, y) {
	      return x === 0 & y === 0 ? this : new Transform(this.k, this.x + this.k * x, this.y + this.k * y);
	    },
	    apply: function(point) {
	      return [point[0] * this.k + this.x, point[1] * this.k + this.y];
	    },
	    applyX: function(x) {
	      return x * this.k + this.x;
	    },
	    applyY: function(y) {
	      return y * this.k + this.y;
	    },
	    invert: function(location) {
	      return [(location[0] - this.x) / this.k, (location[1] - this.y) / this.k];
	    },
	    invertX: function(x) {
	      return (x - this.x) / this.k;
	    },
	    invertY: function(y) {
	      return (y - this.y) / this.k;
	    },
	    rescaleX: function(x) {
	      return x.copy().domain(x.range().map(this.invertX, this).map(x.invert, x));
	    },
	    rescaleY: function(y) {
	      return y.copy().domain(y.range().map(this.invertY, this).map(y.invert, y));
	    },
	    toString: function() {
	      return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
	    }
	  };
	
	  var identity$6 = new Transform(1, 0, 0);
	
	  transform.prototype = Transform.prototype;
	
	  function transform(node) {
	    return node.__zoom || identity$6;
	  }
	
	  function nopropagation$1() {
	    exports.event.stopImmediatePropagation();
	  }
	
	  function noevent$1() {
	    exports.event.preventDefault();
	    exports.event.stopImmediatePropagation();
	  }
	
	  // Ignore right-click, since that should open the context menu.
	  function defaultFilter$1() {
	    return !exports.event.button;
	  }
	
	  function defaultExtent() {
	    var e = this, w, h;
	    if (e instanceof SVGElement) {
	      e = e.ownerSVGElement || e;
	      w = e.width.baseVal.value;
	      h = e.height.baseVal.value;
	    } else {
	      w = e.clientWidth;
	      h = e.clientHeight;
	    }
	    return [[0, 0], [w, h]];
	  }
	
	  function defaultTransform() {
	    return this.__zoom || identity$6;
	  }
	
	  function zoom() {
	    var filter = defaultFilter$1,
	        extent = defaultExtent,
	        k0 = 0,
	        k1 = Infinity,
	        x0 = -k1,
	        x1 = k1,
	        y0 = x0,
	        y1 = x1,
	        duration = 250,
	        gestures = [],
	        listeners = dispatch("start", "zoom", "end"),
	        touchstarting,
	        touchending,
	        touchDelay = 500,
	        wheelDelay = 150;
	
	    function zoom(selection) {
	      selection
	          .on("wheel.zoom", wheeled)
	          .on("mousedown.zoom", mousedowned)
	          .on("dblclick.zoom", dblclicked)
	          .on("touchstart.zoom", touchstarted)
	          .on("touchmove.zoom", touchmoved)
	          .on("touchend.zoom touchcancel.zoom", touchended)
	          .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)")
	          .property("__zoom", defaultTransform);
	    }
	
	    zoom.transform = function(collection, transform) {
	      var selection = collection.selection ? collection.selection() : collection;
	      selection.property("__zoom", defaultTransform);
	      if (collection !== selection) {
	        schedule(collection, transform);
	      } else {
	        selection.interrupt().each(function() {
	          gesture(this, arguments)
	              .start()
	              .zoom(null, typeof transform === "function" ? transform.apply(this, arguments) : transform)
	              .end();
	        });
	      }
	    };
	
	    zoom.scaleBy = function(selection, k) {
	      zoom.scaleTo(selection, function() {
	        var k0 = this.__zoom.k,
	            k1 = typeof k === "function" ? k.apply(this, arguments) : k;
	        return k0 * k1;
	      });
	    };
	
	    zoom.scaleTo = function(selection, k) {
	      zoom.transform(selection, function() {
	        var e = extent.apply(this, arguments),
	            t0 = this.__zoom,
	            p0 = centroid(e),
	            p1 = t0.invert(p0),
	            k1 = typeof k === "function" ? k.apply(this, arguments) : k;
	        return constrain(translate(scale(t0, k1), p0, p1), e);
	      });
	    };
	
	    zoom.translateBy = function(selection, x, y) {
	      zoom.transform(selection, function() {
	        return constrain(this.__zoom.translate(
	          typeof x === "function" ? x.apply(this, arguments) : x,
	          typeof y === "function" ? y.apply(this, arguments) : y
	        ), extent.apply(this, arguments));
	      });
	    };
	
	    function scale(transform, k) {
	      k = Math.max(k0, Math.min(k1, k));
	      return k === transform.k ? transform : new Transform(k, transform.x, transform.y);
	    }
	
	    function translate(transform, p0, p1) {
	      var x = p0[0] - p1[0] * transform.k, y = p0[1] - p1[1] * transform.k;
	      return x === transform.x && y === transform.y ? transform : new Transform(transform.k, x, y);
	    }
	
	    function constrain(transform, extent) {
	      var dx = Math.min(0, transform.invertX(extent[0][0]) - x0) || Math.max(0, transform.invertX(extent[1][0]) - x1),
	          dy = Math.min(0, transform.invertY(extent[0][1]) - y0) || Math.max(0, transform.invertY(extent[1][1]) - y1);
	      return dx || dy ? transform.translate(dx, dy) : transform;
	    }
	
	    function centroid(extent) {
	      return [(+extent[0][0] + +extent[1][0]) / 2, (+extent[0][1] + +extent[1][1]) / 2];
	    }
	
	    function schedule(transition, transform, center) {
	      transition
	          .on("start.zoom", function() { gesture(this, arguments).start(); })
	          .on("interrupt.zoom end.zoom", function() { gesture(this, arguments).end(); })
	          .tween("zoom", function() {
	            var that = this,
	                args = arguments,
	                g = gesture(that, args),
	                e = extent.apply(that, args),
	                p = center || centroid(e),
	                w = Math.max(e[1][0] - e[0][0], e[1][1] - e[0][1]),
	                a = that.__zoom,
	                b = typeof transform === "function" ? transform.apply(that, args) : transform,
	                i = interpolateZoom(a.invert(p).concat(w / a.k), b.invert(p).concat(w / b.k));
	            return function(t) {
	              if (t === 1) t = b; // Avoid rounding error on end.
	              else { var l = i(t), k = w / l[2]; t = new Transform(k, p[0] - l[0] * k, p[1] - l[1] * k); }
	              g.zoom(null, t);
	            };
	          });
	    }
	
	    function gesture(that, args) {
	      for (var i = 0, n = gestures.length, g; i < n; ++i) {
	        if ((g = gestures[i]).that === that) {
	          return g;
	        }
	      }
	      return new Gesture(that, args);
	    }
	
	    function Gesture(that, args) {
	      this.that = that;
	      this.args = args;
	      this.index = -1;
	      this.active = 0;
	      this.extent = extent.apply(that, args);
	    }
	
	    Gesture.prototype = {
	      start: function() {
	        if (++this.active === 1) {
	          this.index = gestures.push(this) - 1;
	          this.emit("start");
	        }
	        return this;
	      },
	      zoom: function(key, transform) {
	        if (this.mouse && key !== "mouse") this.mouse[1] = transform.invert(this.mouse[0]);
	        if (this.touch0 && key !== "touch") this.touch0[1] = transform.invert(this.touch0[0]);
	        if (this.touch1 && key !== "touch") this.touch1[1] = transform.invert(this.touch1[0]);
	        this.that.__zoom = transform;
	        this.emit("zoom");
	        return this;
	      },
	      end: function() {
	        if (--this.active === 0) {
	          gestures.splice(this.index, 1);
	          this.index = -1;
	          this.emit("end");
	        }
	        return this;
	      },
	      emit: function(type) {
	        customEvent(new ZoomEvent(zoom, type, this.that.__zoom), listeners.apply, listeners, [type, this.that, this.args]);
	      }
	    };
	
	    function wheeled() {
	      if (!filter.apply(this, arguments)) return;
	      var g = gesture(this, arguments),
	          t = this.__zoom,
	          k = Math.max(k0, Math.min(k1, t.k * Math.pow(2, -exports.event.deltaY * (exports.event.deltaMode ? 120 : 1) / 500))),
	          p = mouse(this);
	
	      // If the mouse is in the same location as before, reuse it.
	      // If there were recent wheel events, reset the wheel idle timeout.
	      if (g.wheel) {
	        if (g.mouse[0][0] !== p[0] || g.mouse[0][1] !== p[1]) {
	          g.mouse[1] = t.invert(g.mouse[0] = p);
	        }
	        clearTimeout(g.wheel);
	      }
	
	      // If this wheel event won’t trigger a transform change, ignore it.
	      else if (t.k === k) return;
	
	      // Otherwise, capture the mouse point and location at the start.
	      else {
	        g.mouse = [p, t.invert(p)];
	        interrupt(this);
	        g.start();
	      }
	
	      noevent$1();
	      g.wheel = setTimeout(wheelidled, wheelDelay);
	      g.zoom("mouse", constrain(translate(scale(t, k), g.mouse[0], g.mouse[1]), g.extent));
	
	      function wheelidled() {
	        g.wheel = null;
	        g.end();
	      }
	    }
	
	    function mousedowned() {
	      if (touchending || !filter.apply(this, arguments)) return;
	      var g = gesture(this, arguments),
	          v = select(exports.event.view).on("mousemove.zoom", mousemoved, true).on("mouseup.zoom", mouseupped, true),
	          p = mouse(this);
	
	      dragDisable(exports.event.view);
	      nopropagation$1();
	      g.mouse = [p, this.__zoom.invert(p)];
	      interrupt(this);
	      g.start();
	
	      function mousemoved() {
	        noevent$1();
	        g.moved = true;
	        g.zoom("mouse", constrain(translate(g.that.__zoom, g.mouse[0] = mouse(g.that), g.mouse[1]), g.extent));
	      }
	
	      function mouseupped() {
	        v.on("mousemove.zoom mouseup.zoom", null);
	        dragEnable(exports.event.view, g.moved);
	        noevent$1();
	        g.end();
	      }
	    }
	
	    function dblclicked() {
	      if (!filter.apply(this, arguments)) return;
	      var t0 = this.__zoom,
	          p0 = mouse(this),
	          p1 = t0.invert(p0),
	          k1 = t0.k * (exports.event.shiftKey ? 0.5 : 2),
	          t1 = constrain(translate(scale(t0, k1), p0, p1), extent.apply(this, arguments));
	
	      noevent$1();
	      if (duration > 0) select(this).transition().duration(duration).call(schedule, t1, p0);
	      else select(this).call(zoom.transform, t1);
	    }
	
	    function touchstarted() {
	      if (!filter.apply(this, arguments)) return;
	      var g = gesture(this, arguments),
	          touches = exports.event.changedTouches,
	          n = touches.length, i, t, p;
	
	      nopropagation$1();
	      for (i = 0; i < n; ++i) {
	        t = touches[i], p = touch(this, touches, t.identifier);
	        p = [p, this.__zoom.invert(p), t.identifier];
	        if (!g.touch0) g.touch0 = p;
	        else if (!g.touch1) g.touch1 = p;
	      }
	      if (touchstarting) {
	        touchstarting = clearTimeout(touchstarting);
	        if (!g.touch1) return g.end(), dblclicked.apply(this, arguments);
	      }
	      if (exports.event.touches.length === n) {
	        touchstarting = setTimeout(function() { touchstarting = null; }, touchDelay);
	        interrupt(this);
	        g.start();
	      }
	    }
	
	    function touchmoved() {
	      var g = gesture(this, arguments),
	          touches = exports.event.changedTouches,
	          n = touches.length, i, t, p, l;
	
	      noevent$1();
	      if (touchstarting) touchstarting = clearTimeout(touchstarting);
	      for (i = 0; i < n; ++i) {
	        t = touches[i], p = touch(this, touches, t.identifier);
	        if (g.touch0 && g.touch0[2] === t.identifier) g.touch0[0] = p;
	        else if (g.touch1 && g.touch1[2] === t.identifier) g.touch1[0] = p;
	      }
	      t = g.that.__zoom;
	      if (g.touch1) {
	        var p0 = g.touch0[0], l0 = g.touch0[1],
	            p1 = g.touch1[0], l1 = g.touch1[1],
	            dp = (dp = p1[0] - p0[0]) * dp + (dp = p1[1] - p0[1]) * dp,
	            dl = (dl = l1[0] - l0[0]) * dl + (dl = l1[1] - l0[1]) * dl;
	        t = scale(t, Math.sqrt(dp / dl));
	        p = [(p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2];
	        l = [(l0[0] + l1[0]) / 2, (l0[1] + l1[1]) / 2];
	      }
	      else if (g.touch0) p = g.touch0[0], l = g.touch0[1];
	      else return;
	      g.zoom("touch", constrain(translate(t, p, l), g.extent));
	    }
	
	    function touchended() {
	      var g = gesture(this, arguments),
	          touches = exports.event.changedTouches,
	          n = touches.length, i, t;
	
	      nopropagation$1();
	      if (touchending) clearTimeout(touchending);
	      touchending = setTimeout(function() { touchending = null; }, touchDelay);
	      for (i = 0; i < n; ++i) {
	        t = touches[i];
	        if (g.touch0 && g.touch0[2] === t.identifier) delete g.touch0;
	        else if (g.touch1 && g.touch1[2] === t.identifier) delete g.touch1;
	      }
	      if (g.touch1 && !g.touch0) g.touch0 = g.touch1, delete g.touch1;
	      if (!g.touch0) g.end();
	    }
	
	    zoom.filter = function(_) {
	      return arguments.length ? (filter = typeof _ === "function" ? _ : constant$9(!!_), zoom) : filter;
	    };
	
	    zoom.extent = function(_) {
	      return arguments.length ? (extent = typeof _ === "function" ? _ : constant$9([[+_[0][0], +_[0][1]], [+_[1][0], +_[1][1]]]), zoom) : extent;
	    };
	
	    zoom.scaleExtent = function(_) {
	      return arguments.length ? (k0 = +_[0], k1 = +_[1], zoom) : [k0, k1];
	    };
	
	    zoom.translateExtent = function(_) {
	      return arguments.length ? (x0 = +_[0][0], x1 = +_[1][0], y0 = +_[0][1], y1 = +_[1][1], zoom) : [[x0, y0], [x1, y1]];
	    };
	
	    zoom.duration = function(_) {
	      return arguments.length ? (duration = +_, zoom) : duration;
	    };
	
	    zoom.on = function() {
	      var value = listeners.on.apply(listeners, arguments);
	      return value === listeners ? zoom : value;
	    };
	
	    return zoom;
	  }
	
	  function constant$10(x) {
	    return function() {
	      return x;
	    };
	  }
	
	  function BrushEvent(target, type, selection) {
	    this.target = target;
	    this.type = type;
	    this.selection = selection;
	  }
	
	  function nopropagation$2() {
	    exports.event.stopImmediatePropagation();
	  }
	
	  function noevent$2() {
	    exports.event.preventDefault();
	    exports.event.stopImmediatePropagation();
	  }
	
	  var MODE_DRAG = {name: "drag"};
	  var MODE_SPACE = {name: "space"};
	  var MODE_HANDLE = {name: "handle"};
	  var MODE_CENTER = {name: "center"};
	  var X = {
	    name: "x",
	    handles: ["e", "w"].map(type$1),
	    input: function(x, e) { return x && [[x[0], e[0][1]], [x[1], e[1][1]]]; },
	    output: function(xy) { return xy && [xy[0][0], xy[1][0]]; }
	  };
	
	  var Y = {
	    name: "y",
	    handles: ["n", "s"].map(type$1),
	    input: function(y, e) { return y && [[e[0][0], y[0]], [e[1][0], y[1]]]; },
	    output: function(xy) { return xy && [xy[0][1], xy[1][1]]; }
	  };
	
	  var XY = {
	    name: "xy",
	    handles: ["n", "e", "s", "w", "nw", "ne", "se", "sw"].map(type$1),
	    input: function(xy) { return xy; },
	    output: function(xy) { return xy; }
	  };
	
	  var cursors = {
	    overlay: "crosshair",
	    selection: "move",
	    n: "ns-resize",
	    e: "ew-resize",
	    s: "ns-resize",
	    w: "ew-resize",
	    nw: "nwse-resize",
	    ne: "nesw-resize",
	    se: "nwse-resize",
	    sw: "nesw-resize"
	  };
	
	  var flipX = {
	    e: "w",
	    w: "e",
	    nw: "ne",
	    ne: "nw",
	    se: "sw",
	    sw: "se"
	  };
	
	  var flipY = {
	    n: "s",
	    s: "n",
	    nw: "sw",
	    ne: "se",
	    se: "ne",
	    sw: "nw"
	  };
	
	  var signsX = {
	    overlay: +1,
	    selection: +1,
	    n: null,
	    e: +1,
	    s: null,
	    w: -1,
	    nw: -1,
	    ne: +1,
	    se: +1,
	    sw: -1
	  };
	
	  var signsY = {
	    overlay: +1,
	    selection: +1,
	    n: -1,
	    e: null,
	    s: +1,
	    w: null,
	    nw: -1,
	    ne: -1,
	    se: +1,
	    sw: +1
	  };
	
	  function type$1(t) {
	    return {type: t};
	  }
	
	  // Ignore right-click, since that should open the context menu.
	  function defaultFilter$2() {
	    return !exports.event.button;
	  }
	
	  function defaultExtent$1() {
	    var svg = this.ownerSVGElement || this;
	    return [[0, 0], [svg.width.baseVal.value, svg.height.baseVal.value]];
	  }
	
	  // Like d3.local, but with the name “__brush” rather than auto-generated.
	  function local$1(node) {
	    while (!node.__brush) if (!(node = node.parentNode)) return;
	    return node.__brush;
	  }
	
	  function empty$1(extent) {
	    return extent[0][0] === extent[1][0]
	        || extent[0][1] === extent[1][1];
	  }
	
	  function brushSelection(node) {
	    var state = node.__brush;
	    return state ? state.dim.output(state.selection) : null;
	  }
	
	  function brushX() {
	    return brush$1(X);
	  }
	
	  function brushY() {
	    return brush$1(Y);
	  }
	
	  function brush() {
	    return brush$1(XY);
	  }
	
	  function brush$1(dim) {
	    var extent = defaultExtent$1,
	        filter = defaultFilter$2,
	        listeners = dispatch(brush, "start", "brush", "end"),
	        handleSize = 6,
	        touchending;
	
	    function brush(group) {
	      var overlay = group
	          .property("__brush", initialize)
	        .selectAll(".overlay")
	        .data([type$1("overlay")]);
	
	      overlay.enter().append("rect")
	          .attr("class", "overlay")
	          .attr("pointer-events", "all")
	          .attr("cursor", cursors.overlay)
	        .merge(overlay)
	          .each(function() {
	            var extent = local$1(this).extent;
	            select(this)
	                .attr("x", extent[0][0])
	                .attr("y", extent[0][1])
	                .attr("width", extent[1][0] - extent[0][0])
	                .attr("height", extent[1][1] - extent[0][1]);
	          });
	
	      group.selectAll(".selection")
	        .data([type$1("selection")])
	        .enter().append("rect")
	          .attr("class", "selection")
	          .attr("cursor", cursors.selection)
	          .attr("fill", "#777")
	          .attr("fill-opacity", 0.3)
	          .attr("stroke", "#fff")
	          .attr("shape-rendering", "crispEdges");
	
	      var handle = group.selectAll(".handle")
	        .data(dim.handles, function(d) { return d.type; });
	
	      handle.exit().remove();
	
	      handle.enter().append("rect")
	          .attr("class", function(d) { return "handle handle--" + d.type; })
	          .attr("cursor", function(d) { return cursors[d.type]; });
	
	      group
	          .each(redraw)
	          .attr("fill", "none")
	          .attr("pointer-events", "all")
	          .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)")
	          .on("mousedown.brush touchstart.brush", started);
	    }
	
	    brush.move = function(group, selection) {
	      if (group.selection) {
	        group
	            .on("start.brush", function() { emitter(this, arguments).beforestart().start(); })
	            .on("interrupt.brush end.brush", function() { emitter(this, arguments).end(); })
	            .tween("brush", function() {
	              var that = this,
	                  state = that.__brush,
	                  emit = emitter(that, arguments),
	                  selection0 = state.selection,
	                  selection1 = dim.input(typeof selection === "function" ? selection.apply(this, arguments) : selection, state.extent),
	                  i = interpolate(selection0, selection1);
	
	              function tween(t) {
	                state.selection = t === 1 && empty$1(selection1) ? null : i(t);
	                redraw.call(that);
	                emit.brush();
	              }
	
	              return selection0 && selection1 ? tween : tween(1);
	            });
	      } else {
	        group
	            .each(function() {
	              var that = this,
	                  args = arguments,
	                  state = that.__brush,
	                  selection1 = dim.input(typeof selection === "function" ? selection.apply(that, args) : selection, state.extent),
	                  emit = emitter(that, args).beforestart();
	
	              interrupt(that);
	              state.selection = selection1 == null || empty$1(selection1) ? null : selection1;
	              redraw.call(that);
	              emit.start().brush().end();
	            });
	      }
	    };
	
	    function redraw() {
	      var group = select(this),
	          selection = local$1(this).selection;
	
	      if (selection) {
	        group.selectAll(".selection")
	            .style("display", null)
	            .attr("x", selection[0][0])
	            .attr("y", selection[0][1])
	            .attr("width", selection[1][0] - selection[0][0])
	            .attr("height", selection[1][1] - selection[0][1]);
	
	        group.selectAll(".handle")
	            .style("display", null)
	            .attr("x", function(d) { return d.type[d.type.length - 1] === "e" ? selection[1][0] - handleSize / 2 : selection[0][0] - handleSize / 2; })
	            .attr("y", function(d) { return d.type[0] === "s" ? selection[1][1] - handleSize / 2 : selection[0][1] - handleSize / 2; })
	            .attr("width", function(d) { return d.type === "n" || d.type === "s" ? selection[1][0] - selection[0][0] + handleSize : handleSize; })
	            .attr("height", function(d) { return d.type === "e" || d.type === "w" ? selection[1][1] - selection[0][1] + handleSize : handleSize; });
	      }
	
	      else {
	        group.selectAll(".selection,.handle")
	            .style("display", "none")
	            .attr("x", null)
	            .attr("y", null)
	            .attr("width", null)
	            .attr("height", null);
	      }
	    }
	
	    function emitter(that, args) {
	      return that.__brush.emitter || new Emitter(that, args);
	    }
	
	    function Emitter(that, args) {
	      this.that = that;
	      this.args = args;
	      this.state = that.__brush;
	      this.active = 0;
	    }
	
	    Emitter.prototype = {
	      beforestart: function() {
	        if (++this.active === 1) this.state.emitter = this, this.starting = true;
	        return this;
	      },
	      start: function() {
	        if (this.starting) this.starting = false, this.emit("start");
	        return this;
	      },
	      brush: function() {
	        this.emit("brush");
	        return this;
	      },
	      end: function() {
	        if (--this.active === 0) delete this.state.emitter, this.emit("end");
	        return this;
	      },
	      emit: function(type) {
	        customEvent(new BrushEvent(brush, type, dim.output(this.state.selection)), listeners.apply, listeners, [type, this.that, this.args]);
	      }
	    };
	
	    function started() {
	      if (exports.event.touches) { if (exports.event.changedTouches.length < exports.event.touches.length) return noevent$2(); }
	      else if (touchending) return;
	      if (!filter.apply(this, arguments)) return;
	
	      var that = this,
	          type = exports.event.target.__data__.type,
	          mode = (exports.event.metaKey ? type = "overlay" : type) === "selection" ? MODE_DRAG : (exports.event.altKey ? MODE_CENTER : MODE_HANDLE),
	          signX = dim === Y ? null : signsX[type],
	          signY = dim === X ? null : signsY[type],
	          state = local$1(that),
	          extent = state.extent,
	          selection = state.selection,
	          W = extent[0][0], w0, w1,
	          N = extent[0][1], n0, n1,
	          E = extent[1][0], e0, e1,
	          S = extent[1][1], s0, s1,
	          dx,
	          dy,
	          moving,
	          shifting = signX && signY && exports.event.shiftKey,
	          lockX,
	          lockY,
	          point0 = mouse(that),
	          point = point0,
	          emit = emitter(that, arguments).beforestart();
	
	      if (type === "overlay") {
	        state.selection = selection = [
	          [w0 = dim === Y ? W : point0[0], n0 = dim === X ? N : point0[1]],
	          [e0 = dim === Y ? E : w0, s0 = dim === X ? S : n0]
	        ];
	      } else {
	        w0 = selection[0][0];
	        n0 = selection[0][1];
	        e0 = selection[1][0];
	        s0 = selection[1][1];
	      }
	
	      w1 = w0;
	      n1 = n0;
	      e1 = e0;
	      s1 = s0;
	
	      var group = select(that)
	          .attr("pointer-events", "none");
	
	      var overlay = group.selectAll(".overlay")
	          .attr("cursor", cursors[type]);
	
	      if (exports.event.touches) {
	        group
	            .on("touchmove.brush", moved, true)
	            .on("touchend.brush touchcancel.brush", ended, true);
	      } else {
	        var view = select(exports.event.view)
	            .on("keydown.brush", keydowned, true)
	            .on("keyup.brush", keyupped, true)
	            .on("mousemove.brush", moved, true)
	            .on("mouseup.brush", ended, true);
	
	        dragDisable(exports.event.view);
	      }
	
	      nopropagation$2();
	      interrupt(that);
	      redraw.call(that);
	      emit.start();
	
	      function moved() {
	        var point1 = mouse(that);
	        if (shifting && !lockX && !lockY) {
	          if (Math.abs(point1[0] - point[0]) > Math.abs(point1[1] - point[1])) lockY = true;
	          else lockX = true;
	        }
	        point = point1;
	        moving = true;
	        noevent$2();
	        move();
	      }
	
	      function move() {
	        var t;
	
	        dx = point[0] - point0[0];
	        dy = point[1] - point0[1];
	
	        switch (mode) {
	          case MODE_SPACE:
	          case MODE_DRAG: {
	            if (signX) dx = Math.max(W - w0, Math.min(E - e0, dx)), w1 = w0 + dx, e1 = e0 + dx;
	            if (signY) dy = Math.max(N - n0, Math.min(S - s0, dy)), n1 = n0 + dy, s1 = s0 + dy;
	            break;
	          }
	          case MODE_HANDLE: {
	            if (signX < 0) dx = Math.max(W - w0, Math.min(E - w0, dx)), w1 = w0 + dx, e1 = e0;
	            else if (signX > 0) dx = Math.max(W - e0, Math.min(E - e0, dx)), w1 = w0, e1 = e0 + dx;
	            if (signY < 0) dy = Math.max(N - n0, Math.min(S - n0, dy)), n1 = n0 + dy, s1 = s0;
	            else if (signY > 0) dy = Math.max(N - s0, Math.min(S - s0, dy)), n1 = n0, s1 = s0 + dy;
	            break;
	          }
	          case MODE_CENTER: {
	            if (signX) w1 = Math.max(W, Math.min(E, w0 - dx * signX)), e1 = Math.max(W, Math.min(E, e0 + dx * signX));
	            if (signY) n1 = Math.max(N, Math.min(S, n0 - dy * signY)), s1 = Math.max(N, Math.min(S, s0 + dy * signY));
	            break;
	          }
	        }
	
	        if (e1 < w1) {
	          signX *= -1;
	          t = w0, w0 = e0, e0 = t;
	          t = w1, w1 = e1, e1 = t;
	          if (type in flipX) overlay.attr("cursor", cursors[type = flipX[type]]);
	        }
	
	        if (s1 < n1) {
	          signY *= -1;
	          t = n0, n0 = s0, s0 = t;
	          t = n1, n1 = s1, s1 = t;
	          if (type in flipY) overlay.attr("cursor", cursors[type = flipY[type]]);
	        }
	
	        selection = state.selection; // May be set by brush.move!
	
	        if (lockX) w1 = selection[0][0], e1 = selection[1][0];
	        if (lockY) n1 = selection[0][1], s1 = selection[1][1];
	
	        if (selection[0][0] !== w1
	            || selection[0][1] !== n1
	            || selection[1][0] !== e1
	            || selection[1][1] !== s1) {
	          state.selection = [[w1, n1], [e1, s1]];
	          redraw.call(that);
	          emit.brush();
	        }
	      }
	
	      function ended() {
	        nopropagation$2();
	        if (exports.event.touches) {
	          if (exports.event.touches.length) return;
	          if (touchending) clearTimeout(touchending);
	          touchending = setTimeout(function() { touchending = null; }, 500); // Ghost clicks are delayed!
	          group.on("touchmove.brush touchend.brush touchcancel.brush", null);
	        } else {
	          dragEnable(exports.event.view, moving);
	          view.on("keydown.brush keyup.brush mousemove.brush mouseup.brush", null);
	        }
	        group.attr("pointer-events", "all");
	        overlay.attr("cursor", cursors.overlay);
	        if (empty$1(selection)) state.selection = null, redraw.call(that);
	        emit.end();
	      }
	
	      function keydowned() {
	        switch (exports.event.keyCode) {
	          case 16: { // SHIFT
	            shifting = signX && signY;
	            break;
	          }
	          case 18: { // ALT
	            if (mode === MODE_HANDLE) {
	              if (signX) e0 = e1 - dx * signX, w0 = w1 + dx * signX;
	              if (signY) s0 = s1 - dy * signY, n0 = n1 + dy * signY;
	              mode = MODE_CENTER;
	              move();
	            }
	            break;
	          }
	          case 32: { // SPACE; takes priority over ALT
	            if (mode === MODE_HANDLE || mode === MODE_CENTER) {
	              if (signX < 0) e0 = e1 - dx; else if (signX > 0) w0 = w1 - dx;
	              if (signY < 0) s0 = s1 - dy; else if (signY > 0) n0 = n1 - dy;
	              mode = MODE_SPACE;
	              overlay.attr("cursor", cursors.selection);
	              move();
	            }
	            break;
	          }
	          default: return;
	        }
	        noevent$2();
	      }
	
	      function keyupped() {
	        switch (exports.event.keyCode) {
	          case 16: { // SHIFT
	            if (shifting) {
	              lockX = lockY = shifting = false;
	              move();
	            }
	            break;
	          }
	          case 18: { // ALT
	            if (mode === MODE_CENTER) {
	              if (signX < 0) e0 = e1; else if (signX > 0) w0 = w1;
	              if (signY < 0) s0 = s1; else if (signY > 0) n0 = n1;
	              mode = MODE_HANDLE;
	              move();
	            }
	            break;
	          }
	          case 32: { // SPACE
	            if (mode === MODE_SPACE) {
	              if (exports.event.altKey) {
	                if (signX) e0 = e1 - dx * signX, w0 = w1 + dx * signX;
	                if (signY) s0 = s1 - dy * signY, n0 = n1 + dy * signY;
	                mode = MODE_CENTER;
	              } else {
	                if (signX < 0) e0 = e1; else if (signX > 0) w0 = w1;
	                if (signY < 0) s0 = s1; else if (signY > 0) n0 = n1;
	                mode = MODE_HANDLE;
	              }
	              overlay.attr("cursor", cursors[type]);
	              move();
	            }
	            break;
	          }
	          default: return;
	        }
	        noevent$2();
	      }
	    }
	
	    function initialize() {
	      var state = this.__brush || {selection: null};
	      state.extent = extent.apply(this, arguments);
	      state.dim = dim;
	      return state;
	    }
	
	    brush.extent = function(_) {
	      return arguments.length ? (extent = typeof _ === "function" ? _ : constant$10([[+_[0][0], +_[0][1]], [+_[1][0], +_[1][1]]]), brush) : extent;
	    };
	
	    brush.filter = function(_) {
	      return arguments.length ? (filter = typeof _ === "function" ? _ : constant$10(!!_), brush) : filter;
	    };
	
	    brush.handleSize = function(_) {
	      return arguments.length ? (handleSize = +_, brush) : handleSize;
	    };
	
	    brush.on = function() {
	      var value = listeners.on.apply(listeners, arguments);
	      return value === listeners ? brush : value;
	    };
	
	    return brush;
	  }
	
	  var cos = Math.cos;
	  var sin = Math.sin;
	  var pi$3 = Math.PI;
	  var halfPi$2 = pi$3 / 2;
	  var tau$3 = pi$3 * 2;
	  var max$1 = Math.max;
	
	  function compareValue(compare) {
	    return function(a, b) {
	      return compare(
	        a.source.value + a.target.value,
	        b.source.value + b.target.value
	      );
	    };
	  }
	
	  function chord() {
	    var padAngle = 0,
	        sortGroups = null,
	        sortSubgroups = null,
	        sortChords = null;
	
	    function chord(matrix) {
	      var n = matrix.length,
	          groupSums = [],
	          groupIndex = range(n),
	          subgroupIndex = [],
	          chords = [],
	          groups = chords.groups = new Array(n),
	          subgroups = new Array(n * n),
	          k,
	          x,
	          x0,
	          dx,
	          i,
	          j;
	
	      // Compute the sum.
	      k = 0, i = -1; while (++i < n) {
	        x = 0, j = -1; while (++j < n) {
	          x += matrix[i][j];
	        }
	        groupSums.push(x);
	        subgroupIndex.push(range(n));
	        k += x;
	      }
	
	      // Sort groups…
	      if (sortGroups) groupIndex.sort(function(a, b) {
	        return sortGroups(groupSums[a], groupSums[b]);
	      });
	
	      // Sort subgroups…
	      if (sortSubgroups) subgroupIndex.forEach(function(d, i) {
	        d.sort(function(a, b) {
	          return sortSubgroups(matrix[i][a], matrix[i][b]);
	        });
	      });
	
	      // Convert the sum to scaling factor for [0, 2pi].
	      // TODO Allow start and end angle to be specified?
	      // TODO Allow padding to be specified as percentage?
	      k = max$1(0, tau$3 - padAngle * n) / k;
	      dx = k ? padAngle : tau$3 / n;
	
	      // Compute the start and end angle for each group and subgroup.
	      // Note: Opera has a bug reordering object literal properties!
	      x = 0, i = -1; while (++i < n) {
	        x0 = x, j = -1; while (++j < n) {
	          var di = groupIndex[i],
	              dj = subgroupIndex[di][j],
	              v = matrix[di][dj],
	              a0 = x,
	              a1 = x += v * k;
	          subgroups[dj * n + di] = {
	            index: di,
	            subindex: dj,
	            startAngle: a0,
	            endAngle: a1,
	            value: v
	          };
	        }
	        groups[di] = {
	          index: di,
	          startAngle: x0,
	          endAngle: x,
	          value: groupSums[di]
	        };
	        x += dx;
	      }
	
	      // Generate chords for each (non-empty) subgroup-subgroup link.
	      i = -1; while (++i < n) {
	        j = i - 1; while (++j < n) {
	          var source = subgroups[j * n + i],
	              target = subgroups[i * n + j];
	          if (source.value || target.value) {
	            chords.push(source.value < target.value
	                ? {source: target, target: source}
	                : {source: source, target: target});
	          }
	        }
	      }
	
	      return sortChords ? chords.sort(sortChords) : chords;
	    }
	
	    chord.padAngle = function(_) {
	      return arguments.length ? (padAngle = max$1(0, _), chord) : padAngle;
	    };
	
	    chord.sortGroups = function(_) {
	      return arguments.length ? (sortGroups = _, chord) : sortGroups;
	    };
	
	    chord.sortSubgroups = function(_) {
	      return arguments.length ? (sortSubgroups = _, chord) : sortSubgroups;
	    };
	
	    chord.sortChords = function(_) {
	      return arguments.length ? (_ == null ? sortChords = null : (sortChords = compareValue(_))._ = _, chord) : sortChords && sortChords._;
	    };
	
	    return chord;
	  }
	
	  var slice$5 = Array.prototype.slice;
	
	  function constant$11(x) {
	    return function() {
	      return x;
	    };
	  }
	
	  function defaultSource(d) {
	    return d.source;
	  }
	
	  function defaultTarget(d) {
	    return d.target;
	  }
	
	  function defaultRadius$1(d) {
	    return d.radius;
	  }
	
	  function defaultStartAngle(d) {
	    return d.startAngle;
	  }
	
	  function defaultEndAngle(d) {
	    return d.endAngle;
	  }
	
	  function ribbon() {
	    var source = defaultSource,
	        target = defaultTarget,
	        radius = defaultRadius$1,
	        startAngle = defaultStartAngle,
	        endAngle = defaultEndAngle,
	        context = null;
	
	    function ribbon() {
	      var buffer,
	          argv = slice$5.call(arguments),
	          s = source.apply(this, argv),
	          t = target.apply(this, argv),
	          sr = +radius.apply(this, (argv[0] = s, argv)),
	          sa0 = startAngle.apply(this, argv) - halfPi$2,
	          sa1 = endAngle.apply(this, argv) - halfPi$2,
	          sx0 = sr * cos(sa0),
	          sy0 = sr * sin(sa0),
	          tr = +radius.apply(this, (argv[0] = t, argv)),
	          ta0 = startAngle.apply(this, argv) - halfPi$2,
	          ta1 = endAngle.apply(this, argv) - halfPi$2;
	
	      if (!context) context = buffer = path();
	
	      context.moveTo(sx0, sy0);
	      context.arc(0, 0, sr, sa0, sa1);
	      if (sa0 !== ta0 || sa1 !== ta1) { // TODO sr !== tr?
	        context.quadraticCurveTo(0, 0, tr * cos(ta0), tr * sin(ta0));
	        context.arc(0, 0, tr, ta0, ta1);
	      }
	      context.quadraticCurveTo(0, 0, sx0, sy0);
	      context.closePath();
	
	      if (buffer) return context = null, buffer + "" || null;
	    }
	
	    ribbon.radius = function(_) {
	      return arguments.length ? (radius = typeof _ === "function" ? _ : constant$11(+_), ribbon) : radius;
	    };
	
	    ribbon.startAngle = function(_) {
	      return arguments.length ? (startAngle = typeof _ === "function" ? _ : constant$11(+_), ribbon) : startAngle;
	    };
	
	    ribbon.endAngle = function(_) {
	      return arguments.length ? (endAngle = typeof _ === "function" ? _ : constant$11(+_), ribbon) : endAngle;
	    };
	
	    ribbon.source = function(_) {
	      return arguments.length ? (source = _, ribbon) : source;
	    };
	
	    ribbon.target = function(_) {
	      return arguments.length ? (target = _, ribbon) : target;
	    };
	
	    ribbon.context = function(_) {
	      return arguments.length ? ((context = _ == null ? null : _), ribbon) : context;
	    };
	
	    return ribbon;
	  }
	
	  // Adds floating point numbers with twice the normal precision.
	  // Reference: J. R. Shewchuk, Adaptive Precision Floating-Point Arithmetic and
	  // Fast Robust Geometric Predicates, Discrete & Computational Geometry 18(3)
	  // 305–363 (1997).
	  // Code adapted from GeographicLib by Charles F. F. Karney,
	  // http://geographiclib.sourceforge.net/
	
	  function adder() {
	    return new Adder;
	  }
	
	  function Adder() {
	    this.reset();
	  }
	
	  Adder.prototype = {
	    constructor: Adder,
	    reset: function() {
	      this.s = // rounded value
	      this.t = 0; // exact error
	    },
	    add: function(y) {
	      add$1(temp, y, this.t);
	      add$1(this, temp.s, this.s);
	      if (this.s) this.t += temp.t;
	      else this.s = temp.t;
	    },
	    valueOf: function() {
	      return this.s;
	    }
	  };
	
	  var temp = new Adder;
	
	  function add$1(adder, a, b) {
	    var x = adder.s = a + b,
	        bv = x - a,
	        av = x - bv;
	    adder.t = (a - av) + (b - bv);
	  }
	
	  var epsilon$4 = 1e-6;
	  var epsilon2$2 = 1e-12;
	  var pi$4 = Math.PI;
	  var halfPi$3 = pi$4 / 2;
	  var quarterPi = pi$4 / 4;
	  var tau$4 = pi$4 * 2;
	
	  var degrees$1 = 180 / pi$4;
	  var radians = pi$4 / 180;
	
	  var abs = Math.abs;
	  var atan = Math.atan;
	  var atan2 = Math.atan2;
	  var cos$1 = Math.cos;
	  var ceil = Math.ceil;
	  var exp = Math.exp;
	  var log$1 = Math.log;
	  var pow$1 = Math.pow;
	  var sin$1 = Math.sin;
	  var sign$1 = Math.sign || function(x) { return x > 0 ? 1 : x < 0 ? -1 : 0; };
	  var sqrt$1 = Math.sqrt;
	  var tan = Math.tan;
	
	  function acos(x) {
	    return x > 1 ? 0 : x < -1 ? pi$4 : Math.acos(x);
	  }
	
	  function asin$1(x) {
	    return x > 1 ? halfPi$3 : x < -1 ? -halfPi$3 : Math.asin(x);
	  }
	
	  function haversin(x) {
	    return (x = sin$1(x / 2)) * x;
	  }
	
	  function noop$2() {}
	
	  function streamGeometry(geometry, stream) {
	    if (geometry && streamGeometryType.hasOwnProperty(geometry.type)) {
	      streamGeometryType[geometry.type](geometry, stream);
	    }
	  }
	
	  var streamObjectType = {
	    Feature: function(feature, stream) {
	      streamGeometry(feature.geometry, stream);
	    },
	    FeatureCollection: function(object, stream) {
	      var features = object.features, i = -1, n = features.length;
	      while (++i < n) streamGeometry(features[i].geometry, stream);
	    }
	  };
	
	  var streamGeometryType = {
	    Sphere: function(object, stream) {
	      stream.sphere();
	    },
	    Point: function(object, stream) {
	      object = object.coordinates;
	      stream.point(object[0], object[1], object[2]);
	    },
	    MultiPoint: function(object, stream) {
	      var coordinates = object.coordinates, i = -1, n = coordinates.length;
	      while (++i < n) object = coordinates[i], stream.point(object[0], object[1], object[2]);
	    },
	    LineString: function(object, stream) {
	      streamLine(object.coordinates, stream, 0);
	    },
	    MultiLineString: function(object, stream) {
	      var coordinates = object.coordinates, i = -1, n = coordinates.length;
	      while (++i < n) streamLine(coordinates[i], stream, 0);
	    },
	    Polygon: function(object, stream) {
	      streamPolygon(object.coordinates, stream);
	    },
	    MultiPolygon: function(object, stream) {
	      var coordinates = object.coordinates, i = -1, n = coordinates.length;
	      while (++i < n) streamPolygon(coordinates[i], stream);
	    },
	    GeometryCollection: function(object, stream) {
	      var geometries = object.geometries, i = -1, n = geometries.length;
	      while (++i < n) streamGeometry(geometries[i], stream);
	    }
	  };
	
	  function streamLine(coordinates, stream, closed) {
	    var i = -1, n = coordinates.length - closed, coordinate;
	    stream.lineStart();
	    while (++i < n) coordinate = coordinates[i], stream.point(coordinate[0], coordinate[1], coordinate[2]);
	    stream.lineEnd();
	  }
	
	  function streamPolygon(coordinates, stream) {
	    var i = -1, n = coordinates.length;
	    stream.polygonStart();
	    while (++i < n) streamLine(coordinates[i], stream, 1);
	    stream.polygonEnd();
	  }
	
	  function geoStream(object, stream) {
	    if (object && streamObjectType.hasOwnProperty(object.type)) {
	      streamObjectType[object.type](object, stream);
	    } else {
	      streamGeometry(object, stream);
	    }
	  }
	
	  var areaRingSum = adder();
	
	  var areaSum = adder();
	  var lambda00;
	  var phi00;
	  var lambda0;
	  var cosPhi0;
	  var sinPhi0;
	  var areaStream = {
	    point: noop$2,
	    lineStart: noop$2,
	    lineEnd: noop$2,
	    polygonStart: function() {
	      areaRingSum.reset();
	      areaStream.lineStart = areaRingStart;
	      areaStream.lineEnd = areaRingEnd;
	    },
	    polygonEnd: function() {
	      var areaRing = +areaRingSum;
	      areaSum.add(areaRing < 0 ? tau$4 + areaRing : areaRing);
	      this.lineStart = this.lineEnd = this.point = noop$2;
	    },
	    sphere: function() {
	      areaSum.add(tau$4);
	    }
	  };
	
	  function areaRingStart() {
	    areaStream.point = areaPointFirst;
	  }
	
	  function areaRingEnd() {
	    areaPoint(lambda00, phi00);
	  }
	
	  function areaPointFirst(lambda, phi) {
	    areaStream.point = areaPoint;
	    lambda00 = lambda, phi00 = phi;
	    lambda *= radians, phi *= radians;
	    lambda0 = lambda, cosPhi0 = cos$1(phi = phi / 2 + quarterPi), sinPhi0 = sin$1(phi);
	  }
	
	  function areaPoint(lambda, phi) {
	    lambda *= radians, phi *= radians;
	    phi = phi / 2 + quarterPi; // half the angular distance from south pole
	
	    // Spherical excess E for a spherical triangle with vertices: south pole,
	    // previous point, current point.  Uses a formula derived from Cagnoli’s
	    // theorem.  See Todhunter, Spherical Trig. (1871), Sec. 103, Eq. (2).
	    var dLambda = lambda - lambda0,
	        sdLambda = dLambda >= 0 ? 1 : -1,
	        adLambda = sdLambda * dLambda,
	        cosPhi = cos$1(phi),
	        sinPhi = sin$1(phi),
	        k = sinPhi0 * sinPhi,
	        u = cosPhi0 * cosPhi + k * cos$1(adLambda),
	        v = k * sdLambda * sin$1(adLambda);
	    areaRingSum.add(atan2(v, u));
	
	    // Advance the previous points.
	    lambda0 = lambda, cosPhi0 = cosPhi, sinPhi0 = sinPhi;
	  }
	
	  function area$2(object) {
	    areaSum.reset();
	    geoStream(object, areaStream);
	    return areaSum * 2;
	  }
	
	  function spherical(cartesian) {
	    return [atan2(cartesian[1], cartesian[0]), asin$1(cartesian[2])];
	  }
	
	  function cartesian(spherical) {
	    var lambda = spherical[0], phi = spherical[1], cosPhi = cos$1(phi);
	    return [cosPhi * cos$1(lambda), cosPhi * sin$1(lambda), sin$1(phi)];
	  }
	
	  function cartesianDot(a, b) {
	    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
	  }
	
	  function cartesianCross(a, b) {
	    return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
	  }
	
	  // TODO return a
	  function cartesianAddInPlace(a, b) {
	    a[0] += b[0], a[1] += b[1], a[2] += b[2];
	  }
	
	  function cartesianScale(vector, k) {
	    return [vector[0] * k, vector[1] * k, vector[2] * k];
	  }
	
	  // TODO return d
	  function cartesianNormalizeInPlace(d) {
	    var l = sqrt$1(d[0] * d[0] + d[1] * d[1] + d[2] * d[2]);
	    d[0] /= l, d[1] /= l, d[2] /= l;
	  }
	
	var   lambda0$1;
	  var phi0;
	  var lambda1;
	  var phi1;
	  var lambda2;
	var   lambda00$1;
	var   phi00$1;
	  var p0;
	  var deltaSum = adder();
	  var ranges;
	var   range$1;
	  var boundsStream = {
	    point: boundsPoint,
	    lineStart: boundsLineStart,
	    lineEnd: boundsLineEnd,
	    polygonStart: function() {
	      boundsStream.point = boundsRingPoint;
	      boundsStream.lineStart = boundsRingStart;
	      boundsStream.lineEnd = boundsRingEnd;
	      deltaSum.reset();
	      areaStream.polygonStart();
	    },
	    polygonEnd: function() {
	      areaStream.polygonEnd();
	      boundsStream.point = boundsPoint;
	      boundsStream.lineStart = boundsLineStart;
	      boundsStream.lineEnd = boundsLineEnd;
	      if (areaRingSum < 0) lambda0$1 = -(lambda1 = 180), phi0 = -(phi1 = 90);
	      else if (deltaSum > epsilon$4) phi1 = 90;
	      else if (deltaSum < -epsilon$4) phi0 = -90;
	      range$1[0] = lambda0$1, range$1[1] = lambda1;
	    }
	  };
	
	  function boundsPoint(lambda, phi) {
	    ranges.push(range$1 = [lambda0$1 = lambda, lambda1 = lambda]);
	    if (phi < phi0) phi0 = phi;
	    if (phi > phi1) phi1 = phi;
	  }
	
	  function linePoint(lambda, phi) {
	    var p = cartesian([lambda * radians, phi * radians]);
	    if (p0) {
	      var normal = cartesianCross(p0, p),
	          equatorial = [normal[1], -normal[0], 0],
	          inflection = cartesianCross(equatorial, normal);
	      cartesianNormalizeInPlace(inflection);
	      inflection = spherical(inflection);
	      var delta = lambda - lambda2,
	          sign = delta > 0 ? 1 : -1,
	          lambdai = inflection[0] * degrees$1 * sign,
	          phii,
	          antimeridian = abs(delta) > 180;
	      if (antimeridian ^ (sign * lambda2 < lambdai && lambdai < sign * lambda)) {
	        phii = inflection[1] * degrees$1;
	        if (phii > phi1) phi1 = phii;
	      } else if (lambdai = (lambdai + 360) % 360 - 180, antimeridian ^ (sign * lambda2 < lambdai && lambdai < sign * lambda)) {
	        phii = -inflection[1] * degrees$1;
	        if (phii < phi0) phi0 = phii;
	      } else {
	        if (phi < phi0) phi0 = phi;
	        if (phi > phi1) phi1 = phi;
	      }
	      if (antimeridian) {
	        if (lambda < lambda2) {
	          if (angle(lambda0$1, lambda) > angle(lambda0$1, lambda1)) lambda1 = lambda;
	        } else {
	          if (angle(lambda, lambda1) > angle(lambda0$1, lambda1)) lambda0$1 = lambda;
	        }
	      } else {
	        if (lambda1 >= lambda0$1) {
	          if (lambda < lambda0$1) lambda0$1 = lambda;
	          if (lambda > lambda1) lambda1 = lambda;
	        } else {
	          if (lambda > lambda2) {
	            if (angle(lambda0$1, lambda) > angle(lambda0$1, lambda1)) lambda1 = lambda;
	          } else {
	            if (angle(lambda, lambda1) > angle(lambda0$1, lambda1)) lambda0$1 = lambda;
	          }
	        }
	      }
	    } else {
	      boundsPoint(lambda, phi);
	    }
	    p0 = p, lambda2 = lambda;
	  }
	
	  function boundsLineStart() {
	    boundsStream.point = linePoint;
	  }
	
	  function boundsLineEnd() {
	    range$1[0] = lambda0$1, range$1[1] = lambda1;
	    boundsStream.point = boundsPoint;
	    p0 = null;
	  }
	
	  function boundsRingPoint(lambda, phi) {
	    if (p0) {
	      var delta = lambda - lambda2;
	      deltaSum.add(abs(delta) > 180 ? delta + (delta > 0 ? 360 : -360) : delta);
	    } else {
	      lambda00$1 = lambda, phi00$1 = phi;
	    }
	    areaStream.point(lambda, phi);
	    linePoint(lambda, phi);
	  }
	
	  function boundsRingStart() {
	    areaStream.lineStart();
	  }
	
	  function boundsRingEnd() {
	    boundsRingPoint(lambda00$1, phi00$1);
	    areaStream.lineEnd();
	    if (abs(deltaSum) > epsilon$4) lambda0$1 = -(lambda1 = 180);
	    range$1[0] = lambda0$1, range$1[1] = lambda1;
	    p0 = null;
	  }
	
	  // Finds the left-right distance between two longitudes.
	  // This is almost the same as (lambda1 - lambda0 + 360°) % 360°, except that we want
	  // the distance between ±180° to be 360°.
	  function angle(lambda0, lambda1) {
	    return (lambda1 -= lambda0) < 0 ? lambda1 + 360 : lambda1;
	  }
	
	  function rangeCompare(a, b) {
	    return a[0] - b[0];
	  }
	
	  function rangeContains(range, x) {
	    return range[0] <= range[1] ? range[0] <= x && x <= range[1] : x < range[0] || range[1] < x;
	  }
	
	  function bounds(feature) {
	    var i, n, a, b, merged, deltaMax, delta;
	
	    phi1 = lambda1 = -(lambda0$1 = phi0 = Infinity);
	    ranges = [];
	    geoStream(feature, boundsStream);
	
	    // First, sort ranges by their minimum longitudes.
	    if (n = ranges.length) {
	      ranges.sort(rangeCompare);
	
	      // Then, merge any ranges that overlap.
	      for (i = 1, a = ranges[0], merged = [a]; i < n; ++i) {
	        b = ranges[i];
	        if (rangeContains(a, b[0]) || rangeContains(a, b[1])) {
	          if (angle(a[0], b[1]) > angle(a[0], a[1])) a[1] = b[1];
	          if (angle(b[0], a[1]) > angle(a[0], a[1])) a[0] = b[0];
	        } else {
	          merged.push(a = b);
	        }
	      }
	
	      // Finally, find the largest gap between the merged ranges.
	      // The final bounding box will be the inverse of this gap.
	      for (deltaMax = -Infinity, n = merged.length - 1, i = 0, a = merged[n]; i <= n; a = b, ++i) {
	        b = merged[i];
	        if ((delta = angle(a[1], b[0])) > deltaMax) deltaMax = delta, lambda0$1 = b[0], lambda1 = a[1];
	      }
	    }
	
	    ranges = range$1 = null;
	
	    return lambda0$1 === Infinity || phi0 === Infinity
	        ? [[NaN, NaN], [NaN, NaN]]
	        : [[lambda0$1, phi0], [lambda1, phi1]];
	  }
	
	  var W0;
	  var W1;
	  var X0;
	  var Y0;
	  var Z0;
	  var X1;
	  var Y1;
	  var Z1;
	  var X2;
	  var Y2;
	  var Z2;
	var   lambda00$2;
	var   phi00$2;
	  var x0;
	  var y0;
	  var z0;
	  // previous point
	
	  var centroidStream = {
	    sphere: noop$2,
	    point: centroidPoint,
	    lineStart: centroidLineStart,
	    lineEnd: centroidLineEnd,
	    polygonStart: function() {
	      centroidStream.lineStart = centroidRingStart;
	      centroidStream.lineEnd = centroidRingEnd;
	    },
	    polygonEnd: function() {
	      centroidStream.lineStart = centroidLineStart;
	      centroidStream.lineEnd = centroidLineEnd;
	    }
	  };
	
	  // Arithmetic mean of Cartesian vectors.
	  function centroidPoint(lambda, phi) {
	    lambda *= radians, phi *= radians;
	    var cosPhi = cos$1(phi);
	    centroidPointCartesian(cosPhi * cos$1(lambda), cosPhi * sin$1(lambda), sin$1(phi));
	  }
	
	  function centroidPointCartesian(x, y, z) {
	    ++W0;
	    X0 += (x - X0) / W0;
	    Y0 += (y - Y0) / W0;
	    Z0 += (z - Z0) / W0;
	  }
	
	  function centroidLineStart() {
	    centroidStream.point = centroidLinePointFirst;
	  }
	
	  function centroidLinePointFirst(lambda, phi) {
	    lambda *= radians, phi *= radians;
	    var cosPhi = cos$1(phi);
	    x0 = cosPhi * cos$1(lambda);
	    y0 = cosPhi * sin$1(lambda);
	    z0 = sin$1(phi);
	    centroidStream.point = centroidLinePoint;
	    centroidPointCartesian(x0, y0, z0);
	  }
	
	  function centroidLinePoint(lambda, phi) {
	    lambda *= radians, phi *= radians;
	    var cosPhi = cos$1(phi),
	        x = cosPhi * cos$1(lambda),
	        y = cosPhi * sin$1(lambda),
	        z = sin$1(phi),
	        w = atan2(sqrt$1((w = y0 * z - z0 * y) * w + (w = z0 * x - x0 * z) * w + (w = x0 * y - y0 * x) * w), x0 * x + y0 * y + z0 * z);
	    W1 += w;
	    X1 += w * (x0 + (x0 = x));
	    Y1 += w * (y0 + (y0 = y));
	    Z1 += w * (z0 + (z0 = z));
	    centroidPointCartesian(x0, y0, z0);
	  }
	
	  function centroidLineEnd() {
	    centroidStream.point = centroidPoint;
	  }
	
	  // See J. E. Brock, The Inertia Tensor for a Spherical Triangle,
	  // J. Applied Mechanics 42, 239 (1975).
	  function centroidRingStart() {
	    centroidStream.point = centroidRingPointFirst;
	  }
	
	  function centroidRingEnd() {
	    centroidRingPoint(lambda00$2, phi00$2);
	    centroidStream.point = centroidPoint;
	  }
	
	  function centroidRingPointFirst(lambda, phi) {
	    lambda00$2 = lambda, phi00$2 = phi;
	    lambda *= radians, phi *= radians;
	    centroidStream.point = centroidRingPoint;
	    var cosPhi = cos$1(phi);
	    x0 = cosPhi * cos$1(lambda);
	    y0 = cosPhi * sin$1(lambda);
	    z0 = sin$1(phi);
	    centroidPointCartesian(x0, y0, z0);
	  }
	
	  function centroidRingPoint(lambda, phi) {
	    lambda *= radians, phi *= radians;
	    var cosPhi = cos$1(phi),
	        x = cosPhi * cos$1(lambda),
	        y = cosPhi * sin$1(lambda),
	        z = sin$1(phi),
	        cx = y0 * z - z0 * y,
	        cy = z0 * x - x0 * z,
	        cz = x0 * y - y0 * x,
	        m = sqrt$1(cx * cx + cy * cy + cz * cz),
	        u = x0 * x + y0 * y + z0 * z,
	        v = m && -acos(u) / m, // area weight
	        w = atan2(m, u); // line weight
	    X2 += v * cx;
	    Y2 += v * cy;
	    Z2 += v * cz;
	    W1 += w;
	    X1 += w * (x0 + (x0 = x));
	    Y1 += w * (y0 + (y0 = y));
	    Z1 += w * (z0 + (z0 = z));
	    centroidPointCartesian(x0, y0, z0);
	  }
	
	  function centroid$1(object) {
	    W0 = W1 =
	    X0 = Y0 = Z0 =
	    X1 = Y1 = Z1 =
	    X2 = Y2 = Z2 = 0;
	    geoStream(object, centroidStream);
	
	    var x = X2,
	        y = Y2,
	        z = Z2,
	        m = x * x + y * y + z * z;
	
	    // If the area-weighted ccentroid is undefined, fall back to length-weighted ccentroid.
	    if (m < epsilon2$2) {
	      x = X1, y = Y1, z = Z1;
	      // If the feature has zero length, fall back to arithmetic mean of point vectors.
	      if (W1 < epsilon$4) x = X0, y = Y0, z = Z0;
	      m = x * x + y * y + z * z;
	      // If the feature still has an undefined ccentroid, then return.
	      if (m < epsilon2$2) return [NaN, NaN];
	    }
	
	    return [atan2(y, x) * degrees$1, asin$1(z / sqrt$1(m)) * degrees$1];
	  }
	
	  function constant$12(x) {
	    return function() {
	      return x;
	    };
	  }
	
	  function compose(a, b) {
	
	    function compose(x, y) {
	      return x = a(x, y), b(x[0], x[1]);
	    }
	
	    if (a.invert && b.invert) compose.invert = function(x, y) {
	      return x = b.invert(x, y), x && a.invert(x[0], x[1]);
	    };
	
	    return compose;
	  }
	
	  function rotationIdentity(lambda, phi) {
	    return [lambda > pi$4 ? lambda - tau$4 : lambda < -pi$4 ? lambda + tau$4 : lambda, phi];
	  }
	
	  rotationIdentity.invert = rotationIdentity;
	
	  function rotateRadians(deltaLambda, deltaPhi, deltaGamma) {
	    return (deltaLambda %= tau$4) ? (deltaPhi || deltaGamma ? compose(rotationLambda(deltaLambda), rotationPhiGamma(deltaPhi, deltaGamma))
	      : rotationLambda(deltaLambda))
	      : (deltaPhi || deltaGamma ? rotationPhiGamma(deltaPhi, deltaGamma)
	      : rotationIdentity);
	  }
	
	  function forwardRotationLambda(deltaLambda) {
	    return function(lambda, phi) {
	      return lambda += deltaLambda, [lambda > pi$4 ? lambda - tau$4 : lambda < -pi$4 ? lambda + tau$4 : lambda, phi];
	    };
	  }
	
	  function rotationLambda(deltaLambda) {
	    var rotation = forwardRotationLambda(deltaLambda);
	    rotation.invert = forwardRotationLambda(-deltaLambda);
	    return rotation;
	  }
	
	  function rotationPhiGamma(deltaPhi, deltaGamma) {
	    var cosDeltaPhi = cos$1(deltaPhi),
	        sinDeltaPhi = sin$1(deltaPhi),
	        cosDeltaGamma = cos$1(deltaGamma),
	        sinDeltaGamma = sin$1(deltaGamma);
	
	    function rotation(lambda, phi) {
	      var cosPhi = cos$1(phi),
	          x = cos$1(lambda) * cosPhi,
	          y = sin$1(lambda) * cosPhi,
	          z = sin$1(phi),
	          k = z * cosDeltaPhi + x * sinDeltaPhi;
	      return [
	        atan2(y * cosDeltaGamma - k * sinDeltaGamma, x * cosDeltaPhi - z * sinDeltaPhi),
	        asin$1(k * cosDeltaGamma + y * sinDeltaGamma)
	      ];
	    }
	
	    rotation.invert = function(lambda, phi) {
	      var cosPhi = cos$1(phi),
	          x = cos$1(lambda) * cosPhi,
	          y = sin$1(lambda) * cosPhi,
	          z = sin$1(phi),
	          k = z * cosDeltaGamma - y * sinDeltaGamma;
	      return [
	        atan2(y * cosDeltaGamma + z * sinDeltaGamma, x * cosDeltaPhi + k * sinDeltaPhi),
	        asin$1(k * cosDeltaPhi - x * sinDeltaPhi)
	      ];
	    };
	
	    return rotation;
	  }
	
	  function rotation(rotate) {
	    rotate = rotateRadians(rotate[0] * radians, rotate[1] * radians, rotate.length > 2 ? rotate[2] * radians : 0);
	
	    function forward(coordinates) {
	      coordinates = rotate(coordinates[0] * radians, coordinates[1] * radians);
	      return coordinates[0] *= degrees$1, coordinates[1] *= degrees$1, coordinates;
	    }
	
	    forward.invert = function(coordinates) {
	      coordinates = rotate.invert(coordinates[0] * radians, coordinates[1] * radians);
	      return coordinates[0] *= degrees$1, coordinates[1] *= degrees$1, coordinates;
	    };
	
	    return forward;
	  }
	
	  // Generates a circle centered at [0°, 0°], with a given radius and precision.
	  function circleStream(stream, radius, delta, direction, t0, t1) {
	    if (!delta) return;
	    var cosRadius = cos$1(radius),
	        sinRadius = sin$1(radius),
	        step = direction * delta;
	    if (t0 == null) {
	      t0 = radius + direction * tau$4;
	      t1 = radius - step / 2;
	    } else {
	      t0 = circleRadius(cosRadius, t0);
	      t1 = circleRadius(cosRadius, t1);
	      if (direction > 0 ? t0 < t1 : t0 > t1) t0 += direction * tau$4;
	    }
	    for (var point, t = t0; direction > 0 ? t > t1 : t < t1; t -= step) {
	      point = spherical([cosRadius, -sinRadius * cos$1(t), -sinRadius * sin$1(t)]);
	      stream.point(point[0], point[1]);
	    }
	  }
	
	  // Returns the signed angle of a cartesian point relative to [cosRadius, 0, 0].
	  function circleRadius(cosRadius, point) {
	    point = cartesian(point), point[0] -= cosRadius;
	    cartesianNormalizeInPlace(point);
	    var radius = acos(-point[1]);
	    return ((-point[2] < 0 ? -radius : radius) + tau$4 - epsilon$4) % tau$4;
	  }
	
	  function circle$1() {
	    var center = constant$12([0, 0]),
	        radius = constant$12(90),
	        precision = constant$12(6),
	        ring,
	        rotate,
	        stream = {point: point};
	
	    function point(x, y) {
	      ring.push(x = rotate(x, y));
	      x[0] *= degrees$1, x[1] *= degrees$1;
	    }
	
	    function circle() {
	      var c = center.apply(this, arguments),
	          r = radius.apply(this, arguments) * radians,
	          p = precision.apply(this, arguments) * radians;
	      ring = [];
	      rotate = rotateRadians(-c[0] * radians, -c[1] * radians, 0).invert;
	      circleStream(stream, r, p, 1);
	      c = {type: "Polygon", coordinates: [ring]};
	      ring = rotate = null;
	      return c;
	    }
	
	    circle.center = function(_) {
	      return arguments.length ? (center = typeof _ === "function" ? _ : constant$12([+_[0], +_[1]]), circle) : center;
	    };
	
	    circle.radius = function(_) {
	      return arguments.length ? (radius = typeof _ === "function" ? _ : constant$12(+_), circle) : radius;
	    };
	
	    circle.precision = function(_) {
	      return arguments.length ? (precision = typeof _ === "function" ? _ : constant$12(+_), circle) : precision;
	    };
	
	    return circle;
	  }
	
	  function clipBuffer() {
	    var lines = [],
	        line;
	    return {
	      point: function(x, y) {
	        line.push([x, y]);
	      },
	      lineStart: function() {
	        lines.push(line = []);
	      },
	      lineEnd: noop$2,
	      rejoin: function() {
	        if (lines.length > 1) lines.push(lines.pop().concat(lines.shift()));
	      },
	      result: function() {
	        var result = lines;
	        lines = [];
	        line = null;
	        return result;
	      }
	    };
	  }
	
	  function clipLine(a, b, x0, y0, x1, y1) {
	    var ax = a[0],
	        ay = a[1],
	        bx = b[0],
	        by = b[1],
	        t0 = 0,
	        t1 = 1,
	        dx = bx - ax,
	        dy = by - ay,
	        r;
	
	    r = x0 - ax;
	    if (!dx && r > 0) return;
	    r /= dx;
	    if (dx < 0) {
	      if (r < t0) return;
	      if (r < t1) t1 = r;
	    } else if (dx > 0) {
	      if (r > t1) return;
	      if (r > t0) t0 = r;
	    }
	
	    r = x1 - ax;
	    if (!dx && r < 0) return;
	    r /= dx;
	    if (dx < 0) {
	      if (r > t1) return;
	      if (r > t0) t0 = r;
	    } else if (dx > 0) {
	      if (r < t0) return;
	      if (r < t1) t1 = r;
	    }
	
	    r = y0 - ay;
	    if (!dy && r > 0) return;
	    r /= dy;
	    if (dy < 0) {
	      if (r < t0) return;
	      if (r < t1) t1 = r;
	    } else if (dy > 0) {
	      if (r > t1) return;
	      if (r > t0) t0 = r;
	    }
	
	    r = y1 - ay;
	    if (!dy && r < 0) return;
	    r /= dy;
	    if (dy < 0) {
	      if (r > t1) return;
	      if (r > t0) t0 = r;
	    } else if (dy > 0) {
	      if (r < t0) return;
	      if (r < t1) t1 = r;
	    }
	
	    if (t0 > 0) a[0] = ax + t0 * dx, a[1] = ay + t0 * dy;
	    if (t1 < 1) b[0] = ax + t1 * dx, b[1] = ay + t1 * dy;
	    return true;
	  }
	
	  function pointEqual(a, b) {
	    return abs(a[0] - b[0]) < epsilon$4 && abs(a[1] - b[1]) < epsilon$4;
	  }
	
	  function Intersection(point, points, other, entry) {
	    this.x = point;
	    this.z = points;
	    this.o = other; // another intersection
	    this.e = entry; // is an entry?
	    this.v = false; // visited
	    this.n = this.p = null; // next & previous
	  }
	
	  // A generalized polygon clipping algorithm: given a polygon that has been cut
	  // into its visible line segments, and rejoins the segments by interpolating
	  // along the clip edge.
	  function clipPolygon(segments, compareIntersection, startInside, interpolate, stream) {
	    var subject = [],
	        clip = [],
	        i,
	        n;
	
	    segments.forEach(function(segment) {
	      if ((n = segment.length - 1) <= 0) return;
	      var n, p0 = segment[0], p1 = segment[n], x;
	
	      // If the first and last points of a segment are coincident, then treat as a
	      // closed ring. TODO if all rings are closed, then the winding order of the
	      // exterior ring should be checked.
	      if (pointEqual(p0, p1)) {
	        stream.lineStart();
	        for (i = 0; i < n; ++i) stream.point((p0 = segment[i])[0], p0[1]);
	        stream.lineEnd();
	        return;
	      }
	
	      subject.push(x = new Intersection(p0, segment, null, true));
	      clip.push(x.o = new Intersection(p0, null, x, false));
	      subject.push(x = new Intersection(p1, segment, null, false));
	      clip.push(x.o = new Intersection(p1, null, x, true));
	    });
	
	    if (!subject.length) return;
	
	    clip.sort(compareIntersection);
	    link$1(subject);
	    link$1(clip);
	
	    for (i = 0, n = clip.length; i < n; ++i) {
	      clip[i].e = startInside = !startInside;
	    }
	
	    var start = subject[0],
	        points,
	        point;
	
	    while (1) {
	      // Find first unvisited intersection.
	      var current = start,
	          isSubject = true;
	      while (current.v) if ((current = current.n) === start) return;
	      points = current.z;
	      stream.lineStart();
	      do {
	        current.v = current.o.v = true;
	        if (current.e) {
	          if (isSubject) {
	            for (i = 0, n = points.length; i < n; ++i) stream.point((point = points[i])[0], point[1]);
	          } else {
	            interpolate(current.x, current.n.x, 1, stream);
	          }
	          current = current.n;
	        } else {
	          if (isSubject) {
	            points = current.p.z;
	            for (i = points.length - 1; i >= 0; --i) stream.point((point = points[i])[0], point[1]);
	          } else {
	            interpolate(current.x, current.p.x, -1, stream);
	          }
	          current = current.p;
	        }
	        current = current.o;
	        points = current.z;
	        isSubject = !isSubject;
	      } while (!current.v);
	      stream.lineEnd();
	    }
	  }
	
	  function link$1(array) {
	    if (!(n = array.length)) return;
	    var n,
	        i = 0,
	        a = array[0],
	        b;
	    while (++i < n) {
	      a.n = b = array[i];
	      b.p = a;
	      a = b;
	    }
	    a.n = b = array[0];
	    b.p = a;
	  }
	
	  var clipMax = 1e9;
	  var clipMin = -clipMax;
	  // TODO Use d3-polygon’s polygonContains here for the ring check?
	  // TODO Eliminate duplicate buffering in clipBuffer and polygon.push?
	
	  function clipExtent(x0, y0, x1, y1) {
	
	    function visible(x, y) {
	      return x0 <= x && x <= x1 && y0 <= y && y <= y1;
	    }
	
	    function interpolate(from, to, direction, stream) {
	      var a = 0, a1 = 0;
	      if (from == null
	          || (a = corner(from, direction)) !== (a1 = corner(to, direction))
	          || comparePoint(from, to) < 0 ^ direction > 0) {
	        do stream.point(a === 0 || a === 3 ? x0 : x1, a > 1 ? y1 : y0);
	        while ((a = (a + direction + 4) % 4) !== a1);
	      } else {
	        stream.point(to[0], to[1]);
	      }
	    }
	
	    function corner(p, direction) {
	      return abs(p[0] - x0) < epsilon$4 ? direction > 0 ? 0 : 3
	          : abs(p[0] - x1) < epsilon$4 ? direction > 0 ? 2 : 1
	          : abs(p[1] - y0) < epsilon$4 ? direction > 0 ? 1 : 0
	          : direction > 0 ? 3 : 2; // abs(p[1] - y1) < epsilon
	    }
	
	    function compareIntersection(a, b) {
	      return comparePoint(a.x, b.x);
	    }
	
	    function comparePoint(a, b) {
	      var ca = corner(a, 1),
	          cb = corner(b, 1);
	      return ca !== cb ? ca - cb
	          : ca === 0 ? b[1] - a[1]
	          : ca === 1 ? a[0] - b[0]
	          : ca === 2 ? a[1] - b[1]
	          : b[0] - a[0];
	    }
	
	    return function(stream) {
	      var activeStream = stream,
	          bufferStream = clipBuffer(),
	          segments,
	          polygon,
	          ring,
	          x__, y__, v__, // first point
	          x_, y_, v_, // previous point
	          first,
	          clean;
	
	      var clipStream = {
	        point: point,
	        lineStart: lineStart,
	        lineEnd: lineEnd,
	        polygonStart: polygonStart,
	        polygonEnd: polygonEnd
	      };
	
	      function point(x, y) {
	        if (visible(x, y)) activeStream.point(x, y);
	      }
	
	      function polygonInside() {
	        var winding = 0;
	
	        for (var i = 0, n = polygon.length; i < n; ++i) {
	          for (var ring = polygon[i], j = 1, m = ring.length, point = ring[0], a0, a1, b0 = point[0], b1 = point[1]; j < m; ++j) {
	            a0 = b0, a1 = b1, point = ring[j], b0 = point[0], b1 = point[1];
	            if (a1 <= y1) { if (b1 > y1 && (b0 - a0) * (y1 - a1) > (b1 - a1) * (x0 - a0)) ++winding; }
	            else { if (b1 <= y1 && (b0 - a0) * (y1 - a1) < (b1 - a1) * (x0 - a0)) --winding; }
	          }
	        }
	
	        return winding;
	      }
	
	      // Buffer geometry within a polygon and then clip it en masse.
	      function polygonStart() {
	        activeStream = bufferStream, segments = [], polygon = [], clean = true;
	      }
	
	      function polygonEnd() {
	        var startInside = polygonInside(),
	            cleanInside = clean && startInside,
	            visible = (segments = merge(segments)).length;
	        if (cleanInside || visible) {
	          stream.polygonStart();
	          if (cleanInside) {
	            stream.lineStart();
	            interpolate(null, null, 1, stream);
	            stream.lineEnd();
	          }
	          if (visible) {
	            clipPolygon(segments, compareIntersection, startInside, interpolate, stream);
	          }
	          stream.polygonEnd();
	        }
	        activeStream = stream, segments = polygon = ring = null;
	      }
	
	      function lineStart() {
	        clipStream.point = linePoint;
	        if (polygon) polygon.push(ring = []);
	        first = true;
	        v_ = false;
	        x_ = y_ = NaN;
	      }
	
	      // TODO rather than special-case polygons, simply handle them separately.
	      // Ideally, coincident intersection points should be jittered to avoid
	      // clipping issues.
	      function lineEnd() {
	        if (segments) {
	          linePoint(x__, y__);
	          if (v__ && v_) bufferStream.rejoin();
	          segments.push(bufferStream.result());
	        }
	        clipStream.point = point;
	        if (v_) activeStream.lineEnd();
	      }
	
	      function linePoint(x, y) {
	        var v = visible(x, y);
	        if (polygon) ring.push([x, y]);
	        if (first) {
	          x__ = x, y__ = y, v__ = v;
	          first = false;
	          if (v) {
	            activeStream.lineStart();
	            activeStream.point(x, y);
	          }
	        } else {
	          if (v && v_) activeStream.point(x, y);
	          else {
	            var a = [x_ = Math.max(clipMin, Math.min(clipMax, x_)), y_ = Math.max(clipMin, Math.min(clipMax, y_))],
	                b = [x = Math.max(clipMin, Math.min(clipMax, x)), y = Math.max(clipMin, Math.min(clipMax, y))];
	            if (clipLine(a, b, x0, y0, x1, y1)) {
	              if (!v_) {
	                activeStream.lineStart();
	                activeStream.point(a[0], a[1]);
	              }
	              activeStream.point(b[0], b[1]);
	              if (!v) activeStream.lineEnd();
	              clean = false;
	            } else if (v) {
	              activeStream.lineStart();
	              activeStream.point(x, y);
	              clean = false;
	            }
	          }
	        }
	        x_ = x, y_ = y, v_ = v;
	      }
	
	      return clipStream;
	    };
	  }
	
	  function extent$1() {
	    var x0 = 0,
	        y0 = 0,
	        x1 = 960,
	        y1 = 500,
	        cache,
	        cacheStream,
	        clip;
	
	    return clip = {
	      stream: function(stream) {
	        return cache && cacheStream === stream ? cache : cache = clipExtent(x0, y0, x1, y1)(cacheStream = stream);
	      },
	      extent: function(_) {
	        return arguments.length ? (x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1], cache = cacheStream = null, clip) : [[x0, y0], [x1, y1]];
	      }
	    };
	  }
	
	  var lengthSum = adder();
	var   lambda0$2;
	var   sinPhi0$1;
	var   cosPhi0$1;
	  var lengthStream = {
	    sphere: noop$2,
	    point: noop$2,
	    lineStart: lengthLineStart,
	    lineEnd: noop$2,
	    polygonStart: noop$2,
	    polygonEnd: noop$2
	  };
	
	  function lengthLineStart() {
	    lengthStream.point = lengthPointFirst;
	    lengthStream.lineEnd = lengthLineEnd;
	  }
	
	  function lengthLineEnd() {
	    lengthStream.point = lengthStream.lineEnd = noop$2;
	  }
	
	  function lengthPointFirst(lambda, phi) {
	    lambda *= radians, phi *= radians;
	    lambda0$2 = lambda, sinPhi0$1 = sin$1(phi), cosPhi0$1 = cos$1(phi);
	    lengthStream.point = lengthPoint;
	  }
	
	  function lengthPoint(lambda, phi) {
	    lambda *= radians, phi *= radians;
	    var sinPhi = sin$1(phi),
	        cosPhi = cos$1(phi),
	        delta = abs(lambda - lambda0$2),
	        cosDelta = cos$1(delta),
	        sinDelta = sin$1(delta),
	        x = cosPhi * sinDelta,
	        y = cosPhi0$1 * sinPhi - sinPhi0$1 * cosPhi * cosDelta,
	        z = sinPhi0$1 * sinPhi + cosPhi0$1 * cosPhi * cosDelta;
	    lengthSum.add(atan2(sqrt$1(x * x + y * y), z));
	    lambda0$2 = lambda, sinPhi0$1 = sinPhi, cosPhi0$1 = cosPhi;
	  }
	
	  function length$2(object) {
	    lengthSum.reset();
	    geoStream(object, lengthStream);
	    return +lengthSum;
	  }
	
	  var coordinates = [null, null];
	var   object$1 = {type: "LineString", coordinates: coordinates};
	  function distance(a, b) {
	    coordinates[0] = a;
	    coordinates[1] = b;
	    return length$2(object$1);
	  }
	
	  function graticuleX(y0, y1, dy) {
	    var y = range(y0, y1 - epsilon$4, dy).concat(y1);
	    return function(x) { return y.map(function(y) { return [x, y]; }); };
	  }
	
	  function graticuleY(x0, x1, dx) {
	    var x = range(x0, x1 - epsilon$4, dx).concat(x1);
	    return function(y) { return x.map(function(x) { return [x, y]; }); };
	  }
	
	  function graticule() {
	    var x1, x0, X1, X0,
	        y1, y0, Y1, Y0,
	        dx = 10, dy = dx, DX = 90, DY = 360,
	        x, y, X, Y,
	        precision = 2.5;
	
	    function graticule() {
	      return {type: "MultiLineString", coordinates: lines()};
	    }
	
	    function lines() {
	      return range(ceil(X0 / DX) * DX, X1, DX).map(X)
	          .concat(range(ceil(Y0 / DY) * DY, Y1, DY).map(Y))
	          .concat(range(ceil(x0 / dx) * dx, x1, dx).filter(function(x) { return abs(x % DX) > epsilon$4; }).map(x))
	          .concat(range(ceil(y0 / dy) * dy, y1, dy).filter(function(y) { return abs(y % DY) > epsilon$4; }).map(y));
	    }
	
	    graticule.lines = function() {
	      return lines().map(function(coordinates) { return {type: "LineString", coordinates: coordinates}; });
	    };
	
	    graticule.outline = function() {
	      return {
	        type: "Polygon",
	        coordinates: [
	          X(X0).concat(
	          Y(Y1).slice(1),
	          X(X1).reverse().slice(1),
	          Y(Y0).reverse().slice(1))
	        ]
	      };
	    };
	
	    graticule.extent = function(_) {
	      if (!arguments.length) return graticule.extentMinor();
	      return graticule.extentMajor(_).extentMinor(_);
	    };
	
	    graticule.extentMajor = function(_) {
	      if (!arguments.length) return [[X0, Y0], [X1, Y1]];
	      X0 = +_[0][0], X1 = +_[1][0];
	      Y0 = +_[0][1], Y1 = +_[1][1];
	      if (X0 > X1) _ = X0, X0 = X1, X1 = _;
	      if (Y0 > Y1) _ = Y0, Y0 = Y1, Y1 = _;
	      return graticule.precision(precision);
	    };
	
	    graticule.extentMinor = function(_) {
	      if (!arguments.length) return [[x0, y0], [x1, y1]];
	      x0 = +_[0][0], x1 = +_[1][0];
	      y0 = +_[0][1], y1 = +_[1][1];
	      if (x0 > x1) _ = x0, x0 = x1, x1 = _;
	      if (y0 > y1) _ = y0, y0 = y1, y1 = _;
	      return graticule.precision(precision);
	    };
	
	    graticule.step = function(_) {
	      if (!arguments.length) return graticule.stepMinor();
	      return graticule.stepMajor(_).stepMinor(_);
	    };
	
	    graticule.stepMajor = function(_) {
	      if (!arguments.length) return [DX, DY];
	      DX = +_[0], DY = +_[1];
	      return graticule;
	    };
	
	    graticule.stepMinor = function(_) {
	      if (!arguments.length) return [dx, dy];
	      dx = +_[0], dy = +_[1];
	      return graticule;
	    };
	
	    graticule.precision = function(_) {
	      if (!arguments.length) return precision;
	      precision = +_;
	      x = graticuleX(y0, y1, 90);
	      y = graticuleY(x0, x1, precision);
	      X = graticuleX(Y0, Y1, 90);
	      Y = graticuleY(X0, X1, precision);
	      return graticule;
	    };
	
	    return graticule
	        .extentMajor([[-180, -90 + epsilon$4], [180, 90 - epsilon$4]])
	        .extentMinor([[-180, -80 - epsilon$4], [180, 80 + epsilon$4]]);
	  }
	
	  function interpolate$2(a, b) {
	    var x0 = a[0] * radians,
	        y0 = a[1] * radians,
	        x1 = b[0] * radians,
	        y1 = b[1] * radians,
	        cy0 = cos$1(y0),
	        sy0 = sin$1(y0),
	        cy1 = cos$1(y1),
	        sy1 = sin$1(y1),
	        kx0 = cy0 * cos$1(x0),
	        ky0 = cy0 * sin$1(x0),
	        kx1 = cy1 * cos$1(x1),
	        ky1 = cy1 * sin$1(x1),
	        d = 2 * asin$1(sqrt$1(haversin(y1 - y0) + cy0 * cy1 * haversin(x1 - x0))),
	        k = sin$1(d);
	
	    var interpolate = d ? function(t) {
	      var B = sin$1(t *= d) / k,
	          A = sin$1(d - t) / k,
	          x = A * kx0 + B * kx1,
	          y = A * ky0 + B * ky1,
	          z = A * sy0 + B * sy1;
	      return [
	        atan2(y, x) * degrees$1,
	        atan2(z, sqrt$1(x * x + y * y)) * degrees$1
	      ];
	    } : function() {
	      return [x0 * degrees$1, y0 * degrees$1];
	    };
	
	    interpolate.distance = d;
	
	    return interpolate;
	  }
	
	  function identity$7(x) {
	    return x;
	  }
	
	var   areaSum$1 = adder();
	var   areaRingSum$1 = adder();
	  var x00;
	  var y00;
	var   x0$1;
	var   y0$1;
	  var areaStream$1 = {
	    point: noop$2,
	    lineStart: noop$2,
	    lineEnd: noop$2,
	    polygonStart: function() {
	      areaStream$1.lineStart = areaRingStart$1;
	      areaStream$1.lineEnd = areaRingEnd$1;
	    },
	    polygonEnd: function() {
	      areaStream$1.lineStart = areaStream$1.lineEnd = areaStream$1.point = noop$2;
	      areaSum$1.add(abs(areaRingSum$1));
	      areaRingSum$1.reset();
	    },
	    result: function() {
	      var area = areaSum$1 / 2;
	      areaSum$1.reset();
	      return area;
	    }
	  };
	
	  function areaRingStart$1() {
	    areaStream$1.point = areaPointFirst$1;
	  }
	
	  function areaPointFirst$1(x, y) {
	    areaStream$1.point = areaPoint$1;
	    x00 = x0$1 = x, y00 = y0$1 = y;
	  }
	
	  function areaPoint$1(x, y) {
	    areaRingSum$1.add(y0$1 * x - x0$1 * y);
	    x0$1 = x, y0$1 = y;
	  }
	
	  function areaRingEnd$1() {
	    areaPoint$1(x00, y00);
	  }
	
	var   x0$2 = Infinity;
	var   y0$2 = x0$2;
	  var x1 = -x0$2;
	  var y1 = x1;
	  var boundsStream$1 = {
	    point: boundsPoint$1,
	    lineStart: noop$2,
	    lineEnd: noop$2,
	    polygonStart: noop$2,
	    polygonEnd: noop$2,
	    result: function() {
	      var bounds = [[x0$2, y0$2], [x1, y1]];
	      x1 = y1 = -(y0$2 = x0$2 = Infinity);
	      return bounds;
	    }
	  };
	
	  function boundsPoint$1(x, y) {
	    if (x < x0$2) x0$2 = x;
	    if (x > x1) x1 = x;
	    if (y < y0$2) y0$2 = y;
	    if (y > y1) y1 = y;
	  }
	
	var   X0$1 = 0;
	var   Y0$1 = 0;
	var   Z0$1 = 0;
	var   X1$1 = 0;
	var   Y1$1 = 0;
	var   Z1$1 = 0;
	var   X2$1 = 0;
	var   Y2$1 = 0;
	var   Z2$1 = 0;
	var   x00$1;
	var   y00$1;
	var   x0$3;
	var   y0$3;
	  var centroidStream$1 = {
	    point: centroidPoint$1,
	    lineStart: centroidLineStart$1,
	    lineEnd: centroidLineEnd$1,
	    polygonStart: function() {
	      centroidStream$1.lineStart = centroidRingStart$1;
	      centroidStream$1.lineEnd = centroidRingEnd$1;
	    },
	    polygonEnd: function() {
	      centroidStream$1.point = centroidPoint$1;
	      centroidStream$1.lineStart = centroidLineStart$1;
	      centroidStream$1.lineEnd = centroidLineEnd$1;
	    },
	    result: function() {
	      var centroid = Z2$1 ? [X2$1 / Z2$1, Y2$1 / Z2$1]
	          : Z1$1 ? [X1$1 / Z1$1, Y1$1 / Z1$1]
	          : Z0$1 ? [X0$1 / Z0$1, Y0$1 / Z0$1]
	          : [NaN, NaN];
	      X0$1 = Y0$1 = Z0$1 =
	      X1$1 = Y1$1 = Z1$1 =
	      X2$1 = Y2$1 = Z2$1 = 0;
	      return centroid;
	    }
	  };
	
	  function centroidPoint$1(x, y) {
	    X0$1 += x;
	    Y0$1 += y;
	    ++Z0$1;
	  }
	
	  function centroidLineStart$1() {
	    centroidStream$1.point = centroidPointFirstLine;
	  }
	
	  function centroidPointFirstLine(x, y) {
	    centroidStream$1.point = centroidPointLine;
	    centroidPoint$1(x0$3 = x, y0$3 = y);
	  }
	
	  function centroidPointLine(x, y) {
	    var dx = x - x0$3, dy = y - y0$3, z = sqrt$1(dx * dx + dy * dy);
	    X1$1 += z * (x0$3 + x) / 2;
	    Y1$1 += z * (y0$3 + y) / 2;
	    Z1$1 += z;
	    centroidPoint$1(x0$3 = x, y0$3 = y);
	  }
	
	  function centroidLineEnd$1() {
	    centroidStream$1.point = centroidPoint$1;
	  }
	
	  function centroidRingStart$1() {
	    centroidStream$1.point = centroidPointFirstRing;
	  }
	
	  function centroidRingEnd$1() {
	    centroidPointRing(x00$1, y00$1);
	  }
	
	  function centroidPointFirstRing(x, y) {
	    centroidStream$1.point = centroidPointRing;
	    centroidPoint$1(x00$1 = x0$3 = x, y00$1 = y0$3 = y);
	  }
	
	  function centroidPointRing(x, y) {
	    var dx = x - x0$3,
	        dy = y - y0$3,
	        z = sqrt$1(dx * dx + dy * dy);
	
	    X1$1 += z * (x0$3 + x) / 2;
	    Y1$1 += z * (y0$3 + y) / 2;
	    Z1$1 += z;
	
	    z = y0$3 * x - x0$3 * y;
	    X2$1 += z * (x0$3 + x);
	    Y2$1 += z * (y0$3 + y);
	    Z2$1 += z * 3;
	    centroidPoint$1(x0$3 = x, y0$3 = y);
	  }
	
	  function PathContext(context) {
	    var pointRadius = 4.5;
	
	    var stream = {
	      point: point,
	
	      // While inside a line, override point to moveTo then lineTo.
	      lineStart: function() { stream.point = pointLineStart; },
	      lineEnd: lineEnd,
	
	      // While inside a polygon, override lineEnd to closePath.
	      polygonStart: function() { stream.lineEnd = lineEndPolygon; },
	      polygonEnd: function() { stream.lineEnd = lineEnd; stream.point = point; },
	
	      pointRadius: function(_) {
	        pointRadius = _;
	        return stream;
	      },
	
	      result: noop$2
	    };
	
	    function point(x, y) {
	      context.moveTo(x + pointRadius, y);
	      context.arc(x, y, pointRadius, 0, tau$4);
	    }
	
	    function pointLineStart(x, y) {
	      context.moveTo(x, y);
	      stream.point = pointLine;
	    }
	
	    function pointLine(x, y) {
	      context.lineTo(x, y);
	    }
	
	    function lineEnd() {
	      stream.point = point;
	    }
	
	    function lineEndPolygon() {
	      context.closePath();
	    }
	
	    return stream;
	  }
	
	  function PathString() {
	    var pointCircle = circle$2(4.5),
	        string = [];
	
	    var stream = {
	      point: point,
	      lineStart: lineStart,
	      lineEnd: lineEnd,
	      polygonStart: function() {
	        stream.lineEnd = lineEndPolygon;
	      },
	      polygonEnd: function() {
	        stream.lineEnd = lineEnd;
	        stream.point = point;
	      },
	      pointRadius: function(_) {
	        pointCircle = circle$2(_);
	        return stream;
	      },
	      result: function() {
	        if (string.length) {
	          var result = string.join("");
	          string = [];
	          return result;
	        }
	      }
	    };
	
	    function point(x, y) {
	      string.push("M", x, ",", y, pointCircle);
	    }
	
	    function pointLineStart(x, y) {
	      string.push("M", x, ",", y);
	      stream.point = pointLine;
	    }
	
	    function pointLine(x, y) {
	      string.push("L", x, ",", y);
	    }
	
	    function lineStart() {
	      stream.point = pointLineStart;
	    }
	
	    function lineEnd() {
	      stream.point = point;
	    }
	
	    function lineEndPolygon() {
	      string.push("Z");
	    }
	
	    return stream;
	  }
	
	  function circle$2(radius) {
	    return "m0," + radius
	        + "a" + radius + "," + radius + " 0 1,1 0," + -2 * radius
	        + "a" + radius + "," + radius + " 0 1,1 0," + 2 * radius
	        + "z";
	  }
	
	  function index$3() {
	    var pointRadius = 4.5,
	        projection,
	        projectionStream,
	        context,
	        contextStream;
	
	    function path(object) {
	      if (object) {
	        if (typeof pointRadius === "function") contextStream.pointRadius(+pointRadius.apply(this, arguments));
	        geoStream(object, projectionStream(contextStream));
	      }
	      return contextStream.result();
	    }
	
	    path.area = function(object) {
	      geoStream(object, projectionStream(areaStream$1));
	      return areaStream$1.result();
	    };
	
	    path.bounds = function(object) {
	      geoStream(object, projectionStream(boundsStream$1));
	      return boundsStream$1.result();
	    };
	
	    path.centroid = function(object) {
	      geoStream(object, projectionStream(centroidStream$1));
	      return centroidStream$1.result();
	    };
	
	    path.projection = function(_) {
	      return arguments.length ? (projectionStream = (projection = _) == null ? identity$7 : _.stream, path) : projection;
	    };
	
	    path.context = function(_) {
	      if (!arguments.length) return context;
	      contextStream = (context = _) == null ? new PathString : new PathContext(_);
	      if (typeof pointRadius !== "function") contextStream.pointRadius(pointRadius);
	      return path;
	    };
	
	    path.pointRadius = function(_) {
	      if (!arguments.length) return pointRadius;
	      pointRadius = typeof _ === "function" ? _ : (contextStream.pointRadius(+_), +_);
	      return path;
	    };
	
	    return path.projection(null).context(null);
	  }
	
	  var sum$2 = adder();
	
	  function polygonContains(polygon, point) {
	    var lambda = point[0],
	        phi = point[1],
	        normal = [sin$1(lambda), -cos$1(lambda), 0],
	        angle = 0,
	        winding = 0;
	
	    sum$2.reset();
	
	    for (var i = 0, n = polygon.length; i < n; ++i) {
	      if (!(m = (ring = polygon[i]).length)) continue;
	      var ring,
	          m,
	          point0 = ring[m - 1],
	          lambda0 = point0[0],
	          phi0 = point0[1] / 2 + quarterPi,
	          sinPhi0 = sin$1(phi0),
	          cosPhi0 = cos$1(phi0);
	
	      for (var j = 0; j < m; ++j, lambda0 = lambda1, sinPhi0 = sinPhi1, cosPhi0 = cosPhi1, point0 = point1) {
	        var point1 = ring[j],
	            lambda1 = point1[0],
	            phi1 = point1[1] / 2 + quarterPi,
	            sinPhi1 = sin$1(phi1),
	            cosPhi1 = cos$1(phi1),
	            delta = lambda1 - lambda0,
	            sign = delta >= 0 ? 1 : -1,
	            absDelta = sign * delta,
	            antimeridian = absDelta > pi$4,
	            k = sinPhi0 * sinPhi1;
	
	        sum$2.add(atan2(k * sign * sin$1(absDelta), cosPhi0 * cosPhi1 + k * cos$1(absDelta)));
	        angle += antimeridian ? delta + sign * tau$4 : delta;
	
	        // Are the longitudes either side of the point’s meridian (lambda),
	        // and are the latitudes smaller than the parallel (phi)?
	        if (antimeridian ^ lambda0 >= lambda ^ lambda1 >= lambda) {
	          var arc = cartesianCross(cartesian(point0), cartesian(point1));
	          cartesianNormalizeInPlace(arc);
	          var intersection = cartesianCross(normal, arc);
	          cartesianNormalizeInPlace(intersection);
	          var phiArc = (antimeridian ^ delta >= 0 ? -1 : 1) * asin$1(intersection[2]);
	          if (phi > phiArc || phi === phiArc && (arc[0] || arc[1])) {
	            winding += antimeridian ^ delta >= 0 ? 1 : -1;
	          }
	        }
	      }
	    }
	
	    // First, determine whether the South pole is inside or outside:
	    //
	    // It is inside if:
	    // * the polygon winds around it in a clockwise direction.
	    // * the polygon does not (cumulatively) wind around it, but has a negative
	    //   (counter-clockwise) area.
	    //
	    // Second, count the (signed) number of times a segment crosses a lambda
	    // from the point to the South pole.  If it is zero, then the point is the
	    // same side as the South pole.
	
	    return (angle < -epsilon$4 || angle < epsilon$4 && sum$2 < -epsilon$4) ^ (winding & 1);
	  }
	
	  function clip(pointVisible, clipLine, interpolate, start) {
	    return function(rotate, sink) {
	      var line = clipLine(sink),
	          rotatedStart = rotate.invert(start[0], start[1]),
	          ringBuffer = clipBuffer(),
	          ringSink = clipLine(ringBuffer),
	          polygonStarted = false,
	          polygon,
	          segments,
	          ring;
	
	      var clip = {
	        point: point,
	        lineStart: lineStart,
	        lineEnd: lineEnd,
	        polygonStart: function() {
	          clip.point = pointRing;
	          clip.lineStart = ringStart;
	          clip.lineEnd = ringEnd;
	          segments = [];
	          polygon = [];
	        },
	        polygonEnd: function() {
	          clip.point = point;
	          clip.lineStart = lineStart;
	          clip.lineEnd = lineEnd;
	          segments = merge(segments);
	          var startInside = polygonContains(polygon, rotatedStart);
	          if (segments.length) {
	            if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
	            clipPolygon(segments, compareIntersection, startInside, interpolate, sink);
	          } else if (startInside) {
	            if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
	            sink.lineStart();
	            interpolate(null, null, 1, sink);
	            sink.lineEnd();
	          }
	          if (polygonStarted) sink.polygonEnd(), polygonStarted = false;
	          segments = polygon = null;
	        },
	        sphere: function() {
	          sink.polygonStart();
	          sink.lineStart();
	          interpolate(null, null, 1, sink);
	          sink.lineEnd();
	          sink.polygonEnd();
	        }
	      };
	
	      function point(lambda, phi) {
	        var point = rotate(lambda, phi);
	        if (pointVisible(lambda = point[0], phi = point[1])) sink.point(lambda, phi);
	      }
	
	      function pointLine(lambda, phi) {
	        var point = rotate(lambda, phi);
	        line.point(point[0], point[1]);
	      }
	
	      function lineStart() {
	        clip.point = pointLine;
	        line.lineStart();
	      }
	
	      function lineEnd() {
	        clip.point = point;
	        line.lineEnd();
	      }
	
	      function pointRing(lambda, phi) {
	        ring.push([lambda, phi]);
	        var point = rotate(lambda, phi);
	        ringSink.point(point[0], point[1]);
	      }
	
	      function ringStart() {
	        ringSink.lineStart();
	        ring = [];
	      }
	
	      function ringEnd() {
	        pointRing(ring[0][0], ring[0][1]);
	        ringSink.lineEnd();
	
	        var clean = ringSink.clean(),
	            ringSegments = ringBuffer.result(),
	            i, n = ringSegments.length, m,
	            segment,
	            point;
	
	        ring.pop();
	        polygon.push(ring);
	        ring = null;
	
	        if (!n) return;
	
	        // No intersections.
	        if (clean & 1) {
	          segment = ringSegments[0];
	          if ((m = segment.length - 1) > 0) {
	            if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
	            sink.lineStart();
	            for (i = 0; i < m; ++i) sink.point((point = segment[i])[0], point[1]);
	            sink.lineEnd();
	          }
	          return;
	        }
	
	        // Rejoin connected segments.
	        // TODO reuse ringBuffer.rejoin()?
	        if (n > 1 && clean & 2) ringSegments.push(ringSegments.pop().concat(ringSegments.shift()));
	
	        segments.push(ringSegments.filter(validSegment));
	      }
	
	      return clip;
	    };
	  }
	
	  function validSegment(segment) {
	    return segment.length > 1;
	  }
	
	  // Intersections are sorted along the clip edge. For both antimeridian cutting
	  // and circle clipping, the same comparison is used.
	  function compareIntersection(a, b) {
	    return ((a = a.x)[0] < 0 ? a[1] - halfPi$3 - epsilon$4 : halfPi$3 - a[1])
	         - ((b = b.x)[0] < 0 ? b[1] - halfPi$3 - epsilon$4 : halfPi$3 - b[1]);
	  }
	
	  var clipAntimeridian = clip(
	    function() { return true; },
	    clipAntimeridianLine,
	    clipAntimeridianInterpolate,
	    [-pi$4, -halfPi$3]
	  );
	
	  // Takes a line and cuts into visible segments. Return values: 0 - there were
	  // intersections or the line was empty; 1 - no intersections; 2 - there were
	  // intersections, and the first and last segments should be rejoined.
	  function clipAntimeridianLine(stream) {
	    var lambda0 = NaN,
	        phi0 = NaN,
	        sign0 = NaN,
	        clean; // no intersections
	
	    return {
	      lineStart: function() {
	        stream.lineStart();
	        clean = 1;
	      },
	      point: function(lambda1, phi1) {
	        var sign1 = lambda1 > 0 ? pi$4 : -pi$4,
	            delta = abs(lambda1 - lambda0);
	        if (abs(delta - pi$4) < epsilon$4) { // line crosses a pole
	          stream.point(lambda0, phi0 = (phi0 + phi1) / 2 > 0 ? halfPi$3 : -halfPi$3);
	          stream.point(sign0, phi0);
	          stream.lineEnd();
	          stream.lineStart();
	          stream.point(sign1, phi0);
	          stream.point(lambda1, phi0);
	          clean = 0;
	        } else if (sign0 !== sign1 && delta >= pi$4) { // line crosses antimeridian
	          if (abs(lambda0 - sign0) < epsilon$4) lambda0 -= sign0 * epsilon$4; // handle degeneracies
	          if (abs(lambda1 - sign1) < epsilon$4) lambda1 -= sign1 * epsilon$4;
	          phi0 = clipAntimeridianIntersect(lambda0, phi0, lambda1, phi1);
	          stream.point(sign0, phi0);
	          stream.lineEnd();
	          stream.lineStart();
	          stream.point(sign1, phi0);
	          clean = 0;
	        }
	        stream.point(lambda0 = lambda1, phi0 = phi1);
	        sign0 = sign1;
	      },
	      lineEnd: function() {
	        stream.lineEnd();
	        lambda0 = phi0 = NaN;
	      },
	      clean: function() {
	        return 2 - clean; // if intersections, rejoin first and last segments
	      }
	    };
	  }
	
	  function clipAntimeridianIntersect(lambda0, phi0, lambda1, phi1) {
	    var cosPhi0,
	        cosPhi1,
	        sinLambda0Lambda1 = sin$1(lambda0 - lambda1);
	    return abs(sinLambda0Lambda1) > epsilon$4
	        ? atan((sin$1(phi0) * (cosPhi1 = cos$1(phi1)) * sin$1(lambda1)
	            - sin$1(phi1) * (cosPhi0 = cos$1(phi0)) * sin$1(lambda0))
	            / (cosPhi0 * cosPhi1 * sinLambda0Lambda1))
	        : (phi0 + phi1) / 2;
	  }
	
	  function clipAntimeridianInterpolate(from, to, direction, stream) {
	    var phi;
	    if (from == null) {
	      phi = direction * halfPi$3;
	      stream.point(-pi$4, phi);
	      stream.point(0, phi);
	      stream.point(pi$4, phi);
	      stream.point(pi$4, 0);
	      stream.point(pi$4, -phi);
	      stream.point(0, -phi);
	      stream.point(-pi$4, -phi);
	      stream.point(-pi$4, 0);
	      stream.point(-pi$4, phi);
	    } else if (abs(from[0] - to[0]) > epsilon$4) {
	      var lambda = from[0] < to[0] ? pi$4 : -pi$4;
	      phi = direction * lambda / 2;
	      stream.point(-lambda, phi);
	      stream.point(0, phi);
	      stream.point(lambda, phi);
	    } else {
	      stream.point(to[0], to[1]);
	    }
	  }
	
	  function clipCircle(radius, delta) {
	    var cr = cos$1(radius),
	        smallRadius = cr > 0,
	        notHemisphere = abs(cr) > epsilon$4; // TODO optimise for this common case
	
	    function interpolate(from, to, direction, stream) {
	      circleStream(stream, radius, delta, direction, from, to);
	    }
	
	    function visible(lambda, phi) {
	      return cos$1(lambda) * cos$1(phi) > cr;
	    }
	
	    // Takes a line and cuts into visible segments. Return values used for polygon
	    // clipping: 0 - there were intersections or the line was empty; 1 - no
	    // intersections 2 - there were intersections, and the first and last segments
	    // should be rejoined.
	    function clipLine(stream) {
	      var point0, // previous point
	          c0, // code for previous point
	          v0, // visibility of previous point
	          v00, // visibility of first point
	          clean; // no intersections
	      return {
	        lineStart: function() {
	          v00 = v0 = false;
	          clean = 1;
	        },
	        point: function(lambda, phi) {
	          var point1 = [lambda, phi],
	              point2,
	              v = visible(lambda, phi),
	              c = smallRadius
	                ? v ? 0 : code(lambda, phi)
	                : v ? code(lambda + (lambda < 0 ? pi$4 : -pi$4), phi) : 0;
	          if (!point0 && (v00 = v0 = v)) stream.lineStart();
	          // Handle degeneracies.
	          // TODO ignore if not clipping polygons.
	          if (v !== v0) {
	            point2 = intersect(point0, point1);
	            if (pointEqual(point0, point2) || pointEqual(point1, point2)) {
	              point1[0] += epsilon$4;
	              point1[1] += epsilon$4;
	              v = visible(point1[0], point1[1]);
	            }
	          }
	          if (v !== v0) {
	            clean = 0;
	            if (v) {
	              // outside going in
	              stream.lineStart();
	              point2 = intersect(point1, point0);
	              stream.point(point2[0], point2[1]);
	            } else {
	              // inside going out
	              point2 = intersect(point0, point1);
	              stream.point(point2[0], point2[1]);
	              stream.lineEnd();
	            }
	            point0 = point2;
	          } else if (notHemisphere && point0 && smallRadius ^ v) {
	            var t;
	            // If the codes for two points are different, or are both zero,
	            // and there this segment intersects with the small circle.
	            if (!(c & c0) && (t = intersect(point1, point0, true))) {
	              clean = 0;
	              if (smallRadius) {
	                stream.lineStart();
	                stream.point(t[0][0], t[0][1]);
	                stream.point(t[1][0], t[1][1]);
	                stream.lineEnd();
	              } else {
	                stream.point(t[1][0], t[1][1]);
	                stream.lineEnd();
	                stream.lineStart();
	                stream.point(t[0][0], t[0][1]);
	              }
	            }
	          }
	          if (v && (!point0 || !pointEqual(point0, point1))) {
	            stream.point(point1[0], point1[1]);
	          }
	          point0 = point1, v0 = v, c0 = c;
	        },
	        lineEnd: function() {
	          if (v0) stream.lineEnd();
	          point0 = null;
	        },
	        // Rejoin first and last segments if there were intersections and the first
	        // and last points were visible.
	        clean: function() {
	          return clean | ((v00 && v0) << 1);
	        }
	      };
	    }
	
	    // Intersects the great circle between a and b with the clip circle.
	    function intersect(a, b, two) {
	      var pa = cartesian(a),
	          pb = cartesian(b);
	
	      // We have two planes, n1.p = d1 and n2.p = d2.
	      // Find intersection line p(t) = c1 n1 + c2 n2 + t (n1 ⨯ n2).
	      var n1 = [1, 0, 0], // normal
	          n2 = cartesianCross(pa, pb),
	          n2n2 = cartesianDot(n2, n2),
	          n1n2 = n2[0], // cartesianDot(n1, n2),
	          determinant = n2n2 - n1n2 * n1n2;
	
	      // Two polar points.
	      if (!determinant) return !two && a;
	
	      var c1 =  cr * n2n2 / determinant,
	          c2 = -cr * n1n2 / determinant,
	          n1xn2 = cartesianCross(n1, n2),
	          A = cartesianScale(n1, c1),
	          B = cartesianScale(n2, c2);
	      cartesianAddInPlace(A, B);
	
	      // Solve |p(t)|^2 = 1.
	      var u = n1xn2,
	          w = cartesianDot(A, u),
	          uu = cartesianDot(u, u),
	          t2 = w * w - uu * (cartesianDot(A, A) - 1);
	
	      if (t2 < 0) return;
	
	      var t = sqrt$1(t2),
	          q = cartesianScale(u, (-w - t) / uu);
	      cartesianAddInPlace(q, A);
	      q = spherical(q);
	
	      if (!two) return q;
	
	      // Two intersection points.
	      var lambda0 = a[0],
	          lambda1 = b[0],
	          phi0 = a[1],
	          phi1 = b[1],
	          z;
	
	      if (lambda1 < lambda0) z = lambda0, lambda0 = lambda1, lambda1 = z;
	
	      var delta = lambda1 - lambda0,
	          polar = abs(delta - pi$4) < epsilon$4,
	          meridian = polar || delta < epsilon$4;
	
	      if (!polar && phi1 < phi0) z = phi0, phi0 = phi1, phi1 = z;
	
	      // Check that the first point is between a and b.
	      if (meridian
	          ? polar
	            ? phi0 + phi1 > 0 ^ q[1] < (abs(q[0] - lambda0) < epsilon$4 ? phi0 : phi1)
	            : phi0 <= q[1] && q[1] <= phi1
	          : delta > pi$4 ^ (lambda0 <= q[0] && q[0] <= lambda1)) {
	        var q1 = cartesianScale(u, (-w + t) / uu);
	        cartesianAddInPlace(q1, A);
	        return [q, spherical(q1)];
	      }
	    }
	
	    // Generates a 4-bit vector representing the location of a point relative to
	    // the small circle's bounding box.
	    function code(lambda, phi) {
	      var r = smallRadius ? radius : pi$4 - radius,
	          code = 0;
	      if (lambda < -r) code |= 1; // left
	      else if (lambda > r) code |= 2; // right
	      if (phi < -r) code |= 4; // below
	      else if (phi > r) code |= 8; // above
	      return code;
	    }
	
	    return clip(visible, clipLine, interpolate, smallRadius ? [0, -radius] : [-pi$4, radius - pi$4]);
	  }
	
	  function transform$1(prototype) {
	    return {
	      stream: transform$2(prototype)
	    };
	  }
	
	  function transform$2(prototype) {
	    function T() {}
	    var p = T.prototype = Object.create(Transform$1.prototype);
	    for (var k in prototype) p[k] = prototype[k];
	    return function(stream) {
	      var t = new T;
	      t.stream = stream;
	      return t;
	    };
	  }
	
	  function Transform$1() {}
	
	  Transform$1.prototype = {
	    point: function(x, y) { this.stream.point(x, y); },
	    sphere: function() { this.stream.sphere(); },
	    lineStart: function() { this.stream.lineStart(); },
	    lineEnd: function() { this.stream.lineEnd(); },
	    polygonStart: function() { this.stream.polygonStart(); },
	    polygonEnd: function() { this.stream.polygonEnd(); }
	  };
	
	  function fit(project, extent, object) {
	    var w = extent[1][0] - extent[0][0],
	        h = extent[1][1] - extent[0][1],
	        clip = project.clipExtent && project.clipExtent();
	
	    project
	        .scale(150)
	        .translate([0, 0]);
	
	    if (clip != null) project.clipExtent(null);
	
	    geoStream(object, project.stream(boundsStream$1));
	
	    var b = boundsStream$1.result(),
	        k = Math.min(w / (b[1][0] - b[0][0]), h / (b[1][1] - b[0][1])),
	        x = +extent[0][0] + (w - k * (b[1][0] + b[0][0])) / 2,
	        y = +extent[0][1] + (h - k * (b[1][1] + b[0][1])) / 2;
	
	    if (clip != null) project.clipExtent(clip);
	
	    return project
	        .scale(k * 150)
	        .translate([x, y]);
	  }
	
	  function fitSize(project) {
	    return function(size, object) {
	      return fit(project, [[0, 0], size], object);
	    };
	  }
	
	  function fitExtent(project) {
	    return function(extent, object) {
	      return fit(project, extent, object);
	    };
	  }
	
	  var maxDepth = 16;
	  var cosMinDistance = cos$1(30 * radians);
	  // cos(minimum angular distance)
	
	  function resample(project, delta2) {
	    return +delta2 ? resample$1(project, delta2) : resampleNone(project);
	  }
	
	  function resampleNone(project) {
	    return transform$2({
	      point: function(x, y) {
	        x = project(x, y);
	        this.stream.point(x[0], x[1]);
	      }
	    });
	  }
	
	  function resample$1(project, delta2) {
	
	    function resampleLineTo(x0, y0, lambda0, a0, b0, c0, x1, y1, lambda1, a1, b1, c1, depth, stream) {
	      var dx = x1 - x0,
	          dy = y1 - y0,
	          d2 = dx * dx + dy * dy;
	      if (d2 > 4 * delta2 && depth--) {
	        var a = a0 + a1,
	            b = b0 + b1,
	            c = c0 + c1,
	            m = sqrt$1(a * a + b * b + c * c),
	            phi2 = asin$1(c /= m),
	            lambda2 = abs(abs(c) - 1) < epsilon$4 || abs(lambda0 - lambda1) < epsilon$4 ? (lambda0 + lambda1) / 2 : atan2(b, a),
	            p = project(lambda2, phi2),
	            x2 = p[0],
	            y2 = p[1],
	            dx2 = x2 - x0,
	            dy2 = y2 - y0,
	            dz = dy * dx2 - dx * dy2;
	        if (dz * dz / d2 > delta2 // perpendicular projected distance
	            || abs((dx * dx2 + dy * dy2) / d2 - 0.5) > 0.3 // midpoint close to an end
	            || a0 * a1 + b0 * b1 + c0 * c1 < cosMinDistance) { // angular distance
	          resampleLineTo(x0, y0, lambda0, a0, b0, c0, x2, y2, lambda2, a /= m, b /= m, c, depth, stream);
	          stream.point(x2, y2);
	          resampleLineTo(x2, y2, lambda2, a, b, c, x1, y1, lambda1, a1, b1, c1, depth, stream);
	        }
	      }
	    }
	    return function(stream) {
	      var lambda00, x00, y00, a00, b00, c00, // first point
	          lambda0, x0, y0, a0, b0, c0; // previous point
	
	      var resampleStream = {
	        point: point,
	        lineStart: lineStart,
	        lineEnd: lineEnd,
	        polygonStart: function() { stream.polygonStart(); resampleStream.lineStart = ringStart; },
	        polygonEnd: function() { stream.polygonEnd(); resampleStream.lineStart = lineStart; }
	      };
	
	      function point(x, y) {
	        x = project(x, y);
	        stream.point(x[0], x[1]);
	      }
	
	      function lineStart() {
	        x0 = NaN;
	        resampleStream.point = linePoint;
	        stream.lineStart();
	      }
	
	      function linePoint(lambda, phi) {
	        var c = cartesian([lambda, phi]), p = project(lambda, phi);
	        resampleLineTo(x0, y0, lambda0, a0, b0, c0, x0 = p[0], y0 = p[1], lambda0 = lambda, a0 = c[0], b0 = c[1], c0 = c[2], maxDepth, stream);
	        stream.point(x0, y0);
	      }
	
	      function lineEnd() {
	        resampleStream.point = point;
	        stream.lineEnd();
	      }
	
	      function ringStart() {
	        lineStart();
	        resampleStream.point = ringPoint;
	        resampleStream.lineEnd = ringEnd;
	      }
	
	      function ringPoint(lambda, phi) {
	        linePoint(lambda00 = lambda, phi), x00 = x0, y00 = y0, a00 = a0, b00 = b0, c00 = c0;
	        resampleStream.point = linePoint;
	      }
	
	      function ringEnd() {
	        resampleLineTo(x0, y0, lambda0, a0, b0, c0, x00, y00, lambda00, a00, b00, c00, maxDepth, stream);
	        resampleStream.lineEnd = lineEnd;
	        lineEnd();
	      }
	
	      return resampleStream;
	    };
	  }
	
	  var transformRadians = transform$2({
	    point: function(x, y) {
	      this.stream.point(x * radians, y * radians);
	    }
	  });
	
	  function projection(project) {
	    return projectionMutator(function() { return project; })();
	  }
	
	  function projectionMutator(projectAt) {
	    var project,
	        k = 150, // scale
	        x = 480, y = 250, // translate
	        dx, dy, lambda = 0, phi = 0, // center
	        deltaLambda = 0, deltaPhi = 0, deltaGamma = 0, rotate, projectRotate, // rotate
	        theta = null, preclip = clipAntimeridian, // clip angle
	        x0 = null, y0, x1, y1, postclip = identity$7, // clip extent
	        delta2 = 0.5, projectResample = resample(projectTransform, delta2), // precision
	        cache,
	        cacheStream;
	
	    function projection(point) {
	      point = projectRotate(point[0] * radians, point[1] * radians);
	      return [point[0] * k + dx, dy - point[1] * k];
	    }
	
	    function invert(point) {
	      point = projectRotate.invert((point[0] - dx) / k, (dy - point[1]) / k);
	      return point && [point[0] * degrees$1, point[1] * degrees$1];
	    }
	
	    function projectTransform(x, y) {
	      return x = project(x, y), [x[0] * k + dx, dy - x[1] * k];
	    }
	
	    projection.stream = function(stream) {
	      return cache && cacheStream === stream ? cache : cache = transformRadians(preclip(rotate, projectResample(postclip(cacheStream = stream))));
	    };
	
	    projection.clipAngle = function(_) {
	      return arguments.length ? (preclip = +_ ? clipCircle(theta = _ * radians, 6 * radians) : (theta = null, clipAntimeridian), reset()) : theta * degrees$1;
	    };
	
	    projection.clipExtent = function(_) {
	      return arguments.length ? (postclip = _ == null ? (x0 = y0 = x1 = y1 = null, identity$7) : clipExtent(x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1]), reset()) : x0 == null ? null : [[x0, y0], [x1, y1]];
	    };
	
	    projection.scale = function(_) {
	      return arguments.length ? (k = +_, recenter()) : k;
	    };
	
	    projection.translate = function(_) {
	      return arguments.length ? (x = +_[0], y = +_[1], recenter()) : [x, y];
	    };
	
	    projection.center = function(_) {
	      return arguments.length ? (lambda = _[0] % 360 * radians, phi = _[1] % 360 * radians, recenter()) : [lambda * degrees$1, phi * degrees$1];
	    };
	
	    projection.rotate = function(_) {
	      return arguments.length ? (deltaLambda = _[0] % 360 * radians, deltaPhi = _[1] % 360 * radians, deltaGamma = _.length > 2 ? _[2] % 360 * radians : 0, recenter()) : [deltaLambda * degrees$1, deltaPhi * degrees$1, deltaGamma * degrees$1];
	    };
	
	    projection.precision = function(_) {
	      return arguments.length ? (projectResample = resample(projectTransform, delta2 = _ * _), reset()) : sqrt$1(delta2);
	    };
	
	    projection.fitExtent = fitExtent(projection);
	
	    projection.fitSize = fitSize(projection);
	
	    function recenter() {
	      projectRotate = compose(rotate = rotateRadians(deltaLambda, deltaPhi, deltaGamma), project);
	      var center = project(lambda, phi);
	      dx = x - center[0] * k;
	      dy = y + center[1] * k;
	      return reset();
	    }
	
	    function reset() {
	      cache = cacheStream = null;
	      return projection;
	    }
	
	    return function() {
	      project = projectAt.apply(this, arguments);
	      projection.invert = project.invert && invert;
	      return recenter();
	    };
	  }
	
	  function conicProjection(projectAt) {
	    var phi0 = 0,
	        phi1 = pi$4 / 3,
	        m = projectionMutator(projectAt),
	        p = m(phi0, phi1);
	
	    p.parallels = function(_) {
	      return arguments.length ? m(phi0 = _[0] * radians, phi1 = _[1] * radians) : [phi0 * degrees$1, phi1 * degrees$1];
	    };
	
	    return p;
	  }
	
	  function conicEqualAreaRaw(y0, y1) {
	    var sy0 = sin$1(y0),
	        n = (sy0 + sin$1(y1)) / 2,
	        c = 1 + sy0 * (2 * n - sy0),
	        r0 = sqrt$1(c) / n;
	
	    function project(x, y) {
	      var r = sqrt$1(c - 2 * n * sin$1(y)) / n;
	      return [r * sin$1(x *= n), r0 - r * cos$1(x)];
	    }
	
	    project.invert = function(x, y) {
	      var r0y = r0 - y;
	      return [atan2(x, r0y) / n, asin$1((c - (x * x + r0y * r0y) * n * n) / (2 * n))];
	    };
	
	    return project;
	  }
	
	  function conicEqualArea() {
	    return conicProjection(conicEqualAreaRaw)
	        .scale(155.424)
	        .center([0, 33.6442]);
	  }
	
	  function albers() {
	    return conicEqualArea()
	        .parallels([29.5, 45.5])
	        .scale(1070)
	        .translate([480, 250])
	        .rotate([96, 0])
	        .center([-0.6, 38.7]);
	  }
	
	  // The projections must have mutually exclusive clip regions on the sphere,
	  // as this will avoid emitting interleaving lines and polygons.
	  function multiplex(streams) {
	    var n = streams.length;
	    return {
	      point: function(x, y) { var i = -1; while (++i < n) streams[i].point(x, y); },
	      sphere: function() { var i = -1; while (++i < n) streams[i].sphere(); },
	      lineStart: function() { var i = -1; while (++i < n) streams[i].lineStart(); },
	      lineEnd: function() { var i = -1; while (++i < n) streams[i].lineEnd(); },
	      polygonStart: function() { var i = -1; while (++i < n) streams[i].polygonStart(); },
	      polygonEnd: function() { var i = -1; while (++i < n) streams[i].polygonEnd(); }
	    };
	  }
	
	  // A composite projection for the United States, configured by default for
	  // 960×500. The projection also works quite well at 960×600 if you change the
	  // scale to 1285 and adjust the translate accordingly. The set of standard
	  // parallels for each region comes from USGS, which is published here:
	  // http://egsc.usgs.gov/isb/pubs/MapProjections/projections.html#albers
	  function albersUsa() {
	    var cache,
	        cacheStream,
	        lower48 = albers(), lower48Point,
	        alaska = conicEqualArea().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]), alaskaPoint, // EPSG:3338
	        hawaii = conicEqualArea().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]), hawaiiPoint, // ESRI:102007
	        point, pointStream = {point: function(x, y) { point = [x, y]; }};
	
	    function albersUsa(coordinates) {
	      var x = coordinates[0], y = coordinates[1];
	      return point = null,
	          (lower48Point.point(x, y), point)
	          || (alaskaPoint.point(x, y), point)
	          || (hawaiiPoint.point(x, y), point);
	    }
	
	    albersUsa.invert = function(coordinates) {
	      var k = lower48.scale(),
	          t = lower48.translate(),
	          x = (coordinates[0] - t[0]) / k,
	          y = (coordinates[1] - t[1]) / k;
	      return (y >= 0.120 && y < 0.234 && x >= -0.425 && x < -0.214 ? alaska
	          : y >= 0.166 && y < 0.234 && x >= -0.214 && x < -0.115 ? hawaii
	          : lower48).invert(coordinates);
	    };
	
	    albersUsa.stream = function(stream) {
	      return cache && cacheStream === stream ? cache : cache = multiplex([lower48.stream(cacheStream = stream), alaska.stream(stream), hawaii.stream(stream)]);
	    };
	
	    albersUsa.precision = function(_) {
	      if (!arguments.length) return lower48.precision();
	      lower48.precision(_), alaska.precision(_), hawaii.precision(_);
	      return albersUsa;
	    };
	
	    albersUsa.scale = function(_) {
	      if (!arguments.length) return lower48.scale();
	      lower48.scale(_), alaska.scale(_ * 0.35), hawaii.scale(_);
	      return albersUsa.translate(lower48.translate());
	    };
	
	    albersUsa.translate = function(_) {
	      if (!arguments.length) return lower48.translate();
	      var k = lower48.scale(), x = +_[0], y = +_[1];
	
	      lower48Point = lower48
	          .translate(_)
	          .clipExtent([[x - 0.455 * k, y - 0.238 * k], [x + 0.455 * k, y + 0.238 * k]])
	          .stream(pointStream);
	
	      alaskaPoint = alaska
	          .translate([x - 0.307 * k, y + 0.201 * k])
	          .clipExtent([[x - 0.425 * k + epsilon$4, y + 0.120 * k + epsilon$4], [x - 0.214 * k - epsilon$4, y + 0.234 * k - epsilon$4]])
	          .stream(pointStream);
	
	      hawaiiPoint = hawaii
	          .translate([x - 0.205 * k, y + 0.212 * k])
	          .clipExtent([[x - 0.214 * k + epsilon$4, y + 0.166 * k + epsilon$4], [x - 0.115 * k - epsilon$4, y + 0.234 * k - epsilon$4]])
	          .stream(pointStream);
	
	      return albersUsa;
	    };
	
	    albersUsa.fitExtent = fitExtent(albersUsa);
	
	    albersUsa.fitSize = fitSize(albersUsa);
	
	    return albersUsa.scale(1070);
	  }
	
	  function azimuthalRaw(scale) {
	    return function(x, y) {
	      var cx = cos$1(x),
	          cy = cos$1(y),
	          k = scale(cx * cy);
	      return [
	        k * cy * sin$1(x),
	        k * sin$1(y)
	      ];
	    }
	  }
	
	  function azimuthalInvert(angle) {
	    return function(x, y) {
	      var z = sqrt$1(x * x + y * y),
	          c = angle(z),
	          sc = sin$1(c),
	          cc = cos$1(c);
	      return [
	        atan2(x * sc, z * cc),
	        asin$1(z && y * sc / z)
	      ];
	    }
	  }
	
	  var azimuthalEqualAreaRaw = azimuthalRaw(function(cxcy) {
	    return sqrt$1(2 / (1 + cxcy));
	  });
	
	  azimuthalEqualAreaRaw.invert = azimuthalInvert(function(z) {
	    return 2 * asin$1(z / 2);
	  });
	
	  function azimuthalEqualArea() {
	    return projection(azimuthalEqualAreaRaw)
	        .scale(124.75)
	        .clipAngle(180 - 1e-3);
	  }
	
	  var azimuthalEquidistantRaw = azimuthalRaw(function(c) {
	    return (c = acos(c)) && c / sin$1(c);
	  });
	
	  azimuthalEquidistantRaw.invert = azimuthalInvert(function(z) {
	    return z;
	  });
	
	  function azimuthalEquidistant() {
	    return projection(azimuthalEquidistantRaw)
	        .scale(79.4188)
	        .clipAngle(180 - 1e-3);
	  }
	
	  function mercatorRaw(lambda, phi) {
	    return [lambda, log$1(tan((halfPi$3 + phi) / 2))];
	  }
	
	  mercatorRaw.invert = function(x, y) {
	    return [x, 2 * atan(exp(y)) - halfPi$3];
	  };
	
	  function mercator() {
	    return mercatorProjection(mercatorRaw)
	        .scale(961 / tau$4);
	  }
	
	  function mercatorProjection(project) {
	    var m = projection(project),
	        scale = m.scale,
	        translate = m.translate,
	        clipExtent = m.clipExtent,
	        clipAuto;
	
	    m.scale = function(_) {
	      return arguments.length ? (scale(_), clipAuto && m.clipExtent(null), m) : scale();
	    };
	
	    m.translate = function(_) {
	      return arguments.length ? (translate(_), clipAuto && m.clipExtent(null), m) : translate();
	    };
	
	    m.clipExtent = function(_) {
	      if (!arguments.length) return clipAuto ? null : clipExtent();
	      if (clipAuto = _ == null) {
	        var k = pi$4 * scale(),
	            t = translate();
	        _ = [[t[0] - k, t[1] - k], [t[0] + k, t[1] + k]];
	      }
	      clipExtent(_);
	      return m;
	    };
	
	    return m.clipExtent(null);
	  }
	
	  function tany(y) {
	    return tan((halfPi$3 + y) / 2);
	  }
	
	  function conicConformalRaw(y0, y1) {
	    var cy0 = cos$1(y0),
	        n = y0 === y1 ? sin$1(y0) : log$1(cy0 / cos$1(y1)) / log$1(tany(y1) / tany(y0)),
	        f = cy0 * pow$1(tany(y0), n) / n;
	
	    if (!n) return mercatorRaw;
	
	    function project(x, y) {
	      if (f > 0) { if (y < -halfPi$3 + epsilon$4) y = -halfPi$3 + epsilon$4; }
	      else { if (y > halfPi$3 - epsilon$4) y = halfPi$3 - epsilon$4; }
	      var r = f / pow$1(tany(y), n);
	      return [r * sin$1(n * x), f - r * cos$1(n * x)];
	    }
	
	    project.invert = function(x, y) {
	      var fy = f - y, r = sign$1(n) * sqrt$1(x * x + fy * fy);
	      return [atan2(x, fy) / n, 2 * atan(pow$1(f / r, 1 / n)) - halfPi$3];
	    };
	
	    return project;
	  }
	
	  function conicConformal() {
	    return conicProjection(conicConformalRaw)
	        .scale(109.5)
	        .parallels([30, 30]);
	  }
	
	  function equirectangularRaw(lambda, phi) {
	    return [lambda, phi];
	  }
	
	  equirectangularRaw.invert = equirectangularRaw;
	
	  function equirectangular() {
	    return projection(equirectangularRaw)
	        .scale(152.63);
	  }
	
	  function conicEquidistantRaw(y0, y1) {
	    var cy0 = cos$1(y0),
	        n = y0 === y1 ? sin$1(y0) : (cy0 - cos$1(y1)) / (y1 - y0),
	        g = cy0 / n + y0;
	
	    if (abs(n) < epsilon$4) return equirectangularRaw;
	
	    function project(x, y) {
	      var gy = g - y, nx = n * x;
	      return [gy * sin$1(nx), g - gy * cos$1(nx)];
	    }
	
	    project.invert = function(x, y) {
	      var gy = g - y;
	      return [atan2(x, gy) / n, g - sign$1(n) * sqrt$1(x * x + gy * gy)];
	    };
	
	    return project;
	  }
	
	  function conicEquidistant() {
	    return conicProjection(conicEquidistantRaw)
	        .scale(131.154)
	        .center([0, 13.9389]);
	  }
	
	  function gnomonicRaw(x, y) {
	    var cy = cos$1(y), k = cos$1(x) * cy;
	    return [cy * sin$1(x) / k, sin$1(y) / k];
	  }
	
	  gnomonicRaw.invert = azimuthalInvert(atan);
	
	  function gnomonic() {
	    return projection(gnomonicRaw)
	        .scale(144.049)
	        .clipAngle(60);
	  }
	
	  function orthographicRaw(x, y) {
	    return [cos$1(y) * sin$1(x), sin$1(y)];
	  }
	
	  orthographicRaw.invert = azimuthalInvert(asin$1);
	
	  function orthographic() {
	    return projection(orthographicRaw)
	        .scale(249.5)
	        .clipAngle(90 + epsilon$4);
	  }
	
	  function stereographicRaw(x, y) {
	    var cy = cos$1(y), k = 1 + cos$1(x) * cy;
	    return [cy * sin$1(x) / k, sin$1(y) / k];
	  }
	
	  stereographicRaw.invert = azimuthalInvert(function(z) {
	    return 2 * atan(z);
	  });
	
	  function stereographic() {
	    return projection(stereographicRaw)
	        .scale(250)
	        .clipAngle(142);
	  }
	
	  function transverseMercatorRaw(lambda, phi) {
	    return [log$1(tan((halfPi$3 + phi) / 2)), -lambda];
	  }
	
	  transverseMercatorRaw.invert = function(x, y) {
	    return [-y, 2 * atan(exp(x)) - halfPi$3];
	  };
	
	  function transverseMercator() {
	    var m = mercatorProjection(transverseMercatorRaw),
	        center = m.center,
	        rotate = m.rotate;
	
	    m.center = function(_) {
	      return arguments.length ? center([-_[1], _[0]]) : (_ = center(), [_[1], -_[0]]);
	    };
	
	    m.rotate = function(_) {
	      return arguments.length ? rotate([_[0], _[1], _.length > 2 ? _[2] + 90 : 90]) : (_ = rotate(), [_[0], _[1], _[2] - 90]);
	    };
	
	    return rotate([0, 0, 90])
	        .scale(159.155);
	  }
	
	  exports.version = version;
	  exports.bisect = bisectRight;
	  exports.bisectRight = bisectRight;
	  exports.bisectLeft = bisectLeft;
	  exports.ascending = ascending;
	  exports.bisector = bisector;
	  exports.descending = descending;
	  exports.deviation = deviation;
	  exports.extent = extent;
	  exports.histogram = histogram;
	  exports.thresholdFreedmanDiaconis = freedmanDiaconis;
	  exports.thresholdScott = scott;
	  exports.thresholdSturges = sturges;
	  exports.max = max;
	  exports.mean = mean;
	  exports.median = median;
	  exports.merge = merge;
	  exports.min = min;
	  exports.pairs = pairs;
	  exports.permute = permute;
	  exports.quantile = threshold;
	  exports.range = range;
	  exports.scan = scan;
	  exports.shuffle = shuffle;
	  exports.sum = sum;
	  exports.ticks = ticks;
	  exports.tickStep = tickStep;
	  exports.transpose = transpose;
	  exports.variance = variance;
	  exports.zip = zip;
	  exports.entries = entries;
	  exports.keys = keys;
	  exports.values = values;
	  exports.map = map$1;
	  exports.set = set;
	  exports.nest = nest;
	  exports.randomUniform = uniform;
	  exports.randomNormal = normal;
	  exports.randomLogNormal = logNormal;
	  exports.randomBates = bates;
	  exports.randomIrwinHall = irwinHall;
	  exports.randomExponential = exponential;
	  exports.easeLinear = linear;
	  exports.easeQuad = quadInOut;
	  exports.easeQuadIn = quadIn;
	  exports.easeQuadOut = quadOut;
	  exports.easeQuadInOut = quadInOut;
	  exports.easeCubic = easeCubicInOut;
	  exports.easeCubicIn = cubicIn;
	  exports.easeCubicOut = cubicOut;
	  exports.easeCubicInOut = easeCubicInOut;
	  exports.easePoly = polyInOut;
	  exports.easePolyIn = polyIn;
	  exports.easePolyOut = polyOut;
	  exports.easePolyInOut = polyInOut;
	  exports.easeSin = sinInOut;
	  exports.easeSinIn = sinIn;
	  exports.easeSinOut = sinOut;
	  exports.easeSinInOut = sinInOut;
	  exports.easeExp = expInOut;
	  exports.easeExpIn = expIn;
	  exports.easeExpOut = expOut;
	  exports.easeExpInOut = expInOut;
	  exports.easeCircle = circleInOut;
	  exports.easeCircleIn = circleIn;
	  exports.easeCircleOut = circleOut;
	  exports.easeCircleInOut = circleInOut;
	  exports.easeBounce = bounceOut;
	  exports.easeBounceIn = bounceIn;
	  exports.easeBounceOut = bounceOut;
	  exports.easeBounceInOut = bounceInOut;
	  exports.easeBack = backInOut;
	  exports.easeBackIn = backIn;
	  exports.easeBackOut = backOut;
	  exports.easeBackInOut = backInOut;
	  exports.easeElastic = elasticOut;
	  exports.easeElasticIn = elasticIn;
	  exports.easeElasticOut = elasticOut;
	  exports.easeElasticInOut = elasticInOut;
	  exports.polygonArea = area;
	  exports.polygonCentroid = centroid;
	  exports.polygonHull = hull;
	  exports.polygonContains = contains;
	  exports.polygonLength = length$1;
	  exports.path = path;
	  exports.quadtree = quadtree;
	  exports.queue = queue;
	  exports.arc = arc;
	  exports.area = area$1;
	  exports.line = line;
	  exports.pie = pie;
	  exports.radialArea = radialArea;
	  exports.radialLine = radialLine$1;
	  exports.symbol = symbol;
	  exports.symbols = symbols;
	  exports.symbolCircle = circle;
	  exports.symbolCross = cross$1;
	  exports.symbolDiamond = diamond;
	  exports.symbolSquare = square;
	  exports.symbolStar = star;
	  exports.symbolTriangle = triangle;
	  exports.symbolWye = wye;
	  exports.curveBasisClosed = basisClosed;
	  exports.curveBasisOpen = basisOpen;
	  exports.curveBasis = basis;
	  exports.curveBundle = bundle;
	  exports.curveCardinalClosed = cardinalClosed;
	  exports.curveCardinalOpen = cardinalOpen;
	  exports.curveCardinal = cardinal;
	  exports.curveCatmullRomClosed = catmullRomClosed;
	  exports.curveCatmullRomOpen = catmullRomOpen;
	  exports.curveCatmullRom = catmullRom;
	  exports.curveLinearClosed = linearClosed;
	  exports.curveLinear = curveLinear;
	  exports.curveMonotoneX = monotoneX;
	  exports.curveMonotoneY = monotoneY;
	  exports.curveNatural = natural;
	  exports.curveStep = step;
	  exports.curveStepAfter = stepAfter;
	  exports.curveStepBefore = stepBefore;
	  exports.stack = stack;
	  exports.stackOffsetExpand = expand;
	  exports.stackOffsetNone = none;
	  exports.stackOffsetSilhouette = silhouette;
	  exports.stackOffsetWiggle = wiggle;
	  exports.stackOrderAscending = ascending$1;
	  exports.stackOrderDescending = descending$2;
	  exports.stackOrderInsideOut = insideOut;
	  exports.stackOrderNone = none$1;
	  exports.stackOrderReverse = reverse;
	  exports.color = color;
	  exports.rgb = colorRgb;
	  exports.hsl = colorHsl;
	  exports.lab = lab;
	  exports.hcl = colorHcl;
	  exports.cubehelix = cubehelix;
	  exports.interpolate = interpolate;
	  exports.interpolateArray = array$1;
	  exports.interpolateDate = date;
	  exports.interpolateNumber = interpolateNumber;
	  exports.interpolateObject = object;
	  exports.interpolateRound = interpolateRound;
	  exports.interpolateString = interpolateString;
	  exports.interpolateTransformCss = interpolateTransform$1;
	  exports.interpolateTransformSvg = interpolateTransform$2;
	  exports.interpolateZoom = interpolateZoom;
	  exports.interpolateRgb = interpolateRgb;
	  exports.interpolateRgbBasis = rgbBasis;
	  exports.interpolateRgbBasisClosed = rgbBasisClosed;
	  exports.interpolateHsl = hsl$1;
	  exports.interpolateHslLong = hslLong;
	  exports.interpolateLab = lab$1;
	  exports.interpolateHcl = hcl$1;
	  exports.interpolateHclLong = hclLong;
	  exports.interpolateCubehelix = cubehelix$2;
	  exports.interpolateCubehelixLong = interpolateCubehelixLong;
	  exports.interpolateBasis = basis$2;
	  exports.interpolateBasisClosed = basisClosed$1;
	  exports.quantize = quantize;
	  exports.dispatch = dispatch;
	  exports.dsvFormat = dsv;
	  exports.csvParse = csvParse;
	  exports.csvParseRows = csvParseRows;
	  exports.csvFormat = csvFormat;
	  exports.csvFormatRows = csvFormatRows;
	  exports.tsvParse = tsvParse;
	  exports.tsvParseRows = tsvParseRows;
	  exports.tsvFormat = tsvFormat;
	  exports.tsvFormatRows = tsvFormatRows;
	  exports.request = request;
	  exports.html = html;
	  exports.json = json;
	  exports.text = text;
	  exports.xml = xml;
	  exports.csv = csv$1;
	  exports.tsv = tsv$1;
	  exports.now = now;
	  exports.timer = timer;
	  exports.timerFlush = timerFlush;
	  exports.timeout = timeout$1;
	  exports.interval = interval$1;
	  exports.timeInterval = newInterval;
	  exports.timeMillisecond = millisecond;
	  exports.timeMilliseconds = milliseconds;
	  exports.timeSecond = second;
	  exports.timeSeconds = seconds;
	  exports.timeMinute = minute;
	  exports.timeMinutes = minutes;
	  exports.timeHour = hour;
	  exports.timeHours = hours;
	  exports.timeDay = day;
	  exports.timeDays = days;
	  exports.timeWeek = timeWeek;
	  exports.timeWeeks = sundays;
	  exports.timeSunday = timeWeek;
	  exports.timeSundays = sundays;
	  exports.timeMonday = timeMonday;
	  exports.timeMondays = mondays;
	  exports.timeTuesday = tuesday;
	  exports.timeTuesdays = tuesdays;
	  exports.timeWednesday = wednesday;
	  exports.timeWednesdays = wednesdays;
	  exports.timeThursday = thursday;
	  exports.timeThursdays = thursdays;
	  exports.timeFriday = friday;
	  exports.timeFridays = fridays;
	  exports.timeSaturday = saturday;
	  exports.timeSaturdays = saturdays;
	  exports.timeMonth = month;
	  exports.timeMonths = months;
	  exports.timeYear = year;
	  exports.timeYears = years;
	  exports.utcMillisecond = millisecond;
	  exports.utcMilliseconds = milliseconds;
	  exports.utcSecond = second;
	  exports.utcSeconds = seconds;
	  exports.utcMinute = utcMinute;
	  exports.utcMinutes = utcMinutes;
	  exports.utcHour = utcHour;
	  exports.utcHours = utcHours;
	  exports.utcDay = utcDay;
	  exports.utcDays = utcDays;
	  exports.utcWeek = utcWeek;
	  exports.utcWeeks = utcSundays;
	  exports.utcSunday = utcWeek;
	  exports.utcSundays = utcSundays;
	  exports.utcMonday = utcMonday;
	  exports.utcMondays = utcMondays;
	  exports.utcTuesday = utcTuesday;
	  exports.utcTuesdays = utcTuesdays;
	  exports.utcWednesday = utcWednesday;
	  exports.utcWednesdays = utcWednesdays;
	  exports.utcThursday = utcThursday;
	  exports.utcThursdays = utcThursdays;
	  exports.utcFriday = utcFriday;
	  exports.utcFridays = utcFridays;
	  exports.utcSaturday = utcSaturday;
	  exports.utcSaturdays = utcSaturdays;
	  exports.utcMonth = utcMonth;
	  exports.utcMonths = utcMonths;
	  exports.utcYear = utcYear;
	  exports.utcYears = utcYears;
	  exports.formatLocale = formatLocale;
	  exports.formatDefaultLocale = defaultLocale;
	  exports.formatSpecifier = formatSpecifier;
	  exports.precisionFixed = precisionFixed;
	  exports.precisionPrefix = precisionPrefix;
	  exports.precisionRound = precisionRound;
	  exports.isoFormat = formatIso;
	  exports.isoParse = parseIso;
	  exports.timeFormatLocale = formatLocale$1;
	  exports.timeFormatDefaultLocale = defaultLocale$1;
	  exports.scaleBand = band;
	  exports.scalePoint = point$4;
	  exports.scaleIdentity = identity$4;
	  exports.scaleLinear = linear$2;
	  exports.scaleLog = log;
	  exports.scaleOrdinal = ordinal;
	  exports.scaleImplicit = implicit;
	  exports.scalePow = pow;
	  exports.scaleSqrt = sqrt;
	  exports.scaleQuantile = quantile;
	  exports.scaleQuantize = quantize$1;
	  exports.scaleThreshold = threshold$1;
	  exports.scaleTime = time;
	  exports.scaleUtc = utcTime;
	  exports.schemeCategory10 = category10;
	  exports.schemeCategory20b = category20b;
	  exports.schemeCategory20c = category20c;
	  exports.schemeCategory20 = category20;
	  exports.scaleSequential = sequential;
	  exports.interpolateCubehelixDefault = cubehelix$3;
	  exports.interpolateRainbow = rainbow$1;
	  exports.interpolateWarm = warm;
	  exports.interpolateCool = cool;
	  exports.interpolateViridis = viridis;
	  exports.interpolateMagma = magma;
	  exports.interpolateInferno = inferno;
	  exports.interpolatePlasma = plasma;
	  exports.creator = creator;
	  exports.customEvent = customEvent;
	  exports.local = local;
	  exports.matcher = matcher$1;
	  exports.mouse = mouse;
	  exports.namespace = namespace;
	  exports.namespaces = namespaces;
	  exports.select = select;
	  exports.selectAll = selectAll;
	  exports.selection = selection;
	  exports.selector = selector;
	  exports.selectorAll = selectorAll;
	  exports.touch = touch;
	  exports.touches = touches;
	  exports.window = window;
	  exports.active = active;
	  exports.interrupt = interrupt;
	  exports.transition = transition;
	  exports.axisTop = axisTop;
	  exports.axisRight = axisRight;
	  exports.axisBottom = axisBottom;
	  exports.axisLeft = axisLeft;
	  exports.cluster = cluster;
	  exports.hierarchy = hierarchy;
	  exports.pack = index;
	  exports.packSiblings = siblings;
	  exports.packEnclose = enclose;
	  exports.partition = partition;
	  exports.stratify = stratify;
	  exports.tree = tree;
	  exports.treemap = index$1;
	  exports.treemapBinary = binary;
	  exports.treemapDice = treemapDice;
	  exports.treemapSlice = treemapSlice;
	  exports.treemapSliceDice = sliceDice;
	  exports.treemapSquarify = squarify;
	  exports.treemapResquarify = resquarify;
	  exports.forceCenter = center$1;
	  exports.forceCollide = collide;
	  exports.forceLink = link;
	  exports.forceManyBody = manyBody;
	  exports.forceSimulation = simulation;
	  exports.forceX = x$3;
	  exports.forceY = y$3;
	  exports.drag = drag;
	  exports.dragDisable = dragDisable;
	  exports.dragEnable = dragEnable;
	  exports.voronoi = voronoi;
	  exports.zoom = zoom;
	  exports.zoomIdentity = identity$6;
	  exports.zoomTransform = transform;
	  exports.brush = brush;
	  exports.brushX = brushX;
	  exports.brushY = brushY;
	  exports.brushSelection = brushSelection;
	  exports.chord = chord;
	  exports.ribbon = ribbon;
	  exports.geoAlbers = albers;
	  exports.geoAlbersUsa = albersUsa;
	  exports.geoArea = area$2;
	  exports.geoAzimuthalEqualArea = azimuthalEqualArea;
	  exports.geoAzimuthalEqualAreaRaw = azimuthalEqualAreaRaw;
	  exports.geoAzimuthalEquidistant = azimuthalEquidistant;
	  exports.geoAzimuthalEquidistantRaw = azimuthalEquidistantRaw;
	  exports.geoBounds = bounds;
	  exports.geoCentroid = centroid$1;
	  exports.geoCircle = circle$1;
	  exports.geoClipExtent = extent$1;
	  exports.geoConicConformal = conicConformal;
	  exports.geoConicConformalRaw = conicConformalRaw;
	  exports.geoConicEqualArea = conicEqualArea;
	  exports.geoConicEqualAreaRaw = conicEqualAreaRaw;
	  exports.geoConicEquidistant = conicEquidistant;
	  exports.geoConicEquidistantRaw = conicEquidistantRaw;
	  exports.geoDistance = distance;
	  exports.geoEquirectangular = equirectangular;
	  exports.geoEquirectangularRaw = equirectangularRaw;
	  exports.geoGnomonic = gnomonic;
	  exports.geoGnomonicRaw = gnomonicRaw;
	  exports.geoGraticule = graticule;
	  exports.geoInterpolate = interpolate$2;
	  exports.geoLength = length$2;
	  exports.geoMercator = mercator;
	  exports.geoMercatorRaw = mercatorRaw;
	  exports.geoOrthographic = orthographic;
	  exports.geoOrthographicRaw = orthographicRaw;
	  exports.geoPath = index$3;
	  exports.geoProjection = projection;
	  exports.geoProjectionMutator = projectionMutator;
	  exports.geoRotation = rotation;
	  exports.geoStereographic = stereographic;
	  exports.geoStereographicRaw = stereographicRaw;
	  exports.geoStream = geoStream;
	  exports.geoTransform = transform$1;
	  exports.geoTransverseMercator = transverseMercator;
	  exports.geoTransverseMercatorRaw = transverseMercatorRaw;
	
	  Object.defineProperty(exports, '__esModule', { value: true });
	
	})));

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var d3 = __webpack_require__(4),
	    $ = __webpack_require__(2);
	
	$.fn.d3Click = function () {
	  this.each(function (i, e) {
	    var evt = new MouseEvent("click");
	    e.dispatchEvent(evt);
	  });
	};
	
	module.exports = {
	  translate: function(x,y) {
	    return "translate("+x+","+y+")";
	  },
	  unique: function(arr) {
	    var u = {}, a = [];
	    for(var i = 0, l = arr.length; i < l; ++i){
	        if(!u.hasOwnProperty(arr[i])) {
	            a.push(arr[i]);
	            u[arr[i]] = 1;
	        }
	    }
	    return a;
	  },
	  getAggregateSetting: function(startDate, endDate) {
	
	    var timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
	    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
	
	    if (diffDays>5*365) {
	      return "year";
	    }
	    else {
	      return "month";
	    }
	  },
	  setUrl: function(visParams) {
	    var stateStr = "/music-thermometer-vis/?";
	    stateStr += "dateRange=" + visParams.dateRange + '&';
	    stateStr += "minRank=" + visParams.minRank + '&';
	    stateStr += "search=" + visParams.search + '&';
	    stateStr += "songGraph=" + visParams.songGraph + '&';
	    stateStr += "startDate=" + visParams.startDate + '&';
	    stateStr += "endDate=" + visParams.endDate;
	
	    window.history.pushState("app_state", "AppState", stateStr)
	  },
	  getParameterByName: function(name, url) {
	    if (!url) {
	      url = window.location.href;
	    }
	    name = name.replace(/[\[\]]/g, "\\$&");
	    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
	        results = regex.exec(url);
	    if (!results) return null;
	    if (!results[2]) return '';
	    return decodeURIComponent(results[2].replace(/\+/g, " "));
	  }
	}


/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = {
	  monthNames: ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"],
	  entry1: "As the two major English music markets, artists from US and UK and their music always have profound influence on each other; however, the general public's taste on music seem to vary over time.",
	  entry2: "Music Thermometer is a data visualization system to compare artists' popularity between US and UK, using data from Billboard Hot 100 (http://www.billboard.com/charts/hot-100) and Official Charts Top 100 (http://www.officialcharts.com/charts/singles-chart).",
	  entry3: "The system compares artists' popularity by the number of songs appearing on the charts, and futhermore, the exact ranking of each song."
	}


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	// JS Libraries
	var d3 = __webpack_require__(4),
	    tip = __webpack_require__(12),
	    spin = __webpack_require__(27),
	    $ = __webpack_require__(2);
	
	// Other JS files
	var tooltipLib = __webpack_require__(11),
	    apiCalls = __webpack_require__(8),
	    controls = __webpack_require__(10),
	    utilities = __webpack_require__(5),
	    colors = __webpack_require__(9),
	    songGraph = __webpack_require__(17),
	    constants = __webpack_require__(6);
	
	// Css
	__webpack_require__(33);
	__webpack_require__(14);
	
	// Global vars
	var xScale,
	    yScale,
	    axisYScale,
	    tooltip,
	    currentTipArtist,
	    currentTipDate,
	    dateRange,
	    globalData,
	    aggregateSetting,
	    lastKeyPushTime;
	
	var visParams = {};
	
	var currentlyUpdating = false;
	
	//******************************************************************************
	// Public functions
	//******************************************************************************
	function initVis() {
	  $('#stream-search').on('input', function(d) {
	    lastKeyPushTime = new Date().getTime();
	    setTimeout(function(){
	      var currentTime = new Date().getTime();
	      if (currentTime - lastKeyPushTime > 250) {
	        filterAndRerender($('#stream-search').val());
	        visParams.search = $('#stream-search').val();
	      }
	    }, 250);
	  })
	  $('#apply-filters-button').on("click", function(){
	    if (currentlyUpdating == false) {
	      currentlyUpdating = true;
	      $('#apply-filters-button').css('cursor', 'default');
	
	      // Clear song graph and apply filters
	      $('#stream-search').val("");
	      $('#search-clear-button').d3Click();
	      applyFilters();
	
	      // Set URL
	      visParams.startDate = dateRange.startDate;
	      visParams.endDate = dateRange.endDate;
	      visParams.dateRange = $('#slider-dropdown').val();
	      visParams.minRank = $('#min-rank-value').val();
	      visParams.songGraph = false;
	      utilities.setUrl(visParams);
	    }
	  })
	  $('#search-clear-button').on("click", function() {
	    // Get rid of song info
	    $('#song-graph-container').remove();
	
	    // Clear out artist name
	    $('#stream-search').val('');
	
	    // Go back to full screen stream
	    visParams.dataLoaded = true;
	    visParams.songGraph = false;
	    streamGraphInit();
	
	    // Set url
	    utilities.setUrl(visParams);
	  })
	
	  // Graph container
	  var visContainer = $("<div id='vis-parent' class='vis-parent'></div>").appendTo('body');
	  var streamParent = $("<div id='stream-graph-parent' class='container'></div>").appendTo(visContainer);
	
	  // Hover tooltip
	  tooltip = tip()
	      .attr('class', 'd3-tip')
	      .attr('id', 'stream-tip')
	      .html(function(d) {
	        var dateStr = aggregateSetting == "year" ? d.date.getFullYear() : constants.monthNames[d.date.getMonth()] + ", " + d.date.getFullYear()
	        return tooltipLib.streamGraphTooltip(d.artist, d.count, 1, dateStr);
	      })
	      .offset([-120,0]);
	}
	
	function streamGraphInit() {
	  // Sizing
	  var margin = {top: 10, right: 20, bottom: 0, left: 150};
	      streamPadding = 30,
	      containerHeight = window.innerHeight - $('#app-header').outerHeight() - margin.top - margin.bottom,
	      axisHeight = 10,
	      height = (containerHeight/2) - axisHeight - streamPadding,
	      labelOffset = 50,
	      width = document.body.clientWidth - margin.left - margin.right;
	
	  if (visParams.songGraph) {
	    width = (document.body.clientWidth/2) - margin.left - margin.right;
	  }
	
	  var streamWidth = width - labelOffset;
	
	  $("#stream-graph-svg").remove();
	
	  var svg = d3.select("#stream-graph-parent")
	    .append("svg")
	      .attr('id', 'stream-graph-svg')
	      .attr("width", width + margin.left + margin.right)
	      .attr("height", containerHeight+margin.top+margin.bottom)
	
	  // Hidden circle for tooltip on mouse
	  var tipCircle = svg.append("circle")
	    .attr('id', 'tip-circle')
	    .attr('r', 0.1)
	    .attr('class', 'tip-circle');
	
	  // Move circle to mouse
	  svg.on('mousemove', function(d,i) {
	    tipCircle.attr('cx', d3.mouse(this)[0])
	      .attr('cy', d3.mouse(this)[1]);
	  })
	
	  // Layer group for us and uk streams
	  d3.select("#stream-graph-svg")
	    .append("g")
	      .attr("id", "stream-graph-us")
	      .attr("transform", utilities.translate(0,margin.top))
	      .append("g")
	        .attr("id", "stream-graph-stream-us")
	        .attr("transform", utilities.translate(margin.left,0))
	        .call(tooltip)
	
	  d3.select("#stream-graph-svg")
	    .append("g")
	      .attr("id", "stream-graph-uk")
	      .attr("transform", utilities.translate(0,(margin.top+height+(streamPadding*2))))
	    .append("g")
	      .attr("id", "stream-graph-stream-uk")
	      .attr("transform", utilities.translate(margin.left,0))
	      .call(tooltip)
	
	  // Stream labels
	  d3.select("#stream-graph-us")
	    .append("g")
	      .attr("transform",utilities.translate(labelOffset,(8+height/2)))
	      .append("text")
	        .text("US")
	        .attr("class", "stream-label")
	
	  d3.select("#stream-graph-uk")
	    .append("g")
	      .attr("transform", utilities.translate(labelOffset,(8+height/2)))
	      .append("text")
	        .text("UK")
	        .attr("class", "stream-label")
	
	  // Axes section
	  svg.append("g")
	      .attr("id", "x-axis")
	      .attr("class", "x axis")
	      .attr("transform", utilities.translate(margin.left,(height+streamPadding)))
	
	  svg.append("g")
	      .attr("id", "y-axis-top")
	      .attr("class", "y axis")
	      .attr("transform", utilities.translate((width+margin.left-labelOffset),margin.top))
	
	  svg.append("g")
	      .attr("id", "y-axis-bot")
	      .attr("class", "y axis")
	      .attr("transform", utilities.translate((width+margin.left-labelOffset),(margin.top+height+(streamPadding*2))))
	
	  // x/y Scales
	  xScale = d3.scaleTime()
	    .range([0, streamWidth])
	
	  yScale = d3.scaleLinear()
	    .range([height, 0])
	
	  axisYScale = d3.scaleLinear()
	    .range([height, 0])
	
	  // Pull data and create stream
	  createStreamGraph()
	}
	
	// Create streamgraph
	function createStreamGraph() {
	  dateRange = {
	    "startDate": visParams.startDate,
	    "endDate": visParams.endDate
	  }
	  utilities.setUrl(visParams);
	  // console.log("startDate: "+utilities.getParameterByName('startDate'));
	  // console.log("endDate: "+utilities.getParameterByName('endDate'));
	  // console.log("dateRange: "+utilities.getParameterByName('dateRange'));
	  // console.log("minRank: "+utilities.getParameterByName('minRank'));
	  // console.log("search: "+utilities.getParameterByName('search'));
	  // console.log("songGraph: "+utilities.getParameterByName('songGraph'));
	
	  var spinnerOptions = {
	    className: 'spinner',
	    color: "#39B54A",
	    top: '50%',
	    left: '50%',
	    trail: 60,
	    lines: 10,
	    length: 6,
	    radius: 12,
	    width: 3
	  }
	
	  // Add spinner
	  var spinner = new spin(spinnerOptions).spin();
	  if (visParams.dataLoaded != true) {
	    $('#spinner-container').append(spinner.el);
	  }
	
	  if (visParams.dataLoaded) {
	    // Render graph
	    renderStreamGraph(globalData);
	  }
	  else {
	    aggregateSetting = utilities.getAggregateSetting(startDate, endDate);
	    apiCalls.getChartRange(dateRange, aggregateSetting, function(data) {
	      // Render graph
	      globalData = addMissingArtistEntries(data);
	      renderStreamGraph(globalData);
	
	      // Remove spinner
	      $('#spinner-container').html('');
	
	      // Renable controls
	      $('#apply-filters-button').css('cursor', 'pointer');
	      currentlyUpdating = false;
	
	      if (visParams.search != "") { filterAndRerender(visParams.search) };
	    }, visParams.minRank);
	  }
	}
	
	// Remove streamgraph
	function removeStreamGraph() {
	  $('#stream-graph-parent').remove();
	}
	
	// Load some data at the beginning
	function initialLoad(start, end, rank) {
	  var dateRange = {
	    "startDate": start,
	    "endDate": end
	  }
	  aggregateSetting = utilities.getAggregateSetting(startDate, endDate);
	  apiCalls.getChartRange(dateRange, aggregateSetting, function(data) {
	    globalData = addMissingArtistEntries(data);
	  }, rank);
	}
	
	//******************************************************************************
	// Stream Graph Helper functions
	//******************************************************************************
	
	// Render a streamgraph
	function renderStreamGraph(preppedData) {
	  // Data
	  var combinedData = preppedData.us.concat(preppedData.uk);
	
	  // Stack
	  var stack = d3.stack()
	      .keys(preppedData.artists)
	      .offset(d3.stackOffsetSilhouette);
	
	  // Create layered data from stack
	  var layers = stack(combinedData);
	
	  // Adjust x/y domains
	  xScale.domain(d3.extent(combinedData, function(d) {
	      var dateObj = new Date(d.key);
	      dateObj = new Date( dateObj.getTime() + ( dateObj.getTimezoneOffset() * 60000 ) );
	      return dateObj;
	    }));
	
	  var minCount = d3.min(layers, function(layer) {
	    return d3.min(layer, function(d) {
	      return d[0];
	    })
	  });
	
	  var maxCount = d3.max(layers, function(layer) {
	    return d3.max(layer, function(d) {
	      return d[1];
	    })
	  });
	
	  yScale.domain([minCount, maxCount]);
	  axisYScale.domain([0, (maxCount + (-minCount))]);
	
	  // Update axes
	  d3.select("#x-axis")
	    .call(d3.axisBottom().scale(xScale))
	
	  d3.select("#y-axis-top")
	    .call(d3.axisRight().scale(axisYScale))
	  d3.select("#y-axis-bot")
	    .call(d3.axisRight().scale(axisYScale))
	
	  // Area function
	  var area = d3.area()
	    .curve(d3.curveBasis)
	    .x(function(d) {
	      dateObj = new Date(d.data.key);
	      return xScale(dateObj);
	    })
	    .y0(function(d) {
	      return yScale(d[0]);
	    })
	    .y1(function(d) {
	      return yScale(d[1]);
	    });
	
	  // Render layers for us and uk
	  renderLayers(stack(preppedData.us), area, d3.scaleOrdinal(colors.streamColors1), 'us');
	  renderLayers(stack(preppedData.uk), area, d3.scaleOrdinal(colors.streamColors2), 'uk');
	
	  // Add in tooltip interaction
	  addToolTip();
	
	  // Click to transition to other view
	  d3.selectAll("path")
	    .on("click", function(d, i) {
	      if (visParams.songGraph == false) {
	        // Here's where we transition to the bar chart
	        // Get slider selection
	        var sliderSelection = d3.brushSelection(d3.select('#stream-graph-brush').node());
	
	        // Invert slider dates
	        var startDate = controls.reverseScale(sliderSelection[0]),
	            endDate = controls.reverseScale(sliderSelection[1]);
	
	        $('#stream-search').val(d.key);
	        visParams.search = d.key;
	
	        transitionToSplitView(d.key);
	        filterAndRerender($('#stream-search').val());
	        tooltip.hide();
	      }
	    })
	}
	
	// Render layers of streamgraph
	function renderLayers(layersData, area, color, country) {
	  var minCount = d3.min(layersData, function(layer) {
	    return d3.min(layer, function(d) {
	      return d[0];
	    })
	  });
	
	  var maxCount = d3.max(layersData, function(layer) {
	    return d3.max(layer, function(d) {
	      return d[1];
	    })
	  });
	
	  // Render layers from layer data with area function
	  var layers = d3.select('#stream-graph-stream-'+country)
	    .selectAll("path")
	    .data(layersData)
	
	  // Add new layers
	  layers.enter()
	    .append("path")
	    .merge(layers)
	      .attr("id", function(d) {
	        var id = d.key.replace(/ /g, "_") + "_" + country;
	        return id;
	      })
	      .transition()
	      .duration(300)
	      .ease(d3.easeCubic)
	      .attr("class", "layer area")
	      .style("fill", function(d, i) { return color(i); })
	      .attr("d", area);
	
	  // Remove old layers
	  layers.exit().remove();
	}
	
	// Tooltips
	function addToolTip() {
	  // Setup hover interaction
	  d3.selectAll("path")
	    .on("mouseover", function(d, i) {
	      // Lower opacity of all layers but hovered 1
	      d3.selectAll(".layer").transition()
	        .duration(250)
	        .attr("opacity", function(e, j) {
	          return e.key != d.key ? 0.2 : 1;
	      });
	
	      // Get dateinfo and render tooltip
	      var dateInfo = getMouseDate(d, this);
	      renderTooltip(d, dateInfo);
	    })
	    .on("mousemove", function(d, i) {
	      // Check if we've moved to a new artist/date
	      var dateInfo = getMouseDate(d, this);
	      if ((d.key != currentTipArtist) || (dateInfo.date != currentTipDate)) {
	        // Get dateinfo and render tooltip
	        renderTooltip(d, dateInfo);
	      }
	    })
	    .on("mouseout", function(d, i) {
	      // All layers back to full opacity
	      tooltip.hide(d);
	      d3.selectAll(".layer")
	        .transition()
	        .duration(250)
	        .attr("opacity", "1");
	    })
	}
	
	function renderTooltip(d, dateInfo) {
	  var usValue = globalData.us[dateInfo.index][d.key];
	      ukValue = globalData.uk[dateInfo.index][d.key];
	
	  // Set up tool tip data
	  tooltipData = {
	    "us": usValue,
	    "uk": ukValue,
	    "artist": d.key,
	    "date": dateInfo.date
	  }
	
	  // Render tooltip
	  tooltip.show(tooltipData, d3.select('#tip-circle').node());
	  tooltipLib.addStreamgraphTooltipGraph(tooltipData);
	
	  currentTipArtist = d.key;
	  currentTipDate = dateInfo.date;
	}
	
	function getMouseDate(d, e) {
	  // Find correct info
	  var mouseDate = xScale.invert(d3.mouse(e)[0]);
	
	  // Create date array (should be a better way)
	  var datearray = [];
	  for (var k = 0; k < d.length; k++) {
	    date = new Date(d[k].data.key);
	    date = new Date( date.getTime() + ( date.getTimezoneOffset() * 60000 ) );
	    datearray[k] = date.getFullYear() + "/" + date.getMonth();
	  }
	
	  // Get value at date
	  if (aggregateSetting == 'month'){
	    var mouseDateIndex = datearray.indexOf(mouseDate.getFullYear() + "/" + mouseDate.getMonth());
	  }
	  else {
	    var mouseDateIndex = datearray.indexOf(mouseDate.getFullYear() + "/0");
	  }
	  return {"index": mouseDateIndex, "date": mouseDate};
	}
	
	function applyFilters() {
	  // Get slider selection
	  var sliderSelection = d3.brushSelection(d3.select('#stream-graph-brush').node());
	
	  // Invert slider dates
	  var startDate = controls.reverseScale(sliderSelection[0]);
	  var endDate = controls.reverseScale(sliderSelection[1]);
	  dateRange = {
	    'startDate': startDate,
	    'endDate': endDate
	  }
	
	  // Create a new graph
	  visParams.startDate = startDate;
	  visParams.endDate = endDate;
	  visParams.minRank = $('#min-rank-value').val();
	  visParams.songGraph = false;
	  visParams.dataLoaded = false;
	  visParams.search = "";
	  createStreamGraph();
	}
	
	function filterAndRerender(filterText) {
	  var filteredArtists = [];
	
	  // Filter out artists
	  for (var i=0;i<globalData.artists.length;i++) {
	    if (globalData.artists[i].toLowerCase().includes(filterText.toLowerCase())) {
	      filteredArtists.push(globalData.artists[i]);
	    }
	  }
	
	  // Create data structure
	  var filteredData = {
	    "artists": filteredArtists,
	    "us": filterData(globalData.us, filteredArtists),
	    "uk": filterData(globalData.uk, filteredArtists)
	  }
	  renderStreamGraph(filteredData);
	}
	
	function filterData(data, filteredArtists) {
	  var filteredData = [];
	
	  // Filter out for each date
	  for(var i=0;i<data.length;i++) {
	    var filteredDate = {};
	    filteredDate["key"] = data[i].key;
	
	    // Copy in each artist that is in the list
	    for (artist in data[i]) {
	      if (filteredArtists.includes(artist)){
	        filteredDate[artist] = data[i][artist];
	      }
	    }
	    filteredData.push(filteredDate);
	  }
	  return filteredData;
	}
	
	function transitionToSplitView(artist) {
	  // Make streamgraph half width
	  visParams.songGraph = true;
	  visParams.dataLoaded = true;
	  streamGraphInit();
	
	  createSongGraph(artist, visParams.startDate, visParams.endDate);
	}
	
	function createSongGraph(artist, startDate, endDate) {
	  // Create song graph
	  apiCalls.getArtistSongs(artist, startDate, endDate, function(data) {
	    songGraph.songGraph(data, startDate, endDate);
	
	    // Set url
	    visParams.songGraph = true;
	    utilities.setUrl(visParams);
	  })
	}
	
	function addMissingArtistEntries(data) {
	  data.us.forEach(function(entry) {
	    data.artists.forEach(function(artist) {
	      if (artist in entry == false) {
	        entry[artist] = 0;
	      }
	    })
	  })
	
	  data.uk.forEach(function(entry) {
	    data.artists.forEach(function(artist) {
	      if (artist in entry == false) {
	        entry[artist] = 0;
	      }
	    })
	  })
	  return data;
	}
	
	function setVisParams(passedParams) {
	  visParams = passedParams;
	}
	
	module.exports = {
	  streamGraphInit: streamGraphInit,
	  createStreamGraph: createStreamGraph,
	  removeStreamGraph: removeStreamGraph,
	  initVis: initVis,
	  setVisParams: setVisParams,
	  initialLoad: initialLoad,
	  createSongGraph
	}


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(2),
	    utilities = __webpack_require__(5),
	    d3 = __webpack_require__(4);
	
	var serverAddress = "https://immense-badlands-95769.herokuapp.com/api/";
	// var serverAddress = "http://localhost:3000/api/";
	
	/*
	  @returns all entries in hot 100 database fitting parameters in 'data'
	  @country: us or uk or both
	  @dateRange:
	    - startDate: earliest date
	    - endDate: latest date
	  @callback
	  @minRank: optional minimum rank wanted
	*/
	function getChartRange(dateRange, aggregateSetting, callBack, minRank) {
	  var params = dateRange;
	  params.minRank = minRank;
	  params.aggregateSetting = aggregateSetting;
	  ajaxGet('charts/both', params, callBack);
	}
	
	/*
	  @returns song info and chartweek
	  @artist: artist to lookup
	  @dateRange:
	  - startDate: earliest date
	  - endDate: latest date
	*/
	function getArtistSongs(artist, startDate, endDate, callback) {
	  var params = {
	    'startDate': startDate,
	    'endDate': endDate
	  };
	  ajaxGet('artist/'+artist, params, function(rawData) {
	    callback(rawData);
	  })
	}
	
	// Helper to generate list of url params
	function generateUriParamString(params) {
	  var paramString = "?"
	  for (param in params) {
	    paramString += param + "=" + params[param] + "&";
	  }
	  return paramString.substring(0, paramString.length - 1);
	}
	
	// Helper to run ajax get with params and callback
	function ajaxGet(url, params, callBack) {
	  $.ajax({
	    type: "GET",
	    url: serverAddress + url + generateUriParamString(params),
	    dataType: "json",
	    success: function(data){ callBack(data) },
	  });
	}
	
	module.exports = {
	  "ajaxGet": ajaxGet,
	  "getArtistSongs": getArtistSongs,
	  "getChartRange": getChartRange
	}


/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = {
	  streamColors1: ["#7FC9FF","#7EB7DD","#5B97BF","#4782AD","#3E6D86"],
	  streamColors2: ["#F85C5C","#CC3737","#DD5151","#B41F1F","#9E0101"],
	  usGradientPair: ['#3E6D86','#7FC9FF'],
	  ukGradientPair: ['#9E0101','#F85C5C'],
	  accentColor: '#39B54A',
	  backgroundColor: '#282828'
	}


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(2),
	    streamGraph = __webpack_require__(7),
	    d3 = __webpack_require__(4);
	
	__webpack_require__(29);
	
	var sliderScale, brush,maxSliderDate;
	
	function reverseScale(val) {
	  return sliderScale.invert(val);
	}
	
	function createButton(text, id) {
	  var buttonParent = $("<div class='control-piece button-parent'></div>");
	  var button = $("<div class='button' id='filter-button'></div>").appendTo(buttonParent);
	  $("<div id='"+id+"' class='button-text'>"+text+"</div>").appendTo(button);
	  return buttonParent;
	}
	
	function createSelectOption(options, id, title, startingVal) {
	  var boundingBox = $('<div class="control-piece select-box"></div>');
	
	  boundingBox.append($("<div class='number-input-label'>Date Range</div>"))
	
	  var selectContainer = $('<span class="select-container">');
	  boundingBox.append(selectContainer);
	
	  var select = $('<select id="' + id + '" multple="multiple"></select>');
	  selectContainer.html(select);
	
	  for(var i=0;i<options.length;i++) {
	    if (options[i].value == startingVal) {
	      select.append($('<option selected="selected" value="' + options[i].value + '"/>').html(options[i].name));
	    }
	    else {
	      select.append($('<option value="' + options[i].value + '"/>').html(options[i].name));
	    }
	  }
	  $("<span class='genericon genericon-downarrow'></span>").appendTo(selectContainer);
	
	  select.on('change', function() {
	    updateSliderWidth($('#'+id).val())
	  })
	  return boundingBox;
	}
	
	function updateSliderWidth(years) {
	  var sliderSelection = d3.brushSelection(d3.select('#stream-graph-brush').node());
	
	  startDate = reverseScale(sliderSelection[0]),
	  endDate = reverseScale(sliderSelection[0]);
	
	  // Get end date
	  endDate.setDate(endDate.getDate()+(years*365));
	
	  // If the late date is past the max date
	  if (endDate > new Date(2015,12,31)) {
	    var difference = endDate - new Date(2015,12,31);
	    endDate = new Date(2015,12,31);
	    startDate = new Date(startDate - difference);
	  }
	
	  // Change slider
	  d3.select('#stream-graph-brush').call(brush.move, [sliderScale(startDate), sliderScale(endDate)])
	  updateDateLabels();
	}
	
	function createDropdown(list, id) {
	  var selectParent = $("<div class='select-parent'></div>")
	  var selectInput = $("<select name=''></select>").appendTo(selectParent);
	  for(var i=0;i<list.length;i++) {
	    selectInput.append($("<option value='"+list[i].value+"'>"+list[i].name+"</option>"))
	  }
	  return selectParent;
	}
	
	function createNumberInput(labelText, min, max, startValue, id) {
	  var inputParent = $("<div class='control-piece number-input-parent'></div>");
	  inputParent.append($("<div class='number-input-label'>"+labelText+"</div>"))
	  inputParent.append($("<input class='number-input-box' id='"+id+"' type='number' name='rank' min='1' max='100' value="+startValue+">"));
	  return inputParent;
	}
	
	function createSearchBar(id, starting) {
	  var searchParent = $("<div class='search-parent'></div>");
	  var searchIconContainer = $("<div class='search-icon'></div>").appendTo(searchParent);
	  $("<span class='genericon genericon-search'></span>").appendTo(searchIconContainer);
	
	  var searchBar = $("<input placeholder='Type in artist' onfocus=\"this.placeholder = ''\" onfocusout=\"this.placeholder = 'Type in artist'\" class='control-piece search-input-box' id='"+id+"' value='"+starting+"' />").appendTo(searchParent);
	
	  var searchClearContainer = $("<div class='search-clear'></div>").appendTo(searchParent);
	  $("<span id='search-clear-button' class='genericon genericon-close-alt'></span>").appendTo(searchClearContainer);
	  return searchParent;
	}
	
	function createSlider(parent, earlyStartingDate, lateStartingDate) {
	  var sliderContainer = $("<div id='slider-parent' class='control-piece slider'></div>").appendTo(parent)
	
	  startDate = earlyStartingDate,
	  endDate= lateStartingDate;
	
	  var labelWidth = 120;
	
	  // Sizes
	  var margin = {top: 0, right: 20, bottom: 20, left: 0},
	      width = (document.body.clientWidth/2) - margin.left - margin.right,
	      height = 50 - margin.top - margin.bottom;
	
	  // Scale
	  sliderScale = d3.scaleTime()
	    .domain([new Date(1960,0,1), new Date(2015,12,31)])
	    .rangeRound([0, width-labelWidth]);
	
	  // Axis object
	  var xAxis = d3.axisBottom(sliderScale)
	    .tickSize(-height)
	    .tickFormat(function() { return null; });
	
	  // Brush object
	  brush = d3.brushX()
	    .extent([[0,0], [width-labelWidth,height]])
	    .on("brush", function() {
	      brushed(sliderScale)
	    })
	
	  // Main container
	  var svg = d3.select('#'+sliderContainer.attr("id")).append("svg")
	      .attr("width", width + margin.right + margin.left)
	      .attr("height", height + margin.top + margin.bottom)
	    .append("g")
	      .attr("transform", utilities.translate(margin.left, margin.top))
	
	  var textGroup = svg.append("g")
	    .attr("transform", utilities.translate(width-labelWidth, 0))
	
	  textGroup.append("text")
	    .attr("id", "slider-start-label")
	    .attr("class", "date-label")
	    .attr("transform", utilities.translate(30, 10))
	
	  textGroup.append("text")
	  .attr("id", "slider-end-label")
	    .attr("class", "date-label")
	    .attr("transform", utilities.translate(30, 35))
	
	  updateDateLabels();
	
	  // Axis at bottom
	  svg.append("g")
	      .attr("class", "axis slider-axis")
	      .attr("transform", utilities.translate(0, height))
	      .call(xAxis)
	
	  // Visual bar
	  svg.append("g")
	      .attr("class", "slider-axis")
	      .attr("transform", utilities.translate(0,height))
	      .call(d3.axisBottom(sliderScale)
	        .tickPadding(0))
	      .attr("text-anchor", null)
	    .selectAll("text")
	      .attr("x", 6);
	
	  // Append brush
	  var brushArea = svg.append("g")
	    .attr("class", "brush")
	    .attr("id", "stream-graph-brush")
	    .call(brush);
	
	  brushArea.call(brush.move, [sliderScale(earlyStartingDate), sliderScale(lateStartingDate)])
	}
	
	function brushed(xScale) {
	  // Code to change when brushed
	  if (d3.event.sourceEvent && d3.event.sourceEvent.type === "zoom") return;
	  var s = d3.event.selection;
	  startDate = xScale.invert(s[0]);
	  endDate = xScale.invert(s[1]);
	  updateDateLabels();
	};
	
	// Controls
	function createControls(parent, earlyStartingDate, lateStartingDate, startingRank, startingRange, startingSearch) {
	  var controlsContainer = $("<div id='controls'></div>").appendTo(parent),
	      controlsContainerTop = $("<div id='controls-top' class='controls'></div>").appendTo(controlsContainer),
	      controlsContainerBot = $("<div id='controls-bot' class='controls'></div>").appendTo(controlsContainer);
	
	  // Add date slider
	  createSlider(controlsContainerTop, earlyStartingDate, lateStartingDate);
	
	  // Add filter for min rank
	  var yearOptions = [
	    {"name": "1 Year", "value": 1},
	    {"name": "2 Years", "value": 2},
	    {"name": "5 Years", "value": 5},
	    {"name": "10 Years", "value": 10}
	  ]
	  var sliderDropdown = createSelectOption(yearOptions, "slider-dropdown", "Time Range", startingRange);
	  controlsContainerTop.append(sliderDropdown);
	
	  // Add filter for min rank
	  var rankInput = createNumberInput("Min. Song Rank", 1, 100, startingRank, "min-rank-value");
	  controlsContainerTop.append(rankInput);
	
	  // Add button
	  var button = createButton("Update", 'apply-filters-button');
	  controlsContainerTop.append(button);
	
	  // Add search bar
	  var searchBar = createSearchBar('stream-search', startingSearch);
	  controlsContainerBot.append(searchBar);
	
	  $('body').append(addSpotifyPreview("https://p.scdn.co/mp3-preview/4839b070015ab7d6de9fec1756e1f3096d908fba"));
	}
	
	function addSpotifyPreview(link) {
	  var audioBoxParent = $("<div id='audio-box-parent' class='audio-box-parent'></div>");
	  // var audioBox = $("<audio controls  id='audio-control'></audio>").appendTo(audioBoxParent);
	  // audioBox.append($("<source id='audio-track' src='none' type='audio/mpeg'>"));
	
	  return audioBoxParent;
	}
	
	function updateDateLabels() {
	  d3.select('#slider-start-label').text("Start Date " + convertDate(startDate))
	  d3.select('#slider-end-label').text("End Date " + convertDate(endDate))
	}
	
	function convertDate(date) {
	  return (date.getMonth()+1) + '/' + date.getDate() + '/' + date.getFullYear();
	}
	module.exports = {
	  createButton: createButton,
	  createNumberInput: createNumberInput,
	  createSearchBar: createSearchBar,
	  createSlider: createSlider,
	  reverseScale: reverseScale,
	  createControls: createControls
	}


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(2),
	    d3 = __webpack_require__(4);
	
	__webpack_require__(34);
	
	function songGraphTooltip(d) {
	  var container = $("<div class='song-tooltip-container'></div>");
	  container.append('<div class="tooltip-rank">'+d.rank+'<div>');
	  if (d.album_art_link != null) {
	    container.append("<div class='tooltip-album-art'><img src='"+d.album_art_link+"' /></div>");
	  }
	  container.append("<span class='tooltip-song-name tooltip-piece'>"+d.title+"</span>");
	  container.append("<div class='tooltip-by-artist tooltip-piece'>by "+d.artist+"</div>");
	  container.append("<div class='tooltip-time tooltip-piece'>"+d.chart_week.substring(0,10)+"</div>")
	
	  return container.html();
	}
	
	function streamGraphTooltip(artist, usCount, ukCount, time) {
	  var container = $('<div id="tooltip-container" class="tooltip-container"></div>');
	  container.append("<div class='tooltip-piece tooltip-artist'>"+artist+"</div>");
	  container.append("<div class='tooltip-separator'></div>");
	  container.append('<div class="tooltip-piece tooltip-time">'+time+'</div>');
	
	  return container.html();
	}
	
	function smallBarChart(tooltipData) {
	  var data = [
	    {"country": "US", "count": tooltipData.us},
	    {"country": "UK", "count": tooltipData.uk}
	  ]
	  var margin = {top: 20, bottom: 25, right: 0, left: 0},
	      width = $('#stream-tip').width() - margin.right - margin.left,
	      height = 100 - margin.top - margin.bottom;
	
	  var x = d3.scaleBand()
	    .domain(["US", "UK"])
	    .padding(2)
	    .rangeRound([0, width])
	    .padding(0.1);
	
	  var xAxis = d3.axisBottom()
	    .scale(x)
	    .tickSize(0);
	
	  var y = d3.scaleLinear()
	    .domain([0, d3.max([data[0].count, data[1].count], function(d) {return d*1.1;})])
	    .range([height,0]);
	
	  var yAxis = d3.axisLeft()
	    .scale(y)
	    .ticks(3)
	    .tickSize(0);
	
	  var svg = d3.select('#stream-tip')
	    .append("svg")
	      .attr('id', 'tooltip-bar-graph-svg')
	      .attr("width", width + margin.left + margin.right)
	      .attr("height", height+margin.top+margin.bottom)
	
	  var g = svg.append("g")
	    .attr("id", "tooltip-bar-graph")
	    .attr("transform", "translate("+margin.left+","+margin.top+")");
	
	  var bars = g.selectAll("rect")
	    .data(data)
	
	  // Bar
	  bars.enter().append("rect")
	      .attr("class", "bar")
	      .attr("x", function(d) { return x(d.country); })
	      .attr("y", function(d) { return y(d.count); })
	    .merge(bars)
	      .attr("width", x.bandwidth())
	      .attr("height", function(d) { return height - y(d.count); })
	      .attr("fill", function(d){return d.country == "US" ? "#023858" : "#b30000"})
	
	  // Bar lable
	  g.selectAll("text.bar")
	      .data(data)
	    .enter().append("text")
	      .attr("class", "bar-text-label")
	      .attr("x", function(d) { return x(d.country) + x.bandwidth()/2 - 6; })
	      .attr("y", function(d) { return y(d.count) - 5; })
	      .text(function(d){return d.count})
	
	  // Bar axis
	  svg.append("g")
	    .call(xAxis)
	    .attr('class', 'x-axis-tip-bar')
	    .attr('transform', 'translate('+(margin.left-2)+','+(height+margin.top+3)+')')
	
	}
	
	module.exports = {
	  streamGraphTooltip: streamGraphTooltip,
	  songGraphTooltip: songGraphTooltip,
	  addStreamgraphTooltipGraph: smallBarChart
	}


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// d3.tip
	// Copyright (c) 2013 Justin Palmer
	//
	// Tooltips for d3.js SVG visualizations
	
	(function (root, factory) {
	  if (true) {
	    // AMD. Register as an anonymous module with d3 as a dependency.
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(4)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
	  } else if (typeof module === 'object' && module.exports) {
	    // CommonJS
	    var d3 = require('d3')
	    module.exports = factory(d3)
	  } else {
	    // Browser global.
	    root.d3.tip = factory(root.d3)
	  }
	}(this, function (d3) {
	
	  // Public - contructs a new tooltip
	  //
	  // Returns a tip
	  return function() {
	    var direction = d3_tip_direction,
	        offset    = d3_tip_offset,
	        html      = d3_tip_html,
	        node      = initNode(),
	        svg       = null,
	        point     = null,
	        target    = null
	
	    function tip(vis) {
	      svg = getSVGNode(vis)
	      point = svg.createSVGPoint()
	      document.body.appendChild(node)
	    }
	
	    // Public - show the tooltip on the screen
	    //
	    // Returns a tip
	    tip.show = function() {
	      var args = Array.prototype.slice.call(arguments)
	      if(args[args.length - 1] instanceof SVGElement) target = args.pop()
	
	      var content = html.apply(this, args),
	          poffset = offset.apply(this, args),
	          dir     = direction.apply(this, args),
	          nodel   = getNodeEl(),
	          i       = directions.length,
	          coords,
	          scrollTop  = document.documentElement.scrollTop || document.body.scrollTop,
	          scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft
	
	      nodel.html(content)
	        .style('opacity', 1).style('pointer-events', 'all')
	
	      while(i--) nodel.classed(directions[i], false)
	      coords = direction_callbacks.get(dir).apply(this)
	      nodel.classed(dir, true)
	      	.style('top', (coords.top +  poffset[0]) + scrollTop + 'px')
	      	.style('left', (coords.left + poffset[1]) + scrollLeft + 'px')
	
	      return tip;
	    };
	
	    // Public - hide the tooltip
	    //
	    // Returns a tip
	    tip.hide = function() {
	      var nodel = getNodeEl()
	      nodel.style('opacity', 0).style('pointer-events', 'none')
	      return tip
	    }
	
	    // Public: Proxy attr calls to the d3 tip container.  Sets or gets attribute value.
	    //
	    // n - name of the attribute
	    // v - value of the attribute
	    //
	    // Returns tip or attribute value
	    tip.attr = function(n, v) {
	      if (arguments.length < 2 && typeof n === 'string') {
	        return getNodeEl().attr(n)
	      } else {
	        var args =  Array.prototype.slice.call(arguments)
	        d3.selection.prototype.attr.apply(getNodeEl(), args)
	      }
	
	      return tip
	    }
	
	    // Public: Proxy style calls to the d3 tip container.  Sets or gets a style value.
	    //
	    // n - name of the property
	    // v - value of the property
	    //
	    // Returns tip or style property value
	    tip.style = function(n, v) {
	      if (arguments.length < 2 && typeof n === 'string') {
	        return getNodeEl().style(n)
	      } else {
	        var args = Array.prototype.slice.call(arguments)
	        d3.selection.prototype.style.apply(getNodeEl(), args)
	      }
	
	      return tip
	    }
	
	    // Public: Set or get the direction of the tooltip
	    //
	    // v - One of n(north), s(south), e(east), or w(west), nw(northwest),
	    //     sw(southwest), ne(northeast) or se(southeast)
	    //
	    // Returns tip or direction
	    tip.direction = function(v) {
	      if (!arguments.length) return direction
	      direction = v == null ? v : functor(v)
	
	      return tip
	    }
	
	    // Public: Sets or gets the offset of the tip
	    //
	    // v - Array of [x, y] offset
	    //
	    // Returns offset or
	    tip.offset = function(v) {
	      if (!arguments.length) return offset
	      offset = v == null ? v : functor(v)
	
	      return tip
	    }
	
	    // Public: sets or gets the html value of the tooltip
	    //
	    // v - String value of the tip
	    //
	    // Returns html value or tip
	    tip.html = function(v) {
	      if (!arguments.length) return html
	      html = v == null ? v : functor(v)
	
	      return tip
	    }
	
	    // Public: destroys the tooltip and removes it from the DOM
	    //
	    // Returns a tip
	    tip.destroy = function() {
	      if(node) {
	        getNodeEl().remove();
	        node = null;
	      }
	      return tip;
	    }
	
	    function d3_tip_direction() { return 'n' }
	    function d3_tip_offset() { return [0, 0] }
	    function d3_tip_html() { return ' ' }
	
	    var direction_callbacks = d3.map({
	      n:  direction_n,
	      s:  direction_s,
	      e:  direction_e,
	      w:  direction_w,
	      nw: direction_nw,
	      ne: direction_ne,
	      sw: direction_sw,
	      se: direction_se
	    }),
	
	    directions = direction_callbacks.keys()
	
	    function direction_n() {
	      var bbox = getScreenBBox()
	      return {
	        top:  bbox.n.y - node.offsetHeight,
	        left: bbox.n.x - node.offsetWidth / 2
	      }
	    }
	
	    function direction_s() {
	      var bbox = getScreenBBox()
	      return {
	        top:  bbox.s.y,
	        left: bbox.s.x - node.offsetWidth / 2
	      }
	    }
	
	    function direction_e() {
	      var bbox = getScreenBBox()
	      return {
	        top:  bbox.e.y - node.offsetHeight / 2,
	        left: bbox.e.x
	      }
	    }
	
	    function direction_w() {
	      var bbox = getScreenBBox()
	      return {
	        top:  bbox.w.y - node.offsetHeight / 2,
	        left: bbox.w.x - node.offsetWidth
	      }
	    }
	
	    function direction_nw() {
	      var bbox = getScreenBBox()
	      return {
	        top:  bbox.nw.y - node.offsetHeight,
	        left: bbox.nw.x - node.offsetWidth
	      }
	    }
	
	    function direction_ne() {
	      var bbox = getScreenBBox()
	      return {
	        top:  bbox.ne.y - node.offsetHeight,
	        left: bbox.ne.x
	      }
	    }
	
	    function direction_sw() {
	      var bbox = getScreenBBox()
	      return {
	        top:  bbox.sw.y,
	        left: bbox.sw.x - node.offsetWidth
	      }
	    }
	
	    function direction_se() {
	      var bbox = getScreenBBox()
	      return {
	        top:  bbox.se.y,
	        left: bbox.e.x
	      }
	    }
	
	    function initNode() {
	      var node = d3.select(document.createElement('div'));
	      node.style('position', 'absolute').style('top', 0).style('opacity', 0)
	      	.style('pointer-events', 'none').style('box-sizing', 'border-box')
	
	      return node.node()
	    }
	
	    function getSVGNode(el) {
	      el = el.node()
	      if(el.tagName.toLowerCase() === 'svg')
	        return el
	
	      return el.ownerSVGElement
	    }
	
	    function getNodeEl() {
	      if(node === null) {
	        node = initNode();
	        // re-add node to DOM
	        document.body.appendChild(node);
	      };
	      return d3.select(node);
	    }
	
	    // Private - gets the screen coordinates of a shape
	    //
	    // Given a shape on the screen, will return an SVGPoint for the directions
	    // n(north), s(south), e(east), w(west), ne(northeast), se(southeast), nw(northwest),
	    // sw(southwest).
	    //
	    //    +-+-+
	    //    |   |
	    //    +   +
	    //    |   |
	    //    +-+-+
	    //
	    // Returns an Object {n, s, e, w, nw, sw, ne, se}
	    function getScreenBBox() {
	      var targetel   = target || d3.event.target;
	
	      while ('undefined' === typeof targetel.getScreenCTM && 'undefined' === targetel.parentNode) {
	          targetel = targetel.parentNode;
	      }
	
	      var bbox       = {},
	          matrix     = targetel.getScreenCTM(),
	          tbbox      = targetel.getBBox(),
	          width      = tbbox.width,
	          height     = tbbox.height,
	          x          = tbbox.x,
	          y          = tbbox.y
	
	      point.x = x
	      point.y = y
	      bbox.nw = point.matrixTransform(matrix)
	      point.x += width
	      bbox.ne = point.matrixTransform(matrix)
	      point.y += height
	      bbox.se = point.matrixTransform(matrix)
	      point.x -= width
	      bbox.sw = point.matrixTransform(matrix)
	      point.y -= height / 2
	      bbox.w  = point.matrixTransform(matrix)
	      point.x += width
	      bbox.e = point.matrixTransform(matrix)
	      point.x -= width / 2
	      point.y -= height / 2
	      bbox.n = point.matrixTransform(matrix)
	      point.y += height
	      bbox.s = point.matrixTransform(matrix)
	
	      return bbox
	    }
	    
	    // Private - replace D3JS 3.X d3.functor() function
	    function functor(v) {
	    	return typeof v === "function" ? v : function() {
	        return v
	    	}
	    }
	
	    return tip
	  };
	
	}));


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "8eb582021739e87d21d29c337d8d91f5.svg";

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(19);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(3)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./axes.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./axes.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(2)
	    streamGraph = __webpack_require__(7)
	    constants = __webpack_require__(6),
	    controls = __webpack_require__(10);
	
	__webpack_require__(30);
	
	function createLandingScreen() {
	  // Main splash container
	  var splashContainer = $('<div style="display:none" class="splash-container"></div>').appendTo('body');
	
	  // Add background
	  splashContainer.append("<div class='background'></div>");
	
	  // Add initial info
	  var container = $('<div id="opening-screen" class="center-container"></div>').appendTo(splashContainer);
	  container.append("<div class='splash-title'>Music Thermometer</div>");
	  container.append("<div class='splash-subtitle'>artists' popularity over time</div>");
	  container.append("<div class='splash-subtitle-bold'>US vs. UK</div>");
	  container.append("<div class='created-by'>Created by Steven Calhoun, Qin Li, Jing Liu, and Sotaro Sugimoto</div>");
	
	  // Button to transition
	  var nextButton = $("<div class='splash-button'>Find Out More</div>").appendTo(container);
	  nextButton.on("click", function() {
	    $('#opening-screen').fadeOut(500, function() {
	      // Create next screen
	      createDescriptionScreen(splashContainer);
	    })
	  })
	  splashContainer.fadeIn(500);
	
	  // Load some data from server
	  streamGraph.initialLoad(new Date(2009,0,1), new Date(2009,11,31), 100, 1)
	}
	
	function createDescriptionScreen(splashContainer) {
	  var totalContainer = $("<div id='description-screen' style='display:none'></div>").appendTo(splashContainer);
	
	  // Add shade
	  var shade = $("<div id='shade' class='shade'></div>").appendTo(totalContainer);
	
	  // Add explanation info
	  var container = $('<div class="center-container details"></div>').appendTo(totalContainer);
	  container.append("<div class='splash-text'>"+constants.entry1+"</div>");
	  container.append("<div class='splash-text'>"+constants.entry2+"</div>");
	  container.append("<div class='splash-text'>"+constants.entry3+"</div>");
	
	  // Add button to enter vis
	  var enterButton = $("<div class='splash-button'>Enter</div>").appendTo(container);
	  enterButton.on("click", function() {
	    $('#description-screen').fadeOut(500, function() {
	      // Create vis
	      var visParams = {
	        "startDate": new Date(2009,0,1),
	        "endDate": new Date(2009,11,31),
	        "dateRange": "1",
	        "minRank": 100,
	        "search": "",
	        "songGraph": false,
	      }
	      createVisScreen(splashContainer, visParams);
	    })
	  })
	  totalContainer.fadeIn(500);
	}
	
	function createVisScreen(splashContainer, visParams) {
	  splashContainer.fadeOut(500, function(){
	    // Add title
	    var header = $("<div id='app-header' class='app-header'></div>").appendTo('body');
	    $(header).append("<div id='spinner-container' class='spinner-container'></div>");
	    $(header).append("<div id='app-title' class='title'>Music Thermometer</div>");
	
	    controls.createControls(header, visParams.startDate, visParams.endDate, visParams.minRank, visParams.dateRange, visParams.search);
	    streamGraph.initVis();
	
	    // Start with stream graph
	    streamGraph.setVisParams(visParams);
	    streamGraph.streamGraphInit();
	
	    if (visParams.songGraph) {
	      $('#stream-search').val(visParams.search);
	      streamGraph.createSongGraph(visParams.search, visParams.startDate, visParams.endDate);
	    }
	  });
	}
	
	module.exports = {
	  createLandingScreen: createLandingScreen,
	  createVisScreen: createVisScreen
	}


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var apiCalls = __webpack_require__(8),
	    $ = __webpack_require__(2)
	    streamGraph = __webpack_require__(7),
	    utilities = __webpack_require__(5),
	    introScreen = __webpack_require__(15);
	
	__webpack_require__(31);
	__webpack_require__(28);
	
	if (utilities.getParameterByName("minRank") != null) {
	  var visParams = {
	    "startDate": new Date(utilities.getParameterByName("startDate")),
	    "endDate": new Date(utilities.getParameterByName("endDate")),
	    "dateRange": utilities.getParameterByName("dateRange"),
	    "minRank": utilities.getParameterByName("minRank"),
	    "search": utilities.getParameterByName("songGraph")=='true' ? utilities.getParameterByName("search") : "",
	    "songGraph": utilities.getParameterByName("songGraph")=='true',
	  }
	  introScreen.createVisScreen($("<div></div>"), visParams);
	}
	else if (utilities.getParameterByName("skip") != null) {
	  var visParams = {
	    "startDate": new Date(2009,0,1),
	    "endDate": new Date(2009,11,31),
	    "dateRange": 1,
	    "minRank": 100,
	    "search": "",
	    "songGraph": false,
	  }
	  introScreen.createVisScreen($("<div></div>"), visParams);
	}
	else {
	  introScreen.createLandingScreen();
	}


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var d3 = __webpack_require__(4),
	    $ = __webpack_require__(2),
	    tip = __webpack_require__(12),
	    tooltipLib = __webpack_require__(11),
	    colors = __webpack_require__(9),
	    utilities = __webpack_require__(5),
	    constants = __webpack_require__(6);
	
	__webpack_require__(32);
	__webpack_require__(14);
	
	var currentVisParams;
	var currentSong = '';
	
	function songGraph(data, startDate, endDate) {
	  // Song graph size
	  var margin =  { top: 0, right: 20, bottom: 0, left: 0 },
	      width = document.body.clientWidth*0.5 - margin.right,
	      height = window.innerHeight - $('#app-header').outerHeight();
	
	  // Legend size
	  var legendHeight = 60;
	
	  // Axis size
	  var axisHeight = 30;
	
	  // Content size
	  var contentHeight = height - legendHeight - axisHeight;
	
	  // Scales
	  var x = d3.scaleTime()
	    .range([0,width-margin.right-margin.left-15])
	    .domain([startDate, endDate])
	
	  // Container
	  var parent = $("<div id='song-graph-container' class='container' />").appendTo("#vis-parent");
	
	  // Add each component
	  addLegend(legendHeight, width);
	  addContent(contentHeight, width, data, x);
	  addAxis(axisHeight, width, x);
	}
	
	function addLegend(height, width) {
	  // Container
	  var container = $("<div />").appendTo("#song-graph-container");
	  container.css("height", height);
	
	  // Song graph svg
	  var svg = d3.select(container.get(0)).append("svg")
	    .attr("id", "song-graph-legend-svg")
	    .attr("width", width)
	    .attr("height", height)
	
	  addGradientLegend('US', colors.usGradientPair, width);
	  addGradientLegend('UK', colors.ukGradientPair, width);
	}
	
	function addGradientLegend(country, color, width){
	  var textOffset = 2,
	      padding = 50,
	      barHeight = 15,
	      barWidth = (width-(2*padding))/2,
	      textPadding = 5;
	
	  var gradientScale = d3.scaleLinear()
	    .range([barWidth, 0])
	    .domain([100, 1]);
	
	  // Shift UK legends
	  var xShift = country == 'UK' ? barWidth + padding + 3 : 3;
	
	  // Add gradient defs
	  var gradient = d3.select('#song-graph-legend-svg').append("defs")
	    .append("linearGradient")
	      .attr("id", country+"-gradient")
	      .attr("x1", "0%")
	      .attr("y1", "100%")
	      .attr("x2", "100%")
	      .attr("y2", "100%")
	      .attr("spreadMethod", "pad");
	
	  gradient.append("stop")
	    .attr("offset", "0%")
	    .attr("stop-color", color[0])
	    .attr("stop-opacity", 1);
	
	  gradient.append("stop")
	    .attr("offset", "100%")
	    .attr("stop-color", color[1])
	    .attr("stop-opacity", 1);
	
	  // SVG Container
	  var svg = d3.select('#song-graph-legend-svg')
	    .append("g")
	    .attr("transform", utilities.translate(xShift,12.5))
	
	  // Label
	  svg.append("text")
	    .attr("y", textOffset)
	    .text(country+" Ranking")
	
	  // Gradient
	  svg.append("rect")
	    .attr("width", barWidth)
	    .attr("height", barHeight)
	    .style("fill", "url(#"+country+"-gradient)")
	    .attr("transform", utilities.translate(0, textOffset+textPadding))
	
	  // Axis
	  svg.append("g")
	    .attr("class", "x axis")
	    .attr("transform", utilities.translate(0, (barHeight+textOffset+textPadding)))
	    .call(d3.axisBottom(gradientScale).tickSize(0).tickValues([1, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]))
	}
	
	function addContent(height, width, data, x) {
	  // Constants for each song section
	  var rectHeight = 20,
	      sectionPaddingTop = 15,
	      labelPadding = 5,
	      textHeight = 21.5,
	      separatorHeight = 2,
	      sectionSize = 80;
	
	  // Calculate rect width
	  var thisWeek = new Date(data[0].dates[0].chart_week),
	      nextWeek = new Date(data[0].dates[0].chart_week);
	  nextWeek.setDate(nextWeek.getDate()+7);
	  var rectWidth = x(nextWeek)-x(thisWeek);
	
	  // Height of svg
	  var contentHeight = (data.length)*sectionSize
	
	  // Container
	  var container = $("<div class='song-graph-content' />").appendTo("#song-graph-container");
	  container.css("height", height);
	
	  // SVG element
	  var svg = d3.select(container.get(0))
	    .append("svg")
	      .attr("height", contentHeight)
	      .attr("width", width-15);
	
	  var content = svg.append("g")
	    .attr('class','content');
	
	  // Tooltip
	  var tooltip = tip()
	    .direction('e')
	    .attr('class', 'd3-tip')
	    .offset([0,-240-(rectWidth)])
	    .html(function(d){return tooltipLib.songGraphTooltip(d)});
	
	  // Add tooltip
	  svg.call(tooltip);
	
	  // Color scales
	  var ukColor = d3.scaleLinear()
	    .domain([1,100])
	    .interpolate(d3.interpolateRgb)
	    .range([d3.color(colors.ukGradientPair[0]), d3.color(colors.ukGradientPair[1])])
	
	  var usColor = d3.scaleLinear()
	    .domain([1,100])
	    .interpolate(d3.interpolateRgb)
	    .range([d3.color(colors.usGradientPair[0]), d3.color(colors.usGradientPair[1])])
	
	  // Song sections
	  var songs = content.selectAll("g")
	    .data(data).enter()
	      .append("g")
	        .attr("class", "song-section")
	        .attr("transform", function(d,i) {
	          return utilities.translate(0,(i*(rectHeight)*4));
	        })
	
	  // Add separator
	  songs.append("rect")
	    .attr("class", "base")
	    .attr("height", separatorHeight)
	    .attr("width", width)
	    .attr("fill", colors.accentColor)
	    .attr("transform", utilities.translate(0,sectionPaddingTop+rectHeight+labelPadding))
	
	  // Song label
	  songs.append("text")
	    .text(function(d) { return d.title; })
	    .attr("transform", utilities.translate(0, sectionPaddingTop))
	    .attr('class', 'song-text');
	
	  // Add entries
	  songs.selectAll(".bar")
	    .data(function(d) {
	      var data = d.dates;
	      data.forEach(function(e) {
	        e.album_art_link = d.album_art_link;
	        e.title = d.title;
	        e.artist = d.artist;
	        e.preview_url = d.preview_url;
	      })
	      return data;
	    }).enter()
	    .append("rect")
	      .attr("class", "bar")
	      .attr("height", rectHeight)
	      .attr("transform", utilities.translate(0,sectionPaddingTop))
	      .attr("width", rectWidth)
	      .attr("x", function(d){
	        return x(new Date(d.chart_week));
	      })
	      .attr("y", function(d){
	        if (d.country == "uk") {
	          return rectHeight+separatorHeight+labelPadding;
	        }
	        else {
	          return labelPadding;
	        }
	      })
	      .attr("fill", function(d){
	        if (d.country == "uk") {
	          return ukColor(d.rank);
	        }
	        else {
	          return usColor(d.rank);
	        }
	      })
	      .on('mouseover',  function(d) {
	        // Show tooltip
	        tooltip.show(d);
	
	        currentSong = d.title;
	        if ((d.preview_url != null)){
	          // Add track and play
	          $('#audio-box-parent').append($("<audio controls id='audio-control'></audio>"));
	          $("#audio-control").append($("<source id='audio-track' src='"+d.preview_url+"' type='audio/mpeg'>"))
	          $("#audio-control")[$("#audio-control").length-1].play();
	          audioPresent = true;
	        }
	        else {
	          audioPresent = false;
	        }
	      })
	      .on('mouseout', function() {
	        // Hide tooltip
	        currentSong = '';
	
	        setTimeout(function(){
	          if (currentSong == '') {
	            tooltip.hide();
	
	            if (audioPresent){
	              // Pause audio
	              $("#audio-control")[0].pause();
	
	              // Clear track
	              $('#audio-control').remove();
	              $('#audio-track').remove();
	            }
	          }
	        }, 10)
	      })
	
	}
	
	function addAxis(height, width, x) {
	  // Container
	  var container = $("<div />").appendTo("#song-graph-container");
	
	  // SVG element
	  var svg = d3.select(container.get(0)).append("svg")
	    .attr("width", width)
	    .attr("height", height)
	
	  // Axes
	  var xAxis = svg.append("g")
	    .attr("class", "x axis")
	    .call(d3.axisBottom(x))
	}
	
	module.exports = {
	  songGraph: songGraph
	}


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(1)();
	// imports
	
	
	// module
	exports.push([module.id, "@font-face{font-family:Genericons;src:url(" + __webpack_require__(35) + ");font-weight:400;font-style:normal}@font-face{font-family:Genericons;src:url(\"data:application/x-font-woff;charset=utf-8;base64,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\") format(\"woff\"),url(" + __webpack_require__(36) + ") format(\"truetype\"),url(" + __webpack_require__(13) + "#Genericons) format(\"svg\");font-weight:400;font-style:normal}@media screen and (-webkit-min-device-pixel-ratio:0){@font-face{font-family:Genericons;src:url(" + __webpack_require__(13) + "#Genericons) format(\"svg\")}}.genericon{font-size:16px;vertical-align:top;text-align:center;-moz-transition:color .1s ease-in 0;-webkit-transition:color .1s ease-in 0;display:inline-block;font-family:Genericons;font-style:normal;font-weight:400;font-variant:normal;line-height:1;text-decoration:inherit;text-transform:none;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;speak:none}.genericon-rotate-90{-webkit-transform:rotate(90deg);transform:rotate(90deg);filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\"}.genericon-rotate-180{-webkit-transform:rotate(180deg);transform:rotate(180deg);filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\"}.genericon-rotate-270{-webkit-transform:rotate(270deg);transform:rotate(270deg);filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\"}.genericon-flip-horizontal{-webkit-transform:scaleX(-1);transform:scaleX(-1)}.genericon-flip-vertical{-webkit-transform:scaleY(-1);transform:scaleY(-1)}.genericon-404:before{content:\"\\F423\"}.genericon-activity:before{content:\"\\F508\"}.genericon-anchor:before{content:\"\\F509\"}.genericon-aside:before{content:\"\\F101\"}.genericon-attachment:before{content:\"\\F416\"}.genericon-audio:before{content:\"\\F109\"}.genericon-bold:before{content:\"\\F471\"}.genericon-book:before{content:\"\\F444\"}.genericon-bug:before{content:\"\\F50A\"}.genericon-cart:before{content:\"\\F447\"}.genericon-category:before{content:\"\\F301\"}.genericon-chat:before{content:\"\\F108\"}.genericon-checkmark:before{content:\"\\F418\"}.genericon-close:before{content:\"\\F405\"}.genericon-close-alt:before{content:\"\\F406\"}.genericon-cloud:before{content:\"\\F426\"}.genericon-cloud-download:before{content:\"\\F440\"}.genericon-cloud-upload:before{content:\"\\F441\"}.genericon-code:before{content:\"\\F462\"}.genericon-codepen:before{content:\"\\F216\"}.genericon-cog:before{content:\"\\F445\"}.genericon-collapse:before{content:\"\\F432\"}.genericon-comment:before{content:\"\\F300\"}.genericon-day:before{content:\"\\F305\"}.genericon-digg:before{content:\"\\F221\"}.genericon-document:before{content:\"\\F443\"}.genericon-dot:before{content:\"\\F428\"}.genericon-downarrow:before{content:\"\\F502\"}.genericon-download:before{content:\"\\F50B\"}.genericon-draggable:before{content:\"\\F436\"}.genericon-dribbble:before{content:\"\\F201\"}.genericon-dropbox:before{content:\"\\F225\"}.genericon-dropdown:before{content:\"\\F433\"}.genericon-dropdown-left:before{content:\"\\F434\"}.genericon-edit:before{content:\"\\F411\"}.genericon-ellipsis:before{content:\"\\F476\"}.genericon-expand:before{content:\"\\F431\"}.genericon-external:before{content:\"\\F442\"}.genericon-facebook:before{content:\"\\F203\"}.genericon-facebook-alt:before{content:\"\\F204\"}.genericon-fastforward:before{content:\"\\F458\"}.genericon-feed:before{content:\"\\F413\"}.genericon-flag:before{content:\"\\F468\"}.genericon-flickr:before{content:\"\\F211\"}.genericon-foursquare:before{content:\"\\F226\"}.genericon-fullscreen:before{content:\"\\F474\"}.genericon-gallery:before{content:\"\\F103\"}.genericon-github:before{content:\"\\F200\"}.genericon-googleplus:before{content:\"\\F206\"}.genericon-googleplus-alt:before{content:\"\\F218\"}.genericon-handset:before{content:\"\\F50C\"}.genericon-heart:before{content:\"\\F461\"}.genericon-help:before{content:\"\\F457\"}.genericon-hide:before{content:\"\\F404\"}.genericon-hierarchy:before{content:\"\\F505\"}.genericon-home:before{content:\"\\F409\"}.genericon-image:before{content:\"\\F102\"}.genericon-info:before{content:\"\\F455\"}.genericon-instagram:before{content:\"\\F215\"}.genericon-italic:before{content:\"\\F472\"}.genericon-key:before{content:\"\\F427\"}.genericon-leftarrow:before{content:\"\\F503\"}.genericon-link:before{content:\"\\F107\"}.genericon-linkedin:before{content:\"\\F207\"}.genericon-linkedin-alt:before{content:\"\\F208\"}.genericon-location:before{content:\"\\F417\"}.genericon-lock:before{content:\"\\F470\"}.genericon-mail:before{content:\"\\F410\"}.genericon-maximize:before{content:\"\\F422\"}.genericon-menu:before{content:\"\\F419\"}.genericon-microphone:before{content:\"\\F50D\"}.genericon-minimize:before{content:\"\\F421\"}.genericon-minus:before{content:\"\\F50E\"}.genericon-month:before{content:\"\\F307\"}.genericon-move:before{content:\"\\F50F\"}.genericon-next:before{content:\"\\F429\"}.genericon-notice:before{content:\"\\F456\"}.genericon-paintbrush:before{content:\"\\F506\"}.genericon-path:before{content:\"\\F219\"}.genericon-pause:before{content:\"\\F448\"}.genericon-phone:before{content:\"\\F437\"}.genericon-picture:before{content:\"\\F473\"}.genericon-pinned:before{content:\"\\F308\"}.genericon-pinterest:before{content:\"\\F209\"}.genericon-pinterest-alt:before{content:\"\\F210\"}.genericon-play:before{content:\"\\F452\"}.genericon-plugin:before{content:\"\\F439\"}.genericon-plus:before{content:\"\\F510\"}.genericon-pocket:before{content:\"\\F224\"}.genericon-polldaddy:before{content:\"\\F217\"}.genericon-portfolio:before{content:\"\\F460\"}.genericon-previous:before{content:\"\\F430\"}.genericon-print:before{content:\"\\F469\"}.genericon-quote:before{content:\"\\F106\"}.genericon-rating-empty:before{content:\"\\F511\"}.genericon-rating-full:before{content:\"\\F512\"}.genericon-rating-half:before{content:\"\\F513\"}.genericon-reddit:before{content:\"\\F222\"}.genericon-refresh:before{content:\"\\F420\"}.genericon-reply:before{content:\"\\F412\"}.genericon-reply-alt:before{content:\"\\F466\"}.genericon-reply-single:before{content:\"\\F467\"}.genericon-rewind:before{content:\"\\F459\"}.genericon-rightarrow:before{content:\"\\F501\"}.genericon-search:before{content:\"\\F400\"}.genericon-send-to-phone:before{content:\"\\F438\"}.genericon-send-to-tablet:before{content:\"\\F454\"}.genericon-share:before{content:\"\\F415\"}.genericon-show:before{content:\"\\F403\"}.genericon-shuffle:before{content:\"\\F514\"}.genericon-sitemap:before{content:\"\\F507\"}.genericon-skip-ahead:before{content:\"\\F451\"}.genericon-skip-back:before{content:\"\\F450\"}.genericon-skype:before{content:\"\\F220\"}.genericon-spam:before{content:\"\\F424\"}.genericon-spotify:before{content:\"\\F515\"}.genericon-standard:before{content:\"\\F100\"}.genericon-star:before{content:\"\\F408\"}.genericon-status:before{content:\"\\F105\"}.genericon-stop:before{content:\"\\F449\"}.genericon-stumbleupon:before{content:\"\\F223\"}.genericon-subscribe:before{content:\"\\F463\"}.genericon-subscribed:before{content:\"\\F465\"}.genericon-summary:before{content:\"\\F425\"}.genericon-tablet:before{content:\"\\F453\"}.genericon-tag:before{content:\"\\F302\"}.genericon-time:before{content:\"\\F303\"}.genericon-top:before{content:\"\\F435\"}.genericon-trash:before{content:\"\\F407\"}.genericon-tumblr:before{content:\"\\F214\"}.genericon-twitch:before{content:\"\\F516\"}.genericon-twitter:before{content:\"\\F202\"}.genericon-unapprove:before{content:\"\\F446\"}.genericon-unsubscribe:before{content:\"\\F464\"}.genericon-unzoom:before{content:\"\\F401\"}.genericon-uparrow:before{content:\"\\F500\"}.genericon-user:before{content:\"\\F304\"}.genericon-video:before{content:\"\\F104\"}.genericon-videocamera:before{content:\"\\F517\"}.genericon-vimeo:before{content:\"\\F212\"}.genericon-warning:before{content:\"\\F414\"}.genericon-website:before{content:\"\\F475\"}.genericon-week:before{content:\"\\F306\"}.genericon-wordpress:before{content:\"\\F205\"}.genericon-xpost:before{content:\"\\F504\"}.genericon-youtube:before{content:\"\\F213\"}.genericon-zoom:before{content:\"\\F402\"}", ""]);
	
	// exports


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(1)();
	// imports
	exports.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Lobster);", ""]);
	exports.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Roboto);", ""]);
	
	// module
	exports.push([module.id, ".genericon{color:#39b54a}.genericon-downarrow:before{font:normal 16px/1 Genericons;-webkit-font-smoothing:antialiased}.genericon-downarrow:before,.genericon-search:before{display:inline-block;-moz-osx-font-smoothing:grayscale}.genericon-search:before{font:700 25px/1 Genericons;-webkit-font-smoothing:antialiased}.genericon-close-alt:before{font:normal 25px/1 Genericons;display:inline-block;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;cursor:pointer}.axis .domain,.axis .tick line{stroke:#e0e0e0}.transparent .domain{fill:none;stroke:none}.axis text,.tick text{fill:#e0e0e0;stroke:none}.tick text{font-size:10.8px}.x-axis-tip-bar .tick text{font-size:10.8px;font-weight:700;stroke:none;fill:#282828}.x-axis-tip-bar path{fill:none;stroke:none}", ""]);
	
	// exports


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(1)();
	// imports
	exports.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Lobster);", ""]);
	exports.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Roboto);", ""]);
	
	// module
	exports.push([module.id, ".genericon{color:#39b54a}.genericon-downarrow:before{font:normal 16px/1 Genericons;-webkit-font-smoothing:antialiased}.genericon-downarrow:before,.genericon-search:before{display:inline-block;-moz-osx-font-smoothing:grayscale}.genericon-search:before{font:700 25px/1 Genericons;-webkit-font-smoothing:antialiased}.genericon-close-alt:before{font:normal 25px/1 Genericons;display:inline-block;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;cursor:pointer}.select-box{display:inline-block}.select-container{position:relative;background-color:#282828}select{-webkit-appearance:none;-moz-appearance:none;outline:none;width:150px;height:24px;border-radius:0;color:#e0e0e0;border:none;border-bottom:1px solid #39b54a;font-size:18px;background-color:#282828}select+.genericon{position:absolute;right:10px;top:40%;pointer-events:none}.spotify-player{z-index:-100;float:left;position:fixed;top:0;left:0}.audio-box-parent{display:none}.controls{padding:15px 0;max-width:100%;text-align:center}.control-piece{padding:0 10px;display:inline-block;vertical-align:top}.button-parent{height:100%;width:auto}.button{cursor:pointer;height:50px;width:150px;border-radius:2px;float:right;background-color:#39b54a}.button-text{text-align:center;vertical-align:middle;line-height:50px;font-size:18px}.number-input-parent{text-align:left}.number-input-label{text-align:left;font-size:18px;font-weight:lighter}.number-input-box{border:none;border-bottom:1px solid #39b54a;font-size:18px}.number-input-box:focus{outline:none}.search-parent{margin:0 auto;width:50%;height:50px;border-bottom:1px solid #39b54a;text-align:center}.search-icon{float:left;width:10%;height:50px;padding-top:10px}.search-icon .genericon{float:left}.search-clear{float:left;width:10%;height:50px;padding-top:10px}.search-clear .genericon{float:right}.search-input-box{float:left;width:80%;height:50px;font-size:32.4px;padding:0;border:none;text-align:center}.search-input-box:focus{outline:none}.selection{fill:#39b54a;fill-opacity:.8;stroke:none}.handle{fill:none;display:none}.slider-axis line,.slider-axis path{stroke:#e0e0e0}.slider-axis text{stroke:none;fill:#e0e0e0}g.brush>.resize{display:none}.date-label{font-size:10.8px}", ""]);
	
	// exports


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(1)();
	// imports
	exports.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Lobster);", ""]);
	exports.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Roboto);", ""]);
	
	// module
	exports.push([module.id, ".genericon{color:#39b54a}.genericon-downarrow:before{font:normal 16px/1 Genericons;-webkit-font-smoothing:antialiased}.genericon-downarrow:before,.genericon-search:before{display:inline-block;-moz-osx-font-smoothing:grayscale}.genericon-search:before{font:700 25px/1 Genericons;-webkit-font-smoothing:antialiased}.genericon-close-alt:before{font:normal 25px/1 Genericons;display:inline-block;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;cursor:pointer}.background{background-image:url(" + __webpack_require__(26) + ");background-repeat:round;z-index:-1;right:0}.background,.splash-container{width:100%;height:100%;position:fixed;top:0}.splash-container{left:0;z-index:150}.center-container{width:800px;position:absolute;top:50%;left:50%;transform:translate(-50%,-25%);text-align:center;z-index:100}.details{transform:translate(-50%,-40%)}.splash-title{font-family:Lobster;font-size:63px;color:#fff}.splash-subtitle{color:#e0e0e0;font-size:25.2px;padding-top:10px}.splash-subtitle-bold{padding-top:10px;color:#e0e0e0;font-size:27px;font-weight:900}.splash-button{display:inline-block;border:1px solid #39b54a;padding:8px;font-weight:100;cursor:pointer;width:40%;margin:0 auto;margin-top:40px}.splash-button,.splash-text{color:#e0e0e0;font-size:25.2px}.splash-text{padding-bottom:30px;text-align:left;line-height:40px}.shade{position:absolute;top:0;right:0;width:100%;height:100%;z-index:10;background-color:#282828;opacity:.7}.created-by{padding-top:20px;font-size:20px;font-style:italic}", ""]);
	
	// exports


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(1)();
	// imports
	exports.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Lobster);", ""]);
	exports.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Roboto);", ""]);
	
	// module
	exports.push([module.id, ".genericon{color:#39b54a}.genericon-downarrow:before{font:normal 16px/1 Genericons;-webkit-font-smoothing:antialiased}.genericon-downarrow:before,.genericon-search:before{display:inline-block;-moz-osx-font-smoothing:grayscale}.genericon-search:before{font:700 25px/1 Genericons;-webkit-font-smoothing:antialiased}.genericon-close-alt:before{font:normal 25px/1 Genericons;display:inline-block;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;cursor:pointer}html{width:100%;height:100%;padding:0;margin:0;font-family:Roboto;font-size:18px}html,input{background-color:#282828;color:#e0e0e0}body{padding:0;margin:0}text{stroke:none;fill:#e0e0e0;font-size:18px}.app-header{font-weight:700;text-align:center}.title{font-family:Lobster;display:inline-block;margin:0 auto;padding:10px 0;font-size:36px;letter-spacing:4px}.container,.vis-parent{display:inline-block;vertical-align:top}", ""]);
	
	// exports


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(1)();
	// imports
	exports.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Lobster);", ""]);
	exports.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Roboto);", ""]);
	
	// module
	exports.push([module.id, ".genericon{color:#39b54a}.genericon-downarrow:before{font:normal 16px/1 Genericons;-webkit-font-smoothing:antialiased}.genericon-downarrow:before,.genericon-search:before{display:inline-block;-moz-osx-font-smoothing:grayscale}.genericon-search:before{font:700 25px/1 Genericons;-webkit-font-smoothing:antialiased}.genericon-close-alt:before{font:normal 25px/1 Genericons;display:inline-block;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;cursor:pointer}html{width:100%;height:100%;padding:0;margin:0;font-family:Roboto;font-size:18px}html,input{background-color:#282828;color:#e0e0e0}body{padding:0;margin:0}text{stroke:none;fill:#e0e0e0;font-size:18px}.app-header{font-weight:700;text-align:center}.title{font-family:Lobster;display:inline-block;margin:0 auto;padding:10px 0;font-size:36px;letter-spacing:4px}.container,.vis-parent{display:inline-block;vertical-align:top}.song-graph-content{overflow:scroll}.song-graph-exit{cursor:pointer}.song-section{font-style:italic}", ""]);
	
	// exports


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(1)();
	// imports
	exports.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Lobster);", ""]);
	exports.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Roboto);", ""]);
	
	// module
	exports.push([module.id, "html{width:100%;height:100%;padding:0;margin:0;font-family:Roboto;font-size:18px}html,input{background-color:#282828;color:#e0e0e0}body{padding:0;margin:0}text{stroke:none;fill:#e0e0e0;font-size:18px}.app-header{font-weight:700;text-align:center}.title{font-family:Lobster;display:inline-block;margin:0 auto;padding:10px 0;font-size:36px;letter-spacing:4px}.container,.vis-parent{display:inline-block;vertical-align:top}.genericon{color:#39b54a}.genericon-downarrow:before{font:normal 16px/1 Genericons;-webkit-font-smoothing:antialiased}.genericon-downarrow:before,.genericon-search:before{display:inline-block;-moz-osx-font-smoothing:grayscale}.genericon-search:before{font:700 25px/1 Genericons;-webkit-font-smoothing:antialiased}.genericon-close-alt:before{font:normal 25px/1 Genericons;display:inline-block;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;cursor:pointer}svg{display:block}.stream-label{font-size:36px;fill:#e0e0e0}.spinner-container{position:fixed;top:40px;left:40px;z-index:10}", ""]);
	
	// exports


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(1)();
	// imports
	exports.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Lobster);", ""]);
	exports.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Roboto);", ""]);
	
	// module
	exports.push([module.id, ".genericon{color:#39b54a}.genericon-downarrow:before{font:normal 16px/1 Genericons;-webkit-font-smoothing:antialiased}.genericon-downarrow:before,.genericon-search:before{display:inline-block;-moz-osx-font-smoothing:grayscale}.genericon-search:before{font:700 25px/1 Genericons;-webkit-font-smoothing:antialiased}.genericon-close-alt:before{font:normal 25px/1 Genericons;display:inline-block;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;cursor:pointer}.tooltip-artist{font-size:32.4px;font-weight:lighter}.tooltip-time{width:100%}.tooltip-song-name,.tooltip-time{text-align:center;font-style:italic}.tooltip-song-name{font-size:18px}.tooltip-by-artist{font-size:18px;font-weight:lighter}.song-tooltip-container{text-align:center;margin:0 auto}.tooltip-rank{font-size:39.6px;text-align:center;padding-bottom:15px}.tooltip-album-art{margin:0 auto;width:180px;height:180px;padding-bottom:20px}.tooltip-album-art img{width:180px;height:180px;border:1px solid #282828}.tooltip-count-graph{width:100%}.tooltip-separator{height:1px;width:100%;background-color:#282828;margin:1px 0 5px}.tooltip-piece{padding:5px 0}.bar-text-label{font-size:18px;fill:#282828}.d3-tip{line-height:1;padding:12px 12px 0;background:#e0e0e0;color:#282828;border-radius:2px;box-shadow:1px 1px 1px #282828;width:225px}", ""]);
	
	// exports


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "c733ea5a02ad6799fcb663b3024b02b1.jpg";

/***/ },
/* 27 */
/***/ function(module, exports) {

	//fgnass.github.com/spin.js#v1.2.5
	/**
	 * Copyright (c) 2011 Felix Gnass [fgnass at neteye dot de]
	 * Licensed under the MIT license
	 */
	
	var prefixes = ['webkit', 'Moz', 'ms', 'O']; /* Vendor prefixes */
	var animations = {}; /* Animation rules keyed by their name */
	var useCssAnimations;
	
	/**
	 * Utility function to create elements. If no tag name is given,
	 * a DIV is created. Optionally properties can be passed.
	 */
	function createEl(tag, prop) {
	  var el = document.createElement(tag || 'div');
	  var n;
	
	  for(n in prop) {
	    el[n] = prop[n];
	  }
	  return el;
	}
	
	/**
	 * Appends children and returns the parent.
	 */
	function ins(parent /* child1, child2, ...*/) {
	  for (var i=1, n=arguments.length; i<n; i++) {
	    parent.appendChild(arguments[i]);
	  }
	  return parent;
	}
	
	/**
	 * Insert a new stylesheet to hold the @keyframe or VML rules.
	 */
	var sheet = function() {
	  var el = createEl('style');
	  ins(document.getElementsByTagName('head')[0], el);
	  return el.sheet || el.styleSheet;
	}();
	
	/**
	 * Creates an opacity keyframe animation rule and returns its name.
	 * Since most mobile Webkits have timing issues with animation-delay,
	 * we create separate rules for each line/segment.
	 */
	function addAnimation(alpha, trail, i, lines) {
	  var name = ['opacity', trail, ~~(alpha*100), i, lines].join('-');
	  var start = 0.01 + i/lines*100;
	  var z = Math.max(1-(1-alpha)/trail*(100-start) , alpha);
	  var prefix = useCssAnimations.substring(0, useCssAnimations.indexOf('Animation')).toLowerCase();
	  var pre = prefix && '-'+prefix+'-' || '';
	
	  if (!animations[name]) {
	    sheet.insertRule(
	      '@' + pre + 'keyframes ' + name + '{' +
	      '0%{opacity:'+z+'}' +
	      start + '%{opacity:'+ alpha + '}' +
	      (start+0.01) + '%{opacity:1}' +
	      (start+trail)%100 + '%{opacity:'+ alpha + '}' +
	      '100%{opacity:'+ z + '}' +
	      '}', 0);
	    animations[name] = 1;
	  }
	  return name;
	}
	
	/**
	 * Tries various vendor prefixes and returns the first supported property.
	 **/
	function vendor(el, prop) {
	  var s = el.style;
	  var pp;
	  var i;
	
	  if(s[prop] !== undefined) return prop;
	  prop = prop.charAt(0).toUpperCase() + prop.slice(1);
	  for(i=0; i<prefixes.length; i++) {
	    pp = prefixes[i]+prop;
	    if(s[pp] !== undefined) return pp;
	  }
	}
	
	/**
	 * Sets multiple style properties at once.
	 */
	function css(el, prop) {
	  for (var n in prop) {
	    el.style[vendor(el, n)||n] = prop[n];
	  }
	  return el;
	}
	
	/**
	 * Fills in default values.
	 */
	function merge(obj) {
	  for (var i=1; i < arguments.length; i++) {
	    var def = arguments[i];
	    for (var n in def) {
	      if (obj[n] === undefined) obj[n] = def[n];
	    }
	  }
	  return obj;
	}
	
	/**
	 * Returns the absolute page-offset of the given element.
	 */
	function pos(el) {
	  var o = {x:el.offsetLeft, y:el.offsetTop};
	  while((el = el.offsetParent)) {
	    o.x+=el.offsetLeft;
	    o.y+=el.offsetTop;
	  }
	  return o;
	}
	
	var defaults = {
	  lines: 12,            // The number of lines to draw
	  length: 7,            // The length of each line
	  width: 5,             // The line thickness
	  radius: 10,           // The radius of the inner circle
	  rotate: 0,            // rotation offset
	  color: '#000',        // #rgb or #rrggbb
	  speed: 1,             // Rounds per second
	  trail: 100,           // Afterglow percentage
	  opacity: 1/4,         // Opacity of the lines
	  fps: 20,              // Frames per second when using setTimeout()
	  zIndex: 2e9,          // Use a high z-index by default
	  className: 'spinner', // CSS class to assign to the element
	  top: 'auto',          // center vertically
	  left: 'auto'          // center horizontally
	};
	
	/** The constructor */
	var Spinner = function Spinner(o) {
	  if (!this.spin) return new Spinner(o);
	  this.opts = merge(o || {}, Spinner.defaults, defaults);
	};
	
	Spinner.defaults = {};
	merge(Spinner.prototype, {
	  spin: function(target) {
	    this.stop();
	    var self = this;
	    var o = self.opts;
	    var el = self.el = css(createEl(0, {className: o.className}), {position: 'relative', zIndex: o.zIndex});
	    var mid = o.radius+o.length+o.width;
	    var ep; // element position
	    var tp; // target position
	
	    if (target) {
	      target.insertBefore(el, target.firstChild||null);
	      tp = pos(target);
	      ep = pos(el);
	      css(el, {
	        left: (o.left == 'auto' ? tp.x-ep.x + (target.offsetWidth >> 1) : o.left+mid) + 'px',
	        top: (o.top == 'auto' ? tp.y-ep.y + (target.offsetHeight >> 1) : o.top+mid)  + 'px'
	      });
	    }
	
	    el.setAttribute('aria-role', 'progressbar');
	    self.lines(el, self.opts);
	
	    if (!useCssAnimations) {
	      // No CSS animation support, use setTimeout() instead
	      var i = 0;
	      var fps = o.fps;
	      var f = fps/o.speed;
	      var ostep = (1-o.opacity)/(f*o.trail / 100);
	      var astep = f/o.lines;
	
	      !function anim() {
	        i++;
	        for (var s=o.lines; s; s--) {
	          var alpha = Math.max(1-(i+s*astep)%f * ostep, o.opacity);
	          self.opacity(el, o.lines-s, alpha, o);
	        }
	        self.timeout = self.el && setTimeout(anim, ~~(1000/fps));
	      }();
	    }
	    return self;
	  },
	  stop: function() {
	    var el = this.el;
	    if (el) {
	      clearTimeout(this.timeout);
	      if (el.parentNode) el.parentNode.removeChild(el);
	      this.el = undefined;
	    }
	    return this;
	  },
	  lines: function(el, o) {
	    var i = 0;
	    var seg;
	
	    function fill(color, shadow) {
	      return css(createEl(), {
	        position: 'absolute',
	        width: (o.length+o.width) + 'px',
	        height: o.width + 'px',
	        background: color,
	        boxShadow: shadow,
	        transformOrigin: 'left',
	        transform: 'rotate(' + ~~(360/o.lines*i+o.rotate) + 'deg) translate(' + o.radius+'px' +',0)',
	        borderRadius: (o.width>>1) + 'px'
	      });
	    }
	    for (; i < o.lines; i++) {
	      seg = css(createEl(), {
	        position: 'absolute',
	        top: 1+~(o.width/2) + 'px',
	        transform: o.hwaccel ? 'translate3d(0,0,0)' : '',
	        opacity: o.opacity,
	        animation: useCssAnimations && addAnimation(o.opacity, o.trail, i, o.lines) + ' ' + 1/o.speed + 's linear infinite'
	      });
	      if (o.shadow) ins(seg, css(fill('#000', '0 0 4px ' + '#000'), {top: 2+'px'}));
	      ins(el, ins(seg, fill(o.color, '0 0 1px rgba(0,0,0,.1)')));
	    }
	    return el;
	  },
	  opacity: function(el, i, val) {
	    if (i < el.childNodes.length) el.childNodes[i].style.opacity = val;
	  }
	});
	
	/////////////////////////////////////////////////////////////////////////
	// VML rendering for IE
	/////////////////////////////////////////////////////////////////////////
	
	/**
	 * Check and init VML support
	 */
	!function() {
	
	  function vml(tag, attr) {
	    return createEl('<' + tag + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', attr);
	  }
	
	  var s = css(createEl('group'), {behavior: 'url(#default#VML)'});
	
	  if (!vendor(s, 'transform') && s.adj) {
	
	    // VML support detected. Insert CSS rule ...
	    sheet.addRule('.spin-vml', 'behavior:url(#default#VML)');
	
	    Spinner.prototype.lines = function(el, o) {
	      var r = o.length+o.width;
	      var s = 2*r;
	
	      function grp() {
	        return css(vml('group', {coordsize: s +' '+s, coordorigin: -r +' '+-r}), {width: s, height: s});
	      }
	
	      var margin = -(o.width+o.length)*2+'px';
	      var g = css(grp(), {position: 'absolute', top: margin, left: margin});
	
	      var i;
	
	      function seg(i, dx, filter) {
	        ins(g,
	          ins(css(grp(), {rotation: 360 / o.lines * i + 'deg', left: ~~dx}),
	            ins(css(vml('roundrect', {arcsize: 1}), {
	                width: r,
	                height: o.width,
	                left: o.radius,
	                top: -o.width>>1,
	                filter: filter
	              }),
	              vml('fill', {color: o.color, opacity: o.opacity}),
	              vml('stroke', {opacity: 0}) // transparent stroke to fix color bleeding upon opacity change
	            )
	          )
	        );
	      }
	
	      if (o.shadow) {
	        for (i = 1; i <= o.lines; i++) {
	          seg(i, -2, 'progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)');
	        }
	      }
	      for (i = 1; i <= o.lines; i++) seg(i);
	      return ins(el, g);
	    };
	    Spinner.prototype.opacity = function(el, i, val, o) {
	      var c = el.firstChild;
	      o = o.shadow && o.lines || 0;
	      if (c && i+o < c.childNodes.length) {
	        c = c.childNodes[i+o]; c = c && c.firstChild; c = c && c.firstChild;
	        if (c) c.opacity = val;
	      }
	    };
	  }
	  else {
	    useCssAnimations = vendor(s, 'animation');
	  }
	}();
	
	module.exports = Spinner;


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(18);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(3)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./genericons.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./genericons.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(20);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(3)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./controls.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./controls.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(21);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(3)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./introScreen.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./introScreen.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(22);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(3)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./main.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./main.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(23);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(3)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./songGraph.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./songGraph.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(24);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(3)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./streamGraph.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./streamGraph.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(25);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(3)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./tooltip.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./tooltip.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = "data:application/vnd.ms-fontobject;base64,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MDgHdW5pRjQwOQd1bmlGNDEwB3VuaUY0MTEHdW5pRjQxMgd1bmlGNDEzB3VuaUY0MTQHdW5pRjQxNQd1bmlGNDE2B3VuaUY0MTcHdW5pRjQxOAd1bmlGNDE5B3VuaUY0MjAHdW5pRjQyMQd1bmlGNDIyB3VuaUY0MjMHdW5pRjQyNAd1bmlGNDI1B3VuaUY0MjYHdW5pRjQyNwd1bmlGNDI4B3VuaUY0MjkHdW5pRjQzMAd1bmlGNDMxB3VuaUY0MzIHdW5pRjQzMwd1bmlGNDM0B3VuaUY0MzUHdW5pRjQzNgd1bmlGNDM3B3VuaUY0MzgHdW5pRjQzOQd1bmlGNDQwB3VuaUY0NDEHdW5pRjQ0Mgd1bmlGNDQzB3VuaUY0NDQHdW5pRjQ0NQd1bmlGNDQ2B3VuaUY0NDcHdW5pRjQ0OAd1bmlGNDQ5B3VuaUY0NTAHdW5pRjQ1MQd1bmlGNDUyB3VuaUY0NTMHdW5pRjQ1NAd1bmlGNDU1B3VuaUY0NTYHdW5pRjQ1Nwd1bmlGNDU4B3VuaUY0NTkHdW5pRjQ2MAd1bmlGNDYxB3VuaUY0NjIHdW5pRjQ2Mwd1bmlGNDY0B3VuaUY0NjUHdW5pRjQ2Ngd1bmlGNDY3B3VuaUY0NjgHdW5pRjQ2OQd1bmlGNDcwB3VuaUY0NzEHdW5pRjQ3Mgd1bmlGNDczB3VuaUY0NzQHdW5pRjQ3NQd1bmlGNDc2B3VuaUY1MDAHdW5pRjUwMQd1bmlGNTAyB3VuaUY1MDMHdW5pRjUwNAd1bmlGNTA1B3VuaUY1MDYHdW5pRjUwNwd1bmlGNTA4B3VuaUY1MDkHdW5pRjUwQQd1bmlGNTBCB3VuaUY1MEMHdW5pRjUwRAd1bmlGNTBFB3VuaUY1MEYHdW5pRjUxMAd1bmlGNTExB3VuaUY1MTIHdW5pRjUxMwd1bmlGNTE0B3VuaUY1MTUHdW5pRjUxNgd1bmlGNTE3AAAAAf//AAIAAAABAAAAANGoxM0AAAAA0iF6rQAAAADSIXqt"

/***/ },
/* 36 */
/***/ function(module, exports) {

	module.exports = "data:application/x-font-ttf;base64,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AQsBDAENAQ4BDwEQAREBEgETARQBFQEWARcBGAEZARoBGwEcAR0BHgEfASABIQEiASMBJAElASYBJwEoASkBKgErASwBLQEuAS8BMAExATIBMwE0ATUBNgE3ATgBOQE6ATsBPAE9AT4BPwFAAUEBQgFDAUQBRQFGAUcBSAFJAUoBSwFMAU0BTgFPAVABUQFSAVMBVAFVAVYBVwFYAVkBWgFbAVwBXQFeAV8BYAFhAWIBYwFkAWUBZgFnAWgBaQFqAWsBbAFtAW4BbwFwAXEBcgFzAXQBdQF2AXcBeAF5AXoBewF8AX0BfgF/AYABgQGCAYMBhAGFAYYBhwGIAYkBigGLAYwBjQGOAY8BkAGRAZIBkwGUB3VuaUYxMDAHdW5pRjEwMQd1bmlGMTAyB3VuaUYxMDMHdW5pRjEwNAd1bmlGMTA1B3VuaUYxMDYHdW5pRjEwNwd1bmlGMTA4B3VuaUYxMDkHdW5pRjIwMAd1bmlGMjAxB3VuaUYyMDIHdW5pRjIwMwd1bmlGMjA0B3VuaUYyMDUHdW5pRjIwNgd1bmlGMjA3B3VuaUYyMDgHdW5pRjIwOQd1bmlGMjEwB3VuaUYyMTEHdW5pRjIxMgd1bmlGMjEzB3VuaUYyMTQHdW5pRjIxNQd1bmlGMjE2B3VuaUYyMTcHdW5pRjIxOAd1bmlGMjE5B3VuaUYyMjAHdW5pRjIyMQd1bmlGMjIyB3VuaUYyMjMHdW5pRjIyNAd1bmlGMjI1B3VuaUYyMjYHdW5pRjMwMAd1bmlGMzAxB3VuaUYzMDIHdW5pRjMwMwd1bmlGMzA0B3VuaUYzMDUHdW5pRjMwNgd1bmlGMzA3B3VuaUYzMDgHdW5pRjQwMAd1bmlGNDAxB3VuaUY0MDIHdW5pRjQwMwd1bmlGNDA0B3VuaUY0MDUHdW5pRjQwNgd1bmlGNDA3B3VuaUY0MDgHdW5pRjQwOQd1bmlGNDEwB3VuaUY0MTEHdW5pRjQxMgd1bmlGNDEzB3VuaUY0MTQHdW5pRjQxNQd1bmlGNDE2B3VuaUY0MTcHdW5pRjQxOAd1bmlGNDE5B3VuaUY0MjAHdW5pRjQyMQd1bmlGNDIyB3VuaUY0MjMHdW5pRjQyNAd1bmlGNDI1B3VuaUY0MjYHdW5pRjQyNwd1bmlGNDI4B3VuaUY0MjkHdW5pRjQzMAd1bmlGNDMxB3VuaUY0MzIHdW5pRjQzMwd1bmlGNDM0B3VuaUY0MzUHdW5pRjQzNgd1bmlGNDM3B3VuaUY0MzgHdW5pRjQzOQd1bmlGNDQwB3VuaUY0NDEHdW5pRjQ0Mgd1bmlGNDQzB3VuaUY0NDQHdW5pRjQ0NQd1bmlGNDQ2B3VuaUY0NDcHdW5pRjQ0OAd1bmlGNDQ5B3VuaUY0NTAHdW5pRjQ1MQd1bmlGNDUyB3VuaUY0NTMHdW5pRjQ1NAd1bmlGNDU1B3VuaUY0NTYHdW5pRjQ1Nwd1bmlGNDU4B3VuaUY0NTkHdW5pRjQ2MAd1bmlGNDYxB3VuaUY0NjIHdW5pRjQ2Mwd1bmlGNDY0B3VuaUY0NjUHdW5pRjQ2Ngd1bmlGNDY3B3VuaUY0NjgHdW5pRjQ2OQd1bmlGNDcwB3VuaUY0NzEHdW5pRjQ3Mgd1bmlGNDczB3VuaUY0NzQHdW5pRjQ3NQd1bmlGNDc2B3VuaUY1MDAHdW5pRjUwMQd1bmlGNTAyB3VuaUY1MDMHdW5pRjUwNAd1bmlGNTA1B3VuaUY1MDYHdW5pRjUwNwd1bmlGNTA4B3VuaUY1MDkHdW5pRjUwQQd1bmlGNTBCB3VuaUY1MEMHdW5pRjUwRAd1bmlGNTBFB3VuaUY1MEYHdW5pRjUxMAd1bmlGNTExB3VuaUY1MTIHdW5pRjUxMwd1bmlGNTE0B3VuaUY1MTUHdW5pRjUxNgd1bmlGNTE3AAAAAf//AAIAAAABAAAAANGoxM0AAAAA0iF6rQAAAADSIXqt"

/***/ }
/******/ ]);
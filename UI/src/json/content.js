export const data = {
	"es6": [
	  {
		"menu": "New ES6 Syntax",
		"sub_menu": [
		  {
			"sub_menu_name": "let, const and Block Scoping",
			"let_const": [
			  {
				"question": "'use strict'; console.log(productId); var productId = 12;",
				"answer": [
				  "undefined"
				]
			  },
			  {
				"question": "'use strict';console.log(productId);let productId = 12;",
				"answer": [
				  "ReferenceError: productId is not defined"
				]
			  },
			  {
				"question": "'use strict';let productId = 12;console.log(productId);",
				"answer": [
				  "12"
				]
			  },
			  {
				"question": "'use strict';let productId;console.log(productId);",
				"answer": [
				  "undefined"
				]
			  },
			  {
				"question": "'use strict';let productId = 12;{let productId = 2000;}console.log(productId);",
				"answer": [
				  "12"
				]
			  },
			  {
				"question": "'use strict';{let productId=2000;}console.log(productId);",
				"answer": [
				  "Reference Error: productId is not defined"
				]
			  },
			  {
				"question": "'use strict';function updateProductId() {productId = 12;}let productId = null;updateProductId();console.log(productId);",
				"answer": [
				  "12"
				]
			  },
			  {
				"question": "'use strict';let productId = 42;for(let productId = 0; productId < 10; productId++){}console.log(productId);",
				"answer": [
				  "42"
				]
			  },
			  {
				"question": "'use strict';let updateFunctions = [];for (var i = 0; i < 2; i++) {updateFunctions.push(function () { return i; });}console.log(updateFunctions[0]());",
				"answer": [
				  "2"
				]
			  },
			  {
				"question": "'use strict';let updateFunctions = [];for (let i = 0; i < 2; i++) {updateFunctions.push(function () { return i; });}console.log(updateFunctions[0]());",
				"answer": [
				  "0"
				]
			  },
			  {
				"question": "'use strict';const MARKUP_PCT = 100;console.log(MARKUP_PCT);",
				"answer": [
				  "100"
				]
			  },
			  {
				"question": "'use strict';const MARKUP_PCT;console.log(MARKUP_PCT);",
				"answer": [
				  "SyntaxError: Unexpected token;"
				]
			  },
			  {
				"question": "'use strict';const MARKUP_PCT = 100;MARKUP_PCT = 10;console.log(MARKUP_PCT);",
				"answer": [
				  "TypeError: Assignment to constant variable."
				]
			  }
			]
		  },
		  {
			"sub_menu_name": "Arrow Functions",
			"arrow_func": [
			  {
				"question": "'use strict';var getPrice = () => 5.99;console.log(typeof getPrice);",
				"answer": [
				  "function",12
				]
			  },{
				"question": "'use strict';var getPrice = () => 5.99;console.log(getPrice());",
				"answer": [
				  "5.99"
				]
			  },{
				"question": "'use strict';var getPrice = count => count * 4.00;console.log(getPrice(2));",
				"answer": [
				  "8"
				]
			  },{
				"question": "'use strict';var getPrice = (count, tax) => count * 4.00 * (1 + tax);console.log(getPrice(2, .07));",
				"answer": [
				  "8.56"
				]
			  },{
				"question": "'use strict';var getPrice = (count, tax) => {var price = count * 4.00;price *= (1 + tax);return price;}console.log(getPrice(2, .07));",
				"answer": [
				  "8.56"
				]
			  },{
				"question": "'use strict';document.addEventListener('click', function () {console.log(this);});",
				"answer": [
				  "#document"
				]
			  },{
				"question": "'use strict';document.addEventListener('click', () => console.log(this));",
				"answer": [
				  "Window {...}"
				]
			  },{
				"question": "'use strict';var invoice = {number: 123,process: function () {console.log(this);}};invoice.process();",
				"answer": [
				  "Object { number: 123 }"
				]
			  },{
				"question": "'use strict';var invoice = {number: 123,process: () => console.log(this)};invoice.process();",
				"answer": [
				  "Window { ... }"
				]
			  },{
				"question": "'use strict';var invoice = {number: 123,process: function () {return () => console.log(this.number);}};invoice.process()();",
				"answer": [
				  "123"
				]
			  },{
				"question": "'use strict';var invoice = {number: 123,process: function () {return () => console.log(this.number);}};var newInvoice = {number: 456};invoice.process().bind(newInvoice)();",
				"answer": [
				  "123"
				]
			  },{
				"question": "'use strict';var invoice = {number: 123,process: function () {return () => console.log(this.number);}};var newInvoice = {number: 456};invoice.process().call(newInvoice);",
				"answer": [
				  "123"
				]
			  },{
				"question": "'use strict';var getPrice = ()=> 5.99;console.log(typeof getPrice);",
				"answer": [
				  "SyntaxError: unexpected token =>"
				]
			  },{
				"question": "'use strict';var getPrice = () => 5.99;console.log(getPrice.hasOwnProperty('prototype'));",
				"answer": [
				  "false"
				]
			  }
			]
		  },
		  {
			"sub_menu_name": "Default Function Parameters",
			"def_func": [
			  {
				"question": "'use strict';var getProduct = function(productId = 1000) {console.log(productId);};getProduct();",
				"answer": [
				  "1000"
				]
			  },{
				"question": "'use strict';var getProduct = function(productId = 1000, type = 'software') {console.log(productId + ', ' + type);};getProduct(undefined, 'hardware');",
				"answer": [
				  "1000, hardware"
				]
			  },{
				"question": "'use strict';var getTotal = function(price, tax = price * 0.07 ) {console.log(price + tax);};getTotal(5.00);",
				"answer": [
				  "5.35"
				]
			  },{
				"question": "'use strict';var baseTax = 0.07;var getTotal = function(price, tax = price * baseTax ) {console.log(price + tax);};getTotal(5.00);",
				"answer": [
				  "5.35"
				]
			  },{
				"question": "'use strict';var generateBaseTax = () => 0.07;var getTotal = function(price, tax = price * generateBaseTax()) {console.log(price + tax);};getTotal(5.00);",
				"answer": [
				  "5.35"
				]
			  },{
				"question": "'use strict';var getTotal = function(price, tax = 0.07 ) {console.log(arguments.length);};getTotal(5.00);",
				"answer": [
				  "1"
				]
			  },{
				"question": "'use strict';var getTotal = function(price = adjustment, adjustment = 1.00) {console.log(price + adjustment);};getTotal();",
				"answer": [
				  "SyntaxError: Use before declaration"
				]
			  },{
				"question": "'use strict';var getTotal = function(price = adjustment, adjustment = 1.00) {console.log(price + adjustment);};getTotal(5.00);",
				"answer": [
				  "6"
				]
			  },{
				"question": "'use strict';var getTotal = new Function('price = 20.00', 'return price;');console.log(getTotal());",
				"answer": [
				  "20"
				]
			  },
			]
		  },
		  {
			"sub_menu_name": "Rest and Spread",
			"rest_spread": [
			  {
				"question": "'use strict';var showCategories = function (productId, ...categories) {console.log(categories instanceof Array);};showCategories(123, 'search', 'advertising');",
				"answer": [
				  "true"
				]
			  },{
				"question": "'use strict';var showCategories = function (productId, ...categories) {console.log(categories);};showCategories(123, 'search', 'advertising');",
				"answer": [
				  "['search', 'advertising']"
				]
			  },{
				"question": "'use strict';var showCategories = function (productId, ...categories) {console.log(categories);};showCategories(123);",
				"answer": [
				  "[]"
				]
			  },{
				"question": "'use strict';var showCategories = function (productId, ...categories) {};console.log(showCategories.length);",
				"answer": [
				  "1"
				]
			  },{
				"question": "'use strict';var showCategories = function (productId, ...categories) {console.log(arguments.length);};showCategories(123, 'search', 'advertising');",
				"answer": [
				  "3"
				]
			  },{
				"question": "'use strict';var showCategories =new Function('...categories', 'return categories;');console.log(showCategories('search', 'advertising'));",
				"answer": [
				  "['search', 'advertising']"
				]
			  },{
				"question": "'use strict';var prices = [12, 20, 18];var maxPrice = Math.max(...prices);console.log(maxPrice);",
				"answer": [
				  "20"
				]
			  },{
				"question": "'use strict';var prices = [12, 20, 18];var newPriceArray = [...prices];console.log(newPriceArray);",
				"answer": [
				  "[12, 20, 18]}"
				]
			  },{
				"question": "'use strict';var newPriceArray = Array(...[,,]);console.log(newPriceArray);",
				"answer": [
				  "[undefined, undefined]"
				]
			  },{
				"question": "'use strict';var newPriceArray = [...[,,]];console.log(newPriceArray);",
				"answer": [
				  "[undefined, undefined]"
				]
			  },{
				"question": "'use strict';var maxCode = Math.max(...'43210');console.log(maxCode);",
				"answer": [
				  "4"
				]
			  },{
				"question": "'use strict';var codeArray = ['A', ...'BCD', 'E'];console.log(codeArray);",
				"answer": [
				  "['A','B','C','D,'E']"
				]
			  }
			]
		  },
		  {
			"sub_menu_name": "Object Literal Extensions",
			"obj_literal": [
			  {
				"question": "'use strict';var price = 5.99, quantity = 30;var productView = {price,quantity};console.log(productView);",
				"answer": [
				  "{price: 5.99, quantity: 30}"
				]
			  },{
				"question": "'use strict';var price = 5.99, quantity = 10;var productView = {price,quantity,calculateValue() {return this.price * this.quantity}};console.log(productView.calculateValue());",
				"answer": [
				  "59.900000000000006"
				]
			  },{
				"question": "'use strict';var price = 5.99, quantity = 10;var productView = {price: 7.99,quantity: 1,calculateValue() {return this.price * this.quantity}};console.log(productView.calculateValue());",
				"answer": [
				  "7.99"
				]
			  },{
				"question": "'use strict';var price = 5.99, quantity = 10;var productView = {price,quantity,'calculate value'() {return this.price * this.quantity}};console.log(productView['calculate value']());",
				"answer": [
				  "59.900000000000006"
				]
			  },{
				"question": "'use strict';var field = 'dynamicField';var price = 5.99;var productView = {[field]: price};console.log(productView);",
				"answer": [
				  "{dynamicField: 5.99 }"
				]
			  },{
				"question": "'use strict';var field = 'dynamicField';var price = 5.99;var productView = {[field+'-001']: price};console.log(productView);",
				"answer": [
				  "{dynamicField-001: 5.99 }"
				]
			  },{
				"question": "'use strict';var method = 'doIt';var productView = {[method+'-001']() {console.log('in a method');}};productView['doIt-001']();",
				"answer": [
				  "in a method"
				]
			  },{
				"question": "'use strict';var ident = 'productId';var productView = {get [ident] () { return true; },set [ident] (value) { }};console.log(productView.productId);",
				"answer": [
				  "true"
				]
			  }
			]
		  },
		  {
			"sub_menu_name": "for...of Loops",
			"for_of": [
			  {
				"question": "'use strict';var categories = ['hardware', 'software', 'vaporware'];for (var item of categories) {console.log(item);}",
				"answer": [
				  "hardware",
				  "software",
				  "vaporware"
				]
			  },{
				"question": "'use strict';var categories = [,,];for (var item of categories) {console.log(item);}",
				"answer": [
				  "undefined",
				  "undefined"
				]
			  },{
				"question": "'use strict';var codes = 'ABCDF';var count = 0;for(var code of codes) {count++;}console.log(count);",
				"answer": [
				  "5"
				]
			  }
			]
		  },
		  {
			"sub_menu_name": "Octal and Binary Literals",
			"octal_binary": [
			  {
				"question": "'use strict';var value = 0o10;console.log(value);",
				"answer": [
				  "8"
				]
			  },{
				"question": "'use strict';var value = 0O10;console.log(value)",
				"answer": [
				  "8"
				]
			  },{
				"question": "'use strict';var value = 0b10;console.log(value);",
				"answer": [
				  "2"
				]
			  },{
				"question": "'use strict';var value = 0B10;console.log(value)",
				"answer": [
				  "2"
				]
			  }
			]
		  },
		  {
			"sub_menu_name": "Template Literals",
			"temp_literal": [
			  {
				"question": "'use strict';let invoiceNum = '1350';console.log(`Invoice Number: ${invoiceNum}`);",
				"answer": [
				  "Invoice Number: 1350"
				]
			  },{
				"question": "'use strict';let invoiceNum = '1350';console.log(`Invoice Number: \${invoiceNum}`);",
				"answer": [
				  "Invoice Number: ${invoiceNum}"
				]
			  },{
				"question": "'use strict';let message = `ABC`;console.log(message);",
				"answer": [
					"A",
					"B",
					"C"
				]
			  },{
				"question": "'use strict';let invoiceNum = '1350';console.log(`Invoice Number: ${'INV-' + invoiceNum}`);",
				"answer": [
				  "Invoice Number: INV-1350"
				]
			  },{
				"question": "'use strict';function showMessage(message) {let invoiceNum = '99';console.log(message);}let invoiceNum = '1350';showMessage(`Invoice Number: ${invoiceNum}`);",
				"answer": [
				  "Invoice Number: 1350"
				]
			  },{
				"question": "'use strict';function processInvoice(segments) {console.log(segments);}processInvoice `template`;",
				"answer": [
				  "['template']"
				]
			  },{
				"question": "'use strict';function processInvoice(segments, ...values) {console.log(segments);console.log(values);}let invoiceNum = '1350';let amount = '2000';processInvoice `Invoice: ${invoiceNum} for ${amount}`;",
				"answer": [
					"['Invoice: ', ' for ', \"\"]",
					"[1350, 2000]"
				]
			  }
			]
		  },
		  {
			"sub_menu_name": "Destructuring",
			"destructure": [
			  {
				"question": "'use strict';let salary = ['32000', '50000', '75000'];let [ low, average, high ] = salary;console.log(average);",
				"answer": [
				  "50000"
				]
			  },{
				"question": "'use strict';let salary = ['32000', '50000'];let [ low, average, high ] = salary;console.log(high);",
				"answer": [
				  "undefined"
				]
			  },{
				"question": "'use strict';let salary = ['32000', '50000', '75000'];let [ low, , high ] = salary;console.log(high);",
				"answer": [
				  "75000"
				]
			  },{
				"question": "'use strict';let salary = ['32000', '50000', '75000'];let [ low, ...remaining ] = salary;console.log(remaining);",
				"answer": [
				  "['50000', '75000']"
				]
			  },{
				"question": "'use strict';let salary = ['32000', '50000'];let [ low, average, high = '88000' ] = salary;console.log(high);",
				"answer": [
				  "88000"
				]
			  },{
				"question": "'use strict';let salary = ['32000', '50000', ['88000', '99000'] ];let [low, average, [actualLow, actualHigh]] = salary;console.log(actualLow);",
				"answer": [
				  "88000"
				]
			  },{
				"question": "'use strict';let salary = ['32000', '50000'];let low, average, high;[ low, average, high = '88000' ] = salary;console.log(high);",
				"answer": [
				  "88000"
				]
			  },{
				"question": "'use strict';function reviewSalary([low, average], high = '88000') {console.log(average);}reviewSalary(['32000', '50000']);",
				"answer": [
				  "50000"
				]
			  },{
				"question": "'use strict';let salary = {low: '32000',average: '50000',high: '75000'};let { low, average, high } = salary;console.log(high);",
				"answer": [
				  "75000"
				]
			  },{
				"question": "'use strict';let salary = {low: '32000',average: '50000',high: '75000'};let { low: newLow, average: newAverage, high: newHigh } = salary;console.log(newHigh);",
				"answer": [
				  "75000"
				]
			  },{
				"question": "'use strict';let salary = {low: '32000',average: '50000',high: '75000'};let newLow, newAverage, newHigh;{ low: newLow, average: newAverage, high: newHigh } = salary;console.log(newHigh);",
				"answer": [
				  "Syntax Error"
				]
			  },{
				"question": "'use strict';let salary = {low: '32000',average: '50000',high: '75000'};let newLow, newAverage, newHigh;({ low: newLow, average: newAverage, high: newHigh } = salary);console.log(newHigh);",
				"answer": [
				  "75000"
				]
			  },{
				"question": "'use strict';let [maxCode, minCode] = 'AZ';console.log(`min: ${minCode} max: ${maxCode}`);",
				"answer": [
				  "min: Z max: A"
				]
			  },{
				"question": "'use strict';var getPrice = () => 5.99;console.log(getPrice.hasOwnProperty('prototype'));",
				"answer": [
				  "false"
				]
			  }
			]
		  }
		]
	  },
	  {
		"menu": "New Types",
		"sub_menu": [
		  {
			"sub_menu_name": "Symbols",
			"symbols": [
			  {
				"question": "let eventSymbol = Symbol('resize event');console.log(typeof eventSymbol);",
				"answer": [
				  "symbol"
				]
			  },			  {
				"question": "let eventSymbol = Symbol('resize event');console.log(eventSymbol.toString());",
				"answer": [
				  "Symbol(resize event)"
				]
			  },{
				"question": "const CALCULATE_EVENT_SYMBOL = Symbol('calculate event');console.log(CALCULATE_EVENT_SYMBOL.toString());",
				"answer": [
				  "Symbol(calculate event)"
				]
			  },{
				"question": "let s = Symbol.for('event');console.log(s.toString());",
				"answer": [
				  "Symbol(event)"
				]
			  },{
				"question": "let s = Symbol('event');let s2 = Symbol('event');console.log(s === s2);",
				"answer": [
				  "false"
				]
			  },{
				"question": "let s = Symbol.for('event');let s2 = Symbol.for('event');console.log(s === s2);",
				"answer": [
				  "true"
				]
			  },{
				"question": "let s = Symbol.for('event');let s2 = Symbol.for('event2');console.log(s === s2);",
				"answer": [
				  "false"
				]
			  },{
				"question": "let s = Symbol.for('event');let description = Symbol.keyFor(s);console.log(description);",
				"answer": [
				  "event"
				]
			  },{
				"question": "let article = {title: 'Whiteface Mountain',[Symbol.for('article')]: 'My Article'};let value = article[Symbol.for('article')];console.log(value);",
				"answer": [
				  "My Article"
				]
			  },{
				"question": "let article = {title: 'Whiteface Mountain',[Symbol.for('article')]: 'My Article'};console.log( Object.getOwnPropertyNames(article) );",
				"answer": [
				  "['title']"
				]
			  },{
				"question": "let article = {title: 'Whiteface Mountain',[Symbol.for('article')]: 'My Article'};console.log( Object.getOwnPropertySymbols(article) );",
				"answer": [
				  "[Symbol(article)]"
				]
			  },
			]
		  },
		  {
			"sub_menu_name": "Well-known Symbols",
			"well_known_symbols": [
			  {
				"question": "let Blog = function () {};let blog = new Blog();console.log( blog.toString() );",
				"answer": [
				  "[object Object]"
				]
			  },{
				"question": "let Blog = function () {};Blog.prototype[Symbol.toStringTag] = 'Blog Class';let blog = new Blog();console.log( blog.toString() );",
				"answer": [
				  "[object Blog Class]"
				]
			  },{
				"question": "let values = [8, 12, 16];console.log([].concat(values));",
				"answer": [
				  "[8, 12, 16]"
				]
			  },{
				"question": "let values = [8, 12, 16];values[Symbol.isConcatSpreadable] = false;console.log([].concat(values));",
				"answer": [
				  "[ [8, 12, 16] ]"
				]
			  },{
				"question": "let values = [8, 12, 16];let sum = values + 100;console.log(sum);",
				"answer": [
				  "8,12,16100"
				]
			  },{
				"question": "'use strict';let values = [8, 12, 16];values[Symbol.toPrimitive] = function (hint) {console.log(hint);return 42;};let sum = values + 100;console.log(sum);",
				"answer": [
				  "default",
				  "142"
				]
			  },{
				"question": "let s = Symbol.for('event');let s2 = Symbol.for('event');console.log(s === s2;",
				"answer": [
				  "true"
				]
			  },{
				"question": "let s = Symbol.for('event');let s2 = Symbol.for('event2');console.log(s === s2);",
				"answer": [
				  "false"
				]
			  },{
				"question": "let s = Symbol.for('event');let description = Symbol.keyFor(s);console.log(description);",
				"answer": [
				  "event"
				]
			  },{
				"question": "let article = {title: 'Whiteface Mountain',[Symbol.for('article')]: 'My Article'};let value = article[Symbol.for('article')];console.log(value);",
				"answer": [
				  "My Article"
				]
			  },{
				"question": "let article = {title: 'Whiteface Mountain',[Symbol.for('article')]: 'My Article'};console.log( Object.getOwnPropertyNames(article) );",
				"answer": [
				  "['title']"
				]
			  },{
				"question": "let article = {title: 'Whiteface Mountain',[Symbol.for('article')]: 'My Article'};console.log( Object.getOwnPropertySymbols(article) );",
				"answer": [
				  "[Symbol(article)]"
				]
			  }
			]
		  }
		]
	  },
	  {
		"menu": "Object Extensions",
		"sub_menu": [
		  {
			"sub_menu_name": "Object Extensions",
			"object_extensions": [
			  {
				"question": "let a = {x: 1};let b = {y: 2};Object.setPrototypeOf(a, b);console.log(a.y);",
				"answer": [
				  "2"
				]
			  },
			  {
				"question": "let a = { a: 1 }, b = { b: 2 };let target = {};Object.assign(target, a, b);console.log(target);",
				"answer": [
				  "{a: 1, b: 2}"
				]
			  },{
				"question": "let a = { a: 1 }, b = { a: 5, b: 2 };let target = {};Object.assign(target, a, b);console.log(target);",
				"answer": [
				  "{a: 5, b: 2}"
				]
			  },{
				"question": "let a = { a: 1 }, b = { a: 5, b: 2 };Object.defineProperty(b, 'c', {value: 10,enumerable: false});let target = {};Object.assign(target, a, b);console.log(target);",
				"answer": [
				  "{a: 5, b: 2}"
				]
			  },{
				"question": "let a = { a: 1 }, b = { a: 5, b: 2 }, c = { c: 20 };Object.setPrototypeOf(b, c);let target = {};Object.assign(target, a, b);console.log(target);",
				"answer": [
				  "{a: 5, b: 2}"
				]
			  },{
				"question": "let amount = NaN;console.log(amount === amount);",
				"answer": [
				  "false"
				]
			  },{
				"question": "let amount = NaN;console.log(Object.is(amount, amount));",
				"answer": [
				  "true"
				]
			  },{
				"question": "let amount = 0, total = -0;console.log(amount === total)",
				"answer": [
				  "true"
				]
			  },{
				"question": "let amount = 0, total = -0;console.log(Object.is(amount, total));",
				"answer": [
				  "false"
				]
			  }
			]
		  },
		  {
			"sub_menu_name": "String Extensions",
			"string_extensions": [
			  {
				"question": "let title = 'Santa Barbara Surf Riders';console.log(title.startsWith('Santa'));",
				"answer": [
				  "true"
				]
			  },{
				"question": "let title = 'Santa Barbara Surf Riders';console.log(title.endsWith('Rider'));",
				"answer": [
				  "false"
				]
			  },{
				"question": "let title = 'Santa Barbara Surf Riders';console.log(title.includes('ba'));",
				"answer": [
				  "true"
				]
			  },{
				"question": "var title = 'Surfer's 🏄🏄  Blog';console.log(title);",
				"answer": [
				  "Surfer's 🏄🏄 Blog"
				]
			  },{
				"question": "var surfer = '🏄🏄'console.log(surfer.length);",
				"answer": [
				  "2"
				]
			  },{
				"question": "var surfer = '🌊🏄�';console.log(Array.from(surfer).length);console.log(surfer);",
				"answer": [
				  "3",
				 "🌊🏄�"
				]
			  },{
				"question": "var title = 'Mazatlán';console.log(title + ' ' + title.length);",
				"answer": [
				  "Mazatlán 9"
				]
			  },{
				"question": "var title = 'Mazatlán';console.log(title + ' ' + title.normalize().length);",
				"answer": [
				  "Mazatlán 8"
				]
			  },{
				"question": "var title = 'Mazatlán';console.log(title.normalize().codePointAt(7).toString(16));",
				"answer": [
				  "6e"
				]
			  },{
				"question": "console.log(String.fromCodePoint(0x1f3c4));",
				"answer": [
				  "🏄"
				]
			  },{
				"question": "let title = 'Surfer';let output = String.raw`${title} \u{1f3c4}\n`;console.log(output);",
				"answer": [
				  "Surfer \u{1f3c4}\n"
				]
			  },{
				"question": "let wave = '🌊';console.log(wave.repeat(10));",
				"answer": [
				  "🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊"
				]
			  },
			]
		  },
		  {
			"sub_menu_name": "Number Extensions",
			"number_extensions": [
			  {
				"question": "console.log(Number.parseInt === parseInt);",
				"answer": [
				  "true"
				]
			  },{
				"question": "console.log(Number.parseFloat === parseFloat);",
				"answer": [
				  "true"
				]
			  },{
				"question": "let s = 'NaN';console.log(isNaN(s));console.log(Number.isNaN(s));",
				"answer": [
				  "true"
				]
			  },{
				"question": "let s = '8000';console.log(isFinite(s));console.log(Number.isFinite(s));",
				"answer": [
				  "true",
				  "false"
				]
			  },{
				"question": "let sum = 408.2;console.log(Number.isInteger(sum));",
				"answer": [
				  "false"
				]
			  },{
				"question": "console.log(Number.isInteger(NaN));console.log(Number.isInteger(Infinity));console.log(Number.isInteger(undefined));console.log(Number.isInteger(3));",
				"answer": [
				  "false",
				  "false",
				  "false",
				  "true"
				]
			  },{
				"question": "'use strict';let a = Math.pow(2, 53) - 1;console.log(Number.isSafeInteger(a));a = Math.pow(2, 53);console.log(Number.isSafeInteger(a));",
				"answer": [
					"true",
					"false"
				]
			  },{
				"question": "console.log(Number.EPSILON);console.log(Number.MAX_SAFE_INTEGER);console.log(Number.MIN_SAFE_INTEGER);",
				"answer": [
				  "2.220446049250313e-16",
				 "9007199254740991",
				  "-9007199254740991"
				]
			  },
			]
		  },
		  {
			"sub_menu_name": "Math Extensions",
			"math_extensions": [
			  {
				"question": "console.log(Math.sign(0));console.log(Math.sign(-0));console.log(Math.sign(-20));console.log(Math.sign(20));console.log(Math.sign(NaN));",
				"answer": [
				  "0",
				  "-0 (0 in Edge)",
				  "-1",
				  "1",
				  "Na"
				]
			  },{
				"question": "console.log(Math.cbrt(27));",
				"answer": [
				  "3"
				]
			  },{
				"question": "console.log(Math.trunc(27.1));console.log(Math.trunc(-27.9));",
				"answer": [
				  "27 -27"
				]
			  },
			]
		  },
		  {
			"sub_menu_name": "RegExp Extensions",
			"regExp_extensions": [
			  {
				"question": "let pattern = /\u{1f3c4}/;console.log(pattern.test('🏄'));",
				"answer": [
				  "false"
				]
			  },{
				"question": "let pattern = /\u{1f3c4}/u;console.log(pattern.test('🏄'));",
				"answer": [
				  "true"
				]
			  },{
				"question": "let pattern = /^.Surfer/;console.log(pattern.test('🏄Surfer'));",
				"answer": [
				  "false"
				]
			  },{
				"question": "let pattern = /^.Surfer/u;console.log(pattern.test('🏄Surfer'));",
				"answer": [
				  "true"
				]
			  },{
				"question": "let pattern = /900/y;console.log(pattern.lastIndex);console.log(pattern.test('800900'));",
				"answer": [
				  "0",
				  "false"
				]
			  },{
				"question": "let pattern = /900/y;pattern.lastIndex = 3;console.log(pattern.test('800900'));",
				"answer": [
				  "true"
				]
			  },{
				"question": "let pattern = /900/yg;console.log(pattern.flags);",
				"answer": [
				  "gy (Order will be 'gimuy')"
				]
			  },
			]
		  },
		  {
			"sub_menu_name": "Function Extensions",
			"function_extensions": [
			  {
				"question": "let fn = function calc() {return 0;};console.log(fn.name);",
				"answer": [
				  "calc"
				]
			  },{
				"question": "let fn = function() {return 0;};console.log(fn.name);",
				"answer": [
				  "fn"
				]
			  },{
				"question": "let fn = function() {return 0;};let newFn = fn;console.log(newFn.name);",
				"answer": [
				  "fn"
				]
			  },{
				"question": "class Calculator {constructor() {}add(){}}let c = new Calculator();console.log(Calculator.name);console.log(c.add.name);",
				"answer": [
				  "Calculator",
				  "add"
				]
			  },
			]
		  },
		]
	  },
	  {
		"menu": "ES6 Modules and Classes",
		"sub_menu": [
		  {
			"sub_menu_name": "Module Basics",
			"module_basics": [
			  {
				"fileName":[{
					'name' : 'File base.js:',
					"question" : "console.log('in base.js');"
				},{
					'name' : 'File export.js:',
					"question" : "console.log('in base.js');"
				}],
				'answer' : ["in base.js"]
			  },
			    {
				"fileName":[{
					'name' : 'File base.js:',
					"question" : "console.log('in base.js');"
				}],
				'answer' : ["in base.js"]
			  },  {
				"fileName":[{
					'name' : 'File base.js:',
					"question" : "console.log('in base.js');"
				}],
				'answer' : ["in base.js"]
			  },  {
				"fileName":[{
					'name' : 'File base.js:',
					"question" : "console.log('in base.js');"
				}],
				'answer' : ["in base.js"]
			  },  {
				"fileName":[{
					'name' : 'File base.js:',
					"question" : "console.log('in base.js');"
				}],
				'answer' : ["in base.js"]
			  }
			]
		  },
		  {
			"sub_menu_name": "Named Exports",
			"named_exports": [
				{
				"question": "",
				"answer": [
					""
					]
				}				
			]
		  },
		  {
			"sub_menu_name": "Classes",
			"classes": [
			  {
				"question": "class Task {}console.log(typeof Task);",
				"answer": [
				  "function"
				]
			  },{
				"question": "class Task {}let task = new Task();console.log(typeof task);",
				"answer": [
				  "object"
				]
			  },{
				"question": "class Task {}let task = new Task();console.log(task instanceof Task);",
				"answer": [
				  "true"
				]
			  },{
				"question": "class Task {showId() {console.log('99');}}let task = new Task();task.showId();",
				"answer": [
				  "99"
				]
			  },{
				"question": "class Task {showId() {console.log('99');}}let task = new Task();console.log(task.showId === Task.prototype.showId);",
				"answer": [
				  "true"
				]
			  },{
				"question": "class Task {constructor() {console.log('constructing Task');}showId() {console.log('99');}}let task = new Task();",
				"answer": [
				  "constructing Task"
				]
			  },{
				"question": "class Task {constructor() {console.log('constructing Task');},showId() {console.log('99');}}let task = new Task();",
				"answer": [
				  "Syntax error"
				]
			  },{
				"question": "class Task {let taskId = 9000;constructor() {console.log('constructing Task');}showId() {console.log('99');}}let task = new Task();",
				"answer": [
				  "Syntax error"
				]
			  },{
				"question": "let task = new Task();class Task {constructor() {console.log('constructing Task');}}",
				"answer": [
				  "Error: Use before declaration"
				]
			  },{
				"question": "let newClass = class Task {constructor() {console.log('constructing Task');}};new newClass();",
				"answer": [
				  "constructing Task"
				]
			  },{
				"question": "let Task = function () {console.log('constructing Task');};let task = {};Task.call(task);",
				"answer": [
				  "constructing Task"
				]
			  },{
				"question": "class Task {constructor() {console.log('constructing Task');}};let task = {};Task.call(task);",
				"answer": [
				  "Error: class constructor cannot be invoked/called without the new keyword"
				]
			  },{
				"question": "function Project() { };console.log(window.Project === Project);",
				"answer": [
				  "true"
				]
			  },{
				"question": "class Task { }console.log(window.Task === Task);",
				"answer": [
				  "false"
				]
			  }
			]
		  },
		  {
			"sub_menu_name": "extends and super",
			"extends_and_super": [
			  {
				"question": "class Project {constructor() {console.log('constructing Project');}}class SoftwareProject extends Project {}let p = new SoftwareProject();",
				"answer": [
				  "constructing Project"
				]
			  },{
				"question": "class Project {constructor(name) {console.log('constructing Project: ' + name);}}class SoftwareProject extends Project {}let p = new SoftwareProject('Mazatlan');",
				"answer": [
				  "constructing Project: Mazatlan"
				]
			  },{
				"question": "class Project {constructor() {console.log('constructing Project');}}class SoftwareProject extends Project {constructor() {super();console.log('constructing SoftwareProject');}}let p = new SoftwareProject();",
				"answer": [
				  "constructing Project",
				  "constructing SoftwareProject"
				]
			  },{
				"question": "class Project {constructor() {console.log('constructing Project');}}class SoftwareProject extends Project {constructor() {//super();console.log('constructing SoftwareProject');}}let p = new SoftwareProject();",
				"answer": [
				  "ReferenceError: this is not defined"
				]
			  },{
				"question": "class Project {//constructor() {//    console.log('constructing Project');//}}class SoftwareProject extends Project {constructor() {//super();console.log('constructing SoftwareProject');}}let p = new SoftwareProject();",
				"answer": [
				  "ReferenceError: this is not defined"
				]
			  },{
				"question": "class Project {getTaskCount() {return 50;}}class SoftwareProject extends Project {}let p = new SoftwareProject();console.log(p.getTaskCount());",
				"answer": [
				  "50"
				]
			  },{
				"question": "class Project {getTaskCount() {return 50;}}class SoftwareProject extends Project {getTaskCount() {return 66;}}let p = new SoftwareProject();console.log(p.getTaskCount());",
				"answer": [
				  "66"
				]
			  },{
				"question": "class Project {getTaskCount() {return 50;}}class SoftwareProject extends Project {getTaskCount() {return super.getTaskCount() + 6;}}let p = new SoftwareProject();console.log(p.getTaskCount());",
				"answer": [
				  "56"
				]
			  },{
				"question": "let project = {getTaskCount() { return 50; }};let softwareProject = {getTaskCount() {return super.getTaskCount() + 7;}}Object.setPrototypeOf(softwareProject, project);console.log(softwareProject.getTaskCount());",
				"answer": [
				  "57"
				]
			  }
			]
		  },
		  {
			"sub_menu_name": "Constructor Function Properties",
			"constructor_function_properties": [
			  {
				"question": "class Project {constructor() {this.location = 'Mazatlan';}}class SoftwareProject extends Project {constructor() {super();}}let p = new SoftwareProject();console.log(p.location);",
				"answer": [
				  "Mazatlan"
				]
			  },{
				"question": "class Project {constructor() {let location = 'Mazatlan';}}class SoftwareProject extends Project {constructor() {super();}}let p = new SoftwareProject();console.log(p.location);",
				"answer": [
				  "undefined"
				]
			  },{
				"question": "class Project {constructor() {this.location = 'Mazatlan';}}class SoftwareProject extends Project {constructor() {super();this.location = this.location + ' Beach';}}let p = new SoftwareProject();console.log(p.location);",
				"answer": [
				  "Mazatlan Beach"
				]
			  }
			]
		  },
		  {
			"sub_menu_name": "Static Members",
			"static_members": [
			  {
				"question": "class Project {static getDefaultId() {return 0;}}console.log(Project.getDefaultId());",
				"answer": [
				  "0"
				]
			  },{
				"question": "class Project {static getDefaultId() {return 0;}}var p = new Project();console.log(p.getDefaultId());",
				"answer": [
				  "Error: Object doesn't support property or method getDefaultId"
				]
			  },{
				"question": "class Project {static let id = 0;}console.log(Project.id);",
				"answer": [
				  "Syntax Error: ( expected"
				]
			  },{
				"question": "class Project {}Project.id = 99;console.log(Project.id);",
				"answer": [
				  "99"
				]
			  }
			]
		  },
		  {
			"sub_menu_name": "new.target",
			"new_target": [
			  {
				"question": "class Project {constructor() {console.log(typeof new.target);}}var p = new Project();",
				"answer": [
				  "function"
				]
			  },
			  {
				"question": "class Project {constructor() {console.log(new.target);}}var p = new Project()",
				"answer": [
				  "constructor() { console.log(new.target); }"
				]
			  },{
				"question": "class Project {constructor() {console.log(new.target);}}class SoftwareProject extends Project {}var p = new SoftwareProject();",
				"answer": [
				  "constructor(...args) { super(...args); }"
				]
			  },{
				"question": "class Project {constructor() {console.log(new.target);}}class SoftwareProject extends Project {constructor() {super();}}var p = new SoftwareProject();",
				"answer": [
				  "constructor() { super(); }"
				]
			  },{
				"question": "class Project {constructor() {console.log(new.target.getDefaultId());}}class SoftwareProject extends Project {static getDefaultId() { return 99; }}var p = new SoftwareProject();",
				"answer": [
				  "99"
				]
			  }
			]
		  }
		]
	  },
	  {
		"menu": "Iterators, Generators",
		"sub_menu": [
		  {
			"sub_menu_name": "Iterators",
			"iterators": [
			  {
				"question": "let ids = [9000, 9001, 9002];console.log(typeof ids[Symbol.iterator] );",
				"answer": [
				  "function"
				]
			  },{
				"question": "let ids = [9000, 9001, 9002];let it = ids[Symbol.iterator]();console.log(it.next());",
				"answer": [
				  "{done: false, value: 9000}"
				]
			  },{
				"question": "let ids = [9000, 9001, 9002];let iter = ids[Symbol.iterator]();iter.next();iter.next();console.log(iter.next());",
				"answer": [
				  "{done: false, value: 9002}"
				]
			  },{
				"question": "let ids = [9000, 9001, 9002];let iter = ids[Symbol.iterator]();iter.next();iter.next();iter.next();console.log(iter.next());",
				"answer": [
				  "{done: true, value: undefined}"
				]
			  },{
				"question": "let idMaker = {[Symbol.iterator]() {let nextId = 8000;return {next() {return {value: nextId++,done: false};}};}};let it = idMaker[Symbol.iterator]();console.log(it.next().value);console.log(it.next().value);",
				"answer": [
				  "8000",
				  "8001"
				]
			  },{
				"question": "let idMaker = {[Symbol.iterator](){let nextId = 8000;return{next() {return {value: nextId++,done: false};}};}};for(let v of idMaker) {if (v > 8002)break;console.log(v);}",
				"answer": [
					"8000",
					"8001",
					"8002"
				]
			  },{
				"question": "let idMaker = {[Symbol.iterator]() {let nextId = 8000;return {next() {let value = nextId>8002?undefined:nextId++;let done = !value;return { value, done };}};}};for (let v of idMaker)console.log(v);",
				"answer": [
					"8000",
					"8001",
					"8002"
				]
			  },{
				"question": "let ids = [8000, 8001, 8002];function process(id1, id2, id3) {console.log(id3);}process(...ids);",
				"answer": [
					"8002"
				]
			  }
			]
		  },{
			"sub_menu_name": "Generators",
			"Generators": [
			  {
				"question": "function *process() {yield 8000;yield 8001;}let it = process();console.log(it.next());",
				"answer": [
				  "{done: false, value: 8000}"
				]
			  },{
				"question": "function *process() {yield 8000;yield 8001;}let it = process();it.next();console.log(it.next());",
				"answer": [
				  "{done: false, value: 8001}"
				]
			  },{
				"question": "function *process() {yield 8000;yield 8001;}let it = process();it.next();it.next();console.log(it.next());",
				"answer": [
				  "{done: true, value: undefined}"
				]
			  },{
				"question": "function *process() {let nextId = 7000;while(true)yield(nextId++);}let it = process();it.next();console.log(it.next().value);",
				"answer": [
				  "7001"
				]
			  },{
				"question": "function *process() {let nextId = 7000;while(true)yield(nextId++);}for(let id of process()){if (id > 7002)break;console.log(id);}",
				"answer": [
					"7000",
					"7001",
					"7002"
				]
			  }
			]
		  },{
			"sub_menu_name": "Yielding in Generators",
			"yielding_in_generators": [
			  {
				"question": "function *process() {yield 8000;}let it = process();console.log(it.next());",
				"answer": [
				  "{done: false, value: 8000}"
				]
			  },{
				"question": "function *process() {yield;}let it = process();console.log(it.next());",
				"answer": [
				  "{done: false, value:undefined}"
				]
			  },{
				"question": "function *process() {let result = yield;console.log(`result is ${result}`);}let it = process();it.next();it.next(200);",
				"answer": [
				  "result is 200"
				]
			  },{
				"question": "function *process() {let result = yield;console.log(`result is ${result}`);}let it = process();it.next();console.log(it.next(200));",
				"answer": [
				  "result is 200",
				  "{done: true, value: undefined"
				]
			  },{
				"question": "function *process() {let newArray = [yield, yield, yield];console.log(newArray[2]);}let it = process();it.next();it.next(2);it.next(4);it.next(42);",
				"answer": [
				  "42"
				]
			  },{
				"question": "function *process() {let value =4 * yield 42;console.log(value);}let it = process();it.next();it.next(10);",
				"answer": [
				  "Syntax Error"
				]
			  },{
				"question": "let idMaker = {function *process() {let value = 4 *(yield 42);console.log(value);}let it = process();it.next();it.next(10);",
				"answer": [
				  "40"
				]
			  },{
				"question": "function *process() {yield 42;yield[1, 2, 3];}let it = process();console.log(it.next().value);console.log(it.next().value);console.log(it.next().value);",
				"answer": [
				  "42",
				  "[1,2,3]",
				  "undefined"
				]
			  },{
				"question": "function *process() {yield 42;yield*[1, 2, 3];}let it= process();console.log(it.next().value);console.log(it.next().value);console.log(it.next().value);console.log(it.next().value);console.log(it.next().value);",
				"answer": [
				  "42",
				  "1",
				  "2",
				  "3",
				  "undefined"
				]
			  }
			]
		  },{
			"sub_menu_name": "throw and return",
			"throw_and_return": [
			  {
				"question": "function *process() {try {yield 9000;yield 9000;yield 9002;}catch(e){}}let it = process();console.log(it.next().value);console.log(it.throw('foo'));console.log(it.next());",
				"answer": [
				  "9000",
				  "{done:true, value:undefined}",
				  "{done:true, value:undefined}"
				]
			  },{
				"question": "function *process() {yield 9000;yield 9001;yield 9002;}let it = process();console.log(it.next().value);console.log(it.throw('foo'));console.log(it.next());",
				"answer": [
				  "9000",
				 "Exception: foo",
				  "(execution terminates)"
				]
			  },{
				"question": "function *process() {yield 9000;yield 9001;yield 9002;}let it = process();console.log(it.next().value);// Firefox only (currently)console.log(it.return('foo'));console.log(it.next());",
				"answer": [
				  "9000",
				  "{value: 'foo', done: true}",
				  "{value: undefined, done: true}"
				]
			  }
			]
		  }		  
		]
	  },
	  {
		"menu": "Arrays and Collections",
		"sub_menu": [
		  {
			"sub_menu_name": "Array Extensions",
			"array_extensions": [
			  {
				"question": "let salaries = Array(90000);console.log(salaries.length);",
				"answer": [
				  "90000"
				]
			  },{
				"question": "let salaries = Array.of(90000);console.log(salaries.length);",
				"answer": [
				  "1"
				]
			  },{
				"question": "let amounts = [800, 810, 820];let salaries = Array.from(amounts, v => v+100 );console.log(salaries);",
				"answer": [
				  "[900,910,920]"
				]
			  },{
				"question": "let amounts = [800, 810, 820];let salaries = Array.from(amounts, function (v) {return v + this.adjustment;}, { adjustment: 50 });console.log(salaries);",
				"answer": [
				  "[850,860,870]"
				]
			  },{
				"question": "let amounts = [800, 810, 820];let salaries = Array.from(amounts, v => v + this.adjustment,{ adjustment: 50 });console.log(salaries);",
				"answer": [
				  "[NaN, NaN, NaN]"
				]
			  },{
				"question": "let salaries = [600, 700, 800];salaries.fill(900);console.log(salaries);",
				"answer": [
				  "[900, 900, 900]"
				]
			  },{
				"question": "let salaries = [600, 700, 800];salaries.fill(900, 1);console.log(salaries);",
				"answer": [
				  "[600, 900, 900]"
				]
			  },{
				"question": "let salaries = [600, 700, 800];salaries.fill(900, 1, 2);console.log(salaries);",
				"answer": [
				  "[600, 900, 800]"
				]
			  },{
				"question": "let salaries = [600, 700, 800];salaries.fill(900, -1);console.log(salaries);",
				"answer": [
				  "[600, 700, 900]"
				]
			  },{
				"question": "let salaries = [600, 700, 800];let result = salaries.find(value => value >= 750);console.log(result);",
				"answer": [
				  "800"
				]
			  },{
				"question": "let salaries = [600, 700, 800];let result = salaries.find(value => value >= 650);console.log(result);",
				"answer": [
				  "700"
				]
			  },{
				"question": "let salaries = [600, 700, 800];let result = salaries.findIndex(function (value, index, array) {return value == this;}, 700);console.log(result);",
				"answer": [
				  "1"
				]
			  },{
				"question": "let salaries = [600, 700, 800];salaries.copyWithin(2, 0);console.log(salaries);",
				"answer": [
				  "[600, 700, 600]"
				]
			  },{
				"question": "let ids = [1, 2, 3, 4, 5];ids.copyWithin(0, 1);console.log(ids);",
				"answer": [
				  "[2, 3, 4, 5, 5]"
				]
			  },{
				"question": "let ids = [1, 2, 3, 4, 5];ids.copyWithin(3, 0, 2);console.log(ids);",
				"answer": [
				  "[1, 2, 3, 1, 2]"
				]
			  },{
				"question": "let ids = ['A', 'B', 'C'];console.log(...ids.entries());",
				"answer": [
				  "[0,'A'], [1,'B'], [2,'C']"
				]
			  },{
				"question": "let ids = ['A', 'B', 'C'];console.log(...ids.keys());",
				"answer": [
				  "0 1 2"
				]
			  },{
				"question": "let ids = ['A', 'B', 'C'];console.log(...ids.values());",
				"answer": [
				  "A B C"
				]
			  }
			]
		  },{
			"sub_menu_name": "ArrayBuffer and Typed Array",
			"arrayBuffer_and_typed_array": [
			  {
				"question": "let buffer = new ArrayBuffer(1024);console.log(buffer.byteLength);",
				"answer": [
				  "1024"
				]
			  },{
				"question": "let buffer = new ArrayBuffer(1024);buffer[0] = 0xff;console.log(buffer[0]);",
				"answer": [
				  "255"
				]
			  },{
				"question": "let buffer = new ArrayBuffer(1024);let a = new Int8Array(buffer);a[0] = 0xff;console.log(a[0]);",
				"answer": [
				  "-1"
				]
			  },{
				"question": "let buffer = new ArrayBuffer(1024);let a = new Uint8Array(buffer);a[0] = 0xff;console.log(a[0]);",
				"answer": [
				  "255"
				]
			  },{
				"question": "let buffer = new ArrayBuffer(1024);let a = new Uint8ClampedArray(buffer);a[0] = -12;console.log(a[0]);",
				"answer": [
				  "0"
				]
			  },{
				"question": "let buffer = new ArrayBuffer(1024);let a = new Uint8Array(buffer);let b = new Uint16Array(buffer);a[0] = 1;console.log(b[0])",
				"answer": [
				  "1"
				]
			  },{
				"question": "let salaries = [600, 700, 800];salaries.fill(900, 1);console.log(salaries);",
				"answer": [
				  "[600, 900, 900]"
				]
			  },{
				"question": "let buffer = new ArrayBuffer(1024);let a = new Uint8Array(buffer);let b = new Uint16Array(buffer);a[1] = 1;console.log(b[0]);",
				"answer": [
				  "256"
				]
			  }
			]
		  },{
			"sub_menu_name": "DataView and Endianness",
			"dataView_and_endianness": [
			  {
				"question": "let buffer = new ArrayBuffer(1024);let dv = new DataView(buffer);console.log(dv.byteLength);",
				"answer": [
				  "1024"
				]
			  },{
				"question": "let buffer = new ArrayBuffer(1024);let dv = new DataView(buffer, 0, 32);console.log(dv.byteLength);",
				"answer": [
				  "32"
				]
			  },{
				"question": "let buffer = new ArrayBuffer(1024);let dv = new DataView(buffer);dv.setUint8(0, 1);console.log(dv.getUint16(0));",
				"answer": [
				  "256"
				]
			  },{
				"question": "let buffer = new ArrayBuffer(1024);let dv = new DataView(buffer);dv.setUint8(0, 1);console.log(dv.getUint16(0, true));",
				"answer": [
				  "1"
				]
			  }
			]
		  },{
			"sub_menu_name": "Map and WeakMap",
			"map_and_weakMap": [
			  {
				"question": "let employee1 = { name: 'Jake' };let employee2 = { name: 'Janet' };let employees = new Map();employees.set(employee1, 'ABC');employees.set(employee2, '123');console.log(employees.get(employee1));",
				"answer": [
				  "ABC"
				]
			  },{
				"question": "let employee1 = { name: 'Jake' };let employee2 = { name: 'Janet' };let employees = new Map();employees.set(employee1, 'ABC');employees.set(employee2, '123');console.log(employees.size);",
				"answer": [
				  "2"
				]
			  },{
				"question": "let employee1 = { name: 'Jake' };let employee2 = { name: 'Janet' };let employees = new Map();employees.set(employee1, 'ABC');employees.set(employee2, '123');employees.delete(employee2);console.log(employees.size);",
				"answer": [
				  "1"
				]
			  },{
				"question": "let employee1 = { name: 'Jake' };let employee2 = { name: 'Janet' };let employees = new Map();employees.set(employee1, 'ABC');employees.set(employee2, '123');employees.clear();console.log(employees.size);",
				"answer": [
				  "0"
				]
			  },{
				"question": "let employee1 = { name: 'Jake' };let employee2 = { name: 'Janet' };let arr = [[employee1, 'ABC'],[employee2, '123']];let employees = new Map(arr);console.log(employees.size);",
				"answer": [
				  "2"
				]
			  },{
				"question": "let employee1 = { name: 'Jake' };let employee2 = { name: 'Janet' };let arr = [[employee1, 'ABC'],[employee2, '123']];let employees = new Map(arr);console.log(employees.has(employee2));",
				"answer": [
				  "true"
				]
			  },{
				"question": "let employee1 = { name: 'Jake' };let employee2 = { name: 'Janet' };let arr = [[employee1, 'ABC'],[employee2, '123']];let employees = new Map(arr);let list = [...employees.values()];console.log(list);",
				"answer": [
				  "['ABC', '123']"
				]
			  },{
				"question": "let employee1 = { name: 'Jake' };let employee2 = { name: 'Janet' };let arr = [[employee1, 'ABC'],[employee2, '123']];let employees = new Map(arr);let list = [...employees.entries()];console.log(list[0][1]);",
				"answer": [
				  "ABC"
				]
			  },{
				"question": "let employee1 = { name: 'Jake' };let employee2 = { name: 'Janet' };let employees = new WeakMap([[employee1, 'ABC'],[employee2, '123']]);employee1 = null;// wait for GC cycleconsole.log(employees.size);",
				"answer": [
				  "undefined (but the size is probably 1)"
				]
			  }
			]
		  },{
			"sub_menu_name": "Set and WeakSet",
			"set_and_weakSet": [
			  {
				"question": "let perks = new Set();perks.add('Car');perks.add('Super Long Vacation');console.log(perks.size);",
				"answer": [
				  "2"
				]
			  },{
				"question": "let perks = new Set();perks.add('Car');perks.add('Super Long Vacation');perks.add('Car');console.log(perks.size);",
				"answer": [
				  "2"
				]
			  },{
				"question": "let perks = new Set(['Car','10 Weeks Vacation','Jet']);console.log(perks.size);",
				"answer": [
				  "3"
				]
			  },{
				"question": "let perks = new Set(['Car','10 Weeks Vacation','Jet']);let newPerks = new Set(perks);console.log(newPerks.size);",
				"answer": [
				  "3"
				]
			  },{
				"question": "let perks = new Set(['Car','10 Weeks Vacation','Jet']);console.log(perks.has('Jet'));console.log(perks.has('Cool Hat'));",
				"answer": [
				  "true",
				  "false"
				]
			  },{
				"question": "let perks = new Set(['Car', 'Jet']);console.log(...perks.keys());console.log(...perks.values());console.log(...perks.entries());",
				"answer": [
				  "Car Jet",
				  "Car Jet",
				  "Car,Car Jet,Je"
				]
			  },{
				"question": "let perks = new Set([{ id: 800 },{ id: 800 }]);console.log(perks.size);",
				"answer": [
				  "2"
				]
			  },{
				"question": "let perks = new Set([1,'1']);console.log(perks.size);",
				"answer": [
				  "2"
				]
			  },{
				"question": "let perks = new WeakSet([1, 2, 3]);console.log(perks.size);",
				"answer": [
				  "Runtime Error: WeakSet.prototype.add: 'key' is not an object"
				]
			  },{
				"question": "let p1 = { name: 'Car' };let p2 = { name: 'Jet' };let perks = new WeakSet([p1, p2]);console.log(perks.size);",
				"answer": [
				  "undefined"
				]
			  },{
				"question": "let p1 = { name: 'Car' };let p2 = { name: 'Jet' };let perks = new WeakSet([p1, p2]);console.log(perks.has(p1));",
				"answer": [
				  "true"
				]
			  },{
				"question": "let p1 = { name: 'Car' };let p2 = { name: 'Jet' };let perks = new WeakSet([p1, p2]);p1 = null;console.log(perks.has(p1));",
				"answer": [
				  "false"
				]
			  }
			]
		  },{
			"sub_menu_name": "Subclassing",
			"subclassing": [
			  {
				"question": "class Perks extends Array {}let a = Perks.from([5, 10, 15]);console.log(a instanceof Perks);",
				"answer": [
				  "true"
				]
			  },{
				"question": "class Perks extends Array {}let a = Perks.from([5, 10, 15]);console.log(a.length);",
				"answer": [
				  "3"
				]
			  },{
				"question": "class Perks extends Array {}let a = Perks.from([5, 10, 15]);let newArray = a.reverse();console.log(newArray instanceof Perks);",
				"answer": [
				  "true"
				]
			  },{
				"question": "let perks = new Set(['Car','10 Weeks Vacation','Jet']);let newPerks = new Set(perks);console.log(newPerks.size);;",
				"answer": [
				  "3"
				]
			  },{
				"question": "class Perks extends Array {}let a = Perks.from([5, 10, 15]);let newArray = a.reverse();console.log(newArray instanceof Array);",
				"answer": [
				  "true"
				]
			  },{
				"question": "class Perks extends Array {sum() {let total = 0;this.map(v => total += v);return total;}}let a = Perks.from([5,10,15]);console.log(a.sum())",
				"answer": [
				  "30"
				]
			  }
			]
		  }		
		]
	  },
	  {
		"menu": "Promises",
		"sub_menu": [
		  {
			"sub_menu_name": "Promises",
			"promises": [
			  {
				"question": "function doAsync() {let p = new Promise(function (resolve, reject) {console.log('in promise code');setTimeout(function () {console.log('resolving...');resolve();}, 2000);});return p;}let promise = doAsync();",
				"answer": [
				  "in promise code",
				  "(2 second delay)",
				  "resolving..."
				]
			  },{
				"question": "function doAsync() {let p = new Promise(function (resolve, reject) {console.log('in promise code');setTimeout(function () {console.log('rejecting...');reject();}, 2000);});return p;}let promise = doAsync();",
				"answer": [
				  "in promise code",
				  "(2 second delay)",
				  "rejecting..."
				]
			  },{
				"question": "function doAsync() {// returns a Promise, will be rejected}doAsync().then(function () {console.log('Fulfilled!');},function () {console.log('Rejected!');});",
				"answer": [
				  "in promise code",
				  "(wait for resolution)",
				  "Rejected!"
				]
			  },{
				"question": "function doAsync() {// returns a Promise, will be resolved}doAsync().then(function () {console.log('Fulfilled!');},function () {console.log('Rejected!');});",
				"answer": [
				  "in promise code",
				  "(wait for resolution)",
				  "Fulfilled!"
				]
			  },{
				"question": "function doAsync() {// returns a Promise, will be rejected using:// reject('Database Error');}doAsync().then(function (value) {console.log('Fulfilled! ' + value);},function (reason) {console.log('Rejected! ' + reason);});",
				"answer": [
				  "in promise code",
				  "(wait for resolution)",
				  "Rejected! Database Error"
				]
			  },{
				"question": "function doAsync() {// returns a Promise, will be resolved using:// resolve('OK');}doAsync().then(function (value) {console.log('Fulfilled! ' + value);},function (reason) {console.log('Rejected! ' + reason);});",
				"answer": [
				  "in promise code",
				  "(wait for resolution)",
				  "Fulfilled! OK"
				]
			  },{
				"question": "function doAsync() {// returns a Promise, will be resolved using:// resolve('OK');}doAsync().then(function (value) {console.log('Fulfilled! ' + value);return 'For Sure';}).then(function(value) {console.log('Really! ' + value);});",
				"answer": [
				  "in promise code",
				  "(wait for resolution)",
				  "Fulfilled! OK",
				  "Really! For Sure"
				]
			  },{
				"question": "function doAsync() {// returns a Promise, will be rejected using:// reject('No Go');}doAsync().catch(function (reason) {console.log('Error: ' + reason);});",
				"answer": [
				  "(wait for resolution)",
				  "Error: No Go"
				]
			  }
			]
		  },{
			"sub_menu_name": "More Promise Features",
			"more_promise_features": [
			  {
				"question": "function doAsync() {let p = new Promise(function (resolve, reject) {console.log('in promise code');setTimeout(function () {resolve( getAnotherPromise() );}, 2000);});return p;}doAsync().then(function () { console.log('Ok') },function () { console.log('Nope')});",
				"answer": [
				  "in promise code",
				  "Nope"
				]
			  },{
				"question": "function doAsync() {return Promise.resolve('Some String');}doAsync().then(function (value) { console.log('Ok: ' + value) },function (reason) { console.log('Nope: ' + reason)});",
				"answer": [
				  "Ok: Some String"
				]
			  },{
				"question": "function doAsync() {return Promise.reject('Some Error');}doAsync().then(function (value) { console.log('Ok: ' + value) },function (reason) { console.log('Nope: ' + reason)});",
				"answer": [
				  "Nope: Some Error"
				]
			  },{
				"question": "let p1 = new Promise(...);let p2 = new Promise(...);Promise.all([p1, p2]).then(function (value) { console.log('Ok') },function (reason) { console.log('Nope') });// assume p1 resolves after 3 seconds,// assume p2 resolves after 5 seconds",
				"answer": [
				  "(5 second delay)",
				  "Ok"
				]
			  },{
				"question": "let p1 = new Promise(...);let p2 = new Promise(...);Promise.all([p1, p2]).then(function (value) { console.log('Ok') },function (reason) { console.log('Nope') });// assume p1 resolves after 1 second,// assume p2 is rejected after 2 seconds",
				"answer": [
				  "(2 second delay)",
				  "Nope"
				]
			  },{
				"question": "let p1 = new Promise(...);let p2 = new Promise(...);Promise.all([p1, p2]).then(function (value) { console.log('Ok') },function (reason) { console.log('Nope') });// assume p1 is rejected after 3 second,// assume p2 is rejected after 5 seconds",
				"answer": [
					"(3 second delay)",
					"Nope"
				]
			  },{
				"question": "let p1 = new Promise(...);let p2 = new Promise(...);Promise.race([p1, p2]).then(function (value) { console.log('Ok') },function (reason) { console.log('Nope') });// assume p1 resolves after 3 second,// assume p2 resolves after 5 seconds",
				"answer": [
				  "(3 second delay)",
				  "Ok"
				]
			  },{
				"question": "let p1 = new Promise(...);let p2 = new Promise(...);Promise.race([p1, p2]).then(function (value) { console.log('Ok') },function (reason) { console.log('Nope') });// assume p1 is rejected after 3 second,// assume p2 resolves after 5 seconds",
				"answer": [
					"(3 second delay)",
					"Nope"
				]
			  },{
				"question": "let p1 = new Promise(...);let p2 = new Promise(...);Promise.race([p1, p2]).then(function (value) { console.log('Ok') },function (reason) { console.log('Nope') });// assume p1 resolves after 4 second,// assume p2 is rejected after 5 seconds",
				"answer": [
					"(4 second delay)",
					"Ok"
				]
			  }
			]
		  }		  
		]
	  },
	  {
		"menu": "The Reflect API",
		"sub_menu": [
		  {
			"sub_menu_name": "Construction and Method Calls",
			"construction_and_method_calls": [
			  {
				"question": "console.log(typeof Reflect);",
				"answer": [
				  "object"
				]
			  },{
				"question": "class Restaurant {}let r = Reflect.construct(Restaurant);console.log(r instanceof Restaurant);",
				"answer": [
				  "true"
				]
			  },{
				"question": "class Restaurant {constructor(name, city) {console.log(`${name} in ${city}`);}}let r = Reflect.construct(Restaurant, ['Zoey's', 'Goleta']);",
				"answer": [
				  "Zoey's in Goleta"
				]
			  },{
				"question": "class Restaurant {constructor() {console.log(`new.target: ${new.target}`);}}function restaurantMaker() {console.log(`in restaurantMaker`);}let r = Reflect.construct(Restaurant, ['Zoey's', 'Goleta'], restaurantMaker);",
				"answer": [
				  "new.target:",
				  "function restaurantMaker() {",
				  "console.log(`in restaurantMaker`)}"				  
				]
			  },{
				"question": "class Restaurant {constructor() {this.id = 33;}show() {console.log(this.id);}}Reflect.apply(Restaurant.prototype.show, { id: 99 });",
				"answer": [
				  "99"
				]
			  },{
				"question": "class Restaurant {constructor() {this.id = 33;}show(prefix) {console.log(prefix + this.id);}}Reflect.apply(Restaurant.prototype.show, { id: 22 }, ['REST:']);",
				"answer": [
				  "REST:22"
				]
			  }
			]
		  },{
			"sub_menu_name": "Reflect and Prototypes",
			"reflect_and_prototypes": [
			  {
				"question": "class Location {constructor() {console.log('constructing Location');}}class Restaurant extends Location {}console.log(Reflect.getPrototypeOf(Restaurant));",
				"answer": [
				  "constructor() { console.log('constructing Location'); }"
				]
			  },{
				"question": "class Restaurant {}let setup = {getId() { return 88; }}let r = new Restaurant();Reflect.setPrototypeOf(r, setup);console.log(r.getId());",
				"answer": [
				  "88"
				]
			  }
			]
		  },{
			"sub_menu_name": "Reflect and Properties",
			"reflect_and_properties": [
			  {
				"question": "class Restaurant {constructor() {this.id = 8000;}}let r = new Restaurant();console.log(Reflect.get(r, 'id'));",
				"answer": [
				  "8000"
				]
			  },{
				"question": "class Restaurant {constructor() {this._id = 9000;}get id() {return this._id;}}let r = new Restaurant();console.log(Reflect.get(r, 'id', { _id: 88 }));",
				"answer": [
				  "88"
				]
			  },{
				"question": "class Restaurant {constructor()  {this.id = 9000;}}let r = new Restaurant();Reflect.set(r, 'id', 88);console.log(r.id);",
				"answer": [
				  "88"
				]
			  },{
				"question": "class Restaurant {constructor() {this._id = 9000;}set id(value) {this._id = value;}}let r = new Restaurant();let alt = {id: 88};Reflect.set(r, '_id', 88, alt);console.log(r._id)console.log(alt._id);",
				"answer": [
				  "9000",
				  "88"
				]
			  },{
				"question": "class Location {constructor() {this.city = 'Goleta';}}class Restaurant extends Location {constructor() {super();this.id = 9000;}}let r = new Restaurant();console.log(Reflect.has(r, 'id'));console.log(Reflect.has(r, 'city'));",
				"answer": [
				  "true",
				  "true"
				]
			  },{
				"question": "class Location {constructor() {this.city = 'Goleta';}}class Restaurant extends Location {constructor() {super();this.id = 9000;}}let r = new Restaurant();console.log(Reflect.ownKeys(r));",
				"answer": [
				  "['city', 'id']"
				]
			  },{
				"question": "class Restaurant {}let r = new Restaurant();Reflect.defineProperty(r, 'id', {value: 2000,configurable: true,enumerable: true});console.log(r['id']);",
				"answer": [
				  "2000"
				]
			  },{
				"question": "let rest = {id: 2000};console.log(rest.id);Reflect.deleteProperty(rest, 'id');console.log(rest.id);",
				"answer": [
				  "2000",
				  "undefined"
				]
			  },{
				"question": "let rest = {id: 2000};let d = Reflect.getOwnPropertyDescriptor(rest, 'id');console.log(d);",
				"answer": [
				  "{configurable: true, enumerable: true, value: 2000, writable: true}"
				]
			  }
			]
		  },{
			"sub_menu_name": "Reflect and Property Extensions",
			"reflect_and_property_extensions": [
			  {
				"question": "let rest = {id: 2000};rest.location = 'Goleta';console.log(rest.location);",
				"answer": [
				  "Goleta"
				]
			  },{
				"question": "let rest = {id: 2000};Reflect.preventExtensions(rest);rest.location = 'Goleta';console.log(rest.location);",
				"answer": [
				  "undefined"
				]
			  },{
				"question": "let rest = {id: 2000};console.log(Reflect.isExtensible(rest));Reflect.preventExtensions(rest);console.log(Reflect.isExtensible(rest));",
				"answer": [
				  "true",
				  "false"
				]
			  }
			]
		  },	  
		]
	  },
	  {
		"menu": "The Proxy API",
		"sub_menu": [
		  {
			"sub_menu_name": "Get by Proxy",
			"get_by_proxy": [
			  {
				"question": "function Employee() {this.name = 'Milton Waddams';this.salary = 0;}var e = new Employee();var p = new Proxy(e, {get: function(target, prop, receiver) {return 'Attempted access: ' + prop;}});console.log(p.salary);",
				"answer": [
				  "Attempted access: salary"
				]
			  },{
				"question": "function Employee() {this.name = 'Milton Waddams ';this.salary = 0;}var e = new Employee();var p = new Proxy(e, {get: function(target, prop, receiver) {return Reflect.get(target, prop, receiver);}});console.log(p.salary);",
				"answer": [
				  "0"
				]
			  },{
				"question": "function Employee() {this.name = 'Milton Waddams ';this.salary = 0;}var e = new Employee();var p = new Proxy(e, {get: function(target, prop, receiver) {if (prop === 'salary') return 'Denied';return Reflect.get(target, prop, receiver);}});console.log(p.salary);console.log(p.name);",
				"answer": [
				  "Denied",
				  "Milton Waddams"
				]
			  }
			]
		  },{
			"sub_menu_name": "Calling Functions by Proxy",
			"calling_functions_by_proxy": [
			  {
				"question": "function getId() {return 55;}var p = new Proxy(getId, {apply: function(target, thisArg, argumentsList) {return Reflect.apply(target, thisArg, argumentsList);}});console.log(p());",
				"answer": [
				  "55"
				]
			  }
			]
		  },{
			"sub_menu_name": "A Proxy as a Prototype",
			"a_proxy_as_a_prototype": [
			  {
				"question": "var t = {tableId: 99}var p = new Proxy({}, {get: function(target, prop, receiver) {return 'Property ' + prop + ' doesn\'t exist...';}});Object.setPrototypeOf(t, p);console.log(t.tableId);console.log(t.size);",
				"answer": [
				  "199",
				  "Property size doesn't exist"
				]
			  }
			]
		  },{
			"sub_menu_name": "Revocable Proxies",
			"revocable_proxies": [
			  {
				"question": "var t = {tableId: 99}let { proxy, revoke } = Proxy.revocable(t, {get: function(target, prop, receiver) {return Reflect.get(target, prop, receiver) + 100;}});console.log(proxy.tableId);revoke();console.log(proxy.tableId);",
				"answer": [
				  "199",
				  "Property size doesn't exist"
				]
			  }
			]
		  },
		  
		]
	  }
	]
  }


// WEBPACK FOOTER //
// ./src/json/content.js
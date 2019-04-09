	// BUDGET CONTROLLER
var budgetController = (function() {

	var Expense = function(id, description, value) {
		this.id = id;
		this.description = description;
		this.value = value;
	};

	var Income = function(id, description, value) {
		this.id = id;
		this.description = description;
		this.value = value;
	};

	var data = {
		allItems: {
			exp:[],
			inc:[]
		},
		totals: {
			exp: 0,
			inc: 0
		}
	};
})();


	// UI CONTROLLER
var UIController = (function() {

	var DOMstrings = {
		inputType: '.add__type',
		inputDescription: '.add__description',
		inputValue: '.add__value',
		inputBtn: '.add__btn',
	};

	return {
		getInput: function() {
			return {
				type: document.querySelector(DOMstrings.inputType).value, //inc or exp
				description: document.querySelector(DOMstrings.inputDescription).value,
				value: document.querySelector(DOMstrings.inputValue).value
			};
		},
		getDOMstrings: function() {
			return DOMstrings;
		}
	};
})();


	// GLOBAL CONTROLLER
var controller =(function(budgetCtrl, UICtrl) {

	var setupEventLIsteners = function() {
		var DOM = UICtrl.getDOMstrings();

		document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

		document.addEventListener('keypress', function(event) {
			if (event.keyCode === 13 || event.which === 13) {
				ctrlAddItem();
			}
		});
	};



	var ctrlAddItem = function() {

		// 1. Get the value 
		var input = UICtrl.getInput();

		// 2. add to the controller

		// 3. add to the UI

		// 4.Calculate Budget

		// 5.Display Budget on UI 
	}

	return {
		init: function() {
			console.log('Application has started');
			setupEventLIsteners();
		}
	};

})(budgetController, UIController);

controller.init();
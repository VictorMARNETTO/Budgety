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

	return {
		addItem: function(type, des, val) {
			var newItem, ID;
			
			if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            // ID = 0 (Par default)
            } else { 
                ID = 0;
			};

			if (type === 'exp') {
				newItem = new Expense(ID, des, val);
			} else if(type ==='inc') {
				newItem = new Income(ID, des, val);
			};

			data.allItems[type].push(newItem);
			return newItem;
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
		incomeContainer: '.income__list',
		expensesContainer: '.expenses__list',
	};

	return {
		getInput: function() {
			return {
				type: document.querySelector(DOMstrings.inputType).value, //inc or exp
				description: document.querySelector(DOMstrings.inputDescription).value,
				value: document.querySelector(DOMstrings.inputValue).value
			};
		},

		addListItem: function (obj, type) {
			var html, newHtml, element;
			// Create HTML string with placeholder text

			console.log(obj)

			if (type === 'inc') {
				element = DOMstrings.incomeContainer;

				html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
			
			} else if (type === 'exp') {
				element = DOMstrings.expensesContainer;

				html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
			
			}

			// Replace the placeholder text with some actual data
			newHtml = html.replace('%id%', obj.id);
			newHtml = newHtml.replace('%value%', obj.value);
			newHtml = newHtml.replace('%description%', obj.description);

			// Insert the HTML into the DOM
			document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
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
		newItem = budgetCtrl.addItem(input.type, input.description, input.value);

		// 3. add to the UI
		UICtrl.addListItem(newItem, input.type);

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
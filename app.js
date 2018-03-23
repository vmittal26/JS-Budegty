//Access method to replace document.querySelector
function $(accessor) {
    return document.querySelector(accessor);

}
//Budget Controller

var budgetController = (function () {
    var Expense = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    }
    var Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    }

    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    }

    return {
        addItem: function (type, description,value) {
            //CALCULATE ID
            var newItem,ID;
            
            if(data.allItems[type].length>0){
                ID = data.allItems[type][allItems[type].length-1]+1
            }else{
                ID=0;
            }

            if(type==='exp'){
                newItem = new Expense(ID,desc,value);
            }else if(type==='inc'){
                newItem = new Income(ID,description,value);
            }
        }
    }
})();

//UI Controller
var UIController = (function () {
    var DOMStrings = {
        type: '.add__type',
        description: '.add__description',
        value: '.add__value',
        inputBtn: '.add__btn'
    };

    return {
        getInput: function () {
            return {
                type: $(DOMStrings.type).value,
                description: $(DOMStrings.description).value,
                value: $(DOMStrings.value).value
            }
        },
        getDOMStrings: function () {
            return DOMStrings;
        }
    }
})();

//Global Controller
var controller = (function (budgetController, UIController) {

    var setUpEventListeners = function () {
        var DOM = UIController.getDOMStrings();
        var addItem = function () {
            var input = UIController.getInput();
            console.log(input);
        }

        $(DOM.inputBtn).addEventListener('click', addItem);

        document.addEventListener('keypress', function (event) {
            if (event.keyCode === 13 || event.which === 13) addItem();
        });
    }

    return {
        init: function () {
            setUpEventListeners();
            console.log("Application has started!")
        }
    }

})(budgetController, UIController);


controller.init();
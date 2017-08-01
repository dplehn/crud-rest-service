var Person;
Person = function (pName, pSurname) {
    this.name = pName;
    this.surname = pSurname;
};

var i;
i = new Person("Blake", "Tom");


console.log(i);

var dummy = 3 + Math.round(5.88888);
console.log(dummy);


// Closure
(function() {

    function decimalAdjust(type, value, exp) {
        // If the exp is undefined or zero...
        if (typeof exp === 'undefined' || +exp === 0) {
            return Math[type](value);
        }
        value = +value;
        exp = +exp;
        // If the value is not a number or the exp is not an integer...
        if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
            return NaN;
        }
        // Shift
        value = value.toString().split('e');
        value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
        // Shift back
        value = value.toString().split('e');
        return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
    }

    // Decimal round
    if (!Math.round10) {
        Math.round10 = function(value, exp) {
            return decimalAdjust('round', value, exp);
        };
    }
    // Decimal floor
    if (!Math.floor10) {
        Math.floor10 = function(value, exp) {
            return decimalAdjust('floor', value, exp);
        };
    }
    // Decimal ceil
    if (!Math.ceil10) {
        Math.ceil10 = function(value, exp) {
            return decimalAdjust('ceil', value, exp);
        };
    }
})();




// Round
console.log(Math.round10(55.549, -1));  // 55.5
console.log(Math.round10(55, 1));       // 60
console.log(Math.round10(54.9, 1));     // 50
console.log(Math.round10(-55.55, -1));  // -55.5
console.log(Math.round10(-55.551, -1)); // -55.6
console.log(Math.round10(-55, 1));      // -50
console.log(Math.round10(-55.1, 1));    // -60
console.log(Math.round10(55.55, -1));   // 55.6
console.log(Math.round10(1.005, -2));   // 1.01 -- compare this with Math.round(1.005*100)/100 above
// Floor
console.log(Math.floor10(55.59, -1));   // 55.5
console.log(Math.floor10(59, 1));       // 50
console.log(Math.floor10(-55.51, -1));  // -55.6
console.log(Math.floor10(-51, 1));      // -60
// Ceil
console.log(Math.ceil10(55.51, -1));    // 55.6
console.log(Math.ceil10(51, 1));        // 60
console.log(Math.ceil10(-55.59, -1));   // -55.5
console.log(Math.ceil10(-59, 1));       // -50

(function () {

    func1 = function () {
        console.log("func1");

    }
})();

func1();




var Modul = (function () {

    // Private Objekte
    var privateVariable = "privat";
    function privateFunktion () {
        console.log("privateFunktion wurde aufgerufen\n" +
            "Private Variable: " + privateVariable);
    }

    // Gebe öffentliches Schnittstellen-Objekt zurück
    return {
        öffentlicheMethode : function () {
            console.log("öffentlicheMethode wurde aufgerufen\n" +
                "Private Variable: " + privateVariable);
            privateFunktion();
        },

        printHallo: function () {
            console.log("Hallo");
        }
    };

})();

// Rufe öffentliche Methode auf
Modul.öffentlicheMethode();
Modul.printHallo();


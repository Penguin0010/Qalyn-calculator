var sum_skill = 0;
var educSum = 0;
var famSum = 0;
var sum = 0;
function getSelectedCheckboxValues(name) {
    const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
    let values = [];
    checkboxes.forEach((checkbox) => {
        values.push(checkbox.value);
        if(checkbox.value == "dombra") {
            sum_skill += 100;
        }
        else if(checkbox.value == "cook") {
            sum_skill += 200;
        }
        else if(checkbox.value == "character"){
            sum_skill += 150;
        }
        else if(checkbox.value == "sing"){
            sum_skill += 100;
        }
        else if(checkbox.value == "attitude"){
            sum *= 0.85;
        }
        else if(checkbox.value == "character"){
            sum *= 0.9;
        }
        else if(checkbox.value == "person"){
            sum -= 200;
        }
    });

    return values;
}

function getSelectedRadioValues() {
    var ele = document.getElementsByName('age');
    let val = "string";

    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked)
            val = ele[i].value;
    }

    if(val == "young") {
        sum *= 1.5;
    }
    else if(val == "old") {
        sum *= 1.2;
    }
    else if(val == "prettyOld") {
        sum *= 0.95;
    }
}

const btn = document.querySelector('#submit');
btn.addEventListener('click', (event) => {
    getSelectedCheckboxValues('groom_skill');
    sum = famSum + sum_skill;
    getSelectedRadioValues();
    getSelectedCheckboxValues('groom_rep');


window.open("")
    document.getElementById("result").innerHTML
        = "\nTotal price is: " + sum;
});



function calculate(sel) {
    var val = sel.options[sel.selectedIndex].value;
    if (val == "bachelor"){
        var result1 = 500*1.5;
        educSum = result1;
    }
    else if (val == "college") {
        var result2 = 500*1.2;
        educSum = result2;
    }
    else if (val == "high_school") {
        var result3 = 500*1.05;
        educSum = result3;
    }
    else if (val == "middle_school") {
        var result4 = 500*0.9;
        educSum = result4;
    }
}

function familyCalc(sel) {
    var val = sel.options[sel.selectedIndex].value;
    if (val == "upper_class") {
        var result1 = educSum * 2;
        famSum = result1;
    } else if (val == "middle_class") {
        var result2 = educSum * 1.5;
        famSum = result2;
    } else if (val == "lower_class") {
        var result3 = educSum * 1.2;
        famSum = result3;
    }
}


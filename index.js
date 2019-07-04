
$(document).ready(function(){
    var goal = 0;
    var goal_str = "";
    var known_bf = undefined;

    $(".bf-goal").click(function(){
        $(this).removeClass("inactive");
        $(".mg-goal").addClass("inactive");
        $(".ma-goal").addClass("inactive");
        $(".bf").slideDown(500);
        goal_str = $(this).attr("value");
        if (goal != 1) {
            goal = 1;
            $(".result").addClass("hidden");
        }
    });

    $(".mg-goal").click(function(){
        $(this).removeClass("inactive");
        $(".bf-goal").addClass("inactive");
        $(".ma-goal").addClass("inactive");
        $(".bf").slideDown(500);
        goal_str = $(this).attr("value");
        if (goal != 2) {
            goal = 2;
            $(".result").addClass("hidden");
        }
    });

    $(".ma-goal").click(function(){
        $(this).removeClass("inactive");
        $(".bf-goal").addClass("inactive");
        $(".mg-goal").addClass("inactive");
        $(".bf").slideDown(500);
        goal_str = $(this).attr("value");
        if (goal != 3) {
            goal = 3;
            $(".result").addClass("hidden");
        }
    });

    $(".yes").click(function(){
        $(this).removeClass("inactive");
        $(".no").addClass("inactive");
        $(".body-fat-yes").slideDown(500);
        $(".body-fat-no").slideUp(500).fadeOut(500);
        $(".pa-factor").removeClass("hidden");
        known_bf = true;
    });

    $(".no").click(function(){
        $(this).removeClass("inactive");
        $(".yes").addClass("inactive");
        $(".body-fat-no").slideDown(500);
        $(".body-fat-yes").slideUp(500).fadeOut(500);
        $(".pa-factor").removeClass("hidden");
        known_bf = false;
    });

    $(".pa-factor").change(function(){
        $(".calculate").slideDown(500);
    })



    function calc_cals(known_bf, kg, pa, bf=undefined, age=undefined, ht=undefined, gender=undefined) {
        console.log(known_bf, kg, pa, bf, age, ht, gender);
        if (known_bf == true) {
            return Math.round((370+(21.6*(kg-(kg*(bf/100)))))*pa);
        } else {
            if (gender == "male") {
                return Math.round(((kg*10)+(ht*6.25)-(5*age)+5)*pa);
            } else {
                return Math.round(((kg*10)+(ht*6.25)-(5*age)-161)*pa);
            }
        }
    }; 

    function calc_macros(cals, goal, known_bf, pa, bf=undefined, kg=undefined) {
        var protein = 0;
        var carbs = 0;
        var fats = 0;
        if (known_bf == true) {
            // If user knowns his BF
            var ffm = (kg-(kg*(bf/100)));
            if (goal == 1) {
                // Lose bf. 
                cals = cals-500;
                protein = ffm * 2.3;
                fats = ffm * .9;
                carbs = (cals-(protein*4)-(fats*9))/4;
            } else if (goal == 2) {
                // Muscle gain
                cals = cals+250;
                protein = ffm * 1.8;
                fats = (cals*.25)/9;
                carbs = (cals-(protein*4)-(fats*9))/4;
            } else {
                // Maintenance goal
                protein = ffm * 2.6;
                fats = ffm * 1.1;
                carbs = (cals-(protein*4)-(fats*9))/4;
            }
        } else {
            // User doesn't know his BF
            lbs = kg * 2.2;
            if (goal == 1) {
                // Lose bf. 
                cals = cals-500;
                protein = (lbs * .8);
                fats = (lbs * .35);
                carbs = (cals-(protein*4)-(fats*9))/4;
            } else if (goal == 2) {
                // Muscle gain
                cals = cals+250;
                protein = (lbs * .7);
                fats = (cals * .25)/9;
                carbs = (cals-(protein*4)-(fats*9))/4;
            } else {
                // mainteance 
                protein = (lbs * .9);
                fats = (lbs * .40);
                carbs = (cals-(protein*4)-(fats*9))/4;
            }
        }
        return [Math.round(protein), Math.round(carbs), Math.round(fats)]
    }; 

    $(".calculate").click(function(){
        var pa = parseFloat($("input[name='pa']:checked").val());
        var meal_count = parseInt($("input[id='meal-count']").val());
        if (known_bf == true) {
            var wt = $("input[id='weight-yes']").val();
            var kg = Math.round(wt/2.2);
            var bf = parseInt($("input[id='body-fat']").val());
            var result = calc_cals(known_bf, kg, pa, bf);
            var macros = calc_macros(result, goal, known_bf, pa, bf, kg);
        } else {
            var wt = $("input[id='weight-no']").val();
            var kg = Math.round(wt/2.2);
            var age = parseInt($("input[id='age']").val());
            var gender = $("input[name='gender']:checked").val();
            var feet = parseFloat($("input[id='feet']").val());
            var inches = parseFloat($("input[id='inches']").val());
            var ht = Math.round(((feet*12)+inches)*2.54);
            var result = calc_cals(known_bf, kg, pa, bf=undefined, age, ht, gender);
            var macros = calc_macros(result, goal, known_bf, pa, bf=undefined, kg);
        }
        var pro = macros[0];
        var pro_per = Math.round(pro/meal_count);
        var carbs = macros[1];
        var carbs_per = Math.round(carbs/meal_count);
        var fats = macros[2];
        var fats_per = Math.round(fats/meal_count);
        if (goal == 1) {
            
            $(".protein").html(pro + " grams of protein");
            $(".carbs").html(carbs + " grams of carbs");
            $(".fats").html(fats + " grams of fats");
        } else if (goal == 2) {
 
            $(".protein").html(pro + " grams of protein");
            $(".carbs").html(carbs + " grams of carbs");
            $(".fats").html(fats + " grams of fats");
        } else {

            $(".protein").html(pro + " grams of protein");
            $(".carbs").html(carbs + " grams of carbs");
            $(".fats").html(fats + " grams of fats");
        }
        $(".goal-str").html(goal_str);
        $(".result").removeClass("hidden");
    });
});
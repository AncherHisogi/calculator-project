var topDisplay = document.getElementById("topDisplay");
var botDisplay = document.getElementById("botDisplay");
var numbers = [];
var x;
var y; //switch variable for the buttons
var z; //result variable for function eq


function insert(num)
{
    topDisplay.innerHTML = topDisplay.innerHTML+num;
    x = topDisplay.innerHTML;
    x = parseFloat(x);
}


function dot()
{
    topDisplay.innerHTML = topDisplay.innerHTML+".";
    console.log("dot");
}

function clean()
{
    topDisplay.innerHTML = "";
    numbers = [];
}

function eq()
{
    if(numbers.length == 0)
    {
        location.reload();
    }
    else
    {
        numbers.push(x);
        console.log("numbers: "+numbers);
        calc(y);
        console.log("eq last="+z);
        numbers.length = 0;
        numbers[0] = z;
        topDisplay.innerHTML = "";
        console.log("current array"+numbers);
        botDisplay.innerHTML = z;
    }
}

function operator()
{
    if (topDisplay.innerHTML == "")

    {
        console.log("nothing")
    }

    else
    {
        numbers.push(x);
        topDisplay.innerHTML = "";
    }
            
    calc.apply(null, arguments);
}

function negative()
{
    topDisplay.innerHTML = "-"+topDisplay.innerHTML;
}

function calc(num1)
{
    y = num1;
    switch(y)
    {
        case 1:
            z = numbers[0]+numbers[1];
            console.log("plus");
            break;
        case 2:
            z = numbers[0]-numbers[1];
            console.log("minus");
            break;
        case 3:
            z = numbers[0]*numbers[1];
            console.log("multiply");
            break;
        case 4:

            if(numbers[1] == "0")
                {
                    location.reload();
                }
            else 
                {
                    z = numbers[0]/numbers[1];
                }

            console.log("devide");
            break;

        case 5:
            z = Math.sqrt(numbers[0]);
            topDisplay.innerHTML = z;
            console.log("sqrt"); 
            break;

    }
}


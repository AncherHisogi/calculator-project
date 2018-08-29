var topDisplay = document.getElementById("topDisplay");
var botDisplay = document.getElementById("botDisplay");
var numbers = [];
var x;
var y; //switch variable for the buttons
var z; //result variable for function eq


function insert(num)
{
    
    if(topDisplay.innerHTML.length > 12)
    {
        alert("I'm not that smart!");
    }
    else
    {
    topDisplay.innerHTML = topDisplay.innerHTML+num;
    x = topDisplay.innerHTML;
    x = parseFloat(x);
    }
}
function insert00(num)
{
    if(topDisplay.innerHTML.length > 12)
    {
        alert("I'm not that smart!");
    }
    else
    {
    topDisplay.innerHTML = topDisplay.innerHTML+"00";
    x = topDisplay.innerHTML;
    x = parseFloat(x);
    }
}


function dot()
{
    

    if (topDisplay.innerHTML.includes("."))
    {
        console.log("dot");
    }
    else
    { 
        topDisplay.innerHTML = topDisplay.innerHTML+".";
        console.log("dot");
    }

}

function clean()
{
    topDisplay.innerHTML = "";
    numbers = [];
    botDisplay.innerHTML = "";
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
    if (topDisplay.innerHTML.length < 2)
    {
        topDisplay.innerHTML = "-"+topDisplay.innerHTML;
    }

    if (topDisplay.innerHTML.length == 2)
    {
        topDisplay.innerHTML = "";
    }
}

function calc(num1)
{
    y = num1;
    switch(y)
    {
        case 1:
            z = numbers[0]+numbers[1];
                if (numbers.length == 2)
                {
                    botDisplay.innerHTML = z;
                    numbers[0] = z;
                    numbers.length = 1;
                } 
            console.log("plus");
            break;
        case 2:
            z = numbers[0]-numbers[1];
                if (numbers.length == 2)
                {
                    botDisplay.innerHTML = z;
                    numbers[0] = z;
                    numbers.length = 1;
                } 
            console.log("minus");
            break;
        case 3:
            z = numbers[0]*numbers[1];
                if (numbers.length == 2)
                {
                    botDisplay.innerHTML = z;
                    numbers[0] = z;
                    numbers.length = 1;
                } 
            console.log("multiply");
            break;
        case 4:

            if(numbers[1] == "0")
                {
                    alert("No no no");
                    location.reload();
                }
            else 
                {
                    z = numbers[0]/numbers[1];
                        if (numbers.length == 2)
                        {
                            botDisplay.innerHTML = z;
                            numbers[0] = z;
                            numbers.length = 1;
                        } 
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


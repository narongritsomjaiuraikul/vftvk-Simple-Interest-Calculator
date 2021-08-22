function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal*years*rate/100;
    var year = new Date().getFullYear()+parseInt(years);
    var amount = String(Number(principal) + Number(interest));
    if(principal>0)
    {
        document.getElementById("result").innerHTML="If you deposit <mark>"+principal+"</mark>,\<br\>at an interest rate of <mark>"+rate+"%</mark>\<br\>You will receive an amount of <mark>"+interest+"</mark>,\<br\>in the year <mark>"+year+"</mark>\<br\>"
        return true
    }
    else
    {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return false
    }
}

function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}

function check_principal()
{
    var principal = document.getElementById("principal").value;
    if(principal>0)
    {
        return true

    }
    else
    {
        alert("Please input positive number");
        document.getElementById("principal").focus();
        return false
    }


}
var d;

function project()
{
    if(d==1)
    {
        document.getElementById("pro").style.display="inline";
        return d=0;
    }
    else
    {
        document.getElementById("pro").style.display="none";
        return d=1;
    }
}
function cert()
{
    if(d==1)
    {
        document.getElementById("cert").style.display="inline";
        return d=0;
    }
    else
    {
        document.getElementById("cert").style.display="none";
        return d=1;
    }
}
// window.onload=function()
// {
//     var hide_div=document.getElementById("pro");
//     document.onclick=function(div)
//     {
//         if(div.target.id!='pro')
//             hide_div.style.display='none';
//     }
// }
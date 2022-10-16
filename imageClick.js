var image =  document.getElementById("imgClickAndChange");

function changeColor()
{
    if (image.getAttribute('src') == "images/E.png")
    {
        image.src = "images/E.png";
    }
    else
    {
        image.src = "images/skel.gif";
    }
}
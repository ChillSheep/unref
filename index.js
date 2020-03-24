var pathname = "";
pathname += window.location;
pathname = pathname.substring(pathname.indexOf("?")+1);

if (pathname!=window.location)
{
    if (pathname.startsWith('https://') == false || pathname.startsWith('http://') == false)
        pathname="http://" + pathname;
    window.location.href = pathname;
}
function unref()
{
    var normalLink = document.getElementById("link").value;
    if (normalLink)
    {
        var anonimizedUrl = window.location + "?" + normalLink;
        document.getElementById("toShow").classList.remove("hidden");
        document.getElementById("anonurl").value = anonimizedUrl;
        document.getElementById("bbcode").value = "[url=" + anonimizedUrl + "]" + normalLink + "[/url]";
        //<a href="https://href.li/?http://example.com/">href.li</a>
        document.getElementById("htmlUrl").value = '<a href="' + anonimizedUrl + '">' + normalLink + "</a>";
    }
}

// while(temp.contains('//'))
// {
//     temp = temp.substring(temp.indexof('//')+1);
// }
 var $=function(id) { return document.getElementById(id); };
 
 var search = [ // Search Engines
     ["", "https://www.startpage.com/do/search?query="], // Startpage
     ["!g", "https://www.google.com/search?q="], // Google
     ["!d", "https://duckduckgo.com/html?q="], // DuckDuckgo
     ["!i", "https://www.google.com/search?tbm=isch&q="], // Google Images
     ["!y", "https://www.youtube.com/results?search_query="], // YouTube
     ["!w", "http://en.wikipedia.org/w/index.php?search="], // Wikipedia
     ["!p", "https://translate.google.com/"], // Translate
     ["!s", "http://reddit.com/r/"], // Subreddit
     ["!u", "https://www.urbandictionary.com/define.php?term="], // Urban dictionary
     ["!b", "https://www.bing.com/images/search?q="] // Bing Images
     
 ];
 
 var i,ss="";
 function init() {
     for(i=0;i<search.length;i++) if(search[i][0]=="") ss=search[i][1];
     if(ss=="") alert("Error: Missing default search engine!");
     startTime();
 }
 
 function handleQuery(e,q) { // Handle search query
     var key=e.keyCode || e.which;
  
     if(key==13) { // Enter
         //var x=q.lastIndexOf("!");
         var x=q.indexOf("!");
  
         //if(x!=-1 && x>=q.length-2) {
         if(x==0) {
             for(var i=0;i<search.length;i++) {
                 //if(search[i][0]==q.substr(x)) { // Find "*!i"
                 if(search[i][0]==q.substr(0,2)) { // Find "!i*"
                     //window.open(search[i][1]+q.substr(0,x).replace(/&/g,"%26"), "_self");
                     window.open(search[i][1]+q.substr(2).replace(/&/g,"%26"), "_self");
  
                     $('q').value="";
                     $('q').focus();
                     return true;
                 }
             }
             // Invalid "!i", use default
             //window.open(ss+q.substr(0,x).replace(/&/g,"%26"));
             window.open(ss+q.substr(2).replace(/&/g,"%26"));
} 
 	
 	else {
		if ((q.includes(".com")) || (q.includes(".net")) || (q.includes(".org")) || (q.includes(".pt"))) {
 		window.open("http://" + q, "_self");
 	}
             
 	else {
 	    // "!i" where not specified, use default
             window.open(ss+q.replace(/&/g,"%26"), "_self");
 	}
 	}
  
         $('q').value="";
         $('q').focus();
     }
}

function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
 console.log(bgColor);

var myCss = "a:link, a:visited, a:active { text-decoration: none; color: " + bgColor + "; }";
var myStyle = document.createElement('style');
myStyle.type = 'text/css';
myStyle.styleSheet ? myStyle.styleSheet.cssText = myCss : 
    myStyle.appendChild(document.createTextNode(myCss));

document.getElementsByTagName("head")[0].appendChild(myStyle);

}
random_bg_color()

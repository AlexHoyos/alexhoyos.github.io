var globalHeight = 0;
var actualY = 0
var scrolling = false
window.onload = webpageLoaded;

window.addEventListener('resize', registerHeight)

window.document.onscroll = function(event){

   if(scrolling === false){
        //console.log(window.scrollY)
        scrolling = true
        var newPosition = 0;
        if(actualY < window.scrollY){
            // Going down
            actualY = window.scrollY
            //console.log(Math.ceil(actualY/globalHeight))
            newPosition = Math.ceil(actualY/globalHeight)*globalHeight
        } else {
            // Going up
            actualY = window.scrollY
            newPosition = Math.floor(actualY/globalHeight)*globalHeight
        }
        actualY = newPosition
        //console.log(actualY + ' '+globalHeight)
        window.scrollTo({
            top: newPosition,
            left:0,
            behavior: 'smooth'
        })

   } else {
        actualY = window.scrollY
        console.log(actualY%globalHeight)
        if(Math.floor(actualY%globalHeight) < 2 || Math.ceil(actualY%globalHeight) < 2){
            scrolling = false
        }
   }
    
    

}

function webpageLoaded() {
    registerHeight();
    loadLang()
}

function registerHeight(){
    globalHeight = window.innerHeight
}

function loadLang(lang = "en-US"){

    if(lang != "en-US")
        lang = "en-US"

    $.ajax({
        method: 'GET',
        url: './assets/lang/'+lang+'.json',
    }).done(function(res){
        console.log(res)
        // HOME
        $("#home_description").text(res.home.description)
        $("#home_download").text(res.home.download)
        // ABOUT
        $("#about_title").text(res.about.title)
        $("#about_description").text(res.about.description)
        $("#about_projects").text(res.about.projects)
        // PROJECTS
        $("#projects_title").text(res.projects.title)
        $("#projects_github").text(res.projects.github)
        
    })

}

function goTo(id){
    let page = document.getElementById(id)
    page.scrollIntoView({
        behavior: 'smooth'
    })
}


function activateNavItem(item){
    item.addClass('btn-active').siblings().removeClass('btn-active');
}

function leaveSlide(origin, destination, direction){
    activateNavItem($('#menu').find('a').eq(destination.index));
}

Vue.leaveSlide = function(origin, destination, direction) {
    leaveSlide(origin, destination, direction);
}

var home = new Vue({
    el: '#portfolio',
    data (){
        return {
            lang: null,
            projects: null,
            fullpage: {
                autoScrolling: true,
                anchors: ['home', 'about', 'projects', 'contact'],
                onLeave: function(origin, destination, direction){
                    Vue.leaveSlide(origin, destination, direction)
                }
            }
        }
    },
    mounted() {
        
        axios
            .get('./assets/lang/en-US.json')
            .then(response => {
                this.lang = response.data
                this.projects = response.data.projects.projects
                
            })

    },
})

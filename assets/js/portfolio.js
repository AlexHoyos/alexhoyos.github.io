document.onload = function () {

}

var home = new Vue({
    el: '#app',
    data (){
        return {
            lang: null,
            projects: null
        }
    },
    mounted() {
        axios
            .get('./assets/lang/en-US.json')
            .then(response => {
                this.lang = response.data
                this.projects = response.data.projects.projects
            })
    }
})

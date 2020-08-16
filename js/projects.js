new Vue({
    el: '#project-list',
    data() {
        return {
            projects: []
        }
    },
    methods: {
        linkToGitHub(link) {
            window.location.href = link
        },
        filterProjects(projects) {
            let result = []
            projects.forEach((project) => {
                result.push({
                    "name": project.name,
                    "description": project.description,
                    "language": project.language,
                    "link": `https://github.com/Injector1/${project.name}`
                })
            })
            return result
        }
    },
    async mounted() {
        await fetch("https://api.github.com/users/Injector1/repos")
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                this.projects = data
            })
            .catch((e) => {
                console.log(e)
            })

        this.projects = this.filterProjects(this.projects)
        console.log(this.projects)
    }
})

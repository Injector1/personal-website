new Vue({
    el: '#project-list',
    data() {
        return {
            projects: [
                {
                    title: 'Project name',
                    description: 'Project description',
                    link: 'https://github.com/',
                    tags: [
                        'Tag 1',
                        'Tag 2',
                        'Tag 3'
                    ]
                },
                {
                    title: 'Project name',
                    description: 'Project description',
                    link: 'https://github.com/',
                    tags: [
                        'Tag 1',
                        'Tag 2',
                        'Tag 3'
                    ]
                },
                {
                    title: 'Project name',
                    description: 'Project description',
                    link: 'https://github.com/',
                    tags: [
                        'Tag 1',
                        'Tag 2',
                        'Tag 3'
                    ]
                },
                {
                    title: 'Project name',
                    description: 'Project description',
                    link: 'https://github.com/',
                    tags: [
                        'Tag 1',
                        'Tag 2',
                        'Tag 3'
                    ]
                },
            ]
        }
    },
    methods: {
        linkToGitHub(link) {
            window.location.href = link
        }
    }
})

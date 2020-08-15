new Vue({
    el: ".technologies",
    data() {
        return {
            technologies: [
                {
                    language: 'Python',
                    description: 'Django, Flask, Data Parsing',
                },
                {
                    language: 'JS/HTML/CSS',
                    description: 'Creating websites'
                },
                {
                    language: 'Dart/Flutter',
                    description: 'Creating mobile apps'
                }
            ]
        }
    }
})
Vue.createApp({
    data() {
        return {
            perspective: 100,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
        }
    },
    methods: {
        reset() {
            console.log('reset button clicked')
            this.perspective = 100
            this.rotateX = 0
            this.rotateY = 0
            this.rotateZ = 0
        },
        copy() {
            console.log('copy button clicked')
            const el = document.createElement('textarea')

            el.setAttribute('readonly', '')
            el.style.position = 'absolute'
            el.style.left = '-9999px'

            // use computed value
            el.value = `transform:${this.box.transform}`

            document.body.appendChild(el)
            el.select()
            document.execCommand('copy')
            document.body.removeChild(el)
            alert('Copied!')
        }
    },
    computed: {
        box() {
            return {
                transform: `perspective(${this.perspective}px)
                rotateX(${this.rotateX}deg)
                rotateY(${this.rotateY}deg)
                rotateZ(${this.rotateZ}deg)
                `
            }
        }
    }
}).mount('#app')


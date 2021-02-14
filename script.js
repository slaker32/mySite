document.addEventListener('DOMContentLoaded',()=> {
    const search_btn = document.querySelector('.fa-search')
    const input = document.querySelector('form input')
    class Sidebar {
        constructor(burger,header,content){
            this.burger = document.querySelector(burger),
            this.header = document.querySelector(header),
            this.content = document.querySelector(content)

        }
        state = {
            currentWidth: 0,
            closed: false
        }
        initSidebar(){
            this.state.currentWidth = this.content.offsetWidth
            this.header.style.right = `${this.state.currentWidth}px`
            window.addEventListener('resize',()=>{
                this.state.currentWidth = this.content.offsetWidth
                this.header.style.right = `${this.state.currentWidth}px`
                search_init()
            })
        }
        showSidebar() {
            this.initSidebar()
            this.burger.addEventListener('click',()=>{
                if(!this.state.closed) {
                    this.state.currentWidth = 0
                    this.header.style.right = `${this.state.currentWidth}px`
                    this.state.closed = true
                } else {
                    this.state.currentWidth = this.content.offsetWidth
                    this.header.style.right = `${this.state.currentWidth}px`
                    this.state.closed = false
                }
            })
        }
    }


    const sidebar = new Sidebar('.burger','header','.content')
    sidebar.showSidebar()
    const search_init = () => {
        if(search_btn) {
            search_btn.addEventListener('click',() => {
                input.classList.toggle('show_input')
            })
        }
        
    }
    search_init()




})
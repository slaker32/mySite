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


    class SearchData {
        constructor(input,dataArray) {
            this.input = document.querySelector(input),
            this.dataArray = document.querySelectorAll(dataArray)
        }
        state = {
            inputData : ''
        }
        clickData() {
            this.input.addEventListener('input',() => {
                this.state.inputData = this.input.value
                console.log(this.input.value)
                this.showResult()
            })
        }
        showResult() {
            this.dataArray.forEach((item) => {
                const title = item.querySelector('.work_item_title a').textContent
                if (!title.toLowerCase().includes(this.state.inputData)) {
                    item.style.display = 'none'
                } else {
                    item.style.display = 'grid'
                }
            })
        }

    }



    const search = new SearchData('.search_input','.work_item')
    search.clickData()
})
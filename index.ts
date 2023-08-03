class YouTube { // основной класс
    field

    constructor(appId){
        this.field = document.getElementById(appId)
    }

    showContent(){}
    showMenu(){}
    render(){
        this.showContent()
        this.showMenu()
    }
}

class Content { //поле с подборкой видео
    videos = []
    field = null

    showCards(){}
}

class Menu {
    title: string
    icon: string    
}

class Video {
    preview: string
    title: string
    channel: string
    length: string
    link: string
    views: number
    date: Date

    showCard(){}
}

const site = new YouTube("app")


//create a class called Button
//create a constructor with color and text as instance variables
// create 2 methods: showInfo and create

class Button {

    constructor(color, text){
        this.color = color;
        this.text = text;
    }

    showInfo(){
        console.log(`color: ${this.color} text: ${this.text}`);
    }

    create(id){
        //dom element to attach to
        let div = document.getElementById(id)

        //create a button and attach to dom div element
        let button = document.createElement('button')
        button.innerText = this.text
        button.style = `background-color: ${this.color}`

        //attach button to dom element
        div.append(button);
    }
}


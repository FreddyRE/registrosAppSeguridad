class MenuPrincipalComponent {
    constructor(obj) {
        this.objForDash = obj;
    }
    
    
    buildInterface(inDiv, targDiv, _imgDiv){

        for(let i in this.objForDash){

            let divMain = document.createElement("div")
            let img = document.createElement("img")
            let title = document.createElement("h2")  
            let button = document.createElement("a")
        
            img.src = this.objForDash[i].imgI;
            img.className = "panels-img"
            img.id = `log-${this.objForDash[i].title}`
            title.className =  "title-header"
            title.innerHTML = this.objForDash[i].title
            button.className = "register-button"
            button.innerHTML = "Registrar"

            button.id = `reg-${this.objForDash[i].title}`
            button.style.border = `1px solid ${this.objForDash[i].color}`;
            img.onmouseover = () => {
                img.src = this.objForDash[i].imgA;
                img.style.cursor = "pointer"
            }
            img.onmouseout = () => {
                img.src = this.objForDash[i].imgI;
            }
            img.onclick = () => {
                console.log(event.target.id)
                _imgDiv.style.display = "block"
            }

            button.onmouseover = () => {
                button.style.backgroundColor = this.objForDash[i].color;
                button.style.cursor = "pointer"
            }
            button.onmouseout = () => {
                button.style.backgroundColor = "white";
                
            }
            button.onclick = () => {
                let formDisplay = new registerForms(this.objForDash[i].camposRegistro)
                inDiv.style.display = "none";
                formDisplay.buildForm(targDiv, event.target.id)
                targDiv.style.display = "block"
            }
            
            divMain.appendChild(img)
            divMain.appendChild(title)
            divMain.appendChild(button)
            inDiv.appendChild(divMain)
            
        }
        
    }


    


}
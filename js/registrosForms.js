class registerForms {
    constructor(arrayFields) {
        this.fields = arrayFields
    }

    _titlesFromId(divs1){
        switch(divs1){
            case "reg-Peatones" :
                return "Registro de peaton"
            break
            case "reg-Proveedores":
                return "Registro de proveedores"
            break;
            case "reg-Trabajadores":
                return "Registro de trabajadores"
            break;
            case "reg-Novedades":
                return "Registro de novedades"
            break;
        }
    }

    buildForm(inDiv, targetTrigger1){
        let title = document.createElement('h3')
        title.innerHTML = this._titlesFromId(targetTrigger1)
        let formDiv = document.createElement('form')
        let inpReg = ""
        let buttonReg = document.createElement('a')

        buttonReg.innerHTML = "Registrar"
        buttonReg.className = "button"

        for(let i in this.fields) {
            inpReg += `<input type="text" placeholder="${this.fields[i]}" required/>`
        }

        buttonReg.onclick = () => {
            alert("Registro realizado correctamente (prueba)")
            location.reload()
        }

        formDiv.innerHTML =  inpReg
        formDiv.appendChild(buttonReg)
        inDiv.appendChild(title)
        inDiv.appendChild(formDiv)
    }

}
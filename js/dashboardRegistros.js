class registrosDashboard {
    constructor(dataColumsArray, divToPoint) {
        this.numberColumns = dataColumsArray.length
        this.dataColumnsArray = dataColumsArray
        this.divToPoint = divToPoint
    }

    constructTable(title) {

        let tbl = document.createElement('table');
        let thead = document.createElement('thead')
        let tbody = document.createElement('tbody')
        let trow = document.createElement('tr');
        let tcaption = document.createElement('caption')
        let thInner = "";
        let buttonCerrar = document.createElement('button')
        
        buttonCerrar.innerHTML = "Cerrar"

        buttonCerrar.onclick = () => {
            document.querySelector(".registros-table").style.display = "none"
        }

        buttonCerrar.style.position = "absolute"
        buttonCerrar.style.left = "45%"
        buttonCerrar.style.top = "30%"
        for(let i in this.dataColumnsArray){
            thInner += `<th>${this.dataColumnsArray[i]}</th>`
            console.log(this.dataColumnsArray[i])
        }
        
        tcaption.innerHTML = title
        trow.innerHTML = thInner
        thead.append(trow)
        tbl.append(tcaption)
        tbl.append(thead)
        tbl.append(buttonCerrar)
        this.divToPoint.append(tbl)
    }

}


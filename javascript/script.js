const ladoleft = document.querySelectorAll("a.modelo")
const ladoright = document.querySelectorAll("div.maisusados")
/*
ladoleft.forEach((element,index) => {
   element.draggable = true
    element.id = element.id||`draggble-element=${index}`
    element.ondragstart = (e)=>{
        e.dataTransfer.setData('element-id', e.target.id)
    }

});

ladoright.forEach((ladodireito) =>{
    ladodireito.ondragover =(e)=> e.preventDefault()
    ladodireito.ondrop = function(e){
        const id= e.dataTransfer.getData('element-id')
        const item=document.getElementById(id)
        ladodireito.appendChild(item)
    
    }
})*/
ladoleft.forEach((item, index) => {//ira varrer todos os nodesList(botões) do site

    let bool = false//a cada item essa variavel fica false
    ladoright.forEach((divs, cont) => {//laço forEach que esta varrendo o nodeListe com todas as DIVS(corpor)


        item.addEventListener("click", () => {//ao clicar no botão(cada item do node liste é chamado o evento que aparece o botão)
            if (bool != true && index >= 0 && index < 8) {//estrutura if que ira aparace uma unica vez o botão que clicou e limitalo até a quantidade de modelos disponivel por div
                bool = true
                let newmodelo = item.cloneNode(true)//ira clona o node clicado
                ladoright[0].style.display="flex"//manipualação css
                ladoright[0].appendChild(newmodelo)//criação de nó filho

            }else  if (bool != true && index > 7 && index < 22) {
                bool = true
                let newmodelo = item.cloneNode(true)
                ladoright[1].style.display="flex"
                ladoright[1].appendChild(newmodelo)
            }else  if (bool != true && index > 21 && index < 43) {
                bool = true
                let newmodelo = item.cloneNode(true)
                ladoright[2].style.display="flex"
                ladoright[2].appendChild(newmodelo)
            }else  if (bool != true && index > 42 && index < 51) {
                bool = true
                let newmodelo = item.cloneNode(true)
                ladoright[3].style.display="flex"
                ladoright[3].appendChild(newmodelo)
            }else  if (bool != true && index > 50 && index < 65) {
                bool = true
                let newmodelo = item.cloneNode(true)
                ladoright[4].style.display="flex"
                ladoright[4].appendChild(newmodelo)
            }else  if (bool != true && index > 64 && index <= 80) {
                bool = true
                let newmodelo = item.cloneNode(true)
                ladoright[5].style.display="flex"
                ladoright[5].appendChild(newmodelo)
            }




        })
    })



})
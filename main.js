const data = [

    {nombre: "POKEMON", url: "https://pokeapi.co/api/v2/pokemon"},
    {nombre: "PLACES",  url: "https://pokeapi.co/api/v2/location"},
    {nombre: "MOVES ",  url: "https://pokeapi.co/api/v2/move"},

]
        

/* function CrearEnlace(LinkTxt, handleClick){
    const a = document.createElement('a')
    const link = document.createTextNode(LinkTxt)
    a.appendChild(link)
    a.setAttribute('href', '#')

    a.addEventListener("click", (e) => {
            e.preventDefault()
            crearTabla()flipInX

            
        })
        return a;
} */
const start = document.querySelector('.x2')
start.addEventListener('click', ()=>{
    const footer = document.querySelector('footer')
    footer.remove()
})

const headercillo = document.querySelector('header');
const main = document.querySelector('main')

function CreateLink(txt, fun){
    const phyLink = document.createElement('a')
    const link = document.createTextNode(txt)
    phyLink.appendChild(link)
    phyLink.setAttribute('href', '#')

    phyLink.addEventListener('click', function(e){
        e.preventDefault()
        fun()
        
    })
    return phyLink;

}

function cabecera(){
    const titulo = document.createElement('div');
    headercillo.appendChild(titulo);
    const imgheader = document.createElement('img');
    imgheader.src = "img/app.png"
    imgheader.height =  200;
    titulo.appendChild(imgheader);
    
}

function navegador(){
    const navegador = document.createElement('nav')
    navegador.classList.add("animate__animated")
            navegador.classList.add("animate__bounceInLeft")
    headercillo.appendChild(navegador)
    for(let i=0; data.length>i;i++){
        const titulos = document.createElement('li')
        navegador.appendChild(titulos)
        const link = CreateLink(data[i].nombre, function dibuja(){
                CreateArticle();
                ClearContent(); 
                createApi(data[i].url)
                
            })
        link.className =".shiny"
        titulos.appendChild(link)
    }
}



function createApi(url){
    const div = document.createElement('article')
    
    div.className = "articleC"
    const ul = document.createElement('ul')
    ul.classList.add("animate__animated")
    ul.classList.add("animate__bounceInDown")
    ul.className = "lista"
    div.appendChild(ul)    
    main.appendChild(div)
    fetch(url).then( res => res.json()).then(function (data){
        
        for(let i = 0; 9>i;i++){
            const lis = document.createElement('li')
            lis.classList.add("animate__animated")
    lis.classList.add("animate__bounceIn")
            ul.appendChild(lis)
            const linko = CreateLink(data.results[i].name, function dibuja2(){
                
                CreateArticle(); 
                ClearContent(); 
                
                createData(data.results[i].url);
                
                
            
            })
            lis.appendChild(linko)
        }
        
    })
}
function CreateArticle(){
    const articulofake = document.createElement('article')
    articulofake.className = "articleC"
    document.body.appendChild(articulofake)
}

function ClearContent(){
    const pagina = document.querySelectorAll('article')
    for(let i=0; pagina.length>i;i++){
    console.log(pagina + "cleaning articles")
    pagina[i].remove()
}
}

function createData(x){
    const article = document.createElement('article')
    article.className = "articleD"
    article.classList.add("animate__animated")
            article.classList.add("animate__bounceInDown")
    fetch(x).then( res => res.json()).then(function (data){
            const image = document.createElement('img')
            if(data.sprites){
                image.src = data.sprites.other.dream_world.front_default
            image.height = 225;
            image.classList.add("animate__animated")
            image.classList.add("animate__heartBeat")
            article.appendChild(image)
            } else if(data.region){
                image.src = 'img/city.png'
                image.height = 400;
                article.appendChild(image)
            } else {
                image.src = 'img/pika.jpg'
                image.height = 125;
                article.appendChild(image)
            }
        for(const property in data){
        
        if(property == "name" ||  property == "height" || property == "weight" || property == "accuracy" ||property == "power" || property == "pp" || property == "pp" ){
            const properties = document.createElement('p')
            properties.textContent = `${property}: ${data[property]}`
            article.appendChild(properties)
        }
        
        }
    main.appendChild(article)
})
const close = document.createElement('h3')
close.innerHTML = 'X'
close.addEventListener('click', ()=>{dataRemove()})


article.appendChild(close)
}

function dataRemove(){
    const pagina = document.querySelector('main')
    pagina.innerHTML = ''
}

window.onload = function () {
    cabecera()  
    navegador()
    /* Contenido() */
}
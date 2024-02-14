let products={

    data:[
        {
            productName:"Regular white T-shirt", category:"topwear", price:"40", 
            image:"shirt3.webp"  
        },
        {
            productName:" white T-shirt", category:"bottomwear", price:"90", 
            image:"shirt12.webp"  
        },
        {
            productName:" T-shirt", category:"watch", price:"60", 
            image:"https://img.freepik.com/free-photo/man-black-shirt-pointing-something-introducing-someone_144627-52574.jpg?size=626&ext=jpg&ga=GA1.1.1842581937.1703348153&semt=ais"  
        },
        {
            productName:"shirt", category:"topwear", price:"80", 
            image:"shirt3.webp"  
        },
        {
            productName:"jacket", category:"jacket", price:"20", 
            image:"jacket.webp"  
        },
        {
            productName:"jeans", category:"bottomwear", price:"70", 
            image:"jeans.webp"  
        },
        {
            productName:"hoodie", category:"jacket", price:"30", 
            image:"jacket2.webp"  
        },
        {
            productName:"smart", category:"watch", price:"50", 
            image:"watch1.jpg"  
        },
    ],
};


for(let i of products.data){

    // create card
  let card=document.createElement("div");
 card.classList.add("card",i.category, "hide");
//  card.classList.add("card","i.category", "hide");

//    image div
  let imgContainer=document.createElement("div");
  imgContainer.classList.add("image-container");


//   image tag
  let image=document.createElement("img");
  image.setAttribute("src",i.image);
  imgContainer.appendChild(image);

  card.appendChild(imgContainer);


//   container create2
   let container=document.createElement("div");
   container.classList.add("container");

   let name=document.createElement("h5");
    name.classList.add("product-name");
    name.innerText=i.productName.toUpperCase();
    container.appendChild(name);

//    price 
     let price =document.createElement("h6");
     price.innerText="$"+i.price;
     container.appendChild(price);



    card.appendChild(container);
   document.getElementById("products").appendChild(card);
}


function filterProduct(value) {
    let buttons=document.querySelectorAll(".button-value");

    buttons.forEach((button) => {
         if (value.toUpperCase()==button.innerText.toUpperCase()) {
            button.classList.add("active");
         }
         else{
            button.classList.remove("active");
         }
    });

    // select all cards
    let elements=document.querySelectorAll(".card");
    elements.forEach((element)=>{

        if(value=="all"){
            element.classList.remove("hide");
        }
        else{
            if(element.classList.contains(value)){
                element.classList.remove("hide");   
            }
            else{
                element.classList.add("hide");
            }
        }
    })
}


    // search button click

       document.getElementById("search").addEventListener("click", ()=>{

        let searchinput=document.getElementById("search-input").value;

        let elements=document.querySelectorAll(".product-name");

        let cards=document.querySelectorAll(".card");
        

        elements.forEach((element,index)=>{

            if(element.innerText.includes(searchinput.toUpperCase())){
                cards[index].classList.remove("hide");
            }
            else{
                cards[index].classList.add("hide");
            }
        })
       })




// initially display all products
window.onload=()=>{
    filterProduct("all");
}




// scollerup

$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
      $("#toTop").fadeIn();
    } else {
      $("#toTop").fadeOut();
    }
  });
  
  $(document).on("click", "#toTop", function () {
    $("html, body").animate({ scrollTop: 0 }, 500);
  });
  
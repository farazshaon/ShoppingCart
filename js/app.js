const data = [
    {
        id: 1,
        img: 'https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Product" class="h-80 w-72 object-cover rounded-t-xl',
        brand: 'Beand',
        productName: 'Porduct',
        price: '1000'
    },
    {
        id: 2,
        img: 'https://images.unsplash.com/photo-1651950537598-373e4358d320?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Product" class="h-80 w-72 object-cover rounded-t-xl',
        brand: 'Beand',
        productName: 'Porduct',
        price: '200'
    },
    {
        id: 3,
        img: 'https://images.unsplash.com/photo-1651950540805-b7c71869e689?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Product" class="h-80 w-72 object-cover rounded-t-xl',
        brand: 'Beand',
        productName: 'Porduct',
        price: '3000'
    },
    {
        id:4,
        img: 'https://images.unsplash.com/photo-1649261191624-ca9f79ca3fc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Product" class="h-80 w-72 object-cover rounded-t-xl',
        brand: 'Beand',
        productName: 'Porduct',
        price: '4000'
    },
    {
        id: 5,
        img: 'https://images.unsplash.com/photo-1649261191606-cb2496e97eee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Product" class="h-80 w-72 object-cover rounded-t-xl',
        brand: 'Beand',
        productName: 'Porduct',
        price: '500'
    },
    {
        id: 6,
        img: 'https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Product" class="h-80 w-72 object-cover rounded-t-xl',
        brand: 'Beand',
        productName: 'Porduct',
        price: '6000'
    }

]

const CardContainer = document.getElementById('card-container');

const peoductData = () => {
    data.map((item) => {

        const productItem = document.createElement('div');
        productItem.classList.add("hello");
        productItem.innerHTML = `
        
        <img src= ${item.img} />
        
        <div class="px-4 py-3 w-72">
            <span class="text-gray-400 mr-3 uppercase text-xs">${item.brand}</span>
            <p class="text-lg font-semibold text-black cursor-auto my-3">${item.price}</p>
            <div class="flex items-center">
            <div class="ml-auto">
            <button  class="addCardBtn rounded-lg px-4 py-2 bg-sky-500 text-red-100 hover:bg-sky-700 duration-300">Add to cart</button>
            </div>
            </div>
        </div>
   
       
        `;
        CardContainer.appendChild(productItem);
    })
}
peoductData()

//Add to card btn
const addCardBtn = document.getElementsByClassName('addCardBtn')
for (i = 0 ; i < addCardBtn.length; i++) {
    addCardBtn[i].addEventListener('click', addToCard)

}


// add to card 
function addToCard(e) {

    const addtocartEl = e.target.parentElement.parentElement.parentElement

    const imagesName = addtocartEl.children[0].src
    const brandName = addtocartEl.children[1].innerText
    const cost = addtocartEl.children[2].innerText
   addTocardupdate(imagesName,brandName , cost)


    e.preventDefault()
}

const tbody = document.getElementsByTagName('tbody')[0]
function addTocardupdate(imagesName,brandName , cost) {
    const trElement = document.createElement('tr')
    trElement.innerHTML = `
            <td class="pl-2 pt-1 pb-1 border border-indigo-300 p-2"> <img class="w-10" src= ${imagesName} /></td>
            <td class="pl-2 pt-1 pb-1 border border-indigo-300 p-2" >${brandName}</td>
            <td class="pl-2 pt-1 pb-1 border border-indigo-300 p-2" >${cost}</td>
            <td class="pl-2 pt-1 pb-1 border border-indigo-300 p-2" >

              <button  class="removeBtn rounded-lg px-4 py-2 bg-red-500 text-red-100 hover:bg-red-700 duration-300">X</button>
            </td>
    
    ` 

    tbody.appendChild(trElement)

    for (i = 0 ; i < removeBtn.length; i++) {
        removeBtn[i].addEventListener('click', removeItem)   
    } 
}

//qty update
const qtyupdate = document.getElementsByClassName('qty');


for (i = 0 ; i < qtyupdate.length; i++) {
    qtyupdate[i].addEventListener('click', updateqty)

}
function updateqty(e) {

    const updateElement = e.target.parentElement.parentElement;
    console.log(updateElement)
    e.preventDefault()
}

//Remove btn

let removeBtn = document.getElementsByClassName('removeBtn')




function removeItem(e) {
   
    if(confirm('Are you sure?')) {
        e.target.parentNode.parentNode.remove();
        e.preventDefault()
    }
    
}
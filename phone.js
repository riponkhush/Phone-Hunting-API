const loadPhone = async(searchText='13', isShowAll) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data; 
    // console.log(phones);
    displayPhone(phones, isShowAll);
}


const displayPhone = (phones, isShowAll) => {
    // console.log(phones);

    const phoneContainer = document.getElementById('phone-container');
    // clear phone container 
    phoneContainer.textContent = '';
    // display show all button if there are more phone
        const showAllContainer = document.getElementById('show-all-container');
    if(phones.length > 12 && !isShowAll){
        showAllContainer.classList.remove('hidden');
    }else{
        showAllContainer.classList.add('hidden');
    }

    // console.log('is show all', isShowAll)
    // display only first 12 phone of not show all
   if(!isShowAll){
    phones = phones.slice(0,12);
   }



    phones.forEach(phone =>{
        // console.log(phone);

        // 2 creat a div
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card p-4 bg-base-100 shadow-xl`;
        // 3 set innar HTML
        phoneCard.innerHTML = `
        <figure><img src="${phone.image}"></figure>
        <div class="card-body">
          <h2 class="card-title">${phone.phone_name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-center">
            <button onclick ="handleShowDetails('${phone.slug}'); show_details_modal.showModal()" class="btn btn-primary">Show details</button>
          </div>
        </div>
        `;
        //  4 append child
        phoneContainer.appendChild(phoneCard);


    });
            // hid loading spinner

            toggleLoadingSpinner(false);
    
}

// 
const handleShowDetails = async(id) => {
    // console.log('shoe me',id);

    // load  single data
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
    const data = await res.json();
    // console.log(data);
    const phone = data.data;
    showPhoneDetails(phone);
}
// show phone details 
const showPhoneDetails = (phone) => {
    console.log(phone);
    const phoneName = document.getElementById('phone-name')
    phoneName.innerText = phone.name;
    // show the modal 
    show_details_modal.showmodal()
}



// handle search button
const handleSearch = (isShowAll) =>{
    // console.log("search");
    toggleLoadingSpinner(true);
    const searchField = document.getElementById('search-field')
    const searchText = searchField.value;
    console.log(searchText);
    loadPhone(searchText, isShowAll);

}



// searchField recap 
// const handleSearch2 = () =>{
//     toggleLoadingSpinner(true);
//     const searchField = document.getElementById('search-field2');
//     const searchText = searchField.value;
//     loadPhone(searchText);
// }

const toggleLoadingSpinner = (isLoading) => {
    const lodingSpinner = document.getElementById('loading-spinner');
    if(isLoading){
        lodingSpinner.classList.remove('hidden');
    } else{
        lodingSpinner.classList.add('hidden');
    }
}
// handle Show all 
const handleShowAll = () => {
    handleSearch(true);
}

loadPhone();
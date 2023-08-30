

// amader kace ekta URL deya ace . sekhan thele [asycn, awit] diye fetch kore data load kore json a convert kore ekta [data] name variable diye , take abar  khuje ber kori 
// 1 no. prothomee data fetch korte hobe 
const loadPhone = async (searchText,isShowAll) => {
    // data json kora hoyece   4.3__ searchText use kora hoyece karon vinno vinno phone search kora labe
    const res =await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    // data guloke phones nam diye variable banano hoyece take abar console log kora jay
    const phones = data.data;
            // console.log(phones);
    //3.1  phone gulake dekhanor jonno ekhane displayPhone use kora hoyece
    displayPhones(phones, isShowAll);

    // datar moddhe theke data k dekha hoyece tai (data.data) use kore dekheci [phoner information dekha jay]
    // console.log(data.data);
}


//  2 no.  data ke load korte hobe 
loadPhone();




// 3 no .  phone gulo dekhanor jonno nicher pragram sajano holo. er jonno displayPhones use kora hobe. phones name onek gulo parameter
const displayPhones = (phones, isShowAll) => {
            console.log(phones);

            //3.6 div banao ekhun. tar por append child kora
            const phoneContainer = document.getElementById('phone-container');

            // 4.5 clear phone container card ager gula clear hiobe eitar maddhome
            phoneContainer.textContent = '';


          // 4.6 ses . 5 suru. emono hote pare. 12 ta phone dekhanor por. baki phone gula SHOW ALL button er maddhome baki phone gula dekhano jabe . abar button ta hidden thakbe. 12 ta r besi hole dekha jabe button
          //  5.1 display show 12 er theke besi hole 
          const showAllContainer = document.getElementById('show-all-container');
          if(phones.length > 12){
            // 12 er kom hole hidden thakbe
            showAllContainer.classList.remove('hidden');
          } else{
            // besi hole add hobe
            showAllContainer.classList.add('hidden');
          }



          console.log('is show me', isShowAll);
          // 4.6 amar sookol phone theke limit onusare data dekhate slice use kora hoyece. joto khusi dekhano jay data 5,6,1,23,100, 
          // phones = phones.slice(0,12);

          // 7.2 new slice
          if(!isShowAll){
            phones = phones.slice(0,12);
          }


    //3.2 prottek data k ekhun  forEach diye data gulake ekta ekta kore dekhano .karon oneek gulo array ace er jonno multi size er ero banano holo 
    phones.forEach(phone => {
        console.log(phone);

        // 3.3 ekhun div card banano 
        const phoneCard = document.createElement('div');
        // 3.4
        phoneCard.classList = `card bg-base-100 p-4 shadow-xl`;
        // 3.5 HTML gulo set korlam
        phoneCard.innerHTML = `
        <figure><img src="${phone.image}" /></figure>
        <div class="card-body">
          <h2 class="card-title">${phone.phone_name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div> 
        `;
        //3.7 append child kora hoyece container er moddher phonecard k
        phoneContainer.appendChild(phoneCard)
    });
    // 6.3 data deuar por vanish hoye jabe. er jonno 6.2 a if condition use kora hoyece
    toggleLoadingSpinner(false);
}




// 4 No. search Button er sathe onclik kore dilam
const handleSearch = (isShowAll) =>{

  // 6.1 eita deuar por loading dekha jabe. 
  toggleLoadingSpinner(true); 

    // 4.1 input er sathe jog kore dite hobe
    const searchField = document.getElementById('search-field');

    // 4.2 input value nite hibe search theke
    const searchText = searchField.value;
    console.log(searchText);
    
    // 4.4 phone dekhanor jonno loadPhone kore deua hoyece. but append child hobe besi. mane: sob phone scroll hoye dekhabe. er jonno porer step deua ace. 
    loadPhone(searchText , isShowAll);
}





// 6 .... loading spiner korte hobe. ekhan theke toggleLoadingSpinner ta ke dak dite hobe handleSearch a.
const toggleLoadingSpinner = (isLoading) =>{
  const loadingSpiner = document.getElementById('loading-spiner');
  // savabik vabe hidden thakbe nicher ta dile . 
  // loadingSpiner.classList.remove('hidden');

  // 6.2 tar por if use kori. isLoading sotto hole dekhabe. sotto korar jonno true name value handleSearch a jai. tar por true dei
  if(isLoading){
    loadingSpiner.classList.remove('hidden');
  } else{
    loadingSpiner.classList.add('hidden');
  }
}

//  handle show all button . 6 ses. and 7 holo suru

const handleShowAll = () => {
  // 7.1 show all dekhar jonno handleSearch nia aste hobe . ar showall korar jonno isShowAll and true use koreci .ar show all kore slice change kore hoyece. age cilo onno rokom . slice er sathe if use kora hoyece
  handleSearch( true);
}









class TabLink {
    constructor(tabElement){
      this.tabElement = tabElement
      this.tabData = tabElement.dataset.tab
      if(this.tabData === 'all'){
        this.cards = document.querySelectorAll('.card');
      } else {
        this.cards = document.querySelectorAll(`.card[data-tab="${this.tabData}"]`);
      }
  this.cards = Array.from(this.cards).map((card) => {
    return new TabCard(card);
  })
      this.tabElement.addEventListener('click', ()=> this.selectTab());
    }
  
    selectTab(){
      const tabs = document.querySelectorAll('.tab')
      tabs.forEach(tab => {
        tab.classList.remove('active-tab');
      })
  const cards = document.querySelectorAll('.card');
      cards.forEach(card => {
        card.style = 'display: none';
      })
    this.tabElement.classList.add('tab-active');
      this.cards.forEach(card => card.selectCard());
    }
  }
  
  class TabCard {
    constructor(cardElement){
      this.cardElement = cardElement;
    }
    selectCard(){
      this.cardElement.style = 'display: flex';
    }
  
  }
  

  const tabs = document.querySelectorAll('.tab');
  
  tabs.forEach(tab => {
    new TabLink(tab);
  });



const leftButton = document.querySelector('.left-button');
const rightButton = document.querySelector("body > div.carousel > div.right-button");
const photos = Array.from(document.querySelectorAll('.photo'));
var photoQueue = 0;

rightButton.addEventListener('click', event => {
    if(photoQueue < photos.length-1) {
     photoQueue +=1;
    } else {
        photoQueue =0;
    }
 });

rightButton.addEventListener('click', event => 
photos.forEach(photo => {
    photo.classList.add('hidden');
}));

rightButton.addEventListener('click', event => {
    photos[photoQueue].classList.remove('hidden');
});

leftButton.addEventListener('click', event => {
    if(photoQueue > 0) {
        photoQueue -=1;
       } else {
           photoQueue = photos.length-1;
       }
});


leftButton.addEventListener('click', event => 
photos.forEach(photo => {
    photo.classList.add('hidden');
}));

leftButton.addEventListener('click', event => {
    photos[photoQueue].classList.remove('hidden');
});




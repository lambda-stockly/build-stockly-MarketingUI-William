

  
/**** Original model was not using a component */
//   const analyze = document.querySelector("body > section > div > div.features-bar > div:nth-child(1)");
//   const recommend = document.querySelector("body > section > div > div.features-bar > div:nth-child(2)");
//   const projections = document.querySelector("body > section > div > div.features-bar > div:nth-child(3)");
//   const protection = document.querySelector("body > section > div > div.features-bar > div:nth-child(4)");

//   analyze.addEventListener('click', ()=> {
//       scroll(300);
//   });

//   recommend.addEventListener('click', ()=> {
//     scroll(700);
//   })

//   projections.addEventListener('click', ()=> {
//     scroll(1450);
//   })

//   protection.addEventListener('click', ()=> {
//     scroll(2000);
//   })

// const dataTabs = document.querySelectorAll('.bar-tab');


// const tabsArray = Array.from(dataTabs);


/*Updated method, where I assign a scroll value within a component based on array index +1 */
function scroll(distance) {
  window.scrollBy({
  top: distance,
  behavior: 'smooth'
})};
const barTabs = document.querySelectorAll('.bar-tab');
tabArray = Array.from(barTabs);



class TabLink {
  constructor(tabElement){
    this.tabElement = tabElement;
    this.scrollLength = (tabArray.indexOf(tabElement) + 1);
    this.tabElement.addEventListener('click', ()=> this.scrollTab());
  }


  scrollTab(){
    scroll((400 * this.scrollLength));
  
  }



}



barTabs.forEach(tab => {
  new TabLink(tab);
});
const tabItems = document.querySelectorAll('.tab-item');
const contentItems = document.querySelectorAll('.tab-content-item');


tabItems.forEach(item => item.addEventListener('click',toggleTabBottom));

function toggleTabBottom(e){
  //remove bottom border
  removeBorder();
  //remove showclass for each content item
  removeContentItem();
  //bottom border
  this.classList.add('tab-border');
  //select current item
  const selectedItem = document.querySelector(`#${this.id}-content`);
  //add show class to the currentitem
  selectedItem.classList.add('show');
  }

function removeBorder(){
  tabItems.forEach(item => item.classList.remove('tab-border'));
}
function removeContentItem(){
  contentItems.forEach(item => item.classList.remove('show'));
}



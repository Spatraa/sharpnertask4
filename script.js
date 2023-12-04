const item=document.querySelector('#items li:nth-child(2)');
item.style.backgroundColor="green";


const itm=document.querySelector('#items li:nth-child(3)');
itm.style.display="none";

const itms=document.querySelectorAll('#items li');
itms[1].style.color="green";

const oddItems = document.querySelectorAll('#items li:nth-child(odd)');
oddItems.forEach(item => {
  item.style.backgroundColor = 'green';
});




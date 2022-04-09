var list_data = document.getElementById('list_data');
var li = list_data.getElementsByTagName('tr');

var remainder = li.length % 10;
var x = (li.length - remainder) / 10 + 1; // finding queotent and adding 1 to get no of pages.

var Arr = [3];
for (var i = 1; i < x; i++) {
  Arr[i] = Arr[i - 1] + 10;
}
console.log(Arr);
var Page_arr = [];
for (var i = 1; i <= x; i++) {
  Page_arr.push(i);
}
console.log(Page_arr);
console.log(Arr);

// selecting required element
const element = document.querySelector(".pagination ul");
let totalPages = x;
let page = 1;

//calling function with passing parameters and adding inside element which is ul tag
element.innerHTML = createPagination(totalPages, page);

function createPagination(totalPages, page) {
  let liTag = '';
  let active;
  let beforePage = page - 1;
  let afterPage = page + 1;
  if (page > 1) { //show the next button if the page value is greater than 1
    liTag += `<li class="btn prev" onclick="createPagination(totalPages, ${page - 1})"><span><i class="fas fa-angle-left"></i> Prev</span></li>`;
  }

  if (page > 2) { //if page value is less than 2 then add 1 after the previous button
    liTag += `<li class="first numb" onclick="createPagination(totalPages, 1)"><span>1</span></li>`;
    if (page > 3) { //if page value is greater than 3 then add this (...) after the first li or page
      liTag += `<li class="dots"><span>...</span></li>`;
    }
  }

  for (var plength = beforePage; plength <= afterPage; plength++) {

    if (plength > totalPages) { //if plength is greater than totalPage length then continue
      continue;
    }
    if (plength == 0) { //if plength is 0 than add +1 in plength value
      plength = plength + 1;
    }
    if (page == plength) { //if page is equal to plength than assign active string in the active variable
      active = "active";
    } else { //else leave empty to the active variable
      active = "";
    }

    liTag += `<li class="numb ${active}" onclick="createPagination(totalPages, ${plength})"><span>${plength}</span></li>`;

  }
  var p = page;


  if (page < totalPages - 1) { //if page value is less than totalPage value by -1 then show the last li or page
    if (page < totalPages - 2) { //if page value is less than totalPage value by -2 then add this (...) before the last li or page
      liTag += `<li class="dots"><span>...</span></li>`;
    }
    liTag += `<li class="last numb" onclick="createPagination(totalPages, ${totalPages})"><span>${totalPages}</span></li>`;
  }

  if (page < totalPages) { //show the next button if the page value is less than totalPage(20)
    liTag += `<li class="btn next" onclick="createPagination(totalPages, ${page + 1})"><span>Next <i class="fas fa-angle-right"></i></span></li>`;
  }

  for (var i = 0; i < li.length; i++) {
    li[i].style.display = "none";
  }
  if (p != x) {
    for (var j = Arr[p - 1]; j < (Arr[p - 1] + 10); j++) {
      li[j - 1].style.display = "block";
    }
  }
  if(p == x){
    for (var j = Arr[p - 1]; j < (Arr[p - 1] + remainder); j++) {
      li[j - 1].style.display = "block";
    }
  }

  element.innerHTML = liTag; //add li tag inside ul tag
  return liTag; //reurn the li tag


}
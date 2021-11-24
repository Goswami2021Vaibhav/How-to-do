var list_data = document.getElementById('list_data');
var li = list_data.getElementsByTagName('li');

var remainder = li.length % 10;
var x = (li.length - remainder) / 10 + 1; // finding queotent and adding 1 to get no of pages.

var Arr = [1];
for (var i = 1; i < x; i++) {
  Arr[i] = Arr[i - 1] + 10;
}



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

  for (var i = 0; i < li.length; i++) {
    li[i].style.display = "none";
  }
  var p = page;
  if (Arr[p - 1] != Arr[x - 1]) {
    for (var i = Arr[p - 1]; i <= (Arr[p - 1] + 9); i++) {
      li[i - 1].style.display = "block";
    }

  }
  if (Arr[p - 1] == Arr[x - 1]) {
    for (var i = Arr[p - 1]; i <= (Arr[p - 1] + remainder - 1); i++) {
      li[i - 1].style.display = "block";
    }

  }

  if (page < totalPages - 1) { //if page value is less than totalPage value by -1 then show the last li or page
    if (page < totalPages - 2) { //if page value is less than totalPage value by -2 then add this (...) before the last li or page
      liTag += `<li class="dots"><span>...</span></li>`;
    }
    liTag += `<li class="last numb" onclick="createPagination(totalPages, ${totalPages})"><span>${totalPages}</span></li>`;
  }

  if (page < totalPages) { //show the next button if the page value is less than totalPage(20)
    liTag += `<li class="btn next" onclick="createPagination(totalPages, ${page + 1})"><span>Next <i class="fas fa-angle-right"></i></span></li>`;
  }



  element.innerHTML = liTag; //add li tag inside ul tag
  return liTag; //reurn the li tag



}
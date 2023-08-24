// function submitForm() {
//    let firstName = document.getElementById("first_name").value;
//    let table = document.createElement("table");
//    let email = document.getElementById("email").value;
//    let lastName = document.getElementById("last_name").value;
//     table.innerHTML = "<tr><th>First Name</th><th>Last Name</th><th>Email</th></tr>";
//     let row = document.createElement("tr");
//     row.innerHTML = "<td>" + firstName + "</td><td>" + lastName + "</td><td>" + email + "</td>";
//     table.appendChild(row);
//     document.body.appendChild(table);
//   }
//   document.getElementById("submit").addEventListener("click", submitForm);

/**get the table by id
 * create a new row and cell
 * get value from input texts
 * get the values int row cells
 */
// function add_html_table_row(){
//   let tabe = document.getElementById("table"),
//   new_row =tabe.insertRow(tabe.length),
//   cell1 =new_row.insertcell(0),
//   cell2 =new_row.insertcell(1),
//   cell3 =new_row.insertcell(2),
//   // trow =document.getElementById("tr")
//   first_name=document.getElementById("first_name").value,
//   Last_name=document.getElementById("last_name").value,
//   Email=document.getElementById("email").value  ;
// cell1.innerHTML=first_name
// cell2.innerHTML=Last_name
// cell3.innerHTML=Email
// }
// selected_row_input();
let list1=[]
let list2=[]
let list3=[]
let n =1
let x=0
function add_row(){
  let addrown=document.getElementById("table")
  let newrow=addrown.insertRow(n)
  list1[x]= document.getElementById("first_name").value;
  list2[x]= document.getElementById("last_name").value;
  list3[x]= document.getElementById("email").value;

  let cell1 = newrow.insertCell(0);
  let cell2= newrow.insertCell(1);
  let cell3= newrow.insertCell(2);

  cell1.innerHTML = list1[x]
  cell2.innerHTML = list2[x]
  cell3.innerHTML = list3[x]

  // n++;
  // x++//
}
document.getElementById("submit").addEventListener("click",
function(Event){
  event.preventDefault()
});
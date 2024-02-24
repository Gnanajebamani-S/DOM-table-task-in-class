function create_th(tag, attname, attvalue, content) {
  var th = document.createElement(tag);
  th.setAttribute(attname, attvalue);
  th.innerHTML = content;
  return th;
}

var table = document.createElement("table");
table.className = "table";

var thead = document.createElement("thead");

var tr = document.createElement("tr");

var th1 = create_th("th", "scope", "col", "#");
var th2 = create_th("th", "scope", "col", "First");
var th3 = create_th("th", "scope", "col", "Last");
var th4 = create_th("th", "scope", "col", "Handle");

tr.append(th1, th2, th3, th4);
thead.append(tr);

var tbody = document.createElement("tbody");

var tr1 = document.createElement("tr");

function create_td(tag, content) {
  var td = document.createElement(tag);
  td.innerHTML = content;
  return td;
}
var th5 = create_th("th", "scope", "row", "1");
var td1 = create_td("td", "Mark");
var td2 = create_td("td", "Otto");
var td3 = create_td("td", "@mdo");

tr1.append(th5, td1, td2, td3);

var tr2 = document.createElement("tr");

var th6 = create_th("th", "scope", "row", "2");
var td4 = create_td("td", "Jacop");
var td5 = create_td("td", "Thornton");
var td6 = create_td("td", "@fat");

tr2.append(th6, td4, td5, td6);

var tr3 = document.createElement("tr");

var th7 = create_th("th", "scope", "row", "3");
var td7 = create_td("td", "Larry");
var td8 = create_td("td", "The Bird");
var td9 = create_td("td", "@twitter");

tr3.append(th7, td7, td8, td9);

tbody.append(tr1, tr2, tr3);
table.append(thead, tbody);
document.body.append(table);
/* <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td
    </tr>
  </tbody>
</table> */

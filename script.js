var survey_options = document.getElementById("row");
var add_more = document.getElementById("add_more");
var remove_more = document.getElementById("remove");

add_more.onclick = function() {
    var newFieldName = document.createElement("input");
    newFieldName.setAttribute("type", "text");
    newFieldName.setAttribute("name", "imie");
    newFieldName.setAttribute("placeholder", "Imię");
    newFieldName.setAttribute("class", "row-name");
    newFieldName.setAttribute("required", "");
    row.appendChild(newFieldName);
    var newFieldLastName = document.createElement("input");
    newFieldLastName.setAttribute("type", "text");
    newFieldLastName.setAttribute("name", "nazwisko");
    newFieldLastName.setAttribute("class", "row-lastname");
    newFieldLastName.setAttribute("placeholder", "Nazwisko");
    newFieldLastName.setAttribute("required", "");
    row.appendChild(newFieldLastName);
}

remove.onclick = function() {
    var input_tags = survey_options.getElementsByTagName("input");
    if (input_tags.length > 2) {
        survey_options.removeChild(input_tags[(input_tags.length) - 1]);
        survey_options.removeChild(input_tags[(input_tags.length) - 1]);
    } else {
        alert("Nie można usunąć ostatniego rekordu!")
    }
}
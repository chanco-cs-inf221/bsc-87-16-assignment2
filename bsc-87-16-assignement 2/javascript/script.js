var form = document.getElementById("project");

form.addEventListener("submit", function(event){
    event.preventDefault();
    var name = form.projectName.value;
    var details = form.details.value;
    var date = new Date(form.date.value);

    var p = [name, details, date];

    localStorage.setItem("1" , p);
    var list_projects = document.getElementById("list_projects");
    var anchor = document.createElement("A");
    anchor.setAttribute("class", "name");
    anchor.setAttribute("href", "project.html");
    var content = document.createTextNode(name);
    anchor.appendChild(content);
    list_projects.appendChild(anchor);
    form.reset();
    
    

    
});



var form2 = document.getElementById("work_experience_form");

form2.onsubmit = function(e)
{
    e.preventDefault();
    var work = form2.work_type.value;
    var workDetails = form2.work_details.value;
    var start_date = new Date(form2.start_date.value);

    let fullWork = ["WORK TYPE: " + work, "\nWORK DETAILS : " + workDetails, "\nSTART DATE : " + start_date];
    localStorage.setItem("2", fullWork);
    var working_section = document.getElementById("work_experince");
    //creating a link 
    var workList = document.createElement("a"); 
    workList.setAttribute("href", "work.html");
    workList.setAttribute("class", "name");
   
    var content = document.createTextNode(work);
    workList.appendChild(content);
    working_section.appendChild(workList);
    form2.reset();
}
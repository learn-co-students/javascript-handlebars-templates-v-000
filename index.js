Handlebars.registerHelper('comment_body', function() {
  if(this.state === "closed") {
    return new Handlebars.SafeString(this.body)
  } else {
    return new Handlebars.SafeString("<strong>" + this.body + "</strong>")
  }
})



function loadIssues() {
  //compile
  var template = Handlebars.compile(document.getElementById("issue-template").innerHTML);
  //pass data to template
  var result = template(issues);
  //add templated data to dom
  document.getElementsByTagName("main")[0].innerHTML += result;

}


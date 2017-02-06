Handlebars.registerHelper('comment_body', function() {
  if(this.state === "closed") {
    return new Handlebars.SafeString(this.body)
  } else {
    return new Handlebars.SafeString("<strong>" + this.body + "</strong>")
  }
})

function loadIssue() {
  var template = Handlebars.compile(document.getElementById("issue-template").innerHTML);
  for(var i=0;i<issues.length;i++) {
    var result = template(issues[i]);
    document.getElementsByTagName("main")[0].innerHTML += result;
  }
}

function loadIssues() {
  var template = Handlebars.compile(document.getElementById("issue-template").innerHTML);
  var result = template(issues);
  document.getElementsByTagName("main")[0].innerHTML += result;
}

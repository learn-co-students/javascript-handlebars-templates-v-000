Handlebars.registerHelper('comment_body', function() {
  if(this.state === "closed") {
    return new Handlebars.SafeString(this.body)
  } else {
    return new Handlebars.SafeString("<strong>" + this.body + "</strong>")
  }
})

function loadIssues() {
  var issueTemplate = document.getElementById("issue-template").innerHTML;
  var issueTemplateFn = Handlebars.compile(issueTemplate);

  var issueHTML = issueTemplateFn(issues);
  document.getElementById("main").innerHTML += issueHTML;
}

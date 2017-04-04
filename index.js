// function loadIssue() {
//   // a variable is included in this example of a single issue in a hash format
//   var issue = {
//     state: "closed",
//     number: 5,
//     created_at: "2016-03-31 16:23:13 UTC",
//     body: "Instructions say GET /team and POST /newteam. Rspec wants GET/newteam and POST/team."
//   }
 
//   // Setting a variable for the handlebar template
//   var template = Handlebars.compile(document.getElementById("issue-template").innerHTML);

//   // sets another variable for the result of the template variable above with the hash variable as the argument
//   var result = template(issue);

//   // adds the result of the variable above to the main tag element
//   document.getElementsByTagName("main")[0].innerHTML += result;
// }

function loadIssue() {
  var template = Handlebars.compile(document.getElementById("issue-template").innerHTML);
  for(var i=0;i<issues.length;i++) {
    var result = template(issues[i]);
    document.getElementsByTagName("main")[0].innerHTML += result;
  }
}

Handlebars.registerHelper('comment_body', function() {
  if(this.state === "closed") {
    return new Handlebars.SafeString(this.body)
  } else {
    return new Handlebars.SafeString("<strong>" + this.body + "</strong>")
  }
})

function loadIssues() {
  var template = Handlebars.compile(document.getElementById("issue-template").innerHTML);
  var result = template(issues);
  document.getElementsByTagName("main")[0].innerHTML += result;
}

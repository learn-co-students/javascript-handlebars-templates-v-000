Handlebars.registerHelper('comment_body', function () {
  if (this.state === 'closed') {
    return new Handlebars.SafeString(this.body)
  } else {
    return new Handlebars.SafeString(`<strong>${this.body}</strong>`)
  }
});

function loadIssue() {
  const template = Handlebars.compile(document.querySelector('#issue-template').innerHTML);
  const result = template(issues);
  document.querySelector('main').innerHTML += result;
}

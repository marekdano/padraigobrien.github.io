module.exports = function (data) {
  return /*html*/ `
<!DOCTYPE html>
<html lang="en" class="font-body dark:bg-black light:bg-white">
<head>
  <script async defer data-domain="padraigobrien.com" src="https://plausible.io/js/plausible.js"></script>

</head>
  ${this.headTag(data)}
  <body>
    ${this.siteHeader(data)}
    ${data.content}
    ${this.siteFooter(data)}
  </body>
</html>
  `
}
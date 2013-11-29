x = '    <link rel="import" href="https://appmaker.mozillalabs.com/test_assets/ceci/test/fixtures/ceci-value-holder.html">\n\
<!-- We need button -->\n\
  <link rel="import" href="../component-button/component.html">\n\
  <link rel="import" href="../component-asd/component.html">\n\
  <!-- The component we are testing here. -->\n\
   <link rel="import" href="component.html">\n\
  '
;

regex = /<link rel="import" href="..\/(.*)\/component.html">/g;

newx = x.replace(regex, function (match, p1) {
    console.log(match, p1);
    return '<link re="import" href="/component/' + p1 + '">';
});
console.log(newx);

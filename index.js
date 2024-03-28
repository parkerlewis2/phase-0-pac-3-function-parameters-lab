function introduction(name) {
  console.log(`Hi, my name is ${name}.`);
}

introduction("Aki");

function introductionWithLanguage(name, language) {
  console.log(`My name is ${name} and I'm studying ${language}.`);
}

introductionWithLanguage("Aki", "Ember.js");

function introductionWithLanguageOptional(name, language = "JavaScript") {
  console.log(`My name is ${name} and I'm learing to program in ${language}.`);
}

introductionWithLanguageOptional ("Aki");

introductionWithLanguageOptional ("Gracie", "Python");
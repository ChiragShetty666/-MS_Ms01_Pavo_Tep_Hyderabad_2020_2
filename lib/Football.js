/**
 *
 * @namespace faker.Football
 */
var Football= function (faker) {
    var self = this;
    var fake = faker.fake;
  
    /**
     * Football
     *
     * @method faker.Football.Football
     */
    self.Football = function () {
      return fake('{{Football.clubs}}');
    };
  
    self.Football.schema = {
      "description": "Generates a random club.",
      "sampleResults": ["Real Madrid", "Barcelona", "Liverpool"]
    };
  
    /**
     * Nationalteam
     *
     * @method faker.Football.Nationalteam
     */
    self.Nationalteam = function () {
      return faker.random.arrayElement(faker.definitions.Football.Nationalteam);
    };
  
    self.Nationalteam.schema = {
      "description": "Generates a Nationalteam name.",
      "sampleResults": ["India", "Spain", "Italy"]
    };
  
  
    /**
     * sponsers
     *
     * @method faker.Football.sponsers
     */
    self.sponsers = function () {
      return faker.random.arrayElement(faker.definitions.Football.sponsers);
    };
  
    self.sponsers.schema = {
      "description": "Generates a sponsers.",
      "sampleResults": ["Nike", "Adidas", "Underarmour"]
    };
  
    /**
     * CupChampions
     *
     * @method faker.Football.CupChampions
     */
    self.CupChampions = function () {
      return faker.random.arrayElement(faker.definitions.Football.CupChampions);
    };
  
    self.CupChampions.schema = {
      "description": "Generates a CupChampions.",
      "sampleResults": ["Brazil", "Italy", "France", "Spain"]
    };

  };  
 
  module["exports"] = Football;
var monster = require('../db/monster');

module.exports =(function () {

  var api = {

    selectMonster: function (conditions, success, error) {
      if(conditions == null || conditions == undefined) {
        monster.findAll().then(function(results) {
          success(results);
        }, error);
      } else {
        monster.findAll({where: conditions, order: [['createdAt', 'DESC']]}).then(function(results) {
          success(results);
        }, error);
      }
    }
  };

  return {
    api : api
  };
})();
/**
 * OrientdbController
 *
 * @description :: Server-side logic for managing orientdbs
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

  /**
   * `OrientdbController.base()`
   */
  base: function (req, res) {

		venus.find().exec(function(err, vrecords){
      res.view({
        partials: {
          head: '../partials/head',
          tail: '../partials/tail',
        },
        records: vrecords
      })//res

    });//venus.find
	}//base

};//module exports

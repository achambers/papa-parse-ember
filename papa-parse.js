export default Em.Mixin.create({
  actions: {
    parseCsv: function() {
      var self = this,
          config = self.config,
          selector = self.selector || 'input[type=file]';

      self.$(selector).parse({
        config: config,

        before: function(file, element) {
          Em.run(function() {
            self.send('before', file, element);
          });
        },

        error: function(error, file, element) {
          Em.run(function() {
            self.send('error', error, file, element);
          });
        },

        complete: function(results, file, element, event) {
          Em.run(function() {
            self.send('complete', results, file, element, event);
          });
        }
      });
    }
  }
});

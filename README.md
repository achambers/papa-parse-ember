#papa-parse-ember


papa-parse-ember is an Ember mixin that wraps [Papa Parse][1] for use in your Ember components and Views.

##How to install

Download the latest version of papa-parse.js from this repo and place this file in your Ember app.

Note: this file Mixin is written using ES6 Module syntax so you will need to transpile this file in order to use it.  If you aren't already, you should be using [Ember App Kit][2] or [Ember CLI][3] from the awesome [Stef Penner][4] as these build tools will transpile for you.

Alternatively, rewrite the mixin in JS or Coffeescript to suit your needs.

##How to use

Once you have added the mixin to your project, import it and mix it in to your Component or View and define the selector for your file input field.

```javascript
import PapaParseMixin from 'appkit/mixins/papa-parse'

export default Ember.Component.extend(PapaParseMixin, {
  selector: '#file-upload' //This is optional and will default to 'input[type=file]' by default
});
```

Now, in your Component/View template, add the `parseCsv` action to your input field.

```html
<input id="file-upload" type="file" {{action "parseCsv" on="change"}}>
```

###Config

Papa Parse config options can be defined in your Component/View as follows:

```javascript
export default Ember.Component.extend(PapaParseMixin, {
  config: {
    delimiter: '|',
    header: true
  }
});
```

If no config is defined the Papa Parse [default config][5] will be used.

###Actions

In order to hook in to the Papa Parse callbacks when [parsing a file][6] define the following actions in your actions hash:

```javascript
export default Ember.Component.extend(PapaParseMixin, {
  actions: {
    before: function(file, element) {},
    error: function(error, file, element) {},
    complete: function(results, file, element, event) {}
  }
});
```

##Contributing

All Pull Requests, Comments and Suggestions are welcome!

[1]: http://papaparse.com/ "Papa Parse"
[2]: http://iamstef.net/ember-app-kit/ "Ember App Kit"
[3]: http://iamstef.net/ember-cli/ "Ember CLI"
[4]: https://twitter.com/stefanpenner "Stef Penner, Twitter"
[5]: http://papaparse.com/docs.html#config "Papa Parse Config"
[6]: http://papaparse.com/docs.html#files "Papa Parse, Parse a file"

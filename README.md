# Hyper Validator Base

Enables validation for inputs in conjunction with hyper-validator modules.

## Usage

This is the base for all the validator modules. It collects the different validator modules and runs the
validattions at the right time. To install it simply do `npm install hyper-validator-base --save`.
This will add the validator base in your *node_modules* folder and insert it as a dependecy in *package.json*.

Remember to load the file in you view, it's as simple as adding:

```
<script type="text/javascript" src="node_modules/hyper-validator-base/src/hyper-validator-base.js"></script>
```

If you are using Gulp or Grunt this process might be automated.

To initialize it you need to inject `hyper-input-validator` as a dependecy in your angular module. Like this:

```
angular.module("hyperCoolApp", ['hyper-input-validator']);
```

And now you should be all good.

## Modules

Now you are ready to install the individual input validators. At the moment there are 1 you can add:
- [float validator]

[float validator]: https://github.com/hyperoslo/hyper-validator-float

Follow the guide in the individual validator modules to add them to you project.

If you can't find any validators that suit you, then feel free to add an issue, or even better
contribute and make your own validator.

## Contributing

Please check our [playbook] for guidelines on contributing.

[playbook]: https://github.com/hyperoslo/playbook/blob/master/GIT_AND_GITHUB.md

## Credits

[Hyper] made this. We're a digital communications agency with a passion for good
code, and if you're using this library we probably want to [hire you].

[hyper]: http://hyper.no
[hire you]: http://www.hyper.no/jobs

## License

This project is available under the MIT license. See the [LICENSE].

[license]: https://github.com/hyperoslo/hyper-content-for-angular/blob/master/LICENSE.md
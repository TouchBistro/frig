friggingBootstrap = require "../frigging_bootstrap.coffee"
{input}           = React.DOM

friggingBootstrap.Submit = React.createFactory React.createClass

  displayName: 'Frig.friggingBootstrap.Submit'

  mixins: [Frig.InputMixin]

  getFriggingProps: ->
    inputHtml:
      placeholder:  -> @frigProps.placeholder
      defaultValue: -> @frigProps.initialValue
      className:    -> @frigProps.className
      type:         -> @frigProps.htmlInputType

  render: ->
    input @frigProps.inputHtml
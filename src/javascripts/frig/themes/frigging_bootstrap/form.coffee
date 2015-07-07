React                         = require "react/addons"
friggingBootstrap             = require "../frigging_bootstrap.coffee"
FormMixin                     = require "../../mixins/form_mixin.coffee"
{errorList}                   = friggingBootstrap
{div, form, label, input}     = React.DOM

friggingBootstrap.Form = React.createClass

  displayName: 'Frig.friggingBootstrap.Form'

  mixins: [FormMixin]

  getFriggingProps: ->
    formHtml:
      className: -> "form-#{@frigProps.layout}" if @frigProps.layout

  render: ->
    form @frigProps.formHtml, @friggingChildren()

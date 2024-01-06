import { Component } from "./Component.js";
import { Input } from "./Input.js";
import { Label } from "./Label.js";
import { Form } from "./Form.js";

const title = new Component('h1', 'body', {textContent: 'Olá, mundo!'})
title.render()

title.tag = 'h3'

title.build().render()

const form = new Form('body')

const label = new Label('Nome: ', form, {htmlFor: 'nameInput'})
const input = new Input(form, {id: 'nameInput', name: 'name'})

form.render()
label.render()

form.addChildren(input)

form.addChildren(
    new Component('br'),
    new Component('br'),
    new Label('Data de nascimento:', form, {htmlFor: 'birthdayInput'}),
    new Input(form, {id: 'birthdayInput', name: 'birthday', type: 'date'})
)
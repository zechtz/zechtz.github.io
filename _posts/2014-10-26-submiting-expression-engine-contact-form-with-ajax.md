---
title: Submit ExpressionEngine Contact Form With Ajax
date: '2014-10-26 00:00:00'
layout: posts
author: Zachariah Ngonyani
abstract: Control ExpressionEngine Default form submit behaviour and use Ajax to provide
  a better user experience
---
If you ever used ExpressionEngine on your website,then at some point you must have been annoyed by its default contact form submission action, which redirects you to this 'almost impossible to style message' telling you that your message was successfully submitted before it takes you back to your specified redirect url. A friend of mine asked me to show him how we managed to escape that 'ugliness' on our website, so i thought it would be cool to share it here as well, Here's how we managed to get it done.

Basically all computer problems get solved when you note down what needs to be done, breaking down the big problem into smaller manageable parts is how most problems get solved in programming, here's is our thought process on how we arrived to our solution.
First we need to capture the form's submit event and prevent it from doing the stuff that it does normaly, Then we use ajax to send the message. If there's any error we display the error(s), If some required fields are not filled, we we display a message to the user, telling him/her that those fields need to be filled, otherwise just let the user know that his / her message was successfully sent and that's it!

Read the rest of the blog [here](http://watabelabs.com/blog/view/submitting-expressionengines-contact-form-with-ajax)
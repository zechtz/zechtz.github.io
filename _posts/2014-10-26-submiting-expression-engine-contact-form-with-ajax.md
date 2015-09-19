---
layout: posts
title: Submit ExpressionEngine Contact Form With Ajax
author: Zachariah Ngonyani
abstract: Control ExpressionEngine Default form submit behaviour and use Ajax to provide a better user experience
---

If you ever used ExpressionEngine on your website,then at some point you must have been annoyed by its default contact form submission action, which redirects you to this 'almost impossible to style message' telling you that your message was successfully submitted before it takes you back to your specified redirect url. A friend of mine asked me to show him how we managed to escape that 'ugliness' on our website, so i thought it would be cool to share it here as well, Here's how we managed to get it done.

Basically all computer problems get solved when you note down what needs to be done, breaking down the big problem into smaller manageable parts is how most problems get solved in programming, here's is our thought process on how we arrived to our solution.
First we need to capture the form's submit event and prevent it from doing the stuff that it does normaly, Then we use ajax to send the message. If there's any error we display the error(s), If some required fields are not filled, we we display a message to the user, telling him/her that those fields need to be filled, otherwise just let the user know that his / her message was successfully sent and that's it!

## The code(HTML) 
<div class="code-block">
  {% highlight html  linenos%}
<div class="contact_form">
    <h2>How can we help?</h2>
    <div id="show-message"></div>
    {exp:email:contact_form user_recipients="no" recipients="youremail@website.com" charset="utf-8" form_class="custom"}
    <div class="row">
        <label for="email_address">Email Address</label>
        <input type="email" id="email_address" name="from" required="required" />
    </div>
    <div class="row">
        <label for="full_name">Full Name</label>
        <input type="text" id="full_name" name="name" required="required">
    </div>
    <div class="row">
        <label for="message">Your Message</label>
        <textarea class="message" id="message" name="message" required="required"></textarea>
    </div>

    <div class="row">
        <div class="right">
            <input name="submit" type='submit' value='Contact Us' class="button small" />
        </div>
    </div>
    {/exp:email:contact_form}
</div>
  {% endhighlight %}
</div>

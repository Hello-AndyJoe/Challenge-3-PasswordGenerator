# Challenge 03 - Prompt Based Javascript Password Generator


## Description


This web application is designed for users to generate a password using criteria that they select such as password length and the use of lowercase characters, uppercase characters, numbers and special characters. The nature of the password is to be random and therefore harder for conspiring individuals to use reasonable guesses or brute force access to account using these passwords.


## Installation


There is no Installation involved on the users side to utilize this webpage; just visit [https://hello-andyjoe.github.io/Challenge-3-PasswordGenerator/](https://hello-andyjoe.github.io/Challenge-3-PasswordGenerator/)


## Usage


To use this site, click the red button "Generate Password" and a prompt will appear towards the upper portion of the browser's window asking for users to input a number. Once, they input a number, it will move on to a series of prompts asking to Yes or No questions as to what characters they want to be used in their password. In the event that the use input invalid responses, such as a nonnumber for the password legnth or something other that yes or no for the other questions, it will alert the user and ask them again to input a reponse. If all four yes or no questions are answered with no, then the user will get an alert that they cannot anwser no to all of the questions and will have to run through the criteria again. If a user answers the various prompts with valid reponses, they will get an alert that has the generated password.

Additionally, the console can be opened to see various steps that the javascript is taking to generate the password due to console.log methods in the browser inspector. This was also used for troublshooting.


## Credits


Original HTML file 'index.html' and CSS file 'style.css' provided by ASU Bootcamp Course.


## License


MIT License


Copyright (c) 2023 Hello-AndyJoe


Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:


The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.


THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

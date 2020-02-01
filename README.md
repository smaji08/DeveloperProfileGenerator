# DeveloperProfileGenerator
A command-line application that dynamically generates a PDF profile from a GitHub username.

### Feature

The application will be invoked with the following command:
`<node index.js>`

The user will be prompted for the username and favorite color, which will be used as the background color for cards.

### User Story

GIVEN the developer has a GitHub profile

WHEN prompted for the developer's GitHub username and favorite color

THEN a PDF profile is generated

### GIFs and Screen Shots 

![nodejshtmltopdf](https://user-images.githubusercontent.com/54964461/73587251-b370a880-4487-11ea-902c-605cd821d632.gif)

![pdfonbrowser](https://user-images.githubusercontent.com/54964461/73480728-76fa5b00-4368-11ea-8828-2b18e6870088.gif)

![generatedBiopdf](https://user-images.githubusercontent.com/54964461/73480741-7f529600-4368-11ea-9d33-587f0744d209.png)

### My Experience
Getting the profile details were pretty straight forward, getting the no. of starred repos took a little while compared to other details.

Generating PDF from the html was little tricky, tried 2-3 packages but finally settled down with puppeteer where again faced an issue in displaying the fontawesome icons which was finally achieved by setting a value for the property slowMo.

### Credits
1. https://www.youtube.com/watch?v=VjegyE72PBU&t=69s
2. http://stackoverflow.com/
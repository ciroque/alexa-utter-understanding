# alexa-utter-understanding

Steps:

1. Clone `git clone https://github.com/ciroque/alexa-utter-understanding.git`
1. `cd alexa-utter-understanding` 
1. `npm install`
1. `npm run lint`
1. `npm run build`
1. `npm run test`
1. `npm run package`
 
The deployment package is located in the *dist/main/* directory and is called *UtterUnderstanding.zip*. Upload this file to your AWS Lambda. Be sure to have *Node.js 4.3* chosen as your runtime.  


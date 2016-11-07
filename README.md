# alexa-utter-understanding

## Extensible library for creating Amazon Echo (Alexa) Skills with Node.js.

Steps:

1. Clone `git clone https://github.com/ciroque/alexa-utter-understanding.git`
1. `cd alexa-utter-understanding` 
1. `npm install`
1. `npm run lint`
1. `npm run build`
1. `npm run test`
1. `npm run package`
 
The deployment package is located in the *dist/main/* directory and is called *UtterUnderstanding.zip*. Upload this file to your AWS Lambda. Be sure to have *Node.js 4.3* chosen as your runtime.  

## Building an app using alexa-utter-understanding

1. Install using npm:  `npm install https://github.com/ciroque/alexa-utter-understanding.git --save`
2. Define a class that extends IntentHandler and provide an implementation for the handleIntent method
3. Create an instance of the IntentRequestHandler
4. Register your IntentHandler with the IntentRequestHandler instance
5. Create an instance of the UtterUnderstanding class 
6. Register the RequestHandler
7. Start listening for requests 

Sample code:

```
export class MyAmazonHelpIntentHandler extends IntentHandler {
    handleIntent(event: any, context: any): Promise<AlexaResponse> {
        this.logger.debug('W00T::Handling a Help Intent!');
        return new Promise((resolve: any) => { resolve(AlexaResponse.defaultInstance); });
    }
}

let utter = new UtterUnderstanding();
let myRequestHandler = new IntentRequestHandler();
let myHelpHandler = new MyAmazonHelpIntentHandler(
    'MyAmazonHelpIntentHandler', 
    AmazonIntentNames.HelpIntent
);

myRequestHandler.defineIntentHandler(myHelpHandler);

utter.registerRequestHandler(RequestNames.IntentRequest, myRequestHandler);

utter
    .handleRequest(event, context)
    .then((response: any) => {
        context.succeed(response);
    })
    .catch((error: any) => {
        context.fail(error);
    });
```

A full example can be found in the [udder](https://github.com/ciroque/udder) repository.

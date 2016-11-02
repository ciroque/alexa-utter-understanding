import {UtterUnderstanding} from './UtterUnderstanding';

export function handler(event: any, context: any) {
    UtterUnderstanding
        .handler(event, context)
        .then((response: any) => {
            context.succeed(response);
        })
        .catch((error) => {
            context.fail(error);
        });
}

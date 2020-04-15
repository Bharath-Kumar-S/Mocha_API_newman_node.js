const newman = require('newman');

let d = (t) => {
    return {
        "item": [
            {
                "name": "Post",
                "request": {
                    "auth": {
                        "type": "basic",
                        "basic": [
                            {
                                "key": "password",
                                "value": "Admin123!",
                                "type": "string"
                            },
                            {
                                "key": "username",
                                "value": "admin",
                                "type": "string"
                            }
                        ]
                    },
                    "method": "POST",
                    "header": [
                        {
                            "key": "X-Requested-With",
                            "value": "message/http",
                            "type": "text"
                        }
                    ],
                    "body": {
                        "mode": "raw",
                        "raw": `{
                            "accessibleApplicationName": "${t}${t}oogvtv${t}e${t}r${t}flow${t}",
                            "accessibleApplicationUrl": "https://",
                            "accessibleApplicationType": "GENERAL",
                            "accessibleApplicationDescription": "stack app",
                            "externalSystemName": "ngstack",
                            "externalSystemUrl": "https://"
                          }`,
                        "options": {
                            "raw": {
                                "language": "json"
                            }
                        }
                    },
                    "url": {
                        "raw": "https://localhost/health-data-hub/api/v1/accessible-applications",
                        "protocol": "https",
                        "host": [
                            "localhost"
                        ],
                        "path": [
                            "health-data-hub",
                            "api",
                            "v1",
                            "accessible-applications"
                        ]
                    }
                },
                "response": []
            }
        ],
        "auth": {
            "type": "basic",
            "basic": [
                {
                    "key": "password",
                    "value": "Admin123!",
                    "type": "string"
                },
                {
                    "key": "username",
                    "value": "admin",
                    "type": "string"
                }
            ]
        }
    }
}


let i = 5;
while(i!=0){

newman.run({
    collection: d(i),
    // reporters: 'cli',
    iterationCount: 1,
    timeoutRequest: 10000,
    timeoutScript: 5000,
    delayRequest: 0,
    insecure: true, //to disable ssl checks set to true
}).on('start', (err, args) => { // on start of run, log to console
}).on('done', (err, summary) => {
    if (err || summary.error) {
        console.error('\ncollection run encountered an error.');
        // return reject(summary.error);
    }
    else {
        let res = summary.run.executions[0].response.text().toString()
        console.log(res);
        // return resolve(0);
    }
});
i--;
}
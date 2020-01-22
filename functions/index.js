const functions = require('firebase-functions');
const { Storage } = require('@google-cloud/storage');
const gcs = new Storage({
    projectId: 'project-3-285fb'})
const os = require('os');
const path = require('path');
const spawn = require('child-process-promise').spawn;

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.onImageChange = functions.storage.object().onFinalize(event => {
    const object = event.metadata;
    const bucket = object.bucket;
    const contentType = object.contentType;
    const filePath = object.name;

    console.log("file change detected, function execution started")

    if (object.resourceState === "not_exists") {
        console.log("we deleted a file");
        return;
    }

    if (path.basename(filePath).startsWith('resized-')) {
        console.log("we already named that file")
        return;
    }

    const destBucket = gcs.bucket(bucket);
    const tmpFilePath = path.join(os.tmpdir(), path.basename(filePath));
    const metadata = { contentType: contentType };



    return destBucket.file(filePath).download({
        destination: tmpFilePath
    }).then(() => {
        return spawn('convert', [tmpFilePath, '--resize', '500x500', tmpFilePath])
            .then(() => {
                return destBucket.upload(tmpFilePath, {
                    destination: 'resized-' + path.basename(filePath),
                    metadata: metadata
            })
        
        })
    });
});

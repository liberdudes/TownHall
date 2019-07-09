import {db} from './firebase.js'

export function message(id, message) {
    db.ref("messages/" + id).set({
        subject: message.subject,
        body: 'test body'
    });
}
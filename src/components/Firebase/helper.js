import {db} from './firebase.js'

export function addMessage(message) {
    var ref = db.ref("messages/").push().set({
        message
    });
    return ref.key;
}

export function getMessage(id) {
    return db.ref("messages/" + id);
}

export function addMessageForProject(project, message) {
    let path = 'projects/' + project
    db.ref(path).on("value", function(snapshot) {
        console.log(snapshot.val());
        let updates = {};
        let newKey = db.ref(path).push().key;
        updates[newKey] = message;
        db.ref(path).update(updates);
    });
}
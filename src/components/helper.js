import {db} from './firebase.js';

export function getMessage(id) {
    return db.ref("messages/" + id);
}

export function getProjectMessages(projectId) {
    return db.ref("projects/" + projectId);
}

export function getMessages() {
    let list = {};
    db.ref("messages").on('value',snapshot => {
        snapshot.forEach(snapshot => {
            if (snapshot.val().status !== 'Closed') {
                list[snapshot.key] = snapshot.val();
            }
        })
    })
    return list;
}

export function getMessagesAfterDate(timestamp) {
    let list = {};
    db.ref("messages").on('value',snapshot => {
        snapshot.forEach(snapshot => {
            if (snapshot.val().status !== 'Closed') {
                if (snapshot.val().timestamp > timestamp) {
                    list[snapshot.key] = snapshot.val();
                }
            }
        })
    })
    return list;
}

export function addMessageToProject(projectId, message) {
    let updates = {};

    let mKey = db.ref('messages').push().key;
    message["timestamp"] = new Date().getTime();
    message["status"] = "New";
    message["upvote"] = 0;
    message["downvote"] = 0;

    updates['messages/' + mKey] = message;
    updates['projects/' + projectId + "/" + mKey] = true;

    db.ref().update(updates);
}

export function upvoteMessage(messageId) {
    let updates = {};

    db.ref('messages/' + messageId).on('value', snapshot => {
        updates['messages/' + messageId + '/upvote'] = snapshot.val().upvote + 1;
    })

    db.ref().update(updates);
}

export function downvoteMessage(messageId) {
    let updates = {};

    db.ref('messages/' + messageId).on('value', snapshot => {
        updates['messages/' + messageId + '/downvote'] = snapshot.val().downvote + 1;
    })

    db.ref().update(updates);
}

export function updateMessageStatus(messageId, status) {
    let updates = {};

    updates['messages/' + messageId + '/status'] = status;

    db.ref().update(updates);
}

export function getProjects() {
    let list = []
    db.ref("projects").on('value',snapshot => {
        snapshot.forEach(snapshot => {
            list.push(snapshot.key)
        })
    });
    return list;
}
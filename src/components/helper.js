import {db} from './firebase.js';

export function getMessage(id) {
    return db.ref("messages/" + id);
}

export function getProjectMessages(projectId) {
    return db.ref("projects/" + id);
}

export function getMessages() {
    let list = {}
    db.ref("messages").on(snapshot => {
        snapshot.forEach(snapshot => {
            if (!snapshot.val().status.includes('closed')) {
                list.put(snapshot.key, snapshot.val())
            }
        })
    })
    return list;
}

export function getMessagesAfterDate(timestamp) {
    let list = {}
    let map = getMessages()
    map.forEach(val => {
        if (map[val].timestamp > timestamp)
            list.put(val, map[val])
    })
    return list;
}

export function addMessageToProject(projectId, message) {
    let updates = {};

    let mKey = db.ref('messages').push().key;
    message.put("timestamp", new Date().getTime());

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
    return db.ref("projects");
}
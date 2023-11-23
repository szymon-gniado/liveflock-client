import {useEffect} from "react";

export function useChatRoom({serverUrl, roomId}) {
    function createConnection(options) {
        return undefined;
    }

    function showNotification(s) {

    }

    useEffect(() => {
        const options = {
            serverUrl: serverUrl,
            roomId: roomId
        };
        const connection = createConnection(options);
        connection.connect();
        connection.on('message', (msg) => {
            showNotification('New message: ' + msg);
        });
        return () => connection.disconnect();
    }, [roomId, serverUrl]);
}
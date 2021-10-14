import React from 'react';
import Typography from "@material-ui/core/Typography";
import { createMessage } from "../../store/actions/actions";
import { useDispatch } from "react-redux";

const NewMessages = ({ history }) => {
    const dispatch = useDispatch();

    const onSubmit = async messageData => {
        await dispatch(createMessage(messageData));
        history.replace('/');
    };

    return (
        <>
            <Typography variant="h4">New message</Typography>
            <MessageForm
                onSubmit={onSubmit}
            />
        </>
    )
}

export default NewMessages;

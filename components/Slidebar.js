import { Avatar, Button, IconButton } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import { auth, db } from "../firebase";
import { validateEmail } from "../utils/helper";
import { useCollection } from "react-firebase-hooks/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import Chat from "./Chat";


function Slidebar(props) {

    const [user] = useAuthState(auth);
    // find conversation which include signed user
    const useChatRef = db.collection("chats").where("users", "array-contains", user.email);
    const [chatSnappshot] = useCollection(useChatRef);

    // check new email is existed in chat
    const checkEmailExist = (email) => chatSnappshot?.docs.find(chat => chat.data().users.find(user => user === email))?.length > 0;

    const createNewConversation = () => {
        const inputEmail = prompt("Please fill a person who you want to talk");
        if (!inputEmail) return;
        if (validateEmail(inputEmail) && !checkEmailExist(inputEmail) && inputEmail !== user.email) {
            db.collection("chats").add({
                users: [user.email, inputEmail]
            });
        }
    }
    return (
        <Container>
            <Header>
                <UserAvatar src={user.photoURL} onClick={() => auth.signOut()} />
                <IconsContainer>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>

                </IconsContainer>

            </Header>
            <SearchBar>
                <SearchIcon />
                <SearchInput placeholder="Search in chats" />
            </SearchBar>
            <ButtonCreateChat onClick={createNewConversation}>
                START A NEW CHAT
            </ButtonCreateChat>

            {chatSnappshot?.docs.map((chat) => (<Chat key={chat.id} id={chat.id} users={chat.data().users} />))}




        </Container>
    );
}

export default Slidebar;
const Container = styled.div``;
const SearchBar = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;
    border-radius:2px;
`;
const SearchInput = styled.input`
    outline-width: 0;
    border: none;
    flex:1;
`;
const ButtonCreateChat = styled(Button)`
    width: 100%;
    &&&{
        border-top: 1px solid whitesmoke;
        border-bottom: 1px solid whitesmoke;
    }
    
`;
const Header = styled.div`
    display: flex;
    position: sticky;
    top: 0;
    background-color: white;
    z-index: 1;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    height: 80px;
    border-bottom: 1px solid whitesmoke;
`;
const UserAvatar = styled(Avatar)`
    cursor: pointer;
    :hover{
        opacity: 0.8
    }
`;
const IconsContainer = styled.div``;
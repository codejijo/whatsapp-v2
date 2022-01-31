import {
  ChatRounded,
  MoreVertRounded,
  SearchRounded,
} from "@mui/icons-material";
import { Avatar, Button, IconButton } from "@mui/material";
import styled from "styled-components";

const Sidebar = () => {
  return (
    <Container>
      <Header>
        <UserAvatar />
        {/* Side Icons */}
        <IconsContainer>
          <IconButton>
            <ChatRounded />
          </IconButton>
          <IconButton>
            <MoreVertRounded />
          </IconButton>
        </IconsContainer>
      </Header>
      {/* Searchbox */}
      <SearchBox>
        <SearchRounded />
        <SearchInput placeholder="Search in Chats" />
      </SearchBox>
      {/* Start chat button */}
      <SidebarButton>Start a new chat</SidebarButton>
      {/* List chats */}
    </Container>
  );
};

export default Sidebar;

const Container = styled.div``;

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
  :hover {
    opacity: 0.8;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  column-gap: 0.5rem;
`;

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  border-radius: 2px;
`;

const SearchInput = styled.input`
  outline-width: 0;
  border: none;
  flex: 1;
`;

const SidebarButton = styled(Button)`
  width: 100%;
  &&& {
    border-top: 1px solid whitesmoke;
    border-bottom: 1px solid whitesmoke;
  }
`;

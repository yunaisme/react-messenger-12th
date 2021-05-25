import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import DEFAULT_PROFILE from '../img/default_profile.PNG';
import friendListData from '../json/FriendList.json';

export default class User extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            friendList : friendListData,
            searchFriendName : ''
        }
    }
    render(){
        const handleSearch = (e) => {
            e.preventDefault();
            this.setState({searchFriendName : e.target.value});
        }
        const showSearchBar = (
            <SearchBar placeholder="이름 검색" value={this.state.searchFriendName} onChange={handleSearch}/>
        )
        const printFriends = (friends) => {
            friends = friends.filter((friend) => {
                return friend.name.indexOf(this.state.searchFriendName) > -1;
            });
            return friends.map((friend) => {
                return (
                    <Link to={{
                        pathname: `/chatting/${friend.id}`,
                        state: {
                            id : friend.id
                        },
                        }}
                    >
                        <Profile>
                            <ProfileImg src={friend.image} alt={friend.name}></ProfileImg>
                            <ProfileDesc>
                                    <ProfileName>{friend.name}</ProfileName>
                                    <ProfileState>{friend.state}</ProfileState>
                            </ProfileDesc>
                        </Profile>
                    </Link>
                )
            })
        }
        return(
                <Wrapper>
                    <Title>친구</Title>
                    {showSearchBar}
                    <MyProfile>
                        <ProfileImg src={DEFAULT_PROFILE} alt="default profile"></ProfileImg>
                        <ProfileDesc>
                            <ProfileName>황유나</ProfileName>
                            <ProfileState>배고프다</ProfileState>
                        </ProfileDesc>
                    </MyProfile>
                    {printFriends(this.state.friendList.friendList)}
                </Wrapper>
            );
    }
}
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;
const Title = styled.h1`
    padding: 30px;
    margin: 0;
`;
const Profile = styled.div`
    width: 95%;
    display: flex;
    margin: 20px 0 20px 40px;
    padding-bottom: 10px;
`;
const MyProfile = styled(Profile)`
    border-bottom: 1px solid rgba(92, 92, 92, 0.5); 
`;
const ProfileImg = styled.img`
    width: 50px;
    height: 50px;
    margin: 0;
    border-radius: 20px;
`;
const ProfileDesc = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
`;
const ProfileName = styled.div`
    font-weight: bold;
`;
const ProfileState = styled.div`
    margin-top: 5px;
    color: grey;
    font-size: 12px;
`;
const SearchBar = styled.input`
    box-sizing: border-box;
    background-color: rgba(0,0,0,0);
    height: 50px;
    border: none;
    margin: 0px 30px 0px 30px;
    padding: 10px;
    font-size: 15px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 20px;
    &: focus {
        outline: none;
    }
`;
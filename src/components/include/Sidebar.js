import React from 'react'
import styled from 'styled-components'
import UserProfile from '../../assets/images/user.jpg' 
import Dashboard from '../../assets/images/dashboard.png'
import Contact from '../../assets/images/contacticon.svg'
import SearchIcon from '../../assets/images/search.png'
import BellIcon from '../../assets/images/bell.png'



export default function Sidebar() {
    return (
        <>

           <Fixed>
               
                <Aside>
                    <DivTitle>
                        <Text>
                            SaaS Kit
                        </Text>
                    </DivTitle>
                    <User>
                        <UserLeft>
                            <ImageContainer>
                                <UserImage src={UserProfile} />
                            </ImageContainer> 
                        </UserLeft>
                        <UserRight>
                            <UserNAme>
                                Siera Fergurson
                            </UserNAme>
                            <UserEmail>
                                s.fergurson@gmail.com
                            </UserEmail>
                        </UserRight>
                    </User>
                    <Navbar>
                        <Items>
                            <Item>
                                <IconContainer>
                                    <Icon src={Dashboard} />
                                </IconContainer>
                                <IconTitle>
                                    Dashboard
                                </IconTitle>
                            </Item>
                            <Item>
                                <IconContainer>
                                    <Icon src={Contact} />
                                </IconContainer>
                                <IconTitle>
                                    Contacts
                                </IconTitle>
                            </Item>
                        </Items>
                    </Navbar>
                </Aside>
                <Topbar>
                    <Form>
                        <Input type="text" name ="search" placeholder="Global Search" />
                    </Form>
                    <SearchImage src={SearchIcon} />
                    <Bell src={BellIcon} />
                </Topbar>
           </Fixed>
        </>
    )
}

const Fixed = styled.div`
    display: flex;
`;
const SearchImage = styled.img`
    position: absolute;
    left: 17%;
    top: 32px;
`;
const Bell = styled.img`
    position: absolute;
    right: 30px;
    top: 29px;
`;
const Topbar = styled.div`
    padding: 1% 2%;
    width: 100%;
    box-shadow: 1px 7px 23px -2px rgba(0,0,0,0.25);
    height: 50px;
`;
const Form = styled.form`
    
`;
const Input = styled.input`
    width: 70%;
    padding: 10px;
    border:none;
    text-decoration: none;
    font-size: 16px;
`;

const Aside = styled.aside`
    width: 20%;
    height: 100vh;
    box-shadow: 9px 6px 46px -24px rgba(0,0,0,0.75);
`;
const DivTitle = styled.div`
    padding: 27px;
    border-bottom: 1px solid #c0c0c0;

`;
const Text = styled.h2`
    margin: 0;
    color:#49b3f4;
`;
const User = styled.div`
    display: flex;
    margin-top:70px;
    justify-content: center;
    margin-bottom: 40px;
`;
const UserLeft = styled.div`
    margin-right: 10px;
`;
const ImageContainer = styled.div`

`;
const UserImage = styled.img`
    border-radius: 50%;
    
`;
const Icon = styled.img`
    display: block;
    width: 100%;
`;
const IconContainer = styled.div`
    width: 10%;
    margin-right: 10px;
`;
const IconTitle = styled.a`
    color: #4e6481;
    font-weight: 600;
    cursor: pointer;
`;
const UserRight = styled.div`
    
`;
const UserNAme = styled.h4`
    margin:0;
`;
const UserEmail = styled.small`
    color: #aca9a9;
`;
const Navbar = styled.div`
    
`;
const Items = styled.div`
    margin-top: 100px;
    margin-left: 30px
`;
const Item = styled.div`
    display: flex;
    justify-content: start;
    margin-left: 20px;
    margin-bottom: 30px;
`;


import React from 'react'
import styled from 'styled-components'
import George from '../../assets/images/george.png'
import Rebecca from '../../assets/images/rebbecca.png'
import Lindsey from '../../assets/images/lindsey.png'
import Sidebar from '../include/Sidebar'
import { Bar } from 'react-chartjs-2'


export default function Dashboard() {
    return (
        <>
            <DashboardI>
                <AllItems>
                    <Dleft>
                        <TaskOverview>
                            <TaskBAr>
                                <UpperSection>
                                    <LeftTitle>
                                        8 task completed out of 10
                                    </LeftTitle>
                                    <RightTitle>
                                        Show:<Blue>This Week</Blue>
                                    </RightTitle>
                                </UpperSection>
                                <RatingBAr>
                                    <Rating>
                                    </Rating>
                                </RatingBAr>
                                <DateTime>
                                    <Date>
                                        23 December,Sunday
                                    </Date>
                                </DateTime>
                                <Calender>
                                    <SectionDAte>
                                        <Day>
                                            Sun
                                        </Day>
                                        <DateC className='labelled'>
                                            23
                                        </DateC>
                                    </SectionDAte>
                                    <SectionDAte>
                                        <Day className='label'>
                                            Mon
                                        </Day>
                                        <DateC className='labeltwo'>
                                            24
                                        </DateC>
                                    </SectionDAte>
                                    <SectionDAte>
                                        <Day>
                                            Tue
                                        </Day>
                                        <DateC>
                                            25
                                        </DateC>
                                    </SectionDAte>
                                    <SectionDAte>
                                        <Day>
                                            Wed
                                        </Day>
                                        <DateC>
                                            26
                                        </DateC>
                                    </SectionDAte>
                                    <SectionDAte>
                                        <Day>
                                            Thu
                                        </Day>
                                        <DateC>
                                            27
                                        </DateC>
                                    </SectionDAte>
                                    <SectionDAte>
                                        <Day>
                                            Fri
                                        </Day>
                                        <DateC>
                                            28
                                        </DateC>
                                    </SectionDAte>
                                    <SectionDAte>
                                        <Day>
                                            Sat
                                        </Day>
                                        <DateC>
                                            29
                                        </DateC>
                                    </SectionDAte>
                                </Calender>
                                <HrLine></HrLine>
                            </TaskBAr>
                        </TaskOverview>

                        <Projects>
                            <PLeft>
                                <Ptitle>
                                    Send benefit review by sunday
                                </Ptitle>
                                <PSmall>
                                    <B>Due date:</B> December 23, 2018
                                </PSmall>
                                <Developer>
                                    <DeveloperImage>
                                        <DImage src={George} />
                                    </DeveloperImage>
                                    <DeveloperName>
                                        George Fields
                                    </DeveloperName>
                                </Developer>
                            </PLeft>
                            <PRight>
                                <RSmall>
                                    Reminder
                                </RSmall>
                                <PButton>
                                    Completed
                                </PButton>
                            </PRight>
                        </Projects>

                        <Projects>
                            <PLeft>
                                <Ptitle>
                                    Invite to office meet-up
                                </Ptitle>
                                <PSmall>
                                    <B>Due date:</B> December 23, 2018
                                </PSmall>
                                <Developer>
                                    <DeveloperImage>
                                        <DImage src={Rebecca} />
                                    </DeveloperImage>
                                    <DeveloperName>
                                        Rebecca Moore
                                    </DeveloperName>
                                </Developer>
                            </PLeft>
                            <PRight>
                                <RSmall>
                                    Call
                                </RSmall>
                                <PButton1>
                                    Ended
                                </PButton1>
                            </PRight>
                        </Projects>

                        <Projects>
                            <PLeft>
                                <Ptitle>
                                    Office meet-up
                                </Ptitle>
                                <PSmall>
                                    <B>Due date:</B> December 23, 2018
                                </PSmall>
                                <Developer>
                                    <DeveloperImage>
                                        <DImage src={Lindsey} />
                                    </DeveloperImage>
                                    <DeveloperName>
                                        Lindsey Stroud
                                    </DeveloperName>
                                </Developer>
                            </PLeft>
                            <PRight>
                                <RSmall>
                                    Event
                                </RSmall>
                                <PButton>
                                    Completed
                                </PButton>
                            </PRight>
                        </Projects>
                        <Showmore>
                            Show more
                        </Showmore>
                    </Dleft>
                    <Dright>
                        <Graph>
                            <Topbar>
                                <Tleft>
                                    Deals
                                </Tleft>
                                <TRight>
                                    <TSmall>
                                        Show:<B2>Monthly</B2>
                                    </TSmall>
                                </TRight>
                            </Topbar>
                        </Graph>
                        <PieChart1>
                            <ChartTop>
                                <CTop>Task</CTop>
                                <CSmall>Show: </CSmall>
                            </ChartTop>
                            <div>
                                <Bar 
                                    data={{
                                        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                                    }}
                                    width={400}
                                />
                            </div>
                            
                        </PieChart1>
                    </Dright>
                </AllItems>
                <Sidebar />
            </DashboardI>

        </>
    )
}

const DashboardI = styled.div`

`;
const Dleft = styled.div`
     width: 50%;
    box-shadow: 2px 2px 20px 6px rgba(0,0,0,0.43);
    padding: 2%;

`;
const AllItems = styled.div`
   width: 60%;
    position: absolute;
    right: 20%;
    bottom: -3%;
    padding: 2%;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
`;
const TaskOverview = styled.div`
    
`;
const TaskBAr = styled.div`
    
`;
const Blue = styled.b`
    color: #109cf1;
`;
const UpperSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`;
const LeftTitle = styled.div`
    color: #465e7b;
    font-weight: 600;
`;
const RightTitle = styled.div`
    
`;
const RatingBAr = styled.div`
    background: #f0f3f5;
    height: 10px;
    border-radius: 8px;
    margin-bottom:20px;
`;
const Rating = styled.div`
    background: #2ed47a;
    height: 6px;
    width: 80%;
    border-radius: 8px;

`;
const DateTime = styled.b`
`;
const Calender = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
    margin-bottom: 50px;
`;

const Date = styled.div`
    
`;
const HrLine = styled.hr`
    width: 100%;
`;
const Day = styled.h4`
    color: #acb7c4;
    margin-bottom:10px;
`;
const B = styled.b`
    color: #b8bdc1;
`;

const SectionDAte = styled.div``;


const PRight = styled.div`
    display: flex;
    flex-direction: column;
    
`;
const RSmall = styled.small`
    margin-bottom: 50px;
    text-align:right;
    color: #a6b3c5;
    font-weight: 600;;
`;
const PButton = styled.a`
    background: #2ed47a;
    padding: 6px 16px;
    border-radius: 8px;
    color: #fff;
`;
const PButton1 = styled.a`
    background: #f7685b;
    padding: 6px 16px;
    border-radius: 8px;
    color: #fff;
`;
const B2 = styled.b``;

const DateC = styled.div`
    display: flex;
    flex-direction: row;
`;
const Projects = styled.div`
    padding: 2%;
    display: flex;
    justify-content: space-between;
    /* align-items: center */
    box-shadow: -5px 4px 47px 1px rgba(0,0,0,0.16);
    border-radius: 10px;
    margin-top: 20px;
`;
const PLeft = styled.div`
    
`;
const Ptitle = styled.div`
    
`;
const PSmall = styled.div`
    margin-bottom: 20px;
    color: #b8bdc1;
`;
const Developer = styled.div`
    display: flex;
    justify-content: start;
`;
const DeveloperImage = styled.div`
    
`;
const DImage = styled.img`
    border-radius: 50%;
`;
const DeveloperName = styled.div`
    margin-left:10px;
`;
const Showmore = styled.div`
    text-align: center;
    color: #2ea9f2;
    font-weight: 600;
    margin-top: 15px;
`;
const Dright = styled.div`
    
`;
const Graph = styled.div`
    
`;
const Topbar = styled.div`
    
`;
const Tleft = styled.div`
    
`;
const TRight = styled.div`
    
`;
const TSmall = styled.div`
    
`;
const PieChart1 = styled.div`
    
`;
const ChartTop = styled.div`
    
`;
const CTop = styled.div`
    
`;
const CSmall = styled.div`
    
`;

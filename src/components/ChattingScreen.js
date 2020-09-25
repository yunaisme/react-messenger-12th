import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import MessageSender from './MessageSender';

const USER_T_NAME = '고은';
const USER_F_NAME = '정쿨';

const USER_T_IMG = 'https://img.techpowerup.org/200908/eun.png';
const USER_F_IMG = 'https://img.techpowerup.org/200908/NjRiY2JjOGU5YzQz.png';

export default function ChattingScreen() {

	const MSGLIST = [
		{ user: true, content: '안녕하세요 12기 프론트엔드 개발자분들' },
		{ user: true, content: '저희의 대화를 마음껏 조작해보세요 💌' },
		{ user: true, content: '상단에 프로필을 눌러서 발신자 변경하면 됩니당~' },
		{ user: false, content: '안녕 은아' },
		{ user: false, content: '뭐해 ?' },
		{ user: true, content: '시원아 넌 최고의 팀장이야' },
		{ user: false, content: '나도 아니까  ' },
		{ user: false, content: '그만 말해줘도 돼' },
		{ user: true, content: 'ㅠㅠ' },
	];

	return (
		<Wrapper>
			<Header sender = {USER_T_NAME} senderImg = {USER_T_IMG} ></Header>
			{MSGLIST.map((message) => 
				<PrintOneMessage sender = {message.user} message = {message.content}/>
			)}
			<MessageSender></MessageSender>
		</Wrapper>
	);
}

function PrintOneMessage({sender, message}) {
	if(sender) {
		return (
			<LeftMessage>
				<img src={USER_T_IMG} alt="senderImg"/>
				<div className="content">{message}</div>
			</LeftMessage>
		);
	}
	else {
		return(
			<RightMessage>
				<img src={USER_F_IMG} alt="senderImg"/>
				<div className="content">{message}</div>
			</RightMessage>
		);
	}
}

const Wrapper = styled.div`
	background-color: rgb(171,193,209);
`;

const PrintOneMessageStyle = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	img {
		weight: 50px;
		height: 50px;
		border-radius: 20px;
		margin: 10px;
		box-shadow: 0 0 10px rgba(0,0,0,0.2);
	}
	.content{
		display: flex;
		align-items: center;
		padding: 0 10px 0 10px;
		height: 45px;
		border-radius: 10px;
		background-color: white;
		box-shadow: 0 0 15px rgba(0,0,0,0.1);
	}
`;

const LeftMessage = styled(PrintOneMessageStyle)`
	flex-direction: row;
`;

const RightMessage = styled(PrintOneMessageStyle)`
	flex-direction: row-reverse;
`;
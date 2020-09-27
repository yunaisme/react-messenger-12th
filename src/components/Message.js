import React from 'react';
import styled from 'styled-components';

const USER_T_IMG = 'https://img.techpowerup.org/200908/eun.png';
const USER_F_IMG = 'https://img.techpowerup.org/200908/NjRiY2JjOGU5YzQz.png';

export default function Message({sender, message}) {
	if(sender) {
		return (
			<YourMessage>
				<img src={USER_T_IMG} alt="senderImg"/>
				<div className="content">{message}</div>
			</YourMessage>
		);
	}
	else {
		return(
			<MyMessage>
				<img src={USER_F_IMG} alt="senderImg"/>
				<div className="content">{message}</div>
			</MyMessage>
		);
	}
}

const MessageStyle = styled.div`
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

const YourMessage = styled(MessageStyle)`
	flex-direction: row;
`;

const MyMessage = styled(MessageStyle)`
	flex-direction: row-reverse;
`;
import React from 'react';
import styled from 'styled-components';

export default function Header({sender, senderImg}) {
	return (
		<Wrapper>
			{/* 발신자 변경해주는 상단바 */}
			<button>
				<img src={senderImg} alt="senderImg"/>
			</button>
			<SenderInfo>
				<h2>{sender}</h2>
				<div>현재 활동중</div>
			</SenderInfo>
		</Wrapper>
	)
}
const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	background-color: blue;
	color: black;
	button {
		height: 80px;
		margin: 0 0 0 10px;
		background-color: white;
		border: none;
	}
	img {
		width: 70px;
		height: 70px;
		border-radius: 15px;
	}
`;

const SenderInfo = styled.div`
	display: flex;
	flex-direction: column;
	margin: 15px 0 0 10px;
	h2 {
		margin: 0;
	}
`;
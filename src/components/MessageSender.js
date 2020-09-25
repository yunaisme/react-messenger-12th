import React from 'react';
import styled from 'styled-components';

export default function MessageSender() {
	return (
		// 메시지 전송부
		<Wrapper>
			<input></input>
			<button type="submit">전송</button>
		</Wrapper>
	);
}
const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	background-color: blue;
	padding: 10px;

	input {
		margin-right: 10px;
		flex: 1;
		font-size: 15px;
		height: 50px;
		border: 1px solid rgba(0, 0, 0, 0.3);
		border-radius: 15px;
	}
	button {
		font-size:15px;
		width: 65px;
		height: 50px;
		border: none;
		border-radius: 20px;
		background-color: rgb(255,224,102);
	}
`;

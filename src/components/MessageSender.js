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
	position: sticky;
	bottom: 0;
	display: flex;
	flex-direction: row;
	background-color white;
	opacity: 0.8;
	padding: 10px;
	input {
		border: none;
		margin-right: 10px;
		flex: 1;
		font-size: 15px;
		height: 50px;
		border: 1px solid rgba(0, 0, 0, 0.3);
		border-radius: 15px;
	}
	input: focus{
		outline: none;
	}
	button {
		border: 0;
		outline: 0;
		font-size:15px;
		width: 65px;
		height: 50px;
		border: none;
		border-radius: 20px;
		background-color: rgb(255,224,102);
		opacity: 1;
	}
`;

import React from 'react';
import styled from 'styled-components';

export default function MessageSender() {
	return (
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
	background-color: rgba(255,255,255,0.8);
	padding: 10px;
	input {
		background-color: rgba(0,0,0,0);
		height: 45px;
		border: none;
		margin: 0 10px 0 0;
		flex: 1;
		font-size: 15px;
		border: 1px solid rgba(0, 0, 0, 0.3);
		border-radius: 20px;
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
	}
`;

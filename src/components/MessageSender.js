import React from 'react';
import styled from 'styled-components';

export default function MessageSender({message, changeNewMsg, updateMsglist}) {
	
	return (
		<Wrapper>
			<form onSubmit={updateMsglist}>
				<input onChange={changeNewMsg} value={message}></input>
				<button type="submit">전송</button>
			</form>
		</Wrapper>
	);
}
const Wrapper = styled.div`
	box-sizing: border-box;
	width: 100%;
	position: fixed;
	bottom: 0;
	background-color: rgba(255,255,255,0.8);
	padding: 10px;
	form {
		display: flex;
		flex-direction: row;
	}
	input {
		box-sizing: border-box;
		background-color: rgba(0,0,0,0);
		height: 50px;
		border: none;
		margin: 0 10px 0 0;
		padding: 10px;
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

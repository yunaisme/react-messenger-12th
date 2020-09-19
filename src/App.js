import React from 'react';
import styled from 'styled-components';

function App() {
	return <Wrapper>리액트 메신저</Wrapper>;
}

export default App;

const Wrapper = styled.div`
	height: 100vh;
	& * {
		font-family: sans-serif;
	}
`;

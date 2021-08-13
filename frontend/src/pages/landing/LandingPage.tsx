import styled from 'styled-components';

const Icon = styled.img`
  width: 100px;
  height: 50px;
`

export default function LandingPage() {
  return (
    <div>
      <header >
        <Icon src="/icon.svg" alt="logo" />
        <p>Groupomania</p>
      </header>
    </div>
  );
}

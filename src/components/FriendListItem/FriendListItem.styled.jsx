import styled from '@emotion/styled'

export const Item = styled.li`
    display: flex;
    justify-content: center;
    background-color: white;
    width: 400px;
    text-align: center;
    margin-bottom: 20px;
    padding: 20px 0 20px 0;
    align-items: center;

    box-shadow: 0 15px 10px #777;
    
`;

export const Name = styled.p`
    margin-left: 20px;
`;

export const Status = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => (props.$isOnline ? 'green' : 'red')};
  margin-right: 10px;
`;

  

    

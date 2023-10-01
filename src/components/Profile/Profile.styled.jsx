import styled from '@emotion/styled';

export const ProfileCard = styled.div`
    width: 300px;
    background-color: #ededed;
    border-radius: 10px;
    margin: 20px auto 0 auto;
    border-bottom-left-radius: 14px;
    border-bottom-right-radius: 14px;

    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
            0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
            0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
            0 100px 80px rgba(0, 0, 0, 0.12);
   

`;

export const Img = styled.img`
    width: 150px;
    height: 150px;
    margin: 20px auto;
`;

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0 20px 0;
`;

export const Name = styled.p`
    font-weight: 800;
    font-size: 20px;
    margin-bottom: 10px;
    margin-top: 0;

`;

export const Tag = styled.p`
    margin-top: 0;
    margin-bottom: 10px;
    color: #9E9E9E;

`;
export const Location = styled.p`
    margin: 0;
    color: #9E9E9E;
`;

export const Stats = styled.ul`
    display: flex;
    justify-content: space-around;
    padding: 0;
    margin: 0;
    background-color: #EC9B3B;;

    border-bottom-left-radius: 14px;
    border-bottom-right-radius: 14px;
`;

export const StatsItem = styled.li`
     display: flex;
    flex-direction: column;
    align-items: center;

    border-right: 1px solid #d47e66;
    padding: 20px 15px;
    width: 33%;

    :last-child {
        border-right: 0;
    }
`;








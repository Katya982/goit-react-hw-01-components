import styled from '@emotion/styled'
import { colorGenerator } from './color.generator';

export const Section = styled.ul`
    width: 400px;
    height: 180px;
    background-color: #ededed;
    border-radius: 14px;
    padding: 20px 0 0 0;
    margin: 100px auto 0 auto;

    display: flex;
    flex-direction: column;
    align-items: center;
     justify-content: space-between;
    }

    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
            0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
            0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
            0 100px 80px rgba(0, 0, 0, 0.12);
    }
`;

export const Card = styled.ul`
    display: flex;
    justify-content: space-between;
    padding: 0;
    width: 100%;
`;

export const CardItem = styled.li`
    background-color: ${colorGenerator};
    list-style: none;
    width: 20%;
    text-align: center;
    padding: 40px 0;
    
    :first-of-type {
        border-bottom-left-radius: 14px;
    }

    :last-of-type {
        border-bottom-right-radius: 14px;
    }
`;

export const Title = styled.span`
   padding: 10px;
   font-weight: 800;
   text-transform: uppercase;
   font-size: 30px;
    
`;

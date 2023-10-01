import styled from '@emotion/styled';

export const Table = styled.table`
    overflow:hidden;
    border:1px solid #d3d3d3;
    background:#fefefe;
    width: 500px;
    margin:100px auto 100px auto;
    border-radius:5px;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
`;

export const Row = styled.tr`
    :nth-of-type {
        background:#f6f6f6;
    }
`;

export const TableHeader = styled.th`
    padding:18px 28px 18px; 
    text-align:center;
    padding-top:22px; 
    text-shadow: 1px 1px 1px #fff;
    background:#e8eaeb;

    :first-of-type{
        text-align:left
    }    
`;

export const TableData = styled.td`
    padding:18px 28px 18px; 
    text-align:center; 
    border-top:1px solid #e0e0e0; 
    border-right:1px solid #e0e0e0;

    :first-of-type{
        text-align:left
    }

    :last-of-type{
        border-right:none;
    }
`;

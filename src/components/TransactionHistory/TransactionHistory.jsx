import {Table, Row, TableHeader, TableData} from './TransactionHistory.styled';
import PropTypes from 'prop-types';


export const TransactionHistory = ({ items}) => {
    return (
      <Table>
        <thead>
            <Row>
                <TableHeader>Type</TableHeader>
                <TableHeader>Amount</TableHeader>
                <TableHeader>Currency</TableHeader>
            </Row>
        </thead>

        <tbody>
            {items.map(({ id, type, amount, currency }) => (
                <Row key = {id}>
                    <TableData>{type}</TableData>
                    <TableData>{ amount}</TableData>
                    <TableData>{ currency}</TableData>
                </Row>
            ))}
        </tbody>
</Table>
    )
}





TransactionHistory.propTypes = {
    type: PropTypes.number.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.number.isRequired,
}


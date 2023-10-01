import PropTypes from 'prop-types';
import {Card, CardItem, Section, Title} from './Statistics.styled'

export const Statistics = ({ title, stats}) => {
    return (
        <Section>
            {title && <Title>{ title }</Title>}

            <Card>
                {stats.map(({ id, label, percentage }) => (
                    <CardItem key={id}>
                        <span>{label}</span>
                        <span >{percentage}%</span>
                    </CardItem>
                ))}
                
            </Card>
        </Section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.string.isRequired,
    label: PropTypes.number.isRequired,
    percentage: PropTypes.string.isRequired,
}


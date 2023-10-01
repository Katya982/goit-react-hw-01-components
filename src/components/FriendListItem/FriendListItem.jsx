import PropTypes from 'prop-types';
import { Item, Name, Status} from './FriendListItem.styled'

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <Item>
            <Status $isOnline={isOnline}/>
            <img src={avatar} alt="User avatar" width="48" />
            <Name>{name}</Name>
        </Item>
    );
};
 
FriendListItem.propTypes = {
    // avatar: PropTypes.element.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,

}

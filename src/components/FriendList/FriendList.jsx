import PropTypes from 'prop-types';
import {FriendScroll} from './FriendList.styled'
import { FriendListItem } from '../FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
    return (
        <FriendScroll>
            {friends.map(friends => (
                <FriendListItem key={friends.id} {...friends}></FriendListItem>
            ))}
        </FriendScroll>)
};



FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            // avatar: PropTypes.element.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
        })
    )
   

}



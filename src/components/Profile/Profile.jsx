import PropTypes from 'prop-types';
import {ProfileCard, Name, Tag, Location, Stats, StatsItem, Img, Description} from './Profile.styled'


export const Profile = ({username, tag, location, avatar, stats}) => {
    return (
  <ProfileCard>
        <Description>
            <Img
              src={avatar}
              alt="User avatar"
            />
            <Name>{username}</Name>
            <Tag>@{tag}</Tag>
            <Location>{location}</Location>
        </Description>

  <Stats>
    <StatsItem>
      <span>Followers</span>
      <span>{stats.followers }</span>
    </StatsItem>
    <StatsItem>
      <span>Views</span>
      <span>{stats.views }</span>
    </StatsItem>
    <StatsItem>
      <span>Likes</span>
      <span>{stats.likes }</span>
    </StatsItem>
  </Stats>
  
</ProfileCard>
    )
};


Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.string.isRequired,

}

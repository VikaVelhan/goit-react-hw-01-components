import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
  return (
    <div>
      <ul class="friend-list"></ul>
    </div>
  );
};
FriendList.propTypes = {
  friends: PropTypes.array,
};
export default FriendList;

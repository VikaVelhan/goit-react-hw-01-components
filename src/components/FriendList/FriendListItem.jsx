import PropTypes from 'prop-types';
import css from './FriendList.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li class={css.item}>
      <span class={css.status}>{isOnline}</span>
      <img class={css.avatar} src={avatar} alt={name} width="48" />
      <p class={css.name}>{name}</p>
    </li>
  );
};
FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
export default FriendListItem;

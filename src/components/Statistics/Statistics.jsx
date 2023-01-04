import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => {
  return (
    <div>
      <section>
        <h2>{title}</h2>

        <ul>
          <li>
            <span>{stats.label}</span>
            <span>{stats.percentage}%</span>
          </li>
          <li>
            <span>{stats.label}</span>
            <span>{stats.percentage}%</span>
          </li>
          <li>
            <span>{stats.label}</span>
            <span>{stats.percentage}%</span>
          </li>
          <li>
            <span>{stats.label}</span>
            <span>{stats.percentage}%</span>
          </li>
        </ul>
      </section>
    </div>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};
export default Statistics;

import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => {
  return (
    <div>
      <section>
        {title && <h2>{title}</h2>}

        {stats.map(stat => (
          <ul key={stat.id}>
            <li>
              <span>{stat.label}</span>
              <span>{stat.percentage}%</span>
            </li>
          </ul>
        ))}
      </section>
    </div>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
export default Statistics;

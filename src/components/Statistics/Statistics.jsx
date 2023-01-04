import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => {
  return (
    <div>
      <section>
        <h2>{title}</h2>

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
  title: PropTypes.string.isRequired,
  stats: PropTypes.array.isRequired,
};
export default Statistics;

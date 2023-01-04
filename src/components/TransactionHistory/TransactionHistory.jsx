import PropTypes from 'prop-types';

const TransactionHistory = ({ items }) => {
  return (
    <div>
      {items.map(item => (
        <table class="transaction-history" key={item.id}>
          <thead>
            <tr>
              <th>Type</th>
              <th>Amount</th>
              <th>Currency</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </tr>
          </tbody>
        </table>
      ))}
    </div>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};

export default TransactionHistory;

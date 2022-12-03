import { date } from "../../services";
import "./view-body.scss";

export const ViewBody = ({ description, to, id, price, createdDate, email, dueDate }) => {
  return (
    <div className="view-body">
      <div className="view-body__inner">
        <div className="view-body__id">
          <p><span>#</span> UZ{id}</p>
          <h3>{description}</h3>
        </div>

        <div className="view-body__info">
          <div>
            <h3>Invoice Date</h3>
            <p>{createdDate?.slice(8, 10)} {date(createdDate?.slice(5, 7))} {createdDate?.slice(0, 4)}</p>
          </div>

          <div>
            <h3>Bill To</h3>
            <p>{to}</p>
          </div>

          <div>
            <h3>Sent to</h3>
            <p>{email}</p>
          </div>

          <div>
            <h3>Payment Due</h3>
            <p>{dueDate?.slice(8, 10)} {date(dueDate?.slice(5, 7))} {dueDate?.slice(0, 4)}</p>
          </div>
        </div>

        <div className="view-body__money">
          <h3>Amount Due</h3>
          <p>£ {price}</p>
        </div>
      </div>
    </div>
  )
}
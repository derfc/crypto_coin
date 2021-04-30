import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import classes from "./DetailTitlePrice.module.css";
import DetailBuyModal from "./DetailBuyModal";


function DetailTitlePrice(props) {
  const [showBuyModal, setShowBuyModal] = useState(false);
  const [itemName, setitemName] = useState("");
  const token = useSelector((state) => state.detail.token);

  return (
    <>
      <p className={classes.category}>{props.itemdata.category}</p>
      <p className={classes.title}>{props.itemdata.title}</p>
      <p>Owned by {token.owner}</p>
      <div className={classes.pricediv}>
        <p>Current Price</p>
        <p className={classes.title}>ETH {props.itemdata.price}</p>
        <Button variant="primary" onClick={() => setShowBuyModal(true)}>
          Buy Now (LAUNCH MODAL)
        </Button>
        <DetailBuyModal
          show={showBuyModal}
          buyWithoutApprovalToken={props.buyWithoutApprovalToken}
          onHide={() => setShowBuyModal(false)}
        />

        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log(itemName);
            props.mint(itemName);
            setitemName("");
          }}
        >
          <div className="form-group">
            <input
              id="itemName"
              type="text"
              value={itemName}
              onChange={(e) => setitemName(e.target.value)}
              className="form-control form-control-md"
              placeholder="Item Name"
              required
            />
          </div>
          <Button type="submit" className="m-3" variant="success">
            Mint
          </Button>
          <Button className="m-3" variant="info" onClick={(e) => props.itemOnSale(0, 20)}>
            Make Item On Sale
          </Button>
        </form>
      </div>
    </>
  );
}

export default DetailTitlePrice;

//   return (
//     <>
//       <Button variant="primary" onClick={() => setModalShow(true)}>
//         Launch vertically centered modal
//       </Button>

//       <MyVerticallyCenteredModal
//         show={modalShow}
//         onHide={() => setModalShow(false)}
//       />
//     </>
//   );
// }

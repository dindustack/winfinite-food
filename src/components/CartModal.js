import React from "react";
import { DataContext } from "./productsContext";
import Modal from "react-bootstrap/Modal";




const CartModal = (props) => {
  //  contextType = DataContext;
  // const { products } = this.context;

  // render() {
    return (
      // const { products } = this.context;
    <React.Fragment>
    <Modal
      {...props}
      className="modal fade"
      
    >
      <Modal.Dialog className="modal-dialog modal-vertical modal-dialog-scrollable">
        
          <Modal.Header className="text-center" closeButton>
            
          </Modal.Header>
          
        
      </Modal.Dialog>
      <Modal.Body>
        <div>
          <h4>Cart (1)</h4>
          
        </div>
      <div className="scrollbar-inner">

      {/* {products.map((product) => ( */}
           <div className="list-group list-group-flush" >
            <a href="action" className="list-group-item list-group-item-action">
              <div className="d-flex align-items-center" >
                <div>
                  <div className="avatar-parent-child">
                <img alt="Image placeholder" src="..." className="img-fluid" />
                    
                  </div>
                </div>
                <div className="flex-fill ml-3">
                  <h6 className="text-sm mb-0">Product Name</h6>
                  <p className="text-sm mb-0">
                    Quantity
                  </p>
                </div>
              </div>
            </a>
          </div>
          {/* ))} */}
        </div>  
      </Modal.Body>
      <Modal.Footer>
        <button onClick={props.onHide}>Close</button>
      </Modal.Footer>
    </Modal>
    </React.Fragment>

  );
  
}


export default CartModal;

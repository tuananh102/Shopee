import { connect } from "react-redux";
import Home from "../pages/Home";
import { addToCart } from "../services/actions/cart";

const mapStateToProps = (state) => ({
  data: state,
});

const mapDispatchToProps = (dispatch) => ({
  addToCartHandle: (data) => dispatch(addToCart(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

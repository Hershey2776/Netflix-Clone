import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import db from "../../fireBase";
import "./Plans.css";
import { loadStripe } from "@stripe/stripe-js";

const Plans = () => {
  const [products, setProducts] = useState([]);
  const user = useSelector(selectUser);
  const [subscription, setSubscription] = useState({});

  useEffect(() => {
    db.collection("customers")
      .doc(user.uid)
      .collection("subscriptions")
      .get()
      .then((querySnaphot) => {
        querySnaphot.forEach(async (subscription) => {
          setSubscription({
            role: subscription.data().role,
          });
        });
      });
  }, [user.uid]);

  useEffect(() => {
    db.collection("products")
      .where("active", "==", true)
      .get()
      .then((snapshot) => {
        const products = {};
        snapshot.forEach(async (productDoc) => {
          products[productDoc.id] = productDoc.data();
          const priceSnapshot = await productDoc.ref.collection("prices").get();
          priceSnapshot.forEach((priceDoc) => {
            products[productDoc.id].prices = {
              priceId: priceDoc.id,
              priceData: priceDoc.data(),
            };
          });
        });
        setProducts(products);
      });
  }, []);

  const loadCheckout = async (priceId) => {
    const docRef = await db
      .collection("customers")
      .doc(user.uid)
      .collection("checkout_sessions")
      .add({
        price: priceId,
        success_url: window.location.origin,
        cancel_url: window.location.origin,
      });
    docRef.onSnapshot(async (snap) => {
      const { error, sessionId } = snap.data();

      if (error) {
        alert(`An error occured: ${error.message}`);
      }
      if (sessionId) {
        const stripe = await loadStripe(
          "pk_test_51LPYL3SJ8XlcVlpirVFwMTbxwHNgVP7HMng3C4o802t3LuiZwuUQpQcskc4PKwY8GebCWQgqPyCSlbmJsuU3gIlw00Lpplko3D"
        );
        stripe.redirectToCheckout({ sessionId });
      }
    });
  };

  return (
    <div className="plans">
      {Object.entries(products).map(([productId, productData]) => {
        const isCurrentPackage = productData.name.includes(subscription.role);
        return (
          <div
            key={productId}
            className={`${
              isCurrentPackage && "plans_plan--disabled"
            } plans_plan`}
          >
            <div className="plans_info">
              <h5>{productData.name}</h5>
              <h6>{productData.description}</h6>
            </div>

            <button
              onClick={() =>
                !isCurrentPackage && loadCheckout(productData.prices.priceId)
              }
            >
              {isCurrentPackage ? "Current Package" : "Subscribe"}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Plans;

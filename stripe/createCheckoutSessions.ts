// import { firebaseApp } from "../src/fireBase";
// import getStripe from "./initializeStripe";

// export async function createCheckoutSessions(uid: string) {
//     const firestore = firebaseApp.firestore();
//     const checkoutSessionRef = await firestore.collection("users").doc(uid).collection("checkout_sessions").add({
//         price: "price_1LO8TfSEd8XaO8X9AYeE1viI",
//         success_url: window.location.origin,
//         cancel_url: window.location.origin
//     })
    
//     checkoutSessionRef.onSnapshot(async (snap) => {
//         const { sessionId } = snap.data();
//         if (sessionId) {
            
//         }
//     })
// }


// export default createCheckoutSessions;

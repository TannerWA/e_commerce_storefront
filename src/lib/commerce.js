import Commerce from '@chec/commerce.js';


// Creating a new instance of Commerce. This is basically the "store".
export const commerce = new Commerce(process.env.REACT_APP_CHEC_PUBLIC_KEY, true);

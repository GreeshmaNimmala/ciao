import {environment} from  '../../environments/environment';

export const baseURL=environment.production?'https://ciaosoaps.com':'http://localhost:3000';
export const productURL=baseURL+'/soaps';
export const cartURL=baseURL+'/cart';
export const whishlistURL=baseURL+'/wishlist';



import buyerMdl from "../models/BuyerMdl.js";
import sellerMdl from "../models/SellerMdl.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const logoutController = {};

logoutController.logout = async (req, res) => {
   res.clearCookie('authToken', { 
     httpOnly: true,
     path: '/',
     sameSite: 'lax',
     secure: process.env.NODE_ENV === 'production'
   });
 
   return res.status(200).json({ message: 'Logged out successfully' });
 };

export default logoutController;
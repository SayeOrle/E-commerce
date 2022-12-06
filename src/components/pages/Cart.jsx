import React from "react";

function Cart() {
  return (
    <div className="pt-[140px] sm:pt-[160px] flex container justify-between">
      <div className="w-full flex-1 gap-y-2 max-w-[45rem]">
        <div className="px-7 py-5 border-2 border-gray-300">
          <small>
            Add <span className="text-red-400">$161.00</span> to cart and get
            free shipping!
          </small>
          <div className="w-full bg-gray-200 h-2 rounded-xl after:contents-[' '] after:bg-red-500 after:absolute after:left-0 after:top-0 after:h-full after:w-10 overflow-hidden relative"></div>
        </div>

        <div>
          <table class="shop-table mt-7 text-sm border-collapse	 w-full">
            <thead className="py-2">
              <th class="text-left text-sm font-semibold">&nbsp;</th>
              <th class="text-left text-sm font-semibold">&nbsp;</th>
              <th class="text-left text-sm font-semibold">Product</th>
              <th class="text-left text-sm font-semibold">Price</th>
              <th class="text-center text-sm font-semibold">Quantity</th>
              <th class="text-center text-sm font-semibold">Subtotal</th>
            </thead>
            <tbody class="py-2 border-t border-gray-300">
              <tr class="border-b border-gray-300">
                <td></td>
                <td class="relative">
                  <img
                    src="https://e-commerce-udemy.netlify.app/img/products/product1/1.png"
                    alt=""
                    className="max-h-[4.6875rem] max-w-[3.75rem]"
                  />
                  <i class=""></i>
                </td>
                <td>Analogue Resin Strap</td>
                <td>$108.00</td>
                <td className="text-center">1</td>
                <td className="text-center">$108.00</td>
              </tr>
            </tbody>
          </table>
          <div className="flex justify-between py-10">
            <div className="flex gap-x-2">
              <input type="text" placeholder="Coupon code" className="outline-none border border-gray-300"/>
              <button className="px-7 py-2 bg-black text-white">Apply Coupon</button>
            </div>
            <button className="px-5 py-2 bg-red-500 text-white">Update Cart</button>
          </div>
        </div>
      </div>
      <div className="border-2 border-gray-300 p-10">
        <h3 className="text-xl py-2">Cart totals</h3>
        <ul className="flex flex-col gap-y-7">
          <li className="flex justify-between border-b-2 border-gray-300 gap-x-14">
            <small>Subtotal </small>
            <span>$294.00</span>
          </li>
          <li className="flex justify-between  border-b-2 border-gray-300 items-center gap-x-14">
            <small>Shipping</small>
            <div className="flex flex-col gap-y-1 ">
              <div className="flex items-center gap-x-1">
                <label htmlFor="fastcargo">fastcargo: 15$</label>
                <input type="checkbox" name="" id="fastcargo" />
              </div>
              <span className="text-red-500">Change Address</span>
            </div>
          </li>
          <li className="flex justify-between border-b-2 border-gray-300 gap-x-14">
            <small>Total</small>
            <strong>$309.00</strong>
          </li>
        </ul>
        <button className="px-7 py-3 bg-red-500 text-white">
          Proceed to checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;

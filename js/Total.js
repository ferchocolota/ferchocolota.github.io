const PRODUCTS = [
  {
    name: "Jim Beam Kentucky Straight",
    description: "Fugiat voluptates quasi nemo, ipsa perferendis",
    price: "30.99",
    image: "images/xprod-2.jpg.pagespeed.ic.b5IkdRrGuS.jpg",
    total: "0",
  },
  {
    name: "Jim Beam Kentucky Straight",
    description: "Fugiat voluptates quasi nemo, ipsa perferendis",
    price: "44.99",
    image: "images/xprod-2.jpg.pagespeed.ic.b5IkdRrGuS.jpg",
    total: "0",
  },
  {
    name: "Jim Beam Kentucky Straight",
    description: "Fugiat voluptates quasi nemo, ipsa perferendis",
    price: "22.99",
    image: "images/xprod-2.jpg.pagespeed.ic.b5IkdRrGuS.jpg",
    total: "0",
  },
  {
    name: "Jim Beam Kentucky Straight",
    description: "Fugiat voluptates quasi nemo, ipsa perferendis",
    price: "14.99",
    image: "images/xprod-2.jpg.pagespeed.ic.b5IkdRrGuS.jpg",
    total: "0",
  },
  {
    name: "Jim Beam Kentucky Straight",
    description: "Fugiat voluptates quasi nemo, ipsa perferendis",
    price: "41.99",
    image: "images/xprod-2.jpg.pagespeed.ic.b5IkdRrGuS.jpg",
    total: "0",
  },
  {
    name: "Jim Beam Kentucky Straight",
    description: "Fugiat voluptates quasi nemo, ipsa perferendis",
    price: "13.99",
    image: "images/xprod-2.jpg.pagespeed.ic.b5IkdRrGuS.jpg",
    total: "0",
  },
];

class Total {
  constructor(productList) {
    this._productList = productList;
    this._productData = PRODUCTS;
    this.setListOfProducts()
  }
  setListOfProducts(){
    this.getAllProducts().forEach((item) => {
      this._productList.innerHTML += item;
    });
  }
  setQuantity(index, amount){
    this._productData[index].total = this._productData[index].price * amount
    this.setListOfProducts()
  }
  getAllProducts() {
    const allProds = [];
    PRODUCTS.forEach((item, i) => {
      allProds.push(this.getProductString(item));
    });
    return allProds;
  }
  getProductString(item) {
    const { name, description, price, image, total } = item;
    return `
                <tr class="alert" role="alert">
                  <td>
                    <label class="checkbox-wrap checkbox-primary">
                      <input type="checkbox" checked />
                      <span class="checkmark"></span>
                    </label>
                  </td>
                  <td>
                    <div
                      class="img"
                      style="
                        background-image: url(${image});
                      "
                    ></div>
                  </td>
                  <td>
                    <div class="email">
                      <span>${name}</span>
                      <span
                        >${description}</span
                      >
                    </div>
                  </td>
                  <td>$${price}</td>
                  <td class="quantity">
                    <div class="input-group">
                      <input
                        type="text"
                        name="quantity"
                        class="quantity form-control input-number"
                        value="1"
                        min="1"
                        max="100"
                      />
                    </div>
                  </td>
                  <td>$${total}</td>
                  <td>
                    <button
                      type="button"
                      class="close"
                      data-dismiss="alert"
                      aria-label="Close"
                    >
                      <span aria-hidden="true"
                        ><i class="fa fa-close"></i
                      ></span>
                    </button>
                  </td>
                </tr>
        `;
  }
}

import React, { createContext, Component } from "react";
export const DataContext = createContext();

export class DataProvider extends Component {
  state = {
    products: [
      {
        _id: "chocolate",
        title: "Chocolate nuts 'n' seeds butter",
        src: require("../assets/img/chocolate.png"),
        brand: "Nuts 'n' Seeds",
        heading: "Chocolate",
        weight: "340g",
        price: 1700,
        content: {
          description: {
            make:
              "This Chocolate Nuts n Seeds butter is one of our favourite, made with the perfect blend of smooth nuts n Seeds and premium cocoa powder creating the best combo spread. ",
            use:
              "It's great as a sweet dip for fruit, perfect in baked goods, over pancakes or as an ice cream topping. The possibilities are endless, grab a bigger spoon and enjoy by the spoonful.",
          },
          ingredients: {
            condiments: "Sesame seed, Cashew, Coconut, Cocoa Powder, Dates, Sea Salt",
          },
        },
        count: 1,
      },
      // Smooth
      {
        _id: "smooth",
        title: "Smooth nuts 'n' seeds butter",
        src: require("../assets/img/smooth.png"),
        brand: "Nuts 'n' Seeds",
        heading: "Smooth",
        weight: "340g",
        price: 1700,
        content: {
          description: {
            make:
              "Not your average nut butter! Our lightly roasted smooth, made from Nigeria's finest nuts and seeds, blended in small batches to create that extra fluidity deliciousness.",
            use:
              "Stir me up, I'm natural. Spread me on toast for a healthy breakfast; add to smoothies for a protein punch; on your favourite pancakes or dessert; spread on crackers and veggies, or enjoy by the spoonful! ",
          },
          ingredients: {
            condiments: "Sesame seed, Cashew, Coconut, Dates, Sea Salt",
          },
        },
        count: 1,
      },
      // TigerBoost
      {
        _id: "tiger-boost",
        title: "Tiger Boost nuts 'n' seeds butter",
        src: require("../assets/img/tiger-boost.png"),
        brand: "Nuts 'n' Seeds",
        heading: "Tiger Boost",
        weight: "340g",
        price: 1700,
        content: {
          description: {
            make:
              "Our Tigerboost nuts seeds butter is formulated as the perfect smoothie butter, made with the classic blend of smooth nuts n Seeds, boosted with Tigernut to make you look and feel your best. Mother earth best kept secret is just a spoonful away!",
            use:
              "It's a great addition to your morning smoothie, it can be eaten with almost anything; a delicious addition to pancakes and waffles. ",
          },
          ingredients: {
            condiments: "Sesame seed, Cashew, Coconut, Tigernut, Dates, Sea Salt",
          },
        },
        count: 1,
      },
      // Golden Hibiscus Mix
      {
        _id: "golden-hibiscus-mix-200g",
        title: "Golden Hibiscus Mix",
        src: require("../assets/img/golden-mix.png"),
        brand: "Healthy Mix",
        heading: "Golden Hibiscus Mix",
        weight: "200g",
        price: 800,
        content: {
          description: {
            make:
              " Formulated with the scarlet petals of the Hibiscus flower and blended with a combination of 6 plant-based ingredients for a refreshing tangy, easy pick-me-up goodness.",
            use:
              " It can be used for Food (baked foods, pastries, syrups), Drink (tea, drinks and cocktails). For baking add ½ cup of Hibiscus mix  for every 4 cups of pastry mix. ",
          },
          ingredients: {
            condiments: "Hibiscus flower, Ginger, Clove, Cinnamon, Nutmeg, Chilli, Black Pepper",
          },
        },
        count: 1,
      },
      // Hibiscus Mix
      {
        _id: "hibiscus-mix-200g",
        title: "Hibiscus Mix",
        src: require("../assets/img/hibiscus.png"),
        brand: "Healthy Mix",
        heading: "Hibiscus Mix",
        weight: "200g",
        price: 800,
        content: {
          description: {
            make:
              " Formulated with the scarlet petals of the Hibiscus flower and blended with a combination of 6 plant-based ingredients for a refreshing tangy, easy pick-me-up goodness.",
            use:
              " It can be used for Food (baked foods, pastries, syrups), Drink (tea, drinks and cocktails). For baking add ½ cup of Hibiscus mix  for every 4 cups of pastry mix. ",
          },
          ingredients: {
            condiments: "Hibiscus flower, Ginger, Clove, Cinnamon, Nutmeg, Chilli, Black Pepper",
          },
        },
        count: 1,
      },
      // Golden Hibiscus Mix -435g
      {
        _id: "golden-hibiscus-mix-435g",
        title: "Golden Hibiscus Mix",
        src: require("../assets/img/golden-mix.png"),
        brand: "Healthy Mix",
        heading: "Golden Hibiscus Mix",
        weight: "435g",
        price: 1700,
        content: {
          description: {
            make:
              " Formulated with the scarlet petals of the Hibiscus flower and blended with a combination of 6 plant-based ingredients for a refreshing tangy, easy pick-me-up goodness.",
            use:
              " It can be used for Food (baked foods, pastries, syrups), Drink (tea, drinks and cocktails). For baking add ½ cup of Hibiscus mix  for every 4 cups of pastry mix. ",
          },
          ingredients: {
            condiments: "Hibiscus flower, Ginger, Clove, Cinnamon, Nutmeg, Chilli, Black Pepper",
          },
        },
        count: 1,
      },
      // Hibiscus Mix -435g
      {
        _id: "hibiscus-mix-435g",
        title: "Hibiscus Mix",
        src: require("../assets/img/hibiscus.png"),
        brand: "Healthy Mix",
        heading: "Hibiscus Mix",
        weight: "435g",
        price: 1700,
        content: {
          description: {
            make:
              " Formulated with the scarlet petals of the Hibiscus flower and blended with a combination of 6 plant-based ingredients for a refreshing tangy, easy pick-me-up goodness.",
            use:
              " It can be used for Food (baked foods, pastries, syrups), Drink (tea, drinks and cocktails). For baking add ½ cup of Hibiscus mix  for every 4 cups of pastry mix. ",
          },
          ingredients: {
            condiments: "Hibiscus flower, Ginger, Clove, Cinnamon, Nutmeg, Chilli, Black Pepper",
          },
        },
        count: 1,
      },
      // Chocolate-squeeze
      {
        _id: "chocolate-squeeze",
        title: "Chocolate butter squeeze x30",
        src: require("../assets/img/nut-chocolate.png"),
        brand: "Nuts 'n' Seeds",
        heading: "Chocolate",
        weight: "30g",
        price: 10500,
        content: {
          description: {
            make:
              "This Chocolate Nuts n Seeds butter is one of our favourite, made with the perfect blend of smooth nuts n Seeds and premium cocoa powder creating the best combo spread. ",
            use:
              "It's great as a sweet dip for fruit, perfect in baked goods, over pancakes or as an ice cream topping. The possibilities are endless, grab a bigger spoon and enjoy by the spoonful.",
            storage:
              " Store in a cool dry place. Oil separation occurs naturally. Upside down jar for easy stirring. Stir well with a butter knife and store lid-side up. Once opened, eat within three months (easy!).",
          },
          ingredients: {
            condiments: "Sesame seed, Cashew, Coconut, Cocoa Powder, Dates, Sea Salt",
            source:
              "Vegan friendly, no sugar added, kosher, plant-based protein, high in fibre. Keto, natural ingredients, gluten free, non gmo, dairy free",
            reuse: "You can reuse the empty jar for containment.",
          },
        },
        count: 1,
      },
      // Smooth-squeeze
      {
        _id: "smooth-squeeze",
        title: "Smooth butter squeeze x30",
        src: require("../assets/img/nut-smooth.png"),
        brand: "Nuts 'n' Seeds",
        heading: "Smooth",
        weight: "30g",
        price: 10500,
        content: {
          description: {
            make:
              "Not your average nut butter! Our lightly roasted smooth, made from Nigeria's finest nuts and seeds, blended in small batches to create that extra fluidity deliciousness.",
            use:
              "Stir me up, I'm natural. Spread me on toast for a healthy breakfast; add to smoothies for a protein punch; on your favourite pancakes or dessert; spread on crackers and veggies, or enjoy by the spoonful! ",
          },
          ingredients: {
            condiments: "Sesame seed, Cashew, Coconut, Dates, Sea Salt",
          },
        },
        count: 1,
      },
      // TigerBoost-squeeze
      {
        _id: "tiger-boost-squeeze",
        title: "Tiger Boost butter squeeze x30 ",
        src: require("../assets/img/nut-tiger.png"),
        brand: "Nuts 'n' Seeds",
        heading: "Tiger Boost",
        weight: "30g",
        price: 10500,
        content: {
          description: {
            make:
              "Our Tigerboost nuts seeds butter is formulated as the perfect smoothie butter, made with the classic blend of smooth nuts n Seeds, boosted with Tigernut to make you look and feel your best. Mother earth best kept secret is just a spoonful away!",
            use:
              "It's a great addition to your morning smoothie, it can be eaten with almost anything; a delicious addition to pancakes and waffles. ",
          },
          ingredients: {
            condiments: "Sesame seed, Cashew, Coconut, Tigernut, Dates, Sea Salt",
          },
        },
        count: 1,
      },
    ],
    cart: [],
    subtotal: 0,
    total: 0,
    modalShow: false,
  };

  openModal() {
    this.setState({ modalShow: true });
  }

  closeModal = () => {
    this.setState(() => {
      return { modalShow: false };
    });
  };

  addCart = (id) => {
    this.openModal();

    const { products, cart } = this.state;
    const check = cart.every((item) => {
      return item._id !== id;
    });

    if (check) {
      const data = products.filter((product) => {
        return product._id === id;
      });
      this.setState({ cart: [...cart, ...data] }, () => {
        this.getSubTotal();
      });
    } else {
      // alert("The product has been added.");
    }
  };

  reduction = (id) => {
    const { cart } = this.state;
    cart.forEach((item) => {
      if (item._id === id) {
        item.count === 1 ? (item.count = 1) : (item.count -= 1);
      }
    });
    this.setState({ cart: cart }, () => {
      this.getSubTotal();
    });
    // this.getSubTotal();
  };

  increase = (id) => {
    const { cart } = this.state;
    cart.forEach((item) => {
      if (item._id === id) {
        item.count += 1;
      }
    });
    this.setState({ cart: cart }, () => {
      this.getSubTotal();
    });
    // this.getSubTotal();
  };

  removeProduct = (id) => {
    if (window) {
      const { cart } = this.state;
      cart.forEach((item, index) => {
        if (item._id === id) {
          cart.splice(index, 1);
        }
      });
      this.setState({ cart: cart }, () => {
        this.getSubTotal();
      });
      // this.getSubTotal();
    }
  };

  getSubTotal = () => {
    const { cart } = this.state;
    const res = cart.reduce((prev, item) => {
      return prev + item.price * item.count;
    }, 0);
    this.setState({ subtotal: res });
  };

  componentDidUpdate() {
    localStorage.setItem("dataCart", JSON.stringify(this.state.cart));
    localStorage.setItem("dataSubTotal", JSON.stringify(this.state.subtotal));
  }

  componentDidMount() {
    const dataCart = JSON.parse(localStorage.getItem("dataCart"));
    if (dataCart !== null) {
      this.setState({ cart: dataCart });
    }
    const dataSubTotal = JSON.parse(localStorage.getItem("dataSubTotal"));
    if (dataSubTotal !== null) {
      this.setState({ subtotal: dataSubTotal });
    }
  }

  render() {
    const { products, cart, subtotal, total, modalShow } = this.state;
    const {
      addCart,
      reduction,
      increase,
      removeProduct,
      getSubTotal,
      openModal,
      closeModal,
    } = this;
    return (
      <DataContext.Provider
        value={{
          products,
          addCart,
          cart,
          reduction,
          increase,
          removeProduct,
          subtotal,
          total,
          getSubTotal,
          openModal,
          closeModal,
          modalShow,
        }}>
        {this.props.children}
      </DataContext.Provider>
    );
  }
}

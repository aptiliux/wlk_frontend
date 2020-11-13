import React, { useState, useEffect } from "react";
import State from "./state";
import { SearchScreen } from "../../screen";
import ProductServices from "../../service/product.service";

const SearchController = ({
  searchValue,
}: {
  searchValue: string | undefined;
}) => {
  const [state, setState] = useState<State>({
    keyword: "",
    products: [],
  });

  const searchProducts = async (keyword: string | undefined) => {
    try {
      if (keyword !== undefined && keyword !== "") {
        const products = await ProductServices.searchProducts(keyword);
        setState({ keyword, products });
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(function () {
      console.log(`timeout value ${searchValue}`);
      searchProducts(searchValue);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [searchValue]);

  const handleAddProduct = (id: Number) => {
    console.log(`product ${id} added`);
  };

  return <SearchScreen state={state} productAddHandler={handleAddProduct} />;
};

export default SearchController;

import React from "react";
import "../index.css";
import "../styles/shopping.css";
import CategoryMenu from "./CategoryMenu";
import SortBar from './SortBar';

const SUBCATEGORIES = [
    {
        category: "Household and Beauty",
        subcategories: [
            {
                name: "Baby Care",
                items: [
                    {
                        name: "Bib",
                        description: "Baby Bib helps with keeps baby cloth clean during meal time",
                        price: 10.00,
                        imagelink: "https://webmppcapstone.blob.core.windows.net/babycare-royaltyfree/babybib.png",
                        rating: "4",
                        stock: "30",
                        category: "Household and Beauty",
                        subcategory: "Baby care"
                    }]
                  },
            {
                name: "Drug Store",
                items: [
                          {
                            name: "Bandage",
                            description: "Flexible Fabric, 100-Count Boxes",
                            price: 5.00,
                            imagelink: "https://webmppcapstone.blob.core.windows.net/drugs-royaltyfree/bandage.png",
                            rating: "4",
                            stock: "58",
                            category: "Household and Beauty",
                            subcategory: "Drug Store"
                          }
                  ]
                }]
              }];

  const CategoryPage = () => {
      return (
          <div>
            <div className="flex-container">
              <CategoryMenu /> 
          </div>
            <SortBar />
          </div>

      )
  }

  export default CategoryPage
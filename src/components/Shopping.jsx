import React from "react";
import { connect } from 'react-redux';
import "../index.css";
import "../styles/shopping.css";
import CategoryMenu from "./CategoryMenu";
import CategoryOverview from "./CategoryOverview";

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

  const Shopping = () => {
      return (
          <div className="flex-container-row">
              <CategoryMenu />
              <CategoryOverview/>
          </div>
      )
  };

  export default Shopping
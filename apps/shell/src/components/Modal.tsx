import React from "react";

function Modal({ categoryId }) {
  const modalContent = [
    {
      1: [
        {
          title: "Featured On Meesho",
          links: ["Top Brands", "Shimla Apples"],
        },
        {
          title: "All Popular",
          links: [
            "Jewellery",
            "Men Fashion",
            "Kids",
            "Footwear",
            "Beauty & Personal Care",
            "Grocery",
            "Electronics",
            "Innerwear & Nightwear",
            "Kitchen & Appliances",
            "Bags & Luggage",
            "Healthcare",
            "Stationery & Office Supplies",
          ],
        },
      ],
    },
    {
      2: [
        {
          title: "Sarees",
          links: [
            "All Sarees",
            "Georgette Sarees",
            "Chiffon Sarees",
            "Cotton Sarees",
            "Net Sarees",
            "Silk Sarees",
            "New Collection",
            "Bridal Sarees",
          ],
        },
        {
          title: "Kurtis",
          links: [
            "All Kurtis",
            "Anarkali Kurtis",
            "Rayon Kurtis",
            "Cotton Kurtis",
            "Straight Kurtis",
            "Long Kurtis",
          ],
        },
        {
          title: "Kurta Sets",
          links: [
            "All Kurta Sets",
            "Kurta Palazzo Sets",
            "Kurta Pant Sets",
            "Sharara Sets",
            "Anarkali Kurta Sets",
            "Cotton Kurta Sets",
          ],
        },
        {
          title: "Dupatta Sets",
          links: ["All Dupatta Sets", "Cotton Sets", "Rayon Sets"],
        },
        {
          title: "Suits & Dress Material",
          links: [
            "All Dress Materials",
            "Pakistani Dress Materials",
            "Cotton Dress Materials",
            "Patiala Dress Materials",
            "Banarasi Dress Materials",
            "Party Wear Dress Materials",
          ],
        },
        {
          title: "Lehengas",
          links: ["All Lehengas", "Shoppers Favourite", "Trending Lehengas"],
        },
        {
          title: "Blouses",
          links: ["All Blouses", "Shoppers Favourite", "Trending Blouses"],
        },
        {
          title: "Gowns",
          links: ["All Gowns", "Shoppers Favourite", "Trending Gowns"],
        },
        {
          title: "Other Ethnic Wear",
          links: [
            "Ethnic Skirts & Bottomwear",
            "Ethnic Jackets & Shrugs",
            "Islamic Fashion",
            "Petticoats",
            "Blouse Pieces",
            "Dupattas",
          ],
        },
      ],
    },
    {
      3: [
        {
          title: "Topwear",
          links: [
            "All Topwear",
            "Tops & Tunics",
            "Dresses",
            "T-shirts",
            "Gowns",
            "Tops & Bottom Sets",
            "Shirts",
            "Jumpsuits",
            "New Trends",
          ],
        },
        {
          title: "Bottom Wear",
          links: [
            "All Bottomwear",
            "Jeans & Jeggings",
            "Palazzos",
            "Trousers & Pants",
            "Leggings",
            "Shorts & Skirts",
          ],
        },
        {
          title: "Winterwear",
          links: [
            "Jackets",
            "Sweatshirts",
            "Sweaters",
            "Capes, Shrug & Ponchos",
            "Coats",
            "Blazers & Waistcoats",
          ],
        },
        {
          title: "Plus Size",
          links: [
            "Plus Size - Dresses & Gowns",
            "Plus Size - Tops & Tees",
            "Plus size - Bottomwear",
          ],
        },
      ],
    },
    {
      4: [
        {
          title: "Innerwear",
          links: ["Women Bra", "Women Panties", "Other Innerwear"],
        },
        {
          title: "Sleepwear",
          links: ["Women Nightsuits", "Women Nightdress", "Other Sleepwear"],
        },
        {
          title: "Sports Wear",
          links: ["Sports Bottomwear", "Sports Bra", "Top & Bottom Sets"],
        },
        {
          title: "Maternity Wear",
          links: ["Kurti & Topwear", "Feeding Bras", "Briefs & Bottomwear"],
        },
      ],
    },
    {
      5: [
        {
          title: "Top Wear",
          links: ["Summer T-Shirts", "Shirts", "T-Shirts Combos"],
        },
        {
          title: "Bottom Wear",
          links: ["Jeans", "Cargos/Trousers", "Dhotis/Lungis"],
        },
        {
          title: "Ethnic Wear",
          links: ["Kurtas", "Kurta Sets", "Nehru Jacket"],
        },
        {
          title: "Innerwear",
          links: ["Vests", "Briefs", "Boxers"],
        },
        {
          title: "Sports Wear",
          links: ["Trackpants", "Tracksuits", "Gym Tshirts"],
        },
        {
          title: "Night Wear",
          links: ["Pyjamas", "Night Shorts", "Nightsuits"],
        },
        {
          title: "Winter Wear",
          links: ["Shrugs", "Jackets", "Sweatshirts"],
        },
        {
          title: "Combo Store",
          links: ["Rakhi Specials", "Shirts Combo", "Innerwear Combo"],
        },
        {
          title: "Accessories",
          links: [
            "All Accessories",
            "Watches",
            "Wallets",
            "Jewellery",
            "Sunglasses & Spectacle Frames",
            "Belts",
          ],
        },
        {
          title: "Footwear",
          links: [
            "Men Footwear",
            "Men Casual Shoes",
            "Men Sports Shoes",
            "Men Flip Flops and Sandals",
            "Men Formal Shoes",
            "Loafers",
          ],
        },
      ],
    },
    {
      6: [
        {
          title: "Kids Clothing",
          links: [
            "Girls",
            "Boys",
            "Babies",
            "Clothing Sets",
            "Frocks & Dresses",
            "T-Shirt & Polos",
          ],
        },
        {
          title: "Kids Toys",
          links: ["Toys & Games", "Summer Picks", "Best Sellers", "Baby Gears"],
        },
        {
          title: "Kids Accessories",
          links: ["Bags & Backpacks", "Kids Accessories", "Party Items"],
        },
        {
          title: "Baby Care",
          links: [
            "View All",
            "Baby Bedding & Accessories",
            "Newborn Care",
            "Diapers",
            "Baby Mosquito nets",
            "Baby Dry Sheets",
          ],
        },
      ],
    },
    {
      7: [
        {
          title: "Home Decor",
          links: [
            "View All",
            "Covers",
            "Key Holders",
            "Artificial Plants",
            "Pooja Needs",
            "Party Supplies",
            "Wallpapers & Stickers",
            "Showpieces & Idols",
            "Clocks & Wall Decor",
          ],
        },
        {
          title: "Kitchen & Appliances",
          links: [
            "View All",
            "Storage & Organizers",
            "Cookware",
            "Kitchen Tools",
            "Kitchen Appliances",
            "Dinnerware",
            "Glasses & Barware",
            "Kitchen Linen",
            "Home Appliances",
          ],
        },
        {
          title: "Home Textiles",
          links: [
            "View All",
            "Bedsheets",
            "Curtains & Accessories",
            "Doormats & Carpets",
            "Pillow, Cushion & Covers",
            "Blankets & Comforters",
          ],
        },
        {
          title: "Home Improvement",
          links: [
            "All Home Essentials",
            "Bathroom Accessories",
            "Cleaning Supplies",
            "Gardening",
            "Home Tools",
            "Insect Protection",
          ],
        },
        {
          title: "Furniture",
          links: [
            "Shoe Racks",
            "Study Tables",
            "Collapsible Wardrobes",
            "Wall Shelves",
            "Home Temple",
            "Hammock Swing",
          ],
        },
      ],
    },
    {
      8: [
        {
          title: "Makeup",
          links: [
            "Lipstick",
            "Eye Shadow and Liner",
            "Face Makeup",
            "Makeup Kits & Combos",
            "Hair Curlers",
            "Nail Makeup",
            "Brushes & Accessories",
            "Hair Removal",
            "Perfumes & More",
          ],
        },
        {
          title: "Personal Care",
          links: [
            "View All",
            "Body Lotion",
            "Hair Oil & Shampoo",
            "Whitening Creams",
            "Straighteners & Dryers",
            "Face Oil & Serum",
            "Face Wash",
            "Face Masks & Peels",
            "Soaps & Scrubs",
          ],
        },
        {
          title: "Healthcare",
          links: [
            "View All",
            "Oral Care",
            "Winter Healthcare",
            "Ear Cleaner",
            "Health Monitor & Massagers",
            "Foot care",
            "Sexual Wellness",
            "Ayurveda & Nutrition",
            "Sanitary Pads & More",
          ],
        },
        {
          title: "Baby & Mom",
          links: ["View All", "Baby Care Essentials", "Mom Care"],
        },
        {
          title: "Mens Care",
          links: [
            "Trimmers",
            "Beard Oil",
            "Men Perfumes & Deodorant",
            "Hair Gels, Wax & Spray",
            "Men's Face & Body Care",
            "Budget Grooming Kits",
          ],
        },
      ],
    },
    {
      9: [
        {
          title: "Jewellery",
          links: [
            "All Jewellery",
            "Jewellery Sets",
            "Earrings",
            "Mangalsutras",
            "Necklaces & Chains",
            "Bangles & Bracelets",
            "Anklets & Nosepins",
            "Kamarbandh & Maangtika",
          ],
        },
        {
          title: "Men Accessories",
          links: [
            "All Accessories",
            "Men Watches",
            "Wallets",
            "Men Jewellery",
            "Sunglasses & Spectacle Frames",
            "Belts",
          ],
        },
        {
          title: "Women Accessories",
          links: [
            "All Accessories",
            "Women Watches",
            "Hair Accessories",
            "Women Belts",
            "Sunglasses & Spectacle Frames",
            "Scarves, Stoles & Gloves",
          ],
        },
      ],
    },
    {
      10: [
        {
          title: "Women Footwear",
          links: [
            "View All",
            "Heels and Sandals",
            "Flats",
            "Boots",
            "Flipflops & Slippers",
            "Bellies and Ballerinas",
          ],
        },
        {
          title: "Men Footwear",
          links: [
            "View All",
            "Men Casual Shoes",
            "Men Sports Shoes",
            "Men Flip Flops and Sandals",
            "Men Formal Shoes",
            "Loafers",
          ],
        },
        {
          title: "Kids Footwear",
          links: [
            "View All",
            "Boys Shoes",
            "Girls Shoes",
            "Casual Shoes",
            "Flipflops & Slippers",
            "Sandals",
          ],
        },
      ],
    },
    {
      11: [
        {
          title: "Women Bags",
          links: [
            "View All",
            "Backpacks",
            "Handbags",
            "Slingbags",
            "Wallets",
            "Clutches",
          ],
        },
        {
          title: "Men Bags",
          links: ["Backpacks", "Waist Bags", "Crossbody Bags & Sling Bags"],
        },
        {
          title: "Travel Bags, Luggage and Accessories",
          links: [
            "View All",
            "Duffel & Trolley Bags",
            "Laptop & Messenger Bags",
          ],
        },
      ],
    },
  ];

  const menuCard = modalContent[categoryId - 1][categoryId];

  return (
    <div className="flex gap-12 px-10 py-6">
      {menuCard.map((content) => (
        <div>
          <h1 className="text-xl text-primary font-extrabold mb-3">
            {content.title}
          </h1>
          <ul className="space-y-2">
            {content.links.map((link) => (
              <li className="hover:text-primary-hover text-primary-soft cursor-pointer">
                {link}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Modal;

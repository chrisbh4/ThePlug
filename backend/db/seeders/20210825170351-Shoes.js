'use strict';

const randPrice = Math.floor(Math.random() * 1000).toFixed(2)

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * see if you can write a function that can result in the location of the url of the image from aws-s3
     *
     * Example:
     */
    await queryInterface.bulkInsert('Shoes', [
      {sellerId:1, title:'Yeezy boost 350 V2 Bred', shoeSize:6,description:"The Air Jordan 1 Retro High OG 'Chicago' 2015 colorway was designed to avoid Jordan's $5,000-per game fines from the NBA after the original black and red colorway was banned. The 'Chicago' was first retroed in 1994 and stayed true to the 1985 design. Further retros were released in 2013 with small changes to the design, and again in 2015 with the original branding details: the Nike Air logo on the tongue and the original clean heel without the Jumpman logo.",image:"https://image.goat.com/240/attachments/product_template_pictures/images/008/655/040/original/94407_00.png.png" ,price:750.00,brand:"Yeezy" , createdAt: new Date(), updatedAt:new Date()},
      {sellerId:1, title:'Yeezy boost 350 V2 Beluga', shoeSize:13,description:"The Air Jordan 1 Retro High OG 'Chicago' 2015 colorway was designed to avoid Jordan's $5,000-per game fines from the NBA after the original black and red colorway was banned. The 'Chicago' was first retroed in 1994 and stayed true to the 1985 design. Further retros were released in 2013 with small changes to the design, and again in 2015 with the original branding details: the Nike Air logo on the tongue and the original clean heel without the Jumpman logo.",image:"https://image.goat.com/240/attachments/product_template_pictures/images/008/654/944/original/64795_00.png.png" ,price:440.00,brand:"Yeezy" , createdAt: new Date(), updatedAt:new Date()},
      {sellerId:1, title:'Yeezy Boost 350 V2 Zebra', shoeSize:8,description:"The Air Jordan 1 Retro High OG 'Chicago' 2015 colorway was designed to avoid Jordan's $5,000-per game fines from the NBA after the original black and red colorway was banned. The 'Chicago' was first retroed in 1994 and stayed true to the 1985 design. Further retros were released in 2013 with small changes to the design, and again in 2015 with the original branding details: the Nike Air logo on the tongue and the original clean heel without the Jumpman logo.",image:"https://image.goat.com/240/attachments/product_template_pictures/images/014/979/033/original/105568_00.png.png" ,price:500.00,brand:"Yeezy" , createdAt: new Date(), updatedAt:new Date()},
      {sellerId:2, title:'Yeezy boost 350 V2 Red', shoeSize:5,description:"The Air Jordan 1 Retro High OG 'Chicago' 2015 colorway was designed to avoid Jordan's $5,000-per game fines from the NBA after the original black and red colorway was banned. The 'Chicago' was first retroed in 1994 and stayed true to the 1985 design. Further retros were released in 2013 with small changes to the design, and again in 2015 with the original branding details: the Nike Air logo on the tongue and the original clean heel without the Jumpman logo.",image:"https://image.goat.com/240/attachments/product_template_pictures/images/008/654/949/original/67147_00.png.png" ,price:1205.00,brand:"Yeezy" , createdAt: new Date(), updatedAt:new Date()},
      {sellerId:2, title:'Yeezy boost 350 V2 Oreo ', shoeSize:7,description:"The Air Jordan 1 Retro High OG 'Chicago' 2015 colorway was designed to avoid Jordan's $5,000-per game fines from the NBA after the original black and red colorway was banned. The 'Chicago' was first retroed in 1994 and stayed true to the 1985 design. Further retros were released in 2013 with small changes to the design, and again in 2015 with the original branding details: the Nike Air logo on the tongue and the original clean heel without the Jumpman logo.",image:"https://image.goat.com/240/attachments/product_template_pictures/images/008/654/948/original/67145_00.png.png" ,price:375.00,brand:"Yeezy" , createdAt: new Date(), updatedAt:new Date()},
      {sellerId:2, title:'Yeezy boost 350 V2 Ycheil Non-Reflective ', shoeSize:5,description:"The Air Jordan 1 Retro High OG 'Chicago' 2015 colorway was designed to avoid Jordan's $5,000-per game fines from the NBA after the original black and red colorway was banned. The 'Chicago' was first retroed in 1994 and stayed true to the 1985 design. Further retros were released in 2013 with small changes to the design, and again in 2015 with the original branding details: the Nike Air logo on the tongue and the original clean heel without the Jumpman logo.",image:"https://image.goat.com/240/attachments/product_template_pictures/images/029/691/643/original/551106_00.png.png" ,price:1000.00,brand:"Yeezy" , createdAt: new Date(), updatedAt:new Date()},
      {sellerId:3, title:'Yeezy boost 350 V2 Semi Frozen Yellow ', shoeSize:5,description:"The Air Jordan 1 Retro High OG 'Chicago' 2015 colorway was designed to avoid Jordan's $5,000-per game fines from the NBA after the original black and red colorway was banned. The 'Chicago' was first retroed in 1994 and stayed true to the 1985 design. Further retros were released in 2013 with small changes to the design, and again in 2015 with the original branding details: the Nike Air logo on the tongue and the original clean heel without the Jumpman logo.",image:"https://image.goat.com/240/attachments/product_template_pictures/images/032/310/937/original/B37572.png" ,price:1530.00,brand:"Yeezy" , createdAt: new Date(), updatedAt:new Date()},
      {sellerId:3, title:'Off-White x Air Jordan 1 Chicago ', shoeSize:5,description:"The Air Jordan 1 Retro High OG 'Chicago' 2015 colorway was designed to avoid Jordan's $5,000-per game fines from the NBA after the original black and red colorway was banned. The 'Chicago' was first retroed in 1994 and stayed true to the 1985 design. Further retros were released in 2013 with small changes to the design, and again in 2015 with the original branding details: the Nike Air logo on the tongue and the original clean heel without the Jumpman logo.",image:"https://image.goat.com/240/attachments/product_template_pictures/images/008/654/413/original/136666_00.png.png" ,price:280.00,brand:"Air Jordan" , createdAt: new Date(), updatedAt:new Date()},
      {sellerId:3, title:'Red Ribbon Recon x Air Jordan 1 Supreme & Louis Vuitton', shoeSize:13,description:"The Air Jordan 1 Retro High OG 'Chicago' 2015 colorway was designed to avoid Jordan's $5,000-per game fines from the NBA after the original black and red colorway was banned. The 'Chicago' was first retroed in 1994 and stayed true to the 1985 design. Further retros were released in 2013 with small changes to the design, and again in 2015 with the original branding details: the Nike Air logo on the tongue and the original clean heel without the Jumpman logo.",image:"https://image.goat.com/240/attachments/product_template_pictures/images/011/934/249/original/206830_00.png.png" ,price:425.00,brand:"Air Jordan" , createdAt: new Date(), updatedAt:new Date()},
      {sellerId:2, title:'Travis Scott x Air Jordan 1 Mocha ', shoeSize:13,description:"The Air Jordan 1 Retro High OG 'Chicago' 2015 colorway was designed to avoid Jordan's $5,000-per game fines from the NBA after the original black and red colorway was banned. The 'Chicago' was first retroed in 1994 and stayed true to the 1985 design. Further retros were released in 2013 with small changes to the design, and again in 2015 with the original branding details: the Nike Air logo on the tongue and the original clean heel without the Jumpman logo.",image:"https://image.goat.com/240/attachments/product_template_pictures/images/018/783/111/original/488879_00.png.png" ,price:240.00,brand:"Air Jordan" , createdAt: new Date(), updatedAt:new Date()},
      {sellerId:2, title:'Off-White x Air Jordan 1 UNC ', shoeSize:9,description:"The Air Jordan 1 Retro High OG 'Chicago' 2015 colorway was designed to avoid Jordan's $5,000-per game fines from the NBA after the original black and red colorway was banned. The 'Chicago' was first retroed in 1994 and stayed true to the 1985 design. Further retros were released in 2013 with small changes to the design, and again in 2015 with the original branding details: the Nike Air logo on the tongue and the original clean heel without the Jumpman logo.",image:"https://image.goat.com/240/attachments/product_template_pictures/images/012/219/518/original/335047_00.png.png" ,price:2250.00,brand:"Air Jordan" , createdAt: new Date(), updatedAt:new Date()},
      {sellerId:2, title:'Air Jordan 1 Royal 2013 ', shoeSize:5,description:"The Air Jordan 1 Retro High OG 'Chicago' 2015 colorway was designed to avoid Jordan's $5,000-per game fines from the NBA after the original black and red colorway was banned. The 'Chicago' was first retroed in 1994 and stayed true to the 1985 design. Further retros were released in 2013 with small changes to the design, and again in 2015 with the original branding details: the Nike Air logo on the tongue and the original clean heel without the Jumpman logo.",image:"https://image.goat.com/240/attachments/product_template_pictures/images/012/739/716/original/13786_00.png.png" ,price:1000.00,brand:"Air Jordan" , createdAt: new Date(), updatedAt:new Date()},
      {sellerId:3, title:'Gucci Ace Embroidered Snake ', shoeSize:7,description:"The Air Jordan 1 Retro High OG 'Chicago' 2015 colorway was designed to avoid Jordan's $5,000-per game fines from the NBA after the original black and red colorway was banned. The 'Chicago' was first retroed in 1994 and stayed true to the 1985 design. Further retros were released in 2013 with small changes to the design, and again in 2015 with the original branding details: the Nike Air logo on the tongue and the original clean heel without the Jumpman logo.",image:"https://image.goat.com/240/attachments/product_template_pictures/images/010/468/259/original/259491_00.png.png" ,price:350.00,brand:"Gucci" , createdAt: new Date(), updatedAt:new Date()},
      {sellerId:3, title:'Gucci Ace Embroidered Bee ', shoeSize:5,description:"The Air Jordan 1 Retro High OG 'Chicago' 2015 colorway was designed to avoid Jordan's $5,000-per game fines from the NBA after the original black and red colorway was banned. The 'Chicago' was first retroed in 1994 and stayed true to the 1985 design. Further retros were released in 2013 with small changes to the design, and again in 2015 with the original branding details: the Nike Air logo on the tongue and the original clean heel without the Jumpman logo.",image:"https://image.goat.com/240/attachments/product_template_pictures/images/046/018/259/original/259494_00.png.png" ,price:730.00,brand:"Gucci" , createdAt: new Date(), updatedAt:new Date()},
      {sellerId:3, title:'Gucci Ace GG Supreme Beige ', shoeSize:14,description:"The Air Jordan 1 Retro High OG 'Chicago' 2015 colorway was designed to avoid Jordan's $5,000-per game fines from the NBA after the original black and red colorway was banned. The 'Chicago' was first retroed in 1994 and stayed true to the 1985 design. Further retros were released in 2013 with small changes to the design, and again in 2015 with the original branding details: the Nike Air logo on the tongue and the original clean heel without the Jumpman logo.",image:"https://image.goat.com/240/attachments/product_template_pictures/images/029/491/329/original/264472_00.png.png" ,price:990.00,brand:"Gucci" , createdAt: new Date(), updatedAt:new Date()},
      {sellerId:2, title:'Gucci Rhython Leather Sneaker ', shoeSize:12,description:"The Air Jordan 1 Retro High OG 'Chicago' 2015 colorway was designed to avoid Jordan's $5,000-per game fines from the NBA after the original black and red colorway was banned. The 'Chicago' was first retroed in 1994 and stayed true to the 1985 design. Further retros were released in 2013 with small changes to the design, and again in 2015 with the original branding details: the Nike Air logo on the tongue and the original clean heel without the Jumpman logo.",image:"https://image.goat.com/240/attachments/product_template_pictures/images/010/050/171/original/264433_00.png.png" ,price:820.00,brand:"Gucci", createdAt: new Date(), updatedAt:new Date()},
      {sellerId:2, title:'Gucci Pursuit 72 Rubber Slide Black', shoeSize:12,description:"The Air Jordan 1 Retro High OG 'Chicago' 2015 colorway was designed to avoid Jordan's $5,000-per game fines from the NBA after the original black and red colorway was banned. The 'Chicago' was first retroed in 1994 and stayed true to the 1985 design. Further retros were released in 2013 with small changes to the design, and again in 2015 with the original branding details: the Nike Air logo on the tongue and the original clean heel without the Jumpman logo.",image:"https://image.goat.com/240/attachments/product_template_pictures/images/009/249/006/original/259509_00.png.png" ,price:300.00,brand:"Gucci", createdAt: new Date(), updatedAt:new Date()},
      {sellerId:2, title:'Gucci Wmns Stripe Rubber Slide Ecru', shoeSize:6,description:"The Air Jordan 1 Retro High OG 'Chicago' 2015 colorway was designed to avoid Jordan's $5,000-per game fines from the NBA after the original black and red colorway was banned. The 'Chicago' was first retroed in 1994 and stayed true to the 1985 design. Further retros were released in 2013 with small changes to the design, and again in 2015 with the original branding details: the Nike Air logo on the tongue and the original clean heel without the Jumpman logo.",image:"https://image.goat.com/240/attachments/product_template_pictures/images/017/115/919/original/524984_JC200_9572.png.png" ,price:500.00,brand:"Gucci", createdAt: new Date(), updatedAt:new Date()},
      {sellerId:2, title:'New Balance Solebox White Mint 1500', shoeSize:12,description:"The Air Jordan 1 Retro High OG 'Chicago' 2015 colorway was designed to avoid Jordan's $5,000-per game fines from the NBA after the original black and red colorway was banned. The 'Chicago' was first retroed in 1994 and stayed true to the 1985 design. Further retros were released in 2013 with small changes to the design, and again in 2015 with the original branding details: the Nike Air logo on the tongue and the original clean heel without the Jumpman logo.",image:"https://image.goat.com/240/attachments/product_template_pictures/images/000/039/885/original/M1500WTU.png" ,price:245.00,brand:"New Blance", createdAt: new Date(), updatedAt:new Date()},
      {sellerId:2, title:'New Balance Solebox x 1500 Toothpaste Orange', shoeSize:12,description:"The Air Jordan 1 Retro High OG 'Chicago' 2015 colorway was designed to avoid Jordan's $5,000-per game fines from the NBA after the original black and red colorway was banned. The 'Chicago' was first retroed in 1994 and stayed true to the 1985 design. Further retros were released in 2013 with small changes to the design, and again in 2015 with the original branding details: the Nike Air logo on the tongue and the original clean heel without the Jumpman logo.",image:"https://image.goat.com/240/attachments/product_template_pictures/images/018/489/199/original/M1500BOR.png.png" ,price:255.00,brand:"New Blance", createdAt: new Date(), updatedAt:new Date()},
      {sellerId:2, title:'Nike Dunk Low Grey Fog', shoeSize:12,description:"The Air Jordan 1 Retro High OG 'Chicago' 2015 colorway was designed to avoid Jordan's $5,000-per game fines from the NBA after the original black and red colorway was banned. The 'Chicago' was first retroed in 1994 and stayed true to the 1985 design. Further retros were released in 2013 with small changes to the design, and again in 2015 with the original branding details: the Nike Air logo on the tongue and the original clean heel without the Jumpman logo.",image:"https://image.goat.com/240/attachments/product_template_pictures/images/060/556/759/original/815560_00.png.png" ,price:200.00,brand:"Nike", createdAt: new Date(), updatedAt:new Date()},
      {sellerId:2, title:'Nike Dunk Low Black White', shoeSize:12,description:"The Air Jordan 1 Retro High OG 'Chicago' 2015 colorway was designed to avoid Jordan's $5,000-per game fines from the NBA after the original black and red colorway was banned. The 'Chicago' was first retroed in 1994 and stayed true to the 1985 design. Further retros were released in 2013 with small changes to the design, and again in 2015 with the original branding details: the Nike Air logo on the tongue and the original clean heel without the Jumpman logo.",image:"https://image.goat.com/240/attachments/product_template_pictures/images/051/507/240/original/719082_00.png.png" ,price:250.00,brand:"Nike", createdAt: new Date(), updatedAt:new Date()},
      {sellerId:2, title:'Nike Dunk Low Championship Red', shoeSize:12,description:"The Air Jordan 1 Retro High OG 'Chicago' 2015 colorway was designed to avoid Jordan's $5,000-per game fines from the NBA after the original black and red colorway was banned. The 'Chicago' was first retroed in 1994 and stayed true to the 1985 design. Further retros were released in 2013 with small changes to the design, and again in 2015 with the original branding details: the Nike Air logo on the tongue and the original clean heel without the Jumpman logo.",image:"https://image.goat.com/240/attachments/product_template_pictures/images/058/230/945/original/775758_00.png.png" ,price: 335.00,brand:"Nike", createdAt: new Date(), updatedAt:new Date()},
      {sellerId:2, title:'Nike Social Status x Dunk Mid Chocolate Milk', shoeSize:12,description:"The Air Jordan 1 Retro High OG 'Chicago' 2015 colorway was designed to avoid Jordan's $5,000-per game fines from the NBA after the original black and red colorway was banned. The 'Chicago' was first retroed in 1994 and stayed true to the 1985 design. Further retros were released in 2013 with small changes to the design, and again in 2015 with the original branding details: the Nike Air logo on the tongue and the original clean heel without the Jumpman logo.",image:"https://image.goat.com/240/attachments/product_template_pictures/images/060/725/536/original/813521_00.png.png" ,price: 400.00,brand:"Nike", createdAt: new Date(), updatedAt:new Date()},
      {sellerId:2, title:'Nike Dunk Low NY vs NY', shoeSize:12,description:"The Air Jordan 1 Retro High OG 'Chicago' 2015 colorway was designed to avoid Jordan's $5,000-per game fines from the NBA after the original black and red colorway was banned. The 'Chicago' was first retroed in 1994 and stayed true to the 1985 design. Further retros were released in 2013 with small changes to the design, and again in 2015 with the original branding details: the Nike Air logo on the tongue and the original clean heel without the Jumpman logo.",image:"https://image.goat.com/240/attachments/product_template_pictures/images/059/743/421/original/767017_00.png" ,price:718.00,brand:"Nike", createdAt: new Date(), updatedAt:new Date()},
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    await queryInterface.bulkDelete('Shoes', null, {});
  }
};

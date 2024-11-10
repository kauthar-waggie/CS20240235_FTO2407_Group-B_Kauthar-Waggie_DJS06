// Data Sets
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State'];
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie'];
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];

// Basic Exercises

function basicExercises() {
  console.log("Basic Exercises:");

  // ForEach Basics
  names.forEach(name => console.log(name));
  provinces.forEach(province => console.log(province));
  names.forEach((name, index) => {
    console.log(`${name} (${provinces[index]})`);
  });

  // Uppercase Transformation
  const uppercasedProvinces = provinces.map(province => province.toUpperCase());
  console.log(uppercasedProvinces);

  // Name Lengths
  const nameLengths = names.map(name => name.length);
  console.log(nameLengths);

  // Sorting
  const sortedProvinces = [...provinces].sort();
  console.log(sortedProvinces);

  // Filtering Cape
  const filteredProvinces = provinces.filter(province => !province.includes("Cape"));
  console.log(`Remaining provinces count: ${filteredProvinces.length}`);

  // Finding 'S'
  const containsS = names.map(name => name.toLowerCase().includes('s'));
  console.log(containsS);

  // Creating Object Mapping
  const nameProvinceMap = names.reduce((acc, name, index) => {
    acc[name] = provinces[index];
    return acc;
  }, {});
  console.log(nameProvinceMap);
}

basicExercises();  // Call the basic exercises

// Advanced Exercises

function advancedExercises() {
  console.log("\nAdvanced Exercises:");

  // Log Products
  console.log(products.map(product => product.product));


  // Filter by Name Length
  console.log(products.filter(product => product.product.length <= 5));


  // Price Manipulation
  console.log(products
    .filter(product => product.price && !isNaN(product.price))
    .map(product => ({ ...product, price: Number(product.price) }))
    .reduce((total, product) => total + product.price, 0)
  );
  
  

  // Concatenate Product Names
  console.log(products.reduce((acc, product) => acc + product.product, ''));


  // Find Extremes in Prices
  console.log(
    (() => {
      const { highest, lowest } = products
        .filter(product => product.price && !isNaN(product.price))
        .map(product => ({ ...product, price: Number(product.price) }))
        .reduce((acc, product) => ({
          highest: product.price > acc.highest.price ? product : acc.highest,
          lowest: product.price < acc.lowest.price ? product : acc.lowest
        }), { highest: { price: -Infinity }, lowest: { price: Infinity } });
  
      return `Highest: ${highest.product}. Lowest: ${lowest.product}.`;
    })()
  );
  
  

  // Object Transformation
  console.log(Object.entries(products).reduce((acc, [index, product]) => {
    acc[index] = { name: product.product, cost: product.price };
    return acc;
  }, {}));
} 
advancedExercises();  // Call the advanced exercises

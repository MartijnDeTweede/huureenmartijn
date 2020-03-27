interface Product {
  name: string;
  imagePath: string;
  specs: [
    {
      category: string;
      items: string[]
    } []
  ];
}
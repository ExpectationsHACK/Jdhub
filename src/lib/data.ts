export const contact = {
  email: "judeakandu512@gmail.com",
  phoneDisplay: "0916 321 6445",
  phoneTel: "+2349163216445",
  whatsapp: "2349163216445",
};

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${contact.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const stats = [
  { value: "12,400+", label: "Devices traded" },
  { value: "48 hrs", label: "Avg. payout time" },
  { value: "4.8/5", label: "Seller rating" },
];

export type Grade = "A" | "B" | "C" | "D";

export const grades: {
  letter: Grade;
  name: string;
  description: string;
  multiplier: number;
}[] = [
  {
    letter: "A",
    name: "Like New",
    description: "No visible wear. Battery health 90%+. Full original function.",
    multiplier: 1,
  },
  {
    letter: "B",
    name: "Great",
    description: "Light micro-scratches under close light. Battery health 85%+.",
    multiplier: 0.86,
  },
  {
    letter: "C",
    name: "Good",
    description: "Visible wear on frame or back glass. Battery health 80%+.",
    multiplier: 0.72,
  },
  {
    letter: "D",
    name: "Fair",
    description: "Heavier wear, may include small chips. Fully functional.",
    multiplier: 0.52,
  },
];

/** Cash-offer base price for the smallest storage tier in "Like New" condition. */
export const models: { name: string; base: number; storage: string[] }[] = [
  { name: "iPhone 16 Pro Max", base: 760, storage: ["256GB", "512GB", "1TB"] },
  { name: "iPhone 16 Pro", base: 640, storage: ["128GB", "256GB", "512GB", "1TB"] },
  { name: "iPhone 16", base: 470, storage: ["128GB", "256GB", "512GB"] },
  { name: "iPhone 15 Pro Max", base: 580, storage: ["256GB", "512GB", "1TB"] },
  { name: "iPhone 15 Pro", base: 480, storage: ["128GB", "256GB", "512GB", "1TB"] },
  { name: "iPhone 15", base: 360, storage: ["128GB", "256GB", "512GB"] },
  { name: "iPhone 14 Pro Max", base: 440, storage: ["128GB", "256GB", "512GB", "1TB"] },
  { name: "iPhone 14 Pro", base: 380, storage: ["128GB", "256GB", "512GB", "1TB"] },
  { name: "iPhone 14", base: 270, storage: ["128GB", "256GB", "512GB"] },
  { name: "iPhone 13", base: 210, storage: ["128GB", "256GB", "512GB"] },
  { name: "iPhone 12", base: 150, storage: ["64GB", "128GB", "256GB"] },
  { name: "iPhone 11", base: 110, storage: ["64GB", "128GB", "256GB"] },
];

/** Each step up in storage adds this fraction of the base price. */
const STORAGE_STEP = 0.12;

export function estimateOffer(modelName: string, storage: string, grade: Grade) {
  const model = models.find((m) => m.name === modelName);
  const g = grades.find((x) => x.letter === grade);
  if (!model || !g) return 0;
  const tier = Math.max(0, model.storage.indexOf(storage));
  const price = model.base * (1 + tier * STORAGE_STEP) * g.multiplier;
  return Math.round(price / 5) * 5;
}

export type Photo = {
  /** Wikimedia Commons thumbnail (Commons only serves standard widths such as 500px). */
  src: string;
  author: string;
  license: string;
  licenseUrl: string;
  source: string;
};

const commons = (path: string) => {
  const file = path.split("/").pop();
  return `https://upload.wikimedia.org/wikipedia/commons/thumb/${path}/500px-${file}`;
};

const CC_BY_SA = { license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/" };
const CC_BY = { license: "CC BY 4.0", licenseUrl: "https://creativecommons.org/licenses/by/4.0/" };

export const stock: {
  model: string;
  storage: string;
  color: string;
  price: number;
  grade: string;
  photo: Photo;
}[] = [
  {
    model: "iPhone 16 Pro Max",
    storage: "256GB",
    color: "Desert Titanium",
    price: 989,
    grade: "Like New",
    photo: {
      src: commons("e/e2/IPhone_16_Pro_Max_Desert_Titanium_Rear.png"),
      author: "Padgriffin",
      ...CC_BY,
      source: "https://commons.wikimedia.org/wiki/File:IPhone_16_Pro_Max_Desert_Titanium_Rear.png",
    },
  },
  {
    model: "iPhone 15 Pro",
    storage: "256GB",
    color: "Black Titanium",
    price: 689,
    grade: "Like New",
    photo: {
      src: commons("a/ae/IPhone_15_pro.png"),
      author: "Ka Kit Pang",
      ...CC_BY_SA,
      source: "https://commons.wikimedia.org/wiki/File:IPhone_15_pro.png",
    },
  },
  {
    model: "iPhone 15",
    storage: "128GB",
    color: "Black",
    price: 529,
    grade: "Great",
    photo: {
      src: commons("f/f9/Back_of_iPhone_15.jpg"),
      author: "ThePhotoGraphIc",
      ...CC_BY_SA,
      source: "https://commons.wikimedia.org/wiki/File:Back_of_iPhone_15.jpg",
    },
  },
  {
    model: "iPhone 14 Pro",
    storage: "256GB",
    color: "Deep Purple",
    price: 579,
    grade: "Great",
    photo: {
      src: commons("3/37/Back_of_the_iPhone_14_Pro.jpg"),
      author: "Hajoon0102",
      ...CC_BY_SA,
      source: "https://commons.wikimedia.org/wiki/File:Back_of_the_iPhone_14_Pro.jpg",
    },
  },
  {
    model: "iPhone 14",
    storage: "128GB",
    color: "(PRODUCT)RED",
    price: 399,
    grade: "Great",
    photo: {
      src: commons("c/c8/IPhone_14_Product_Red.jpg"),
      author: "Hajoon0102",
      ...CC_BY_SA,
      source: "https://commons.wikimedia.org/wiki/File:IPhone_14_Product_Red.jpg",
    },
  },
  {
    model: "iPhone 13 Pro",
    storage: "128GB",
    color: "Alpine Green",
    price: 449,
    grade: "Great",
    photo: {
      src: commons("9/91/Back_of_the_iPhone_13_Pro.jpg"),
      author: "Hajoon0102",
      ...CC_BY_SA,
      source: "https://commons.wikimedia.org/wiki/File:Back_of_the_iPhone_13_Pro.jpg",
    },
  },
  {
    model: "iPhone 12",
    storage: "64GB",
    color: "Blue",
    price: 229,
    grade: "Good",
    photo: {
      src: commons("8/8a/IPhone_12_-_3.jpg"),
      author: "KKPCW",
      ...CC_BY_SA,
      source: "https://commons.wikimedia.org/wiki/File:IPhone_12_-_3.jpg",
    },
  },
  {
    model: "iPhone 11",
    storage: "128GB",
    color: "(PRODUCT)RED",
    price: 199,
    grade: "Good",
    photo: {
      src: commons("4/48/IPhone_11_RED.jpg"),
      author: "Ahmadkurdi44",
      ...CC_BY_SA,
      source: "https://commons.wikimedia.org/wiki/File:IPhone_11_RED.jpg",
    },
  },
  {
    model: "iPhone SE (3rd gen)",
    storage: "64GB",
    color: "(PRODUCT)RED",
    price: 179,
    grade: "Great",
    photo: {
      src: commons("3/36/Back_of_the_iPhone_SE_%283rd_generation%29.jpg"),
      author: "Hajoon0102",
      ...CC_BY_SA,
      source: "https://commons.wikimedia.org/wiki/File:Back_of_the_iPhone_SE_(3rd_generation).jpg",
    },
  },
  {
    model: "iPhone XR",
    storage: "128GB",
    color: "White",
    price: 149,
    grade: "Good",
    photo: {
      src: commons("6/65/Back_view_of_iPhone_XR_white.jpg"),
      author: "メイド理世",
      ...CC_BY_SA,
      source: "https://commons.wikimedia.org/wiki/File:Back_view_of_iPhone_XR_white.jpg",
    },
  },
];

export const services = [
  {
    name: "Screen Repair",
    description: "Same-day screen replacement, all iPhone models.",
    price: 45,
  },
  {
    name: "Battery Replacement",
    description: "Genuine-grade battery swap with health check.",
    price: 35,
  },
  {
    name: "Free Trade-In Evaluation",
    description: "Bring your device in for a no-obligation valuation.",
    price: 0,
  },
];

export const swapSteps = [
  {
    title: "Tell us about your phone",
    description: "Model, storage, and condition — takes under a minute, no account needed.",
  },
  {
    title: "Get your locked offer",
    description: "We show you exact trade-in value against any in-stock phone you want.",
  },
  {
    title: "Ship or swap in person",
    description:
      "Mail your old device in a prepaid box, or bring it to a JDHub counter and walk out with the new one.",
  },
];

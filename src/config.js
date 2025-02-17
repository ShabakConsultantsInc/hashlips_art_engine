const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.sol;
// 20220808, Wallet:  HwDhm5d8yYuR7i5vWcQLifTTaEf68oAUEzEi1UGm79We //F8Q5zX1ygU6YLLqPw1CkcDtzynUHLnjqd2A32KpkgNqE
// other:  44pWCvFRqLw1gw6c4bVhbHW1jzETFvNUkDZeEUtxhquc
// quicknode:  RPC - https://boldest-still-surf.solana-devnet.discover.quiknode.pro/19284833cf2366e45cefca47224e189f86405fc9/
// wss:  wss://boldest-still-surf.solana-devnet.discover.quiknode.pro/19284833cf2366e45cefca47224e189f86405fc9/

// General metadata for Ethereum
const namePrefix = "Magic Sea Launch Logos";
const description = "A limited collection of Magic Sea LLC logos";
const baseUri = "ipfs://NewUriToReplace";

const solanaMetadata = {
  symbol: "MSL",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com/c/hashlipsnft",
  creators: [
    {
      address: "HwDhm5d8yYuR7i5vWcQLifTTaEf68oAUEzEi1UGm79We",
      share: 50,
    },
    {
      address: "44pWCvFRqLw1gw6c4bVhbHW1jzETFvNUkDZeEUtxhquc",
      share: 50,
    }
  ],

};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 5,
    layersOrder: [
      { name: "Background" },
      { name: "Logo" },
    ],
  },
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 1080,
  height: 1080,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {
  creator: "Magic Sea LLC",
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};

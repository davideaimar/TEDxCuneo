# TEDxCuneo website

This is the repository of the [TEDxCuneo](https://www.tedxcuneo.com) website, it's built following the JAMstack paradigm, you can learn more about it on their [website](https://jamstack.org/).\
Based on [this starter](https://github.com/gregwolanski/eleventy-tailwindcss-alpinejs-starter), uses Eleventy as SSG + TailwindCSS + Alpine.js and Contentful as CMS (but the CMS can be easily changed).\
You can use this repository for building the website of your TEDx event or just for taking inspiration.

## Getting Started

### 0. (optional) Create your own Contentful space 

If you want to recreate the exact Contentful structure that we use, you can use export file `contentful_schema.json` and follow the [Contentful guide](https://www.contentful.com/developers/docs/tutorials/cli/import-and-export/) on how to import it in your space.\
A free tier shoud be enough in most cases.

### 1. Install the dependencies

```
npm install
```

### 2. Create .env file

Create a file called `.env` in the project root folder and put these envirroments variables (with their values, keep them secret):
```
CONTENTFUL_SPACE_ID=
CONTENTFUL_ACCESS_TOKEN=
DEBUG=true
```
DEBUG variable is used to display the pages that are hidden from the CMS.


### 3. Build the project to generate the first CSS

This step is only required the very first time.

```
npm run build
```

### 4. Run Eleventy

```
npm run dev
```

You can easily deploy it on a fre tier of Netlify or similar platform, making it 100% free (apart from the domain).\

## License

This project is licensed under the terms of the Apache 2.0 license.\

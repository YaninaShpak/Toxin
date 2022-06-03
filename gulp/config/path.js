//Пути

//Получаем имя папки проекта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`;
const srcFolder = `./app`;

export const path = {

  build: {
    js: `${buildFolder}/js/`,
    images: `${buildFolder}/img/`,
    css: `${buildFolder}/css/`,
    html: `${buildFolder}/`,
    fonts: `${buildFolder}/fonts/`,
    favicon: `${buildFolder}/`
  },

  src: {
    js: `${srcFolder}/js/*.js`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
    svg: `${srcFolder}/img/**/*.svg`,
    scss: `${srcFolder}/scss/style.scss`,
    html: `${srcFolder}/*.html`,
    svgicons: `${srcFolder}/svgicons/*.svg`,
    favicon: `${srcFolder}/*ico`
  },

  watch: {
    js: `${srcFolder}/js/**/*.js`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
    scss: `${srcFolder}/scss/**/*.scss`,
    html: `${srcFolder}/**/*.html`
  },
  
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: ``
}
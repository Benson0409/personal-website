import { zh } from './zh/index';
import { en } from './en/index';

// 共用變數：個人照片
export const YOUR_PROFILE_IMAGE_URL = "/img/benson.jpg";

// 共用的聯絡資訊 (合併到 zh 和 en 物件中，讓結構保持一致)
const commonData = {
    githubUrl: "https://github.com/Benson0409",
    contactEmail: "benson5508@gmail.com",
};

export const portfolioData = {
    zh: {
        ...commonData,
        ...zh
    },
    en: {
        ...commonData,
        ...en
    }
};
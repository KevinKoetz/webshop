import { v5 as uuid } from "uuid";

type picture = {
  id: string;
  artist: string;
  thumbnailUrl: string;
  description: string;
  price: number;
};

export const pictures: picture[] = [
  {
    id: uuid(
      "https://picon.ngfiles.com/760000/flash_760243_largest_crop.png?f1600891340",
      uuid.URL
    ),
    artist: "Velma Dinkley",
    thumbnailUrl:
      "https://picon.ngfiles.com/760000/flash_760243_largest_crop.png?f1600891340",
    description: "Velma has drawn is awesome picture of Scooby Doo himself!",
    price: 2000,
  },
  {
    id: uuid(
      "https://filme10.com.br/wp-content/uploads/2021/04/salsicha-scooby-doo.jpg",
      uuid.URL
    ),
    artist: "Scooby Doo",
    thumbnailUrl:
      "https://filme10.com.br/wp-content/uploads/2021/04/salsicha-scooby-doo.jpg",
    description: "A Picture of his best Friend, Shaggy Rogers.",
    price: 1400,
  },
  {
    id: uuid(
      "https://vignette.wikia.nocookie.net/wbeverything/images/1/10/Fredjones.png/revision/latest?cb=20140622012404",
      uuid.URL
    ),
    artist: "Scooby Doo",
    thumbnailUrl:
      "https://vignette.wikia.nocookie.net/wbeverything/images/1/10/Fredjones.png/revision/latest?cb=20140622012404",
    description: "Fred Jones, what a handsome Man!",
    price: 1699,
  },
  {
    id: uuid(
      "https://vignette.wikia.nocookie.net/warner-bros-characters/images/f/fe/Velma_Dinkley_(SDMI).png/revision/latest?cb=20160429181208",
      uuid.URL
    ),
    artist: "Scooby Doo",
    thumbnailUrl:
      "https://vignette.wikia.nocookie.net/warner-bros-characters/images/f/fe/Velma_Dinkley_(SDMI).png/revision/latest?cb=20160429181208",
    description: "Velma Dinkley, surely she is one of a Kind!",
    price: 1799,
  },
  {
    id: uuid(
      "https://img.acunn.com/foto/1200x600/uploads/icerikler/2019/03/05/warner-bros-dan-animasyon-scooby-doo-filmi-geliyor-scooby-filmloverss120449075c7e317540890.jpg",
      uuid.URL
    ),
    artist: "Scooby Doo",
    thumbnailUrl:
      "https://img.acunn.com/foto/1200x600/uploads/icerikler/2019/03/05/warner-bros-dan-animasyon-scooby-doo-filmi-geliyor-scooby-filmloverss120449075c7e317540890.jpg",
    description: "The whole Gang at once.",
    price: 2499,
  },
  {
    id: uuid("/images/1.jpg", uuid.URL),
    artist: "Unknown Artist",
    thumbnailUrl: "/images/1.jpg",
    description: "A beautiful Picture",
    price: 9999,
  },
  {
    id: uuid("/images/2.jpg", uuid.URL),
    artist: "Unknown Artist",
    thumbnailUrl: "/images/2.jpg",
    description: "A beautiful Picture",
    price: 9999,
  },
  {
    id: uuid("/images/3.jpg", uuid.URL),
    artist: "Unknown Artist",
    thumbnailUrl: "/images/3.jpg",
    description: "A beautiful Picture",
    price: 9999,
  },
  {
    id: uuid("/images/4.jpg", uuid.URL),
    artist: "Unknown Artist",
    thumbnailUrl: "/images/4.jpg",
    description: "A beautiful Picture",
    price: 9999,
  },
  {
    id: uuid("/images/5.jpg", uuid.URL),
    artist: "Unknown Artist",
    thumbnailUrl: "/images/5.jpg",
    description: "A beautiful Picture",
    price: 9999,
  },
  {
    id: uuid("/images/6.jpg", uuid.URL),
    artist: "Unknown Artist",
    thumbnailUrl: "/images/6.jpg",
    description: "A beautiful Picture",
    price: 9999,
  },
  {
    id: uuid("/images/7.jpg", uuid.URL),
    artist: "Unknown Artist",
    thumbnailUrl: "/images/7.jpg",
    description: "A beautiful Picture",
    price: 9999,
  },
];

export type PicturesQueryParams = {
  page?: number;
  perPage?: number;
  artist?: string;
  minPrice?: number;
  maxPrice?: number;
  id?: string;
};

export const getPictures = ({
  page,
  perPage,
  artist,
  minPrice,
  maxPrice,
  id,
}: PicturesQueryParams) => {
  const filteredPictures = pictures.filter(
    (picture) =>
      picture.id === (id ? id : picture.id) &&
      picture.artist
        .toLowerCase()
        .includes((artist ? artist : picture.artist).toLowerCase()) &&
      picture.price >= (minPrice ? minPrice : 0) &&
      picture.price <= (maxPrice ? maxPrice : Infinity)
  );
  perPage = perPage ? (perPage < 1 ? 1 : perPage) : filteredPictures.length;
  const pages = Math.ceil(filteredPictures.length / perPage);
  page = page ? (page < 1 ? 1 : page > pages ? pages : page) : 1;


  return {
    pages,
    page,
    pictures: filteredPictures.slice((page - 1) * perPage, perPage * page),
  };
};

export const parsePictureQueryParams = (test: unknown) => {
  const queryParams: PicturesQueryParams = {};
  if (typeof test !== "object") return queryParams;
  if (test === null) return queryParams;
  if ("page" in test) {
    const obj = test as { page: unknown };
    if (typeof obj.page === "string") {
      const number = Number.parseInt(obj.page);
      if (!Number.isNaN(number)) queryParams.page = number;
    }
  }
  if ("perPage" in test) {
    const obj = test as { perPage: unknown };
    if (typeof obj.perPage === "string") {
      const number = Number.parseInt(obj.perPage);
      if (!Number.isNaN(number)) queryParams.perPage = number;
    }
  }
  if ("artist" in test) {
    const obj = test as { artist: unknown };
    if (typeof obj.artist === "string") queryParams.artist = obj.artist;
  }
  if ("minPrice" in test) {
    const obj = test as { minPrice: unknown };
    if (typeof obj.minPrice === "string") {
      const number = Number.parseInt(obj.minPrice);
      if (!Number.isNaN(number)) queryParams.minPrice = number;
    }
  }
  if ("maxPrice" in test) {
    const obj = test as { maxPrice: unknown };
    if (typeof obj.maxPrice === "string") {
      const number = Number.parseInt(obj.maxPrice);
      if (!Number.isNaN(number)) queryParams.maxPrice = number;
    }
  }
  if ("id" in test) {
    const obj = test as { id: unknown };
    if (typeof obj.id === "string") queryParams.id = obj.id;
  }

  return queryParams;
};

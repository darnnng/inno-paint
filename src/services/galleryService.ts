import { collection, query, where } from 'firebase/firestore';
import { db } from '../firebase';

export interface IGalleryService {
  getAllImages: () => void;
  getCertainImages: (user: string) => void;
}
class GalleryService implements IGalleryService {
  getAllImages() {
    const imagesCollection = collection(db, 'images');
    const allImagesQuery = query(imagesCollection);
    return allImagesQuery;
  }

  getCertainImages(user: string) {
    const imagesCollection = collection(db, 'images');
    const imagesQuery = query(imagesCollection, where('email', '==', user));
    return imagesQuery;
  }
}

export const galleryService = new GalleryService();
